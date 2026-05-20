"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

interface RealisticBookProps {
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
}

export default function RealisticBook({ children, title = "Academic Excellence", subtitle = "Interactive Learning" }: RealisticBookProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const smoothScroll = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Controls for the cover
  const rotateY = useTransform(smoothScroll, [0.1, 0.4], [0, -120]);
  const coverOpacity = useTransform(smoothScroll, [0.1, 0.25], [1, 0]);
  const contentOpacity = useTransform(smoothScroll, [0.3, 0.5], [0, 1]);
  const contentScale = useTransform(smoothScroll, [0.3, 0.5], [0.9, 1]);
  
  // Controls for the 3D feel
  const bookX = useTransform(smoothScroll, [0.1, 0.4], ["0%", "5%"]);
  const bookRotateZ = useTransform(smoothScroll, [0.1, 0.4], [0, -2]);

  return (
    <section ref={containerRef} className="relative min-h-[180vh] py-32 perspective-3000 overflow-hidden">
      <div className="sticky top-20 w-full max-w-7xl mx-auto h-[80vh] flex items-center justify-center px-4">
        
        {/* Main Book Structure */}
        <motion.div 
          style={{ x: bookX, rotateZ: bookRotateZ }}
          className="relative w-full h-full max-w-5xl preserve-3d"
        >
          {/* Back Cover / Content Base */}
          <div className="absolute inset-0 bg-white dark:bg-gray-900 rounded-r-[2.5rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)] dark:shadow-none border border-gray-100 dark:border-gray-800 overflow-hidden">
            
            {/* The "Pages" thickness effect */}
            <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-gray-200 to-white dark:from-gray-800 dark:to-gray-900 z-10" />
            
            <motion.div 
              style={{ opacity: contentOpacity, scale: contentScale }}
              className="relative z-20 w-full h-full overflow-y-auto custom-scrollbar p-12"
            >
              {children}
            </motion.div>
          </div>

          {/* Front Cover */}
          <motion.div
            style={{ 
              rotateY, 
              transformOrigin: "left center",
              zIndex: 30
            }}
            className="absolute inset-0 bg-gradient-to-br from-blue-700 via-blue-800 to-indigo-900 rounded-r-[2.5rem] shadow-2xl border-l-[12px] border-blue-950 flex flex-col items-center justify-center p-12 text-white overflow-hidden"
          >
            {/* Inner Cover (revealed as it turns) */}
            <div className="absolute inset-0 bg-blue-900/10 backdrop-blur-sm transform rotate-y-180 backface-hidden" />

            <motion.div style={{ opacity: coverOpacity }} className="relative z-10 text-center">
              <div className="mb-12">
                <div className="w-32 h-40 border-4 border-white/20 rounded-2xl mx-auto flex flex-col items-center justify-center p-6 bg-white/5 backdrop-blur-md">
                   <div className="w-full h-1 bg-white/30 rounded-full mb-2" />
                   <div className="w-2/3 h-1 bg-white/30 rounded-full mb-2" />
                   <div className="w-full h-1 bg-white/30 rounded-full" />
                </div>
              </div>
              
              <h2 className="text-5xl md:text-7xl font-bold font-outfit mb-6 tracking-tight">
                {title}
              </h2>
              <div className="h-1.5 w-24 bg-blue-400 mx-auto mb-8 rounded-full" />
              <p className="text-xl text-blue-100 font-medium tracking-[0.4em] uppercase opacity-80">
                {subtitle}
              </p>
              
              <motion.div 
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="mt-20 flex flex-col items-center gap-2"
              >
                <div className="w-0.5 h-12 bg-gradient-to-b from-white/60 to-transparent" />
                <span className="text-sm font-bold text-white/40 uppercase tracking-widest">Scroll to Begin</span>
              </motion.div>
            </motion.div>

            {/* Book Spine Highlight */}
            <div className="absolute left-0 top-0 bottom-0 w-2 bg-white/10" />
            <div className="absolute left-4 top-10 bottom-10 w-[1px] bg-white/5" />
          </motion.div>

          {/* Book Edge (The Pages Stack) */}
          <div className="absolute -right-2 top-4 bottom-4 w-6 bg-gray-100 dark:bg-gray-800 rounded-r-xl border border-gray-200 dark:border-gray-700 z-0" />
          <div className="absolute -right-4 top-8 bottom-8 w-6 bg-gray-50 dark:bg-gray-900 rounded-r-xl border border-gray-200 dark:border-gray-800 z-[-1]" />
        </motion.div>
      </div>
    </section>
  );
}
