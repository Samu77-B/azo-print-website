"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-transparent sticky top-0 z-50 backdrop-blur-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.png"
              alt="Azo Print Logo"
              width={150}
              height={60}
              className="h-[72px] w-auto drop-shadow-lg"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-white transition-colors drop-shadow-lg px-3 py-2 rounded-md border-grow-clockwise-white">
              Home
            </Link>
            <Link href="/services" className="text-white transition-colors drop-shadow-lg px-3 py-2 rounded-md border-grow-clockwise-white">
              Services
            </Link>
            <Link href="/portfolio" className="text-white transition-colors drop-shadow-lg px-3 py-2 rounded-md border-grow-clockwise-white">
              Portfolio
            </Link>
            <Link href="/about" className="text-white transition-colors drop-shadow-lg px-3 py-2 rounded-md border-grow-clockwise-white">
              About
            </Link>
            <Link href="/contact" className="text-white transition-colors drop-shadow-lg px-3 py-2 rounded-md border-grow-clockwise-white">
              Contact
            </Link>
            <Link 
              href="/shop" 
              className="bg-brand-deep-pink text-white px-6 py-2 rounded-md hover:bg-brand-deep-pink-light transition-colors shadow-lg border-grow-clockwise-white"
            >
              Print
            </Link>
          </div>

          {/* Mobile Menu Button - Plus Sign in Circle */}
          <button
            className="md:hidden h-[60px] w-[60px] rounded-full bg-white border border-black flex items-center justify-center transition-all duration-300 hover:scale-105 active:scale-95 drop-shadow-lg"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className={`h-7 w-7 text-black transition-transform duration-300 ${isMenuOpen ? 'rotate-45' : ''}`}
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M12 4v16M4 12h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen
              ? 'max-h-96 opacity-100 pb-4 space-y-2 bg-brand-dark-slate/90 backdrop-blur-md rounded-lg mt-2 p-2 pointer-events-auto'
              : 'max-h-0 opacity-0 pointer-events-none'
          }`}
        >
            <Link
              href="/"
              className="block px-3 py-2 text-white hover:bg-white/20 rounded-md transition-colors border-grow-clockwise-white"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/services"
              className="block px-3 py-2 text-white hover:bg-white/20 rounded-md transition-colors border-grow-clockwise-white"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              href="/portfolio"
              className="block px-3 py-2 text-white hover:bg-white/20 rounded-md transition-colors border-grow-clockwise-white"
              onClick={() => setIsMenuOpen(false)}
            >
              Portfolio
            </Link>
            <Link
              href="/about"
              className="block px-3 py-2 text-white hover:bg-white/20 rounded-md transition-colors border-grow-clockwise-white"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/contact"
              className="block px-3 py-2 text-white hover:bg-white/20 rounded-md transition-colors border-grow-clockwise-white"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <Link
              href="/shop"
              className="block px-3 py-2 bg-brand-deep-pink text-white rounded-md hover:bg-brand-deep-pink-light transition-colors border-grow-clockwise-white"
              onClick={() => setIsMenuOpen(false)}
            >
              Print
            </Link>
          </div>
      </nav>
    </header>
  );
}

