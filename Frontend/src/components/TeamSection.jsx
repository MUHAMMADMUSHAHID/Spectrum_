const people = [
  {
    name: "Kausar Shaikh",
    role: "Sr. Consultant",
    education: "B.A (Psychology), MBA",
    certifications: [
      "Certified Lead Auditor for ISO 9001, ISO 14001, ISO 45001, ISO 27001",
      "Internal Auditor for NABL",
    ],
    experience: "20+ Years of Experience",
    initials: "KS",
  },
  // Add more team members here
  {
    name: "Deepa Chetti",
    role: "Head – Finance",
    education: "B.Com, PGDCA",
    certifications: [
      "Certified Lead Auditor for ISO 9001",
      "Internal Auditor for ISO 14001, ISO 45001, ISO 27001",
    ],
    experience: "15+ Years of Experience",
    initials: "DC",
  },
  {
    name: "Bharati Hegde",
    role: "Sr. Consultant, Auditor & Trainer",
    education: "B.Sc (Electronics), MBA",
    certifications: [
      "Certified Lead Auditor for ISO 9001, ISO 14001, ISO 45001",
    ],
    experience: "10+ Years of Experience",
    initials: "BH",
  },
  {
    name: "Ajit Nair",
    role: "Sr. Management Trainer & Auditor",
    education: "B.E (Mech) and Operations Management",
    certifications: [
      "Certified Lead Auditor for ISO 9001, ISO 14001, ISO 45001",
      "Certified Lead Auditor Trainer for ISO 9001, ISO 14001, ISO 45001",
    ],
    experience: "12 Years Industrial + 19 Years Certification Experience",
    initials: "AN",
  },
  {
    name: "Vinayak Bhide",
    role: "Sr. Consultant & Training for IT",
    education: "B.SC, PG Diploma in General Management & IT Management, MBA – IT",
    certifications: [
      "Certified Lead Auditor for ISO 9001, ISO 27001, ISO 22301",
      "Lead Implementer for CMMI (Level 3–5), BPR, PMO",
    ],
    experience: "40+ Years of Experience",
    initials: "VB",
  },
  {
    name: "Jagdish Apte",
    role: "Sr. Consultant & Training for IT ADCS&SA",
    education: "Advance Diploma in Computer Software & System Analysis (A-level), D.E. & T.E. in Electronics and Telecommunication Engineering",
    certifications: [],
    experience: "35+ Years of Experience",
    initials: "JA",
  },
  {
    name: "Sanjay S. Velankar",
    role: "Sr. Consultant & Trainer",
    education: "D.E. (Industrial Electronics), B.E. (Electronics Hons)",
    certifications: [
      "Third Party Inspection Engineer",
      "Certified Lead Auditor for ISO 9001, 14001, 27001, 45001, 50001, 22301, 21001, 27101, 15489, 14721, 15836",
      "International Chinese Mandarin Language Proficiency — HSK-2",
      "Certificate Course in Solar Energy — IDEMU-MSME, Mumbai",
      "Certificate Course in Electric Vehicle Charging Station — IDEMU-MSME, Mumbai",
    ],
    experience: "35+ Years of Experience",
    initials: "SV",
  },
  {
    name: "Hetal Mistry",
    role: "Consultant – QMS & FSMS",
    education: "B.Sc. in Food Science and Technology",
    certifications: [
      "Internal Auditor & Implementer of ISO 9001 & ISO 22000",
    ],
    experience: "7+ Years of Experience",
    initials: "HM",
  },
];

export default function TeamSection() {
  return (
    <section className="bg-white dark:bg-gray-900 py-24 sm:py-3">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-[#002066] dark:text-white sm:text-4xl">
           Experienced Consultants & Auditors
          </h2>
          <p className="mt-6 text-lg text-gray-700 dark:text-gray-300">
           Backed by over 21 years of collective experience, our team of certified lead auditors, management trainers, and domain specialists ensures you receive the highest standard of consultancy at every step.
          </p>
        </div>

        {/* Team Grid */}
   <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2">
  {people.map((person) => (
    <div
      key={person.name}
      className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
    >
      <div className="flex gap-5">
        {/* Initials */}
        <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-3xl bg-[#002C66] text-3xl font-bold text-white">
          {person.initials}
        </div>

        {/* Details */}
        <div className="flex-1">
          <h3 className="text-2xl font-bold text-[#002C66]">
            {person.name}
          </h3>

          <p className="text-lg font-semibold text-[#E4910C]">
            {person.role}
          </p>

          <p className="mt-1 italic text-slate-500">
            {person.education}
          </p>

          <ul className="mt-4 space-y-2">
            {person.certifications.map((cert, idx) => (
              <li
                key={idx}
                className="flex items-start gap-3 text-slate-600"
              >
                <span className="mt-2 h-2 w-2 rounded-full bg-[#E4910C]" />
                <span>{cert}</span>
              </li>
            ))}
          </ul>

          <div className="mt-5">
            <span className="inline-flex rounded-full border border-slate-300 bg-slate-50 px-4 py-2 text-sm font-semibold text-[#002C66]">
              {person.experience}
            </span>
          </div>
        </div>
      </div>
    </div>
  ))}
</div>
      </div>
    </section>
  );
}