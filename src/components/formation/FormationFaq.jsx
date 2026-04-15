import React from 'react';
import { motion } from 'framer-motion';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
const FormationFaq = () => {
  const faqs = [{
    question: "À qui s’adresse cette formation ?",
    answer: "La formation RHévélation s’adresse aux professionnels des ressources humaines – recruteurs, responsables RH, managers ou chargés de recrutement – souhaitant structurer leur parcours candidat, gagner en impact et renforcer leur marque employeur de manière concrète."
  }, {
    question: "En quoi cette formation est-elle différente des autres formations RH ?",
    answer: "Contrairement aux approches généralistes, RHévélation est une formation pratico-pratique construite à partir du terrain : des ateliers immersifs en petit groupe, des outils immédiatement actionnables (modèles, grilles, scripts), un accompagnement individuel sur 6 semaines pour ancrer les apprentissages. Elle a été conçue par un recruteur, pour des recruteurs."
  }, {
    question: "Quel est le format de la formation ?",
    answer: "La formation se déroule en deux temps : Une journée d’atelier collectif (en présentiel ou à distance), suivie d’un accompagnement individuel d’une durée de 6 semaines, à raison d’un échange par semaine."
  }, {
    question: "Puis-je suivre la formation à distance ?",
    answer: "Absolument. RHévélation est disponible en visio-conférence, sans perte de qualité pédagogique. L'accompagnement individuel est lui aussi entièrement à distance."
  }, {
    question: "Est-ce une formation théorique ?",
    answer: "Non. Chaque notion est immédiatement appliquée à votre contexte via des exercices, des mises en situation, et des outils personnalisés. L’objectif est que vous repartiez avec des livrables concrets, exploitables dès le lendemain."
  }, {
    question: "Quel est le tarif de la formation ?",
    answer: "La formation est proposée au tarif de 2 500 € HT par participant, incluant : 7 heures de formation collective, 6 semaines de suivi individuel, Tous les outils et supports pédagogiques. Un tarif dégressif est proposé pour les formations en intra-entreprise (plusieurs collaborateurs d’une même société)."
  }, {
    question: "Je manque de temps. Est-ce que cela vaut le coup ?",
    answer: "C’est précisément pour cela que cette formation a été pensée. RHévélation vous permet de gagner un temps considérable à long terme en structurant vos process, en vous fournissant des modèles personnalisés, et en évitant les pertes de candidats. Le suivi individuel s’adapte à votre emploi du temps."
  }, {
    question: "Et si je ne suis pas satisfait(e) ?",
    answer: "Un point d’étape est prévu à mi-parcours pour recueillir vos retours, ajuster les contenus si nécessaire, et garantir que l’accompagnement réponde pleinement à vos attentes. La satisfaction de nos clients est notre priorité. Ainsi, après les 6 semaines de suivi, vous aurez accès à un lien pour convenir d'autres rendez-vous afin de répondre à toutes vos questions."
  }];
  return <section id="faq-formation" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gray-100">
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
          <h2 className="text-3xl md:text-5xl font-bold text-brand-dark mb-4">FAQ</h2>
          <p className="text-lg md:text-xl text-gray-600">Trouvez les réponses aux questions les plus fréquentes concernant la formation RHévélation.</p>
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
export default FormationFaq;