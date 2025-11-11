import React from "react";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section
      id="contact"
      className="flex flex-col justify-center items-center min-h-screen px-6 text-center"
    >
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="text-3xl font-semibold mb-8 text-white"
      >
        Contact Us
      </motion.h2>

      <motion.form
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.3 }}
        className="w-full max-w-lg flex flex-col gap-4"
      >
        {/* Name */}
        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-3 rounded-lg bg-white bg-opacity-10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-sky-400 placeholder:text-gray-400"
          style={{
            color: "transparent",
            backgroundImage: "linear-gradient(to right, #000000, #3533cd)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
          }}
        />

        {/* Email */}
        <input
          type="email"
          placeholder="Your Email"
          className="w-full p-3 rounded-lg bg-white bg-opacity-10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-sky-400 placeholder:text-gray-400"
          style={{
            color: "transparent",
            backgroundImage: "linear-gradient(to right, #000000, #3533cd)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
          }}
        />

        {/* Message */}
        <textarea
          placeholder="Your Message"
          rows={5}
          className="w-full p-3 rounded-lg bg-white bg-opacity-10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-sky-400 placeholder:text-gray-400"
          style={{
            color: "transparent",
            backgroundImage: "linear-gradient(to right, #000000, #3533cd)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
          }}
        ></textarea>

        <button
          type="submit"
          className="w-full py-3 bg-sky-500 rounded-lg text-white font-semibold hover:bg-sky-600 transition-all"
        >
          Send Message
        </button>
      </motion.form>
    </section>
  );
}
