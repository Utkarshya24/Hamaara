"use client"
import React, { useState } from "react";
import { MdEmail } from "react-icons/md";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

interface FormData {
    name: string;
    email: string;
    company: string;
    message: string;
}

const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev: FormData) => ({
        ...prev,
        [name]: value,
    }));
};

const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
    // Handle form submission logic (e.g., API call)
};

  return (
    <section className="min-h-screen bg-white px-6 md:px-16 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Side */}
        <div>
          <div className="mb-4">
            <div className="bg-blue-100 w-10 h-10 flex items-center justify-center rounded-lg mb-4">
            <MdEmail />
            </div>
            <h2 className="text-[57px] font-inter font-bold  mb-3">Contact us</h2>
            <p className="text-[19px] font-inter font-normal mb-6">
              We are always looking for ways to improve our products and services.
              Contact us and let us know how we can help you.
            </p>
            <div className="text-[16px] text-gray-600 flex gap-4 font-inter font-normal space-y-1">
              <p>contact@yoursaas.ai</p>
              <p>+1 (800) 123 XX21</p>
              <p>support@yoursaas.ai</p>
            </div>
          </div>
          {/* Map Image */}
          <div className="mt-8">
            <img src="/assets/map.svg" alt="Map" className="w-full max-w-md" />
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="bg-gray-100 font-inter font-normal text-[17px] rounded-xl p-6 md:p-8 shadow">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block mb-1 text-sm text-gray-700">Full name</label>
              <input
                placeholder="John Doe"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full border bg-white border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label className="block mb-1 text-sm text-gray-700">Email Address</label>
              <input
                placeholder="john@gmail.com"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border bg-white border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label className="block mb-1 text-sm text-gray-700">Company</label>
              <input
                placeholder="Type your company name here..."
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="w-full border bg-white border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block mb-1 text-sm text-gray-700">Message</label>
              <textarea
                placeholder="Type your message here..."
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full border bg-white border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800 transition"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
