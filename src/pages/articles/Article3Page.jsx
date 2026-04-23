import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import useScrollReveal from '@/hooks/useScrollReveal';

const QuoteBlock = ({ children }) => (
  <blockquote className="blockquote-custom">
    <p>{children}</p>
  </blockquote>
);

const SectionTitle = ({ children }) => (
  <h3 className="text-2xl lg:text-3xl font-bold text-brand-purple mt-12 mb-6">{children}</h3>
);

const Article3Page = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useScrollReveal();

  const coverImage = "/images/newsletter-3-cover.png.png";

  return (
    <>
      <Helmet>
        <title>#3 – Recruter et attirer : stratégies gagnantes pour PME/ETI - Elevantal</title>
        <meta name="description" content="Découvrez 5 stratégies pratiques pour optimiser votre processus de recrutement en PME et attirer les meilleurs profils." />
      </Helmet>

      <header className="relative text-white py-20 md:py-28 reveal overflow-hidden">
        <div className="absolute inset-0">
          <img src={coverImage} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/70"></div>
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block bg-white/20 backdrop-blur-sm text-white text-sm font-semibold px-4 py-1.5 rounded-full mb-6">Les incontournables</span>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
              #3 – Recruter et attirer : stratégies gagnantes pour PME/ETI
            </h1>
            <div className="flex items-center justify-center gap-4 mt-6 text-sm text-white/70">
              <span>Ziad Aissaoua</span>
              <span>•</span>
              <span>16 Avril, 2026</span>
              <span>•</span>
              <span>5 min de lecture</span>
            </div>
          </motion.div>
        </div>
      </header>

      <main className="py-16 lg:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <article className="prose lg:prose-xl prose-indigo mx-auto text-gray-700 reveal">
            <p>Dans un march{"é"} o{"ù"} la p{"é"}nurie de talents est omnipr{"é"}sente, il est essentiel pour les PME d{"'"}optimiser leur processus de recrutement afin d{"'"}attirer et de retenir les meilleurs profils.</p>
            <p>Le d{"é"}fi est d{"'"}autant plus grand que les candidats ne consacrent en moyenne que <strong>3 {"à"} 5 minutes {"à"} lire une offre d{"'"}emploi</strong> avant de d{"é"}cider s{"'"}ils postulent ou non. Par cons{"é"}quent, offrir une exp{"é"}rience candidat fluide et engageante devient une priorit{"é"} pour rester comp{"é"}titif.</p>
            <p className="mt-8"><strong>Pour vous aider {"à"} relever ce d{"é"}fi, voici cinq strat{"é"}gies pratiques que vous pouvez mettre en place d{"è"}s aujourd{"'"}hui :</strong></p>

            <SectionTitle>1. D{"é"}finissez vos crit{"è"}res de s{"é"}lection en amont</SectionTitle>
            <p>{"É"}tablissez une liste de crit{"è"}res essentiels pour filtrer les candidatures. Par exemple, d{"é"}terminez les comp{"é"}tences techniques et les qualit{"é"}s interpersonnelles qui sont indispensables pour le poste.</p>
            <p>Cela vous permettra de concentrer vos efforts sur les profils vraiment adapt{"é"}s et de gagner du temps.</p>
            <QuoteBlock>
              Pensez {"é"}galement {"à"} utiliser des formulaires de pr{"é"}qualification en ligne pour simplifier le processus.
            </QuoteBlock>

            <SectionTitle>2. Impliquez vos {"é"}quipes dans le recrutement</SectionTitle>
            <p>Impliquer vos coll{"è"}gues dans les entretiens renforce non seulement la culture d{"'"}entreprise, mais am{"é"}liore aussi l{"'"}exp{"é"}rience des candidats.</p>
            <p>En les int{"é"}grant dans la r{"é"}daction des descriptions de poste et en les faisant participer aux entretiens, vous montrez aux candidats qu{"'"}ils rejoindront une {"é"}quipe soud{"é"}e, ce qui peut {"ê"}tre un atout ind{"é"}niable lors de la prise de d{"é"}cision.</p>

            <SectionTitle>3. Donnez des retours rapides et constructifs</SectionTitle>
            <p>Donnez des retours rapides apr{"è"}s chaque {"é"}tape du processus. Qu{"'"}il s{"'"}agisse d{"'"}un refus ou d{"'"}une invitation {"à"} un entretien, fournir un feedback constructif peut am{"é"}liorer votre marque employeur.</p>
            <QuoteBlock>
              M{"ê"}me un refus bien argument{"é"} peut laisser une impression positive. Cela d{"é"}montre votre professionnalisme et votre respect pour le temps des candidats.
            </QuoteBlock>

            <SectionTitle>4. Mettez en avant vos projets et vos ambitions</SectionTitle>
            <p>Mettez en avant vos projets et technologies d{"è"}s le premier entretien. Communiquer sur vos innovations et les {"é"}volutions de votre entreprise peut susciter l{"'"}int{"é"}r{"ê"}t des candidats, surtout ceux qui cherchent {"à"} s{"'"}investir dans des projets prometteurs.</p>
            <p>Montrez comment ils pourraient contribuer {"à"} la r{"é"}alisation de ces ambitions.</p>

            <SectionTitle>5. Pr{"é"}parez un plan d{"'"}int{"é"}gration concret</SectionTitle>
            <p>Soutenez un plan d{"'"}int{"é"}gration concret d{"è"}s le processus de recrutement. En offrant aux candidats un aper{"ç"}u de leur premi{"è"}re journ{"é"}e et des {"é"}tapes d{"'"}int{"é"}gration, vous attirez ceux qui souhaitent un environnement de travail structur{"é"}.</p>
            <p>Cela peut r{"é"}duire leur anxi{"é"}t{"é"} et am{"é"}liorer leur engagement d{"è"}s le d{"é"}part.</p>

            <hr className="my-12" />

            <SectionTitle>En r{"é"}sum{"é"} {"✨"}</SectionTitle>
            <p>En mettant en {"œ"}uvre ces strat{"é"}gies, les PME peuvent non seulement optimiser leurs d{"é"}lais de recrutement, mais {"é"}galement am{"é"}liorer la qualit{"é"} des candidats recrut{"é"}s.</p>
            <p>Un processus de s{"é"}lection bien structur{"é"} permet de r{"é"}duire les d{"é"}lais tout en alignant les comp{"é"}tences des nouveaux employ{"é"}s avec la mission de l{"'"}entreprise.</p>
            <p className="mt-8"><strong>N{"'"}attendez plus : commencez d{"è"}s aujourd{"'"}hui {"à"} repenser votre approche du recrutement pour transformer vos d{"é"}fis en opportunit{"é"}s !</strong></p>

            <div className="mt-12 text-center">
              <Button asChild size="lg" className="bg-brand-purple text-white hover:bg-brand-purple/90 rounded-lg font-bold text-lg px-8 py-6 transition-transform transform hover:scale-105">
                <Link to="/newsletter">Retour au blog</Link>
              </Button>
            </div>
          </article>
        </div>
      </main>
    </>
  );
};
export default Article3Page;
