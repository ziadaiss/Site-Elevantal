import React from 'react';
import { motion } from 'framer-motion';
import { Users, Linkedin } from 'lucide-react';

const EbookAuthor = () => {
  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="bg-brand-blue-gradient rounded-2xl p-8 md:p-12 shadow-2xl"
        >
          <div className="grid md:grid-cols-12 gap-8 md:gap-12 items-center">
            <div className="md:col-span-5 flex justify-center">
              <div className="bg-white p-2 rounded-xl shadow-lg transform transition-transform duration-500 hover:scale-105 w-full max-w-xs">
                <div className="w-full h-auto aspect-[3/4] rounded-lg overflow-hidden">
                  <img src="https://storage.googleapis.com/hostinger-horizons-assets-prod/9fdb5cd6-7395-42e7-a897-ebea996e876c/bb9b4f77a41695a6d12d437c2da834d6.jpg" alt="Portrait de Ziad Aissaoua" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
            <div className="md:col-span-7 text-white text-center md:text-left">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Pourquoi collaborer 
avec moi ?</h2>
              <div className="text-gray-200 text-lg space-y-4">
                <p>Moi c’est Ziad, ex-recruteur passionné par le recrutement. Depuis 5 ans, j’explore ce qui fait vraiment la différence dans une candidature : l’expérience vécue par le candidat et l’image projetée par l’entreprise.</p>
                <p className="font-semibold text-white">Ma spécialité : l’expérience candidat & la marque employeur.</p>
                <p>
                  En septembre 2025, je me lance dans l’aventure entrepreneuriale avec une mission claire : réconcilier performance RH et attention à l’humain, en formant les recruteurs et les RH à une approche plus fluide, engageante et mémorable.
                </p>
                <p>
                  Ainsi est née RHévélation, avec une promesse, recruter sans se faire ghoster en :
                </p>
                <ul className="list-disc list-inside space-y-2 pl-4 text-left">
                  <li>Créant des parcours candidats qui marquent.</li>
                  <li>Aidant les RH et recruteurs à structurer leur process sans perdre leur authenticité.</li>
                  <li>Développant des marques employeur alignées, crédibles et attractives.</li>
                </ul>
                 <p className="font-bold text-white pt-2">
                    Parce que les meilleurs talents ne fuient pas les entreprises exigeantes.
                    <br />
                    Ils fuient celles qui les ignorent.
                </p>
              </div>

              <div className="mt-10 pt-6 border-t border-white/20 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-8 justify-center md:justify-start">
                <div className="flex items-center space-x-3 justify-center md:justify-start">
                  <Linkedin className="w-8 h-8 text-white" />
                  <span className="text-lg md:text-xl font-semibold">+1300 abonnés LinkedIn</span>
                </div>
                <div className="flex items-center space-x-3 justify-center md:justify-start">
                  <Users className="w-8 h-8 text-white" />
                  <span className="text-lg md:text-xl font-semibold">+3 RH et recruteurs formés</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EbookAuthor;