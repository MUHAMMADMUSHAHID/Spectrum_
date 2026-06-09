'use client'
import { Link } from "react-router-dom";
import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/AboutUs' },
  {name: "Services",
    submenu: [
      {
        name: "ISO 14001:2015",
        href: "/services/iso-14001-2015",
      },
      {
        name: "ISO 45001:2018",
        href: "/services/iso-45001-2018",
      },
      {
        name: "ISO 22000:2018 / HACCP",
        href: "/services/iso-22000-2018",
      },
      {
        name: "ISO 13485:2016",
        href: "/services/iso-13485-2016",
      },
      {
        name: "ISO 27001:2022",
        href: "/services/iso-27001-2022",
      },
      {
        name: "IATF 16949:2016",
        href: "/services/iatf-16949-2016",
      },
    ],
  },
  { name: 'Training', href: '/Training' },
  { name: 'Clients', href: '/Clients' },
  { name: 'Testimonials', href: '/Testimonials' },
  { name: 'Contact Us', href: '/ContactUs' },
]

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="bg-gray-900">
      <header className="fixed inset-x-0 top-0 z-50 bg-gray-900/90 backdrop-blur-md">
       <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8 max-w-7xl mx-auto">
          <div className="flex items-center ">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                alt=""
                src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
                className="h-8 w-auto"
              />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-200"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-center lg:gap-x-12">
            {navigation.map((item) =>
  item.submenu ? (
    <div key={item.name} className="group relative">
      <button className="text-sm font-semibold text-white">
        {item.name}
      </button>

      <div className="absolute left-0 top-full hidden min-w-65 rounded-lg border border-white/10 bg-gray-900 p-2 shadow-xl group-hover:block">
        {item.submenu.map((sub) => (
          <a
            key={sub.name}
            href={sub.href}
            className="block rounded-md px-4 py-2 text-sm text-gray-300 hover:bg-white/5 hover:text-indigo-400"
          >
            {sub.name}
          </a>
        ))}
      </div>
    </div>
  ) : (
    <a
      key={item.name}
      href={item.href}
      className="text-sm font-semibold text-white hover:text-indigo-400"
    >
      {item.name}
    </a>
  )
)}
          </div>
        </nav>
        <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
          <div className="fixed inset-0 z-50" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gray-900 p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-100/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img
                  alt=""
                  src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
                  className="h-8 w-auto"
                />
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-gray-200"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="size-6" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-white/10">
                <div className="space-y-2 py-6">
                 {navigation.map((item) =>
  item.submenu ? (
    <div key={item.name}>
      <div className="px-3 py-2 text-base font-semibold text-indigo-400">
        {item.name}
      </div>

      <div className="ml-4 space-y-1">
        {item.submenu.map((sub) => (
          <Link
            key={sub.name}
            to={sub.path}
            onClick={() => setMobileMenuOpen(false)}
            className="block rounded-md px-3 py-2 text-sm text-gray-300 hover:bg-white/5"
          >
            {sub.name}
          </Link>
        ))}
      </div>
    </div>
  ) : (
    <Link
      key={item.name}
      to={item.path}
      onClick={() => setMobileMenuOpen(false)}
      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-white hover:bg-white/5"
    >
      {item.name}
    </Link>
  )
)}
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>

      
    </div>
  )
}
