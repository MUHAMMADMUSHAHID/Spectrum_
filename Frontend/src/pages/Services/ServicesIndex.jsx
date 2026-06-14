import { Link } from 'react-router-dom'

const services = [
  {
    title: 'ISO 14001:2015',
    to: '/services/iso-14001-2015',
    desc: 'Environmental Management System (EMS) to improve environmental performance.',
  },
  {
    title: 'ISO 45001:2018',
    to: '/services/iso-45001-2018',
    desc: 'Occupational health & safety management to reduce workplace risks.',
  },
  {
    title: 'ISO 22000:2018 / HACCP',
    to: '/services/iso-22000-2018',
    desc: 'Food safety management and HACCP principles for supply chains.',
  },
  {
    title: 'ISO 13485:2016',
    to: '/services/iso-13485-2016',
    desc: 'Quality management system for medical device manufacturers.',
  },
  {
    title: 'ISO 27001:2022',
    to: '/services/iso-27001-2022',
    desc: 'Information security management to protect sensitive data.',
  },
  {
    title: 'IATF 16949:2016',
    to: '/services/iatf-16949-2016',
    desc: 'Automotive industry quality management standard for suppliers.',
  },
]

export default function ServicesIndex() {
  return (
    <div className="min-h-screen bg-gray-900 pt-20 sm:pt-24 pb-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <h2 className="mb-4 text-4xl font-bold text-white">
          Our Services
        </h2>

        <p className="mb-10 max-w-2xl text-gray-400">
          Spectrum Quality Management provides comprehensive ISO certification,
          implementation, auditing, and training services to help organizations
          achieve operational excellence and international compliance.
        </p>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <Link
              key={s.title}
              to={s.to}
              className="group rounded-xl border border-white/10 bg-gray-800 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-indigo-500 hover:shadow-xl"
            >
              <h3 className="text-xl font-semibold text-white group-hover:text-indigo-400">
                {s.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-300">
                {s.desc}
              </p>

              <div className="mt-6 font-medium text-indigo-400">
                Learn More →
              </div>
            </Link>
          ))}
        </div>

      </div>
    </div>
  );
}