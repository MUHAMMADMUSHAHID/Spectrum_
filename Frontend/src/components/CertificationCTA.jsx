import { Link } from "react-router-dom";

export default function CertificationCTA({
  certification = "ISO 9001:2015",
}) {
  return (
    <section className="bg-gray-900 py-16">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-8 lg:p-10">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h3 className="text-2xl font-semibold tracking-tight text-white">
                Need {certification} Certification?
              </h3>

              <p className="mt-3 text-base text-gray-400">
                Get expert guidance tailored to your organization's needs.
              </p>
            </div>

            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-md bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:bg-indigo-500"
            >
              Book Free Consultation
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}