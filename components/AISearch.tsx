"use client";

import { useState } from "react";

export default function AISearch() {
  const [query, setQuery] = useState("");
  const [isSearching, setIsSearching] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      setIsSearching(true);
      // TODO: Implement AI search functionality
      console.log("Searching for:", query);
      // Simulate search delay
      setTimeout(() => {
        setIsSearching(false);
      }, 1000);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-8 max-w-2xl mx-auto">
      <div className="relative flex items-center">
        <div className="absolute left-4 flex items-center pointer-events-none">
          <svg
            className="w-5 h-5 text-brand-gainsboro"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
            />
          </svg>
        </div>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Ask AI: What printing services do you offer?"
          className="w-full pl-12 pr-32 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-brand-gainsboro focus:outline-none focus:ring-2 focus:ring-brand-dodger-blue/50 focus:border-transparent"
        />
        <button
          type="submit"
          disabled={isSearching || !query.trim()}
          style={{ backgroundColor: '#EC008C', opacity: 1 }}
          className="absolute right-2 px-6 py-2 text-white rounded-md font-semibold hover:bg-brand-deep-pink-light transition-colors disabled:opacity-50 disabled:cursor-not-allowed border-grow-clockwise-white"
        >
          {isSearching ? "Searching..." : "Search"}
        </button>
      </div>
    </form>
  );
}

