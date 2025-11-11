import { motion } from "framer-motion";
import {
  FaSchool,
  FaStore,
  FaHospital,
  FaUniversity,
  FaBuilding,
  FaChartLine,
} from "react-icons/fa";

export default function SoftwareTypes() {
  const softwareList = [
    { icon: <FaSchool size={40} />, title: "School Management Software" },
    { icon: <FaStore size={40} />, title: "POS & Inventory System" },
    { icon: <FaHospital size={40} />, title: "Hospital Management Software" },
    { icon: <FaUniversity size={40} />, title: "University ERP System" },
    { icon: <FaBuilding size={40} />, title: "Company HR & Payroll System" },
    { icon: <FaChartLine size={40} />, title: "Business Analytics Dashboard" },
  ];

  return (
    <section
      id="software-types"
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
        Types of Software We Build
      </motion.h2>

      {/* Software Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 w-full max-w-6xl">
        {softwareList.map((item, index) => (
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
              {item.icon}
            </div>
            <h3 className="text-xl font-semibold text-white">{item.title}</h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
