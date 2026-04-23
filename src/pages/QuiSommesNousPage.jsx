import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import QuiSommesNousHero from '@/components/common/QuiSommesNousHero.jsx';
import FloatingStatsCard from '@/components/common/FloatingStatsCard';
import Testimonials from '@/components/landing/Testimonials';
import CTA from '@/components/landing/CTA.jsx';
import RoiSection from '@/components/common/RoiSection.jsx';
import GenerateurRefusPromo from '@/components/common/GenerateurRefusPromo.jsx';
import useScrollReveal from '@/hooks/useScrollReveal';
import { DarkToLight, LightToDark } from '@/components/common/WaveSeparator';

const QuiSommesNousPage = ({ handleNotImplemented }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useScrollReveal();

  return (
    <>
      <Helmet>
        <title>Qui sommes-nous ? - Elevantal</title>
        <meta name="description" content="Découvrez nos services, notre méthodologie et pourquoi Elevantal est le partenaire idéal pour transformer votre expérience candidat." />
      </Helmet>

      <QuiSommesNousHero handleNotImplemented={handleNotImplemented} />

      {/* FloatingStatsCard is self-contained with responsive grid layout (stack on mobile, row on desktop) */}
      <FloatingStatsCard />
      <DarkToLight darkBg="#0a1642" lightBg="#F9FAFB" />

      <RoiSection handleNotImplemented={handleNotImplemented} />

      <LightToDark lightBg="#F9FAFB" darkBg="#040a23" />
      <GenerateurRefusPromo />
      <DarkToLight darkBg="#132873" lightBg="#F8FAFC" />

      <Testimonials />

      <CTA />
    </>
  );
};

export default QuiSommesNousPage;