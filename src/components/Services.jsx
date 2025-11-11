import React from "react";
import { motion } from "framer-motion";
import { FaLaptopCode, FaMobileAlt, FaGlobe } from "react-icons/fa";

export default function Services() {
  const services = [
    {
      icon: <FaLaptopCode size={40} />,
      title: "Custom Software",
      description:
        "Tailor-made software solutions to optimize your operations.",
    },
    {
      icon: <FaMobileAlt size={40} />,
      title: "Mobile App Development",
      description:
        "Android and iOS apps with sleek UI/UX for maximum engagement.",
    },
    {
      icon: <FaGlobe size={40} />,
      title: "Web Application Development",
      description:
        "Modern, scalable, and responsive web apps tailored for your business.",
    },
  ];

  return (
    <section
      id="services"
      className="flex flex-col justify-center items-center min-h-screen px-6 text-center"
    >
      {/* Section Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="text-3xl font-semibold mb-12 text-white"
      >
        Our Services
      </motion.h2>

      {/* Services Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 w-full max-w-6xl">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2, duration: 0.8 }}
            whileHover={{ scale: 1.05 }}
            className="p-8 rounded-2xl shadow-lg bg-sky-500/10 hover:bg-sky-500/20 transition-all duration-300"
          >
            <div className="flex justify-center mb-4 text-white">
              {service.icon}
            </div>
            <h3 className="text-xl font-semibold mb-2 text-white">
              {service.title}
            </h3>
            <p className="text-gray-200">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
