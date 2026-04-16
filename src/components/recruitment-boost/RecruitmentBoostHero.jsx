import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Star } from 'lucide-react';
const RecruitmentBoostHero = ({
  handleNotImplemented
}) => {
  const imageUrl = "https://storage.googleapis.com/hostinger-horizons-assets-prod/9fdb5cd6-7395-42e7-a897-ebea996e876c/e3e5b2ed2df9cd7cb524e5c6b68b2ea8.png";
  const calendlyUrl = "https://calendly.com/contact-elevantal/premier-echange";
  const scrollToTestimonials = () => {
    handleNotImplemented();
  };
  const handleCalendlyRedirect = () => {
    window.open(calendlyUrl, '_blank');
  };
  return <section className="reveal overflow-hidden pt-24 lg:pt-32" style={{
    background: 'linear-gradient(to right, #03091f, #0a1642, #152d7f)'
  }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-x-8 items-center">
          <motion.div initial={{
          opacity: 0,
          y: 40
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          ease: "easeOut"
        }} className="text-white text-center lg:text-left py-12">
            {/* Updated Title: Reduced font size to fit on a single line if possible, otherwise as few lines as possible based on the text. */}
            <h1 className="text-3xl md:text-4xl font-extrabold leading-tight tracking-tight text-white">
              L'accompagnement RHévélation
            </h1>
            
            <div className="mt-6 text-base md:text-lg max-w-lg mx-auto lg:mx-0">
              {/* Updated Subtitle: Reduced font size to fit on 3 lines */}
              <p className="font-semibold">Passez de l'improvisation à la stratégie en fidélisant enfin vos nouvelles recrues et économisez +60 000€ par an de recrutements ratés.</p>
            </div>

            <div className="mt-8">
              <Button onClick={handleCalendlyRedirect} size="lg" className="text-white w-full sm:w-auto px-8 py-7 rounded-lg font-bold text-lg shadow-lg transform hover:scale-105 transition-transform duration-300 border-none" style={{
              background: 'linear-gradient(to right, #5264e4, #427ede, #3598d9)'
            }}>
                Réserver un échange
              </Button>
            </div>
            
            <div className="mt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3">
               <div className="flex items-center">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />)}
              </div>
              <button onClick={scrollToTestimonials} className="text-sm text-white hover:text-gray-200 transition-colors underline">Voir les +4 avis</button>
            </div>
          </motion.div>
          
          <motion.div initial={{
          opacity: 0,
          y: 50
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          delay: 0.2,
          ease: "easeOut"
        }} className="relative h-80 lg:h-[500px] mt-8 lg:mt-0 flex items-end justify-center">
            <img alt="Ziad, expert en expérience candidat, souriant" className="max-w-full h-auto max-h-full object-contain" src={imageUrl} />
          </motion.div>
        </div>
      </div>
    </section>;
};
export default RecruitmentBoostHero;