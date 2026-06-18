
import { useEffect } from 'react'
import { useLocation, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Aboutus from './Aboutus'

const Home = () => {
  const { hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const element = document.querySelector(hash)
      element?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }, [hash])

  return (
    <div className="bg-white min-h-screen text-black dark:bg-gray-900 dark:text-white">
      <div className="relative isolate overflow-hidden px-6 pt-28 md:pt-36 lg:pt-40 lg:px-8">
        
        {/* Background Blur Effects */}
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10"
        >
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl" />
          <div className="absolute top-1/2 -left-24 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl" />
        </div>

        {/* Hero Content */}
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="max-w-4xl mx-auto text-center">

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block py-1 px-4 rounded-full bg-[#E4910C]/10 dark:bg-indigo-500/10 text-[#E4910C] dark:text-indigo-300 font-medium text-sm mb-4 border border-[#E4910C]/20 dark:border-indigo-500/20">
                ISO 9001 Consultants in Mumbai
              </span>
            </motion.div>

            <motion.p
              className="text-[#E4910C] dark:text-indigo-400 font-semibold text-base uppercase tracking-widest mb-3"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05 }}
            >
              Driving Excellence Through Compliance
            </motion.p>

            <motion.h1
              className="text-[#002066] dark:text-white text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Achieve ISO Certification with{' '}
              <span className="text-[#E4910C] dark:text-indigo-400">
                Confidence
              </span>
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-4 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Spectrum Quality Management offers ISO Certification consultancy
              services to clients in Mumbai, Pune, Goa, Nasik and other major
              cities in India.
            </motion.p>

            <motion.p
              className="text-base text-gray-500 italic mb-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              "Simplifying ISO, Strengthening Business"
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
            >
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-md w-full sm:w-auto bg-[#E4910C] hover:bg-amber-400  dark:bg-indigo-500 text-white dark:hover:bg-indigo-600 text-base font-semibold px-8 h-12 shadow-lg transition-all duration-300"
              >
                Book Free 30-Min Consultation
              </Link>

              <Link
                to="/services"
                className="inline-flex items-center justify-center rounded-md w-full sm:w-auto text-base font-semibold px-8 border border-white/20 hover:bg-white/5 h-12 transition-all duration-300"
              >
                Explore Services
              </Link>
            </motion.div>

          </div>
        </div>

        {/* Bottom Blur Effect */}
        <div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 -z-10"
        >
          <div className="absolute right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl" />
        </div>
      </div>

      <section id="about">
        <Aboutus />
      </section>
    </div>
  )
}

export default Home