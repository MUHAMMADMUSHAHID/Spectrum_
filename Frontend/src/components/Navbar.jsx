import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import ThemeToggle from "./ThemeToggle";
import {
  Bars3Icon,
  XMarkIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/outline";

const navigation = [
  {
    name: "Home",
    to: "/",
  },

  {
    name: "About Us",
    to: "/about",
    submenu: [
      {
        name: "About Spectrum",
        to: "/about",
      },
      {
        name: "Clients",
        to: "/clients",
      },
      {
        name: "Testimonials",
        to: "/testimonials",
      },
    ],
  },

  {
    name: "Services",
    to: "/services",
    submenu: [
      {
        name: "ISO 9001:2015",
        to: "/services/iso-9001-2015",
      },
      {
        name: "ISO 14001:2015",
        to: "/services/iso-14001-2015",
      },
      {
        name: "ISO 45001:2018",
        to: "/services/iso-45001-2018",
      },
      {
        name: "ISO 22000:2018",
        to: "/services/iso-22000-2018",
      },
      {
        name: "ISO 27001:2022",
        to: "/services/iso-27001-2022",
      },
      {
        name: "ISO 13485:2016",
        to: "/services/iso-13485-2016",
      },
      {
        name: "ISO 22301:2019",
        to: "/services/iso-22301-2019",
      },
      {
        name: "CE Marking",
        to: "/services/ce-marking",
      },
      {
        name: "Training Management",
        to: "/training",
      },
    ],
  },
    {
    name: "Team",
    to: "/team",
  },

  {
    name: "Contact Us",
    to: "/contact",
  },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    `relative text-sm font-semibold transition duration-300 ${
      isActive
        ? "text-[#E4910C] dark:text-indigo-400"
        : "text-[#002066] dark:text-white hover:text-[#E4910C] dark:hover:text-indigo-400"
    }`;

  return (
  <header
  className="
    fixed
    inset-x-0
    top-0
    z-[9999]
    bg-white/40
    dark:bg-black/30
    backdrop-blur-md 
    border-b
    border-white/30
    dark:border-white/10
    shadow-[0_8px_32px_rgba(0,0,0,0.08)]
  "
>

      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">

        {/* Logo */}

        <Link to="/" className="flex items-center gap-3">

          {/* Replace with your own logo */}

          <img
            src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
            alt="Spectrum"
            className="h-10 w-auto"
          />

          <div className="hidden md:block">

            <h1 className="text-lg font-bold text-[#002066] dark:text-white">
              Spectrum
            </h1>

            <p className="text-xs text-gray-500 dark:text-gray-400">
              Quality Management
            </p>

          </div>

        </Link>

        {/* Desktop Menu */}

        <div className="hidden lg:flex items-center gap-8">
                    {navigation.map((item) =>
            item.submenu ? (
              <div key={item.name} className="relative group">

                <button
                  type="button"
                  className="flex items-center gap-1 text-sm font-semibold text-[#002066] dark:text-white hover:text-[#E4910C] dark:hover:text-indigo-400 transition"
                >
                  {item.name}

                  <ChevronDownIcon className="h-4 w-4 transition group-hover:rotate-180" />
                </button>

                {/* Dropdown */}

                <div
                  className="
                  invisible
                  opacity-0
                  translate-y-2
                  group-hover:visible
                  group-hover:opacity-100
                  group-hover:translate-y-0
                  absolute
                  left-0
                  top-9
                  w-80
                  rounded-2xl
                  border
                  border-gray-200
                  dark:border-white/10
                  bg-white
                  dark:bg-gray-900
                  shadow-2xl
                  transition-all
                  duration-300
                  overflow-hidden
                  "
                >

                  <div className="p-3">

                    {item.submenu.map((sub) => (

                      <NavLink
                        key={sub.name}
                        to={sub.to}
                        className={({ isActive }) =>
                          `flex items-center justify-between rounded-xl px-4 py-3 text-sm transition-all ${
                            isActive
                              ? "bg-[#E4910C]/10 text-[#E4910C] dark:bg-indigo-500/20 dark:text-indigo-300"
                              : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-white/5 hover:text-[#E4910C] dark:hover:text-indigo-400"
                          }`
                        }
                      >
                        {sub.name}

                        <ChevronRightIcon className="h-4 w-4" />

                      </NavLink>

                    ))}

                  </div>

                </div>

              </div>
            ) : (
              <NavLink
                key={item.name}
                to={item.to}
                className={linkClass}
              >
                {item.name}
              </NavLink>
            )
          )}
        </div>

        {/* Right Side */}

        <div className="hidden lg:flex items-center gap-4">

          <ThemeToggle />

          <Link
            to="/contact"
            className="
            inline-flex
            items-center
            rounded-xl
            bg-[#E4910C]
            px-5
            py-2.5
            text-sm
            font-semibold
            text-white
            shadow-lg
            transition-all
            duration-300
            hover:-translate-y-0.5
            hover:bg-amber-500
            hover:shadow-xl
            dark:bg-indigo-600
            dark:hover:bg-indigo-500
            "
          >
            Book Consultation
          </Link>

        </div>

        {/* Mobile Menu Button */}

        <button
          type="button"
          aria-label="Open menu"
          onClick={() => setMobileMenuOpen(true)}
          className="
          lg:hidden
          rounded-lg
          p-2
          text-[#002066]
          dark:text-white
          hover:bg-gray-100
          dark:hover:bg-white/10
          transition
          "
        >
          <Bars3Icon className="h-7 w-7" />
        </button>

      </nav>

      {/* Mobile Drawer */}

      <div
        className={`fixed inset-0 z-[99999] transition ${
          mobileMenuOpen ? "visible" : "invisible"
        }`}
      >

        <div
          onClick={() => setMobileMenuOpen(false)}
          className={`absolute inset-0 bg-black/40 transition-opacity ${
            mobileMenuOpen ? "opacity-100" : "opacity-0"
          }`}
        />

        <div
          className={`absolute right-0 top-0 h-screen w-80 bg-white dark:bg-gray-900 shadow-2xl transition-transform duration-300 ${
            mobileMenuOpen
              ? "translate-x-0"
              : "translate-x-full"
          }`}
        >          {/* Mobile Header */}

          <div className="flex items-center justify-between border-b border-gray-200 dark:border-white/10 px-6 py-5">

            <Link
              to="/"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-3"
            >
              <img
                src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
                alt="Spectrum"
                className="h-10"
              />

              <div>
                <h2 className="font-bold text-[#002066] dark:text-white">
                  Spectrum
                </h2>

                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Quality Management
                </p>
              </div>
            </Link>

            <button
              onClick={() => setMobileMenuOpen(false)}
              className="rounded-lg p-2 hover:bg-gray-100 dark:hover:bg-white/10"
            >
              <XMarkIcon className="h-7 w-7 text-[#002066] dark:text-white" />
            </button>

          </div>

          {/* Mobile Links */}

          <div className="overflow-y-auto h-[calc(100vh-90px)] px-6 py-6">

            <div className="space-y-2">

              {navigation.map((item) =>

                item.submenu ? (

                  <div key={item.name}>

                    <button
                      onClick={() => setServicesOpen(!servicesOpen)}
                      className="flex w-full items-center justify-between rounded-xl px-4 py-3 font-semibold text-[#002066] dark:text-white hover:bg-gray-100 dark:hover:bg-white/5"
                    >
                      {item.name}

                      <ChevronDownIcon
                        className={`h-5 w-5 transition-transform ${
                          servicesOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    <div
                      className={`overflow-hidden transition-all duration-300 ${
                        servicesOpen ? "max-h-[600px]" : "max-h-0"
                      }`}
                    >
                      <div className="ml-4 mt-2 space-y-2 border-l border-gray-300 dark:border-white/10 pl-4">

                        {item.submenu.map((sub) => (

                          <NavLink
                            key={sub.name}
                            to={sub.to}
                            onClick={() => setMobileMenuOpen(false)}
                            className={({ isActive }) =>
                              `block rounded-lg px-3 py-2 text-sm transition ${
                                isActive
                                  ? "bg-[#E4910C]/10 text-[#E4910C] dark:bg-indigo-500/20 dark:text-indigo-300"
                                  : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-white/5"
                              }`
                            }
                          >
                            {sub.name}
                          </NavLink>

                        ))}

                      </div>
                    </div>

                  </div>

                ) : (

                  <NavLink
                    key={item.name}
                    to={item.to}
                    onClick={() => setMobileMenuOpen(false)}
                    className={({ isActive }) =>
                      `block rounded-xl px-4 py-3 font-medium transition ${
                        isActive
                          ? "bg-[#E4910C]/10 text-[#E4910C] dark:bg-indigo-500/20 dark:text-indigo-300"
                          : "text-[#002066] dark:text-white hover:bg-gray-100 dark:hover:bg-white/5"
                      }`
                    }
                  >
                    {item.name}
                  </NavLink>

                )
              )}

            </div>

            {/* Bottom Section */}

            <div className="mt-8 border-t border-gray-200 dark:border-white/10 pt-6">

              <div className="flex items-center justify-center">

                <ThemeToggle />

              </div>

              <Link
                to="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-6 flex w-full items-center justify-center rounded-xl bg-[#E4910C] py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-amber-500 dark:bg-indigo-600 dark:hover:bg-indigo-500"
              >
                Book Free Consultation
              </Link>

              <div className="mt-8 text-center">

                <h3 className="font-semibold text-[#002066] dark:text-white">
                  Spectrum Quality Management
                </h3>

                <p className="mt-2 text-xs text-gray-500 dark:text-gray-400">
                  Building Stable Systems for Desired Results
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

    </header>
  );
}