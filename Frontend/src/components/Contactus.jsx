import { useState } from "react";
import api from "../api";
import toast from "react-hot-toast";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    service: "",
    city: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await api.post("/form/submit", {
      Name: formData.name,
      company: formData.company,
      city: formData.city,
      email: formData.email,
      phone: formData.phone,
      certification: formData.service,
      message: formData.message,
    });

    toast.success(response.data.message);

    setFormData({
      name: "",
      company: "",
      email: "",
      phone: "",
      service: "",
      city: "",
      message: "",
    });
  } catch (error) {
    console.log(error);
  console.log(error.response);
  console.log(error.response?.data);
    alert(
      error.response?.data?.message ||
        "Something went wrong"
    );
  }
};

  return (
    <section
      id="contact"
      className="bg-white dark:bg-gray-900 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base font-semibold text-indigo-400">
            Contact Us
          </h2>

          <p className="mt-2 text-4xl font-semibold text-[#002C66] dark:text-white sm:text-5xl">
          Contact Spectrum Quality Management
          </p>

          <h1 className="mt-6 text-4xl text-[#E4910C] dark:text-indigo-400 sm:text-5xl">
            Send an Enquiry
          </h1>
        </div>

        <form
          onSubmit={handleSubmit}
          className="mx-auto mt-16 max-w-3xl"
        >
          <div className="grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-2">

            {/* Name */}
            <div>
              <label className="block text-sm font-medium text-black dark:text-white mb-2">
                Full Name
              </label>

              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="block w-full rounded-md border border-gray-600 dark:border-white/10 bg-white dark:bg-gray-800 px-4 py-3 text-white placeholder-gray-500 focus:border-indigo-500 focus:outline-none"
                placeholder="Enter your name"
              />
            </div>

            {/* Company */}
            <div>
              <label className="block text-sm font-medium text-black dark:text-white mb-2">
                Company Name
              </label>

              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="block w-full rounded-md border border-gray-600 dark:border-white/10 bg-white dark:bg-gray-800 px-4 py-3 text-white placeholder-gray-500 focus:border-indigo-500 focus:outline-none"
                placeholder="Company name"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-black dark:text-white mb-2">
                Email Address
              </label>

              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="block w-full rounded-md border border-gray-600 dark:border-white/10  bg-white dark:bg-gray-800 px-4 py-3 text-white placeholder-gray-500 focus:border-indigo-500 focus:outline-none"
                placeholder="your@email.com"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-medium text-black dark:text-white mb-2">
                Phone Number
              </label>

              <input
                type="tel"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                className="block w-full rounded-md border  border-gray-600 dark:border-white/10 bg-white dark:bg-gray-800 px-4 py-3 text-white placeholder-gray-500 focus:border-indigo-500 focus:outline-none"
                placeholder="+91 XXXXX XXXXX"
              />
            </div>

            {/* Certification */}
            {/* Certification */}
<div>
  <label className="block text-sm font-medium text-black dark:text-white mb-2">
    Certification Required
  </label>

  <select
    name="service"
    value={formData.service}
    onChange={handleChange}
    className="block w-full rounded-md border border-gray-600 dark:border-white/10 bg-white dark:bg-gray-800 px-4 py-3 text-black dark:text-white focus:border-indigo-500 focus:outline-none"
  >
    <option value="">Select Service</option>

    <option value="ISO 9001">
      ISO 9001:2015
    </option>

    <option value="ISO 14001">
      ISO 14001:2015
    </option>

    <option value="ISO 45001">
      ISO 45001:2018
    </option>

    <option value="ISO 22000">
      ISO 22000:2018 / HACCP
    </option>

    <option value="ISO 13485">
      ISO 13485:2016
    </option>

    <option value="ISO 27001">
      ISO 27001:2022
    </option>

    <option value="IATF 16949">
      IATF 16949:2016
    </option>
  </select>
</div>

            {/* City */}
            <div>
              <label className="block text-sm font-medium text-black dark:text-white mb-2">
                City
              </label>

              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                className="block w-full rounded-md border border-gray-600 dark:border-white/10 bg-white dark:bg-gray-800 px-4 py-3 text-white placeholder-gray-500 focus:border-indigo-500 focus:outline-none"
                placeholder="Mumbai"
              />
            </div>

            {/* Message */}
            <div className="sm:col-span-2">
              <label className="block text-sm font-medium text-black dark:text-white mb-2">
                Message
              </label>

              <textarea
                rows={5}
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="block w-full rounded-md border border-gray-600 dark:border-white/10 bg-white dark:bg-gray-800 px-4 py-3 text-white placeholder-gray-500 focus:border-indigo-500 focus:outline-none"
                placeholder="Tell us about your certification requirements..."
              />
            </div>
          </div>

          <div className="mt-8">
            <button
              type="submit"
              className="w-full rounded-md bg-[#E4910C] dark:bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 transition-colors"
            >
              Request Free Consultation
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}