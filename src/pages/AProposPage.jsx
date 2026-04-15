import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import AboutMe from '@/components/landing/AboutMe';

const AProposPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
        {/* Vous pouvez ajouter d'autres sections spécifiques à la page "À propos" ici */}
      </div>
    </>
  );
};

export default AProposPage;