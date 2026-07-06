import { useState } from "react";
import api from "../api";
import toast from "react-hot-toast";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
} from "lucide-react";

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

      {/* Heading */}
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-base font-semibold text-[#E4910C]">
          Contact Us
        </h2>

        <h1 className="mt-4 text-4xl font-bold text-[#002C66] dark:text-white sm:text-5xl">
          Contact Spectrum Quality Management
        </h1>

        <p className="mt-4 text-gray-600 dark:text-gray-300">
          Get expert guidance for ISO Certifications, Audits, Training and
          Compliance Solutions.
        </p>
      </div>

      {/* Main Layout */}
      <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12">

        {/* LEFT SIDE FORM */}
        <div className="rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-8 shadow-lg">

          <h2 className="text-3xl font-bold text-[#002C66] dark:text-white mb-8">
            Send an Enquiry
          </h2>

          <form onSubmit={handleSubmit}>
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
                  className="block w-full rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 px-4 py-3 text-black dark:text-white"
                  placeholder="John Doe"
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
                  className="block w-full rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 px-4 py-3 text-black dark:text-white"
                  placeholder="john@company.com"
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
                  className="block w-full rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 px-4 py-3 text-black dark:text-white"
                  placeholder="+91..."
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
                  className="block w-full rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 px-4 py-3 text-black dark:text-white"
                  placeholder="Your Company Ltd."
                />
              </div>

              {/* Service */}
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-black dark:text-white mb-2">
                  Service Interested In
                </label>

                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="block w-full rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 px-4 py-3 text-black dark:text-white"
                >
                  <option value="">Select a service</option>
                  <option value="ISO 9001">ISO 9001:2015</option>
                  <option value="ISO 14001">ISO 14001:2015</option>
                  <option value="ISO 45001">ISO 45001:2018</option>
                  <option value="ISO 22000">ISO 22000:2018 / HACCP</option>
                  <option value="ISO 13485">ISO 13485:2016</option>
                  <option value="ISO 27001">ISO 27001:2022</option>
                  <option value="IATF 16949">IATF 16949:2016</option>
                </select>
              </div>
            {/* City */}
            <div className="sm:col-span-2">
              <label className="block text-sm font-medium text-black dark:text-white mb-2">
                  City
              </label>

              <input
               type="text"
                name="city"
               value={formData.city}
              onChange={handleChange}
             className="block w-full rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 px-4 py-3 text-black dark:text-white"
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
                  className="block w-full rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 px-4 py-3 text-black dark:text-white"
                  placeholder="How can we help you?"
                />
              </div>

            </div>

            <div className="mt-8">
              <button
                type="submit"
                className="w-full rounded-md bg-[#E4910C] px-6 py-3 text-sm font-semibold text-white hover:bg-orange-600"
              >
                Send Enquiry
              </button>
            </div>
          </form>
        </div>

        {/* RIGHT SIDE */}
        <div>

          <h2 className="text-3xl font-bold text-[#002C66] dark:text-white mb-8">
            Contact Information
          </h2>

          <div className="space-y-8">

            <div>
              <h3 className="font-bold text-[#002C66] dark:text-white">
                Our Address
              </h3>

              <p className="mt-2 text-gray-600 dark:text-gray-300">
                Unit No PAP-R-251,
                <br />
                Navi Mumbai, India
              </p>
            </div>

            <div>
              <h3 className="font-bold text-[#002C66] dark:text-white">
                Phone Numbers
              </h3>

              <p className="mt-2 text-gray-600 dark:text-gray-300">
                +91 9324346684
                <br />
                +91 9930076684
              </p>
            </div>

            <div>
              <h3 className="font-bold text-[#002C66] dark:text-white">
                Email Addresses
              </h3>

              <p className="mt-2 text-gray-600 dark:text-gray-300">
                info@isoqms.in
                <br />
                enquiry@isoqms.in
              </p>
            </div>

            <div>
              <h3 className="font-bold text-[#002C66] dark:text-white">
                Working Hours
              </h3>

              <p className="mt-2 text-gray-600 dark:text-gray-300">
                Monday - Saturday
                <br />
                9:00 AM - 6:00 PM
              </p>
            </div>

          </div>

          {/* Google Map */}
          <div className="mt-10 overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-700 shadow-lg">

            <iframe
              title="Spectrum Location"
              src="https://www.google.com/maps?q=Navi%20Mumbai&output=embed"
              width="100%"
              height="320"
              style={{ border: 0 }}
              loading="lazy"
            />

          </div>

        </div>

      </div>

    </div>
  </section>
);
}