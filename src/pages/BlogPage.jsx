import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import BlogHero from '@/components/blog/BlogHero';
import BlogGrid from '@/components/blog/BlogGrid';
import useScrollReveal from '@/hooks/useScrollReveal';
import { DarkToLight } from '@/components/common/WaveSeparator';

const BlogPage = ({ handleNotImplemented }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useScrollReveal();

  return (
    <>
      <Helmet>
        <title>Newsletter - Elevantal</title>
        <meta name="description" content="Conseils, astuces et actualités sur le recrutement et l'expérience candidat." />
      </Helmet>
      <BlogHero />
      <DarkToLight darkBg="#132873" lightBg="#F9FAFB" />
      <BlogGrid handleNotImplemented={handleNotImplemented} />
    </>
  );
};

export default BlogPage;