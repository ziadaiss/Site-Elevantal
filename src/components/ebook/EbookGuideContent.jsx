import React from 'react';
import { motion } from 'framer-motion';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
const quickWins = [{
  title: 'Mesurer précisément vos délais de recrutement',
  content: 'Calculez automatiquement vos délais (moyen, médian, min/max) pour identifier immédiatement vos goulots d\'étranglement et accélérer vos processus.'
}, {
  title: 'Détecter les abandons et réduire le ghosting',
  content: 'Visualisez votre taux de rétention à chaque étape pour repérer le moment exact où vos candidats décrochent et corriger le tir.'
}, {
  title: 'Calculer automatiquement votre NPS Candidat',
  content: 'Obtenez votre Net Promoter Score et la répartition exacte de vos candidats (promoteurs, passifs, détracteurs) pour piloter votre image employeur.'
}, {
  title: 'Analyser vos coûts par embauche et votre ROI',
  content: 'Suivez vos coûts réels (moyen, total, extrêmes) et mesurez la rentabilité de vos efforts pour optimiser votre budget recrutement.'
}];
const EbookGuideContent = () => {
  return <section className="py-16 md:py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
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
          <h2 className="text-3xl md:text-5xl font-bold bg-brand-blue-gradient bg-clip-text text-transparent">Ce que vous allez pouvoir calculer avec ce tableur</h2>
        </motion.div>

        <motion.div initial={{
        opacity: 0,
        y: 50
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true,
        amount: 0.3
      }} transition={{
        duration: 0.7
      }}>
          <Accordion type="single" collapsible className="w-full space-y-4">
            {quickWins.map((win, index) => <AccordionItem value={`item-${index}`} key={index} className="bg-[#F0F2FF] rounded-xl border-b-0 shadow-sm transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
                <AccordionTrigger className="text-lg font-semibold px-6 text-left hover:no-underline">
                  {win.title}
                </AccordionTrigger>
                <AccordionContent className="px-6 text-base text-gray-600">
                  {win.content}
                </AccordionContent>
              </AccordionItem>)}
          </Accordion>
        </motion.div>
      </div>
    </section>;
};
export default EbookGuideContent;