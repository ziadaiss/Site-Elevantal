import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
const EbookPromise = () => {
  const points = ["Mesurer précisément vos délais de recrutement", "Détecter les abandons en cours de processus", "Calculer automatiquement votre NPS candidat", "Analyser votre coût par embauche"];
  const imageUrl = "https://horizons-cdn.hostinger.com/9fdb5cd6-7395-42e7-a897-ebea996e876c/7a1727c6cd9ecdbe5de99b98a5907898.png";
  return <section className="reveal py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true,
          amount: 0.3
        }} transition={{
          duration: 0.8
        }} className="lg:col-span-7">
            <h2 className="text-3xl md:text-5xl font-extrabold text-brand-dark leading-tight w-full">Les KPIs essentielles qui analyseront votre expérience candidat.</h2>

            <p className="mt-4 text-lg text-gray-600">Si vous cherchez un outil concret pour passer du "ressenti" à la "data" et visualiser l'efficacité de vos processus, vous êtes au bon endroit. Vous découvrirez :</p>
            
            <ul className="mt-6 space-y-3">
              {points.map((point, index) => <li key={index} className="flex items-start text-lg">
                  <div className="flex-shrink-0 w-7 h-7 bg-blue-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    <Check className="w-5 h-5 text-brand-blue" />
                  </div>
                  <span>{point}</span>
                </li>)}
            </ul>
          </motion.div>

          <motion.div initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true,
          amount: 0.3
        }} transition={{
          duration: 0.8
        }} className="lg:col-span-5 flex justify-center">
            <img src={imageUrl} alt="Aperçu des pages du guide e-book" className="w-full h-auto object-contain" />
          </motion.div>
        </div>
      </div>
    </section>;
};
export default EbookPromise;