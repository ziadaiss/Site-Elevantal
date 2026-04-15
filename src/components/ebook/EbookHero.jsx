import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
const EbookHero = ({
  onCTAClick
}) => {
  const imageUrl = "https://horizons-cdn.hostinger.com/9fdb5cd6-7395-42e7-a897-ebea996e876c/ed516ad5e516b997e5e3a5cf61b8aad0.png";
  return <section className="bg-brand-blue-gradient text-white pt-20 pb-16 md:pt-24 md:pb-20">
      <motion.div initial={{
      opacity: 0,
      y: 20
    }} animate={{
      opacity: 1,
      y: 0
    }} transition={{
      duration: 0.8,
      ease: "easeOut"
    }} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        <img src={imageUrl} alt="Couverture de l'e-book sur l'expérience candidat" className="max-w-md w-full h-auto object-contain mb-8 transform transition-transform duration-500 hover:scale-105" />
        
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight max-w-3xl mb-4">
          Vos KPIs d'expérience candidat <br /> clairs et exploitables
        </h1>
        
        <p className="mt-2 text-xl text-blue-100/90 max-w-2xl">Téléchargez notre tableur gratuit pour mesurer l'efficacité de vos process et améliorer enfin de manière concrète votre expérience candidat</p>

        <div className="mt-8 flex flex-col items-center gap-4">
          <div className="flex flex-wrap justify-center gap-3 mb-2">
            <span className="bg-white/20 text-white text-sm font-semibold px-3 py-1 rounded-full">Tableur KPIs expérience candidat</span>
            <span className="bg-white/20 text-white text-sm font-semibold px-3 py-1 rounded-full">Excel expérience candidat</span>
          </div>
          <Button onClick={onCTAClick} size="lg" className="bg-white text-blue-600 hover:bg-gray-100 w-full sm:w-auto px-8 py-7 rounded-lg font-bold text-lg shadow-lg transform hover:scale-105 transition-transform duration-300">Obtenir le tableur</Button>
        </div>
      </motion.div>
    </section>;
};
export default EbookHero;