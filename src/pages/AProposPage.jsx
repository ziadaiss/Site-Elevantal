import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import AboutMe from '@/components/landing/AboutMe';
import useScrollReveal from '@/hooks/useScrollReveal';

const AProposPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useScrollReveal();

  return (
    <>
      <Helmet>
        <title>À Propos - Elevantal</title>
        <meta name="description" content="Découvrez le parcours et la vision de Ziad, fondateur d'Elevantal et expert en expérience candidat." />
      </Helmet>
      <div className="bg-white">
        <div className="pt-24 md:pt-32">
          <AboutMe />
        </div>
      </div>
    </>
  );
};

export default AProposPage;