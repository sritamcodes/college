"use client";

import { motion, AnimatePresence } from "framer-motion";
import { BookOpen, Download, Search, FileText, Bookmark, Sparkles, X, Send } from "lucide-react";
import { useState } from "react";

const SUBJECTS = [
  {
    id: 1,
    title: "HTML & Web Design",
    code: "WD101",
    description: "Fundamental web technologies, HTML5 semantic structure, and layout basics.",
    category: "Web Development",
    topics: ["HTML5", "Semantics", "Forms", "Web Standards"],
    downloadUrl: "/notes/HTML Handwritten Notes.pdf"
  },
  {
    id: 2,
    title: "JavaScript Essentials",
    code: "JS201",
    description: "Core JavaScript concepts, ES6+ features, DOM manipulation, and async programming.",
    category: "Programming",
    topics: ["ES6+", "Promises", "DOM", "Functional Programming"],
    downloadUrl: "/notes/JAVASCRIPT NOTES.pdf"
  },
  {
    id: 3,
    title: "React.js Framework",
    code: "JS301",
    description: "Modern frontend development with React, hooks, state management, and routing.",
    category: "Web Development",
    topics: ["Hooks", "Context API", "Virtual DOM", "Components"],
    downloadUrl: "/notes/React.js Handwritten Notes.pdf"
  },
  {
    id: 4,
    title: "Python Programming",
    code: "PY101",
    description: "Introduction to Python, data types, scripting, and automation basics.",
    category: "Programming",
    topics: ["Syntax", "Dictionaries", "File I/O", "OOPs"],
    downloadUrl: "/notes/Easiest Python Notes.pdf"
  },
  {
    id: 5,
    title: "Data Structures & Algorithms",
    code: "CS202",
    description: "In-depth study of algorithms, complexity analysis, and advanced data structures.",
    category: "Core CS",
    topics: ["Sorting", "Graphs", "Dynamic Programming", "Recursion"],
    downloadUrl: "/notes/DSA Handwritten Notes.pdf"
  },
  {
    id: 6,
    title: "DBMS & SQL",
    code: "DB301",
    description: "Database management systems, relational algebra, and advanced SQL querying.",
    category: "Databases",
    topics: ["Joins", "Normalization", "ACID Props", "SQL Queries"],
    downloadUrl: "/notes/DBMS Handwritten Notes.pdf"
  },
  {
    id: 7,
    title: "Operating Systems",
    code: "CS302",
    description: "Process management, memory allocation, file systems, and concurrency.",
    category: "Core CS",
    topics: ["Scheduling", "Deadlocks", "Virtual Memory", "Threads"],
    downloadUrl: "/notes/Operating System.pdf"
  },
  {
    id: 8,
    title: "Machine Learning",
    code: "AI401",
    description: "Foundations of ML, supervised/unsupervised learning, and model evaluation.",
    category: "Data Science",
    topics: ["Regression", "Clustering", "Scikit-Learn", "Feature Eng"],
    downloadUrl: "/notes/Machine Learning.pdf"
  }
];

export default function NotesPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredSubjects = SUBJECTS.filter(subject =>
    subject.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    subject.code.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-950 pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header Section */}
        <section className="py-12 md:py-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-semibold bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 mb-6">
              <Sparkles className="w-4 h-4" />
              LIT Academic Repository
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 font-outfit">
              Subject <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500">Notes</span>
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Access high-quality study materials and lecture notes curated by our expert faculty.
              Download PDFs and stay ahead in your academic journey.
            </p>
          </motion.div>
        </section>

        {/* Search and Filters */}
        <div className="mb-12 max-w-xl mx-auto">
          <div className="relative group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-blue-600 transition-colors" />
            <input
              type="text"
              placeholder="Search by subject name or code..."
              className="w-full pl-12 pr-4 py-4 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 focus:ring-2 focus:ring-blue-600 transition-all outline-none shadow-sm shadow-blue-500/5"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {/* Notes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredSubjects.map((subject, i) => (
            <motion.div
              key={subject.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative p-8 rounded-[2.5rem] bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 hover:border-blue-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="w-14 h-14 rounded-2xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform">
                  <BookOpen className="w-7 h-7" />
                </div>
                <span className="text-[10px] font-bold tracking-widest uppercase text-gray-400 dark:text-gray-500 bg-gray-100 dark:bg-gray-800 px-3 py-1.5 rounded-full">
                  {subject.code}
                </span>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 transition-colors">
                {subject.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6">
                {subject.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
                {subject.topics.map(topic => (
                  <span key={topic} className="flex items-center gap-1.5 px-3 py-1 bg-gray-50 dark:bg-gray-800 rounded-lg text-[10px] font-medium text-gray-500 dark:text-gray-400 border border-gray-100 dark:border-gray-700">
                    <Bookmark className="w-3 h-3 text-blue-500" />
                    {topic}
                  </span>
                ))}
              </div>

              <a
                href={subject.downloadUrl}
                download
                className="w-full py-4 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white rounded-2xl text-sm font-bold flex items-center justify-center gap-2 hover:bg-blue-600 hover:text-white transition-all border border-gray-100 dark:border-gray-700 hover:border-blue-600 shadow-sm"
              >
                <Download className="w-4 h-4" />
                Download Study Material
              </a>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <section className="mt-32 p-12 rounded-[3rem] bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative z-10"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Missing a Subject?</h2>
            <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
              If you need notes for a specific subject not listed here, please contact the academic department or your mentor.
            </p>
            <button 
              onClick={() => setIsModalOpen(true)}
              className="px-10 py-4 bg-white text-blue-600 font-bold rounded-full hover:bg-blue-50 transition-all shadow-xl"
            >
              Request Materials
            </button>
          </motion.div>
        </section>
      </div>

      {/* Request Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-lg bg-white dark:bg-gray-900 rounded-[2.5rem] shadow-2xl overflow-hidden"
            >
              <div className="p-8 sm:p-12">
                <button 
                  onClick={() => setIsModalOpen(false)}
                  className="absolute top-6 right-6 p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
                
                <div className="mb-8">
                  <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-2 font-outfit">Request Notes</h3>
                  <p className="text-gray-500 dark:text-gray-400">Tell us what you're looking for, and we'll notify you when it's available.</p>
                </div>

                <form className="space-y-5" onSubmit={(e) => { e.preventDefault(); alert('Request sent successfully!'); setIsModalOpen(false); }}>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Subject Name</label>
                    <input 
                      type="text" 
                      required
                      placeholder="e.g. Computer Networks"
                      className="w-full px-5 py-4 rounded-2xl bg-gray-50 dark:bg-gray-800 border-none focus:ring-2 focus:ring-blue-600 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Your Email</label>
                    <input 
                      type="email" 
                      required
                      placeholder="john@example.com"
                      className="w-full px-5 py-4 rounded-2xl bg-gray-50 dark:bg-gray-800 border-none focus:ring-2 focus:ring-blue-600 transition-all"
                    />
                  </div>
                  <button 
                    type="submit"
                    className="w-full py-5 bg-blue-600 text-white rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-blue-700 transition-all shadow-xl shadow-blue-500/30 mt-8"
                  >
                    Submit Request
                    <Send className="w-5 h-5" />
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </main>
  );
}
