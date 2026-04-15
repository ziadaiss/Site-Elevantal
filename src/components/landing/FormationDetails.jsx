import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const FormationDetails = ({ handleNotImplemented }) => {
  const objectives = [
    "Expliquer les enjeux stratégiques de l’expérience candidat",
    "Mettre en perspective son parcours de recrutement actuel",
    "Mettre en place un plan d’action d’amélioration ou de création d’une expérience candidat fluide et différenciante",
    "Construire une posture de recruteur mémorable",
    "Optimiser sa présence employeur en ligne et gagner en e-reputation",
    "Construire une stratégie de contenu RH régulière et crédible pour renforcer et valoriser sa marque employeur sur la durée."
  ];

  return (
    <section id="formation" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ once: true }} 
            transition={{ duration: 0.8 }}
            className="relative">
             <div className="relative z-10 p-2 bg-white/10 rounded-2xl backdrop-blur-sm">
                <img  className="rounded-xl shadow-2xl w-full h-auto" alt="Professionnel en discussion pendant une formation" src="https://images.unsplash.com/photo-1600870187251-b55f9c574638" />
            </div>
            <div className="absolute -bottom-4 -left-4 w-full h-full bg-brand-light-blue/20 rounded-2xl -z-10 transform rotate-3"></div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ once: true }} 
            transition={{ duration: 0.8 }} 
            className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Objectifs de la formation
            </h2>
            
            <p className="text-xl text-blue-200">
              À l'issue de la formation, vous devez être capable de :
            </p>

            <div className="space-y-4">
              {objectives.map((item, index) => (
                <motion.div 
                  key={index} 
                  initial={{ opacity: 0, x: 20 }} 
                  whileInView={{ opacity: 1, x: 0 }} 
                  viewport={{ once: true }} 
                  transition={{ delay: index * 0.1 }} 
                  className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-brand-light-blue flex-shrink-0 mt-1" />
                  <span className="text-blue-100 text-lg">{item}</span>
                </motion.div>
              ))}
            </div>

            <Button onClick={handleNotImplemented} className="bg-brand-light-blue hover:bg-blue-500 text-white px-8 py-6 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-brand-light-blue/20">
              Découvrir le programme
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FormationDetails;