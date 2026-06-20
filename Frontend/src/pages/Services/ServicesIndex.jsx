import { Link } from 'react-router-dom'
import { FaLeaf, FaHardHat, FaAppleAlt, FaStethoscope, FaLock, FaCar } from 'react-icons/fa'

const services = [
  {
    title: 'ISO 14001:2015',
    to: '/services/iso-14001-2015',
    icon: FaLeaf,
    desc: 'Environmental Management System (EMS) to improve environmental performance.',
  },
  {
    title: 'ISO 45001:2018',
    to: '/services/iso-45001-2018',
    icon: FaHardHat,  
    desc: 'Occupational health & safety management to reduce workplace risks.',
  },
  {
    title: 'ISO 22000:2018 / HACCP',
    to: '/services/iso-22000-2018',
    icon: FaAppleAlt,
    desc: 'Food safety management and HACCP principles for supply chains.',
  },
  {
    title: 'ISO 13485:2016',
    to: '/services/iso-13485-2016',
    icon: FaStethoscope,
    desc: 'Quality management system for medical device manufacturers.',
  },
  {
    title: 'ISO 27001:2022',
    to: '/services/iso-27001-2022',
    icon: FaLock,
    desc: 'Information security management to protect sensitive data.',
  },
  {
    title: 'IATF 16949:2016',
    to: '/services/iatf-16949-2016',
    icon: FaCar,
    desc: 'Automotive industry quality management standard for suppliers.',
  },
]

export default function ServicesIndex() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 pt-20 sm:pt-24 pb-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <h2 className="mb-4 text-4xl font-bold text-[#002066] dark:text-white text-center">
          Our Core ISO Services
        </h2>

        <p className="mb-10 max-w-2xl text-gray-900 dark:text-gray-300 mx-auto text-center">
          From quality management to food safety, information security, and environmental compliance — we cover every standard your business needs.
        </p>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
  {services.map((s) => {
    const Icon = s.icon;

    return (
      <Link
        key={s.title}
        to={s.to}
        className="group rounded-xl border border-gray-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#E4910C] hover:shadow-xl dark:border-white/10 dark:bg-gray-800 dark:hover:border-indigo-500"
      >
        {/* Icon */}
        <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gray-100 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 group-hover:shadow-lg dark:bg-gray-100">
          <Icon className="h-8 w-8 text-[#0A3A7A] transition-all duration-300 group-hover:text-[#E4910C] dark:group-hover:text-indigo-400" />
        </div>

        {/* Title */}
        <h3 className="text-xl font-semibold text-[#E4910C] dark:text-indigo-400 group-hover:text-[#E4910C] dark:group-hover:text-indigo-400">
          {s.title}
        </h3>

        {/* Description */}
        <p className="mt-3 text-sm leading-6 text-gray-900 dark:text-gray-300">
          {s.desc}
        </p>

        {/* Link */}
        <div className="mt-6 font-medium text-[#E4910C] dark:text-indigo-400">
          Learn More →
        </div>
      </Link>
    );
  })}
</div>

      </div>
    </div>
  );
}