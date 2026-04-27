import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import FormationHero from '@/components/formation/FormationHero';
import FormationCoreSkills from '@/components/formation/FormationCoreSkills';
import FormationTargetAudience from '@/components/formation/FormationTargetAudience';
import AboutMe from '@/components/landing/AboutMe';
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

  return (
    <>
      <Helmet>
        <title>Formation RHévélation - Elevantal</title>
        <meta name="description" content="Recrutez avec impact et créez une expérience candidat mémorable grâce à notre formation pratico-pratique." />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <FormationHero handleNotImplemented={handleNotImplemented} />
      <DarkToLight darkBg="#132873" lightBg="#ffffff" />
      <FormationTargetAudience />

      <AboutMe /> {/* "Pourquoi collaborer avec moi ?" section */}

      <WhiteToGray grayBg="#f8fafc" />
      <FormationCoreSkills />
      <LightToDark lightBg="#F0F4F8" darkBg="#040a23" />
      <FormationContent /> {/* "La valeur réelle de ce que vous obtenez" section */}
      <DarkToLight darkBg="#132873" lightBg="#F3F4F6" />
      <FormationGarantie />

      <WhiteToGray whiteBg="#f8fafc" grayBg="#F3F4F6" />
      <FormationPricing handleNotImplemented={handleNotImplemented} />

      <GrayToWhite grayBg="#F3F4F6" />
      <FormationFaq />
    </>
  );
};

export default FormationPage;