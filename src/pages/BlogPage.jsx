import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import BlogHero from '@/components/blog/BlogHero';
import BlogGrid from '@/components/blog/BlogGrid';

const BlogPage = ({ handleNotImplemented }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Newsletter - Elevantal</title>
        <meta name="description" content="Conseils, astuces et actualités sur le recrutement et l'expérience candidat." />
      </Helmet>
      <div className="bg-white">
        <BlogHero /> {/* Removed handleNotImplemented prop since button now has direct action */}
        <BlogGrid handleNotImplemented={handleNotImplemented} />
      </div>
    </>
  );
};

export default BlogPage;