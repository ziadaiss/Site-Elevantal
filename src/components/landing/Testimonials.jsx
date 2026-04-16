import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { cn } from '@/lib/utils';
const testimonialsData = [{
  initial: "E",
  name: "Eva",
  color: "bg-pink-500",
  rating: 5,
  content: "Ce qui est génial, c'est qu'il y a un retour approfondi sur toutes les questions qu'on pose, et ça ce n'est pas dans toutes les formations (surtout en ligne). On se sent accompagné !",
  date: "Aug 21, 2025"
}, {
  initial: "A",
  name: "Alexandre G.",
  color: "bg-green-500",
  rating: 5,
  content: "Une approche révolutionnaire qui a mis fin au ghosting. Nos candidats sont plus engagés que jamais.",
  date: "Sep 05, 2025"
}, {
  initial: "É",
  name: "Émilie B.",
  color: "bg-cyan-500",
  rating: 5,
  content: "J'étais sceptique au début, mais la méthode a dépassé toutes mes attentes. Les modèles sont hyper pratiques.",
  date: "Jun 28, 2025"
}, {
  initial: "J",
  name: "Julien D.",
  color: "bg-red-500",
  rating: 5,
  content: "Le format est dynamique et les outils sont directement applicables. Je me sens beaucoup plus confiant dans mes recrutements.",
  date: "Jul 18, 2025"
}, {
  initial: "T",
  name: "Thomas",
  color: "bg-blue-500",
  rating: 5,
  content: "Les templates fournis sont d'une qualité exceptionnelle. Gain de temps immédiat pour toute l'équipe. C'est un vrai retour sur investissement.",
  date: "Sep 12, 2025"
}, {
  initial: "S",
  name: "Sarah L.",
  color: "bg-purple-500",
  rating: 5,
  content: "J'ai particulièrement apprécié le module sur l'expérience candidat. C'est exactement ce qu'il nous manquait pour attirer les meilleurs talents.",
  date: "Oct 03, 2025"
}, {
  initial: "M",
  name: "Marc R.",
  color: "bg-orange-500",
  rating: 5,
  content: "Simple, efficace et humain. Une formation qui change vraiment la donne.",
  date: "Nov 15, 2025"
}, {
  initial: "L",
  name: "Léa P.",
  color: "bg-indigo-500",
  rating: 5,
  content: "Merci pour cette approche rafraîchissante du recrutement. Fini les processus froids et impersonnels !",
  date: "Dec 02, 2025"
}];
const TestimonialCard = ({
  data
}) => <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
    <div className="flex items-start justify-between mb-4">
      <div className="flex items-center gap-3">
        <div className={cn("w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-lg", data.color)}>
          {data.initial}
        </div>
        <div>
          <h4 className="font-bold text-gray-900 leading-tight">{data.name}</h4>
          <div className="flex text-yellow-400 mt-0.5">
            {[...Array(data.rating)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
          </div>
        </div>
      </div>
    </div>
    
    <p className="text-gray-600 mb-4 text-sm leading-relaxed">
      {data.content}
    </p>
    
    <div className="text-xs text-gray-400 font-medium">
      {data.date}
    </div>
  </div>;
const TestimonialColumn = ({
  testimonials,
  duration = 40,
  className
}) => <div className={cn("relative flex flex-col gap-6", className)}>
    <motion.div animate={{
    y: "-50%"
  }} transition={{
    duration: duration,
    repeat: Infinity,
    ease: "linear",
    repeatType: "loop"
  }} className="flex flex-col gap-6 pb-6">
      {/* We duplicate the testimonials to create a seamless loop */}
      {[...testimonials, ...testimonials, ...testimonials].map((testimonial, index) => <TestimonialCard key={`${testimonial.name}-${index}`} data={testimonial} />)}
    </motion.div>
  </div>;
const Testimonials = () => {
  // Distribute testimonials across 3 columns
  const col1 = [testimonialsData[0], testimonialsData[1], testimonialsData[6]];
  const col2 = [testimonialsData[2], testimonialsData[3], testimonialsData[7]];
  const col3 = [testimonialsData[4], testimonialsData[5], testimonialsData[0]]; // Reuse some for filler

  return <section id="temoignages" className="reveal py-20 md:py-28 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            className="reveal text-4xl md:text-5xl font-bold mb-6 tracking-tight"
            style={{ 
              backgroundImage: 'linear-gradient(to right, #5264e4, #427ede, #3598d9)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              color: 'transparent'
            }}
          >
            Nos avis clients sont unanimes
          </h2>
          <p className="reveal reveal-d1 text-lg text-gray-600 max-w-2xl mx-auto">Découvrez les retours de ceux qui ont transformé leur expérience candidat avec nous.</p>
        </div>

        <div className="relative h-[600px] md:h-[700px] overflow-hidden">
          {/* Gradient Masks for smooth fade in/out */}
          <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-slate-50 to-transparent z-10 pointer-events-none" />
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-50 to-transparent z-10 pointer-events-none" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 h-full">
            <TestimonialColumn testimonials={col1} duration={45} />
            <TestimonialColumn testimonials={col2} duration={55} className="hidden md:flex" />
            <TestimonialColumn testimonials={col3} duration={50} className="hidden lg:flex" />
          </div>
        </div>
      </div>
    </section>;
};
export default Testimonials;