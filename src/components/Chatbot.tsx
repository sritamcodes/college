"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Bot, Minus } from "lucide-react";

type Message = {
  id: number;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
};

const INITIAL_MESSAGE: Message = {
  id: 0,
  text: "Hello! I'm your LIT Bro. How can I help you today? You can ask me about admissions, placements, notes, or our courses.",
  sender: "bot",
  timestamp: new Date(),
};

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([INITIAL_MESSAGE]);
  const [isTyping, setIsTyping] = useState(false);
  const [streamingText, setStreamingText] = useState("");

  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, streamingText, isTyping]);

  const handleSend = async () => {
    if (!input.trim() || isTyping || streamingText) return;

    const userInput = input.trim();

    const userMessage: Message = {
      id: Date.now(),
      text: userInput,
      sender: "user",
      timestamp: new Date(),
    };

    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    setInput("");
    setIsTyping(true);

    try {
      // Map messages to format expected by Hugging Face
      // Ensure the first message is always from the user to satisfy API requirements
      const hfMessages = newMessages
        .filter((msg, index) => index > 0 || msg.sender === "user")
        .map((msg) => ({
          role: msg.sender === "user" ? "user" : "assistant",
          content: msg.text,
        }));

      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messages: hfMessages,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Chat request failed");
      }

      // Read the stream
      const reader = response.body?.getReader();
      const decoder = new TextDecoder();
      let accumulatedText = "";

      setIsTyping(false);

      if (reader) {
        let buffer = "";
        while (true) {
          const { done, value } = await reader.read();
          if (done) break;

          buffer += decoder.decode(value, { stream: true });
          const lines = buffer.split("\n");
          buffer = lines.pop() || ""; // Keep the last (potentially partial) line in the buffer

          for (const line of lines) {
            const cleanedLine = line.trim();
            if (!cleanedLine || !cleanedLine.startsWith("data: ")) continue;

            const data = cleanedLine.slice(6);
            if (data === "[DONE]") break;

            try {
              const json = JSON.parse(data);
              const content = json.choices?.[0]?.delta?.content || "";
              if (content) {
                accumulatedText += content;
          
              }
            } catch (e) {
              // Ignore partial JSON chunks
            }
          }
        }
      }

      const conciseAnswer = (() => {
  // If the answer contains line breaks, keep up to 4 lines
  const lineParts = accumulatedText.split('\n').filter(Boolean);
  if (lineParts.length > 1) {
    return lineParts.slice(0, 4).join('\n');
  }
  // Otherwise, split by period and keep only the first sentence
  const sentence = accumulatedText.split('. ')[0];
  return sentence.endsWith('.') ? sentence : sentence + '.';
})();
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          text: conciseAnswer || "I couldn't generate a response.",
          sender: "bot",
          timestamp: new Date(),
        },
      ]);

      setStreamingText("");
    } catch (error: any) {
      console.error("CHATBOT ERROR:", error);

      setIsTyping(false);

      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          text: error.message.includes("HF_TOKEN")
            ? "API Token Missing: Please add your HF_TOKEN to the .env.local file."
            : "I'm sorry, I'm having trouble connecting right now. " + error.message,
          sender: "bot",
          timestamp: new Date(),
        },
      ]);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[9999] pointer-events-auto">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.8,
              y: 20,
              transformOrigin: "bottom right",
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              scale: 0.8,
              y: 20,
            }}
            className="mb-4 w-[350px] sm:w-[400px] h-[500px]
            bg-white dark:bg-gray-900 rounded-[2.5rem]
            shadow-2xl border border-gray-100 dark:border-gray-800
            flex flex-col overflow-hidden"
          >
            {/* HEADER */}
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-6 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-xl bg-white/20
                  backdrop-blur-md flex items-center justify-center"
                >
                  <Bot className="text-white w-6 h-6" />
                </div>

                <div>
                  <h3 className="text-white font-bold font-outfit">
                    LIT Bro
                  </h3>

                  <div className="flex items-center gap-1.5">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />

                    <span
                      className="text-blue-100 text-[10px]
                      uppercase font-bold tracking-widest"
                    >
                      Online
                    </span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => setIsOpen(false)}
                className="p-2 hover:bg-white/10 rounded-lg
                text-white transition-colors"
              >
                <Minus className="w-5 h-5" />
              </button>
            </div>

            {/* CHAT AREA */}
            <div
              ref={scrollRef}
              className="flex-grow p-6 overflow-y-auto
              space-y-4 bg-gray-50/50 dark:bg-gray-950/50"
            >
              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{
                    opacity: 0,
                    x: msg.sender === "user" ? 10 : -10,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                  }}
                  className={`flex ${msg.sender === "user"
                    ? "justify-end"
                    : "justify-start"
                    }`}
                >
                  <div
                    className={`max-w-[80%] p-4 rounded-2xl text-sm
                    leading-relaxed shadow-sm ${msg.sender === "user"
                        ? "bg-blue-600 text-white rounded-tr-none"
                        : "bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 border border-gray-100 dark:border-gray-700 rounded-tl-none"
                      }`}
                  >
                    {msg.text}
                  </div>
                </motion.div>
              ))}

  
  </div>


              {/* TYPING */}
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex justify-start"
                >
                  <div className="max-w-[80%] p-4 rounded-2xl bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700">
                    <div className="space-y-2">
                      <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-3/4 animate-pulse"></div>
                      <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-1/2 animate-pulse"></div>
                    </div>
                  </div>
                </motion.div>
              )}
            

            {/* INPUT */}
            <div
              className="p-4 bg-white dark:bg-gray-900
              border-t border-gray-100 dark:border-gray-800"
            >
              <div className="relative flex items-center">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      handleSend();
                    }
                  }}
                  placeholder="Type your message..."
                  className="w-full pl-5 pr-12 py-3.5
                  bg-gray-50 dark:bg-gray-800 border-none
                  rounded-2xl text-sm focus:ring-2
                  focus:ring-blue-600 transition-all dark:text-white"
                />

                <button
                  onClick={handleSend}
                  disabled={
                    !input.trim() || isTyping || !!streamingText
                  }
                  className="absolute right-2 p-2 bg-blue-600
                  text-white rounded-xl hover:bg-blue-700
                  disabled:opacity-50 disabled:hover:bg-blue-600
                  transition-all shadow-lg shadow-blue-500/20"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* TOGGLE BUTTON */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 rounded-2xl
        bg-gradient-to-r from-blue-600 to-indigo-600
        shadow-2xl shadow-blue-500/40 flex
        items-center justify-center text-white
        relative group overflow-hidden"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
            >
              <X className="w-7 h-7" />
            </motion.div>
          ) : (
            <motion.div
              key="open"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
            >
              <MessageCircle className="w-7 h-7" />
            </motion.div>
          )}
        </AnimatePresence>

        {!isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute -top-12 right-0 bg-white
            dark:bg-gray-900 px-4 py-2 rounded-xl shadow-xl
            border border-gray-100 dark:border-gray-800
            pointer-events-none"
          >
            <span
              className="text-[10px] font-bold
              text-blue-600 whitespace-nowrap"
            >
              Need help? Chat now!
            </span>

            <div
              className="absolute -bottom-1 right-6 w-2 h-2
              bg-white dark:bg-gray-900 rotate-45
              border-r border-b border-gray-100
              dark:border-gray-800"
            />
          </motion.div>
        )}
      </motion.button>
    </div>
  );
}