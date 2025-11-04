import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-brand-dark-slate text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Azo Print</h3>
            <p className="text-brand-gainsboro mb-4">
              Professional printing services in the heart of London. Quality prints for your business needs.
            </p>
            <p className="text-brand-gainsboro">
              Located in Central London, UK
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
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
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
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

        <div className="border-t border-brand-dark-slate-light mt-8 pt-8 text-center text-brand-gainsboro">
          <p>&copy; {new Date().getFullYear()} Azo Print. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

