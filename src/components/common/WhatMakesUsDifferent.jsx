import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Clock, MessageSquare as MessageSquareQuote } from 'lucide-react';

const features = [
  {
    icon: <ShieldCheck className="w-8 h-8 text-white" />,
    title: "Nous comprenons vos contraintes",
    description: "On sait que vous n'avez ni le temps, ni le budget d'un grand groupe. Nos solutions sont pensées pour des PME qui doivent recruter vite, bien, et sans exploser leur budget.",
  },
  {
    icon: <Clock className="w-8 h-8 text-white" />,
    title: "Nous vous faisons gagner du temps",
    description: "Pas de réunions inutiles. Pas de livrables juste pour faire joli. Nous vous donnons ce qui marche vraiment, prêt à être appliqué.",
  },
  {
    icon: <MessageSquareQuote className="w-8 h-8 text-white" />,
    title: "On parle votre langue",
    description: "Zéro jargon RH. Nous vous expliquons tout en langage clair, comme si nous vous parlions autour d'un café. Vous comprenez ce que nous faisons, pourquoi nous le faisons, et comment le reproduire.",
  },
];

const WhatMakesUsDifferent = () => {
  const cardVariants = {
    offscreen: { y: 50, opacity: 0 },
    onscreen: (i) => ({
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        delay: i * 0.2
      }
    })
  };

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">
            Ce qui nous rend différents 👇
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600 mb-12">
            Notre approche est simple, directe et conçue pour votre réalité.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white p-8 rounded-2xl border border-gray-100 shadow-xl transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl flex flex-col"
              custom={index}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.5 }}
              variants={cardVariants}
            >
              <div className="flex items-center justify-center bg-brand-blue-gradient w-16 h-16 rounded-full mb-6 flex-shrink-0">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-brand-dark mb-3 min-h-[3.5rem]">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatMakesUsDifferent;