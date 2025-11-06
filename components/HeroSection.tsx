"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import AISearch from "@/components/AISearch";

export default function HeroSection() {
  const [scrollY, setScrollY] = useState(0);
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        // Calculate parallax based on hero section's position
        // When hero is at top, offset is 0. As we scroll, increase offset
        if (rect.top <= 0 && rect.bottom > 0) {
          // Hero is partially scrolled past - calculate offset based on how much
          const scrolled = Math.abs(rect.top);
          setScrollY(scrolled);
        } else if (rect.top > 0) {
          // Hero is fully visible - no parallax yet
          setScrollY(0);
        }
      }
    };

    // Set initial scroll position
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Calculate parallax offset (background moves slower than scroll)
  // Using 0.3 multiplier for subtle effect
  const parallaxOffset = scrollY * 0.3;

  return (
    <section
      ref={heroRef}
      className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden -mt-20"
    >
      {/* Background Image with Parallax */}
      <div className="absolute inset-0 z-0">
        <div
          style={{
            transform: `translateY(${parallaxOffset}px)`,
            transition: "transform 0.1s ease-out",
          }}
          className="absolute inset-0 scale-110"
        >
          <Image
            src="/azo-print-holborn-london.jpg"
            alt="Azo Print storefront in Holborn, London"
            fill
            priority
            className="object-cover brightness-110 contrast-105"
            sizes="100vw"
            quality={90}
          />
        </div>
        {/* Overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark-slate/60 via-brand-dark-slate/50 to-brand-dark-slate/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-white drop-shadow-lg font-playfair">
            Professional Print Services
            <span className="block text-white mt-2">in the Heart of London</span>
          </h1>
          <div className="flex flex-col sm:flex-row gap-4 justify-center hidden">
            <Link
              href="/services"
              className="bg-white text-brand-dark-slate px-8 py-3 rounded-md font-semibold hover:bg-brand-white-smoke transition-colors text-lg shadow-lg border-grow-clockwise-white"
            >
              View Our Services
            </Link>
            <Link
              href="/contact"
              className="bg-transparent border-2 border-transparent hover:border-white text-white px-8 py-3 rounded-md font-semibold transition-colors text-lg shadow-lg"
            >
              Get a Quote
            </Link>
          </div>
          <AISearch />
          <div className="mt-6 flex justify-center">
            <Link
              href="/contact"
              className="inline-block bg-brand-deep-pink text-white px-8 py-3 rounded-md font-semibold hover:bg-brand-deep-pink-light transition-colors text-lg shadow-lg border-grow-clockwise-white"
            >
              Quick Quote
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

