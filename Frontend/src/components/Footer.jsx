import React from "react";

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

const standards = ["ISO 9001", "ISO 14001", "ISO 45001", "ISO 27001", "ISO 22000", "ISO 13485", "NABL", "CE Marking"];

export default function Footer() {
  return (
    <footer className="relative bg-gray-900 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-amber-500 flex items-center justify-center font-display font-bold text-white text-lg shadow-md shadow-amber-500/30">
                S
              </div>
              <div>
                <div className="font-display font-bold text-white text-sm">SPECTRUM</div>
                <div className="text-amber-400 text-[9px] font-body tracking-widest uppercase">Quality Management</div>
              </div>
            </div>
            <p className="font-body text-gray-400 text-xs leading-relaxed mb-4">
              Building Stable Systems for Desired Results. ISO consulting & certification since 2001.
            </p>
            <div className="font-body text-gray-500 text-xs">
              © {new Date().getFullYear()} Spectrum Quality Management. All rights reserved.
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-body font-semibold text-white text-sm mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {links.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="font-body text-gray-400 hover:text-amber-400 text-xs transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Standards */}
          <div>
            <h4 className="font-body font-semibold text-white text-sm mb-4">Our Standards</h4>
            <ul className="space-y-2">
              {standards.map((s) => (
                <li key={s}>
                  <span className="font-body text-white/50 text-xs">{s}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-body font-semibold text-white text-sm mb-4">Contact</h4>
            <div className="space-y-3">
              <div>
                <div className="font-body text-white/30 text-[10px] uppercase tracking-wider mb-0.5">Address</div>
                <p className="font-body text-white/60 text-xs">Unit No PAP-R-251, Mumbai, India</p>
              </div>
              <div>
                <div className="font-body text-white/30 text-[10px] uppercase tracking-wider mb-0.5">Phone</div>
                <a href="tel:+919324346684" className="font-body text-white/60 hover:text-amber-400 text-xs transition-colors">9324346684</a>
                <br />
                <a href="tel:+919930076684" className="font-body text-white/60 hover:text-amber-400 text-xs transition-colors">9930076684</a>
              </div>
              <div>
                <div className="font-body text-white/30 text-[10px] uppercase tracking-wider mb-0.5">Email</div>
                <a href="mailto:info@isoqms.in" className="font-body text-white/60 hover:text-amber-400 text-xs transition-colors block">info@isoqms.in</a>
                <a href="mailto:enquiry@isoqms.in" className="font-body text-white/60 hover:text-amber-400 text-xs transition-colors block">enquiry@isoqms.in</a>
              </div>
              <div>
                <div className="font-body text-white/30 text-[10px] uppercase tracking-wider mb-1">Branches</div>
                <div className="font-body text-white/50 text-xs leading-relaxed">
                  Thane · Pune · Goa · Indore · Ahmedabad · Bangalore · Chennai · Delhi
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-body text-white/30 text-xs text-center sm:text-left">
            Spectrum Quality Management — Building Stable Systems for Desired Results
          </p>
          <div className="flex items-center gap-4">
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer"
              className="w-8 h-8 bg-white/5 border border-white/10 rounded-full flex items-center justify-center text-white/50 hover:text-cyan-400 hover:border-cyan-400/30 transition-all text-xs font-bold">
              in
            </a>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"
              className="w-8 h-8 bg-white/5 border border-white/10 rounded-full flex items-center justify-center text-white/50 hover:text-cyan-400 hover:border-cyan-400/30 transition-all text-xs font-bold">
              f
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"
              className="w-8 h-8 bg-white/5 border border-white/10 rounded-full flex items-center justify-center text-white/50 hover:text-cyan-400 hover:border-cyan-400/30 transition-all text-xs font-bold">
              ig
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
