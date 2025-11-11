import { motion } from "framer-motion";
import aboutImg from "../assets/photo/about.png"; // নিজের ইমেজ path এখানে ব্যবহার করো

export default function About() {
  return (
    <section
      id="about"
      className="flex flex-col lg:flex-row justify-center items-center min-h-screen px-6 text-center lg:text-left gap-10"
    >
      {/* Left Side - Text */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="flex-1 space-y-6 bg-sky-500/10 hover:bg-sky-500/20 rounded-2xl p-8"
      >
        <h2 className="text-3xl font-semibold text-white mb-4">About Us</h2>
        <p className="text-gray-200 leading-relaxed">
          At <span className="text-sky-400 font-semibold">Ars Soft Tech</span>,
          we specialize in building modern, reliable, and scalable software
          solutions for businesses of all sizes. From school management systems
          to enterprise-grade applications, we focus on performance, design, and
          long-term usability.
        </p>
        <p className="text-gray-200 leading-relaxed">
          Our team of passionate developers and designers works with the latest
          technologies to deliver high-quality results — ensuring our clients
          stay ahead in the digital world.
        </p>
        <motion.button
          whileHover={{ scale: 1.1 }}
          className="bg-sky-500 text-white px-6 py-2 rounded-full font-medium mt-4 hover:bg-sky-600 transition"
        >
          Learn More
        </motion.button>
      </motion.div>

      {/* Right Side - Image */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="flex-1 flex justify-center"
      >
        <img
          src={aboutImg}
          alt="About Us"
          className="rounded-2xl shadow-lg w-full max-w-md"
        />
      </motion.div>
    </section>
  );
}
