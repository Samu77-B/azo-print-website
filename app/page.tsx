 import Link from "next/link";
import Image from "next/image";
import HeroSection from "@/components/HeroSection";

export default function Home() {
  const featuredServices = [
    {
      name: "Exhibition & Display",
      description: "Professional exhibition stands and display solutions for events and trade shows",
      href: "/services/exhibition-display",
    },
    {
      name: "Flyers & Leaflets",
      description: "Eye-catching promotional materials designed to grab attention and drive results",
      href: "/services/flyers-leaflets",
    },
    {
      name: "Business Stationery",
      description: "Premium business cards and corporate stationery that represents your brand professionally",
      href: "/services/stationery-business-cards",
    },
    {
      name: "Cards & Postcards",
      description: "Custom greeting cards, invitations, and postcards for personal and business use",
      href: "/services/cards-postcards",
    },
    {
      name: "Posters & Large Prints",
      description: "Large format printing for posters, banners, and signage that makes a statement",
      href: "/services/posters-large-prints",
    },
    {
      name: "Book Binding & Slip Cases",
      description: "Professional book binding services and custom slip cases for reports and publications",
      href: "/services/book-binding",
    },
    {
      name: "Printing & Copying",
      description: "High-quality printing and copying services for all your document needs",
      href: "/services/printing-copying",
    },
    {
      name: "Mugs, T-Shirts, Bags & More",
      description: "Custom branded merchandise including mugs, t-shirts, bags, and promotional items",
      href: "/services/mugs-tshirts",
    },
    {
      name: "Stands & Banners",
      description: "Exhibition stands, banners, and display materials for events and trade shows",
      href: "/services/stands-banners",
    },
    {
      name: "Special Prints",
      description: "Specialty printing services including foiling, embossing, and unique finishes",
      href: "/services/special-prints",
    },
    {
      name: "Documents & Reports",
      description: "Professional document printing and report binding services for businesses",
      href: "/services/documents-reports",
    },
    {
      name: "Graphic Design",
      description: "Expert graphic design services to bring your vision to life",
      href: "/services/graphic-design",
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
            <h2 className="text-5xl sm:text-6xl font-bold text-brand-dark-slate mb-4 font-playfair">
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
            <h2 className="text-5xl sm:text-6xl font-bold text-white mb-4 font-playfair">
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
              className="inline-block bg-brand-deep-pink text-white px-8 py-3 rounded-md font-semibold hover:bg-brand-deep-pink-light transition-colors border-grow-clockwise-white"
            >
              View Full Portfolio
            </Link>
          </div>
        </div>
      </section>

      {/* Printing, Binding, Finishing Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-5xl sm:text-6xl font-bold text-brand-dark-slate mb-6 font-playfair">
              Printing, Binding, Finishing
            </h2>
            <div className="max-w-4xl mx-auto space-y-4">
              <p className="text-lg text-brand-dim-gray leading-relaxed">
                Everything else from the exciting world of print! We're the experts! We say that not because we're good at printing pretty much everything, but we've gathered years of knowledge and can help you decide the best way to bring your work to life!
              </p>
              <p className="text-lg text-brand-dim-gray leading-relaxed">
                We're here to offer you top quality printing services and the best advice from our experts!
              </p>
              <p className="text-lg text-brand-dim-gray leading-relaxed">
                From our Central London offices, in Holborn and Covent Garden we can print and finish everything from a Business Card to a full Exhibition.
              </p>
              <p className="text-lg text-brand-dim-gray mb-10 max-w-4xl mx-auto">
              Our full service range is too extensive to list here, but amongst some of the things we offer as a same day service are: <strong>Portfolio Printing</strong>, <strong>Brochures & Booklets</strong>, <strong>Letterheads & Stationery</strong>, <strong>Business Cards</strong>, <strong>Book Binding</strong>, <strong>Custom Case Binding</strong>, <strong>Architectural Prints</strong>, <strong>Dry Mounting</strong>, <strong>Laminating</strong>, <strong>Banner Stands & Exhibition Graphics</strong>, <strong>Large Format Printing</strong>, <strong>Dissertation Binding</strong>, <strong>Scanning</strong>, <strong>Postcards</strong>, <strong>Flyers</strong>, <strong>Wallpapers & Murals</strong>, <strong>Acetate Prints</strong>, <strong>Window Graphics and Vinyl Lettering</strong>, <strong>Fluorescent Paper Prints</strong>, <strong>Photo Printing</strong>, <strong>Personalised Mugs & Gifts</strong>, <strong>T-Shirt, Clothing & Workwear Printing</strong>, <strong>White Ink Prints</strong>, <strong>Coloured Foiling</strong>, <strong>Seeded Paper Printing</strong>, <strong>Die Cutting</strong>, <strong>Stickers & Packaging</strong>.
            </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-brand-dark-slate text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl sm:text-6xl font-bold mb-4 font-playfair">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-brand-gainsboro mb-8">
            Get in touch with our team for a personalized quote and expert advice
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-brand-dark-slate px-8 py-3 rounded-md font-semibold hover:bg-brand-white-smoke transition-colors text-lg border-grow-clockwise-white"
          >
            Contact Us Today
          </Link>
        </div>
      </section>
    </div>
  );
}

