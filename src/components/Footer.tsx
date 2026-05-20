import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-gray-50 dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="flex items-center gap-4 mb-6 group">
              <div className="relative w-12 h-12 bg-white rounded-xl shadow-sm border border-gray-100 flex items-center justify-center p-1.5 group-hover:scale-105 transition-transform">
                <Image 
                  src="/logo.png" 
                  alt="LIT Logo" 
                  fill 
                  className="object-contain p-1"
                />
              </div>
              <span className="text-xl font-bold tracking-tight text-gray-900 dark:text-white leading-tight">
                Lakshya Institute <br /> of Technology
              </span>
            </Link>
            <p className="text-gray-500 dark:text-gray-400 text-sm mb-6">
              Empowering the next generation of leaders, innovators, and creators through world-class education.
            </p>
            <div className="flex space-x-3">
              {[
                { 
                  name: 'Facebook',
                  href: "https://www.facebook.com/lakshyainstituteoftechnology/",
                  path: "M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z",
                  color: "hover:text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/30" 
                },
                { 
                  name: 'Twitter',
                  href: "https://x.com/lit_bbsr",
                  path: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z",
                  color: "hover:text-black dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800" 
                },
                { 
                  name: 'Instagram',
                  href: "https://www.instagram.com/lakshya_institute_lit/",
                  path: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.266.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z",
                  color: "hover:text-pink-600 hover:bg-pink-50 dark:hover:bg-pink-900/30" 
                },
                { 
                  name: 'LinkedIn',
                  href: "https://www.linkedin.com/company/lakshya-institute-of-technology-bhubaneswar/posts/?feedView=all",
                  path: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0z",
                  color: "hover:text-blue-700 hover:bg-blue-50 dark:hover:bg-blue-900/30" 
                },
              ].map((social, i) => (
                <a 
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className={`w-9 h-9 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 flex items-center justify-center text-gray-500 dark:text-gray-400 transition-all duration-300 ${social.color}`}
                >
                  <svg 
                    className="w-5 h-5 fill-current" 
                    viewBox="0 0 24 24" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d={social.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white tracking-wider uppercase mb-4">
              Programs
            </h3>
            <ul className="space-y-3">
              <li><Link href="/courses/bca" className="text-base text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">BCA</Link></li>
              <li><Link href="/courses/bsc-itm" className="text-base text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">BSc ITM</Link></li>
              <li><Link href="/courses/bsc-ds" className="text-base text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">BSc DS</Link></li>
              <li><Link href="/courses/bsc-cs" className="text-base text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">BSc CS</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white tracking-wider uppercase mb-4">
              University
            </h3>
            <ul className="space-y-3">
              <li><Link href="/about" className="text-base text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">About Us</Link></li>
              <li><Link href="/faculties" className="text-base text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">Faculties</Link></li>
              <li><Link href="/notes" className="text-base text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">LIT Notes</Link></li>
              <li><Link href="/campus-life" className="text-base text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">Campus Life</Link></li>
              <li><Link href="/contact" className="text-base text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white tracking-wider uppercase mb-4">
              Legal
            </h3>
            <ul className="space-y-3">
              <li><Link href="/privacy" className="text-base text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-base text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-200 dark:border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-base text-gray-400">
            &copy; {new Date().getFullYear()} Lakshya Institute of Technology. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
