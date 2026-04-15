import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
const Hero = ({
  handleNotImplemented
}) => {
  const spreadsheetImage = 'https://horizons-cdn.hostinger.com/9fdb5cd6-7395-42e7-a897-ebea996e876c/003dd29baf6ea14f94b3e5923cbfb102.png';

  // Define gradient classes for reuse to ensure consistency
  // Using an arbitrary value approach for precise colors requested: #5264e4 -> #427ede -> #3598d9
  const gradientTextClass = "bg-[linear-gradient(90deg,#5264e4_0%,#427ede_50%,#3598d9_100%)] bg-clip-text text-transparent";
  const gradientBgClass = "bg-[linear-gradient(90deg,#5264e4_0%,#427ede_50%,#3598d9_100%)]";

  // Let's implement the defs approach for the icon to be truly gradient.
  const GradientCheck = () => <div className="relative flex items-center justify-center w-5 h-5 mr-3 mt-1 flex-shrink-0">
      <svg width="0" height="0">
        <defs>
          <linearGradient id="check-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#5264e4" />
            <stop offset="50%" stopColor="#427ede" />
            <stop offset="100%" stopColor="#3598d9" />
          </linearGradient>
        </defs>
      </svg>
      <Check className="w-5 h-5" style={{
      stroke: "url(#check-gradient)"
    }} />
    </div>;
  return <section id="accueil" className="relative min-h-[90vh] flex items-center pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden bg-[linear-gradient(135deg,#020617_0%,#1e40af_100%)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Text */}
          <motion.div initial={{
          opacity: 0,
          x: -50
        }} animate={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: 0.8,
          ease: "easeOut"
        }} className="text-left flex flex-col items-start">
            {/* Badge */}
            <span className={`font-bold tracking-wider uppercase text-sm mb-4 ${gradientTextClass}`}>
              TABLEAU DE BORD KPI CLÉ-EN-MAIN
            </span>

            {/* Main Title */}
            <h1 className="text-3xl md:text-4xl lg:text-4xl font-extrabold leading-tight tracking-tight mb-6 text-white font-sans max-w-3xl">Pilotez votre parcours candidat aujourd'hui, et éliminez +6h de reporting par mois !</h1>
            
            {/* Description Paragraph */}
            <p className="text-lg text-blue-100 mb-6 max-w-xl leading-relaxed">
              Si vous perdez du temps à compiler des données éparpillées, que vous ne savez pas quels KPI suivre vraiment, ou que vos décisions manquent de données concrètes...
            </p>

            {/* Subtitle */}
            <p className="text-lg font-bold text-white mb-4">
              Accédez à votre tableau de bord KPI immédiatement pour :
            </p>

            {/* Bullet Points */}
            <ul className="space-y-3 mb-8">
              {["Mesurer précisément vos délais de recrutement", "Détecter les abandons en cours de processus", "Analyser votre coût par embauche"].map((item, index) => <li key={index} className="flex items-start text-white/90">
                  <GradientCheck />
                  <span className="text-base md:text-lg">{item}</span>
                </li>)}
            </ul>

            {/* CTA Button */}
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Button asChild size="lg" className={`${gradientBgClass} hover:opacity-90 text-white px-8 py-7 rounded-lg font-bold text-lg whitespace-nowrap transition-all duration-300 transform hover:scale-105 shadow-lg w-full sm:w-auto border-0`}>
                <a href="https://services-elevantal.systeme.io/691c0248-55c3129f-5932e447" target="_blank" rel="noopener noreferrer">
                  Accéder au tableau de bord
                </a>
              </Button>
            </div>
          </motion.div>

          {/* Right Column: Image */}
          <motion.div initial={{
          opacity: 0,
          x: 50
        }} animate={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: 0.8,
          delay: 0.2,
          ease: "easeOut"
        }} className="relative w-full flex justify-center lg:justify-end">
            {/* Removed bg-white/5 and backdrop-blur-sm for transparency */}
            <div className="relative rounded-xl shadow-2xl overflow-hidden w-full max-w-lg transform hover:scale-[1.02] transition-transform duration-500 border border-white/10 p-1">
              <img src={spreadsheetImage} alt="Tableur KPI Dashboard" className="w-full h-auto rounded-lg" />
            </div>
          </motion.div>

        </div>
      </div>
    </section>;
};
export default Hero;