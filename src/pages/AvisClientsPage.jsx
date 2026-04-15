import React from 'react';
import { Helmet } from 'react-helmet';
import Testimonials from '@/components/landing/Testimonials';

const AvisClientsPage = () => {
  return (
    <>
      <Helmet>
        <title>Avis Clients - ZAI Talent</title>
        <meta name="description" content="Découvrez ce que nos clients pensent de notre accompagnement et de nos formations." />
      </Helmet>
      <div className="pt-24">
        <Testimonials />
      </div>
    </>
  );
};

export default AvisClientsPage;