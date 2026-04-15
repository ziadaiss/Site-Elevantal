import React from 'react';
import Hero from '@/components/landing/Hero';
import Services from '@/components/landing/Services';
import Faq from '@/components/landing/Faq';
import CTA from '@/components/landing/CTA';
import AboutMe from '@/components/landing/AboutMe';
import Frustrations from '@/components/landing/Frustrations';
import StatisticsSection from '@/components/common/StatisticsSection';
import Testimonials from '@/components/landing/Testimonials';
import FloatingStatsCard from '@/components/common/FloatingStatsCard';

const HomePage = ({ handleNotImplemented }) => {
  return (
    <>
      <Hero handleNotImplemented={handleNotImplemented} />
      {/* FloatingStatsCard overlaps the bottom of Hero and top of StatisticsSection */}
      <FloatingStatsCard />
      <StatisticsSection />
      <Frustrations />
      <AboutMe />
      <Services handleNotImplemented={handleNotImplemented} />
      <Testimonials />
      <Faq />
      <CTA />
    </>
  );
};

export default HomePage;