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

const Article2Page = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useScrollReveal();

  const coverImage = "https://horizons-cdn.hostinger.com/9fdb5cd6-7395-42e7-a897-ebea996e876c/52edae4d2d6d0b76ce883739c56ee0e7.png";

  return (
    <>
      <Helmet>
        <title>#2 &ndash; Le vrai co&ucirc;t d&apos;un refus impersonnel - Elevantal</title>
        <meta name="description" content="Chaque point de contact avec un candidat est un point de bascule. D&eacute;couvrez pourquoi le message de refus est l&apos;un des moments les plus sensibles de l&apos;exp&eacute;rience candidat." />
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
              #2 – Le vrai co{"û"}t d{"'"}un refus impersonnel
            </h1>
            <div className="flex items-center justify-center gap-4 mt-6 text-sm text-white/70">
              <span>Ziad Aissaoua</span>
              <span>•</span>
              <span>07 Ao{"û"}t, 2025</span>
              <span>•</span>
              <span>5 min de lecture</span>
            </div>
          </motion.div>
        </div>
      </header>

      <main className="py-16 lg:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <article className="prose lg:prose-xl prose-indigo mx-auto text-gray-700">

            <p>Chaque point de contact avec un candidat est un point de bascule : pour l{"'"}image, la r{"é"}putation et l{"'"}engagement. Et parmi ces points de contact, il y en a un que beaucoup sous-estime encore trop : <strong>le message de refus</strong>.</p>

            <p className="mt-8">C{"'"}est court.<br/>
            C{"'"}est codifi{"é"}.<br/>
            C{"'"}est souvent impersonnel.</p>

            <p>Mais c{"'"}est aussi l{"'"}un des moments les plus sensibles de l{"'"}exp{"é"}rience candidat.</p>

            <p className="mt-8">{"👉"} En voici deux par exemple qui font plut{"ô"}t t{"â"}che :</p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              className="my-8 space-y-6"
            >
              <img
                src="/images/newsletter-2-refus-1.png.jpg"
                alt="Exemple de mail de refus impersonnel #1"
                className="rounded-lg shadow-lg mx-auto w-full max-w-2xl h-auto"
              />
              <img
                src="/images/newsletter-2-refus-2.png.jpg"
                alt="Exemple de mail de refus impersonnel #2"
                className="rounded-lg shadow-lg mx-auto w-full max-w-2xl h-auto"
              />
            </motion.div>

            <SectionTitle>Le probl{"è"}me, ce n{"'"}est pas de dire non</SectionTitle>
            <p><strong>C{"'"}est de le dire mal.</strong></p>

            <p>Sur ces 2 messages de refus, tous avaient un point commun : ils pensaient bien faire, mais cr{"é"}aient de la distance, du flou, et parfois m{"ê"}me de la blessure.</p>
            <p>Pire : dans certains cas, ils n{"'"}{"é"}taient m{"ê"}me pas sign{"é"}s.</p>

            <SectionTitle>Voici ce que ressent r{"é"}ellement un candidat apr{"è"}s {"ç"}a</SectionTitle>
            <p>Il a pris du temps pour postuler.<br/>
            Parfois, parce que cela existe toujours, de faire un test.<br/>
            Il a pass{"é"} un entretien, parfois deux ou trois.<br/>
            Il s{"'"}est projet{"é"} de mani{"è"}re r{"é"}aliste.</p>

            <p className="mt-8">Et tout ce qu{"'"}il re{"ç"}oit ensuite, c{"'"}est litt{"é"}ralement un :</p>

            <QuoteBlock>
              {"\""}Nous n{"'"}allons pas donner suite. Bonne continuation.{"\""}
            </QuoteBlock>

            <p>Sans retour personnalis{"é"}.<br/>
            Sans feedback constructif.<br/>
            Sans r{"é"}elle consid{"é"}ration finalement.</p>

            <SectionTitle>Et les cons{"é"}quences sont r{"é"}elles {"📉"}</SectionTitle>
            <ul>
              <li>{"👨‍💼"} <strong>1 candidat sur 2</strong> ne re{"ç"}oit aucun retour apr{"è"}s un entretien.</li>
              <li>{"🏣"} <strong>72 % des candidats</strong> disent qu{"'"}un message de refus mal formul{"é"} affecte leur image de l{"'"}entreprise.</li>
              <li>{"👎"} Et <strong>plus de 60 %</strong> ne recommanderont jamais une entreprise apr{"è"}s une mauvaise exp{"é"}rience de candidature.</li>
            </ul>

            <p className="mt-8">Ce n{"'"}est pas qu{"'"}une question d{"'"}ego ou de forme.<br/>
            <strong>Tout est une question de respect et de relationnel.</strong></p>

            <SectionTitle>Parce qu{"'"}un candidat, m{"ê"}me non retenu, peut rester ! {"🤚"}</SectionTitle>
            <ul>
              <li>Un prescripteur</li>
              <li>Un futur talent</li>
              <li>Un ambassadeur{"…"} ou un d{"é"}tracteur</li>
            </ul>

            <p>Et les lignes entre eux sont minces.</p>
            <p><strong>Tout se joue dans la fa{"ç"}on dont vous terminez l{"'"}histoire.</strong></p>

            <p className="mt-8">Ce que vous pensez {"ê"}tre un simple message administratif{"…"}<br/>
            {"…"}devient un <strong>acte de communication {"à"} haute valeur</strong> {"à"} prendre en compte dans sa strat{"é"}gie !</p>

            <p className="mt-8">Et le pire, c{"'"}est qu{"'"}il est souvent automatis{"é"}.<br/>
            Envoy{"é"} en masse.<br/>
            Sans pr{"é"}nom.<br/>
            Sans humanit{"é"}.</p>

            <p className="mt-4">Vaux mieux privil{"é"}gier la qualit{"é"} qu{"'"}{"à"} la quantit{"é"}, et c{"'"}est aussi valable dans les secteurs en tension.</p>

            <SectionTitle>{"À"} l{"'"}inverse, un refus bien formul{"é"} peut laisser une trace positive {"✨"}</SectionTitle>
            <p>Un message qui remercie sinc{"è"}rement.<br/>
            Qui valorise ce que la personne a apport{"é"}.<br/>
            Qui explique, m{"ê"}me bri{"è"}vement.<br/>
            Et qui laisse une porte ouverte.</p>

            <p className="mt-8"><strong>On peut dire non avec respect, clart{"é"} et {"é"}l{"é"}gance.</strong></p>

            <p className="mt-8">En voici la preuve et d{"î"}tes moi r{"é"}ellement ce que vous en ressentez :</p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              className="my-8"
            >
              <img
                src="/images/newsletter-2-refus-3.png.jpg"
                alt="Exemple de mail de refus bienveillant"
                className="rounded-lg shadow-lg mx-auto w-full max-w-2xl h-auto"
              />
            </motion.div>

            <p>Vous voyez o{"ù"} je veux en venir ?</p>

            <SectionTitle>{"🔵"} {"À"} retenir</SectionTitle>
            <p>En 2025, ce sont les candidats qui {"é"}valuent votre marque.<br/>
            Pas sur ce que vous promettez.<br/>
            <strong>Mais sur ce qu{"'"}ils vivent</strong> et ce jusqu{"'"}au bout, soit {"à"} la fin de l{"'"}onboarding.</p>

            <p className="mt-8">{"👉"} <strong>Et si vous remettiez un peu d{"'"}humain dans votre process de recrutement ?</strong></p>

            <hr className="my-12" />

            <p>J{"'"}esp{"è"}re que cette {"é"}dition vous a plu !</p>
            <p>{"À"} jeudi prochain,</p>
            <p className="mt-4"><strong>Ziad</strong></p>
            <p className="mt-4 text-sm text-gray-500">Si vous avez aim{"é"} cet {"é"}pisode, n{"'"}h{"é"}sitez pas {"à"} me soutenir avec un petit {"❤️"} cela donnera un coup de pouce {"à"} cette newsletter !</p>

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
export default Article2Page;
