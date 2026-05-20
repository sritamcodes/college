"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Send, CheckCircle, Briefcase, GraduationCap, Building, Users } from "lucide-react";
import { cn } from "@/lib/utils";

const REASONS = [
  {
    icon: Briefcase,
    title: "100% Placement Assistance",
    description: "Our dedicated placement cell ensures you get interviews with top tech giants and MNCs.",
  },
  {
    icon: GraduationCap,
    title: "Expert Faculty",
    description: "Learn directly from industry veterans and PhD scholars with decades of real-world experience.",
  },
  {
    icon: Building,
    title: "State-of-the-Art Infrastructure",
    description: "Access modern computer labs, smart classrooms, and collaborative innovation hubs.",
  },
  {
    icon: Users,
    title: "Vibrant Campus Life",
    description: "Join tech clubs, participate in hackathons, and build a network that lasts a lifetime.",
  },
];

export default function ApplyPage() {
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("submitting");
    // Simulate API call
    setTimeout(() => {
      setFormStatus("success");
    }, 1500);
  };

  return (
    <main className="min-h-screen bg-black text-white selection:bg-blue-500/30 overflow-hidden pt-24 pb-24">
      {/* Background Gradients */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-blue-600/10 blur-[150px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-purple-600/10 blur-[150px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Hero Section */}
        <section className="py-12 md:py-20 text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-blue-400 font-outfit">
              Start Your Journey
            </h1>
            <p className="text-xl md:text-2xl text-gray-400">
              Join Lakshya Institute of Technology and transform your passion into a thriving tech career.
            </p>
          </motion.div>
        </section>

        {/* Admission Team Banner Image */}
        <motion.section 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-24 w-full rounded-3xl overflow-hidden shadow-2xl border border-white/10 bg-white/5 relative"
        >
          {/* This assumes the user saved the image as admission-team.png in the public folder */}
          <div className="relative w-full aspect-[16/9] md:aspect-[21/5] bg-black/50">
            <Image
              src="/admission-team.png.png"
              alt="Lakshya Admission Team"
              fill
              className="object-contain"
              priority
            />
          </div>
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-center">
            <p className="text-lg md:text-xl font-medium text-white drop-shadow-md">
              Connect with our dedicated admission counselors today!
            </p>
          </div>
        </motion.section>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* Why Join Us Section */}
          <motion.section 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-12"
          >
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Lakshya?</h2>
              <p className="text-gray-400 text-lg leading-relaxed">
                We do not merely impart education; we instill a mindset of continuous curiosity and relentless pursuit of excellence. Here is what makes us different.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {REASONS.map((reason, idx) => (
                <div key={idx} className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm hover:bg-white/10 transition-colors group">
                  <div className="w-12 h-12 rounded-xl bg-blue-600/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <reason.icon className="w-6 h-6 text-blue-400" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{reason.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{reason.description}</p>
                </div>
              ))}
            </div>
          </motion.section>

          {/* Application Form */}
          <motion.section 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="bg-white/5 border border-white/10 rounded-[2.5rem] p-8 md:p-12 backdrop-blur-xl relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500" />
              
              <h3 className="text-2xl font-bold mb-8 text-center">Application Form</h3>

              {formStatus === "success" ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-10 h-10 text-green-400" />
                  </div>
                  <h4 className="text-2xl font-bold mb-2">Application Received!</h4>
                  <p className="text-gray-400">
                    Thank you for your interest. Our admission team will contact you shortly.
                  </p>
                  <button 
                    onClick={() => setFormStatus("idle")}
                    className="mt-8 text-blue-400 hover:text-blue-300 font-medium underline"
                  >
                    Submit another application
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-300">First Name</label>
                      <input 
                        required
                        type="text" 
                        placeholder="John"
                        className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all placeholder:text-gray-600"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-300">Last Name</label>
                      <input 
                        required
                        type="text" 
                        placeholder="Doe"
                        className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all placeholder:text-gray-600"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-300">Email Address</label>
                    <input 
                      required
                      type="email" 
                      placeholder="john@example.com"
                      className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all placeholder:text-gray-600"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-300">Phone Number</label>
                    <input 
                      required
                      type="tel" 
                      placeholder="+91 98765 43210"
                      className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all placeholder:text-gray-600"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-300">Interested Course</label>
                    <select 
                      required
                      defaultValue=""
                      className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all appearance-none"
                    >
                      <option value="" disabled>Select a program</option>
                      <option value="bca">BCA (Computer Applications)</option>
                      <option value="bsc-itm">BSc ITM (IT Management)</option>
                      <option value="bsc-ds">BSc DS (Data Science)</option>
                      <option value="bsc-cs">BSc CS (Computer Science)</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-300">Message (Optional)</label>
                    <textarea 
                      rows={3}
                      placeholder="Any specific questions?"
                      className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all placeholder:text-gray-600 resize-none"
                    />
                  </div>

                  <button 
                    type="submit"
                    disabled={formStatus === "submitting"}
                    className={cn(
                      "w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl transition-all shadow-lg hover:shadow-blue-500/25",
                      formStatus === "submitting" ? "opacity-70 cursor-not-allowed" : "hover:-translate-y-1"
                    )}
                  >
                    {formStatus === "submitting" ? (
                      <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : (
                      <>
                        <span>Submit Application</span>
                        <Send className="w-5 h-5" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.section>

        </div>
      </div>
    </main>
  );
}
