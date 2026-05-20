"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Download, FileText, ChevronRight, ArrowLeft, Clock, Award, Star, BookOpen } from "lucide-react";
import { cn } from "@/lib/utils";

interface ClientCoursePageProps {
  course: any;
  courseId: string;
}

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export default function ClientCoursePage({ course, courseId }: ClientCoursePageProps) {
  const semesters = Array.from({ length: course.semesters }, (_, i) => i + 1);

  // Map colors to Tailwind classes safely
  const getColorClasses = (color: string) => {
    const maps: Record<string, any> = {
      blue: { bg: "bg-blue-600", text: "text-blue-400", border: "border-blue-500/30", glow: "bg-blue-600/20" },
      violet: { bg: "bg-violet-600", text: "text-violet-400", border: "border-violet-500/30", glow: "bg-violet-600/20" },
      emerald: { bg: "bg-emerald-600", text: "text-emerald-400", border: "border-emerald-500/30", glow: "bg-emerald-600/20" },
      pink: { bg: "bg-pink-600", text: "text-pink-400", border: "border-pink-500/30", glow: "bg-pink-600/20" },
    };
    return maps[color] || maps.blue;
  };

  const theme = getColorClasses(course.color);

  return (
    <main className="min-h-screen bg-black text-white selection:bg-blue-500/30 overflow-hidden pb-24">
      {/* Background Effect */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className={`absolute top-[20%] right-[-10%] w-[50%] h-[50%] rounded-full ${theme.glow} blur-[150px]`} />
        <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-blue-900/20 blur-[150px]" />
      </div>

      {/* Hero Banner */}
      <div className="relative h-[50vh] md:h-[60vh] w-full flex items-end">
        <div className="absolute inset-0 z-0">
          <Image
            src={course.image}
            alt={course.title}
            fill
            priority
            className="object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
        </div>
        
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <Link href="/courses" className="inline-flex items-center text-gray-400 hover:text-white mb-8 transition-colors font-medium bg-white/5 px-4 py-2 rounded-full backdrop-blur-md border border-white/10">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to All Courses
          </Link>
          
          <div className="flex items-center gap-2 text-sm text-gray-400 mb-6 font-medium tracking-wide">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/courses" className="hover:text-white transition-colors">Courses</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white">{course.title.split(" (")[0]}</span>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white font-outfit mb-6 drop-shadow-lg">
              {course.title}
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl leading-relaxed">
              {course.description}
            </p>

            <div className="flex flex-wrap gap-6 mt-8">
              <div className="flex items-center gap-2 text-gray-300 bg-white/5 px-4 py-2 rounded-xl backdrop-blur-md border border-white/10">
                <Clock className={`w-5 h-5 ${theme.text}`} />
                <span className="font-medium">{course.duration}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300 bg-white/5 px-4 py-2 rounded-xl backdrop-blur-md border border-white/10">
                <BookOpen className={`w-5 h-5 ${theme.text}`} />
                <span className="font-medium">{course.semesters} Semesters</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300 bg-white/5 px-4 py-2 rounded-xl backdrop-blur-md border border-white/10">
                <Award className={`w-5 h-5 ${theme.text}`} />
                <span className="font-medium">{course.credits} Credits</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Syllabus Section */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-24" id="syllabus">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <div className="inline-flex items-center justify-center p-4 rounded-2xl bg-white/5 border border-white/10 mb-6 backdrop-blur-md">
            <FileText className={`w-8 h-8 ${theme.text}`} />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white font-outfit mb-4">
            Course Syllabus
          </h2>
          <p className="text-xl text-gray-400">
            Download the official, detailed syllabus for each semester below.
          </p>
        </motion.div>

        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid gap-6 md:grid-cols-2"
        >
          {semesters.map((sem) => (
            <motion.div 
              key={sem} 
              variants={fadeUp}
              whileHover={{ scale: 1.02 }}
              className={cn(
                "group relative bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl transition-all duration-300 hover:bg-white/10 overflow-hidden",
                `hover:${theme.border}`
              )}
            >
              {/* Subtle background glow on hover */}
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 ${theme.bg}`} />
              
              <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                <div className="flex items-center gap-5">
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center bg-black/40 border border-white/5 shadow-inner`}>
                    <span className={`text-2xl font-bold ${theme.text}`}>S{sem}</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-1">Semester {sem}</h3>
                    <div className="flex items-center gap-2 text-sm text-gray-400">
                      <Star className={`w-4 h-4 ${theme.text}`} />
                      <span>Core & Electives</span>
                    </div>
                  </div>
                </div>
                
                <a 
                  href={`/syllabus/${courseId.toLowerCase()}/sem${sem}.pdf`}
                  download={`${courseId.toUpperCase()}_Sem${sem}_Syllabus.pdf`}
                  className={cn(
                    "flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg",
                    `bg-white/10 text-white hover:${theme.bg} border border-white/10 hover:border-transparent`
                  )}
                >
                  <Download className="w-5 h-5" /> 
                  <span>Download PDF</span>
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </main>
  );
}
