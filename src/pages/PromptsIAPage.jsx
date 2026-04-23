import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import useScrollReveal from '@/hooks/useScrollReveal';

const DOWNLOAD_URL = "https://services-elevantal.systeme.io/c4fe3221?preview=2ad9bdad4353300b52d6472b159dd634";

const PromptsIAPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useScrollReveal();

  return (
    <>
      <Helmet>
        <title>10 Prompts IA pour Recruteurs de PME — Gratuit | Elevantal</title>
        <meta name="description" content="Téléchargez gratuitement 10 prompts IA pour améliorer votre processus de recrutement en PME. Offres d'emploi, mails de refus, expérience candidat — des prompts prêts à copier-coller." />
      </Helmet>

      <style>{`
        .tp-hero{padding:80px 0 100px;text-align:center;background:var(--gradient-bg, linear-gradient(180deg,#040a23 0%,#060e2d 15%,#09153f 35%,#0c1b50 55%,#102364 75%,#132873 100%))}
        .tp-badge{display:inline-flex;align-items:center;gap:8px;padding:7px 18px;border-radius:100px;font-size:11px;font-weight:700;letter-spacing:1.8px;text-transform:uppercase;background:rgba(82,100,228,.12);color:#8090f0;margin-bottom:24px}
        .tp-badge-dot{width:8px;height:8px;border-radius:50%;background:#5264e4;display:inline-block;animation:tpdot 2s infinite}
        @keyframes tpdot{0%,100%{opacity:1}50%{opacity:.3}}
        .tp-hero h1{font-size:clamp(32px,5vw,54px);font-weight:900;line-height:1.08;letter-spacing:-.03em;margin-bottom:24px;color:#fff}
        .tp-hero h1 .grad{background:linear-gradient(90deg,#5264e4,#427ede,#3598d9);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}
        .tp-hero-sub{font-size:18px;font-weight:300;color:rgba(255,255,255,.6);line-height:1.8;margin:0 auto 40px;max-width:620px}
        .tp-hero-sub strong{font-weight:600;color:rgba(255,255,255,.85)}
        .tp-hero-cta{display:inline-flex;align-items:center;gap:10px;padding:18px 40px;background:linear-gradient(90deg,#5264e4,#427ede,#3598d9);border-radius:14px;color:#fff;font-family:inherit;font-size:16px;font-weight:700;text-decoration:none;box-shadow:0 4px 30px rgba(82,100,228,.35);transition:.4s}
        .tp-hero-cta:hover{transform:translateY(-3px);box-shadow:0 12px 50px rgba(82,100,228,.5)}
        .tp-hero-cta svg{width:18px;height:18px}
        .tp-pills{display:flex;align-items:center;justify-content:center;gap:16px;margin-top:32px;flex-wrap:wrap}
        .tp-pill{display:flex;align-items:center;gap:6px;font-size:12px;color:rgba(255,255,255,.4)}
        .tp-pill svg{width:14px;height:14px}
        .tp-pill-sep{width:3px;height:3px;border-radius:50%;background:rgba(255,255,255,.15)}
        .tp-prompts{padding:100px 0;background:#fff;color:#1a1a2e}
        .tp-prompts-top{text-align:center;margin-bottom:56px}
        .tp-overline{display:inline-block;padding:6px 18px;border-radius:100px;font-size:11px;font-weight:700;letter-spacing:1.8px;text-transform:uppercase;background:rgba(82,100,228,.08);color:#5264e4;margin-bottom:18px}
        .tp-prompts-top h2{font-size:clamp(26px,3.5vw,38px);font-weight:800;letter-spacing:-.02em;margin-bottom:12px;color:#1a1a2e}
        .tp-prompts-top h2 .grad,.tp-wyg-top h2 .grad,.tp-who-top h2 .grad,.tp-cta-box h2 .grad{background:linear-gradient(90deg,#5264e4,#427ede,#3598d9);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}
        .tp-prompts-top p{font-size:15px;color:#6B7280;font-weight:300;max-width:520px;margin:0 auto}
        .tp-grid{display:grid;grid-template-columns:1fr 1fr;gap:14px;max-width:900px;margin:0 auto}
        .tp-card{display:flex;align-items:flex-start;gap:16px;padding:22px 24px;background:#F9FAFB;border:1px solid #E5E7EB;border-radius:16px;transition:.4s}
        .tp-card:hover{background:#fff;border-color:rgba(82,100,228,.25);transform:translateY(-3px);box-shadow:0 8px 30px rgba(0,0,0,.06)}
        .tp-card-num{width:40px;height:40px;min-width:40px;border-radius:10px;display:flex;align-items:center;justify-content:center;font-size:14px;font-weight:800}
        .tp-card:nth-child(3n+1) .tp-card-num{background:rgba(82,100,228,.1);color:#5264e4}
        .tp-card:nth-child(3n+2) .tp-card-num{background:rgba(66,126,222,.1);color:#427ede}
        .tp-card:nth-child(3n) .tp-card-num{background:rgba(53,152,217,.1);color:#3598d9}
        .tp-card-body h4{font-size:15px;font-weight:700;margin-bottom:4px;color:#1a1a2e}
        .tp-card-cat{font-size:10px;font-weight:600;letter-spacing:.8px;text-transform:uppercase;color:#9CA3AF}
        .tp-wyg{padding:100px 0;background:linear-gradient(180deg,#060e2d,#0c1b50);color:#fff}
        .tp-wyg-top{text-align:center;margin-bottom:48px}
        .tp-wyg-top h2{font-size:clamp(24px,3.5vw,34px);font-weight:800;letter-spacing:-.02em;margin-bottom:10px;color:#fff}
        .tp-wyg-top p{font-size:15px;color:rgba(255,255,255,.45);font-weight:300}
        .tp-wyg-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:18px;max-width:960px;margin:0 auto}
        .tp-wc{background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.06);border-radius:16px;padding:28px 22px;text-align:center;transition:.4s}
        .tp-wc:hover{background:rgba(255,255,255,.07);border-color:rgba(82,100,228,.2);transform:translateY(-4px)}
        .tp-wc-ico{margin-bottom:14px}
        .tp-wc h4{font-size:15px;font-weight:700;margin-bottom:8px;color:#fff}
        .tp-wc p{font-size:12.5px;color:rgba(255,255,255,.45);line-height:1.7;font-weight:300}
        .tp-who{padding:100px 0;background:linear-gradient(180deg,#0c1b50,#132873);color:#fff}
        .tp-who-top{text-align:center;margin-bottom:48px}
        .tp-who-top h2{font-size:clamp(24px,3.5vw,34px);font-weight:800;letter-spacing:-.02em;margin-bottom:10px;color:#fff}
        .tp-who-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:18px;max-width:900px;margin:0 auto}
        .tp-who-card{padding:28px 24px;background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.06);border-radius:16px;transition:.3s}
        .tp-who-card:hover{border-color:rgba(82,100,228,.2)}
        .tp-who-emoji{font-size:28px;margin-bottom:14px}
        .tp-who-card h4{font-size:15px;font-weight:700;margin-bottom:8px;color:#fff}
        .tp-who-card p{font-size:13px;color:rgba(255,255,255,.45);line-height:1.7;font-weight:300}
        .tp-cta{padding:100px 0 120px;text-align:center;background:#fff;color:#1a1a2e}
        .tp-cta-box{max-width:680px;margin:0 auto;padding:56px 48px;background:#F9FAFB;border:1px solid #E5E7EB;border-radius:24px;position:relative;overflow:hidden}
        .tp-cta-box::before{content:'';position:absolute;top:0;left:0;right:0;height:3px;background:linear-gradient(90deg,#5264e4,#427ede,#3598d9)}
        .tp-cta-stat{font-size:14px;font-weight:600;color:#5264e4;margin-bottom:16px}
        .tp-cta-box h2{font-size:clamp(22px,3vw,30px);font-weight:800;line-height:1.2;margin-bottom:16px;color:#1a1a2e}
        .tp-cta-box>p{font-size:15px;color:#6B7280;font-weight:300;line-height:1.7;margin-bottom:32px}
        .tp-cta-btn{display:inline-flex;align-items:center;gap:10px;padding:18px 40px;background:linear-gradient(90deg,#5264e4,#427ede,#3598d9);border-radius:14px;color:#fff;font-family:inherit;font-size:16px;font-weight:700;text-decoration:none;box-shadow:0 4px 30px rgba(82,100,228,.25);transition:.4s}
        .tp-cta-btn:hover{transform:translateY(-3px);box-shadow:0 12px 50px rgba(82,100,228,.4)}
        .tp-cta-btn svg{width:18px;height:18px}
        .tp-cta-note{margin-top:16px;font-size:11px;color:#9CA3AF}
        .tp-wave{position:relative;height:140px;width:100%;line-height:0;overflow:hidden}
        .tp-wave svg{position:absolute;bottom:0;left:0;width:100%;height:100%;display:block}
        .tp-container{max-width:1120px;margin:0 auto;padding:0 32px}
        @media(max-width:900px){
          .tp-grid{grid-template-columns:1fr}
          .tp-wyg-grid{grid-template-columns:1fr}
          .tp-who-grid{grid-template-columns:1fr}
          .tp-card-cat{display:none}
        }
        @media(max-width:500px){
          .tp-cta-box{padding:40px 28px}
        }
      `}</style>

      {/* HERO */}
      <section className="tp-hero">
        <div className="tp-container">
          <div className="tp-badge reveal"><span className="tp-badge-dot"></span>Ressource offerte</div>
          <h1 className="reveal reveal-d1">10 prompts IA pour<br /><span className="grad">recruteurs de PME</span></h1>
          <p className="tp-hero-sub reveal reveal-d2">Gagnez <strong>3h par semaine dès lundi matin</strong>. Des prompts prêts à copier-coller dans ChatGPT, Claude ou Gemini pour rédiger vos offres d'emploi, personnaliser vos mails de refus candidat et structurer votre processus de recrutement.</p>
          <a href={DOWNLOAD_URL} target="_blank" rel="noopener noreferrer" className="tp-hero-cta reveal reveal-d3">
            Télécharger le guide gratuitement
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
          </a>
          <div className="tp-pills reveal reveal-d4">
            <div className="tp-pill"><svg viewBox="0 0 14 14" fill="none"><path d="M2.5 7L5.5 10L11.5 4" stroke="#3598d9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>Compatible ChatGPT, Claude, Gemini</div>
            <div className="tp-pill-sep"></div>
            <div className="tp-pill"><svg viewBox="0 0 14 14" fill="none"><path d="M2.5 7L5.5 10L11.5 4" stroke="#3598d9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>PDF 23 pages</div>
            <div className="tp-pill-sep"></div>
            <div className="tp-pill"><svg viewBox="0 0 14 14" fill="none"><path d="M2.5 7L5.5 10L11.5 4" stroke="#3598d9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>100% offert</div>
          </div>
        </div>
      </section>

      {/* VAGUE : sombre → blanc */}
      <div className="tp-wave" style={{ background: 'transparent' }}>
        <svg viewBox="0 0 1440 140" preserveAspectRatio="none">
          <path d="M0,50 C240,90 480,10 720,50 C960,90 1200,10 1440,50 L1440,140 L0,140 Z" fill="rgba(82,100,228,.35)" />
          <path d="M0,65 C300,100 600,25 900,65 C1100,90 1300,35 1440,65 L1440,140 L0,140 Z" fill="rgba(66,126,222,.3)" />
          <path d="M0,80 C200,100 500,55 800,80 C1050,100 1300,60 1440,80 L1440,140 L0,140 Z" fill="rgba(53,152,217,.25)" />
          <path d="M0,100 C360,115 720,85 1080,100 C1260,108 1380,95 1440,100 L1440,140 L0,140 Z" fill="#fff" />
        </svg>
      </div>

      {/* LES 10 PROMPTS (blanc) */}
      <section className="tp-prompts">
        <div className="tp-container">
          <div className="tp-prompts-top">
            <div className="tp-overline reveal">Les 10 prompts</div>
            <h2 className="reveal reveal-d1">Tout votre processus de recrutement<br /><span className="grad">couvert en 10 prompts</span></h2>
            <p className="reveal reveal-d2">De l'offre d'emploi à la synthèse d'entretien, chaque prompt est structuré, testé et prêt à l'emploi.</p>
          </div>
          <div className="tp-grid">
            <div className="tp-card reveal"><div className="tp-card-num">01</div><div className="tp-card-body"><h4>Rédiger une offre d'emploi qui parle aux candidats</h4><div className="tp-card-cat">Attraction</div></div></div>
            <div className="tp-card reveal"><div className="tp-card-num">02</div><div className="tp-card-body"><h4>Relancer un candidat sans passer pour insistant</h4><div className="tp-card-cat">Communication candidat</div></div></div>
            <div className="tp-card reveal reveal-d1"><div className="tp-card-num">03</div><div className="tp-card-body"><h4>Rédiger un mail de refus (méthode F.A.I.R.)</h4><div className="tp-card-cat">Expérience candidat</div></div></div>
            <div className="tp-card reveal reveal-d1"><div className="tp-card-num">04</div><div className="tp-card-body"><h4>Pré-sélectionner des CVs selon votre grille</h4><div className="tp-card-cat">Sourcing &amp; tri</div></div></div>
            <div className="tp-card reveal reveal-d2"><div className="tp-card-num">05</div><div className="tp-card-body"><h4>Préparer un brief d'entretien structuré</h4><div className="tp-card-cat">Évaluation</div></div></div>
            <div className="tp-card reveal reveal-d2"><div className="tp-card-num">06</div><div className="tp-card-body"><h4>Construire un plan d'intégration 30-60-90 jours</h4><div className="tp-card-cat">Intégration</div></div></div>
            <div className="tp-card reveal reveal-d3"><div className="tp-card-num">07</div><div className="tp-card-body"><h4>Rédiger un post LinkedIn RH qui engage</h4><div className="tp-card-cat">Marque employeur</div></div></div>
            <div className="tp-card reveal reveal-d3"><div className="tp-card-num">08</div><div className="tp-card-body"><h4>Répondre à un avis Glassdoor ou Indeed</h4><div className="tp-card-cat">E-réputation</div></div></div>
            <div className="tp-card reveal reveal-d4"><div className="tp-card-num">09</div><div className="tp-card-body"><h4>Créer une scorecard candidat personnalisée</h4><div className="tp-card-cat">Évaluation</div></div></div>
            <div className="tp-card reveal reveal-d4"><div className="tp-card-num">10</div><div className="tp-card-body"><h4>Rédiger une synthèse d'entretien en 10 minutes</h4><div className="tp-card-cat">Traçabilité &amp; décision</div></div></div>
          </div>
        </div>
      </section>

      {/* VAGUE : blanc → sombre */}
      <div className="tp-wave" style={{ background: '#fff' }}>
        <svg viewBox="0 0 1440 140" preserveAspectRatio="none">
          <path d="M0,40 C240,80 480,0 720,40 C960,80 1200,0 1440,40 L1440,140 L0,140 Z" fill="rgba(200,210,240,.4)" />
          <path d="M0,55 C300,90 600,15 900,55 C1100,80 1300,25 1440,55 L1440,140 L0,140 Z" fill="rgba(120,150,220,.35)" />
          <path d="M0,70 C200,90 500,45 800,70 C1050,90 1300,50 1440,70 L1440,140 L0,140 Z" fill="rgba(82,100,228,.5)" />
          <path d="M0,85 C360,100 720,70 1080,85 C1260,92 1380,80 1440,85 L1440,140 L0,140 Z" fill="rgba(30,50,140,.8)" />
          <path d="M0,100 C360,112 720,92 1080,100 C1260,106 1380,96 1440,100 L1440,140 L0,140 Z" fill="rgba(9,21,63,.95)" />
        </svg>
      </div>

      {/* CE QUE CONTIENT LE GUIDE */}
      <section className="tp-wyg">
        <div className="tp-container">
          <div className="tp-wyg-top">
            <h2 className="reveal">Ce que contient <span className="grad">le guide</span></h2>
            <p className="reveal reveal-d1">Chaque prompt fait 2 pages : le prompt prêt à copier-coller + le mode d'emploi</p>
          </div>
          <div className="tp-wyg-grid">
            <div className="tp-wc reveal">
              <div className="tp-wc-ico"><svg width="32" height="32" viewBox="0 0 32 32" fill="none"><rect x="4" y="4" width="24" height="24" rx="4" stroke="#5264e4" strokeWidth="2" fill="rgba(82,100,228,.1)" /><path d="M10 13h12M10 17h8" stroke="#5264e4" strokeWidth="2" strokeLinecap="round" /></svg></div>
              <h4>Le prompt complet</h4>
              <p>Structuré, avec tous les crochets à remplir. Copier-coller dans ChatGPT, Claude ou Gemini et lancez.</p>
            </div>
            <div className="tp-wc reveal reveal-d1">
              <div className="tp-wc-ico"><svg width="32" height="32" viewBox="0 0 32 32" fill="none"><circle cx="16" cy="16" r="12" stroke="#427ede" strokeWidth="2" fill="rgba(66,126,222,.1)" /><path d="M16 11v5l3.5 2" stroke="#427ede" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg></div>
              <h4>Le mode d'emploi</h4>
              <p>Objectif du prompt, astuces pour l'optimiser et le moment exact où l'utiliser dans votre processus.</p>
            </div>
            <div className="tp-wc reveal reveal-d2">
              <div className="tp-wc-ico"><svg width="32" height="32" viewBox="0 0 32 32" fill="none"><circle cx="16" cy="16" r="12" stroke="#3598d9" strokeWidth="2" fill="rgba(53,152,217,.1)" /><path d="M12 16l3 3 5-6" stroke="#3598d9" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /></svg></div>
              <h4>Testé sur le terrain</h4>
              <p>Chaque prompt a été utilisé en conditions réelles dans des PME qui recrutent avec peu de temps et de budget.</p>
            </div>
          </div>
        </div>
      </section>

      {/* POUR QUI */}
      <section className="tp-who">
        <div className="tp-container">
          <div className="tp-who-top">
            <h2 className="reveal">Ce guide est fait <span className="grad">pour vous si</span></h2>
          </div>
          <div className="tp-who-grid">
            <div className="tp-who-card reveal">
              <div className="tp-who-emoji">&#127919;</div>
              <h4>Vous recrutez seul·e ou en petite équipe</h4>
              <p>Vous gérez plusieurs postes en même temps et vous n'avez pas le temps de tout bien faire.</p>
            </div>
            <div className="tp-who-card reveal reveal-d1">
              <div className="tp-who-emoji">&#129302;</div>
              <h4>Vous voulez utiliser l'IA mais vous ne savez pas par où commencer</h4>
              <p>Vous avez testé ChatGPT une fois, le résultat était moyen, et vous n'y êtes pas retourné.</p>
            </div>
            <div className="tp-who-card reveal reveal-d2">
              <div className="tp-who-emoji">&#9201;&#65039;</div>
              <h4>Vous cherchez des résultats dès lundi matin</h4>
              <p>Pas de formation de 3 jours, pas de théorie. Des prompts prêts à copier-coller immédiatement.</p>
            </div>
          </div>
        </div>
      </section>

      {/* VAGUE : sombre → blanc */}
      <div className="tp-wave" style={{ background: 'transparent' }}>
        <svg viewBox="0 0 1440 140" preserveAspectRatio="none">
          <path d="M0,50 C240,90 480,10 720,50 C960,90 1200,10 1440,50 L1440,140 L0,140 Z" fill="rgba(82,100,228,.35)" />
          <path d="M0,65 C300,100 600,25 900,65 C1100,90 1300,35 1440,65 L1440,140 L0,140 Z" fill="rgba(66,126,222,.3)" />
          <path d="M0,80 C200,100 500,55 800,80 C1050,100 1300,60 1440,80 L1440,140 L0,140 Z" fill="rgba(53,152,217,.25)" />
          <path d="M0,100 C360,115 720,85 1080,100 C1260,108 1380,95 1440,100 L1440,140 L0,140 Z" fill="#fff" />
        </svg>
      </div>

      {/* CTA BOTTOM (blanc) */}
      <section className="tp-cta">
        <div className="tp-container">
          <div className="tp-cta-box reveal">
            <div className="tp-cta-stat">73% des RH veulent se former à l'IA. 15% l'ont fait.</div>
            <h2>Passez du bon côté <span className="grad">dès maintenant</span></h2>
            <p>23 pages, 10 prompts, chacun avec son mode d'emploi. Compatible ChatGPT, Claude et Gemini. Testés dans des PME qui recrutent avec les mêmes contraintes que vous.</p>
            <a href={DOWNLOAD_URL} target="_blank" rel="noopener noreferrer" className="tp-cta-btn">
              Télécharger le guide gratuitement
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
            </a>
            <div className="tp-cta-note">100% offert · Pas de spam · Désabonnement en 1 clic</div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PromptsIAPage;
