import { motion } from "framer-motion";

export default function Header() {
  return (
    <motion.header
      id="home"
      className="flex flex-col items-center justify-center text-center px-6 min-h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.h2
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-2xl md:text-5xl font-bold mb-6"
      >
        We Build Smart Software Solutions
      </motion.h2>
      <motion.p
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="text-base md:text-lg text-gray-300 max-w-2xl mb-8"
      >
        Empowering businesses with custom software, web applications, and
        management systems.
      </motion.p>

      {/* Call-to-Action Button */}
      <motion.a
        href="#contact"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, duration: 0.5, type: "spring", stiffness: 100 }}
        className="text-base md:text-lg px-8 py-3 bg-blue-600 rounded-lg font-semibold hover:bg-blue-700 transition-all text-white"
      >
        Get Started
      </motion.a>
    </motion.header>
  );
}
