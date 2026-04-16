import React from 'react';
import { Helmet } from 'react-helmet';
import useScrollReveal from '@/hooks/useScrollReveal';

const PolitiqueConfidentialitePage = () => {
  useScrollReveal();
  return (
    <>
      <Helmet>
        <title>Politique de Confidentialité - Elevantal</title>
        <meta name="description" content="Consultez la politique de confidentialité de Elevantal." />
      </Helmet>

      <div className="bg-brand-background min-h-screen py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <h1 className="text-4xl md:text-5xl font-bold text-brand-dark mb-8 reveal">
            Politique de Confidentialité
          </h1>

          <div className="space-y-8 text-gray-700 leading-relaxed">
            <p className="text-lg reveal reveal-d1">
              La présente politique de confidentialité régit la manière dont le site Elevantal recueille, utilise, conserve et divulgue les informations recueillies auprès des utilisateurs (individuellement appelé « Utilisateur ») du site internet (appelé « Site »). La présente politique de confidentialité s'applique au Site et à tous les produits et services offerts par Elevantal.
            </p>

            <section className="reveal">
              <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-4">
                Données d'identification personnelle
              </h2>
              <p className="mb-4">
                Nous pouvons recueillir des données d'identification personnelle des Utilisateurs de différentes manières, y compris, mais sans s'y limiter, lorsque les Utilisateurs visitent notre Site, s'inscrivent sur le Site, s'abonnent aux courriels électroniques d'informations, et en lien avec d'autres activités, services, caractéristiques ou ressources que nous mettons à disposition sur notre Site.
              </p>
              <p className="mb-4">
                Les Utilisateurs peuvent être invités à fournir, le cas échéant, une adresse électronique. Les Utilisateurs peuvent toutefois visiter notre Site anonymement. Nous collectons certaines données d'identification personnelle des Utilisateurs seulement s'ils nous les communiquent volontairement.
              </p>
              <p>
                Les Utilisateurs peuvent toujours refuser de fournir des données d'identification personnelle, en sachant que ce refus peut les empêcher d'accéder à certaines activités liées au Site.
              </p>
            </section>

            <section className="reveal">
              <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-4">
                Données d'identification non personnelles
              </h2>
              <p>
                Nous pouvons collecter des données d'identification non personnelles sur les Utilisateurs chaque fois qu'ils interagissent avec notre Site. Les informations d'identification non personnelles peuvent inclure le nom du navigateur, le type d'ordinateur et des informations techniques sur les moyens de connexion à notre Site utilisés par les Utilisateurs, tels que le système d'exploitation et les fournisseurs de services Internet utilisés, ainsi que d'autres informations similaires.
              </p>
            </section>

            <section className="reveal">
              <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-4">
                Cookies de navigateur web
              </h2>
              <p className="mb-4">
                Notre Site peut utiliser des « cookies » pour améliorer l'expérience de l'Utilisateur. Le navigateur web de l'Utilisateur place des cookies sur son disque dur à des fins d'archivage, pouvant parfois permettre de suivre les informations le concernant.
              </p>
              <p>
                L'Utilisateur peut choisir de configurer son navigateur web pour qu'il refuse les cookies, ou pour être averti lorsque des cookies sont collectés. Dans ce cas, veuillez noter que certaines parties du Site peuvent ne pas fonctionner correctement.
              </p>
            </section>

            <section className="reveal">
              <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-4">
                Utilisation des données collectées
              </h2>
              <p className="mb-4">
                Elevantal peut recueillir et utiliser les données personnelles des Utilisateurs :
              </p>
              
              <ul className="space-y-4 ml-6">
                <li className="flex items-start">
                  <span className="text-brand-blue font-bold mr-3 mt-1">•</span>
                  <div>
                    <h3 className="font-semibold text-brand-dark mb-2">Pour améliorer le service client</h3>
                    <p>Les informations que vous nous fournissez nous permettent de répondre plus efficacement à vos demandes et à vos besoins d'assistance.</p>
                  </div>
                </li>
                
                <li className="flex items-start">
                  <span className="text-brand-blue font-bold mr-3 mt-1">•</span>
                  <div>
                    <h3 className="font-semibold text-brand-dark mb-2">Pour personnaliser l'expérience Utilisateur</h3>
                    <p>Nous pouvons utiliser les données en les agrégeant pour comprendre comment les catégories d'Utilisateurs utilisent les services et les ressources fournis sur notre Site.</p>
                  </div>
                </li>
                
                <li className="flex items-start">
                  <span className="text-brand-blue font-bold mr-3 mt-1">•</span>
                  <div>
                    <h3 className="font-semibold text-brand-dark mb-2">Pour envoyer des courriels électroniques périodiques</h3>
                    <p className="mb-2">
                      Nous pouvons utiliser l'adresse électronique communiquée pour envoyer à l'Utilisateur des informations et des mises à jour concernant sa commande ou son abonnement. Elle peut également être utilisée pour répondre à ses demandes, questions et autres requêtes.
                    </p>
                    <p>
                      Si l'Utilisateur décide de s'inscrire à notre liste de diffusion, il recevra des courriels électroniques qui peuvent notamment contenir des nouvelles de Elevantal, des mises à jour, des informations sur les produits ou services connexes, etc. Si, à tout moment, l'Utilisateur souhaite se désabonner de la réception de futurs courriels électronique, nous incluons des instructions détaillées de désabonnement au bas de chaque courriel électronique. L'Utilisateur peut également nous contacter via notre Site.
                    </p>
                  </div>
                </li>
              </ul>
            </section>

            <section className="reveal">
              <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-4">
                Comment nous protégeons vos données
              </h2>
              <p>
                Nous adoptons des pratiques appropriées de collecte, de stockage et de traitement des données ainsi que des mesures de sécurité pour nous protéger de tout accès non autorisé, d'altération, de divulgation ou de destruction de vos données personnelles (nom d'Utilisateur, mot de passe, informations de transaction et données stockées sur notre Site).
              </p>
            </section>

            <section className="reveal">
              <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-4">
                Partage de vos données personnelles
              </h2>
              <p className="mb-4">
                Nous ne vendons, n'échangeons ou ne louons aucune donnée d'identification personnelle des Utilisateurs à des tiers extérieurs.
              </p>
              <p>
                Nous pouvons partager des informations démographiques génériques, agrégées et indépendantes de toute données d'identification personnelle, concernant les visiteurs et les Utilisateurs du Site avec nos partenaires commerciaux, nos affiliés de confiance et nos annonceurs aux fins décrites ci-dessus.
              </p>
            </section>

            <section className="reveal">
              <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-4">
                Sites internet de tiers
              </h2>
              <p className="mb-4">
                Les Utilisateurs peuvent trouver, sur notre Site, des publicités ou d'autres contenus qui renvoient aux sites et services de nos partenaires, fournisseurs, annonceurs, sponsors, concédants de licence et autres tiers. Nous ne contrôlons pas le contenu ou les liens qui apparaissent sur ces sites internet de tiers, et nous ne sommes pas responsables des pratiques employées par les sites internet reliés vers notre Site ou à partir de notre Site.
              </p>
              <p className="mb-4">
                En outre, ces sites internet, y compris leur contenu et leurs liens, peuvent être en constante évolution. Ces sites et services peuvent avoir leurs propres politiques de confidentialité et de service à la clientèle.
              </p>
              <p>
                La navigation et l'interaction sur tout autre site internet, y compris les sites internet qui ont un lien vers ou depuis notre Site, sont soumises aux conditions et politiques qui leurs sont propres.
              </p>
            </section>

            <section className="reveal">
              <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-4">
                Modifications de la présente politique de confidentialité
              </h2>
              <p className="mb-4">
                L'entreprise a la possibilité de mettre à jour cette politique de confidentialité à tout moment. Lorsque nous la mettrons à jour, nous réviserons la date de mise à jour figurant au bas de cette page.
              </p>
              <p>
                Nous encourageons les Utilisateurs à consulter fréquemment cette page pour prendre connaissance des changements éventuels, et ainsi rester informés de notre contribution à la protection des données personnelles que nous recueillons. Vous reconnaissez et acceptez qu'il est de votre responsabilité de revoir périodiquement cette politique de confidentialité et de prendre connaissance des modifications.
              </p>
            </section>

            <section className="reveal">
              <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-4">
                Votre acceptation de ces conditions
              </h2>
              <p className="mb-4">
                En utilisant ce Site, vous signifiez votre acceptation de cette politique de confidentialité. Si vous n'acceptez pas cette politique, veuillez ne pas utiliser notre Site.
              </p>
              <p>
                Si vous utilisez le Site après la modification de la présente politique de confidentialité, vous serez considéré comme ayant accepté ces modifications.
              </p>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default PolitiqueConfidentialitePage;