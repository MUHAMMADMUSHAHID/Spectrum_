const reviews = [
  {
    name: "Rahul Sharma",
    company: "ABC Industries",
    review:
      "Spectrum Quality Management guided us through ISO 9001 certification smoothly. Their team was extremely professional and supportive.",
  },
  {
    name: "Priya Mehta",
    company: "XYZ Pvt Ltd",
    review:
      "Excellent consulting services. The implementation was systematic and the audit preparation was outstanding.",
  },
  {
    name: "Amit Patel",
    company: "Patel Engineering",
    review:
      "Highly recommended for ISO certification. Their consultants have deep knowledge and provide practical solutions.",
  },
  {
    name: "Neha Kapoor",
    company: "NK Foods",
    review:
      "Professional team with quick responses. They made our ISO 22000 implementation very easy.",
  },
  {
    name: "Sanjay Verma",
    company: "SV Manufacturing",
    review:
      "Very satisfied with Spectrum's consulting approach. Everything was completed before deadline.",
  },
];

export default function Testimonials() {
  // Duplicate the array for seamless looping
  const marqueeReviews = [...reviews, ...reviews];

  return (
    <section
      id="testimonials"
      className="bg-white dark:bg-gray-900 py-20 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center mb-14">
          <span className="inline-block rounded-full bg-yellow-100 px-4 py-1 text-sm font-semibold text-yellow-700">
            ⭐ Google Reviews
          </span>

          <h2 className="mt-4 text-4xl font-bold text-[#002C66] dark:text-white">
            What Our Clients Say
          </h2>

          <p className="mt-4 text-gray-500 dark:text-gray-300 max-w-2xl mx-auto">
            Long-term partnerships built on trust, transparency, and reliability.
          </p>
        </div>

        {/* Marquee */}

        <div className="overflow-hidden">
          <div className="animate-marquee">
            {marqueeReviews.map((review, index) => (
              <div
                key={index}
                className="mx-4 w-[360px] flex-shrink-0 rounded-2xl border border-gray-200 bg-white p-6 shadow-md transition hover:shadow-xl"
              >
                <div className="text-yellow-500 text-lg mb-3">
                  ⭐⭐⭐⭐⭐
                </div>

                <p className="text-gray-600 italic leading-7">
                  "{review.review}"
                </p>

                <div className="mt-6 border-t pt-4">
                  <h3 className="font-semibold text-gray-900">
                    {review.name}
                  </h3>

                  <p className="text-sm text-gray-500">
                    {review.company}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Google Button */}

        <div className="mt-14 text-center">
          <a
            href="https://g.page/r/YOUR_GOOGLE_REVIEW_LINK"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-xl bg-[#E4910C] dark:bg-indigo-600 px-8 py-4 text-white font-semibold shadow-lg transition hover:bg-indigo-700 hover:scale-105"
          >
            View All Google Reviews →
          </a>
        </div>
      </div>
    </section>
  );
}

