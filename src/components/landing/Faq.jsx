import React from 'react';
import { motion } from 'framer-motion';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
const Faq = () => {
  const faqs = [{
    question: "Quelle est la différence entre la formation et l'accompagnement REC ?",
    answer: "La formation est structurée pour transmettre des méthodes concrètes et reproductibles sur l'expérience candidat et la marque employeur.\nL’accompagnement REC va plus loin : nous passons à l’action ensemble, avec un suivi personnalisé et une mise en œuvre directe dans votre entreprise."
  }, {
    question: "Quelle est la taille maximale des groupes de la formation ?",
    answer: "Pour garantir la qualité des échanges, les sessions sont limitées à 10 participants maximum. Cela permet un suivi individualisé et des retours pertinents adaptés à votre contexte."
  }, {
    question: "Est-ce vraiment un bon investissement ?",
    answer: "Absolument. L’expérience candidat est un levier stratégique pour réduire vos coûts de recrutement, fidéliser les talents et améliorer votre image employeur.\nUne seule amélioration bien ciblée peut déjà faire la différence sur vos futurs recrutements."
  }, {
    question: "Est-ce accessible aux personnes en situation de handicap ?",
    answer: "Tout à fait. Nous adaptons nos modalités pédagogiques en fonction des besoins spécifiques : visuels, auditifs, moteurs ou cognitifs. Mentionnez-le lors de la prise de contact."
  }];
  return <section id="faq" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
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
          <h2 className="text-3xl md:text-5xl font-bold text-brand-dark mb-4">Des questions ?</h2>
          <p className="text-lg md:text-xl text-gray-600">Trouvez les réponses aux questions les plus fréquentes.</p>
        </motion.div>
        
        <motion.div initial={{
        opacity: 0,
        y: 50
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true,
        amount: 0.2
      }} transition={{
        duration: 0.6
      }}>
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => <AccordionItem key={index} value={`item-${index}`} className="bg-brand-blue-gradient border-none rounded-lg shadow-sm px-6 text-white">
                <AccordionTrigger className="text-lg font-semibold text-left hover:no-underline">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-base text-gray-200 pt-2 whitespace-pre-line">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>)}
          </Accordion>
        </motion.div>
      </div>
    </section>;
};
export default Faq;