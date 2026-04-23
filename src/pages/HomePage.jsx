import React from 'react';
import HeroCarousel from '@/components/landing/HeroCarousel';
import Services from '@/components/landing/Services';
import Faq from '@/components/landing/Faq';
import CTA from '@/components/landing/CTA';
import AboutMe from '@/components/landing/AboutMe';
import Frustrations from '@/components/landing/Frustrations';
import StatisticsSection from '@/components/common/StatisticsSection';
import Testimonials from '@/components/landing/Testimonials';
import FloatingStatsCard from '@/components/common/FloatingStatsCard';
import useScrollReveal from '@/hooks/useScrollReveal';
import { DarkToLight, LightToDark, WhiteToGray, GrayToWhite } from '@/components/common/WaveSeparator';

const HomePage = ({ handleNotImplemented }) => {
  useScrollReveal();
  return (
    <>
      <div style={{ background: '#0a1642' }}>
        <HeroCarousel />
        <FloatingStatsCard />
        <DarkToLight darkBg="#0a1642" lightBg="#F3F4F6" />
      </div>
      <StatisticsSection />
      <Frustrations />
      <GrayToWhite grayBg="#f9fafb" />
      <AboutMe />
      <LightToDark lightBg="#ffffff" darkBg="#03091f" />
      <Services handleNotImplemented={handleNotImplemented} />
      <DarkToLight darkBg="#152d7f" lightBg="#F0F4F8" />
      <Testimonials />
      <GrayToWhite grayBg="#f8fafc" />
      <Faq />
      <WhiteToGray grayBg="#f9fafb" />
      <CTA />
    </>
  );
};

export default HomePage;