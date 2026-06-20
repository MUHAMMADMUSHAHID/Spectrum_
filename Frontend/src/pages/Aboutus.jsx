import {EyeIcon,CheckCircleIcon,} from '@heroicons/react/24/outline'
import Clients from './Clients'
import Testimonials from './Testimonials'
import EmployeeSection from '../components/EmployeeSection'
import TeamSection from '../components/TeamSection'
import { motion } from 'framer-motion'

export default function Example() {
  return (
    <div className="bg-white dark:bg-gray-900 pt-20 sm:pt-24 py-2 sm:py-3">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
     <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

  {/* Left Side - About */}
  <div>
    <h2 className="text-4xl font-semibold tracking-tight text-[#002066] dark:text-white sm:text-5xl">
      About Spectrum Quality Management
    </h2>

    <p className="mt-6 text-lg leading-8 text-gray-700 dark:text-gray-300">
      Spectrum Quality Management, established in 2024, is a dynamic and
      growing consultancy firm specializing in Management System Standards.
      Backed by over 21 years of collective experience in management system
      consultancy, we bring deep industry knowledge and practical expertise to
      every client engagement.

      <br />
      <br />

      Our team comprises highly experienced professionals in consultancy,
      training, and auditing, ensuring comprehensive support at every stage of
      your certification journey. We cater to a wide range of industries —
      from manufacturing and IT to healthcare and hospitality — delivering
      customized solutions tailored to specific business needs.

      <br />
      <br />

      We are associated with and recognized by leading certification bodies,
      enabling us to guide our clients effectively towards successful
      certification with minimal challenges.
    </p>

    <blockquote className="mt-6 border-l-4 border-[#E4910C] dark:border-indigo-500 pl-6 italic text-lg text-gray-600 dark:text-gray-400">
      "We don't just implement standards, we create sustainable success."
    </blockquote>
  </div>

  {/* Right Side - Vision & Mission */}
  <div className="space-y-8">

    {/* Vision Card */}
    <motion.div
      className="bg-[#082F6D] text-white p-8 rounded-3xl shadow-lg"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <EyeIcon className="w-10 h-10 text-[#E4910C] mb-5" />

      <h3 className="text-2xl font-bold mb-4">
        Our Vision
      </h3>

      <p className="text-white/80 leading-8">
        To be a trusted global partner in delivering excellence through
        integrated management system solutions, enabling organizations to
        achieve sustainable growth, compliance, and operational excellence.
      </p>
    </motion.div>

    {/* Mission Card */}
    <motion.div
      className="bg-[#FFF8ED] border border-[#E4910C]/20 p-8 rounded-3xl shadow-lg"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <CheckCircleIcon className="w-10 h-10 text-[#E4910C] mb-5" />

      <h3 className="text-2xl font-bold text-[#082F6D] mb-4">
        Our Mission
      </h3>

      <ul className="space-y-4">
        {[
          'Provide reliable, value-driven consultancy across all ISO standards',
          'Help organizations build robust, compliant and efficient management systems',
          'Enhance client performance through continual improvement',
          'Deliver practical customized solutions aligned with business goals',
          'Build long-term relationships based on trust, integrity and professionalism',
        ].map((item, index) => (
          <li
            key={index}
            className="flex items-start gap-3 text-gray-700"
          >
            <CheckCircleIcon className="w-5 h-5 text-[#E4910C] shrink-0 mt-1" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </motion.div>

  </div>

</div>
      </div>
      <EmployeeSection />
      <TeamSection />
      <section id="clients" className="scroll-mt-28">
        <Clients />
      </section>
      <section id="testimonials" className="scroll-mt-28">
        <Testimonials />
      </section>
    </div>
  )
}
