import React from 'react';
import { motion } from 'framer-motion';

const forYouCards = [
  {
    emoji: '🧠',
    title: 'Vous souhaitez comprendre, pas simplement exécuter',
    text: 'Vous ne recherchez pas un prestataire qui enchaîne des livrables sans explication. Vous souhaitez comprendre les enjeux RH, la logique de chaque action, et avancer avec clarté. Nous travaillons en transparence, avec pédagogie et sens.',
  },
  {
    emoji: '🔎',
    title: 'Vous avez besoin d’un cadre clair et structurant',
    text: 'Vous avez besoin d’un plan d’action pragmatique, avec des priorités concrètes. Nous vous fournissons une méthode précise, adaptée à vos ressources, à votre culture, et à vos objectifs.',
  },
  {
    emoji: '⏳',
    title: 'Vous manquez de temps mais avoir un œil sur le process',
    text: 'Vous ne voulez pas tout déléguer sans maîtrise. Vous souhaitez être guidé, tout en restant acteur de l’expérience candidat dans votre entreprise. Notre accompagnement vous permet de rester aligné tout au long du processus.',
  },
  {
    emoji: '🎯',
    title: 'Vous attendez des résultats, pas des promesses vagues',
    text: 'Vous avez déjà vu passer trop d’approches génériques ou de concepts creux. Ici, chaque recommandation est pensée pour vos propres enjeux. Notre promesse : un accompagnement honnête, orienté résultats, et opérationnel dès le premier mois.',
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
    <section className="py-16 md:py-24 bg-white">
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