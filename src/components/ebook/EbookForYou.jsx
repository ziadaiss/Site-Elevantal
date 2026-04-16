import React from 'react';
import { motion } from 'framer-motion';
const forYouCards = [{
  emoji: "📈",
  title: "Vous recrutez en volume",
  text: "50 à 150 recrutements par an mais vos meilleurs profils acceptent ailleurs pendant que vous délibérez."
}, {
  emoji: "⏱️",
  title: "Vous manquez de temps",
  text: "Entre admin, entretiens et urgences RH, impossible de structurer une vraie expérience candidat."
}, {
  emoji: "😓",
  title: "Vos candidats disparaissent",
  text: "Vous subissez du ghosting ou des désistements sans pouvoir identifier l'étape précise (entretien, test, offre) qui fait fuir vos meilleurs talents."
}, {
  emoji: "📊",
  title: "Vous voulez mesurer vos résultats",
  text: "Vous voulez piloter avec des données concrètes et prouver l'impact de vos actions à votre direction."
}];
const ForYouCard = ({
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
  amount: 0.3
}} transition={{
  duration: 0.5,
  delay: index * 0.1
}} className="p-8 rounded-2xl shadow-lg flex flex-col items-start h-full bg-[#F1F3FD]">
    <div className="text-4xl mb-4">{emoji}</div>
    <h3 className="text-xl font-bold mb-2 text-brand-dark">{title}</h3>
    <p className="text-gray-600 flex-grow">{text}</p>
  </motion.div>;
const EbookForYou = () => {
  return <section className="reveal py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
          <h2 className="text-3xl md:text-5xl font-bold text-brand-dark">Ce tableur est fait pour vous si vous vous reconnaissez 👇</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {forYouCards.map((card, index) => <ForYouCard key={index} {...card} index={index} />)}
        </div>
      </div>
    </section>;
};
export default EbookForYou;