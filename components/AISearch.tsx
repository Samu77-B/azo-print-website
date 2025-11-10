"use client";

import Link from "next/link";
import { useState } from "react";

import { featuredServices } from "@/data/services";

type KnowledgeItem = {
  title: string;
  summary: string;
  link: string;
  category: string;
  tags: string[];
};

const supplementalKnowledge: KnowledgeItem[] = [
  {
    title: "Portfolio Highlights",
    summary:
      "Browse recent exhibition, marketing, and bespoke print projects completed in our Holborn studio.",
    link: "/portfolio",
    category: "Showcase",
    tags: ["portfolio", "examples", "case studies", "inspiration"],
  },
  {
    title: "Request a Quick Quote",
    summary:
      "Send project details for same-day pricing and production timelines from the Azo Print team.",
    link: "/contact",
    category: "Support",
    tags: ["quote", "pricing", "contact", "support", "timeline"],
  },
  {
    title: "About Our Print Hub",
    summary:
      "Central London print experts offering same-day turnarounds for business, academic, and creative projects.",
    link: "/",
    category: "Company",
    tags: ["about", "central london", "same day", "holborn", "covent garden"],
  },
  {
    title: "File Setup & Design Help",
    summary:
      "In-house designers can refine artwork, set up print-ready files, and advise on finishes and materials.",
    link: "/services/graphic-design",
    category: "Design",
    tags: ["artwork", "file setup", "design help", "prepress"],
  },
];

const knowledgeBase: KnowledgeItem[] = [
  ...featuredServices.map((service) => {
    const wordsFromName = service.name
      .toLowerCase()
      .split(/[\s,&/-]+/)
      .filter(Boolean);
    const extraTags = service.description
      .toLowerCase()
      .split(/[\s,&/-]+/)
      .filter((word) => word.length > 3);

    return {
      title: service.name,
      summary: service.description,
      link: service.href,
      category: "Services",
      tags: Array.from(
        new Set([
          "service",
          ...wordsFromName,
          ...extraTags,
          service.href.replace("/services/", ""),
        ]),
      ),
    };
  }),
  ...supplementalKnowledge,
];

const suggestedPrompts = [
  "Do you offer same-day exhibition printing?",
  "Can you bind my dissertation today?",
  "What speciality finishes can you do?",
  "Do you print custom merchandise?",
];

function scoreMatch(item: KnowledgeItem, query: string) {
  const normalizedQuery = query.toLowerCase();
  const titleScore = item.title.toLowerCase().includes(normalizedQuery) ? 3 : 0;
  const summaryScore = item.summary.toLowerCase().includes(normalizedQuery)
    ? 2
    : 0;
  const tagScore = item.tags.some((tag) =>
    tag.toLowerCase().includes(normalizedQuery),
  )
    ? 2
    : 0;
  const words = normalizedQuery.split(/\s+/).filter(Boolean);
  const wordMatches = words.reduce((acc, word) => {
    const inTitle = item.title.toLowerCase().includes(word) ? 1.5 : 0;
    const inSummary = item.summary.toLowerCase().includes(word) ? 1 : 0;
    const inTags = item.tags.some((tag) => tag.toLowerCase().includes(word))
      ? 1
      : 0;
    return acc + inTitle + inSummary + inTags;
  }, 0);
  return titleScore + summaryScore + tagScore + wordMatches;
}

function buildAnswer(query: string, results: KnowledgeItem[]) {
  if (!results.length) {
    return `I could not find a direct match for "${query}", but our team can usually help with bespoke requests. Drop us a note via the contact form and we will advise right away.`;
  }

  const { title, summary, category } = results[0];
  const extras =
    results.length > 1
      ? ` I have also listed a couple of related pages from the site that visitors usually explore next.`
      : "";

  return `Here is what stands out for "${query}": on our website the ${title} page under ${category.toLowerCase()} covers this. ${summary}${extras}`;
}

export default function AISearch() {
  const [query, setQuery] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [results, setResults] = useState<KnowledgeItem[]>([]);
  const [answer, setAnswer] = useState<string | null>(null);

  const hasQuery = query.trim().length > 0;

  const performSearch = (searchTerm: string) => {
    const cleanedQuery = searchTerm.trim();
    if (!cleanedQuery) {
      return;
    }

    setIsSearching(true);
    setResults([]);
    setAnswer(null);

    // Mimic processing delay for demo flair
    setTimeout(() => {
      const normalizedQuery = cleanedQuery.toLowerCase();
      const scored = knowledgeBase
        .map((item) => ({
          item,
          score: scoreMatch(item, normalizedQuery),
        }))
        .filter(({ score }) => score > 0)
        .sort((a, b) => b.score - a.score)
        .map(({ item }) => item)
        .slice(0, 3);

      setResults(scored);
      setAnswer(buildAnswer(cleanedQuery, scored));
      setIsSearching(false);
    }, 650);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    performSearch(query);
  };

  const handlePromptClick = (prompt: string) => {
    setQuery(prompt);
    performSearch(prompt);
  };

  return (
    <div className="mt-8 max-w-3xl mx-auto bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-md shadow-lg">
      <form onSubmit={handleSubmit}>
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
            placeholder="Ask Azo anything about print, binding, finishes, timelines..."
            className="w-full pl-12 pr-32 py-4 bg-white/10 border border-white/20 rounded-lg text-white placeholder-brand-gainsboro focus:outline-none focus:ring-2 focus:ring-brand-dodger-blue/50 focus:border-transparent"
          />
          <button
            type="submit"
            disabled={isSearching || !hasQuery}
            style={{ backgroundColor: "#EC008C", opacity: 1 }}
            className="absolute right-2 px-6 py-2 text-white rounded-md font-semibold hover:bg-brand-deep-pink-light transition-colors disabled:opacity-60 disabled:cursor-not-allowed border-grow-clockwise-white"
          >
            {isSearching ? "Searching..." : "Search"}
          </button>
        </div>
      </form>

      <div className="mt-4 flex flex-wrap gap-2 justify-center">
        {suggestedPrompts.map((prompt) => (
          <button
            key={prompt}
            type="button"
            onClick={() => handlePromptClick(prompt)}
            className="px-3 py-1 rounded-full text-sm text-white/90 bg-white/10 border border-white/15 hover:border-white/40 transition-colors"
          >
            {prompt}
          </button>
        ))}
      </div>

      <p className="text-center mt-4 text-white/80 text-sm uppercase tracking-widest">
        AI Powered Service Finder
      </p>

      {answer && (
        <div className="mt-6 rounded-xl border border-white/15 bg-white/10 p-4 text-white/90">
          <p className="text-sm font-semibold text-brand-gainsboro uppercase mb-2">
            AI summary
          </p>
          <p className="leading-relaxed">{answer}</p>
        </div>
      )}

      {isSearching && (
        <div className="mt-6 flex items-center justify-center gap-3 text-white/80">
          <span className="h-3 w-3 rounded-full bg-white/60 animate-pulse" />
          <span className="text-sm tracking-wide uppercase">Thinking...</span>
        </div>
      )}

      {!isSearching && results.length > 0 && (
        <div className="mt-6 grid gap-4">
          {results.map((item) => (
            <Link
              key={item.title}
              href={item.link}
              className="block rounded-xl border border-white/10 bg-white/5 p-4 transition-transform hover:-translate-y-1 hover:border-brand-dodger-blue/60"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs uppercase tracking-wider text-brand-gainsboro">
                    {item.category}
                  </p>
                  <h3 className="mt-1 text-xl font-semibold text-white">
                    {item.title}
                  </h3>
                </div>
                <span className="text-xs text-white/70 border border-white/20 rounded-full px-2 py-0.5">
                  Learn more
                </span>
              </div>
              <p className="mt-3 text-white/80">{item.summary}</p>
            </Link>
          ))}
        </div>
      )}

      {!isSearching && hasQuery && results.length === 0 && (
        <div className="mt-6 rounded-xl border border-white/15 bg-white/5 p-4 text-white/80">
          <p className="font-semibold text-white">No direct matches yet</p>
          <p className="mt-1 text-sm">
            Try asking about a service, timeframe, or finish. Our team can also
            help with bespoke requests via the contact page.
          </p>
        </div>
      )}
    </div>
  );
}

