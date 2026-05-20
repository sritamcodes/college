"use client";
import dynamic from "next/dynamic";
import Link from "next/link";
import Image from "next/image";
import { Monitor, Database, Code, Shield, Sparkles, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import Hero from "@/components/Hero";
import CourseCard from "@/components/CourseCard";
import PageReveal from "@/components/PageReveal";
import AutoScroll from "@/components/AutoScroll";

// Lazy load the heavy 3D component to maintain performance
const ThreeScene = dynamic(() => import("@/components/ThreeScene"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[60vh] md:h-[80vh] flex items-center justify-center bg-gray-100 dark:bg-gray-800 rounded-3xl animate-pulse">
      <p className="text-gray-500 dark:text-gray-400 font-outfit text-xl">Loading Interactive Experience...</p>
    </div>
  ),
});

const COURSES = [
  {
    id: "bca",
    title: "BCA",
    description: "Bachelor of Computer Applications. Master software development, web technologies, and modern programming languages.",
    duration: "3 Years",
    icon: <Monitor className="w-8 h-8" />,
    color: "#3b82f6", // blue
  },
  {
    id: "bsc-itm",
    title: "BSc ITM",
    description: "Information Technology Management. Bridge the gap between business management and cutting-edge IT solutions.",
    duration: "3 Years",
    icon: <Shield className="w-8 h-8" />,
    color: "#8b5cf6", // violet
  },
  {
    id: "bsc-ds",
    title: "BSc DS",
    description: "Data Science. Dive deep into analytics, machine learning, and big data to solve complex real-world problems.",
    duration: "3 Years",
    icon: <Database className="w-8 h-8" />,
    color: "#10b981", // emerald
  },
  {
    id: "bsc-cs",
    title: "BSc CS",
    description: "Computer Science. Learn the theoretical foundations of computing and advanced algorithmic problem solving.",
    duration: "3 Years",
    icon: <Code className="w-8 h-8" />,
    color: "#ec4899", // pink
  },
];

export default function Home() {
  return (
    <PageReveal>
      <main>
        {/* Hero Section */}
        <section>
          <Hero />
        </section>
        
        {/* Stats Section */}
        <section className="py-32 px-4 bg-white dark:bg-gray-950 overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
              {[
                { label: "Graduates", value: "10k+", color: "from-blue-600 to-indigo-600" },
                { label: "Placements", value: "98%", color: "from-indigo-600 to-violet-600" },
                { label: "Global Partners", value: "50+", color: "from-violet-600 to-purple-600" },
                { label: "Research Papers", value: "1k+", color: "from-purple-600 to-pink-600" },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: i * 0.1 }}
                  className="text-center group"
                >
                  <motion.div 
                    whileHover={{ scale: 1.1 }}
                    className={`text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r ${stat.color} mb-4 font-outfit`}
                  >
                    {stat.value}
                  </motion.div>
                  <div className="text-sm uppercase tracking-[0.3em] font-bold text-gray-500 dark:text-gray-400">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* About & Inspiration Section */}
        <section className="py-32 px-4 bg-gray-50 dark:bg-gray-900/50">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <span className="text-sm font-bold text-blue-600 tracking-[0.3em] uppercase mb-6 block">Our Vision</span>
              <h2 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white font-outfit mb-8 leading-tight">
                Empowering the Next Generation of <span className="text-blue-600">Digital Pioneers</span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 font-light leading-relaxed mb-8">
                Lakshya Institute of Technology (LIT) is a premier institution dedicated to 
                shaping the futures of aspiring technologists. We believe that education 
                is the bridge to innovation, and our curriculum is designed to push the 
                boundaries of what's possible in the digital age.
              </p>
              <div className="flex items-center gap-6 p-8 bg-white dark:bg-gray-800 rounded-3xl border border-gray-100 dark:border-gray-700 shadow-xl">
                <div className="w-1.5 h-16 bg-blue-600 rounded-full" />
                <blockquote className="text-2xl font-outfit italic text-gray-800 dark:text-gray-200">
                  "The best way to predict the future is to create it."
                </blockquote>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative aspect-square rounded-[4rem] overflow-hidden group shadow-2xl"
            >
              <Image 
                src="/college.png" 
                alt="College Vision" 
                fill 
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-600/40 to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center">
                 <motion.div 
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    className="bg-white/20 backdrop-blur-xl p-6 rounded-full border border-white/30"
                 >
                    <Sparkles className="w-12 h-12 text-white" />
                 </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Introduction & 3D Section */}
        <section className="py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-center mb-24"
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-semibold bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400 mb-8">
              <Sparkles className="w-4 h-4" />
              Next-Gen Learning
            </span>
            <h2 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white font-outfit mb-8 tracking-tight">
              Immersion in <span className="text-blue-600">Innovation</span>
            </h2>
            <p className="text-xl text-gray-500 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed font-light">
              We don't just teach technology; we inhabit it. Experience a curriculum 
              rendered in three dimensions, where every concept is a tangible reality.
            </p>
          </motion.div>
          
          <ThreeScene />
        </section>

        {/* Courses Section */}
        <section id="courses" className="py-32 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900/30">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
              <div className="max-w-2xl">
                <h2 className="text-sm font-bold text-blue-600 tracking-widest uppercase mb-4">Our Curriculum</h2>
                <h3 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white font-outfit mb-8">
                  Future-Ready <br />Programs
                </h3>
                <p className="text-xl text-gray-500 dark:text-gray-400 font-light">
                  Tailored for the modern industry, our courses bridge the gap between 
                  academic theory and professional excellence.
                </p>
              </div>
              <Link 
                href="/courses" 
                className="group inline-flex items-center gap-3 px-8 py-4 bg-white dark:bg-gray-900 rounded-full border border-gray-200 dark:border-gray-800 text-lg font-bold hover:bg-gray-100 dark:hover:bg-gray-800 transition-all shadow-sm"
              >
                View Full Catalog
                <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {COURSES.map((course, i) => (
                <motion.div
                  key={course.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: i * 0.1 }}
                >
                  <CourseCard {...course} />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Modern Call to Action */}
        <section className="py-32 px-4">
          <div className="max-w-7xl mx-auto relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-[4rem] blur-3xl opacity-20 group-hover:opacity-30 transition-opacity" />
            <div className="relative overflow-hidden bg-gray-900 dark:bg-black rounded-[4rem] p-12 md:p-24 text-center border border-white/10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-5xl md:text-7xl font-bold text-white font-outfit mb-8">
                  Start Your Journey <br /> <span className="text-blue-500">Today</span>
                </h2>
                <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto font-light">
                  Join thousands of students who are already shaping the future 
                  of technology and innovation at LIT.
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <Link href="/apply" className="px-12 py-5 bg-blue-600 text-white rounded-full text-xl font-bold hover:bg-blue-700 transition-all hover:scale-105 active:scale-95 shadow-xl shadow-blue-500/25">
                    Apply for Admission
                  </Link>
                  <Link href="/contact" className="px-12 py-5 bg-white/10 text-white border border-white/20 rounded-full text-xl font-bold hover:bg-white/20 transition-all">
                    Contact Support
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
    </PageReveal>
  );
}
