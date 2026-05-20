import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Chatbot from "@/components/Chatbot";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lakshya Institute of Technology | Empowering Future Leaders",
  description: `About Us: Lakshya Institute of Technology (LIT), Bhubaneswar, Affiliated under UTKAL University and Permanent recognized by Govt of Odisha, established in 2016 by Prof. Susant K. Rout, is dedicated to bridging academics and industry. Affiliated with Utkal University, LIT offers +3 degree programs in Computer Science, BCA, ITM, and Data Science, along with a Higher Secondary School and LIT Training for advanced skill development—providing students a strong academic foundation and career-focused education.`,
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${outfit.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <Chatbot />
      </body>
    </html>
  );
}
