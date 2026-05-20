"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Camera, Sparkles, Users, Trophy, Coffee } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const campusImages = [
  {
    url: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80&w=1200",
    title: "Central Library",
    category: "Facilities",
    description: "A sanctuary for knowledge with over 500,000 volumes and modern study spaces."
  },
  {
    url: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=1200",
    title: "Innovation Lab",
    category: "Academic",
    description: "Cutting-edge technology where students bring their wildest ideas to life."
  },
  {
    url: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&q=80&w=1200",
    title: "Annual Tech Fest",
    category: "Events",
    description: "Celebrating innovation and creativity with students from across the country."
  },
  {
    url: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=1200",
    title: "Student Lounge",
    category: "Social",
    description: "The perfect spot to unwind, collaborate, and share ideas over coffee."
  },
  {
    url: "https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&q=80&w=1200",
    title: "Sports Arena",
    category: "Facilities",
    description: "World-class facilities for athletes and fitness enthusiasts alike."
  },
  {
    url: "https://images.unsplash.com/photo-1523240715632-d984bc4b7969?auto=format&fit=crop&q=80&w=1200",
    title: "Cultural Night",
    category: "Events",
    description: "A vibrant showcase of talent, diversity, and the spirit of our community."
  }
];

export default function CampusLife() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-950">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 to-white dark:from-blue-950/20 dark:to-gray-950" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300 mb-6">
              <Camera className="w-4 h-4 mr-2" />
              Life at Lakshya
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 font-outfit">
              Experience the <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500">Vibrant Campus</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Beyond the classroom, our campus is a hub of activity, creativity, and lifelong friendships. 
              Explore the spaces and moments that make our university special.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-gray-50 dark:bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Users, label: "Active Clubs", value: "50+" },
              { icon: Sparkles, label: "Annual Events", value: "25+" },
              { icon: Trophy, label: "Sports Teams", value: "12" },
              { icon: Coffee, label: "Student Lounges", value: "5" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex p-3 rounded-2xl bg-white dark:bg-gray-800 shadow-sm mb-4">
                  <stat.icon className="w-6 h-6 text-blue-600" />
                </div>
                <div className="text-2xl font-bold text-gray-900 dark:text-white">{stat.value}</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {campusImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group relative bg-white dark:bg-gray-900 rounded-3xl overflow-hidden shadow-xl shadow-gray-200/50 dark:shadow-none border border-gray-100 dark:border-gray-800"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={image.url}
                    alt={image.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 right-4 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-blue-600 text-white mb-2">
                      {image.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 transition-colors">
                    {image.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-2 leading-relaxed">
                    {image.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-[3rem] overflow-hidden bg-blue-600 px-8 py-16 text-center">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-indigo-600 mix-blend-multiply" />
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 font-outfit">
                Want to see it for yourself?
              </h2>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-white text-blue-600 rounded-full font-bold hover:bg-gray-100 transition-colors"
                >
                  Schedule a Tour
                </Link>
                <Link
                  href="/"
                  className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-full font-bold hover:bg-white/10 transition-colors"
                >
                  Back to Home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
