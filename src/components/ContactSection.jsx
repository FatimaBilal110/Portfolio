"use client";
import React, { useState } from 'react';

const ContactSection = () => {
  const [success, setSuccess] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "24801916-8af4-4309-9465-aba3eef00f1d");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
      setSuccess(true);
      event.target.reset();
      setTimeout(() => setSuccess(false), 3000);
    }
  };

  return (
    <section id= "contact" className="flex justify-center items-center rounded-2xl min-h-screen bg-gray-600 p-6">
      <form
        className="bg-white/30 rounded-2xl shadow-lg p-8 w-full max-w-md space-y-6"
        onSubmit={onSubmit}
      >
        <h2 className="text-2xl font-bold text-center text-gray-800">Contact Form</h2>

        {success && (
          <div className="bg-green-500 text-white p-3 rounded-md text-center font-medium">
            Message sent successfully!
          </div>
        )}

        <div className="flex flex-col">
          <label htmlFor="name" className="mb-1 text-sm font-medium text-gray-700">
            Full Name
          </label>
          <input
            id="name"
            type="text"
            className="field px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter Your Name"
            name="name"
            required
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="email" className="mb-1 text-sm font-medium text-gray-700">
            Email Address
          </label>
          <input
            id="email"
            type="email"
            className="field px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter Your Email"
            name="email"
            required
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="message" className="mb-1 text-sm font-medium text-gray-700">
            Your Message
          </label>
          <textarea
            id="message"
            className="field message px-4 py-2 h-32 rounded-md border border-gray-300 resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter Your Message"
            name="message"
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition"
        >
          SUBMIT
        </button>
      </form>
    </section>
  );
};

export default ContactSection;
