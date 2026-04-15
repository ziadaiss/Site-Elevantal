import React from 'react';
import { motion } from 'framer-motion';
import { Check, Info } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const contentItems = [{
  title: "Formation sur la méthode RHévélation (1 journée en présentiel ou distanciel)",
  description: "La méthode complète pour transformer votre recrutement, de l'audit à la mesure des KPIs.",
  value: "1 500 €",
  highlight: false
}, {
  title: "Outils #1 : Guide Pratique Expérience Candidat",
  description: "Le support complet de la formation avec tous les templates et checklists.",
  value: "250 €",
  highlight: true
}, {
  title: "Outils #2 : Kit Marque Employeur",
  description: "Templates de posts LinkedIn, guide de rédaction d'annonces et stratégie de contenu.",
  value: "950 €",
  highlight: true
}, {
  title: "Outils #3 : Tableau de Bord KPI Recrutement",
  description: "L'outil Excel prêt à l'emploi pour piloter votre performance.",
  value: "150 €",
  highlight: true
}, {
  title: "Support Post-Formation",
  description: "Réponses à vos questions par email or message direct pour l'implémentation.",
  value: "Entre 900 et +2000€",
  highlight: false
}];

const FormationContent = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-brand-dark mb-4">
              La méthode RHévélation n'est pas qu'une formation, c'est un système complet
            </h2>
            <p className="text-xl text-gray-600">
              La valeur réelle de ce que vous obtenez
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-brand-dark text-white">
                    <th className="py-5 px-6 font-bold text-lg">Contenu du programme</th>
                    <th className="py-5 px-6 font-bold text-lg text-right">Valeur réelle</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {contentItems.map((item, index) => (
                    <motion.tr 
                      key={index} 
                      initial={{ opacity: 0, x: -20 }} 
                      whileInView={{ opacity: 1, x: 0 }} 
                      transition={{ delay: index * 0.1 }} 
                      viewport={{ once: true }} 
                      className="hover:bg-blue-50/30 transition-colors group"
                    >
                      <td className="py-5 px-6">
                        <div className="flex items-start gap-3">
                          <div className={`mt-1 flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center ${item.highlight ? 'bg-amber-100 text-amber-600' : 'bg-green-100 text-green-600'}`}>
                            <Check className="w-3 h-3 stroke-[3]" />
                          </div>
                          <div>
                            <div className="flex items-center gap-2">
                              <span className={`font-bold ${item.highlight ? 'text-brand-blue' : 'text-brand-dark'}`}>
                                {item.title}
                              </span>
                              <TooltipProvider>
                                <Tooltip>
                                  <TooltipTrigger asChild>
                                    <button className="text-gray-400 hover:text-brand-blue transition-colors">
                                      <Info className="w-4 h-4" />
                                    </button>
                                  </TooltipTrigger>
                                  <TooltipContent className="max-w-xs bg-brand-dark text-white border-none">
                                    <p>{item.description}</p>
                                  </TooltipContent>
                                </Tooltip>
                              </TooltipProvider>
                            </div>
                            {item.highlight && (
                              <span className="inline-block mt-1 px-2 py-0.5 bg-amber-100 text-amber-700 text-[10px] font-bold uppercase tracking-wider rounded">
                                Inclus dans l'offre
                              </span>
                            )}
                          </div>
                        </div>
                      </td>
                      <td className="py-5 px-6 text-right">
                        <span className={`font-mono font-bold text-lg ${item.highlight ? 'text-brand-blue' : 'text-gray-500'}`}>
                          {item.value}
                        </span>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
                <tfoot>
                  <tr className="bg-gray-50">
                    <td className="py-6 px-6">
                      <span className="text-xl font-extrabold text-brand-dark italic uppercase tracking-tight">Valeur totale du système</span>
                    </td>
                    <td className="py-6 px-6 text-right">
                      <div className="relative inline-block">
                        <span className="text-2xl font-black text-brand-blue font-mono whitespace-nowrap">À partir de 3 750€</span>
                        <div className="absolute -bottom-1 left-0 w-full h-1 bg-brand-blue/30 rounded-full"></div>
                      </div>
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-gray-500 italic text-sm">
              * Tarifs donnés à titre indicatif pour la valeur du contenu. Consultez la section tarifs pour nos offres packagées.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FormationContent;