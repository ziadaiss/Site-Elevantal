import React from 'react';
import { motion } from 'framer-motion';
import { Users, BookOpen, UserCheck, Briefcase } from 'lucide-react';

const Features = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };
  
  const staggerContainer = {
    animate: { transition: { staggerChildren: 0.1 } }
  };

  const features = [
    { icon: UserCheck, title: "Pour les entreprises", description: "Avec une vision RH stratégique et souhaitant valoriser leur marque employeur." },
    { icon: Users, title: "Pour les RH & Managers", description: "Responsables formation ou managers souhaitant construire un plan adapté." },
    { icon: Briefcase, title: "Pour les recruteurs", description: "Améliorer la posture et l'impact pour attirer les meilleurs talents." },
    { icon: BookOpen, title: "Pour les passionnés", description: "Toute personne curieuse de maîtriser les enjeux du recrutement moderne." }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-brand-dark-blue/50">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          variants={staggerContainer} 
          initial="initial" 
          whileInView="animate" 
          viewport={{ once: true }} 
          className="text-center mb-16">
          <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold text-white mb-4">
            Pour qui est cette formation ?
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-xl text-blue-200 max-w-3xl mx-auto">
            Une formation conçue pour les professionnels qui souhaitent faire la différence.
          </motion.p>
        </motion.div>

        <motion.div 
          variants={staggerContainer} 
          initial="initial" 
          whileInView="animate" 
          viewport={{ once: true }} 
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div key={index} variants={fadeInUp} className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-brand-light-blue/20 hover:border-brand-light-blue/50 transition-all duration-300 group hover:-translate-y-2">
              <div className="w-12 h-12 bg-brand-light-blue rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-blue-200">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;