"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const MOTIVATIONAL_QUOTES = [
  { text: "Innovation is the calling of our time.", sub: "Your journey starts here." },
  { text: "The best way to predict the future", sub: "is to create it." },
  { text: "Success is where preparation", sub: "and opportunity meet." },
  { text: "Excellence is not an act,", sub: "but a habit." },
  { text: "Education is the key to", sub: "unlocking the world." },
  { text: "Design is not just what it looks like.", sub: "Design is how it works." },
  { text: "Logic will get you from A to B.", sub: "Imagination takes you everywhere." },
  { text: "Don't wait for opportunity.", sub: "Create it." },
  { text: "Learning never exhausts", sub: "the human mind." },
  { text: "Your future is created by", sub: "what you do today." },
];

export default function PageReveal({ children }: { children: React.ReactNode }) {
  const [phase, setPhase] = useState<"loading" | "quote" | "complete">("loading");
  const [mounted, setMounted] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedQuote, setSelectedQuote] = useState(MOTIVATIONAL_QUOTES[0]);

  const words = ["Dream", "Design", "Develop", "Deliver"];

  useEffect(() => {
    setMounted(true);
    setSelectedQuote(MOTIVATIONAL_QUOTES[Math.floor(Math.random() * MOTIVATIONAL_QUOTES.length)]);
    

    // Phase 1: Words Loop
    const wordInterval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % words.length);
    }, 250);

    // Phase 2: Show Quote
    const quoteTimer = setTimeout(() => {
      clearInterval(wordInterval);
      setPhase("quote");
    }, 1200);

    // Phase 3: Complete
    const completeTimer = setTimeout(() => {
      setPhase("complete");
    }, 2800);

    return () => {
      clearInterval(wordInterval);
      clearTimeout(quoteTimer);
      clearTimeout(completeTimer);
    };
  }, []);

  if (!mounted) return <div className="bg-black fixed inset-0 z-[100]" />;

  return (
    <>
      <AnimatePresence mode="wait">
        {phase !== "complete" && (
          <motion.div
            key="loader-container"
            initial={{ opacity: 1 }}
            exit={{ 
              y: "-100%", 
              transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } 
            }}
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black text-white"
          >
            <AnimatePresence mode="wait">
              {phase === "loading" ? (
                <motion.div
                  key="words"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="flex flex-col items-center"
                >
                  <div className="relative h-20 md:h-32 flex items-center justify-center w-screen">
                    {words.map((word, i) => (
                      <motion.span
                        key={word}
                        initial={{ y: "100%", opacity: 0 }}
                        animate={{ 
                          y: i === currentIndex ? 0 : "100%",
                          opacity: i === currentIndex ? 1 : 0,
                        }}
                        transition={{ duration: 0.4, ease: [0.33, 1, 0.68, 1] }}
                        className="absolute text-4xl md:text-7xl font-bold font-outfit tracking-tighter"
                      >
                        {word}.
                      </motion.span>
                    ))}
                  </div>
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "200px" }}
                    transition={{ duration: 2, ease: "easeInOut" }}
                    className="h-0.5 bg-blue-600 mt-12"
                  />
                </motion.div>
              ) : (
                <motion.div
                  key="quote"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.8 }}
                  className="px-6 text-center max-w-4xl"
                >
                  <blockquote className="text-3xl md:text-5xl font-outfit font-light italic leading-tight text-blue-100">
                    "{selectedQuote.text} <br />
                    <span className="text-blue-500 font-bold not-italic">{selectedQuote.sub}"</span>
                  </blockquote>
                  <motion.p 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="mt-12 text-sm tracking-[0.5em] uppercase text-white/40 font-bold"
                  >
                    Lakshya Institute of Technology
                  </motion.p>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-20">
              <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-blue-600/30 blur-[120px]" />
              <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-indigo-600/30 blur-[120px]" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        animate={{ 
          scale: phase !== "complete" ? 0.95 : 1,
          opacity: phase !== "complete" ? 0 : 1,
        }}
        transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
      >
        {children}
      </motion.div>
    </>
  );
}
