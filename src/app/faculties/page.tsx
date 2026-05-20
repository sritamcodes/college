"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import Image from "next/image";
import { Award, BookOpen, Star, Search, Mail, X, Sparkles } from "lucide-react";

interface Faculty {
  id: number;
  name: string;
  role: string;
  image: string;
  primarySubject: string;
  category: string;
  skills: string[];
  email: string;
  linkedin: string;
  bio: string;
}

const CATEGORIES = [
  { id: "all", label: "All Pillars" },
  { id: "core", label: "Core CS & Systems" },
  { id: "web", label: "Web Development" },
  { id: "ai-db", label: "AI & Databases" },
  { id: "soft-skills", label: "Aptitude & Comm" }
];

const FACULTIES: Faculty[] = [
  {
    id: 1,
    name: "Susant K. Rout",
    role: "Chairman & Master Mentor",
    image: "https://litindia.ac.in/wp-content/uploads/2026/01/Untitled-design-11.jpg",
    primarySubject: "Core Engineering",
    category: "core",
    skills: ["C", "C++", "DSA", "OS", "System Design", "Kernel Programming"],
    email: "susant@litindia.ac.in",
    linkedin: "https://linkedin.com",
    bio: "Author of national bestseller books on C, C++, and DSA. Over 25 years of master mentoring."
  },
  {
    id: 2,
    name: "Sujit Kumar Pradhan",
    role: "Technical Head",
    image: "https://media.licdn.com/dms/image/v2/D5603AQG6o_Wcmf2ASg/profile-displayphoto-shrink_800_800/B56ZRWdpvQH0Ac-/0/1736617402928?e=1780531200&v=beta&t=N9e0JRVWDsTMgs1tls-vIC9P_khitmEqYiA9ylI2acc",
    primarySubject: "Technical Training",
    category: "core",
    skills: ["Python Expert", "C/C++ Trainer", "Software Dev", "Technical Trainer", "MongoDB", "Adv. Excel", "Matplotlib"],
    email: "sujit@litindia.ac.in",
    linkedin: "https://linkedin.com",
    bio: "Technical Head leading Python, Matplotlib, and database training programs."
  },
  {
    id: 3,
    name: "Pramod Jena",
    role: "Senior Mentor",
    image: "https://media.licdn.com/dms/image/v2/D5603AQEa8qSsuRJaqw/profile-displayphoto-crop_800_800/B56ZrWWKocIYAI-/0/1764532729734?e=1780531200&v=beta&t=_JppZyCvI7MdRF2N0F09uaKNKncEnMZ_jeyWOKzHmdU",
    primarySubject: "Web Development",
    category: "web",
    skills: ["React.js", "Next.js", "Node.js", "Tailwind CSS", "Full Stack"],
    email: "pramod@litindia.ac.in",
    linkedin: "https://linkedin.com",
    bio: "Full Stack expert specializing in modern Next.js and high-performance web systems."
  },
  {
    id: 4,
    name: "Rama Chandra Mishra",
    role: "Communication Head",
    image: "https://media.licdn.com/dms/image/v2/D5603AQFqmmqAdGDKqg/profile-displayphoto-shrink_800_800/B56ZebuwVRH8Ac-/0/1750664415583?e=1780531200&v=beta&t=bqsvROvaAVR71_CEUePmMVUMbO9PqclwiNCOCbdD6cc",
    primarySubject: "English & Communication",
    category: "soft-skills",
    skills: ["Business English", "Soft Skills", "Public Speaking", "Corporate Comm", "Personality Dev"],
    email: "rcmishra@litindia.ac.in",
    linkedin: "https://linkedin.com",
    bio: "Pioneer in corporate communication, soft skills training, and public speaking mastery."
  },
  {
    id: 5,
    name: "Nirmal Kumar Behera",
    role: "HOD & Senior Mentor",
    image: "/nirmal.jpg",
    primarySubject: "Data Structures",
    category: "core",
    skills: ["Data Structures", "Algorithms", "Java", "C/C++", "System Design"],
    email: "nirmal@litindia.ac.in",
    linkedin: "https://linkedin.com",
    bio: "HOD of Computer Science, specialized in core algorithms and JVM architecture."
  },
  {
    id: 6,
    name: "Ashutosh Behera",
    role: "Faculty",
    image: "https://media.licdn.com/dms/image/v2/D5603AQEYO0i5ILt--A/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1701048744153?e=1780531200&v=beta&t=AZYvms2CHMxAjKn1QJrVu7gXYRg-41jCbbbqG8-pZoA",
    primarySubject: "Cybersecurity",
    category: "core",
    skills: ["Django", "Backend", "C/C++", "System Programming"],
    email: "ashutosh@litindia.ac.in",
    linkedin: "https://linkedin.com",
    bio: "Cybersecurity enthusiast and Django backend developer."
  },
  {
    id: 7,
    name: "Dr. Aradhana Mohapatra",
    role: "Professor & Research Head",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800",
    primarySubject: "Artificial Intelligence",
    category: "ai-db",
    skills: ["Machine Learning", "Deep Learning", "Python", "NLP", "Computer Vision"],
    email: "aradhana@litindia.ac.in",
    linkedin: "https://linkedin.com",
    bio: "Ph.D. in Computer Science. Leading AI research, deep learning, and NLP initiatives."
  },
  {
    id: 8,
    name: "Rajesh Kumar Panda",
    role: "Senior Faculty",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800",
    primarySubject: "Database Systems",
    category: "ai-db",
    skills: ["SQL", "DBMS", "Oracle", "Java Backend", "Spring Boot"],
    email: "rajesh@litindia.ac.in",
    linkedin: "https://linkedin.com",
    bio: "Specialist in enterprise databases, SQL tuning, and Spring Boot framework."
  },
  {
    id: 9,
    name: "Deepak Senapati",
    role: "Aptitude & Placement Trainer",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=800",
    primarySubject: "Quantitative Aptitude",
    category: "soft-skills",
    skills: ["Quantitative Aptitude", "Logical Reasoning", "Data Interpretation", "Soft Skills"],
    email: "deepak@litindia.ac.in",
    linkedin: "https://linkedin.com",
    bio: "Placement trainer helping students crack aptitude rounds in top MNCs."
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08
    }
  }
} as const;

const itemVariants = {
  hidden: { opacity: 0, y: 25 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1]
    }
  }
} as const;

export default function FacultiesPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFaculty, setSelectedFaculty] = useState<Faculty | null>(null);

  // Memoized filtered faculties
  const filteredFaculties = useMemo(() => {
    return FACULTIES.filter(faculty => {
      const matchesCategory = selectedCategory === "all" || faculty.category === selectedCategory;
      const matchesSearch = faculty.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            faculty.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            faculty.primarySubject.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            faculty.skills.some(skill => skill.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <main className="min-h-screen bg-black text-white selection:bg-blue-500/30 overflow-hidden pt-24 pb-20">
      {/* Background Effect */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-purple-600/10 blur-[150px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-blue-600/10 blur-[150px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Hero Section */}
        <section className="py-16 md:py-24 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-4xl mx-auto"
          >
            <span className="text-blue-500 font-bold tracking-widest uppercase text-sm mb-4 block">Academic Pillars</span>
            <h1 className="text-4xl md:text-8xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-purple-400 font-outfit tracking-tight">
              Elite Mentorship
            </h1>
            <p className="text-base md:text-2xl text-gray-400 font-light leading-relaxed px-4 md:px-0">
              At Lakshya, you don't just learn from teachers—you are mentored by authors,
              industry veterans, and Ph.D. scholars who bridge the gap between academia and the real world.
            </p>
          </motion.div>
        </section>

        {/* Stats / Value Props Section */}
        <section className="mb-24 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {[
            { icon: Award, title: "50+ Ph.D. Scholars", desc: "Our faculty includes some of the brightest academic minds in the country." },
            { icon: BookOpen, title: "Authored Curriculum", desc: "Many of our mentors are renowned authors of textbooks used nationwide." },
            { icon: Star, title: "Industry Veterans", desc: "Learn directly from professionals who have led teams at Fortune 500 companies." }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-6 md:p-8 rounded-[2rem] bg-white/5 border border-white/10 backdrop-blur-xl hover:border-blue-500/30 transition-all duration-500 group"
            >
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-blue-600/20 flex items-center justify-center mb-5 md:mb-6 group-hover:scale-110 transition-transform">
                <item.icon className="w-6 h-6 md:w-7 md:h-7 text-blue-400" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-3">{item.title}</h3>
              <p className="text-sm md:text-base text-gray-400 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </section>

        {/* Interactive Filter and Search Bar */}
        <section className="max-w-4xl mx-auto mb-16 px-2">
          {/* Search Box */}
          <div className="relative mb-6">
            <span className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Search className="w-5 h-5 text-gray-400" />
            </span>
            <input
              type="text"
              placeholder="Search by name, role, skills (e.g. 'Python', 'C++')..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white/5 border border-white/10 hover:border-white/20 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 rounded-2xl pl-12 pr-10 py-3.5 md:py-4 text-sm md:text-base text-white placeholder-gray-400 transition-all duration-300 focus:outline-none backdrop-blur-md"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Horizontal Scrolling Pill Filters */}
          <div className="relative">
            <div className="flex gap-2 overflow-x-auto pb-3 scrollbar-none snap-x justify-start md:justify-center -mx-4 px-4 md:mx-0">
              {CATEGORIES.map((category) => {
                const isActive = selectedCategory === category.id;
                return (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`relative px-4 py-2 rounded-full text-xs md:text-sm font-semibold transition-all duration-300 whitespace-nowrap snap-align-start ${
                      isActive 
                        ? "text-white" 
                        : "text-gray-400 hover:text-white bg-white/5 border border-white/5 hover:border-white/10"
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeCategory"
                        className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full -z-10"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                    {category.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Count Details */}
          <div className="flex justify-between items-center mt-4 px-2 text-xs md:text-sm text-gray-400">
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
              <span>{filteredFaculties.length} mentors matching</span>
            </div>
            {(selectedCategory !== "all" || searchQuery) && (
              <button
                onClick={() => {
                  setSelectedCategory("all");
                  setSearchQuery("");
                }}
                className="text-blue-400 hover:text-blue-300 font-semibold"
              >
                Reset filters
              </button>
            )}
          </div>
        </section>

        {/* Unified Faculty Grid */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 font-outfit">The Expert Circle</h2>
            <div className="h-1 w-20 bg-blue-600 mx-auto rounded-full" />
          </div>

          {filteredFaculties.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16 bg-white/5 rounded-[2rem] border border-white/10 max-w-xl mx-auto px-6"
            >
              <HelpCircle className="w-12 h-12 text-gray-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">No Mentors Found</h3>
              <p className="text-gray-400 text-sm">
                We couldn't find any faculty members matching your search query or selected department filter.
              </p>
            </motion.div>
          ) : (
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10"
            >
              {filteredFaculties.map((faculty) => (
                <motion.div
                  key={faculty.id}
                  variants={itemVariants}
                  onClick={() => setSelectedFaculty(faculty)}
                  className="group relative rounded-[2.5rem] overflow-hidden bg-white/5 border border-white/10 hover:border-blue-500/50 transition-all duration-500 cursor-pointer"
                >
                  {/* Aspect ratio optimized: on mobile, cards are slightly wider (10/11) to avoid too much height */}
                  <div className="aspect-[10/11] sm:aspect-[4/5] relative">
                    <Image
                      src={faculty.image}
                      alt={faculty.name}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-transparent opacity-90" />
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 pt-0">
                    <span className="px-2 py-0.5 bg-blue-600/20 border border-blue-500/30 rounded-full text-[9px] font-semibold text-blue-400 mb-2 inline-block">
                      {faculty.primarySubject}
                    </span>
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-0.5">{faculty.name}</h3>
                    <p className="text-gray-400 font-medium text-xs md:text-sm mb-3.5">{faculty.role}</p>

                    {/* Mastery Chips - Compact & Responsive */}
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {faculty.skills.slice(0, 3).map(skill => (
                        <span key={skill} className="px-2 py-0.5 bg-white/5 rounded text-[9px] font-semibold text-gray-300 border border-white/5">
                          {skill}
                        </span>
                      ))}
                      {faculty.skills.length > 3 && (
                        <span className="px-2 py-0.5 bg-blue-500/10 rounded text-[9px] font-bold text-blue-400 border border-blue-500/10">
                          +{faculty.skills.length - 3} more
                        </span>
                      )}
                    </div>

                    <p className="text-[10px] text-blue-400/80 font-bold group-hover:text-blue-400 flex items-center gap-1.5 mt-2 transition-colors">
                      <Sparkles className="w-3.5 h-3.5 animate-pulse" /> Tap for details
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </section>

        {/* Call to Action */}
        <section className="mt-40 text-center py-16 md:py-20 px-6 md:px-8 rounded-[2.5rem] md:rounded-[3rem] bg-gradient-to-b from-blue-900/40 to-black border border-blue-500/20 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-5xl font-bold mb-4 md:mb-6">Want to join our faculty?</h2>
            <p className="text-sm md:text-xl text-gray-400 mb-8 md:mb-10 max-w-2xl mx-auto">
              We are always looking for passionate educators and industry leaders to help us shape the next generation of tech talent.
            </p>
            <button className="px-8 py-3.5 md:px-10 md:py-4 bg-white text-black font-bold rounded-full hover:bg-blue-600 hover:text-white transition-all shadow-xl shadow-white/10 text-sm md:text-base">
              Apply as Faculty
            </button>
          </motion.div>
        </section>
      </div>

      {/* Premium Glassmorphic Bottom Drawer (Mobile) / Centered Modal (Desktop) */}
      <AnimatePresence>
        {selectedFaculty && (
          <div className="fixed inset-0 z-50 flex items-end md:items-center justify-center p-0 md:p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedFaculty(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
            />

            {/* Modal Body */}
            <motion.div
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: "100%", opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 220 }}
              className="relative w-full max-h-[92vh] md:max-h-[85vh] md:max-w-2xl bg-neutral-950 border border-white/10 md:rounded-[2.5rem] rounded-t-[2.5rem] p-6 md:p-8 overflow-y-auto z-50 shadow-2xl"
            >
              {/* Top Drag Indicator for mobile */}
              <div className="w-12 h-1 bg-white/20 rounded-full mx-auto mb-4 md:hidden" />

              {/* Close Button */}
              <button
                onClick={() => setSelectedFaculty(null)}
                className="absolute top-4 right-4 md:top-6 md:right-6 p-2 rounded-full bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Content Grid */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 mt-2">
                {/* Left Side: Avatar and Socials */}
                <div className="md:col-span-4 flex flex-col items-center text-center border-b border-white/5 md:border-b-0 pb-6 md:pb-0">
                  <div className="w-28 h-28 md:w-36 md:h-36 rounded-full overflow-hidden border-2 border-blue-500/30 relative mb-4">
                    <Image
                      src={selectedFaculty.image}
                      alt={selectedFaculty.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h2 className="text-xl md:text-2xl font-bold text-white mb-1">{selectedFaculty.name}</h2>
                  <p className="text-blue-400 text-xs md:text-sm font-medium mb-4">{selectedFaculty.role}</p>

                  <div className="flex gap-2 w-full max-w-[240px]">
                    <a
                      href={`mailto:${selectedFaculty.email}`}
                      className="flex-1 py-2 bg-white/5 hover:bg-blue-600/20 border border-white/10 hover:border-blue-500/30 rounded-xl text-xs font-semibold text-gray-300 hover:text-white flex items-center justify-center gap-1.5 transition-all duration-300"
                    >
                      <Mail className="w-3.5 h-3.5" /> Email
                    </a>
                    <a
                      href={selectedFaculty.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-2 bg-white/5 hover:bg-blue-600/20 border border-white/10 hover:border-blue-500/30 rounded-xl text-xs font-semibold text-gray-300 hover:text-white flex items-center justify-center gap-1.5 transition-all duration-300"
                    >
                      <Linkedin className="w-3.5 h-3.5" /> LinkedIn
                    </a>
                  </div>
                </div>

                {/* Right Side: Professional Info */}
                <div className="md:col-span-8 flex flex-col justify-between">
                  <div>
                    <span className="px-2 py-0.5 bg-blue-600/20 border border-blue-500/30 rounded-full text-[10px] font-semibold text-blue-400 mb-3 inline-block">
                      {selectedFaculty.primarySubject}
                    </span>
                    <h4 className="text-xs uppercase tracking-wider text-gray-500 font-bold mb-2">Professional Summary</h4>
                    <p className="text-gray-300 italic text-sm leading-relaxed mb-6 border-l-2 border-blue-500 pl-3">
                      "{selectedFaculty.bio}"
                    </p>

                    <h4 className="text-xs uppercase tracking-wider text-gray-500 font-bold mb-3">Skills & Mastery</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedFaculty.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-xl text-xs text-gray-300 font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <button
                    onClick={() => setSelectedFaculty(null)}
                    className="w-full md:w-auto self-end mt-8 px-6 py-2.5 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl text-xs transition-colors"
                  >
                    Back to list
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </main>
  );
}

// Fallback HelpCircle icon definition in case it is needed (already covered by lucide-react)
interface HelpCircleProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

function HelpCircle({ size = 24, className, ...props }: HelpCircleProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
      <line x1="12" y1="17" x2="12.01" y2="17" />
    </svg>
  );
}

// Custom Linkedin Icon matching Lucide style
function Linkedin({ size = 16, className }: { size?: number | string; className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}
