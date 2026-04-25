import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const calendlyUrl = "https://calendly.com/contact-elevantal/premier-echange";
  const linkedinUrl = "https://www.linkedin.com/company/elevantal";
  const youtubeUrl = "https://youtube.com/@elevantal?si=RKD3kPtJPrOrZ8aS";
  const logoUrl = "https://horizons-cdn.hostinger.com/9fdb5cd6-7395-42e7-a897-ebea996e876c/design-sans-titre-57-kU6I1.png";

  return (
    <>
      <style>{`
.ft-wave{position:relative;height:140px;width:100%;line-height:0;overflow:hidden}
.ft-wave svg{position:absolute;bottom:0;left:0;width:100%;height:100%;display:block}
.ft{background:#020615;padding:80px 0 0;position:relative;overflow:hidden}
.ft::before{content:'';position:absolute;top:0;left:50%;transform:translateX(-50%);width:600px;height:600px;background:radial-gradient(circle,rgba(82,100,228,.04),transparent 70%);pointer-events:none}
.ft .ft-container{max-width:1120px;margin:0 auto;padding:0 32px;position:relative;z-index:1}
.ft-cta{text-align:center;padding:0 0 64px}
.ft-cta h3{font-size:clamp(22px,3vw,32px);font-weight:800;margin-bottom:12px;letter-spacing:-.02em;color:#fff}
.ft-cta p{font-size:15px;color:rgba(255,255,255,.4);font-weight:300;margin-bottom:28px;max-width:480px;margin-left:auto;margin-right:auto}
.ft-cta-btn{display:inline-flex;align-items:center;gap:10px;padding:16px 36px;background:linear-gradient(90deg,#5264e4,#427ede,#3598d9);border-radius:14px;color:#fff;font-family:inherit;font-size:15px;font-weight:700;text-decoration:none;box-shadow:0 4px 30px rgba(82,100,228,.3);transition:.4s}
.ft-cta-btn:hover{transform:translateY(-3px);box-shadow:0 12px 50px rgba(82,100,228,.5)}
.ft-cta-btn svg{width:16px;height:16px}
.ft-sep{width:100%;height:1px;background:linear-gradient(90deg,transparent,rgba(255,255,255,.06),transparent);margin-bottom:64px}
.ft-grid{display:grid;grid-template-columns:1.4fr 1fr 1fr .8fr;gap:48px;padding-bottom:56px}
.ft-brand img{height:44px;margin-bottom:16px}
.ft-brand-name{font-size:18px;font-weight:700;margin-bottom:8px;color:#fff}
.ft-brand p{font-size:13px;color:rgba(255,255,255,.35);line-height:1.7;font-weight:300;max-width:280px}
.ft-col h4{font-size:11px;font-weight:700;letter-spacing:1.8px;text-transform:uppercase;color:rgba(255,255,255,.25);margin-bottom:20px}
.ft-col a{display:block;font-size:14px;color:rgba(255,255,255,.55);text-decoration:none;font-weight:400;padding:6px 0;transition:.3s}
.ft-col a:hover{color:#fff;transform:translateX(4px)}
.ft-social{display:flex;gap:12px;margin-top:4px}
.ft-social a{width:42px;height:42px;border-radius:12px;background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.06);display:flex;align-items:center;justify-content:center;transition:.3s;text-decoration:none}
.ft-social a:hover{background:rgba(82,100,228,.15);border-color:rgba(82,100,228,.3);transform:translateY(-2px)}
.ft-social a svg{width:18px;height:18px}
.ft-bottom{border-top:1px solid rgba(255,255,255,.06);padding:24px 0;display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:16px}
.ft-copy{font-size:12px;color:rgba(255,255,255,.2);font-weight:300}
.ft-legal{display:flex;gap:24px}
.ft-legal a{font-size:12px;color:rgba(255,255,255,.25);text-decoration:none;font-weight:400;transition:.3s}
.ft-legal a:hover{color:rgba(255,255,255,.6)}
.ft-grad{background:linear-gradient(90deg,#5264e4,#427ede,#3598d9);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}
@media(max-width:900px){.ft-grid{grid-template-columns:1fr 1fr;gap:36px}}
@media(max-width:500px){.ft-grid{grid-template-columns:1fr;gap:32px}.ft-bottom{flex-direction:column;text-align:center}}
      `}</style>

      {/* VAGUE vers footer */}
      <div className="ft-wave" style={{ background: 'transparent' }}>
        <svg viewBox="0 0 1440 140" preserveAspectRatio="none">
          <path d="M0,50 C240,90 480,10 720,50 C960,90 1200,10 1440,50 L1440,140 L0,140 Z" fill="rgba(82,100,228,.15)"/>
          <path d="M0,65 C300,100 600,25 900,65 C1100,90 1300,35 1440,65 L1440,140 L0,140 Z" fill="rgba(66,126,222,.12)"/>
          <path d="M0,80 C200,100 500,55 800,80 C1050,100 1300,60 1440,80 L1440,140 L0,140 Z" fill="rgba(53,152,217,.1)"/>
          <path d="M0,100 C360,115 720,85 1080,100 C1260,108 1380,95 1440,100 L1440,140 L0,140 Z" fill="#020615"/>
        </svg>
      </div>

      <footer className="ft">
        <div className="ft-container">

          {/* CTA */}
          <div className="ft-cta">
            <h3>Pr{"ê"}t {"à"} transformer votre <span className="ft-grad">exp{"é"}rience candidat</span> ?</h3>
            <p>R{"é"}servez un diagnostic gratuit de 45 minutes et repartez avec un plan d{"'"}action concret.</p>
            <a href={calendlyUrl} target="_blank" rel="noopener noreferrer" className="ft-cta-btn">
              R{"é"}server un {"é"}change
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </a>
          </div>

          <div className="ft-sep"></div>

          {/* GRID */}
          <div className="ft-grid">

            {/* BRAND */}
            <div className="ft-brand">
              <Link to="/"><img src={logoUrl} alt="Elevantal" /></Link>
              <div className="ft-brand-name">Elevantal</div>
              <p>L{"'"}agence qui {"é"}l{"è"}ve l{"'"}exp{"é"}rience candidat pour les RH et recruteurs de PME. Des m{"é"}thodes concr{"è"}tes, des outils pr{"ê"}ts {"à"} l{"'"}emploi, des r{"é"}sultats mesurables.</p>
            </div>

            {/* NOS SERVICES */}
            <div className="ft-col">
              <h4>Nos services</h4>
              <Link to="/formation-rRevelation">La M{"é"}thode RH{"é"}v{"é"}lation</Link>
              <Link to="/recruitment-experience-boost">L{"'"}accompagnement RH{"é"}v{"é"}lation</Link>
            </div>

            {/* RESSOURCES */}
            <div className="ft-col">
              <h4>Ressources</h4>
              <Link to="/generateur-refus">G{"é"}n{"é"}rateur de refus</Link>
              <Link to="/tableur-experience-candidat">KPIs exp{"é"}rience candidat</Link>
              <Link to="/10-prompts-ia">10 Prompts IA</Link>
            </div>

            {/* L'AGENCE */}
            <div className="ft-col">
              <h4>L{"'"}agence Elevantal</h4>
              <Link to="/qui-sommes-nous">Qui sommes-nous ?</Link>
              <Link to="/newsletter">Newsletter</Link>
              <div className="ft-social" style={{ marginTop: '16px' }}>
                <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <svg viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,.5)" strokeWidth="1.8"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-4 0v7h-4v-7a6 6 0 016-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
                </a>
                <a href={youtubeUrl} target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                  <svg viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,.5)" strokeWidth="1.8"><path d="M22.54 6.42a2.78 2.78 0 00-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 00-1.94 2A29 29 0 001 11.75a29 29 0 00.46 5.33A2.78 2.78 0 003.4 19.1c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 001.94-2 29 29 0 00.46-5.25 29 29 0 00-.46-5.43z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="rgba(255,255,255,.5)" stroke="none"/></svg>
                </a>
                <a href="https://services-elevantal.systeme.io/newsletter" target="_blank" rel="noopener noreferrer" aria-label="Newsletter">
                  <svg viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,.5)" strokeWidth="1.8"><rect x="2" y="4" width="20" height="16" rx="3"/><path d="M2 7l10 7 10-7"/></svg>
                </a>
              </div>
            </div>

          </div>

          {/* BOTTOM */}
          <div className="ft-bottom">
            <div className="ft-copy">&copy; 2026 Elevantal. Tous droits r{"é"}serv{"é"}s.</div>
            <div className="ft-legal">
              <Link to="/mentions-legales">Mentions l{"é"}gales</Link>
              <Link to="/politique-de-confidentialite">Politique de confidentialit{"é"}</Link>
            </div>
          </div>

        </div>
      </footer>
    </>
  );
};

export default Footer;
