"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { GraduationCap } from "lucide-react";

interface BookLandingProps {
  children: React.ReactNode;
}

export default function BookLanding({ children }: BookLandingProps) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Automatically open after a short delay
    const timer = setTimeout(() => setIsOpen(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden perspective-2000">
      {/* The Actual Content (behind the doors) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: isOpen ? 1 : 0, scale: isOpen ? 1 : 0.9 }}
        transition={{ duration: 1.2, ease: "easeOut", delay: 0.5 }}
        className="w-full h-full"
      >
        {children}
      </motion.div>

      {/* Book Doors Overlay */}
      <AnimatePresence>
        {!isOpen && (
          <div className="fixed inset-0 z-[100] flex pointer-events-none">
            {/* Left Door */}
            <motion.div
              initial={{ rotateY: 0 }}
              animate={{ rotateY: isOpen ? -110 : 0 }}
              exit={{ rotateY: -110 }}
              transition={{ duration: 1.5, ease: [0.45, 0, 0.55, 1] }}
              style={{ transformOrigin: "left" }}
              className="flex-1 h-full bg-blue-700 shadow-[20px_0_50px_rgba(0,0,0,0.5)] flex items-center justify-end border-r-2 border-blue-900 z-50 pointer-events-auto"
            >
              <div className="mr-8 text-right">
                <GraduationCap className="w-16 h-16 text-white/20 mb-4 ml-auto" />
                <h2 className="text-3xl font-bold text-white font-outfit uppercase tracking-tighter">Lakshya</h2>
              </div>
            </motion.div>

            {/* Right Door */}
            <motion.div
              initial={{ rotateY: 0 }}
              animate={{ rotateY: isOpen ? 110 : 0 }}
              exit={{ rotateY: 110 }}
              transition={{ duration: 1.5, ease: [0.45, 0, 0.55, 1] }}
              style={{ transformOrigin: "right" }}
              className="flex-1 h-full bg-blue-600 shadow-[-20px_0_50px_rgba(0,0,0,0.5)] flex items-center justify-start border-l-2 border-blue-800 z-50 pointer-events-auto"
            >
              <div className="ml-8">
                <GraduationCap className="w-16 h-16 text-white/20 mb-4" />
                <h2 className="text-3xl font-bold text-white font-outfit uppercase tracking-tighter">Institute</h2>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
      
      {/* Flash effect when opening */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: isOpen ? 0 : 0.2 }}
        className="fixed inset-0 bg-white z-[101] pointer-events-none"
      />
    </div>
  );
}
