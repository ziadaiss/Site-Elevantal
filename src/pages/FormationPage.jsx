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

const FormationPage = ({ handleNotImplemented }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
      
      <FormationTargetAudience />
      
      <AboutMe /> {/* "Pourquoi collaborer avec moi ?" section */}

      <FormationCoreSkills />

      <FormationContent /> {/* "La valeur réelle de ce que vous obtenez" section */}
      
      {/* MagicWandSection has been removed as requested */}
      
      <Testimonials />

      <FormationPricing handleNotImplemented={handleNotImplemented} />
      
      <FormationFaq />
    </>
  );
};

export default FormationPage;