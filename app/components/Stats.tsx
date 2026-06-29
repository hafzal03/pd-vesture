"use client";

import { motion } from "framer-motion";

const stats = [
  { number: "25K+", label: "Happy Customers" },
  { number: "120+", label: "Luxury Products" },
  { number: "18", label: "Countries Served" },
  { number: "99%", label: "Customer Satisfaction" },
];

export default function Stats() {
  return (
    <section className="bg-[#0B0B0B] py-16 md:py-20">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-10 px-6 text-center md:grid-cols-4">
        {stats.map((item) => (
          <motion.div
            key={item.label}
            whileInView={{ opacity: [0, 1], y: [40, 0] }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-light text-[#C9A14A]">
              {item.number}
            </h2>

            <p className="mt-3 uppercase tracking-[0.25em] text-gray-400 text-sm">
              {item.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}