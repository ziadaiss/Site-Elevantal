import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const plans = [
  {
    title: "Méthode RHévélation essentielle",
    price: "1 590 €",
    subtitle: "par personne",
    highlighted: false,
    features: [
      "1 journée de formation en présentiel et distanciel",
      "2 séances de coaching post-formation",
      "Pack IA Recruteur (2 agents IA et livre numérique)"
    ]
  },
  {
    title: "Méthode RHévélation Pro",
    price: "1 790 €",
    subtitle: "par personne",
    highlighted: true,
    features: [
      "1 journée de formation en présentiel et distanciel",
      "4 séances de coaching post-formation",
      "Pack IA Recruteur (2 agents IA et livre numérique)",
      "Kit Marque Employeur (2 agents IA, grilles d'audit et modèles)",
      "Consolidation des compétences et réputation (Accès illimités à 6 webinaires privés durant 1 an)"
    ]
  },
  {
    title: "Méthode RHévélation - Personnalisée",
    price: "Sur devis",
    subtitle: "",
    highlighted: false,
    features: [
      "1 journée de formation en présentiel et distanciel",
      "Séances de coaching personnalisées",
      "Pack IA Recruteur (3 agents IA et livre numérique)",
      "Kit Marque Employeur (2 agents IA, grilles d'audit et modèles)",
      "Consolidation des compétences et réputation (Accès illimités à 6 webinaires privés durant 1 an)"
    ]
  }
];

const FormationPricing = ({ handleNotImplemented }) => {
  const calendlyUrl = "https://calendly.com/contact-elevantal/premier-echange";

  const handleButtonClick = () => {
    window.open(calendlyUrl, '_blank');
  };

  return (
    <section className="reveal py-16 sm:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-brand-dark">Tarifs</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Une formation flexible qui s'adapte à votre contexte et à vos objectifs de recrutement.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className={cn(
                "relative flex flex-col rounded-3xl p-8 lg:p-10 shadow-xl border transition-transform duration-300 hover:-translate-y-2",
                plan.highlighted 
                  ? "bg-gray-900 text-white border-indigo-500/30 md:-mt-4 md:mb-4 shadow-indigo-500/20" 
                  : "bg-white text-brand-dark border-gray-100"
              )}
            >
              {plan.highlighted && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <span className="bg-gradient-to-r from-[#6A6DEB] to-[#4FC0EE] text-white text-xs font-bold uppercase tracking-wider py-1 px-3 rounded-full shadow-lg">
                    Recommandé
                  </span>
                </div>
              )}

              <div className="mb-8 flex-grow-0">
                <h3 className={cn(
                  "text-xl font-bold mb-4 min-h-[56px]",
                  plan.highlighted ? "text-white" : "text-brand-dark"
                )}>
                  {plan.title}
                </h3>
                <div className="flex items-baseline gap-2">
                  <span className={cn(
                    "text-4xl font-extrabold",
                    plan.highlighted ? "text-white" : "text-brand-dark"
                  )}>
                    {plan.price}
                  </span>
                  {plan.subtitle && (
                    <span className={cn(
                      "text-sm font-medium",
                      plan.highlighted ? "text-gray-300" : "text-gray-500"
                    )}>
                      {plan.subtitle}
                    </span>
                  )}
                </div>
              </div>

              <div className="flex-grow">
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start">
                      <span className="mr-3 text-lg flex-shrink-0 leading-none">✅</span>
                      <span className={cn(
                        "text-sm leading-tight",
                        plan.highlighted ? "text-gray-300" : "text-gray-600"
                      )}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-auto pt-6">
                <Button 
                  onClick={handleButtonClick} 
                  className={cn(
                    "w-full font-bold text-lg py-6 rounded-xl transition-all duration-300 group",
                    plan.highlighted
                      ? "bg-gradient-to-r from-[#6A6DEB] to-[#4FC0EE] text-white hover:opacity-90"
                      : "bg-brand-dark text-white hover:bg-brand-dark/90"
                  )}
                >
                  Je suis intéressé
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FormationPricing;