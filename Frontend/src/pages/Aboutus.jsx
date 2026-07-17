import {
  CheckBadgeIcon,
  BriefcaseIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";

import Clients from "./Clients";
import Testimonials from "./Testimonials";
import EmployeeSection from "../components/EmployeeSection";
import TeamSection from "../components/TeamSection";
import { motion } from "framer-motion";
import ServicesIndex from "./Services/ServicesIndex";

export default function Example() {
  return (
    <div className="bg-white dark:bg-gray-900 pt-20 sm:pt-24 py-2 sm:py-3">
     <div className="mx-auto max-w-7xl px-6 lg:px-8">

<div className="mx-auto max-w-4xl text-center">

<motion.span
initial={{opacity:0,y:20}}
whileInView={{opacity:1,y:0}}
viewport={{once:true}}
className="inline-flex rounded-full bg-[#E4910C]/10 px-5 py-2 text-sm font-semibold text-[#E4910C]"
>

ABOUT SPECTRUM

</motion.span>

<motion.h2
initial={{opacity:0,y:20}}
whileInView={{opacity:1,y:0}}
transition={{delay:.1}}
viewport={{once:true}}
className="mt-6 text-5xl font-bold text-[#002C66] dark:text-white"
>

Building Stable Systems for Desired Results

</motion.h2>

<motion.p
initial={{opacity:0,y:20}}
whileInView={{opacity:1,y:0}}
transition={{delay:.2}}
viewport={{once:true}}
className="mt-8 text-lg leading-8 text-gray-600 dark:text-gray-300"
>

Spectrum Quality Management is a trusted ISO consulting organization helping businesses achieve internationally recognized certifications through practical implementation, auditing, training, and continual improvement. With over 21 years of experience, we partner with organizations across manufacturing, healthcare, maritime, engineering, logistics, IT, and service sectors.

</motion.p>

</div>
{/* Feature Cards */}

<motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
  viewport={{ once: true }}
  className="mt-14 grid gap-6 md:grid-cols-3"
>

  {/* Card 1 */}

  <div className="rounded-3xl border border-[#E4910C]/20 bg-white dark:bg-gray-800 p-8 shadow-[0_15px_45px_rgba(228,145,12,0.15)] hover:shadow-[0_25px_60px_rgba(228,145,12,0.35)] transition-all duration-300 hover:-translate-y-2">

    <CheckBadgeIcon className="mx-auto h-12 w-12 text-[#E4910C]" />

    <h3 className="mt-5 text-xl font-bold text-[#002C66] dark:text-white">
      Certified Experts
    </h3>

    <p className="mt-3 text-gray-600 dark:text-gray-300">
      Certified Lead Auditors & Consultants delivering practical ISO implementation.
    </p>

  </div>

  {/* Card 2 */}

  <div className="rounded-3xl border border-[#E4910C]/20 bg-white dark:bg-gray-800 p-8 shadow-[0_15px_45px_rgba(228,145,12,0.15)] hover:shadow-[0_25px_60px_rgba(228,145,12,0.35)] transition-all duration-300 hover:-translate-y-2">

    <BriefcaseIcon className="mx-auto h-12 w-12 text-[#E4910C]" />

    <h3 className="mt-5 text-xl font-bold text-[#002C66] dark:text-white">
      300+ Projects
    </h3>

    <p className="mt-3 text-gray-600 dark:text-gray-300">
      Successfully completed ISO certification and consultancy projects across industries.
    </p>

  </div>

  {/* Card 3 */}

  <div className="rounded-3xl border border-[#E4910C]/20 bg-white dark:bg-gray-800 p-8 shadow-[0_15px_45px_rgba(228,145,12,0.15)] hover:shadow-[0_25px_60px_rgba(228,145,12,0.35)] transition-all duration-300 hover:-translate-y-2">

    <UserCircleIcon className="mx-auto h-12 w-12 text-[#E4910C]" />

    <h3 className="mt-5 text-xl font-bold text-[#002C66] dark:text-white">
      120+ Clients
    </h3>

    <p className="mt-3 text-gray-600 dark:text-gray-300">
      Trusted by organizations across Manufacturing, Healthcare, Maritime, IT, Engineering and more.
    </p>

  </div>

</motion.div>
{/* ================= CEO SECTION ================= */}

<motion.div
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
  className="mt-24 grid grid-cols-1 items-center gap-16 lg:grid-cols-2"
>

  {/* CEO IMAGE */}

  <motion.div
    whileHover={{ scale: 1.02 }}
    transition={{ duration: 0.3 }}
    className="relative"
  >
    <img
      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&q=80"
      alt="CEO"
      className="h-[550px] w-full rounded-[36px] object-cover shadow-[0_25px_70px_rgba(228,145,12,0.35)]"
    />

    {/* Floating Card */}

    <div className="absolute -bottom-8 left-8 rounded-3xl bg-white dark:bg-gray-800 px-8 py-5 shadow-2xl">

      <h3 className="text-2xl font-bold text-[#002C66] dark:text-white">
        Kausar Shaikh
      </h3>

      <p className="font-semibold text-[#E4910C]">
        Chief Executive Officer
      </p>

    </div>

  </motion.div>

  {/* CEO DETAILS */}

  <motion.div
    initial={{ opacity: 0, x: 40 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
  >



    <h2 className="mt-6 text-4xl font-bold text-[#002C66] dark:text-white">
      Kausar Shaikh
    </h2>

    <p className="mt-2 text-xl font-semibold text-[#E4910C]">
      Chief Executive Officer & Lead Consultant
    </p>

    <p className="mt-8 leading-8 text-gray-600 dark:text-gray-300">

      Kausar Shaikh is the Founder and Chief Executive Officer of Spectrum
      Quality Management. With more than two decades of expertise in ISO
      consulting, auditing, implementation, and professional training, she
      has successfully guided organizations across Manufacturing,
      Engineering, Healthcare, Maritime, IT, Logistics and Service sectors
      toward internationally recognized certifications.

      <br />
      <br />

      Her practical leadership, customer-centric approach, and commitment to
      continual improvement have established Spectrum Quality Management as a
      trusted consultancy partner for organizations seeking operational
      excellence and sustainable growth.

    </p>

    {/* Experience Badges */}

    <div className="mt-10 flex flex-wrap gap-4">

      <span className="rounded-full border border-[#E4910C]/20 bg-[#FFF8ED] dark:bg-gray-800 dark:border-gray-700 px-5 py-3 font-semibold text-[#002C66] dark:text-white">
        20+ Years Experience
      </span>

      <span className="rounded-full border border-[#E4910C]/20 bg-[#FFF8ED] dark:bg-gray-800 dark:border-gray-700 px-5 py-3 font-semibold text-[#002C66] dark:text-white">
        Certified Lead Auditor
      </span>

      <span className="rounded-full border border-[#E4910C]/20 bg-[#FFF8ED] dark:bg-gray-800 dark:border-gray-700 px-5 py-3 font-semibold text-[#002C66] dark:text-white">
        Management Trainer
      </span>

      <span className="rounded-full border border-[#E4910C]/20 bg-[#FFF8ED] dark:bg-gray-800 dark:border-gray-700 px-5 py-3 font-semibold text-[#002C66] dark:text-white">
        ISO Consultant
      </span>

    </div>

  </motion.div>

</motion.div>

<div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-28">

{[
["21+","Years Experience"],
["120+","Happy Clients"],
["300+","Projects"],
["100%","Client Focus"]
].map(([number,label])=>(

<motion.div

key={label}

whileHover={{y:-8}}

className="rounded-3xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-8 text-center shadow-[0_15px_40px_rgba(228,145,12,.18)] hover:shadow-[0_20px_60px_rgba(228,145,12,.35)] transition-all"

>

<h3 className="text-5xl font-bold text-[#E4910C]">

{number}

</h3>

<p className="mt-3 text-gray-600 dark:text-gray-300">

{label}

</p>

</motion.div>

))}

</div>

</div>
      <EmployeeSection />
      <section id="clients" className="scroll-mt-28">
        <Clients />
      </section>
      <ServicesIndex />
      <section id="testimonials" className="scroll-mt-28">
        <Testimonials />
      </section>
    </div>
  )
}
