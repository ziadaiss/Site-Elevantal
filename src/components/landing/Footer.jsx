import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin } from 'lucide-react';
const FooterLink = ({
  to,
  children,
  isExternal = false
}) => {
  if (isExternal) {
    return <a href={to} target="_blank" rel="noopener noreferrer" className="text-brand-dark hover:text-brand-purple transition-colors duration-300">
        {children}
      </a>;
  }
  return <Link to={to} className="text-brand-dark hover:text-brand-purple transition-colors duration-300">
      {children}
    </Link>;
};
const Footer = ({
  handleNotImplemented
}) => {
  return <footer className="bg-[#e0e7ff] text-brand-dark pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 text-center md:text-left">
          <div className="lg:col-span-4 flex flex-col items-center md:items-start">
            <Link to="/" className="inline-block mb-4">
              <img alt="Elevantal Logo" className="h-16 w-auto" src="https://horizons-cdn.hostinger.com/9fdb5cd6-7395-42e7-a897-ebea996e876c/design-sans-titre-57-hYYNX.png" />
            </Link>
            <p className="text-sm mb-2">
              <strong>Elevantal</strong>
            </p>
            <p className="text-sm leading-relaxed max-w-sm">L'agence qui élève l’expérience candidat pour les RH et recruteurs de start-ups d’aujourd’hui.</p>
            <p className="text-sm leading-relaxed mt-2 max-w-sm">Notre mission ? Les aider à (re)créer une relation de confiance et claire avec leurs candidats et futurs talents, grâce à une expérience candidat mémorable qui transcende leurs marque employeur.</p>
          </div>

          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <p className="font-bold mb-4">À PROPOS DE NOUS</p>
              <ul className="space-y-3">
                <li><FooterLink to="/qui-sommes-nous">À propos de nous</FooterLink></li>
                <li><FooterLink to="/newsletter">Newsletter</FooterLink></li>
              </ul>
            </div>

            <div>
              <p className="font-bold mb-4">NOS SERVICES</p>
              <ul className="space-y-3">
                <li><FooterLink to="/ebook-experience-candidat">Tableur KPIs Expérience Candidat</FooterLink></li>
                <li><FooterLink to="/formation-rRevelation">Formation RHévélation</FooterLink></li>
                <li><FooterLink to="/recruitment-experience-boost">Recruitment Experience Boost</FooterLink></li>
              </ul>
            </div>

            <div className="flex flex-col items-center md:items-start">
              <p className="font-bold mb-4">SUIVEZ-NOUS</p>
              <a href="https://www.linkedin.com/company/elevantal" target="_blank" rel="noopener noreferrer" className="inline-block p-2 rounded-full bg-brand-dark/10 hover:bg-brand-purple/20 transition-colors">
                <Linkedin className="w-6 h-6 text-brand-dark" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-brand-dark/20 flex flex-col sm:flex-row justify-between items-center text-sm">
          <p className="text-gray-600 mb-4 sm:mb-0">© 2025 Elevantal. Tous droits réservés.</p>
          <div className="flex space-x-4">
            <FooterLink to="/mentions-legales">Mentions légales</FooterLink>
            <FooterLink to="/politique-de-confidentialite">Politique de confidentialité</FooterLink>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;