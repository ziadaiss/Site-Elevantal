import React from 'react';
import { Helmet } from 'react-helmet';

const AgencePage = ({ handleNotImplemented }) => {
  return (
    <>
      <Helmet>
        <title>L'agence ZAI Talent - Notre histoire</title>
        <meta name="description" content="Découvrez l'histoire, la vision et les valeurs de l'agence ZAI Talent." />
      </Helmet>
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center p-8">
          <h1 className="text-4xl font-bold text-brand-dark mb-4">L'agence ZAI Talent</h1>
          <p className="text-lg text-gray-600">Cette page est en cours de construction.</p>
          <button onClick={handleNotImplemented} className="mt-6 bg-brand-blue-gradient text-white px-6 py-3 rounded-lg font-semibold">
            Être notifié
          </button>
        </div>
      </div>
    </>
  );
};

export default AgencePage;