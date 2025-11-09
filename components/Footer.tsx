import Link from "next/link";

type HighlightIcon = "stars" | "target" | "zero" | "cloud" | "bolt" | "bag";

export default function Footer() {
  const sustainabilityHighlights: { value: string; description: string; icon: HighlightIcon }[] = [
    { value: "Silver", description: "Recycling Award", icon: "stars" },
    { value: "100%", description: "Recycling Rate", icon: "target" },
    { value: "ZERO", description: "to landfill", icon: "zero" },
    { value: "8", description: "Tonnes of CO2 avoided", icon: "cloud" },
    { value: "0", description: "kW Energy Produced", icon: "bolt" },
    { value: "0", description: "Tonnes Diverted from Landfill", icon: "bag" },
  ];

  const renderIcon = (icon: HighlightIcon): JSX.Element | null => {
    const baseClass =
      "flex items-center justify-center w-14 h-14 rounded-full border border-white/20 bg-white/10 mx-auto";

    switch (icon) {
      case "stars":
        return (
          <div className={`${baseClass} text-brand-lavender-blue`}>
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-7 w-7"
              aria-hidden="true"
            >
              <path d="M6.868 10.684 5 8.5l3-.436L9.5 5l1.5 3.064 3 .436-2 2.184.5 3.316L9.5 12.5l-3 1.5.368-3.316Z" />
              <path d="m15.868 14.684-1.868-2.184 3-.436L18.5 9l1.5 3.064 3 .436-2 2.184.5 3.316-3-1.5-3 1.5.368-3.316Z" />
            </svg>
          </div>
        );
      case "target":
        return (
          <div className={`${baseClass} text-brand-dodger-blue`}>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              className="h-7 w-7"
              aria-hidden="true"
            >
              <circle cx="12" cy="12" r="8" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="12" cy="12" r="1.5" fill="currentColor" stroke="none" />
            </svg>
          </div>
        );
      case "zero":
        return (
          <div className={`${baseClass} text-brand-dodger-blue`}>
            <span className="text-xl font-semibold tracking-wide">0</span>
          </div>
        );
      case "cloud":
        return (
          <div className={`${baseClass} text-brand-dodger-blue`}>
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-7 w-7"
              aria-hidden="true"
            >
              <path d="M7 18a5 5 0 0 1 0-10 6 6 0 0 1 11.197-1.804A4.5 4.5 0 1 1 18 18H7Z" />
            </svg>
          </div>
        );
      case "bolt":
        return (
          <div className={`${baseClass} text-brand-dodger-blue`}>
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-7 w-7"
              aria-hidden="true"
            >
              <path d="M13 2 5 13h6l-1 9 8-11h-6l1-9Z" />
            </svg>
          </div>
        );
      case "bag":
        return (
          <div className={`${baseClass} text-brand-dodger-blue`}>
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-7 w-7"
              aria-hidden="true"
            >
              <path d="M9 4a3 3 0 0 1 6 0h1.5a1.5 1.5 0 0 1 1.498 1.402L18.5 6l-1 14a2 2 0 0 1-1.85 1.994L15.5 22h-7a2 2 0 0 1-1.995-1.85L6.5 20l-1-14a1.5 1.5 0 0 1 1.355-1.497L7 4H9Zm3-1a1 1 0 0 0-1 1h2a1 1 0 0 0-1-1ZM8 8l.75 10h6.5L16 8H8Z" />
            </svg>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <footer className="bg-brand-dark-slate text-white">
      {/* Pink Band */}
      <div className="w-full h-[50px] bg-brand-deep-pink"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-4 font-playfair">Azo Print</h3>
            <p className="text-brand-gainsboro mb-4">
              Professional printing services in the heart of London. Quality prints for your business needs.
            </p>
            <p className="text-brand-gainsboro">
              Located in Central London, UK
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 font-playfair">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/services" className="text-brand-gainsboro hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-brand-gainsboro hover:text-white transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-brand-gainsboro hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-brand-gainsboro hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 font-playfair">Contact</h4>
            <ul className="space-y-2 text-brand-gainsboro">
              <li>London, UK</li>
              <li>
                <a href="mailto:info@azoprint.com" className="hover:text-white transition-colors">
                  info@azoprint.com
                </a>
              </li>
              <li>
                <a href="tel:+442012345678" className="hover:text-white transition-colors">
                  +44 20 1234 5678
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 rounded-xl border border-white/10 bg-white/5 p-6">
          <h4 className="text-lg font-semibold text-white text-center font-playfair">
            Sustainability & Recycling Achievements
          </h4>
          <div className="mt-6 grid grid-cols-1 gap-6 text-center sm:grid-cols-2 lg:grid-cols-6">
            {sustainabilityHighlights.map((highlight) => (
              <div key={highlight.description} className="space-y-3">
                {renderIcon(highlight.icon)}
                <div className="space-y-1">
                  <p className="text-xl font-semibold text-white">{highlight.value}</p>
                  <p className="text-sm text-brand-gainsboro">{highlight.description}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-6 text-center text-xs text-brand-gainsboro">
            Verified Recycling and Environment Achievements 2024 – Powered by{" "}
            <Link
              href="https://www.firstmile.co.uk/"
              target="_blank"
              rel="noreferrer"
              className="text-brand-dodger-blue underline-offset-2 hover:underline"
            >
              First Mile
            </Link>
          </p>
        </div>

        <div className="border-t border-brand-dark-slate-light mt-8 pt-8 text-center text-brand-gainsboro">
          <p>&copy; {new Date().getFullYear()} Azo Print. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

