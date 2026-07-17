import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaCheckCircle,
  FaLeaf,
  FaShieldAlt,
  FaUtensils,
  FaStethoscope,
  FaLock,
  FaAward,
  FaBriefcase,
} from "react-icons/fa";

const services = [
  {
    title: "ISO 9001:2015",
    to: "/services/iso-9001-2015",
    icon: FaCheckCircle,
    desc: "Quality management system to enhance customer satisfaction and business performance.",
  },
  {
    title: "ISO 14001:2015",
    to: "/services/iso-14001-2015",
    icon: FaLeaf,
    desc: "Environmental Management System (EMS) to improve environmental performance.",
  },
  {
    title: "ISO 45001:2018",
    to: "/services/iso-45001-2018",
    icon: FaShieldAlt,
    desc: "Occupational health & safety management to reduce workplace risks.",
  },
  {
    title: "ISO 22000:2018",
    to: "/services/iso-22000-2018",
    icon: FaUtensils,
    desc: "Food safety management and HACCP principles for supply chains.",
  },
  {
    title: "ISO 13485:2016",
    to: "/services/iso-13485-2016",
    icon: FaStethoscope,
    desc: "Quality management system for medical device manufacturers.",
  },
  {
    title: "ISO 27001:2022",
    to: "/services/iso-27001-2022",
    icon: FaLock,
    desc: "Information security management to protect sensitive data.",
  },
  {
    title: "ISO 22301:2019",
    to: "/services/iso-22301-2019",
    icon: FaBriefcase,
    desc: "Business continuity management to ensure operational resilience.",
  },
  {
    title: "CE Marking",
    to: "/services/ce-marking",
    icon: FaAward,
    desc: "Demonstrates compliance with EU safety, health, and environmental requirements.",
  },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 50,
    scale: 0.95,
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.45,
      ease: "easeOut",
    },
  },
};

export default function ServicesIndex() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 pt-20 sm:pt-24 pb-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="mb-4 text-4xl font-bold text-[#002066] dark:text-white text-center">
            Our Core ISO Services
          </h2>

          <p className="mb-12 max-w-2xl mx-auto text-center text-gray-700 dark:text-gray-300">
            From quality management to food safety, information security, and
            environmental compliance — we cover every standard your business
            needs.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4"
        >
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.title}
                variants={cardVariants}
              >
                <Link
                  to={service.to}
                  className="
                    group
                    relative
                    flex
                    h-full
                    flex-col
                    overflow-hidden
                    rounded-3xl
                    border
                    border-gray-200
                    dark:border-gray-700
                    bg-white
                    dark:bg-gray-800
                    p-7
                    transition-all
                    duration-300
                    hover:-translate-y-3
                    hover:border-[#E4910C]
                    hover:shadow-[0_20px_60px_rgba(228,145,12,0.35)]
                    dark:hover:shadow-[0_20px_60px_rgba(99,102,241,0.35)]
                  "
                >
                  {/* Icon */}

                  <div
                    className="
                      mb-6
                      flex
                      h-16
                      w-16
                      items-center
                      justify-center
                      rounded-2xl
                      bg-gray-100
                      dark:bg-gray-700
                      transition-all
                      duration-200
                      group-hover:scale-125
                      group-hover:rotate-12
                    "
                  >
                    <Icon className="h-8 w-8 text-[#002C66] group-hover:text-[#E4910C] dark:text-white" />
                  </div>

                  {/* Title */}

                  <h3 className="text-xl font-bold text-[#002C66] dark:text-white group-hover:text-[#E4910C] transition-colors duration-300">
                    {service.title}
                  </h3>

                  {/* Description */}

                  <p className="mt-4 flex-grow text-gray-600 dark:text-gray-300 leading-7">
                    {service.desc}
                  </p>

                  {/* Learn More */}

                  <div className="mt-8 flex items-center font-semibold text-[#E4910C]">
                    Learn More
                    <span className="ml-2 transition-transform duration-300 group-hover:translate-x-2">
                      →
                    </span>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </div>
  );
}