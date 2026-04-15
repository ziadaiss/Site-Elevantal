import React from 'react';
import { motion } from 'framer-motion';
const stats = [{
  number: '77%',
  text: 'des candidats déclarent n’avoir reçu aucune réponse après avoir postulé à une offre d’emploi, ce qui favorise le ghosting candidats.'
}, {
  number: '55%',
  text: 'des candidats reconnaissent avoir déjà “ghosté” un recruteur en raison d’un manque de clarté dans le processus (processus trop flous, étapes mal expliquées, etc.).'
}, {
  number: '30 000€',
  text: 'Un recrutement long peut coûter jusqu’à 10 000 € en moyenne, sans compter les risques financiers liés à une erreur de casting, pouvant atteindre à minima 30 000 €.'
}];
const Frustrations = () => {
  return <section id="frustrations" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{
        opacity: 0,
        y: 30
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true,
        amount: 0.5
      }} className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-brand-dark">Le coût réel de ce silence ?</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {stats.map((stat, index) => <motion.div key={index} initial={{
          opacity: 0,
          y: 50
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true,
          amount: 0.3
        }} transition={{
          duration: 0.5,
          delay: index * 0.15
        }} className="bg-white p-8 rounded-2xl shadow-lg h-full flex flex-col items-center justify-start border border-gray-100 text-center">
              <p className="text-5xl md:text-6xl font-extrabold bg-brand-blue-gradient bg-clip-text text-transparent mb-4">
                {stat.number}
              </p>
              <p className="text-brand-dark text-base">{stat.text}</p>
            </motion.div>)}
        </div>
      </div>
    </section>;
};
export default Frustrations;