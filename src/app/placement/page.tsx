"use client";

import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { TrendingUp, Users, Building2, ChevronRight, ChevronLeft, Quote, CheckCircle2 } from "lucide-react";
import Link from "next/link";

const STATS = [
  { id: 1, label: "Highest Package", value: 24, suffix: " LPA", icon: TrendingUp, color: "text-green-400" },
  { id: 2, label: "Average Package", value: 12, suffix: " LPA", icon: Building2, color: "text-blue-400" },
  { id: 3, label: "Placement Rate", value: 98, suffix: "%", icon: Users, color: "text-purple-400" },
];

const RECRUITERS = [
  "Capgemini", "TCS", "Amazon", "CSM Technologies", "Cognizant",
  "IBM", "TCS", "Infosys", "Wipro", "Accenture",
  "Deloitte", "Hexaware", "Tech Mahindra", "HCL", "L&T Infotech"
];

const TESTIMONIALS = [
  {

    id: 1,
    name: "Ashirbad Dalabehera",
    role: "Software Engineer at Wipro",
    image: "https://media.licdn.com/dms/image/v2/D5603AQHseHRDxIGYbQ/profile-displayphoto-crop_800_800/B56ZxPpbfFIEAI-/0/1770862789251?e=1780531200&v=beta&t=K99ATfyiHddrChpFSN_GhBIu5fwE8zr16phpvnbthpE",
    quote: "The placement cell at LIT College was instrumental in helping me secure my dream job. The rigorous mock interviews and coding rounds prepared me for the actual Google interviews."
  },
  {
    id: 2,
    name: "Rahul Gouda",
    role: "Product Manager at Accenture",
    image: "https://media.licdn.com/dms/image/v2/D4D03AQFQA2m7WmeCHQ/profile-displayphoto-crop_800_800/B4DZ0ik39zGsA0-/0/1774401586655?e=1780531200&v=beta&t=TYEOIAAS1CLBMllLNdpH9bdTUkmaQ0Mxy8sx2sQyDEM",
    quote: "LIT's industry-aligned curriculum and the constant support from the faculty helped me transition from a student to a professional seamlessly. The opportunities here are truly world-class."
  },
  {
    id: 3,
    name: "Pradosh Kumar Rout",
    role: "Data Scientist at Deloitte",
    image: "/pradosh.png",
    quote: "The hands-on projects and internships facilitated by LIT College gave me the practical experience needed to stand out. I am grateful for the foundation LIT provided me."
  },
  {
    id: 4,
    name: "Subhasis Bhuyan",
    role: "Full Stack Developer at CSM",
    image: "https://media.licdn.com/dms/image/v2/D5635AQEP0CllU9M9TA/profile-framedphoto-shrink_800_800/B56Z4mwr0LJcAg-/0/1778766757484?e=1779429600&v=beta&t=EziCf5XXllI54zm7Ghnh4qedu92NXAHjcbRJ3qJJ8U8",
    quote: "LIT's focus on practical coding and regular industry interaction was a game changer. I secured a placement at CSM Technologies thanks to the intensive training sessions."
  },
  {
    id: 5,
    name: "Amarnath Muduli",
    role: "Software Developer at Capgemini",
    image: "https://media.licdn.com/dms/image/v2/D5603AQE9AVcV_PBgFA/profile-displayphoto-crop_800_800/B56Z3TVOgUIQAI-/0/1777367051905?e=1780531200&v=beta&t=Ig3WCTtomn6K_psEGaUcfS1TGYr-I9L7SlF_y2uwCGY",
    quote: "The supportive environment at LIT and the dedicated placement cell made my career transition very smooth. Capgemini's interview felt manageable because of the mock drills."
  },
  {
    id: 6,
    name: "Jyoti Ranjan Pradhan",
    role: "Associate Consultant at Infosys",
    image: "https://media.licdn.com/dms/image/v2/D5603AQHVzGgiImxOwg/profile-displayphoto-crop_800_800/B56Z4lW.zCIoAM-/0/1778743243171?e=1780531200&v=beta&t=LNkS0pw4YTwIEnEqifSmxjlecpdGZPzUBDDiyhLqlUc",
    quote: "Being a student at LIT College gave me the confidence to face high-pressure interviews. The specialized training in soft skills and technical domains was invaluable."
  }
];

const PROCESS_STEPS = [
  { title: "Registration", desc: "Sign up and submit your details for campus placement drives." },
  { title: "Resume Shortlisting", desc: "Companies review submitted resumes to select candidates matching their criteria." },
  { title: "Written Test", desc: "Aptitude, logical reasoning, and technical assessments to evaluate fundamental skills." },
  { title: "Voice Assessment", desc: "Evaluation of communication skills, fluency, and pronunciation." },
  { title: "HR / PI Round", desc: "Personal interviews focusing on technical knowledge, cultural fit, and behavioral aspects." },
  { title: "Final Selection", desc: "The final list of selected candidates is published by the recruiters." },
  { title: "Offer Letter Issued", desc: "Formal job offers outlining compensation, role, and terms are provided." },
  { title: "Joining Letter Issue", desc: "Candidates receive the official joining letter with a designated start date." },
  { title: "Onboarding", desc: "New hires join the company, complete joining formalities, and begin training." }
];

// Animated Counter Component
const Counter = ({ from, to, duration = 2, suffix = "" }: { from: number, to: number, duration?: number, suffix?: string }) => {
  const [count, setCount] = useState(from);
  const { ref, inView } = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      let startTimestamp: number;
      const step = (timestamp: number) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
        setCount(Math.floor(progress * (to - from) + from));
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    }
  }, [inView, from, to, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
};

export default function PlacementsPage() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => setCurrentTestimonial((prev) => (prev + 1) % TESTIMONIALS.length);
  const prevTestimonial = () => setCurrentTestimonial((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);

  return (
    <main className="min-h-screen bg-black text-white selection:bg-blue-500/30 overflow-hidden pt-24 pb-20">
      {/* Background Effect */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 right-[-20%] w-[60%] h-[60%] rounded-full bg-emerald-600/10 blur-[150px]" />
        <div className="absolute bottom-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-blue-600/10 blur-[150px]" />
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
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-sm font-medium text-gray-300">Class of 2026 Placements Ongoing</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-green-100 to-emerald-400 font-outfit">
              Launch Your Career
            </h1>
            <p className="text-xl md:text-2xl text-gray-400">
              Connecting exceptional talent with world-leading organizations.
            </p>
          </motion.div>
        </section>

        {/* Stats Section */}
        <section className="mb-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {STATS.map((stat, idx) => (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2, duration: 0.6 }}
                className="bg-white/5 border border-white/10 rounded-3xl p-8 text-center backdrop-blur-sm relative overflow-hidden group hover:border-white/20 transition-colors"
              >
                <div className={`absolute -right-4 -top-4 opacity-5 group-hover:opacity-10 transition-opacity`}>
                  <stat.icon className="w-48 h-48" />
                </div>
                <div className={`inline-flex p-4 rounded-2xl bg-white/5 mb-6 ${stat.color}`}>
                  <stat.icon className="w-8 h-8" />
                </div>
                <h3 className="text-5xl md:text-6xl font-bold mb-2 text-white">
                  <Counter from={0} to={stat.value} suffix={stat.suffix} />
                </h3>
                <p className="text-gray-400 font-medium text-lg uppercase tracking-wider">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Top Recruiters */}
        <section className="mb-24 py-12 border-y border-white/10 relative overflow-hidden">
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black to-transparent z-10" />

          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold">Our Top Recruiters</h2>
          </div>

          <div className="flex overflow-hidden">
            <motion.div
              animate={{ x: ["0%", "-50%"] }}
              transition={{ repeat: Infinity, ease: "linear", duration: 30 }}
              className="flex gap-16 whitespace-nowrap items-center px-8"
            >
              {[...RECRUITERS, ...RECRUITERS].map((recruiter, i) => (
                <div key={i} className="text-2xl md:text-4xl font-bold text-white/20 hover:text-white/60 transition-colors cursor-default">
                  {recruiter}
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Eligibility Criteria Image */}
        <section className="mb-24 w-full rounded-3xl overflow-hidden shadow-2xl border border-white/10 bg-white/5 relative aspect-[16/9] md:aspect-[2/1]">
          <Image
            src="/placement.png"
            alt="Eligibility Criteria for Freshers"
            fill
            className="object-contain"
          />
        </section>

        {/* Placement Process Timeline */}
        <section className="mb-24 max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Placement Process</h2>
            <p className="text-gray-400">A structured approach to ensure you land your dream job.</p>
          </div>

          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/50 via-purple-500/50 to-transparent transform -translate-x-1/2" />

            <div className="space-y-12">
              {PROCESS_STEPS.map((step, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6 }}
                  className={`relative flex items-center gap-8 ${idx % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"}`}
                >
                  <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-blue-500 transform -translate-x-1/2 shadow-[0_0_15px_rgba(59,130,246,0.8)] border-4 border-black z-10" />

                  <div className="hidden md:block w-1/2" /> {/* Spacer */}

                  <div className={`ml-12 md:ml-0 w-full md:w-1/2 bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-sm ${idx % 2 === 0 ? "md:mr-8 text-left md:text-right" : "md:ml-8 text-left"}`}>
                    <div className={`inline-flex items-center justify-center w-8 h-8 rounded-full bg-white/10 text-blue-400 font-bold mb-4 ${idx % 2 === 0 ? "md:ml-auto" : ""}`}>
                      {idx + 1}
                    </div>
                    <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                    <p className="text-gray-400">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Carousel */}
        <section className="mb-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Success Stories</h2>
            <p className="text-gray-400">Hear from our alumni who are making an impact globally.</p>
          </div>

          <div className="relative max-w-4xl mx-auto bg-white/5 border border-white/10 rounded-[2.5rem] md:rounded-[3rem] p-6 md:p-16 backdrop-blur-sm">
            <Quote className="absolute top-6 left-6 md:top-12 md:left-12 w-12 h-12 md:w-16 md:h-16 text-white/5 -z-10" />

            <div className="overflow-hidden relative min-h-[450px] sm:min-h-[380px] md:min-h-[300px]">
              {TESTIMONIALS.map((testimonial, idx) => (
                <motion.div
                  key={testimonial.id}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{
                    opacity: currentTestimonial === idx ? 1 : 0,
                    x: currentTestimonial === idx ? 0 : (idx < currentTestimonial ? -50 : 50),
                    pointerEvents: currentTestimonial === idx ? "auto" : "none"
                  }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0 flex flex-col md:flex-row items-center gap-6 md:gap-8 justify-center md:justify-start"
                >
                  <div className="w-24 h-24 sm:w-32 sm:h-32 md:w-48 md:h-48 shrink-0 relative rounded-full overflow-hidden border-4 border-white/10">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      sizes="(max-width: 768px) 96px, (max-width: 1200px) 128px, 192px"
                      className="object-cover"
                    />
                  </div>
                  <div className="text-center md:text-left">
                    <p className="text-base sm:text-lg md:text-2xl text-gray-300 italic mb-4 md:mb-8 leading-relaxed">
                      "{testimonial.quote}"
                    </p>
                    <div>
                      <h4 className="text-lg md:text-xl font-bold text-white">{testimonial.name}</h4>
                      <p className="text-sm md:text-base text-blue-400">{testimonial.role}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="flex justify-center gap-4 mt-8">
              <button
                onClick={prevTestimonial}
                className="p-3 rounded-full border border-white/10 hover:bg-white/10 transition-colors"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextTestimonial}
                className="p-3 rounded-full border border-white/10 hover:bg-white/10 transition-colors"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="p-12 rounded-[3rem] bg-gradient-to-b from-emerald-900/40 to-black border border-emerald-500/30"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Build Your Future?</h2>
            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
              Join LIT  and gain the skills, network, and opportunities to succeed in the modern world.
            </p>
            <Link
              href="/courses"
              className="inline-flex items-center gap-2 bg-white text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-emerald-50 transition-colors shadow-[0_0_40px_rgba(255,255,255,0.3)] hover:scale-105 duration-300"
            >
              Explore Courses
              <ChevronRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </section>

      </div>
    </main>
  );
}
