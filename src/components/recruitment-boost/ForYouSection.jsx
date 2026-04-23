import React from 'react';
import { motion } from 'framer-motion';

const forYouCards = [
  {
    emoji: "\uD83C\uDF93",
    title: "Vous g\u00e9rez le recrutement seul\u00b7e et personne ne vous a jamais form\u00e9 \u00e0 l\u2019exp\u00e9rience candidat",
    text: "Vous \u00eates RRH ou DRH en PME, vous avez appris sur le tas. Vous savez que votre parcours candidat a des failles mais vous n\u2019avez jamais eu de m\u00e9thode pour les corriger.",
  },
  {
    emoji: "\uD83E\uDDF0",
    title: "Vous voulez un plan d\u2019action, pas une formation th\u00e9orique de plus",
    text: "Vous n\u2019avez pas besoin d\u2019un \u00e9ni\u00e8me diaporama sur la marque employeur. Vous voulez repartir avec des outils concrets : mails types, grille d\u2019audit, tableau de bord, processus clair.",
  },
  {
    emoji: "\u231B",
    title: "Vous n\u2019avez pas le temps mais vous voulez garder la main",
    text: "14 postes ouverts, des urgences chaque jour. Vous ne voulez pas tout d\u00e9l\u00e9guer, vous voulez \u00eatre guid\u00e9 pour construire un processus de recrutement qui tient sans vous.",
  },
  {
    emoji: "\uD83D\uDCCA",
    title: "Vous voulez pouvoir prouver vos r\u00e9sultats \u00e0 votre direction",
    text: "Quand on vous demande des chiffres, vous improvisez. Vous voulez mesurer vos d\u00e9lais de recrutement, votre taux de r\u00e9ponse candidat et montrer l\u2019impact concret de vos actions.",
  },
];

const ForYouCard = ({ emoji, title, text, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="p-8 rounded-2xl shadow-lg flex flex-col items-start h-full bg-[#F1F3FD]"
  >
    <div className="text-4xl mb-4">{emoji}</div>
    <h3 className="text-xl font-bold mb-2 text-brand-dark">{title}</h3>
    <p className="text-gray-600 flex-grow">{text}</p>
  </motion.div>
);

const ForYouSection = () => {
  return (
    <section className="reveal py-16 md:py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold bg-brand-blue-gradient bg-clip-text text-transparent">
            Cet accompagnement est fait pour vous si…
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-8">
          {forYouCards.map((card, index) => (
            <ForYouCard key={index} {...card} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ForYouSection;