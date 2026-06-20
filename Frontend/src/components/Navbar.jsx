import { Link } from "react-router-dom";
import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import ThemeToggle from "./ThemeToggle";

const navigation = [
  { name: "Home", to: "/" },
  { name: "About Us", to: "/about" },

  {
    name: "Services",
    to: "/services",
    submenu: [
      {
        name: "ISO 14001:2015",
        to: "/services/iso-14001-2015",
      },
      {
        name: "ISO 45001:2018",
        to: "/services/iso-45001-2018",
      },
      {
        name: "ISO 22000:2018 / HACCP",
        to: "/services/iso-22000-2018",
      },
      {
        name: "ISO 13485:2016",
        to: "/services/iso-13485-2016",
      },
      {
        name: "ISO 27001:2022",
        to: "/services/iso-27001-2022",
      },
      {
        name: "IATF 16949:2016",
        to: "/services/iatf-16949-2016",
      },
    ],
  },

  {
    name: "Training",
    to: "/training",
  },

  {
    name: "Clients",
    to: "/clients",
  },

  {
    name: "Testimonials",
    to: "/testimonials",
  },

  {
    name: "Contact Us",
    to: "/contact",
  },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
   <header className="fixed inset-x-0 top-0 z-50 bg-white/5 dark:bg-black/10 backdrop-blur-md transition-all">

      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">

        {/* Logo */}

        <Link to="/" className="flex items-center">
          <img
            src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
            className="h-9 w-auto"
            alt="Logo"
          />
        </Link>

        {/* Desktop Navigation */}

        <div className="hidden lg:flex items-center gap-8">

          {navigation.map((item) =>
            item.submenu ? (
              <div
                key={item.name}
                className="relative group"
              >
                <Link
                  to={item.to}
                  className="font-semibold text-sm text-gray-900 dark:text-white hover:text-[#E4910C] dark:hover:text-indigo-500 transition"
                >
                  {item.name}
                </Link>

                <div
                  className="
                  invisible
                  opacity-0
                  group-hover:visible
                  group-hover:opacity-100
                  transition-all
                  duration-300
                  absolute
                  left-0
                  top-8
                  w-72
                  rounded-xl
                  bg-white
                  dark:bg-gray-900
                  border
                  border-gray-200
                  dark:border-white/10
                  shadow-xl
                  p-2
                  "
                >
                  {item.submenu.map((sub) => (
                    <Link
                      key={sub.name}
                      to={sub.to}
                      className="
                      block
                      rounded-lg
                      px-4
                      py-2
                      text-sm
                      text-gray-700
                      dark:text-gray-300
                      hover:bg-gray-100
                      dark:hover:bg-white/5
                      hover:text-[#E4910C]
                      dark:hover:text-indigo-500
                      transition
                      "
                    >
                      {sub.name}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={item.name}
                to={item.to}
                className="
                text-sm
                font-semibold
                text-gray-900
                dark:text-white
                hover:text-[#E4910C]
                dark:hover:text-indigo-500
                transition
                "
              >
                {item.name}
              </Link>
            )
          )}

        </div>

        {/* Right Side */}

        <div className="hidden lg:flex items-center gap-4">

          <ThemeToggle />
           <Link
    to="/contact"
    className="inline-flex items-center justify-center rounded-md bg-[#E4910C] px-10 h-10 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:bg-amber-400 dark:bg-indigo-500 dark:hover:bg-indigo-600"
  >
    Book Consultation
  </Link>

        </div>


        {/* Mobile Button */}

        <button
          onClick={() => setMobileMenuOpen(true)}
          className="lg:hidden text-gray-700 dark:text-white"
        >
          <Bars3Icon className="h-7 w-7" />
        </button>

      </nav>

      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >

        <div className="fixed inset-0 bg-black/30" />

        <Dialog.Panel
          className="
          fixed
          right-0
          top-0
          h-full
          w-80
          bg-white
          dark:bg-gray-900
          border-l
          border-gray-200
          dark:border-white/10
          p-6
          overflow-y-auto
          "
        >

          {/* Top */}

          <div className="flex items-center justify-between">

            <img
              src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
              className="h-9"
              alt=""
            />

            <button
              onClick={() => setMobileMenuOpen(false)}
              className="text-gray-700 dark:text-white"
            >
              <XMarkIcon className="h-7 w-7" />
            </button>

          </div>

          <div className="mt-5 flex justify-center">
            <ThemeToggle />
          </div>

          <div className="mt-8 space-y-3">
                      {navigation.map((item) =>
            item.submenu ? (
              <div key={item.name} className="space-y-2">

                {/* Services Heading */}

                <div className="px-3 py-2 text-base font-semibold text-indigo-600 dark:text-indigo-400">
                  {item.name}
                </div>

                {/* Services Submenu */}

                <div className="ml-3 space-y-1 border-l border-gray-200 dark:border-white/10 pl-3">

                  {item.submenu.map((sub) => (
                    <Link
                      key={sub.name}
                      to={sub.to}
                      onClick={() => setMobileMenuOpen(false)}
                      className="
                      block
                      rounded-md
                      px-3
                      py-2
                      text-sm
                      text-gray-700
                      dark:text-gray-300
                      hover:bg-gray-100
                      dark:hover:bg-white/5
                      hover:text-[#E4910C]
                      dark:hover:text-indigo-500
                      transition
                      "
                    >
                      {sub.name}
                    </Link>
                  ))}

                </div>

              </div>
            ) : (
              <Link
                key={item.name}
                to={item.to}
                onClick={() => setMobileMenuOpen(false)}
                className="
                block
                rounded-lg
                px-3
                py-3
                text-base
                font-semibold
                text-gray-900
                dark:text-white
                hover:bg-gray-100
                dark:hover:bg-white/5
                hover:text-[#E4910C]
                dark:hover:text-indigo-500
                transition
                "
              >
                {item.name}
              </Link>
            )
          )}
        </div>

        {/* Footer */}

        <div className="mt-10 border-t border-gray-200 dark:border-white/10 pt-6">

          <p className="text-center text-xs text-gray-500 dark:text-gray-400">
            Spectrum Quality Management
          </p>

          <p className="mt-1 text-center text-xs text-gray-400 dark:text-gray-500">
            Building Stable Systems for Desired Results
          </p>

        </div>

      </Dialog.Panel>

    </Dialog>

  </header>
  );
}