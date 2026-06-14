import CertificationCTA from "./CertificationCTA";

export default function CertificationPage({
  title,
  description,
  benefits,
  whoNeeds,
}) {
  return (
    <div className="bg-gray-900 min-h-screen pt-20 sm:pt-24">
      {/* Hero Section */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-white">
                {title}
              </h1>

              <p className="mt-4 text-base sm:text-lg text-gray-400 max-w-3xl">
                {description}
              </p>
            </div>

            <aside className="w-full">
              <div className="rounded-xl border border-white/10 bg-white/5 p-6">
                <h3 className="text-lg font-semibold text-white">Quick Summary</h3>
                <p className="mt-2 text-sm text-gray-300">Key benefits at a glance.</p>

                <ul className="mt-4 space-y-2">
                  {benefits.slice(0, 4).map((b) => (
                    <li key={b} className="text-sm text-gray-200">• {b}</li>
                  ))}
                </ul>

                <div className="mt-6">
                  <a
                    href="/contact"
                    className="inline-block w-full text-center rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-500"
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
      <section className="pb-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-semibold text-white">Key Benefits</h2>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {benefits.map((benefit) => (
              <div
                key={benefit}
                className="rounded-lg border border-white/10 bg-white/5 p-4 text-gray-300 flex items-start gap-3"
              >
                <div className="text-indigo-400 font-semibold">✓</div>
                <div className="text-sm">{benefit}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who Needs */}
      <section className="pb-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-semibold text-white">Who Needs This Certification?</h2>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-400">
            {whoNeeds.map((item) => (
              <div key={item} className="text-sm">• {item}</div>
            ))}
          </div>
        </div>
      </section>

      <CertificationCTA certification={title} />
    </div>
  );
}