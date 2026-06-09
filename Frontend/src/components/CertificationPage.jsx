import CertificationCTA from "./CertificationCTA";

export default function CertificationPage({
  title,
  description,
  benefits,
  whoNeeds,
}) {
  return (
    <div className="bg-gray-900 min-h-screen">
      {/* Hero Section */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h1 className="text-5xl font-semibold tracking-tight text-white">
            {title}
          </h1>

          <p className="mt-6 max-w-4xl text-lg text-gray-400">
            {description}
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section className="pb-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-3xl font-semibold text-white">
            Key Benefits
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {benefits.map((benefit) => (
              <div
                key={benefit}
                className="rounded-lg border border-white/10 bg-white/5 p-4 text-gray-300"
              >
                ✓ {benefit}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who Needs */}
      <section className="pb-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-3xl font-semibold text-white">
            Who Needs This Certification?
          </h2>

          <ul className="mt-8 space-y-3 text-gray-400">
            {whoNeeds.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
        </div>
      </section>

      <CertificationCTA certification={title} />
    </div>
  );
}