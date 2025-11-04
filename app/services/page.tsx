import Link from "next/link";

const services = [
  {
    name: "Documents & Reports",
    slug: "documents-reports",
    description: "Professional document printing and report binding services for businesses.",
    icon: "📄",
  },
  {
    name: "Flyers & Leaflets",
    slug: "flyers-leaflets",
    description: "Eye-catching promotional materials designed to grab attention and drive results.",
    icon: "📋",
  },
  {
    name: "Stationery & Business Cards",
    slug: "stationery-business-cards",
    description: "Premium business cards and corporate stationery that represents your brand professionally.",
    icon: "💼",
  },
  {
    name: "Cards & Postcards",
    slug: "cards-postcards",
    description: "Custom greeting cards, invitations, and postcards for personal and business use.",
    icon: "🎴",
  },
  {
    name: "Posters & Large Prints",
    slug: "posters-large-prints",
    description: "Large format printing for posters, banners, and signage that makes a statement.",
    icon: "🖼️",
  },
  {
    name: "Book Binding",
    slug: "book-binding",
    description: "Professional book binding services for reports, catalogues, and publications.",
    icon: "📚",
  },
  {
    name: "Printing & Copying",
    slug: "printing-copying",
    description: "High-quality printing and copying services for all your document needs.",
    icon: "🖨️",
  },
  {
    name: "Mugs & T-Shirts",
    slug: "mugs-tshirts",
    description: "Custom branded merchandise including mugs, t-shirts, and promotional items.",
    icon: "☕",
  },
  {
    name: "Stands & Banners",
    slug: "stands-banners",
    description: "Exhibition stands, banners, and display materials for events and trade shows.",
    icon: "🚩",
  },
  {
    name: "Special Prints",
    slug: "special-prints",
    description: "Specialty printing services including foiling, embossing, and unique finishes.",
    icon: "✨",
  },
  {
    name: "Finishing & Mounting",
    slug: "finishing-mounting",
    description: "Professional finishing services including lamination, mounting, and framing.",
    icon: "🎨",
  },
  {
    name: "Graphic Design",
    slug: "graphic-design",
    description: "Expert graphic design services to bring your vision to life.",
    icon: "🎯",
  },
];

export const metadata = {
  title: "Services - Azo Print",
  description: "Comprehensive printing services in London. Business cards, flyers, posters, book binding, and more.",
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-brand-dark-slate via-brand-dark-slate-light to-brand-dark-slate text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              Our Services
            </h1>
            <p className="text-xl text-brand-gainsboro max-w-3xl mx-auto">
              Comprehensive printing solutions for every need. From business cards to large format prints, we deliver quality and excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group bg-white border border-brand-gainsboro rounded-lg p-8 hover:shadow-xl transition-all hover:-translate-y-1"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h2 className="text-2xl font-semibold text-brand-dark-slate mb-3 group-hover:text-brand-dodger-blue">
                  {service.name}
                </h2>
                <p className="text-brand-dim-gray mb-4">{service.description}</p>
                <span className="inline-block text-brand-dark-slate font-medium group-hover:translate-x-1 transition-transform">
                  Learn more →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-brand-white-smoke">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-brand-dark-slate mb-4">
            Need Help Choosing?
          </h2>
          <p className="text-xl text-brand-dim-gray mb-8">
            Our expert team is here to help you find the perfect printing solution for your project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-block bg-brand-dodger-blue text-white px-8 py-3 rounded-md font-semibold hover:bg-brand-dodger-blue-light transition-colors"
            >
              Get a Quote
            </Link>
            <Link
              href="/portfolio"
              className="inline-block bg-white border-2 border-brand-dark-slate text-brand-dark-slate px-8 py-3 rounded-md font-semibold hover:bg-brand-white-smoke transition-colors"
            >
              View Portfolio
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

