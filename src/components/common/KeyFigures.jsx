import React from 'react';
import { motion } from 'framer-motion';

const stats = [
  { value: "+2", label: "Start-ups accompagnées" },
  { value: "+1 300", label: "Abonnés LinkedIn engagés" },
  { value: "5/5 ⭐", label: "Avis clients vérifiés" },
];

const KeyFigures = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="bg-brand-blue-gradient rounded-2xl shadow-2xl"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 text-white">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`p-8 text-center ${index < stats.length - 1 ? 'md:border-r md:border-white/20' : ''} ${index > 0 ? 'border-t border-white/20 md:border-t-0' : ''}`}
              >
                <p className="text-4xl md:text-5xl font-bold mb-2">{stat.value}</p>
                <p className="text-base text-blue-100/90">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default KeyFigures;