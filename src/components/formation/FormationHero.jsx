import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Star } from 'lucide-react';
const FormationHero = ({
  handleNotImplemented
}) => {
  const photoUrl = "https://storage.googleapis.com/hostinger-horizons-assets-prod/9fdb5cd6-7395-42e7-a897-ebea996e876c/de883e0b178c0d2053371730b2ee7729.jpg";
  const calendlyUrl = "https://calendly.com/contact-elevantal/premier-echange";
  const handleCalendlyRedirect = () => {
    window.open(calendlyUrl, '_blank');
  };
  const scrollToTestimonials = () => {
    const testimonialsSection = document.getElementById('temoignages-formation');
    if (testimonialsSection) {
      testimonialsSection.scrollIntoView({
        behavior: 'smooth'
      });
    } else {
      handleNotImplemented();
    }
  };
  return <section className="overflow-hidden pt-24 pb-16 lg:pt-32 lg:pb-20" style={{
    background: 'linear-gradient(135deg, #03091f, #0a1642, #152d7f)'
  }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
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
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight">La Méthode RHévélation</h1>
            
            <div className="mt-6 max-w-lg mx-auto lg:mx-0">
              <p className="font-semibold text-xl">Passez d'un recrutement lent à recrutement fluide, mémorable et diminuez de 30% vos délais de recrutement.</p>
              <p className="mt-1 text-blue-100/90 text-sm"></p>
            </div>

            <div className="mt-8">
              <Button onClick={handleCalendlyRedirect} size="lg" className="text-white w-full sm:w-auto px-8 py-7 rounded-lg font-bold text-lg shadow-lg transform hover:scale-105 transition-all duration-300 hover:opacity-90" style={{
              background: 'linear-gradient(135deg, #5264e4, #427ede, #3598d9)'
            }}>
                Rejoindre la formation
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
        }} className="flex justify-center items-center p-4">
            <div className="bg-white p-2 rounded-xl shadow-lg transform transition-transform duration-500 hover:scale-105 w-full max-w-sm">
              <div className="w-full h-auto aspect-[3/4] rounded-lg overflow-hidden">
                <img src={photoUrl} alt="Ziad, formateur RHévélation" className="w-full h-full object-cover" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>;
};
export default FormationHero;