import React from 'react';
import { motion } from 'framer-motion';

const targetAudience = [
  {
    emoji: "🧠",
    title: "Vous en avez assez d’être ghosté par vos candidats",
    description: "Vous vivez des désistements inattendus en cours de processus ? Vous avez le sentiment de bien faire, mais les talents disparaissent sans prévenir ? Il est temps d’inverser la tendance grâce à une expérience candidat mieux pensée."
  },
  {
    emoji: "👥",
    title: "Vous souhaitez rendre votre entreprise plus attractive",
    description: "Vous aimeriez que les candidats aient réellement envie de vous répondre, postuler, et s’engager. Et que votre entreprise sorte du lot dès le premier contact."
  },
  {
    emoji: "❤️",
    title: "Vous voulez fidéliser vos futures recrues avant même leur arrivée",
    description: "Vous savez que l’engagement commence dès le premier échange. Vous voulez créer un lien fort pour que vos candidats se projettent durablement chez vous."
  },
  {
    emoji: "💡",
    title: "Vous cherchez des méthodes concrètes, pas de la théorie",
    description: "Vous voulez des outils pratiques, des templates et des processus clairs pour structurer vos recrutements sans perdre de temps."
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
};

const FormationTargetAudience = () => {
  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
            Cette formation est faite pour vous si :
          </h2>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full"
        >
          {targetAudience.map((item, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              // Task 1: Added shadow-md to the cards for a subtle drop shadow effect
              className="bg-white border border-gray-100 rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col h-full w-full"
            >
              <div className="flex items-start gap-4 mb-3 justify-center w-full"> {/* Added justify-center and w-full to ensure emoji is centered */}
                <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-blue-50 rounded-full text-2xl">
                  {item.emoji}
                </div>
              </div>
              
              <h3 className="text-lg font-bold text-gray-900 mb-3 leading-snug text-center">
                {item.title}
              </h3>
              
              <p className="text-gray-600 text-sm leading-relaxed flex-grow text-center">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FormationTargetAudience;