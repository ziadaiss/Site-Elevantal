import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import FormationHero from '@/components/formation/FormationHero';
import FormationCoreSkills from '@/components/formation/FormationCoreSkills';
import FormationTargetAudience from '@/components/formation/FormationTargetAudience';
import AboutMe from '@/components/landing/AboutMe';
import Testimonials from '@/components/landing/Testimonials';
import FormationFaq from '@/components/formation/FormationFaq';
import FormationPricing from '@/components/formation/FormationPricing';
import FormationContent from '@/components/formation/FormationContent';
import FormationGarantie from '@/components/formation/FormationGarantie';
import useScrollReveal from '@/hooks/useScrollReveal';
import { DarkToLight, LightToDark, WhiteToGray, GrayToWhite } from '@/components/common/WaveSeparator';

const FormationPage = ({ handleNotImplemented }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useScrollReveal();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": "Formation RHévélation",
    "description": "Recrutez avec impact et créez une expérience candidat mémorable grâce à notre formation pratico-pratique.",
    "provider": {
      "@type": "Organization",
      "name": "Elevantal",
      "sameAs": "https://elevantal.com"
    },
    "url": "https://elevantal.com/formation-rRevelation"
  };

  // Event delegation to catch the click on "Voir les +4 avis" link in the Hero section
  // This allows us to implement the scroll functionality without modifying the hidden FormationHero file
  const handleHeroClick = (e) => {
    // Find closest interactive element or use target
    const target = e.target.closest('a') || e.target.closest('button') || e.target;
    
    // Check if this is the reviews link by its text content
    if (target && target.innerText && target.innerText.includes("Voir les +4 avis")) {
      e.preventDefault();
      const testimonialsSection = document.getElementById('temoignages');
      if (testimonialsSection) {
        testimonialsSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      <Helmet>
        <title>Formation RHévélation - Elevantal</title>
        <meta name="description" content="Recrutez avec impact et créez une expérience candidat mémorable grâce à notre formation pratico-pratique." />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      {/* Wrapper to intercept clicks from FormationHero for the reviews link */}
      <div onClick={handleHeroClick} className="w-full">
        <FormationHero handleNotImplemented={handleNotImplemented} />
      </div>
      <DarkToLight darkBg="#132873" lightBg="#ffffff" />
      <FormationTargetAudience />

      <AboutMe /> {/* "Pourquoi collaborer avec moi ?" section */}

      <WhiteToGray grayBg="#f8fafc" />
      <FormationCoreSkills />
      <LightToDark lightBg="#F0F4F8" darkBg="#040a23" />
      <FormationContent /> {/* "La valeur réelle de ce que vous obtenez" section */}
      <DarkToLight darkBg="#132873" lightBg="#F3F4F6" />
      <FormationGarantie />

      <Testimonials />

      <WhiteToGray whiteBg="#f8fafc" grayBg="#F3F4F6" />
      <FormationPricing handleNotImplemented={handleNotImplemented} />

      <GrayToWhite grayBg="#F3F4F6" />
      <FormationFaq />
    </>
  );
};

export default FormationPage;