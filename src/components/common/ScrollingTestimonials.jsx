import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    name: "Thomas D.",
    role: "DRH @ TechCorp",
    content: "Une approche rafraîchissante qui a transformé notre manière de recruter. Les candidats nous remercient même pour les refus !",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  },
  {
    name: "Sarah L.",
    role: "Talent Acquisition Manager",
    content: "Formation ultra concrète. On a réduit notre temps de recrutement de 30% tout en augmentant la qualité des profils.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  },
  {
    name: "Marc B.",
    role: "CEO @ StartUp",
    content: "Enfin des conseils applicables immédiatement. Le ROI a été visible dès le premier mois. Je recommande vivement.",
    image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  },
  {
    name: "Julie M.",
    role: "Recruteuse Indépendante",
    content: "J'ai gagné en crédibilité auprès de mes clients grâce aux méthodes apprises. C'est un game changer pour mon activité.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  }
];

const ScrollingTestimonials = () => {
  return (
    <section id="temoignages" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-brand-dark mb-6">
          Ils nous font confiance 💙
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Découvrez les retours de ceux qui ont transformé leur recrutement avec nous.
        </p>
      </div>

      <div className="relative w-full">
        <div className="flex gap-8 animate-scroll hover:pause-scroll w-[200%]">
          {/* First set of testimonials */}
          {testimonials.map((testimonial, index) => (
            <div
              key={`first-${index}`}
              className="w-[300px] md:w-[400px] flex-shrink-0 bg-gray-50 p-8 rounded-2xl shadow-sm border border-gray-100"
            >
              <div className="flex items-center gap-4 mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-bold text-brand-dark">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-700 italic">"{testimonial.content}"</p>
            </div>
          ))}
          
          {/* Duplicate set for infinite scroll effect */}
          {testimonials.map((testimonial, index) => (
            <div
              key={`second-${index}`}
              className="w-[300px] md:w-[400px] flex-shrink-0 bg-gray-50 p-8 rounded-2xl shadow-sm border border-gray-100"
            >
              <div className="flex items-center gap-4 mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-bold text-brand-dark">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-700 italic">"{testimonial.content}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ScrollingTestimonials;