import React from 'react';
import { motion } from 'framer-motion';

const CenteredAboutSection = () => {
  return (
    <section id="about-me" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="bg-brand-blue-gradient rounded-2xl p-8 md:p-12 lg:p-16 shadow-2xl"
        >
          <div className="text-white text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-8 md:mb-10">
              Pourquoi collaborer avec nous ?
            </h2>

            <div className="space-y-8 max-w-2xl mx-auto">
              <div>
                <h3 className="text-lg md:text-xl font-bold mb-3">
                  Des actions concrètes, pas de la théorie
                </h3>
                <p className="text-base text-gray-200/95 leading-relaxed">
                  Nous détestons vous faire perdre votre temps. Nous mettons en place une méthode qui améliorera votre expérience candidat et MAXIMISERA vos processus de recrutement.
                </p>
              </div>

              <div>
                <h3 className="text-lg md:text-xl font-bold mb-3">
                  Une approche qui respecte votre authenticité
                </h3>
                <p className="text-base text-gray-200/95 leading-relaxed">
                  Nous vous aidons à structurer vos process tout en gardant votre culture start-up. Fluide, engageant, humain.
                </p>
              </div>

              <div>
                <h3 className="text-lg md:text-xl font-bold mb-3">
                  Un expert qui comprend vos défis
                </h3>
                <p className="text-base text-gray-200/95 leading-relaxed">
                  5 ans d'expérience en recrutement. Ex-recruteur passionné devenu expert en expérience candidat et marque employeur. Nous connaissons vos contraintes : temps limité, recrutements massifs, guerre des talents.
                </p>
              </div>
            </div>

            <p className="mt-12 text-lg md:text-xl font-bold">
              Parce que les meilleurs talents ne fuient pas les start-ups exigeantes.
              <br />
              Ils fuient celles qui les ignorent.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CenteredAboutSection;