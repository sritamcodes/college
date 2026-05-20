"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Faculties", path: "/faculties" },
  { name: "Courses", path: "/courses" },
  { name: "LIT Notes", path: "/notes" },
  { name: "Placements", path: "/placement" },
  { name: "Contact Us", path: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <nav className="fixed top-6 left-0 right-0 z-50 px-4 pointer-events-none">
      <div className="max-w-7xl mx-auto pointer-events-auto">
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className={cn(
            "flex items-center justify-between px-6 py-3 rounded-full transition-all duration-500",
            scrolled 
              ? "bg-white/60 dark:bg-black/40 backdrop-blur-2xl shadow-[0_8px_32px_rgba(0,0,0,0.1)] border border-white/20 dark:border-white/10" 
              : "bg-transparent"
          )}
        >
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group shrink-0">
            <motion.div 
              whileHover={{ rotate: 10, scale: 1.1 }}
              className="relative w-10 h-10 overflow-hidden rounded-xl"
            >
              <Image
                src="/logo.png"
                alt="Logo"
                fill
                className="object-contain"
              />
            </motion.div>
            <span className={cn(
              "font-bold tracking-tight text-lg transition-colors whitespace-nowrap",
              scrolled ? "text-gray-900 dark:text-white" : "text-white"
            )}>
              Lakshya Institute of Technology
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.path;
              return (
                <Link
                  key={link.name}
                  href={link.path}
                  className={cn(
                    "relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-full whitespace-nowrap",
                    isActive 
                      ? "text-blue-600 dark:text-blue-400" 
                      : (scrolled ? "text-gray-600 dark:text-gray-400 hover:text-blue-600" : "text-white/70 hover:text-blue-400")
                  )}
                >
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="nav-pill"
                      className="absolute inset-0 bg-blue-600/10 dark:bg-blue-400/10 rounded-full -z-10"
                      transition={{ type: "spring", bounce: 0.25, duration: 0.5 }}
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center">
            <Link
              href="/apply"
              className={cn(
                "group inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-bold transition-all duration-300",
                scrolled
                  ? "bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-500/25"
                  : "bg-white text-blue-600 hover:bg-gray-100"
              )}
            >
              Apply
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={cn(
                "p-2 rounded-full transition-colors",
                scrolled ? "text-gray-900 dark:text-white" : "text-white"
              )}
            >
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </motion.div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            className="fixed inset-x-4 top-24 z-50 md:hidden bg-white/90 dark:bg-gray-900/90 backdrop-blur-2xl rounded-3xl border border-gray-200 dark:border-gray-800 p-6 shadow-2xl pointer-events-auto"
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.path}
                  className="px-4 py-4 text-lg font-medium text-gray-900 dark:text-white border-b border-gray-100 dark:border-gray-800 last:border-0"
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="/apply"
                className="mt-4 w-full py-4 bg-blue-600 text-white rounded-2xl text-center font-bold"
              >
                Apply Now
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

