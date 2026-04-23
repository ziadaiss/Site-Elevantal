import React from 'react';
import { motion } from 'framer-motion';
const frustrationCards = [{
  emoji: "\u{1F47B}",
  title: "Vos candidats disparaissent sans pr\u00e9venir",
  text: "Vous passez 3 entretiens avec un candidat, plus de nouvelles. Aucun retour, aucune explication. Et vous ne savez m\u00eame pas \u00e0 quel moment vous l\u2019avez perdu."
}, {
  emoji: "\u{1F504}",
  title: "Vous recrutez sans vrai process",
  text: "Chaque recrutement repart de z\u00e9ro. Pas de parcours clair pour le candidat, pas de mails pr\u00e9vus, pas de suivi. Vous improvisez \u00e0 chaque poste."
}, {
  emoji: "\u{1F525}",
  title: "Vous g\u00e9rez le recrutement en mode urgence",
  text: "14 postes ouverts, la direction qui pousse, des candidats \u00e0 relancer. Vous courrez partout mais vous ne construisez rien de durable."
}, {
  emoji: "\u{1F6AA}",
  title: "Les candidats ne vous choisissent pas",
  text: "Z\u00e9ro avis en ligne, un site carri\u00e8re vide, des offres qui ressemblent \u00e0 toutes les autres. Les bons profils comparent et partent chez le concurrent."
}];
const FrustrationCard = ({
  emoji,
  title,
  text,
  index
}) => <motion.div initial={{
  opacity: 0,
  y: 50
}} whileInView={{
  opacity: 1,
  y: 0
}} viewport={{
  once: true,
  amount: 0.5
}} transition={{
  duration: 0.5,
  delay: index * 0.1
}} className="p-8 rounded-2xl shadow-lg flex flex-col items-center sm:items-start h-full bg-[#F1F3FD] text-center sm:text-left">
    <div className="text-4xl mb-4">{emoji}</div>
    <h3 className="text-xl font-bold mb-2 text-brand-dark">{title}</h3>
    <p className="text-gray-600 flex-grow">{text}</p>
  </motion.div>;
const StatisticsSection = () => {
  return <section className="reveal py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true,
        amount: 0.5
      }} transition={{
        duration: 0.6
      }} className="text-3xl md:text-5xl font-bold text-brand-dark text-center mb-12">Votre processus de recrutement laisse les candidats dans le silence&#x1F447;</motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {frustrationCards.map((card, index) => <FrustrationCard key={index} {...card} index={index} />)}
        </div>
      </div>
    </section>;
};
export default StatisticsSection;
