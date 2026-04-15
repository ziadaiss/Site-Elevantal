import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

const FormationObjectives = () => {
  const objectives = [
    "Expliquer les enjeux stratégiques de l'expérience candidat",
    "Analyser son parcours de recrutement actuel",
    "Construire une posture de recruteur mémorable",
    "Expliquer le lien entre expérience candidat et marque employeur",
    "Optimiser sa présence employeur en ligne",
    "Construire une stratégie de contenu RH régulière et crédible"
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-brand-blue-gradient mb-4">Objectifs de la formation</h2>
          <p className="mt-4 text-lg md:text-xl text-gray-600">À l'issue de la formation, vous serez capable de :</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {objectives.map((obj, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: index * 0.1 }}
              className="flex items-start gap-4 p-6 bg-gray-50 rounded-lg"
            >
              <CheckCircle className="w-7 h-7 text-brand-blue flex-shrink-0 mt-1" />
              <span className="text-lg text-gray-700">{obj}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FormationObjectives;