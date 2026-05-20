"use client";

import Link from "next/link";
import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";
import { ArrowUpRight, Clock, Award, Star } from "lucide-react";
import { MouseEvent } from "react";

interface CourseCardProps {
  id: string;
  title: string;
  description: string;
  duration: string;
  icon: React.ReactNode;
  color: string;
}

export default function CourseCard({ id, title, description, duration, icon, color }: CourseCardProps) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Tilt effect values
  const rotateX = useSpring(useMotionValue(0), { stiffness: 100, damping: 30 });
  const rotateY = useSpring(useMotionValue(0), { stiffness: 100, damping: 30 });

  function handleMouseMove(e: MouseEvent<HTMLDivElement>) {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;
    
    mouseX.set(x);
    mouseY.set(y);

    const rX = ((y - height / 2) / height) * -10; // Max 10 deg rotation
    const rY = ((x - width / 2) / width) * 10;
    
    rotateX.set(rX);
    rotateY.set(rY);
  }

  function handleMouseLeave() {
    rotateX.set(0);
    rotateY.set(0);
  }

  return (
    <Link href={`/courses/${id}`} className="block h-full group perspective-1000">
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className="relative h-full flex flex-col bg-white/5 dark:bg-gray-900/40 backdrop-blur-2xl border border-white/10 dark:border-white/5 rounded-[2.5rem] p-8 transition-all duration-500 hover:shadow-[0_20px_50px_-20px_rgba(0,0,0,0.3)] dark:hover:shadow-blue-500/10 overflow-hidden"
      >
        {/* Dynamic Spotlight */}
        <motion.div
          className="pointer-events-none absolute -inset-px rounded-[2.5rem] opacity-0 transition duration-500 group-hover:opacity-100"
          style={{
            background: useMotionTemplate`
              radial-gradient(
                600px circle at ${mouseX}px ${mouseY}px,
                ${color}15,
                transparent 80%
              )
            `,
          }}
        />

        {/* Content */}
        <div className="relative z-10">
          <div className="flex justify-between items-start mb-8">
            <div 
              className="w-14 h-14 rounded-2xl flex items-center justify-center shadow-inner" 
              style={{ backgroundColor: `${color}15`, color: color }}
            >
              <div className="transform translate-z-20 scale-110">
                {icon}
              </div>
            </div>
            <div className="flex items-center gap-1 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-bold text-gray-400 group-hover:text-blue-400 transition-colors">
              <Star className="w-3 h-3 fill-current" />
              Top Rated
            </div>
          </div>
          
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 font-outfit tracking-tight group-hover:translate-x-1 transition-transform">
            {title}
          </h3>
          
          <p className="text-gray-500 dark:text-gray-400 mb-8 line-clamp-3 text-sm leading-relaxed font-light">
            {description}
          </p>
        </div>

        <div className="relative z-10 mt-auto pt-8 border-t border-white/5 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="flex flex-col">
              <span className="text-[10px] uppercase tracking-widest text-gray-500 font-bold mb-1">Duration</span>
              <span className="text-xs font-semibold text-gray-900 dark:text-gray-200 flex items-center gap-1">
                <Clock className="w-3 h-3" /> {duration}
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] uppercase tracking-widest text-gray-500 font-bold mb-1">Degree</span>
              <span className="text-xs font-semibold text-gray-900 dark:text-gray-200 flex items-center gap-1">
                <Award className="w-3 h-3" /> Bachelor
              </span>
            </div>
          </div>
          
          <div 
            className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-12"
            style={{ backgroundColor: `${color}20`, color: color }}
          >
            <ArrowUpRight className="w-5 h-5" />
          </div>
        </div>
      </motion.div>
    </Link>
  );
}

