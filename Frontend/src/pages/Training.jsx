import {
  BookOpen,
  Users,
  Settings,
  ClipboardList,
  CheckCircle,
} from "lucide-react";

export default function Training() {
  const objectives = [
    "ISO 9001",
    "ISO 13485",
    "ISO 14001",
    "HACCP / ISO 22000",
    "ISO 45001",
    "ISO 27001",
  ];

  const methodologiesLeft = [
    "7QC Tools",
    "MSA",
    "PPAP",
    "Control Plan",
    "Lean Method",
    "TPM",
  ];

  const methodologiesRight = [
    "5S",
    "FMEA",
    "APQP",
    "Quality Plan",
    "TQM",
  ];

  const modules = [
    "Introduction & Workshop Objectives",
    "Introduction to ISO & Core Benefits",
    "Practical Exercises on Implementation",
    "Registration & Certification Process",
    "Process Model & Continual Improvement",
  ];

  return (
    <div className="bg-white dark:bg-gray-900 transition-colors duration-300">

      {/* Hero */}

      <section
        className="relative h-[350px] flex items-center"
        
      >
     

        <div className="relative max-w-7xl mx-auto px- lg:px- ">

          <h1 className="text-5xl lg:text-6xl font-bold  text-[#002C66] dark:text-white ">
            Quality Management Training Programs
          </h1>
        </div>
      </section>

      {/* Intro */}

      <section className="">

        <div className="max-w-5xl mx-auto px-6 text-center">

          <p className="text-2xl  text-gray-700 dark:text-gray-300">

            Spectrum provides a wide range of Training Programs in all
            major standards for Lead Auditors, Internal Auditors,
            and staff awareness.

            <br />
            

            Our engaging workshops ensure your team is equipped
            to maintain and continuously improve your Quality
            Management System.

          </p>

        </div>

      </section>
            {/* Objectives & Audience */}

      <section className="pb-24 pt-16">

        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          <div className="grid lg:grid-cols-2 gap-10">

            {/* Training Objectives */}

            <div className="rounded-3xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 p-10 shadow-sm">

              <div className="flex items-center gap-5">

                <div className="h-16 w-16 rounded-2xl bg-[#032d6a] flex items-center justify-center">

                  <BookOpen className="text-white w-8 h-8" />

                </div>

                <h2 className="text-4xl font-bold text-[#032d6a] dark:text-white">

                  Training Objectives

                </h2>

              </div>

              <p className="mt-10 text-lg leading-9 text-gray-700 dark:text-gray-300">

                To provide an understanding of the fundamental principles,
                objectives and requirements of major ISO standards.

              </p>

              <div className="flex flex-wrap gap-4 mt-8">

                {objectives.map((item, index) => (

                  <span
                    key={index}
                    className="
                    rounded-full
                    border
                    border-gray-300
                    dark:border-gray-600
                    px-5
                    py-2
                    text-base
                    font-medium
                    bg-white
                    dark:bg-gray-900
                    text-[#032d6a]
                    dark:text-white
                    "
                  >

                    {item}

                  </span>

                ))}

              </div>

            </div>

            {/* Who Should Attend */}

            <div className="rounded-3xl border border-amber-200 dark:border-amber-700 bg-amber-50/40 dark:bg-gray-800 p-10 shadow-sm">

              <div className="flex items-center gap-5">

                <div className="h-16 w-16 rounded-2xl bg-amber-500 flex items-center justify-center">

                  <Users className="text-white w-8 h-8" />

                </div>

                <h2 className="text-4xl font-bold text-[#032d6a] dark:text-white">

                  Who Should Attend?

                </h2>

              </div>

              <p className="mt-10 text-lg leading-9 text-gray-700 dark:text-gray-300">

                All employees involved in developing, implementing and
                maintaining a Quality Management System.

              </p>

              <p className="mt-5 text-lg leading-9 text-gray-700 dark:text-gray-300">

                Including managers, supervisors, engineers,
                quality professionals and operational staff who
                influence product or service quality.

              </p>

              <div className="mt-8 space-y-4">

                <div className="flex items-center gap-3">

                  <CheckCircle className="text-amber-500 w-6 h-6" />

                  <span className="text-gray-700 dark:text-gray-300">
                    Managers & Department Heads
                  </span>

                </div>

                <div className="flex items-center gap-3">

                  <CheckCircle className="text-amber-500 w-6 h-6" />

                  <span className="text-gray-700 dark:text-gray-300">
                    Internal Auditors
                  </span>

                </div>

                <div className="flex items-center gap-3">

                  <CheckCircle className="text-amber-500 w-6 h-6" />

                  <span className="text-gray-700 dark:text-gray-300">
                    Supervisors & Engineers
                  </span>

                </div>

                <div className="flex items-center gap-3">

                  <CheckCircle className="text-amber-500 w-6 h-6" />

                  <span className="text-gray-700 dark:text-gray-300">
                    Production & Support Staff
                  </span>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>
            {/* Methodologies & Workshop */}

      <section className="pb-24">

        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          <div className="grid lg:grid-cols-2 gap-12">

            {/* Left Section */}

            <div>

              <div className="flex items-center gap-4 mb-10">

                <div className="h-14 w-14 rounded-xl bg-amber-100 dark:bg-amber-500/20 flex items-center justify-center">

                  <Settings className="w-7 h-7 text-amber-500" />

                </div>

                <h2 className="text-4xl font-bold text-[#032d6a] dark:text-white">

                  Extended Methodologies & Tools

                </h2>

              </div>

              <div className="grid grid-cols-2 gap-x-10 gap-y-6">

                {/* Left Column */}

                <div className="space-y-5">

                  {methodologiesLeft.map((item, index) => (

                    <div
                      key={index}
                      className="flex items-center gap-3"
                    >

                      <CheckCircle className="w-5 h-5 text-amber-500" />

                      <span className="text-xl text-gray-700 dark:text-gray-300">

                        {item}

                      </span>

                    </div>

                  ))}

                </div>

                {/* Right Column */}

                <div className="space-y-5">

                  {methodologiesRight.map((item, index) => (

                    <div
                      key={index}
                      className="flex items-center gap-3"
                    >

                      <CheckCircle className="w-5 h-5 text-amber-500" />

                      <span className="text-xl text-gray-700 dark:text-gray-300">

                        {item}

                      </span>

                    </div>

                  ))}

                </div>

              </div>

            </div>

            {/* Workshop Outline */}

            <div className="rounded-3xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-10 shadow-sm">

              <div className="flex items-center gap-4 mb-10">

                <div className="h-14 w-14 rounded-xl bg-amber-100 dark:bg-amber-500/20 flex items-center justify-center">

                  <ClipboardList className="w-7 h-7 text-amber-500" />

                </div>

                <h2 className="text-4xl font-bold text-[#032d6a] dark:text-white">

                  Workshop Outline

                </h2>

              </div>

              <div className="space-y-7">

                {modules.map((module, index) => (

                  <div
                    key={index}
                    className="flex gap-6"
                  >

                    <span className="font-bold text-[#032d6a] dark:text-indigo-400 text-xl min-w-[120px]">

                      Module {index + 1}

                    </span>

                    <span className="text-xl text-gray-700 dark:text-gray-300">

                      {module}

                    </span>

                  </div>

                ))}

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* CTA Section */}

      <section className="pb-24">

        <div className="max-w-5xl mx-auto px-6">

          <div className="rounded-3xl bg-[#032d6a] p-12 text-center shadow-xl">

            <h2 className="text-4xl font-bold text-white">

              Enhance Your Team's Quality Management Skills

            </h2>

            <p className="mt-6 text-lg text-blue-100 leading-8">

              Spectrum offers customized ISO training programs for organizations
              looking to improve compliance, operational excellence, and
              continual improvement. Our experienced trainers deliver
              practical sessions tailored to your business needs.

            </p>

            <div className="mt-10">

              <a
                href="/contact"
                className="inline-flex items-center rounded-full bg-amber-500 px-8 py-4 text-lg font-semibold text-white transition hover:bg-amber-600"
              >
                Book Training Consultation
              </a>

            </div>

          </div>

        </div>

      </section>

    </div>
  );
}