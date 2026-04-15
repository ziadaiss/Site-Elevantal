import React from 'react';
import { motion } from 'framer-motion';
const AboutMe = () => {
  return <section id="about-me" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{
        opacity: 0,
        y: 50
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true,
        amount: 0.2
      }} transition={{
        duration: 0.8
      }} className="bg-brand-blue-gradient rounded-2xl p-8 md:p-12 lg:p-16 shadow-2xl">
          <div className="grid md:grid-cols-10 gap-12 lg:gap-16 items-center">
            {/* Left Column: Image */}
            <div className="md:col-span-4 flex justify-center">
              <div className="bg-white p-2 rounded-xl shadow-lg transform transition-transform duration-500 hover:scale-105 w-full max-w-md md:max-w-none">
                <div className="w-full h-auto aspect-[3/4] rounded-lg overflow-hidden">
                  <img src="https://horizons-cdn.hostinger.com/9fdb5cd6-7395-42e7-a897-ebea996e876c/e5e2e2c4b43fbad21aee4475a4027fa6.jpg" alt="Portrait de Ziad Aissaoua" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>

            {/* Right Column: Text Content */}
            <div className="md:col-span-6 text-white text-center md:text-left">
              <h2 className="text-3xl lg:text-4xl font-bold mb-8 md:mb-10">
                Pourquoi collaborer avec moi ?
              </h2>

              <div className="space-y-8 max-w-xl mx-auto md:mx-0">
                {/* Block 1 */}
                <div>
                  <h3 className="text-lg md:text-xl font-bold mb-3">
                    Des actions concrètes, pas de la théorie
                  </h3>
                  <p className="text-base text-gray-200/95 leading-relaxed">
                    Je déteste perdre votre temps. Nous mettons en place une méthode qui améliorera votre expérience candidat et MAXIMISERA vos processus de recrutement.
                  </p>
                </div>

                {/* Block 2 */}
                <div>
                  <h3 className="text-lg md:text-xl font-bold mb-3">
                    Une approche qui respecte votre authenticité
                  </h3>
                  <p className="text-base text-gray-200/95 leading-relaxed">Je vous aide à structurer vos process tout en gardant votre culture d'entreprise.</p>
                </div>

                {/* Block 3 */}
                <div>
                  <h3 className="text-lg md:text-xl font-bold mb-3">
                    Un expert qui comprend vos défis
                  </h3>
                  <p className="text-base text-gray-200/95 leading-relaxed">
                    5 ans d'expérience en recrutement. Ex-recruteur passionné devenu expert en expérience candidat et marque employeur. Je connais vos contraintes : temps limité, recrutements massifs, guerre des talents.
                  </p>
                </div>
              </div>

              {/* Punchline */}
              <p className="mt-12 text-lg md:text-xl font-bold">
                Parce que les meilleurs talents ne fuient pas les start-ups exigeantes.
                <br />
                Ils fuient celles qui les ignorent.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>;
};
export default AboutMe;