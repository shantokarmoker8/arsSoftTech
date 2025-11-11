import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import logo from "../assets/photo/logo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "Software Types", href: "#software-types" },
    { name: "FAQ", href: "#faq" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-[#000000] to-[#3533cd] shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        {/* Logo */}
        <a
          href="https://ars-soft-tech.vercel.app/"
          className="flex items-center"
        >
          <img
            src={logo}
            alt="Logo"
            className="w-24 sm:w-28 md:w-32 lg:w-36 h-auto"
          />
        </a>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex space-x-8">
          {links.map((link, index) => (
            <li key={index}>
              <a
                href={link.href}
                className="hover:text-sky-300 transition font-medium"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Hamburger for Tablet & Mobile */}
        <div className="lg:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            {isOpen ? <HiX size={28} /> : <HiMenuAlt3 size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile & Tablet Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-gradient-to-r from-[#000000] to-[#3533cd]"
          >
            <ul className="flex flex-col w-full text-center py-4 space-y-4">
              {links.map((link, index) => (
                <motion.li
                  key={index}
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <a
                    href={link.href}
                    className="block text-white font-medium hover:text-sky-300 transition"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
