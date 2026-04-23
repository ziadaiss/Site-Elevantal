import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
const FormationCoreSkills = () => {
  const objectives = ["Expliquer les enjeux stratégiques de l'expérience candidat", "Mettre en perspective son parcours de recrutement actuel", "Mettre en place un plan d'action d'amélioration ou de création d'une expérience candidat fluide et différenciante", "Construire une posture de recruteur mémorable", "Expliquer le lien entre expérience candidat et marque employeur pour favoriser une image cohérente et attractive", "Optimiser sa présence employeur en ligne et gagner en e-réputation", "Construire une stratégie de contenu RH régulière et crédible pour renforcer et valoriser sa marque employeur sur la durée"];
  return <section id="programme" className="reveal py-20 md:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-1.5 rounded-full bg-blue-100 text-blue-700 font-semibold text-sm mb-6">
            La Méthode RHévélation
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6 uppercase tracking-tight">DANS NOTRE FORMATION RHÉVÉLATION
        </h2>
          <p className="text-lg md:text-xl text-gray-500 font-medium">Nous vous donnerons les clés en main pour :</p>
        </div>

        {/* Objectives Card */}
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.6
      }} className="max-w-4xl mx-auto rounded-3xl shadow-2xl overflow-hidden bg-gray-900 border border-indigo-500/20">
          <div className="px-8 py-10 md:px-12 md:py-14">
            <ul className="grid grid-cols-1 gap-5 md:gap-6">
              {objectives.map((objective, index) => <motion.li key={index} initial={{
              opacity: 0,
              y: 20
            }} whileInView={{
              opacity: 1,
              y: 0
            }} viewport={{
              once: true
            }} transition={{
              duration: 0.4,
              delay: index * 0.1
            }} className="flex items-start text-white text-lg md:text-xl font-medium leading-relaxed">
                  <span className="flex-shrink-0 flex items-center justify-center rounded-full mr-4 mt-1" style={{
                width: '26px',
                height: '26px',
                background: 'linear-gradient(135deg, #5264e4 0%, #427ede 50%, #3598d9 100%)'
              }}>
                    <Check className="w-4 h-4 text-white" strokeWidth={3} />
                  </span>
                  <span>{objective}</span>
                </motion.li>)}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>;
};
export default FormationCoreSkills;