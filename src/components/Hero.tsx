"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { ArrowRight, Download, Sparkles } from "lucide-react";

export default function Hero() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Simplified spring for performance
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const scale = useTransform(smoothProgress, [0, 1], [1, 0.9]);
  const opacity = useTransform(smoothProgress, [0, 0.5], [1, 0]);
  const y = useTransform(smoothProgress, [0, 1], ["0%", "10%"]);
  const textY = useTransform(smoothProgress, [0, 1], [0, 50]);

  return (
    <section ref={containerRef} className="relative h-[110vh] w-full overflow-hidden bg-black">
      {/* Background Image with optimized Parallax */}
      <motion.div 
        style={{ scale, opacity }}
        className="sticky top-0 h-screen w-full z-0 overflow-hidden will-change-transform"
      >
        <motion.div
          style={{ y }}
          className="relative w-full h-full will-change-transform"
        >
          <Image
            src="/college.png"
            alt="College Campus"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black" />
          <div className="absolute inset-0 bg-black/40" />
          
          {/* Direct Image Overlay Label */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 6, duration: 3 }}
            className="absolute bottom-32 left-12 hidden md:block max-w-sm"
          >
            <p className="text-white/80 text-base font-light leading-relaxed mb-8 tracking-wide">
              LIT is a pioneer in computer science education, 
              fostering a culture of excellence and real-world 
              impact through advanced technical training.
            </p>
            <div className="flex items-center gap-4 text-blue-400 font-outfit">
              <div className="w-16 h-[2px] bg-blue-600" />
              <span className="text-sm tracking-[0.5em] uppercase font-black">Innovation Hub</span>
            </div>
          </motion.div>

          {/* New achievement tag to fill emptiness */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 5, duration: 3 }}
            className="absolute top-1/2 right-12 hidden lg:flex flex-col gap-2 items-end"
          >
            <span className="text-[10px] tracking-[0.4em] uppercase text-white/30 font-bold">Current Status</span>
            <div className="flex items-center gap-3 px-4 py-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-full">
               <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
               <span className="text-xs text-white/80 font-medium whitespace-nowrap tracking-wide">Admissions Open 2026</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Massive Background Text */}
        <motion.div 
          style={{ y: textY }}
          className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden will-change-transform"
        >
          <span className="text-[30vw] font-black text-white/[0.03] uppercase tracking-tighter leading-none">
            LIT
          </span>
        </motion.div>
      </motion.div>

      {/* Content */}
      <div className="relative z-10 h-screen w-full flex items-center justify-center">
        <motion.div 
          style={{ y: textY, opacity }}
          className="text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto will-change-transform"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 6, ease: "easeOut" }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-semibold bg-white/10 backdrop-blur-md text-blue-400 border border-white/10 mb-8">
              <Sparkles className="w-4 h-4" />
              Empowering Future Leaders
            </span>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight text-white mb-8 font-outfit leading-[1.1]">
              Shaping Your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-blue-500">
                Future Today
              </span>
            </h1>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 4, delay: 2, ease: "easeOut" }}
          >
            <p className="mt-8 text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto font-light leading-relaxed tracking-wide">
              Welcome to Lakshya Institute of Technology (LIT), where we bridge the gap between education and industry. 
              Our mission is to nurture the next generation of tech innovators through hands-on learning, 
              global exposure, and academic excellence.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 4, delay: 2.5, ease: "easeOut" }}
            className="mt-12 flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <Link
              href="/courses"
              className="group relative inline-flex items-center justify-center px-10 py-5 text-lg font-bold text-white transition-all duration-300 bg-blue-600 rounded-full hover:bg-blue-700 shadow-[0_0_40px_-10px_rgba(37,99,235,0.5)]"
            >
              Explore Programs
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <button
              onClick={() => {
                ['cs.jpg', 'ds.jpg', 'bca.jpg', 'itm.jpg'].forEach(file => {
                  const link = document.createElement('a');
                  link.href = `/${file}`;
                  link.download = file;
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                });
              }}
              className="group relative inline-flex items-center justify-center px-10 py-5 text-lg font-bold text-white transition-all duration-300 bg-white/5 backdrop-blur-xl border border-white/20 rounded-full hover:bg-white/10"
            >
              Download Full Syllabus
              <Download className="w-5 h-5 ml-2 group-hover:translate-y-1 transition-transform" />
            </button>
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute bottom-24 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-4">
        <motion.span            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 6, duration: 4 }}
          className="text-[10px] tracking-[0.4em] uppercase font-bold text-white/40 whitespace-nowrap"
        >
          Scroll for more
        </motion.span>
        <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center p-1">
          <motion.div 
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-1 h-2 bg-white/60 rounded-full" 
          />
        </div>
      </div>
    </section>
  );
}

