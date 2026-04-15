import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
const CTA = () => {
  const handleRedirect = () => {
    window.open('https://services-elevantal.systeme.io/newsletter', '_blank', 'noopener,noreferrer');
  };
  return <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-5xl mx-auto text-center">
        <motion.div initial={{
        opacity: 0,
        y: 30
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true,
        amount: 0.5
      }} className="relative rounded-2xl p-8 md:p-12 overflow-hidden shadow-lg bg-cover bg-center" style={{
        backgroundImage: "url('https://horizons-cdn.hostinger.com/9fdb5cd6-7395-42e7-a897-ebea996e876c/89fe7cde512995a1ebeb3a3fc40ffad3.jpg')"
      }}>
          <div className="absolute inset-0 bg-black/60"></div>
          <div className='relative z-10'>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Rejoignez notre newsletter
            </h2>
            <p className="text-lg md:text-xl text-gray-200 mb-8">Pour recevoir nos conseils deux jeudis par mois.</p>
            
            <div className="flex justify-center">
              <Button onClick={handleRedirect} className="bg-brand-blue-gradient text-white px-5 py-5 rounded-full font-semibold text-base transition-all duration-300 transform hover:scale-105">
                S'inscire
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>;
};
export default CTA;