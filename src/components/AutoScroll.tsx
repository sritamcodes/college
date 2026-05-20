"use client";

import { useEffect, useRef } from "react";

export default function AutoScroll() {
  const isScrolling = useRef(false);
  const lastScrollTime = useRef(Date.now());

  useEffect(() => {
    const handleUserScroll = () => {
      lastScrollTime.current = Date.now();
    };

    window.addEventListener("wheel", handleUserScroll);
    window.addEventListener("touchstart", handleUserScroll);

    const interval = setInterval(() => {
      // If no user interaction for 5 seconds, start slow crawl
      if (Date.now() - lastScrollTime.current > 5000) {
        window.scrollBy({ top: 1, behavior: "smooth" });
      }
    }, 50);

    return () => {
      window.removeEventListener("wheel", handleUserScroll);
      window.removeEventListener("touchstart", handleUserScroll);
      clearInterval(interval);
    };
  }, []);

  return null;
}
