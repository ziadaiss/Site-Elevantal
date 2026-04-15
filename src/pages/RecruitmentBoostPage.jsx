import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import RecruitmentBoostHero from '@/components/recruitment-boost/RecruitmentBoostHero';
import WhyImproveExperience from '@/components/recruitment-boost/WhyImproveExperience';
import ForYouSection from '@/components/recruitment-boost/ForYouSection';
import RecruitmentTestimonials from '@/components/recruitment-boost/RecruitmentTestimonials';
import AboutMe from '@/components/landing/AboutMe';
import Testimonials from '@/components/landing/Testimonials';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';


const RecruitmentBoostPage = ({ handleNotImplemented }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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

      <RecruitmentBoostHero handleNotImplemented={handleNotImplemented} />
      <WhyImproveExperience handleNotImplemented={handleNotImplemented} />
      <ForYouSection />

      <RecruitmentTestimonials />
      <AboutMe />
      <Testimonials />
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