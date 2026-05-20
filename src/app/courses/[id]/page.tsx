import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Download, FileText, ChevronRight, ArrowLeft, BookOpen, Clock, Award, Star } from "lucide-react";
import ClientCoursePage from "./ClientCoursePage"; // We'll move the animated parts to a client component

const COURSES_DATA: Record<string, any> = {
  "bca": {
    title: "BCA (Computer Applications)",
    description: "A comprehensive 3-year undergraduate program focusing on computer applications, software development, and modern programming technologies.",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
    color: "blue",
    duration: "3 Years",
    semesters: 6,
    credits: 140,
  },
  "bsc-itm": {
    title: "BSc ITM (IT Management)",
    description: "Learn to bridge the gap between business management and cutting-edge IT solutions in this comprehensive 3-year program.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
    color: "violet",
    duration: "3 Years",
    semesters: 6,
    credits: 140,
  },
  "bsc-ds": {
    title: "BSc DS (Data Science)",
    description: "Dive deep into analytics, machine learning, and big data to solve complex real-world problems with data-driven insights.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
    color: "emerald",
    duration: "3 Years",
    semesters: 6,
    credits: 144,
  },
  "bsc-cs": {
    title: "BSc CS (Computer Science)",
    description: "Master the theoretical foundations of computing, advanced algorithmic problem solving, and system architecture.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
    color: "pink",
    duration: "3 Years",
    semesters: 6,
    credits: 142,
  }
};

export function generateStaticParams() {
  return Object.keys(COURSES_DATA).map((id) => ({ id }));
}

export default async function CoursePage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const course = COURSES_DATA[resolvedParams.id];

  if (!course) {
    notFound();
  }

  // We pass the data to a Client Component so we can use Framer Motion
  return <ClientCoursePage course={course} courseId={resolvedParams.id} />;
}
