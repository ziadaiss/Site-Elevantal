import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
const EbookForm = ({
  handleGetEbook
}) => {
  const imageUrl = "https://horizons-cdn.hostinger.com/9fdb5cd6-7395-42e7-a897-ebea996e876c/1ce1b3a4013ecab23c3781502ba92001.png";
  const handleSubmit = e => {
    e.preventDefault();
    handleGetEbook();
  };
  return <section id="form-section" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{
        opacity: 0,
        y: 50
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true,
        amount: 0.5
      }} transition={{
        duration: 0.7
      }} className="bg-blue-50/70 p-8 md:p-12 rounded-2xl shadow-lg border border-blue-100">
          <div className="grid md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-4 flex justify-center">
              <img src={imageUrl} alt="E-book cover" className="w-48 md:w-full max-w-xs h-auto" />
            </div>
            <div className="md:col-span-8 text-center">
              <h2 className="text-3xl md:text-4xl font-extrabold text-brand-dark mb-2">J'accède au tableur de KPIs expérience candidat</h2>
              <h3 className="text-xl text-gray-700 mb-6">J'apprends à analyser mon expérience candidat</h3>
              
              <div className="space-y-3 text-lg text-gray-800 mb-8">
                <p>📊 5 données essentielles</p>
                <p>🗂️ Accessible avec Excel, Google Sheet et LibreOffice</p>
                <p>🎁 Réductions exclusives</p>
              </div>

              <form onSubmit={handleSubmit} className="flex flex-col items-center">
                 <Button type="submit" size="lg" className="w-full max-w-xs bg-brand-blue-gradient text-white px-8 py-7 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105">Obtenir le tableur</Button>
              </form>
               <div className="mt-6 text-sm text-gray-500 space-y-1">
                <p>✅ 100% gratuit - Aucune carte bancaire</p>
                <p>📧 Conseils exclusifs sur l'expérience candidat (désinscription facile)</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>;
};
export default EbookForm;