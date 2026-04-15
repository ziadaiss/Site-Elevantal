import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Briefcase, Award, Users, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const FormationBenefits = ({ handleNotImplemented }) => {
  const benefits = [
    { icon: BookOpen, title: "Ateliers interactifs" },
    { icon: Briefcase, title: "Exercices d'application" },
    { icon: Award, title: "Ressources téléchargeables" },
    { icon: Users, title: "Accompagnement individuel" }
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-brand-blue-gradient">Ce que vous obtenez avec la formation</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {benefits.map((item, index) => (
            <div key={index} className="p-6">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-brand-blue-gradient text-white mx-auto mb-4">
                <item.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-brand-dark">{item.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FormationBenefits;