import React from "react";
import { FaLinkedinIn, FaFacebookF, FaInstagram } from "react-icons/fa";

const links = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Team", href: "#team" },
  { label: "Sectors", href: "#sectors" },
  { label: "Clients", href: "#clients" },
  { label: "Trainings", href: "#trainings" },
  { label: "Why Spectrum", href: "#why" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

const standards = [
  "ISO 9001",
  "ISO 14001",
  "ISO 45001",
  "ISO 27001",
  "ISO 22000",
  "ISO 13485",
  "NABL",
  "CE Marking",
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-500">
                <span className="text-lg font-bold text-white">S</span>
              </div>

              <div>
                <h3 className="text-sm font-semibold tracking-tight text-white">
                  SPECTRUM
                </h3>
                <p className="text-xs text-indigo-400">
                  Quality Management
                </p>
              </div>
            </div>

            <p className="text-sm leading-6 text-gray-400">
              Building Stable Systems for Desired Results. Providing ISO
              consulting, certification, training and management system
              implementation services since 2001.
            </p>

            <p className="mt-6 text-sm text-gray-500">
              © {new Date().getFullYear()} Spectrum Quality Management.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-5 text-base font-semibold tracking-tight text-white">
              Quick Links
            </h4>

            <ul className="space-y-3">
              {links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-400 transition-colors duration-200 hover:text-indigo-400"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Standards */}
          <div>
            <h4 className="mb-5 text-base font-semibold tracking-tight text-white">
              Our Standards
            </h4>

            <ul className="space-y-3">
              {standards.map((standard) => (
                <li
                  key={standard}
                  className="text-sm text-gray-400"
                >
                  {standard}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-5 text-base font-semibold tracking-tight text-white">
              Contact Us
            </h4>

            <div className="space-y-5">
              <div>
                <p className="mb-1 text-xs uppercase tracking-wider text-gray-500">
                  Address
                </p>

                <p className="text-sm leading-6 text-gray-400">
                  Unit No PAP-R-251,
                  <br />
                  Rabale MIDC,
                  <br />
                  Navi Mumbai, Maharashtra, India
                </p>
              </div>

              <div>
                <p className="mb-1 text-xs uppercase tracking-wider text-gray-500">
                  Phone
                </p>

                <a
                  href="tel:+919324346684"
                  className="block text-sm text-gray-400 transition-colors hover:text-indigo-400"
                >
                  +91 93243 46684
                </a>

                <a
                  href="tel:+919930076684"
                  className="block text-sm text-gray-400 transition-colors hover:text-indigo-400"
                >
                  +91 99300 76684
                </a>
              </div>

              <div>
                <p className="mb-1 text-xs uppercase tracking-wider text-gray-500">
                  Email
                </p>

                <a
                  href="mailto:info@isoqms.in"
                  className="block text-sm text-gray-400 transition-colors hover:text-indigo-400"
                >
                  info@isoqms.in
                </a>

                <a
                  href="mailto:enquiry@isoqms.in"
                  className="block text-sm text-gray-400 transition-colors hover:text-indigo-400"
                >
                  enquiry@isoqms.in
                </a>
              </div>

              <div>
                <p className="mb-1 text-xs uppercase tracking-wider text-gray-500">
                  Branches
                </p>

                <p className="text-sm leading-6 text-gray-400">
                  Thane • Pune • Goa • Indore
                  <br />
                  Ahmedabad • Bangalore
                  <br />
                  Chennai • Delhi
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-white/10 pt-6">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-gray-500 text-center sm:text-left">
              Spectrum Quality Management — Building Stable Systems for Desired
              Results
            </p>

            <div className="flex items-center gap-3">
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-sm font-semibold text-gray-400 transition-all duration-200 hover:border-indigo-400/30 hover:text-indigo-400"
              >
                in
              </a>

              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-sm font-semibold text-gray-400 transition-all duration-200 hover:border-indigo-400/30 hover:text-indigo-400"
              >
                f
              </a>

              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-sm font-semibold text-gray-400 transition-all duration-200 hover:border-indigo-400/30 hover:text-indigo-400"
              >
                ig
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}