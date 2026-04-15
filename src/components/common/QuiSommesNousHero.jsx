import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Star } from 'lucide-react';
const QuiSommesNousHero = ({
  handleNotImplemented
}) => {
  const calendlyUrl = "https://calendly.com/contact-elevantal/premier-echange";
  const photoUrl = "https://horizons-cdn.hostinger.com/9fdb5cd6-7395-42e7-a897-ebea996e876c/10383f1ca54f82bcbb8f0173b1874c58.jpg";
  const handleCalendlyRedirect = () => {
    window.open(calendlyUrl, '_blank');
  };
  const scrollToTestimonials = () => {
    // This functionality will trigger a toast notification if handleNotImplemented is passed.
    handleNotImplemented();
  };
  return <section className="overflow-hidden py-24 lg:py-32"
  // Apply gradient background to the section
  style={{
    background: 'linear-gradient(to right, #03091f, #0a1642, #152d7f)'
  }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{
          opacity: 0,
          x: -50
        }} animate={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: 0.8,
          ease: "easeOut"
        }} className="text-white text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight max-w-lg mx-auto lg:mx-0">À propos d'Elevantal</h1>
            
            <p className="mt-6 text-lg text-blue-100/90 max-w-xl mx-auto lg:mx-0">
              Elevantal est une agence spécialisée en expérience candidat et marque employeur, créée pour répondre à un constat simple : 60% des candidats ghostent les start-ups pendant leur processus de recrutement.
              <br />
              <br />
              Notre mission : Faire de l'expérience candidat un avantage concurrentiel pour les start-ups en croissance. Nous aidons les équipes RH et recrutement à transformer leur parcours candidat en machine d'engagement, de conversion, et de fidélisation. Notre approche ? Zéro théorie. Que des méthodes concrètes, des outils prêts à l'emploi, et des résultats mesurables dès les premières semaines.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Button onClick={handleCalendlyRedirect} size="lg" className="text-white w-full sm:w-auto px-8 py-7 rounded-lg font-bold text-lg shadow-lg transform hover:scale-105 transition-transform duration-300 border-none"
            // Update button with gradient background and white text
            style={{
              background: 'linear-gradient(to right, #5264e4, #427ede, #3598d9)'
            }}>
                Découvrez tous nos services
              </Button>
            </div>
            
            <div className="mt-6 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3">
               <div className="flex items-center">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />)}
              </div>
              <button onClick={scrollToTestimonials} className="text-sm text-white hover:text-gray-200 transition-colors underline">Voir les 4 avis</button>
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
                <img src={photoUrl} alt="Ziad, fondateur de Elevantal" className="w-full h-full object-cover" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>;
};
export default QuiSommesNousHero;