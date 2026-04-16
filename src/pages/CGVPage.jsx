import React from 'react';
import { Helmet } from 'react-helmet';
import useScrollReveal from '@/hooks/useScrollReveal';

const CGVPage = () => {
  useScrollReveal();
  return (
    <>
      <Helmet>
        <title>Conditions Générales de Vente - ZAI Talent</title>
        <meta name="description" content="Consultez les Conditions Générales de Vente de ZAI Talent." />
      </Helmet>
      <div className="max-w-4xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold text-brand-dark mb-8 reveal">Conditions Générales de Vente</h1>
        <div className="prose lg:prose-xl reveal reveal-d1">
          <p>Contenu des conditions générales de vente à venir.</p>
        </div>
      </div>
    </>
  );
};

export default CGVPage;