"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Clock, GraduationCap, CheckCircle2, ChevronRight, Monitor, Shield, Database, Code } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";

const CATEGORIES = ["All", "Computer Applications", "Information Technology", "Data Science", "Computer Science"];

const COURSES = [
  {
    id: "bca",
    name: "BCA",
    category: "Computer Applications",
    duration: "3 Years",
    eligibility: "10+2 (Any Stream with Math)",
    highlights: ["Software Development", "Web Technologies", "Modern Programming Languages"],
    icon: Monitor,
    color: "from-blue-500/20 to-blue-900/20",
    borderColor: "border-blue-500/30",
    iconColor: "text-blue-400"
  },
  {
    id: "bsc-itm",
    name: "BSc ITM",
    category: "Information Technology",
    duration: "3 Years",
    eligibility: "10+2 with Science/Commerce",
    highlights: ["Business Management", "Cutting-edge IT Solutions", "Industry Projects"],
    icon: Shield,
    color: "from-violet-500/20 to-violet-900/20",
    borderColor: "border-violet-500/30",
    iconColor: "text-violet-400"
  },
  {
    id: "bsc-ds",
    name: "BSc DS",
    category: "Data Science",
    duration: "3 Years",
    eligibility: "10+2 with Physics & Math",
    highlights: ["Analytics", "Machine Learning", "Big Data"],
    icon: Database,
    color: "from-emerald-500/20 to-emerald-900/20",
    borderColor: "border-emerald-500/30",
    iconColor: "text-emerald-400"
  },
  {
    id: "bsc-cs",
    name: "BSc CS",
    category: "Computer Science",
    duration: "3 Years",
    eligibility: "10+2 with Physics & Math",
    highlights: ["Theoretical Computing", "Advanced Algorithms", "Problem Solving"],
    icon: Code,
    color: "from-pink-500/20 to-pink-900/20",
    borderColor: "border-pink-500/30",
    iconColor: "text-pink-400"
  }
];

export default function CoursesPage() {
  const [activeTab, setActiveTab] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCourses = COURSES.filter(course => {
    const matchesCategory = activeTab === "All" || course.category === activeTab;
    const matchesSearch = course.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          course.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <main className="min-h-screen bg-black text-white selection:bg-blue-500/30 overflow-hidden pt-24 pb-20">
      {/* Background Effect */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[30%] left-[-20%] w-[60%] h-[60%] rounded-full bg-indigo-600/10 blur-[150px]" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-blue-600/10 blur-[150px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Hero Section */}
        <section className="py-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-indigo-100 to-blue-400 font-outfit">
              Academic Programs
            </h1>
            <p className="text-xl md:text-2xl text-gray-400">
              Discover programs designed to transform your passion into a thriving career.
            </p>
          </motion.div>
        </section>

        {/* Search & Filters */}
        <section className="mb-16">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            
            {/* Filter Tabs */}
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 bg-white/5 p-2 rounded-2xl md:rounded-full border border-white/10 backdrop-blur-md">
              {CATEGORIES.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveTab(category)}
                  className={cn(
                    "px-5 py-2.5 rounded-xl md:rounded-full text-sm font-medium transition-all duration-300",
                    activeTab === category
                      ? "bg-indigo-600 text-white shadow-lg shadow-indigo-900/50"
                      : "text-gray-400 hover:text-white hover:bg-white/10"
                  )}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Search Bar */}
            <div className="relative w-full md:w-80 group">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400 group-focus-within:text-indigo-400 transition-colors" />
              </div>
              <input
                type="text"
                placeholder="Search courses..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white/5 border border-white/10 text-white rounded-full py-3 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white/10 transition-all backdrop-blur-md"
              />
            </div>

          </div>
        </section>

        {/* Courses Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredCourses.map((course, idx) => (
              <motion.div
                key={course.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                className={cn(
                  "flex flex-col h-full rounded-3xl border bg-gradient-to-b backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 group",
                  course.color,
                  course.borderColor
                )}
              >
                <div className="p-8 flex-grow">
                  <div className="flex justify-between items-start mb-6">
                    <div className={cn("p-4 rounded-2xl bg-black/40 border border-white/5", course.iconColor)}>
                      <course.icon className="w-8 h-8" />
                    </div>
                    <span className="px-3 py-1 bg-black/40 border border-white/5 rounded-full text-xs font-semibold text-gray-300">
                      {course.category}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all duration-300">
                    {course.name}
                  </h3>
                  
                  <div className="flex items-center gap-6 text-sm text-gray-400 mb-6 border-b border-white/10 pb-6">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <GraduationCap className="w-4 h-4" />
                      <span className="truncate">{course.eligibility}</span>
                    </div>
                  </div>

                  <ul className="space-y-3">
                    {course.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-gray-300">
                        <CheckCircle2 className="w-5 h-5 text-green-400 shrink-0" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-8 pt-0 mt-auto">
                  <Link 
                    href={`/courses/${course.id}`}
                    className="flex items-center justify-center w-full py-4 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold transition-all group/btn border border-white/10 hover:border-white/30"
                  >
                    <span>View Semesters</span>
                    <ChevronRight className="w-5 h-5 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredCourses.length === 0 && (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            className="text-center py-24"
          >
            <div className="inline-block p-6 rounded-full bg-white/5 border border-white/10 mb-6">
              <Search className="w-12 h-12 text-gray-500" />
            </div>
            <h3 className="text-2xl font-bold mb-2">No courses found</h3>
            <p className="text-gray-400">Try adjusting your search or filter criteria.</p>
          </motion.div>
        )}
      </div>
    </main>
  );
}
