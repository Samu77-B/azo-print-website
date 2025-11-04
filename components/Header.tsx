"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.png"
              alt="Azo Print Logo"
              width={150}
              height={60}
              className="h-12 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-brand-dark-slate hover:text-brand-dodger-blue transition-colors">
              Home
            </Link>
            <Link href="/services" className="text-brand-dark-slate hover:text-brand-dodger-blue transition-colors">
              Services
            </Link>
            <Link href="/portfolio" className="text-brand-dark-slate hover:text-brand-dodger-blue transition-colors">
              Portfolio
            </Link>
            <Link href="/about" className="text-brand-dark-slate hover:text-brand-dodger-blue transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-brand-dark-slate hover:text-brand-dodger-blue transition-colors">
              Contact
            </Link>
            <Link 
              href="/shop" 
              className="bg-brand-dodger-blue text-white px-6 py-2 rounded-md hover:bg-brand-dodger-blue-light transition-colors"
            >
              Shop
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-md text-brand-dark-slate hover:bg-brand-white-smoke"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <Link
              href="/"
              className="block px-3 py-2 text-brand-dark-slate hover:bg-brand-white-smoke rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/services"
              className="block px-3 py-2 text-brand-dark-slate hover:bg-brand-white-smoke rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              href="/portfolio"
              className="block px-3 py-2 text-brand-dark-slate hover:bg-brand-white-smoke rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Portfolio
            </Link>
            <Link
              href="/about"
              className="block px-3 py-2 text-brand-dark-slate hover:bg-brand-white-smoke rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/contact"
              className="block px-3 py-2 text-brand-dark-slate hover:bg-brand-white-smoke rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <Link
              href="/shop"
              className="block px-3 py-2 bg-brand-dodger-blue text-white rounded-md hover:bg-brand-dodger-blue-light"
              onClick={() => setIsMenuOpen(false)}
            >
              Shop
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}

