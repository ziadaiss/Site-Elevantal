import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';
import { Link } from 'react-router-dom';

const QuickWinsSection = () => {
  const ebookImageUrl = "https://horizons-cdn.hostinger.com/9fdb5cd6-7395-42e7-a897-ebea996e876c/2c245e03fada0ae55a1b0e1b61fd4f2a.png";

  return (
    <section className="reveal py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-6">
              Les 4 actions qui amélioreront votre expérience candidat en moins d'1 semaine.
            </h2>
            <p className="text-gray-600 mb-6">
              Si vous cherchez un guide qui vous explique CE QUE vous devez faire et POURQUOI, sans jargon inutile avec application immédiate, vous êtes au bon endroit. Vous découvrirez :
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center text-gray-700">
                <Check className="w-5 h-5 mr-3 text-green-500 flex-shrink-0" />
                Comment cartographier votre parcours candidat en 6 étapes
              </li>
              <li className="flex items-center text-gray-700">
                <Check className="w-5 h-5 mr-3 text-green-500 flex-shrink-0" />
                Comment créer votre persona candidat émotionnel
              </li>
              <li className="flex items-center text-gray-700">
                <Check className="w-5 h-5 mr-3 text-green-500 flex-shrink-0" />
                Comment mesurer votre NPS candidat
              </li>
              <li className="flex items-center text-gray-700">
                <Check className="w-5 h-5 mr-3 text-green-500 flex-shrink-0" />
                Comment créer votre tableau de bord expérience candidat
              </li>
            </ul>
            <Link to="/ebook-experience-candidat">
              <Button size="lg" className="bg-brand-blue-gradient text-white px-8 py-7 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105">
                Obtenir le e-book gratuitement
              </Button>
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center items-center"
          >
            <img
              src={ebookImageUrl}
              alt="Mockup de l'e-book sur différents appareils montrant le guide 'PME TRANSFORMER VOS EXPERIENCES CANDIDATS AVEC CES 4 QUICK WINS'"
              className="rounded-lg shadow-2xl max-w-full h-auto"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default QuickWinsSection;