import React, { useState } from "react";
import { FaWhatsapp, FaFacebook } from "react-icons/fa";
import { motion } from "framer-motion";
import LandingPageContact from "../components/LandingPageContact";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState(""); // For form submission status

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setStatus("Thank you for reaching out! We'll get back to you shortly.");
    setFormData({ name: "", email: "", message: "" }); // Reset form after submission
  };

  return (
    <div cassName="">
      <div className="min-h-screen bg-gradient-to-r from-secondary to-primary flex flex-col items-center py-8 px-4">
        <motion.div
          className="max-w-2xl mx-auto p-6 bg-gradient-to-r from-teal-600 to-teal-400 text-white rounded-lg shadow-lg"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center">
            <motion.h1
              className="text-3xl font-semibold mb-4"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Contact Us
            </motion.h1>
            <motion.p
              className="text-lg mb-8"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              We'd love to hear from you! Please fill out the form below, and
              we'll get in touch with you shortly.
            </motion.p>
          </div>

          <form onSubmit={handleSubmit}>
            {["name", "email", "message"].map((field, index) => (
              <motion.div
                key={field}
                className="mb-4"
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              >
                <label
                  htmlFor={field}
                  className="block text-lg font-medium mb-2"
                >
                  {field === "message"
                    ? "Your Message"
                    : field.charAt(0).toUpperCase() + field.slice(1)}
                </label>
                {field === "message" ? (
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="4"
                    className="w-full px-4 py-2 text-gray-800 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500"
                  ></textarea>
                ) : (
                  <input
                    type={field === "email" ? "email" : "text"}
                    id={field}
                    name={field}
                    value={formData[field]}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 text-gray-800 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500"
                  />
                )}
              </motion.div>
            ))}

            <motion.button
              type="submit"
              className="btn w-full py-3 bg-info hover:bg-teal-600 text-white font-semibold rounded-lg shadow-md transition duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Send Message
            </motion.button>
          </form>

          {status && (
            <motion.div
              className="mt-6 text-center text-lg font-semibold text-green-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              {status}
            </motion.div>
          )}

          <div className="mt-8 text-center">
            <motion.h2
              className="text-xl font-semibold mb-4"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              Quick Reach Out
            </motion.h2>
            <div className="mt-4 flex space-x-2 text-center justify-center">
              <motion.a
                href="https://wa.me/2349163381375"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-md bg-green-500 text-white hover:bg-green-600 transform transition-all duration-300 ease-in-out hover:scale-105 flex items-center space-x-1 px-4 py-2 rounded-lg"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaWhatsapp className="text-white" />
                <span>WhatsApp</span>
              </motion.a>
              <motion.a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-md bg-blue-500 text-white hover:bg-blue-600 transform transition-all duration-300 ease-in-out hover:scale-105 flex items-center space-x-1 px-4 py-2 rounded-lg"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaFacebook className="text-white" />
                <span>Facebook</span>
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
      <div>
        <LandingPageContact />
      </div>
    </div>
  );
};

export default ContactUs;
