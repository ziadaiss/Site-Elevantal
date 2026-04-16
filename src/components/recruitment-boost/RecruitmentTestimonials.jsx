import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const steps = [
  {
    title: "Étape 1 : Diagnostic Immersion",
    mainText: "Audit complet de votre parcours candidat, analyse de vos KPIs actuels, entretiens avec votre équipe et 5 candidats récents.",
    deliverable: "Livrable : Rapport de diagnostic + session de restitution (2h)"
  },
  {
    title: "Étape 2 : Stratégie Personnalisée",
    mainText: "Définition de vos objectifs SMART, création de vos personas candidats émotionnels, priorisation des Quick Wins adaptés à votre situation.",
    deliverable: "Livrable : Feuille de route stratégique + Personas + Planning d'action"
  },
  {
    title: "Étape 3 : Optimisation du Parcours",
    mainText: "Transformation concrète de chaque étape : sourcing, communication, expérience entretien, délai de réponse, onboarding express.",
    deliverable: "Livrable :  templates prêts à l'emploi + Tableau de bord"
  },
  {
    title: "Étape 4 : Activation Marque Employeur",
    mainText: "Audit de votre marque employeur, stratégie de contenu candidat, Stratégie 3 mois, campagne de réactivation candidats refusés.",
    deliverable: "Livrable : Stratégie 6 mois + 10 posts LinkedIn"
  },
  {
    title: "Étape 5 : Mesure & Pilotage",
    mainText: "Installation du tableau de bord 21 KPIs, formation à l'interprétation, campagne NPS candidat automatisée, rituels de suivi.",
    deliverable: "Livrable : Tableau de bord Excel"
  },
  {
    title: "Étape 6 : Bilan & Pérennisation",
    mainText: "Mesure des résultats vs baseline, session de bilan, plan d'action 6 mois en autonomie.",
    deliverable: "Livrable : Rapport de résultats"
  }
];

const variants = {
  enter: (direction) => ({
    x: direction > 0 ? '100%' : '-100%',
    opacity: 0,
    position: 'absolute',
  }),
  center: {
    x: 0,
    opacity: 1,
    position: 'relative',
  },
  exit: (direction) => ({
    x: direction < 0 ? '100%' : '-100%',
    opacity: 0,
    position: 'absolute',
  })
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset, velocity) => Math.abs(offset) * velocity;

const StepCard = ({ step }) => {
  return (
    <div className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-lg text-brand-dark h-full flex flex-col justify-between border border-white/20">
      <div>
        <h3 className="font-bold text-xl mb-4">{step.title}</h3>
        <p className="text-gray-700 text-base mb-6">{step.mainText}</p>
      </div>
      <p className="text-sm text-gray-500 italic">{step.deliverable}</p>
    </div>
  );
};

const RecruitmentTestimonials = () => {
  const [[page, direction], setPage] = useState([0, 0]);
  const [itemsPerPage, setItemsPerPage] = useState(3);
  const calendlyUrl = "https://calendly.com/contact-elevantal/30min";

  const handleCalendlyRedirect = () => {
    window.open(calendlyUrl, '_blank');
  };

  useEffect(() => {
    const updateItemsPerPage = () => {
      if (window.innerWidth < 768) {
        setItemsPerPage(1);
      } else {
        setItemsPerPage(3);
      }
    };

    updateItemsPerPage();
    window.addEventListener('resize', updateItemsPerPage);
    return () => window.removeEventListener('resize', updateItemsPerPage);
  }, []);

  const pageCount = Math.ceil(steps.length / itemsPerPage);
  const activePage = (page % pageCount + pageCount) % pageCount;

  const paginate = newDirection => {
    setPage([page + newDirection, newDirection]);
  };

  const visibleSteps = steps.slice(activePage * itemsPerPage, (activePage + 1) * itemsPerPage);

  return (
    <section 
      className="reveal py-16 md:py-24 text-white overflow-hidden"
      style={{
        background: 'linear-gradient(to right, #03091f, #0a1642, #152d7f)'
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 text-center md:text-left">
          {/* Increased max-width and added whitespace-nowrap span to fix emoji wrapping */}
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6 md:mb-0 max-w-4xl">
            Les étapes de <span className="whitespace-nowrap">l'accompagnement 🤝</span>
          </h2>
          <div className="flex gap-4">
            <button
              onClick={() => paginate(-1)}
              className="w-14 h-14 rounded-full border border-white/50 text-white flex items-center justify-center hover:bg-white/10 transition-colors"
              aria-label="Étape précédente"
            >
              <ArrowLeft className="w-6 h-6" />
            </button>
            <button
              onClick={() => paginate(1)}
              className="w-14 h-14 rounded-full border border-white/50 text-white flex items-center justify-center hover:bg-white/10 transition-colors"
              aria-label="Étape suivante"
            >
              <ArrowRight className="w-6 h-6" />
            </button>
          </div>
        </div>
        
        <div className="relative min-h-[380px] flex items-start">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={page}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ x: { type: 'spring', stiffness: 300, damping: 30 }, opacity: { duration: 0.2 } }}
              drag={itemsPerPage === 1 ? "x" : false}
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.5}
              onDragEnd={(e, { offset, velocity }) => {
                if (itemsPerPage === 1) {
                  const swipe = swipePower(offset.x, velocity.x);
                  if (swipe < -swipeConfidenceThreshold) {
                    paginate(1);
                  } else if (swipe > swipeConfidenceThreshold) {
                    paginate(-1);
                  }
                }
              }}
              className="w-full grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              {visibleSteps.map((step, index) => (
                <StepCard key={index} step={step} />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="text-center mt-8">
          <Button 
            onClick={handleCalendlyRedirect} 
            size="lg" 
            className="text-white w-full sm:w-auto px-8 py-7 rounded-lg font-bold text-lg shadow-lg transform hover:scale-105 transition-transform duration-300 border-none"
            style={{
              background: 'linear-gradient(to right, #5264e4, #427ede, #3598d9)'
            }}
          >
            Réserver un échange
          </Button>
        </div>
      </div>
    </section>
  );
};

export default RecruitmentTestimonials;