import { Link } from "react-router-dom";
import isoImage from "../assets/iso-certification.jpg";
const otherServices = [
  {
    name: "ISO 9001 – Quality Management System",
    link: "/services/iso-9001-2015",
  },
  {
    name: "ISO 14001 – Environmental Management System",
    link: "/services/iso-14001-2015",
  },
  {
    name: "ISO 45001 – Occupational Health & Safety",
    link: "/services/iso-45001-2018",
  },
  {
    name: "ISO 22000 – Food Safety Management",
    link: "/services/iso-22000-2018",
  },
  {
    name: "ISO 27001 – Information Security Management",
    link: "/services/iso-27001-2022",
  },
  {
    name: "ISO 13485 – Medical Devices",
    link: "/services/iso-13485-2016",
  },
  {
    name: "ISO 22301 – Business Continuity Management",
    link: "/services/iso-22301-2019",
  },
  {
    name: "CE Marking",
    link: "/services/ce-marking",
  },
  {
    name: "Training Management",
    link: "/training",
  },
];
export default function CertificationPage({
  title,
  description,
  benefits,
  whoNeeds,
  currentService,
}) {
 return (
  <div className="bg-white dark:bg-gray-900 min-h-screen pt-24">
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        
        {/* LEFT SIDE */}
        <div className="lg:col-span-2">
          <h1 className="text-4xl font-bold text-[#002066] dark:text-white">
            {title}
          </h1>

          <p className="mt-6 text-lg leading-8 text-gray-700 dark:text-gray-300">
            {description}
          </p>

          {/* Benefits */}
          <section className="mt-12">
            <h2 className="text-3xl font-bold text-[#002066] dark:text-white">
              Benefits Of Certification
            </h2>

            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
              {benefits.map((benefit) => (
                <div
                  key={benefit}
                  className="rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 p-4"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-[#E4910C]">◉</span>
                    <span className="text-gray-700 dark:text-gray-300">
                      {benefit}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Who Needs */}
          <section className="mt-14">
            <h2 className="text-3xl font-bold text-[#002066] dark:text-white">
              Who Needs This Certification?
            </h2>

            <div className="mt-6 rounded-xl border-l-4 border-[#002066] bg-gray-100 dark:bg-gray-800 p-6">
              {whoNeeds.map((item) => (
                <p
                  key={item}
                  className="text-gray-700 dark:text-gray-300 mb-3"
                >
                  • {item}
                </p>
              ))}
            </div>
          </section>

          {/* Certification Process */}
          <section className="mt-14 mb-20">
            <h2 className="text-3xl font-bold text-[#002066] dark:text-white">
              Our Certification Process
            </h2>

            <div className="mt-6 space-y-4">
              {[
                "Initial Gap Analysis",
                "Documentation Development",
                "Implementation Support",
                "Internal Audit",
                "Management Review",
                "Certification Audit",
              ].map((step, index) => (
                <div
                  key={step}
                  className="flex items-center gap-4 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 p-4"
                >
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#002066] text-white text-sm font-bold">
                    {index + 1}
                  </div>

                  <span className="text-gray-700 dark:text-gray-300">
                    {step}
                  </span>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* RIGHT SIDE */}
        <aside className="lg:sticky lg:top-24 self-start">
          
          {/* ISO Image */}
          <div className="overflow-hidden rounded-2xl border-2 border-[#E4910C] bg-white dark:bg-gray-800 shadow-xl">
            <img
              src={isoImage}
              alt="ISO Certification"
              className="h-full w-full object-cover"
            />
          </div>

          {/* Consultation */}
          <div className="mt-6 rounded-2xl bg-[#002066] p-6 text-center shadow-xl">
            <div className="mb-4 flex justify-center">
              <svg
                className="h-10 w-10 text-[#E4910C]"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 8v4l3 3"
                />
              </svg>
            </div>

            <p className="text-sm text-white mb-4">
              Get expert guidance tailored to your organization's needs.
            </p>

            <Link
              to="/contact"
              className="block rounded-lg bg-[#E4910C] px-4 py-3 text-sm font-semibold text-white hover:bg-orange-600"
            >
              Book Consultation
            </Link>
          </div>

          {/* Other Services */}
          <div className="mt-6 rounded-2xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 p-6">
            <h3 className="text-xl font-bold text-[#002066] dark:text-white">
              Other Services
            </h3>

            <ul className="mt-5 space-y-3">
             {otherServices
  .filter((service) => service.name !== currentService)
  .map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.link}
                    className="flex items-center text-gray-700 dark:text-gray-300 hover:text-[#E4910C]"
                  >
                    <span className="mr-2">›</span>
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </div>
  </div>
);
}