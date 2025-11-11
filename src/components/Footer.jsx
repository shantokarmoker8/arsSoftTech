import React from "react";
import { motion } from "framer-motion";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className="bg-black text-white py-12"
    >
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* 1. Company Info */}
        <div className="space-y-4">
          <h1 className="text-2xl font-bold">ARS Soft Tech</h1>
          <p className="text-gray-400">
            We create innovative software solutions for businesses. From web
            apps to mobile applications, we deliver quality products.
          </p>
          <div className="flex gap-4 text-lg">
            <a href="#" className="hover:text-sky-500 transition">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-sky-500 transition">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-sky-500 transition">
              <FaLinkedinIn />
            </a>
            <a href="#" className="hover:text-sky-500 transition">
              <FaGithub />
            </a>
          </div>
        </div>

        {/* 2. Quick Links */}
        <div className="space-y-2">
          <h2 className="text-xl font-semibold mb-2">Quick Links</h2>
          <ul className="space-y-1 text-gray-400">
            <li>
              <a href="#home" className="hover:text-sky-500 transition">
                Home
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-sky-500 transition">
                Services
              </a>
            </li>
            <li>
              <a
                href="#software-types"
                className="hover:text-sky-500 transition"
              >
                Software Types
              </a>
            </li>
            <li>
              <a href="#faq" className="hover:text-sky-500 transition">
                FAQ
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-sky-500 transition">
                About
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-sky-500 transition">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* 3. Contact Info */}
        <div className="space-y-2 text-gray-400">
          <h2 className="text-xl font-semibold mb-2">Contact Info</h2>
          <p>
            Email:{" "}
            <a
              href="mailto:info@arssofttech.com"
              className="hover:text-sky-500 transition"
            >
              info@arssofttech.com
            </a>
          </p>
          <p>
            Phone:{" "}
            <a
              href="tel:+880123456789"
              className="hover:text-sky-500 transition"
            >
              +880 1234 567 89
            </a>
          </p>
          <p>Address: 123, Tech Street, Dhaka, Bangladesh</p>
        </div>
      </div>

      {/* Bottom copyright */}
      <div className="mt-10 border-t border-gray-700 pt-6 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} ARS Soft Tech. All rights reserved.
      </div>
    </motion.footer>
  );
}
