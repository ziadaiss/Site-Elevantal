import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import RecruitmentBoostHero from '@/components/recruitment-boost/RecruitmentBoostHero';
import WhyImproveExperience from '@/components/recruitment-boost/WhyImproveExperience';
import ForYouSection from '@/components/recruitment-boost/ForYouSection';
import AccompagnementTimeline from '@/components/recruitment-boost/AccompagnementTimeline';
import AboutMe from '@/components/landing/AboutMe';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import useScrollReveal from '@/hooks/useScrollReveal';
import { DarkToLight, LightToDark, WhiteToGray, GrayToWhite } from '@/components/common/WaveSeparator';


const RecruitmentBoostPage = ({ handleNotImplemented }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useScrollReveal();

  const calendlyUrl = "https://calendly.com/contact-elevantal/premier-echange";
  const handleCalendlyRedirect = () => {
    window.open(calendlyUrl, '_blank');
  };

  const jsonLd = {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Recruitment Experience Boost",
      "description": "Un accompagnement stratégique pour une expérience candidat qui marque les esprits.",
      "provider": {
        "@type": "Organization",
        "name": "Elevantal",
        "url": "https://elevantal.com"
      },
      "serviceType": "Consulting",
      "areaServed": {
        "@type": "Country",
        "name": "FR"
      },
      "url": "https://elevantal.com/recruitment-experience-boost"
    };

  return (
    <>
      <Helmet>
        <title>Recruitment Experience Boost - Elevantal</title>
        <meta name="description" content="Un accompagnement stratégique pour une expérience candidat qui marque les esprits." />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <RecruitmentBoostHero />
      <DarkToLight darkBg="#132873" lightBg="#F3F4F6" />
      <WhyImproveExperience />
      <GrayToWhite grayBg="#F3F4F6" />
      <ForYouSection />

      <LightToDark lightBg="#ffffff" darkBg="#040a23" />
      <AccompagnementTimeline />
      <DarkToLight darkBg="#132873" lightBg="#ffffff" />
      <AboutMe />
      <WhiteToGray grayBg="#f8fafc" />
      <section className="py-16 md:py-24 bg-gray-50">
        <motion.div 
          initial={{ opacity: 0, y: 50 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.7, delay: 0.2 }} 
          viewport={{ once: true }} 
          className="text-center"
        >
          <Button onClick={handleCalendlyRedirect} className="bg-brand-blue-gradient text-white px-8 py-7 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105">
            Réserver un échange
          </Button>
        </motion.div>
      </section>
    </>
  );
};

export default RecruitmentBoostPage;