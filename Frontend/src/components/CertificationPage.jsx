import { Link } from "react-router-dom";
const otherServices = [
  { name: "ISO 9001 – Quality Management System", link: "/iso-9001" },
  { name: "ISO 14001 – Environmental Management System", link: "/iso-14001" },
  { name: "ISO 45001 – Occupational Health & Safety", link: "/iso-45001" },
  { name: "ISO 22000 – Food Safety Management", link: "/iso-22000" },
  { name: "ISO 27001 – Information Security Management", link: "/iso-27001" },
];
export default function CertificationPage({
  title,
  description,
  benefits,
  whoNeeds,
}) {
  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen pt-20 sm:pt-24">
      {/* Hero Section */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            {/* Left Content */}
            <div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-[#002066] dark:text-white">
                {title}
              </h1>

              <p className="mt-4 text-base sm:text-lg text-gray-900 dark:text-gray-300 max-w-3xl">
                {description}
              </p>
            </div>

            {/* Right Box */}
            <aside className="w-full">
              <div className="rounded-xl border border-gray-200 dark:border-white/10 bg-white/5 p-6">
                <h3 className="text-lg font-semibold text-[#002066] dark:text-white">
                  Who Needs This Certification?
                </h3>

                <p className="mt-2 text-sm text-gray-900 dark:text-gray-300">
                  Organizations that can benefit from this certification.
                </p>

                <ul className="mt-4 space-y-3">
                  {whoNeeds.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sm text-gray-900 dark:text-gray-200"
                    >
                      <span className="text-[#E4910C] dark:text-indigo-400">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6">
                  <a
                    href="/contact"
                    className="inline-block w-full text-center rounded-md bg-[#E4910C] dark:bg-indigo-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-indigo-500"
                  >
                    Request Consultation
                  </a>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Benefits */}
      {/* Benefits + Other Services */}
<section className="pb-12">
  <div className="mx-auto max-w-7xl px-6 lg:px-8">
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
      
      {/* Benefits */}
      <div className="lg:col-span-2">
        <h2 className="text-2xl sm:text-3xl font-semibold text-[#002066] dark:text-white">
          Key Benefits
        </h2>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {benefits.map((benefit) => (
            <div
              key={benefit}
              className="flex items-start gap-3 rounded-xl border border-gray-200 dark:border-white/10 bg-white/5 p-5 transition-all duration-300 hover:border-[#E4910C] dark:hover:border-indigo-500/50 hover:bg-white/10"
            >
              <span className="text-[#E4910C] dark:text-indigo-400 font-semibold">✓</span>

              <p className="text-sm leading-6 text-gray-900 dark:text-gray-300">
                {benefit}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Other Services */}
      <aside>
        <div className="sticky top-24 rounded-xl border border-white/10 bg-white/5 p-6">
          <h3 className="text-xl font-semibold text-[#002066] dark:text-white">
            Other Services
          </h3>

          <p className="mt-2 text-sm text-gray-900 dark:text-gray-300">
            Explore our certification services.
          </p>

          <div className="mt-6 space-y-3">
            {otherServices.map((service) => (
              <Link
                key={service.name}
                to={service.link}
                className="group flex items-center justify-between rounded-lg border border-gray-200 dark:border-white/10 p-4 text-sm text-gray-900 dark:text-gray-300 transition-all duration-300 hover:border-[#E4910C] dark:hover:border-indigo-500/50 hover:bg-white/10"
              >
                <span>{service.name}</span>

                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </aside>

    </div>
  </div>
</section>

      
    </div>
  );
}