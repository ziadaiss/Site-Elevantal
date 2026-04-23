import React from 'react';
import { Helmet } from 'react-helmet';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Toaster } from '@/components/ui/toaster';
import { useToast } from '@/components/ui/use-toast';
import Navbar from '@/components/landing/Navbar';
import Footer from '@/components/landing/Footer';
import HomePage from '@/pages/HomePage';
import FormationPage from '@/pages/FormationPage';
import AgencePage from '@/pages/AgencePage';
import AvisClientsPage from '@/pages/AvisClientsPage';
import AProposPage from '@/pages/AProposPage';
import BlogPage from '@/pages/BlogPage';
import RecruitmentBoostPage from '@/pages/RecruitmentBoostPage';
import Article1Page from '@/pages/articles/Article1Page';
import Article2Page from '@/pages/articles/Article2Page';
import Article3Page from '@/pages/articles/Article3Page';
import MentionsLegalesPage from '@/pages/MentionsLegalesPage';
import PolitiqueConfidentialitePage from '@/pages/PolitiqueConfidentialitePage';
import CGVPage from '@/pages/CGVPage';
import EbookPage from '@/pages/EbookPage';
import QuiSommesNousPage from '@/pages/QuiSommesNousPage';
import GenerateurRefusPage from '@/pages/GenerateurRefusPage';
import PromptsIAPage from '@/pages/PromptsIAPage';

function App() {
  const { toast } = useToast();
  const location = useLocation();
  const faviconUrl = "https://storage.googleapis.com/hostinger-horizons-assets-prod/9fdb5cd6-7395-42e7-a897-ebea996e876c/bea6ff5cad83f5f571fa01591b8423b.png";

  const handleNotImplemented = () => {
    toast({
      title: "🚧 Cette fonctionnalité n'est pas encore implémentée",
      description: "Mais ne vous inquiétez pas ! Vous pouvez la demander dans votre prochaine requête ! 🚀",
      duration: 4000
    });
  };

  return (
    <>
      <Helmet>
        <title>Elevantal - Recruter sans se faire ghoster</title>
        <meta name="description" content="Découvrez nos services pour transformer votre processus de recrutement et attirer les meilleurs talents." />
        <link rel="icon" type="image/png" href={faviconUrl} />
      </Helmet>

      <div className="bg-white text-brand-dark font-sans">
        <Navbar handleNotImplemented={handleNotImplemented} />
        <main>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<HomePage handleNotImplemented={handleNotImplemented} />} />
            <Route path="/tableur-experience-candidat" element={<EbookPage handleNotImplemented={handleNotImplemented} />} />
            <Route path="/formation-rRevelation" element={<FormationPage handleNotImplemented={handleNotImplemented} />} />
            <Route path="/recruitment-experience-boost" element={<RecruitmentBoostPage handleNotImplemented={handleNotImplemented} />} />
            <Route path="/generateur-refus" element={<GenerateurRefusPage />} />
            <Route path="/10-prompts-ia" element={<PromptsIAPage />} />
            <Route path="/agence" element={<AgencePage handleNotImplemented={handleNotImplemented} />} />
            <Route path="/avis-clients" element={<AvisClientsPage handleNotImplemented={handleNotImplemented} />} />
            <Route path="/a-propos" element={<AProposPage handleNotImplemented={handleNotImplemented} />} />
            <Route path="/qui-sommes-nous" element={<QuiSommesNousPage handleNotImplemented={handleNotImplemented} />} />
            <Route path="/newsletter" element={<BlogPage handleNotImplemented={handleNotImplemented} />} />
            <Route path="/blog/experience-candidat-incontournable-2025" element={<Article1Page />} />
            <Route path="/blog/le-vrai-cout-dun-refus-impersonnel" element={<Article2Page />} />
            <Route path="/blog/recruter-attirer-strategies-pme-eti" element={<Article3Page />} />
            <Route path="/mentions-legales" element={<MentionsLegalesPage />} />
            <Route path="/politique-de-confidentialite" element={<PolitiqueConfidentialitePage />} />
            <Route path="/cgv" element={<CGVPage />} />
          </Routes>
        </main>
        <Footer handleNotImplemented={handleNotImplemented} />
        <Toaster />
      </div>
    </>
  );
}

export default App;