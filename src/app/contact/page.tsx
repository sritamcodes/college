"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, MessageSquare, Clock } from "lucide-react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-950">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-gray-50 dark:bg-gray-900/50">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 via-indigo-500 to-blue-600" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 font-outfit">
              Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500">Touch</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Have questions about admissions, tours, or our programs? We're here to help you every step of the way.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 font-outfit">
                Contact Information
              </h2>
              
              <div className="space-y-8">
                <div className="flex items-start gap-5">
                  <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">Our Location</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      M4/46, Acharya Vihar, Near Water Tank<br />
                      Bhubaneswar, Odisha 751013
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center text-indigo-600">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">Phone Number</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      +91 94380 14327<br />
                      0674 2544690
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">Email Address</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      admission@litindia.ac.in<br />
                      info@litindia.ac.in
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center text-indigo-600">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">Office Hours</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Monday - Saturday: 9:00 AM - 6:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-100 dark:border-gray-800">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Follow Us</h3>
                  <div className="flex gap-4">
                    {[
                      { name: 'Facebook', href: "https://www.facebook.com/litindia.ac.in/", color: "bg-blue-600", Icon: FaFacebookF },
                      { name: 'Instagram', href: "https://www.instagram.com/litindia.ac.in/", color: "bg-pink-600", Icon: FaInstagram },
                      { name: 'LinkedIn', href: "https://www.linkedin.com/school/lakshya-institute-of-technology/", color: "bg-blue-700", Icon: FaLinkedinIn },
                      { name: 'X', href: "https://twitter.com/litindia", color: "bg-black", Icon: FaXTwitter }
                    ].map((social) => {
                      const Icon = social.Icon;
                      return (
                        <a
                          key={social.name}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`w-10 h-10 rounded-full ${social.color} text-white flex items-center justify-center hover:scale-110 transition-transform shadow-lg`}
                        >
                          <span className="sr-only">{social.name}</span>
                          <Icon className="w-6 h-6" aria-label={social.name} />
                        </a>
                      );
                    })}
                    </div>
                </div>
              </div>

              {/* Socials / Extra info */}
              <div className="mt-12 p-8 rounded-[2rem] bg-gray-50 dark:bg-gray-900/50 border border-gray-100 dark:border-gray-800">
                <div className="flex items-center gap-3 mb-4">
                  <MessageSquare className="w-5 h-5 text-blue-600" />
                  <h4 className="font-bold text-gray-900 dark:text-white text-lg">Direct Admission</h4>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6">
                  Need help with the admission process? Our counselors are available to guide you through every step.
                </p>
                <Link href="/apply" className="inline-block px-6 py-2.5 bg-blue-600 text-white rounded-full text-sm font-semibold hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/20">
                  Apply Now
                </Link>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white dark:bg-gray-900 p-8 md:p-12 rounded-[2.5rem] shadow-2xl shadow-blue-100 dark:shadow-none border border-gray-100 dark:border-gray-800"
            >
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 font-outfit">
                Send us a Message
              </h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">First Name</label>
                    <input 
                      type="text" 
                      required
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-800 border-none focus:ring-2 focus:ring-blue-600 transition-all"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Last Name</label>
                    <input 
                      type="text" 
                      required
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-800 border-none focus:ring-2 focus:ring-blue-600 transition-all"
                      placeholder="Doe"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email Address</label>
                  <input 
                    type="email" 
                    required
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-800 border-none focus:ring-2 focus:ring-blue-600 transition-all"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Subject</label>
                  <select className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-800 border-none focus:ring-2 focus:ring-blue-600 transition-all">
                    <option>General Inquiry</option>
                    <option>Admission Process</option>
                    <option>Course Details</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Message</label>
                  <textarea 
                    required
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-800 border-none focus:ring-2 focus:ring-blue-600 transition-all"
                    placeholder="How can we help you?"
                  />
                </div>
                <button 
                  type="submit"
                  className="w-full py-4 bg-blue-600 text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-blue-700 transition-all shadow-xl shadow-blue-500/30"
                >
                  Send Message
                  <Send className="w-5 h-5" />
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-96 w-full relative grayscale hover:grayscale-0 transition-all duration-700">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3742.094488812678!2d85.82807667523912!3d20.2963558811801!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1909d064ac0461%3A0xb99108e9f97fbfe2!2sLakshya%20Institute%20of%20Technology%20(LIT)!5e0!3m2!1sen!2sin!4v1714674639677!5m2!1sen!2sin" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen={true} 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>
      {/* <Footer /> */}
    </main>
  );
}
