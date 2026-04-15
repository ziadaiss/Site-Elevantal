import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
const ServiceRow = ({
  number,
  subtitle,
  title,
  linkTo,
  handleNotImplemented
}) => {
  const isLink = !!linkTo;
  const Component = isLink ? Link : 'div';
  const props = isLink ? {
    to: linkTo
  } : {
    onClick: handleNotImplemented,
    style: {
      cursor: 'pointer'
    }
  };
  return <motion.div initial={{
    opacity: 0,
    y: 20
  }} whileInView={{
    opacity: 1,
    y: 0
  }} viewport={{
    once: true,
    amount: 0.2
  }} transition={{
    duration: 0.5
  }}>
      <Component {...props}
    // Updated card background gradient
    className="group block w-full bg-gradient-to-r from-[#5264e4] via-[#427ede] to-[#3598d9] transition-all duration-300 rounded-2xl p-6 md:p-10 shadow-lg hover:shadow-2xl relative overflow-hidden">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
          
          <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-12 flex-grow">
            <span className="text-2xl md:text-3xl font-mono text-white font-bold group-hover:text-gray-100 transition-colors">
              {number}
            </span>

            <div className="flex flex-col gap-1 md:gap-2">
              <span className="text-gray-200 text-xs md:text-sm font-semibold tracking-wider uppercase">
                {subtitle}
              </span>
              <h3 className="text-2xl md:text-3xl font-bold text-white group-hover:text-white transition-colors">
                {title}
              </h3>
            </div>
          </div>

          <div className="self-start md:self-center mt-4 md:mt-0">
            <div className="w-12 h-12 rounded-full border border-white flex items-center justify-center group-hover:bg-white group-hover:border-white transition-all duration-300">
               <ArrowRight className="w-5 h-5 text-white group-hover:text-blue-600 transform group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </div>
      </Component>
    </motion.div>;
};
const Services = ({
  handleNotImplemented
}) => {
  return (
    // Updated section background gradient
    <section id="services" className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#03091f] via-[#0a1642] to-[#152d7f]">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true,
          amount: 0.5
        }} className="text-center mb-16">
          {/* Updated text color to white */}
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Vous êtes RH ou recruteur d'une start-up ?</h2>
          <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto">Construisez un parcours candidat fluide, marquant les esprits et qui fidélise avec Elevantal.</p>
        </motion.div>

        <div className="flex flex-col gap-6">
          <ServiceRow 
            number="01" 
            subtitle="Réduisez de 30% vos délais de recrutement" 
            title="La Méthode RHévélation" 
            linkTo="/formation-rRevelation" 
            handleNotImplemented={handleNotImplemented} 
          />
          <ServiceRow 
            number="02" 
            subtitle="Economisez 60 000€ de recrutement raté" 
            title="L'accompagnement RHévélation" 
            linkTo="/recruitment-experience-boost" 
            handleNotImplemented={handleNotImplemented} 
          />
        </div>
      </div>
    </section>
  );
};
export default Services;