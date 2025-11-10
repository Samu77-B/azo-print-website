import Image from "next/image";
import Link from "next/link";
import HeroSection from "@/components/HeroSection";
import RevealOnScroll from "@/components/RevealOnScroll";
import { featuredServices } from "@/data/services";

export default function Home() {
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

      {/* Quick Quote CTA */}
      <RevealOnScroll>
        <section className="py-16 bg-gradient-to-br from-brand-white-smoke via-[#e4dfe3] to-[#d4ccd2]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-5xl sm:text-6xl font-bold text-brand-dark-slate mb-4 font-playfair">
              Need a Quick Quote?
            </h2>
            <p className="text-lg text-brand-dim-gray mb-8">
              Tell us about your project and we&apos;ll get back to you with pricing and timelines right away.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-brand-deep-pink text-white px-8 py-3 rounded-md font-semibold hover:bg-brand-deep-pink-light transition-colors text-lg shadow-lg border-grow-clockwise-white"
            >
              Quick Quote
            </Link>
          </div>
        </section>
      </RevealOnScroll>

      {/* Featured Services */}
      <RevealOnScroll delay={100}>
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
              {featuredServices.map((service, index) => (
                <RevealOnScroll
                  key={service.name}
                  delay={index * 80}
                  className="h-full"
                >
                  <Link
                    href={service.href}
                    className="group bg-brand-white-smoke rounded-lg overflow-hidden hover:shadow-lg transition-all hover:-translate-y-1 h-full flex flex-col"
                  >
                    <div className="relative h-48 w-full bg-white">
                      {service.image ? (
                        <Image
                          src={service.image}
                          alt={service.name}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                        />
                      ) : (
                        <div className="flex h-full w-full items-center justify-center bg-brand-white-smoke">
                          <service.icon
                            className="h-14 w-14 text-brand-dodger-blue"
                            aria-hidden="true"
                          />
                        </div>
                      )}
                    </div>
                    <div className="p-6 flex-1 flex flex-col">
                      <h3 className="text-xl font-semibold text-brand-dark-slate mb-2 group-hover:text-brand-dodger-blue font-playfair transition-colors">
                        {service.name}
                      </h3>
                      <p className="text-brand-dim-gray flex-1">{service.description}</p>
                      <span className="inline-block mt-4 text-brand-dark-slate font-medium group-hover:translate-x-1 transition-transform">
                        Learn more →
                      </span>
                    </div>
                  </Link>
                </RevealOnScroll>
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
      </RevealOnScroll>

      {/* Portfolio Highlights */}
      <RevealOnScroll delay={200}>
        <section className="py-20 bg-gradient-to-br from-brand-white-smoke via-[#e4dfe3] to-[#d4ccd2]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-5xl sm:text-6xl font-bold text-brand-dark-slate mb-4 font-playfair">
                Our Work
              </h2>
              <p className="text-lg text-brand-dim-gray max-w-2xl mx-auto">
                Showcasing quality and attention to detail in every project
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {portfolioHighlights.map((item, index) => (
                <RevealOnScroll
                  key={item.title}
                  delay={index * 100}
                  direction={index % 2 === 0 ? "up" : "none"}
                  className="h-full"
                >
                  <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow h-full flex flex-col">
                    <div className="relative h-64 overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>
                    <div className="p-6 flex-1 flex flex-col">
                      <span className="text-sm text-brand-dim-gray uppercase tracking-wide">
                        {item.category}
                      </span>
                      <h3 className="text-xl font-semibold text-brand-dark-slate mt-2 font-playfair">
                        {item.title}
                      </h3>
                    </div>
                  </div>
                </RevealOnScroll>
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
      </RevealOnScroll>

      {/* Printing, Binding, Finishing Section */}
      <RevealOnScroll delay={200}>
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
                  Our full service range is too extensive to list here, but amongst some of the things we offer as a same day service are: <strong>Portfolio Printing</strong>, <strong>Brochures &amp; Booklets</strong>, <strong>Letterheads &amp; Stationery</strong>, <strong>Business Cards</strong>, <strong>Book Binding</strong>, <strong>Custom Case Binding</strong>, <strong>Architectural Prints</strong>, <strong>Dry Mounting</strong>, <strong>Laminating</strong>, <strong>Banner Stands &amp; Exhibition Graphics</strong>, <strong>Large Format Printing</strong>, <strong>Dissertation Binding</strong>, <strong>Scanning</strong>, <strong>Postcards</strong>, <strong>Flyers</strong>, <strong>Wallpapers &amp; Murals</strong>, <strong>Acetate Prints</strong>, <strong>Window Graphics and Vinyl Lettering</strong>, <strong>Fluorescent Paper Prints</strong>, <strong>Photo Printing</strong>, <strong>Personalised Mugs &amp; Gifts</strong>, <strong>T-Shirt, Clothing &amp; Workwear Printing</strong>, <strong>White Ink Prints</strong>, <strong>Coloured Foiling</strong>, <strong>Seeded Paper Printing</strong>, <strong>Die Cutting</strong>, <strong>Stickers &amp; Packaging</strong>.
                </p>
              </div>
            </div>
          </div>
        </section>
      </RevealOnScroll>

      {/* Call to Action */}
      <RevealOnScroll delay={250}>
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
      </RevealOnScroll>
    </div>
  );
}

