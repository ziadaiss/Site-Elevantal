import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const QuoteBlock = ({ children }) => (
  <blockquote className="blockquote-custom">
    <p>{children}</p>
  </blockquote>
);

const SectionTitle = ({ children }) => (
    <h3 className="text-2xl lg:text-3xl font-bold text-brand-purple mt-12 mb-6">{children}</h3>
);

const Article1Page = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Helmet>
        <title>#1 – L’expérience candidat, un incontournable en 2025 ? - ZAI Talent</title>
        <meta name="description" content="Découvrez pourquoi l'expérience candidat est devenue un pilier stratégique pour attirer et retenir les talents." />
      </Helmet>

      <header className="bg-brand-blue-gradient text-white py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-extrabold tracking-tight"
          >
            #1 – L’expérience candidat, un incontournable en 2025 ? 🤔✨
          </motion.h1>
        </div>
      </header>

      <main className="py-16 lg:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <article className="prose lg:prose-xl prose-indigo mx-auto text-gray-700">
            <p>En 2025, l’expérience candidat n’est plus un "plus" pour les entreprises qui recrutent, c’est devenu une nécessité.</p>
            <p>C’est un standard attendu, et une arme stratégique dans un marché du travail sous tension.</p>
            
            <p className="mt-8"><strong>Problème : tout le monde parle d’attirer.</strong></p>
            <ul>
              <li><em>Attirer les meilleurs profils.</em></li>
              <li><em>Attirer plus de candidatures.</em></li>
              <li><em>Attirer vite.</em></li>
            </ul>
            
            <p className="mt-8">Mais une fois qu’on les a attirés… comment on les retient ?</p>
            <p className="mt-8">Entre temps, on passe de futur candidat à candidat.</p>
            <p className="mt-8">Et c’est là que beaucoup se trompent :</p>
            <p>On investit dans des jobboards, des campagnes RH, des promesses bien formulées mais le jour de l’entretien, c’est silence radio.</p>
            <p>Et après un refus ? Aucun feedback et aucun lien.</p>
            <p className="mt-8">Pas étonnant que les candidats disparaissent ou ne recommandent pas l’entreprise.</p>
            
            <SectionTitle>Mais pourquoi ?</SectionTitle>
            <p>Avec une concurrence accrue pour les talents, les candidats ont repris le lead.</p>
            <p>Ils ne choisissent plus leur futur employeur uniquement sur le salaire ou le titre, mais sur ce qu’ils vivent tout au long du parcours de recrutement et dans leur futur poste.</p>
            
            <QuoteBlock>
              🧠 80 % des candidats affirment que l’expérience de recrutement influence leur décision finale.
            </QuoteBlock>
            <QuoteBlock>
              💬 77 % des candidats déclarent n’avoir reçu aucun retour après un entretien.
            </QuoteBlock>
            
            <p>Vous pouvez remarquer que ces chiffres ne sont pas anecdotiques.</p>
            <p>Ils traduisent justement une déconnexion flagrante entre l’intention des entreprises de "soigner leur marque employeur" et la réalité vécue sur le terrain par les candidats.</p>
            
            <SectionTitle>👉 Pourquoi l’expérience candidat est un levier sous-exploité ?</SectionTitle>
            <p>Parce qu’elle est encore souvent reléguée à des aspects purement logistiques :</p>
            <ul>
              <li>"On a envoyé un mail, c’est bon."</li>
              <li>"Ils ont eu un entretien, on leur a déjà tout expliqué"</li>
              <li>"On a vraiment pas le temps de gérer le relationnel."</li>
            </ul>
            
            <p className="mt-8">Mais ces raisonnements ne répondent plus aux attentes d’aujourd’hui.</p>
            <p>Un recrutement est une expérience émotionnelle, loin d’être une procédure administrative.</p>
            <p>Et ce qui est vécu à ce moment précis impacte l’image employeur et même l’image commerciale de l’entreprise.</p>
            
            <QuoteBlock>
              Un candidat insatisfait est 2 fois plus susceptible de partager son expérience qu’un candidat satisfait.
            </QuoteBlock>
            
            <p>C’est le biais de négativité.</p>
            <p>Le cerveau retient plus facilement les moments négatifs que positifs.</p>
            <p>Ici, cela s’explique par le fait qu’une expérience positive est moins fréquemment relatée, car elle est perçue comme "normale" ou "attendue".</p>
            <p>Chaque point de contact, l’annonce, la réponse automatique, l’entretien, le retour (ou l’absence de retour) devient un message de marque, voulu ou non.</p>
            
            <p className="mt-8">D’ailleurs, voici une infographie où je vous donne la méthode F.A.I.R que j’ai partagée récemment sur LinkedIn à appliquer lorsque vous refusez un candidat tout en étant mémorable :</p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              className="my-8"
            >
              <img 
                src="https://storage.googleapis.com/hostinger-horizons-assets-prod/9fdb5cd6-7395-42e7-a897-ebea996e876c/f8d0cb063603d956b0a68ed86990b57d.jpg" 
                alt="Méthode F.A.I.R pour refuser un candidat" 
                className="rounded-lg shadow-lg mx-auto w-full max-w-2xl h-auto"
              />
            </motion.div>
            
            <SectionTitle>Un client = Un candidat, simple et efficace 😊</SectionTitle>
            <p>Prenons un parallèle que tout le monde comprend : vous ne fidélisez pas un client uniquement avec le produit, mais avec l’expérience globale autour de ce produit.</p>
            <p className="mt-8"><strong>Exemple concret :</strong></p>
            <p>vous voyagez dans une ville et souhaitez aller manger italien. Vous ne savez pas où aller : vous regarderez naturellement sur Google quel restaurant il y a aux alentours et les avis clients + note. Entre un restaurant non ou mal noté et un restaurant très bien noté, le choix est vite fait !</p>
            
            <p className="mt-8">👉 Il en va de même pour un candidat, il donne désormais son avis sur le net :</p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              className="my-8"
            >
              <img 
                src="https://storage.googleapis.com/hostinger-horizons-assets-prod/9fdb5cd6-7395-42e7-a897-ebea996e876c/f59feebc5baf8af05ba4249599348687.webp" 
                alt="Avis candidat sur Glassdoor" 
                className="rounded-lg shadow-lg mx-auto w-full max-w-md h-auto"
              />
            </motion.div>
            
            <p>Et pourtant, encore aujourd’hui :</p>
            <ul>
              <li>Les mails sont impersonnels, automatiques, trop souvent inexistants même.</li>
              <li>L’entretien est à sens unique.</li>
              <li>Le feedback est rare, voire totalement absent.</li>
            </ul>
            
            <SectionTitle>En 2025, l’expérience candidat n’est plus un “plus” : c’est un levier business ✨</SectionTitle>
            <p>Elle ne se contente plus de séduire : elle convertit.</p>
            <p>Elle permet également de transformer les candidats non retenus en ambassadeurs potentiels, plutôt qu’en critiques frustrés.</p>
            <p>Et surtout, elle aligne la promesse employeur avec la réalité vécue par les talents.</p>
            <p>C’est ce lien de cohérence qui construit une marque employeur crédible et durable.</p>
            <p><strong>En réalité, ce ne sont plus les candidats qui vous “ghostent”.</strong></p>
            <p><strong>C’est votre processus qui ne leur donne aucune raison de rester.</strong></p>
            
            <hr className="my-12" />

            <SectionTitle>Juste avant de partir… 🔵</SectionTitle>
            <p>C’était ma toute première newsletter, alors merci de l’avoir lue jusqu’ici !</p>
            <p>J’y ai mis mon envie de vous apporter des clés concrètes sur un sujet trop souvent négligé : l’expérience candidat.</p>
            <p>👉 Si vous voulez qu’on continue à creuser ensemble, je vous invite à vous abonné(e) ici : promis pas de spam, juste de l’impact deux fois par mois le jeudi !</p>
            <p>Et si vous avez aimé ce contenu, pensez également à le partager à une personne RH ou recruteur(se) qui pourrait en bénéficier.</p>
            <p className="mt-8">À très vite</p>

            <div className="mt-12 text-center">
              <Button asChild size="lg" className="bg-brand-purple text-white hover:bg-brand-purple/90 rounded-full font-bold text-lg px-8 py-6 transition-transform transform hover:scale-105">
                <Link to="/blog">Retour au blog</Link>
              </Button>
            </div>
          </article>
        </div>
      </main>
    </>
  );
};
export default Article1Page;