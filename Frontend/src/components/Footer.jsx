import { Link } from "react-router-dom";
import {
  FaLinkedinIn,
  FaFacebookF,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

const quickLinks = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Our Services", to: "/services" },
  { label: "Training Programs", to: "/training" },
  { label: "Our Clients", to: "/clients" },
  { label: "Contact Us", to: "/contact" },
];

const services = [
  "ISO 9001:2015 QMS",
  "ISO 14001:2015 EMS",
  "ISO 45001:2018 OH&S",
  "ISO 27001:2013 ISMS",
  "CE Marking Services",
];

export default function Footer() {
  return (
    <footer className="bg-[#00133D] dark:bg-gray ">
      <div className="mx-auto max-w-7xl px-6 py-10 lg:px-1">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Company */}
          <div>
            <h2 className="text-4xl font-bold text-white">ISOQMS</h2>

            <p className="mt-8 text-0.5xl leading-6 text-[#A8B3C5]">
              Spectrum Quality Management offers premium ISO certification and
              quality management consultancy helping businesses achieve global
              excellence with confidence.
            </p>

            <div className="mt-10 flex gap-5">
              <a
                href="#"
                className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-[#A8B3C5] transition-all duration-300 hover:bg-white/20 hover:text-[#E4910C]"
              >
                <FaLinkedinIn size={18} />
              </a>

              <a
                href="#"
                className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-[#A8B3C5] transition-all duration-300 hover:bg-white/20 hover:text-[#E4910C]"
              >
                <FaInstagram size={18} />
              </a>

              <a
                href="#"
                className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-[#A8B3C5] transition-all duration-300 hover:bg-white/20 hover:text-[#E4910C]"
              >
                <FaFacebookF size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-8 text-2xl font-bold text-white">
              Quick Links
            </h3>

            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="text-0.5xl text-[#A8B3C5] transition-colors duration-300 hover:text-[#E4910C]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-8 text-2xl font-bold text-white">
              Key Services
            </h3>

            <ul className="space-y-3">
              {services.map((service) => (
                <li
                  key={service}
                  className="text-0.5xl text-[#A8B3C5] transition-colors duration-300 hover:text-[#E4910C] cursor-pointer"
                >
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-8 text-2xl font-bold text-white">
              Contact Us
            </h3>

            <div className="space-y-2">
              <div className="flex gap-4">
                <FaMapMarkerAlt
                  className="mt-1 text-[#E4910C]"
                  size={20}
                />
                <p className="text-0.5xl leading-8 text-[#A8B3C5]">
                  Unit No PAP-R-251, Rabale MIDC,
                  <br />
                  Navi Mumbai, Maharashtra, India
                </p>
              </div>

              <div className="flex gap-4">
                <FaPhoneAlt
                  className="mt-1 text-[#E4910C]"
                  size={18}
                />
                <div>
                  <a
                    href="tel:+919324346684"
                    className="block text-0.5xl text-[#A8B3C5] transition-colors duration-300 hover:text-[#E4910C]"
                  >
                    9324346684
                  </a>

                  <a
                    href="tel:+919930076684"
                    className="block text-0.5xl text-[#A8B3C5] transition-colors duration-300 hover:text-[#E4910C]"
                  >
                    9930076684
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <FaEnvelope
                  className="mt-1 text-[#E4910C]"
                  size={20}
                />
                <div>
                  <a
                    href="mailto:info@isoqms.in"
                    className="block text-0.5xl text-[#A8B3C5] transition-colors duration-300 hover:text-[#E4910C]"
                  >
                    info@isoqms.in
                  </a>

                  <a
                    href="mailto:enquiry@isoqms.in"
                    className="block text-0.5xl text-[#A8B3C5] transition-colors duration-300 hover:text-[#E4910C]"
                  >
                    enquiry@isoqms.in
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-3 border-t border-white/10 pt-2">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-lg text-[#7F8CA6]">
              © {new Date().getFullYear()} Spectrum Quality Management. All
              rights reserved.
            </p>

            <div className="flex gap-8">
              <Link
                to="/privacy-policy"
                className="text-lg text-[#7F8CA6] transition-colors duration-300 hover:text-[#E4910C]"
              >
                Privacy Policy
              </Link>

              <Link
                to="/terms"
                className="text-lg text-[#7F8CA6] transition-colors duration-300 hover:text-[#E4910C]"
              >
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>
      
    </footer>
    
  );
}