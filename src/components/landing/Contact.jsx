import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Mail, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Contact = ({ handleNotImplemented }) => {
  const contacts = [
    { icon: MessageCircle, title: "Chat en direct", description: "Disponible pour répondre à vos questions.", action: "Démarrer une conversation" },
    { icon: Mail, title: "Email", description: "contact@zaitalent.fr", action: "Envoyer un email" },
    { icon: Phone, title: "Téléphone", description: "+33 1 23 45 67 89", action: "Nous appeler" }
  ];

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-brand-dark-blue/50">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Contactez-nous
          </h2>
          <p className="text-xl text-blue-200">
            Une question ? Notre équipe est là pour vous accompagner.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {contacts.map((contact, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 30 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              transition={{ delay: index * 0.1 }} 
              className="bg-white/5 backdrop-blur-lg rounded-xl p-8 border border-brand-light-blue/20 text-center hover:border-brand-light-blue/50 transition-all duration-300">
              <div className="w-16 h-16 bg-brand-light-blue rounded-full flex items-center justify-center mx-auto mb-6">
                <contact.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{contact.title}</h3>
              <p className="text-blue-200 mb-6 h-12">{contact.description}</p>
              <Button onClick={handleNotImplemented} variant="outline" className="border-brand-light-blue text-brand-light-blue hover:bg-brand-light-blue/10 hover:text-white w-full py-5">
                {contact.action}
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;