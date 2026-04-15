import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const RoiSection = () => {
  const calendlyUrl = "https://calendly.com/contact-elevantal/premier-echange";

  const handleCalendlyRedirect = () => {
    window.open(calendlyUrl, '_blank');
  };

  const imageUrl = "https://horizons-cdn.hostinger.com/9fdb5cd6-7395-42e7-a897-ebea996e876c/7627f494482bc5b503a97ca91289ee91.png";

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-6">Elevantal : plus qu'une agence, votre partenaire pour élever votre expérience candidat</h2>
            <div className="space-y-4 text-lg text-gray-700">
              <p>
                Chaque recrutement compte. Chaque candidat mérite une expérience à la hauteur de votre ambition. C'est pourquoi chez Elevantal, nous ne nous contentons pas de conseils : nous transformons concrètement votre processus de recrutement.
              </p>
              <p>
                Notre promesse ? Réduire vos délais, booster votre taux d'acception, et faire de vos candidats vos meilleurs ambassadeurs. Le tout, avec des résultats mesurables dès les premières semaines.
              </p>
              <p>
                Prenons un exemple concret : Selon l'APEC et l'Harvard Business Review, un processus de recrutement sans stratégie d'expérience candidat coûte en moyenne 26 400€ pour un poste cadre. Avec notre accompagnement, ce coût descend à 10 090€, soit une économie de -16 310€ par recrutement.
              </p>
              <p>
                Vous recrutez 10 cadres par an ? Vous économisez 163 100€. Tout en recrutant plus vite, mieux, et en fidélisant vos talents.
              </p>
            </div>
            <div className="mt-8">
              <Button onClick={handleCalendlyRedirect} className="bg-brand-blue-gradient text-white px-8 py-6 rounded-lg font-semibold text-lg transition-transform transform hover:scale-105">
                Réserver un échange
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mt-10 lg:mt-0"
          >
            <img src={imageUrl} alt="Graphique montrant le retour sur investissement d'une bonne expérience candidat" className="w-full h-auto rounded-xl shadow-2xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default RoiSection;