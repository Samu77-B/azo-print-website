 import Link from "next/link";
import Image from "next/image";
import HeroSection from "@/components/HeroSection";

export default function Home() {
  const featuredServices = [
    {
      name: "Business Cards",
      description: "Professional business cards that make a lasting impression",
      href: "/services/business-cards",
    },
    {
      name: "Flyers & Leaflets",
      description: "Eye-catching promotional materials for your business",
      href: "/services/flyers-leaflets",
    },
    {
      name: "Large Format Printing",
      description: "Posters, banners, and signage for maximum impact",
      href: "/services/large-format",
    },
    {
      name: "Book Binding",
      description: "Professional binding services for reports and publications",
      href: "/services/book-binding",
    },
  ];

  const portfolioHighlights = [
    {
      title: "Corporate Stationery",
      category: "Stationery",
      image: "/corporate-stationery.png",
    },
    {
      title: "Event Posters",
      category: "Posters",
      image: "/event-posters.png",
    },
    {
      title: "Book Binding",
      category: "Printing",
      image: "/custom-binding.png",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section with Parallax */}
      <HeroSection />

      {/* Featured Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-brand-dark-slate mb-4 font-playfair">
              What We Do
            </h2>
            <p className="text-lg text-brand-dim-gray max-w-2xl mx-auto">
              Comprehensive printing services tailored to your needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredServices.map((service) => (
              <Link
                key={service.name}
                href={service.href}
                className="group bg-brand-white-smoke rounded-lg p-6 hover:shadow-lg transition-all hover:-translate-y-1"
              >
                <h3 className="text-xl font-semibold text-brand-dark-slate mb-2 group-hover:text-brand-dodger-blue font-playfair">
                  {service.name}
                </h3>
                <p className="text-brand-dim-gray">{service.description}</p>
                <span className="inline-block mt-4 text-brand-dark-slate font-medium group-hover:translate-x-1 transition-transform">
                  Learn more →
                </span>
              </Link>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/services"
              className="inline-block text-brand-dark-slate font-semibold hover:text-brand-dodger-blue border-b-2 border-brand-dark-slate pb-1"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Portfolio Highlights */}
      <section className="py-20 bg-brand-light-slate">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 font-playfair">
              Our Work
            </h2>
            <p className="text-lg text-white max-w-2xl mx-auto">
              Showcasing quality and attention to detail in every project
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {portfolioHighlights.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <span className="text-sm text-brand-dim-gray uppercase tracking-wide">
                    {item.category}
                  </span>
                  <h3 className="text-xl font-semibold text-brand-dark-slate mt-2 font-playfair">
                    {item.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/portfolio"
              className="inline-block bg-brand-deep-pink text-white px-8 py-3 rounded-md font-semibold hover:bg-brand-deep-pink-light transition-colors border-2 border-transparent hover:border-brand-deep-pink"
            >
              View Full Portfolio
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-brand-dark-slate text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 font-playfair">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-brand-gainsboro mb-8">
            Get in touch with our team for a personalized quote and expert advice
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-brand-dark-slate px-8 py-3 rounded-md font-semibold hover:bg-brand-white-smoke transition-colors text-lg border-2 border-transparent hover:border-brand-deep-pink"
          >
            Contact Us Today
          </Link>
        </div>
      </section>
    </div>
  );
}

