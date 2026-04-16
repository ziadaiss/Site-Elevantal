import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';

const features = [
  "Une newsletter chaque jeudi",
  "Conseils",
  "Cas pratiques"
];

const BlogHero = () => {
  const handleNewsletterSignup = () => {
    window.open("https://services-elevantal.systeme.io/newsletter", '_blank');
  };

  return (
    <section className="reveal relative overflow-hidden bg-brand-blue-gradient text-white">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center md:text-left"
          >
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tighter mb-4">
              L'Expérience en Vrai
            </h1>
            <ul className="space-y-2 mb-6">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center justify-center md:justify-start">
                  <Check className="h-6 w-6 text-white bg-white/20 rounded-full p-1 mr-3 flex-shrink-0" />
                  <span className="text-lg">{feature}</span>
                </li>
              ))}
            </ul>
            <p className="font-bold text-lg mb-4">
              1 email par semaine chaque jeudi. Des conseils actionnables pour transformer vos expériences candidats.
            </p>
            <p className="text-base text-white/90 mb-8">
              Retrouvez dans cette page chaque newsletter sous forme d'articles.
            </p>
            <Button
              onClick={handleNewsletterSignup}
              size="lg"
              className="bg-white text-brand-blue hover:bg-gray-100 rounded-full font-bold text-lg px-8 py-6 transition-transform transform hover:scale-105"
            >
              S'inscrire à la newsletter
            </Button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center items-center p-4"
          >
            <div className="bg-white p-2 rounded-xl shadow-lg transform transition-transform duration-500 hover:scale-105">
              <div className="w-full max-w-sm h-auto rounded-lg overflow-hidden">
                <img src="https://storage.googleapis.com/hostinger-horizons-assets-prod/9fdb5cd6-7395-42e7-a897-ebea996e876c/95c9b5c7a77e25f67b89fcc07a732177.jpg" alt="Illustration for blog header" className="w-full h-full object-cover" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BlogHero;