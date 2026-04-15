import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
const errorCards = [{
  number: 1,
  title: "Vous pensez que la rémunération suffit à convaincre",
  description: <>
        Même un salaire attractif ne compense pas une <strong>mauvaise expérience</strong>.
        Un parcours frustrant fait fuir, malgré les avantages proposés.
      </>
}, {
  number: 2,
  title: "Vos offres d’emploi sont génériques et peu engageantes",
  description: <>
        Elles manquent de <strong>projection pour le candidat</strong>.
        Résultat : elles génèrent peu d’intérêt ou de candidatures pertinentes.
      </>
}, {
  number: 3,
  title: "Vous tardez à répondre ou ghostez certains candidats",
  description: <>
        Un feedback inexistant ou un délai trop long envoie un <strong>mauvais signal</strong>.
        Le respect du temps du candidat est devenu un critère de sélection.
      </>
}, {
  number: 4,
  title: "Vous ne pilotez pas l’expérience candidat",
  description: <>
        Sans indicateurs, vous avancez <strong>à l’aveugle</strong>.
        Une stratégie RH performante repose sur des données concrètes et des ajustements continus.
      </>
}];
const Card = ({
  number,
  title,
  description,
  index
}) => {
  return <motion.div initial={{
    opacity: 0,
    y: 50
  }} whileInView={{
    opacity: 1,
    y: 0
  }} transition={{
    duration: 0.5,
    delay: index * 0.1
  }} viewport={{
    once: true
  }} className="bg-white p-6 rounded-2xl shadow-lg h-full">
      <div className="flex items-center mb-4">
        <div className="flex-shrink-0 w-10 h-10 bg-brand-blue-gradient rounded-full flex items-center justify-center text-white font-bold text-xl">
          {number}
        </div>
      </div>
      <h3 className="text-xl font-bold bg-brand-blue-gradient text-transparent bg-clip-text mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>;
};
const WhyImproveExperience = ({
  handleNotImplemented
}) => {
  const calendlyUrl = "https://calendly.com/contact-elevantal/30min";
  const handleCalendlyRedirect = () => {
    window.open(calendlyUrl, '_blank');
  };
  return <section className="py-16 sm:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.div initial={{
          opacity: 0,
          y: -20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.5
        }} viewport={{
          once: true
        }}>
            <span className="inline-block bg-brand-blue-gradient text-white text-sm font-semibold px-4 py-2 rounded-full mb-4">Accompagnement RHévélation</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-dark tracking-tight">
              Pourquoi améliorer votre<br />
              <span className="bg-brand-blue-gradient text-transparent bg-clip-text">
                expérience candidat ?
              </span>
            </h2>
          </motion.div>
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.5,
          delay: 0.2
        }} viewport={{
          once: true
        }} className="mt-6 max-w-2xl mx-auto text-lg text-gray-600 space-y-4">
            <p>Chaque candidat non-retenu devient soit un détracteur, soit un ambassadeur. L'accompagnement RHévélation vous permettra de transformer la majorité en ambassadeurs. Résultat : une image de marque employeur forte, des candidatures qualifiées naturelles, une rétention meilleure.</p>
            <p>Mais la plupart des entreprises font 4 erreurs majeures qui coûtent cher en candidatures manquées et en mauvaise réputation :

          </p>
          </motion.div>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {errorCards.map((card, index) => <Card key={index} {...card} index={index} />)}
        </div>

        <motion.div initial={{
        opacity: 0,
        y: 50
      }} whileInView={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.7,
        delay: 0.4
      }} viewport={{
        once: true
      }} className="text-center mt-16">
          <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto">
            Nos accompagnements sur l’expérience candidat ciblent ces 4 points critiques,
            mais surtout s’adaptent à <strong>VOTRE</strong> culture d’entreprise pour en faire une force. On en parle ?
          </p>
          <div className="mt-8">
            <Button onClick={handleCalendlyRedirect} className="bg-brand-blue-gradient text-white px-8 py-7 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105">
              Réserver un échange
            </Button>
          </div>
        </motion.div>
      </div>
    </section>;
};
export default WhyImproveExperience;