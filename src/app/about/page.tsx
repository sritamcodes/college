"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  BookOpen,
  Target,
  Globe,
  Award,
  Users,
  Building,
  Microscope,
  Phone,
  Mail,
  Briefcase
} from "lucide-react";
import { useState } from "react";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

export default function AboutPage() {
  const [showContact, setShowContact] = useState(false);

  return (
    <main className="min-h-screen bg-black text-white selection:bg-blue-500/30 overflow-hidden pt-24">
      {/* Background Gradient */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-blue-600/20 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-blue-900/20 blur-[120px]" />
      </div>

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-blue-400 font-outfit">
              Defining the Future of Education
            </h1>
            <p className="text-xl md:text-2xl text-gray-400">
              A legacy of excellence, innovation, and shaping the leaders of tomorrow.
            </p>
          </motion.div>
        </section>

        {/* University Overview */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="p-8 md:p-12 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl"
          >
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
                <div className="space-y-4 text-gray-300 leading-relaxed text-lg">
                  <p>Established in 2016, Lakshya Institute of Technology delivers a career-focused academic model that goes beyond the Utkal University curriculum. Alongside degree studies, students receive structured training in communication, quantitative aptitude, logical reasoning, personality development, and professional ethics. Our parallel skill tracks in Web Technology, Data Analytics, AI, and Full-Stack Development ensure practical expertise and industry readiness. Guided by experienced mentors under the leadership of author and educator Susant K. Rout, this integrated approach has helped students secure placements in top MNCs such as Wipro, TCS, Deloitte, and Cognizant, transforming education into employability.
                  </p>
                  <p>
                    We believe in an education system that goes beyond textbooks. Our curriculum is designed in collaboration with industry leaders to ensure our graduates are not just job-ready, but future-ready.
                  </p>
                </div>
              </div>
              <div className="relative h-64 md:h-full min-h-[300px] rounded-2xl overflow-hidden group">
                <div className="absolute inset-0 bg-blue-600/20 group-hover:bg-transparent transition-colors z-10 duration-500" />
                <Image
                  src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2070&auto=format&fit=crop"
                  alt="University Campus"
                  fill
                  className="object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </motion.div>
        </section>

        {/* Mission & Vision */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 gap-8"
          >
            {/* Mission */}
            <motion.div variants={fadeIn} className="p-8 rounded-3xl bg-gradient-to-br from-blue-900/20 to-black border border-blue-500/20 backdrop-blur-xl hover:border-blue-500/40 transition-colors">
              <Target className="w-12 h-12 text-blue-400 mb-6" />
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-gray-400 leading-relaxed">
                Our mission is to continuously strive toward establishing Lakshya Institute of Technology as a center of excellence in the IT education landscape. We are committed to delivering high-quality education, fostering innovation, and nurturing technical and ethical competencies among students. Through industry-oriented learning, research-driven practices, and a focus on holistic development, we aim to prepare skilled professionals who can excel in the dynamic world of information technology and contribute effectively to society.
              </p>
            </motion.div>

            {/* Vision */}
            <motion.div variants={fadeIn} className="p-8 rounded-3xl bg-gradient-to-br from-purple-900/20 to-black border border-purple-500/20 backdrop-blur-xl hover:border-purple-500/40 transition-colors">
              <Globe className="w-12 h-12 text-purple-400 mb-6" />
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-gray-400 leading-relaxed">
                Our vision is to uphold the highest standards of academic excellence, fostering innovation, integrity, and holistic development, to achieve the pinnacle of glory as the nation’s leading provider of skilled IT manpower. Lakshya Institute of Technology aspires to empower future technologists with cutting-edge knowledge, practical expertise, and a global perspective, shaping them into competent professionals who contribute meaningfully to the ever-evolving digital world.
              </p>
            </motion.div>
          </motion.div>
        </section>

        {/* Leadership Messages */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold">Leadership Messages</h2>
          </div>

          {/* Chairman */}
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="flex flex-col md:flex-row gap-8 items-center bg-white/5 p-8 rounded-3xl border border-white/10"
          >
            <div className="w-64 h-64 md:w-80 md:h-80 shrink-0 relative rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white/10 group-hover:border-blue-500/30 transition-all duration-500">
              <Image
                src="https://litindia.ac.in/wp-content/uploads/2026/01/Untitled-design-11.jpg"
                alt="Chairman"
                fill
                priority
                unoptimized
                quality={100}
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">Susant K. Rout</h3>
              <p className="text-blue-400 font-medium mb-6">Chairman & Founder</p>
              <blockquote className="text-gray-300 italic text-lg border-l-4 border-blue-500 pl-4">
                "Susant K. Rout—renowned author and expert educator—this academic ecosystem includes LIT Training, LIT Degree College, LIT Higher Secondary School with decades of experience, he empowers students through high-end technical upskilling and bridging the gap between education and industry success."
              </blockquote>
            </div>
          </motion.div>

          {/* Director */}
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="flex flex-col md:flex-row-reverse gap-8 items-center bg-white/5 p-8 rounded-3xl border border-white/10 group hover:border-purple-500/20 transition-all duration-500"
          >
            <div className="w-64 h-64 md:w-80 md:h-80 shrink-0 relative rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white/10 group-hover:border-purple-500/30 transition-all duration-500">
              <Image
                src="https://litindia.ac.in/wp-content/uploads/2026/01/1000263669-2-scaled-e1767938650641.jpg"
                alt="Director"
                fill
                priority
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="text-left md:text-right">
              <h3 className="text-2xl font-bold text-white mb-2">Bishnu Prasad Dash</h3>
              <p className="text-purple-400 font-medium mb-6">Director</p>
              <blockquote className="text-gray-300 italic text-lg border-r-4 border-purple-500 pr-4">
                "Welcome to Lakshya Institute of Technology. As Director, I, Bishnu Prasad Dash, warmly invite you to a campus where quality education, dedicated faculty, parental care, and holistic development unite to shape confident, future-ready achievers. Together, we nurture excellence and lifelong success."
              </blockquote>
            </div>
          </motion.div>
        </section>

        {/* Campus Highlights */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Campus Highlights</h2>
            <p className="text-gray-400 text-lg">World-class facilities for a world-class education.</p>
          </div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            {[
              { icon: Award, title: "Expert Faculties", desc: "Guided by Industry Leaders" },
              { icon: Briefcase, title: "Placement Excellence", desc: "98% Recruitment in Top MNCs" },
              { icon: Building, title: "Smart Classrooms", desc: "Interactive digital learning" },
              { icon: Users, title: "Innovation Hub", desc: "Incubator for student startups" },
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col items-center text-center hover:bg-white/10 transition-colors group cursor-pointer"
              >
                <item.icon className="w-10 h-10 text-blue-400 mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h4 className="font-bold text-lg mb-2">{item.title}</h4>
                <p className="text-sm text-gray-400">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* CTA Section */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="p-12 rounded-[3rem] bg-gradient-to-b from-blue-900/40 to-black border border-blue-500/30 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 relative z-10">Ready to join Lakshya?</h2>
            <p className="text-xl text-gray-300 mb-10 relative z-10">
              Take the first step towards a brilliant career.
            </p>

            <div className="relative z-10 h-20">
              {!showContact ? (
                <button
                  onClick={() => setShowContact(true)}
                  className="bg-white text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-50 transition-colors shadow-[0_0_40px_rgba(255,255,255,0.3)] hover:scale-105 duration-300"
                >
                  Contact Admissions
                </button>
              ) : (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex flex-col sm:flex-row justify-center gap-6"
                >
                  <a href="mailto:admission@litindia.ac.in" className="flex items-center gap-3 bg-white/10 px-6 py-3 rounded-full hover:bg-white/20 transition-colors border border-white/20">
                    <Mail className="w-5 h-5 text-blue-400" />
                    <span>admission@litindia.ac.in</span>
                  </a>
                  <a href="tel:+919437286366" className="flex items-center gap-3 bg-white/10 px-6 py-3 rounded-full hover:bg-white/20 transition-colors border border-white/20">
                    <Phone className="w-5 h-5 text-green-400" />
                    <span>+91 94372 86366</span>
                  </a>
                </motion.div>
              )}
            </div>
          </motion.div>
        </section>
      </div>
    </main>
  );
}
