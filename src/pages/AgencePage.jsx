import React from 'react';
import { Helmet } from 'react-helmet';
import useScrollReveal from '@/hooks/useScrollReveal';

const AgencePage = ({ handleNotImplemented }) => {
  useScrollReveal();
  return (
    <>
      <Helmet>
        <title>L'agence ZAI Talent - Notre histoire</title>
        <meta name="description" content="Découvrez l'histoire, la vision et les valeurs de l'agence ZAI Talent." />
      </Helmet>
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center p-8 reveal">
          <h1 className="text-4xl font-bold text-brand-dark mb-4 reveal reveal-d1">L'agence ZAI Talent</h1>
          <p className="text-lg text-gray-600 reveal reveal-d2">Cette page est en cours de construction.</p>
          <button onClick={handleNotImplemented} className="mt-6 bg-brand-blue-gradient text-white px-6 py-3 rounded-lg font-semibold reveal reveal-d3">
            Être notifié
          </button>
        </div>
      </div>
    </>
  );
};

export default AgencePage;