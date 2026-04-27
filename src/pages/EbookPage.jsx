import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import EbookHero from '@/components/ebook/EbookHero';
import EbookPromise from '@/components/ebook/EbookPromise';
import EbookForYou from '@/components/ebook/EbookForYou';
import EbookGuideContent from '@/components/ebook/EbookGuideContent';
import EbookForm from '@/components/ebook/EbookForm';
import AboutMe from '@/components/landing/AboutMe';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import useScrollReveal from '@/hooks/useScrollReveal';
import { DarkToLight, LightToDark, WhiteToGray, GrayToWhite } from '@/components/common/WaveSeparator';

const EbookPage = ({
  handleNotImplemented
}) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useScrollReveal();
  const ebookUrl = "https://services-elevantal.systeme.io/691c0248-55c3129f-5932e447"; // Updated URL
  const pageUrl = "https://elevantal.com/tableur-experience-candidat"; // Updated page URL
  const authorName = "Ziad Aissaoua";
  const organizationName = "Elevantal";
  const handleGetEbook = () => {
    window.open(ebookUrl, '_blank', 'noopener,noreferrer');
  };
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Book",
    "name": "Guide Gratuit Expérience Candidat Scale-up | 4 Quick Wins",
    "description": "Téléchargez gratuitement le guide pour transformer votre recrutement : 4 Quick Wins testés par 20+ scale-ups. Templates inclus.",
    "url": pageUrl,
    "author": {
      "@type": "Person",
      "name": authorName
    },
    "provider": {
      "@type": "Organization",
      "name": organizationName
    },
    "workExample": [{
      "@type": "CreativeWork",
      "url": ebookUrl
    }],
    "isAccessibleForFree": true,
    "inLanguage": "fr"
  };
  return <>
      <Helmet>
        <title>Guide Gratuit Expérience Candidat Scale-up | 4 Quick Wins</title>
        <meta name="description" content="Téléchargez gratuitement le guide pour transformer votre recrutement : 4 Quick Wins testés par 20+ scale-ups. Templates inclus." />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>
      
      <EbookHero onCTAClick={handleGetEbook} />
      <DarkToLight darkBg="linear-gradient(to right, #5C67F2, #43A7F2)" lightBg="#F9FAFB" />
      <EbookPromise />
      <GrayToWhite grayBg="#f9fafb" />
      <EbookForYou />
      <WhiteToGray grayBg="#f9fafb" />
      {/* Wrapper to apply the desired background color to the AboutMe section */}
      <div className="bg-gray-50">
        <AboutMe />
      </div>

      <div className="text-center py-10 bg-gray-50">
        <Button onClick={handleGetEbook} size="lg" className="bg-brand-blue-gradient text-white px-10 py-8 rounded-lg font-bold text-lg shadow-lg transform hover:scale-105 transition-transform duration-300">Obtenir le tableur</Button>
      </div>

      <GrayToWhite grayBg="#f9fafb" />
      <EbookGuideContent />
      <EbookForm handleGetEbook={handleGetEbook} />

      <LightToDark lightBg="#ffffff" darkBg="#03091f" />
      <section className="py-16 md:py-24 bg-brand-blue-gradient text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true, amount: 0.5 }} 
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl md:text-5xl font-extrabold mb-4">Passez au niveau supérieur avec la formation RHévélation👇</h2>
            <p className="text-xl text-blue-100/90 mb-8 max-w-3xl mx-auto">Découvrez notre programme complet pour transformer votre recrutement étape par étape : ateliers pratiques, accompagnement personnalisé, outils exclusifs, et bien plus !</p>
            <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-7 rounded-lg font-bold text-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
              <Link to="/formation-rRevelation">Je découvre la formation RHévélation</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </>;
};
export default EbookPage;