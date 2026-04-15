import React from 'react';
import { motion } from 'framer-motion';
const frustrationCards = [{
  emoji: '😤',
  title: 'Candidats qui disparaissent',
  text: 'Vos talents ne répondent plus du jour au lendemain ? C’est peut-être votre expérience candidat qui les fait fuir.'
}, {
  emoji: '🌀',
  title: 'Process trop flous',
  text: "Trop d'étapes, pas assez de clarté : vos recrutements manquent d'engagement ? On vous aide à tout fluidifier."
}, {
  emoji: '🕒',
  title: 'Perte de temps à répéter',
  text: 'Relances, répétitions, mails... Vous refaites sans cesse la même chose ? Standardisez sans déshumaniser.'
}, {
  emoji: '🙄',
  title: 'Image RH peu engageante',
  text: 'Si vos messages LinkedIn ou entretiens ne laissent pas de traces, c’est le moment d’activer votre marque employeur.'
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
  return <section className="py-16 md:py-24 bg-gray-50">
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
      }} className="text-3xl md:text-5xl font-bold text-brand-dark text-center mb-12">Votre processus de recrutement laisse les candidats dans le silence👇</motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {frustrationCards.map((card, index) => <FrustrationCard key={index} {...card} index={index} />)}
        </div>
      </div>
    </section>;
};
export default StatisticsSection;