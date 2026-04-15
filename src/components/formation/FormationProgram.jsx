import React from 'react';
import { motion } from 'framer-motion';
import { Check, Gift } from 'lucide-react';

const FormationProgram = () => {
  const programModules = [
    "Les fondamentaux de l'expérience candidat",
    "Cartographier son parcours candidat actuel",
    "Les bases d'une expérience mémorable et différenciante",
    "Réécrire sa communication candidats et son offre d'emploi",
    "Liens entre expérience candidat et marque employeur",
    "Construire un plan de contenu RH réaliste et régulier",
    "Raconter l'expérience candidat de l'intérieur",
    "Focus site carrière : diagnostiquer son site"
  ];

  return (
    <section id="programme-formation" className="py-16 md:py-24 bg-brand-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-brand-blue-gradient">Programme de la formation RHévélation</h2>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-stretch max-w-4xl mx-auto">
          {programModules.map((moduleTitle, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              className="p-6 md:p-8 rounded-lg shadow-lg border border-gray-100 flex flex-col h-full bg-brand-blue-gradient"
            >
              <div className="flex items-start space-x-3">
                <Check className="w-6 h-6 text-white flex-shrink-0 mt-1" />
                <h3 className="text-xl font-bold text-white uppercase">{moduleTitle}</h3>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 md:mt-16 bg-brand-blue-gradient text-white p-8 rounded-lg shadow-xl max-w-4xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-bold text-center flex items-center justify-center gap-3"><Gift className="w-8 h-8" /> Bonus : Le kit RHévélation et Starter de la Marque Employeur Engageante</h3>
        </div>
      </div>
    </section>
  );
};

export default FormationProgram;