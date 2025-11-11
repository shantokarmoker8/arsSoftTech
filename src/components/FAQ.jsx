import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What types of software do you develop?",
      answer:
        "We create web, mobile, and desktop applications — from school management to business automation tools.",
    },
    {
      question: "Do you provide custom software solutions?",
      answer:
        "Yes, we develop tailor-made software based on your business needs and workflow requirements.",
    },
    {
      question: "How long does it take to develop a project?",
      answer:
        "It depends on the project complexity — small apps may take a few weeks, while large systems may take months.",
    },
    {
      question: "Do you offer maintenance and support?",
      answer:
        "Absolutely! We provide long-term maintenance, updates, and technical support for all our software.",
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
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
        Frequently Asked Questions
      </motion.h2>

      {/* FAQ Container */}
      <div className="w-full max-w-3xl space-y-4">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            className="bg-sky-500/10 hover:bg-sky-500/20 rounded-xl p-5 text-left cursor-pointer transition-all duration-300"
            onClick={() => toggleFAQ(index)}
          >
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold text-white">
                {faq.question}
              </h3>
              <FaChevronDown
                className={`text-white transition-transform duration-300 ${
                  activeIndex === index ? "rotate-180" : ""
                }`}
              />
            </div>

            <AnimatePresence>
              {activeIndex === index && (
                <motion.p
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.4 }}
                  className="text-gray-200 mt-3"
                >
                  {faq.answer}
                </motion.p>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
