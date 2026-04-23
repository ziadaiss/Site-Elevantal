import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroCarousel = () => {
  const [active, setActive] = useState(0);
  const TOTAL_SLIDES = 2;
  const INTERVAL = 7000;

  const next = useCallback(() => setActive((p) => (p + 1) % TOTAL_SLIDES), []);
  const prev = useCallback(() => setActive((p) => (p - 1 + TOTAL_SLIDES) % TOTAL_SLIDES), []);

  useEffect(() => {
    const id = setInterval(next, INTERVAL);
    return () => clearInterval(id);
  }, [active, next]);

  // KPI hero assets
  const spreadsheetImage = 'https://horizons-cdn.hostinger.com/9fdb5cd6-7395-42e7-a897-ebea996e876c/003dd29baf6ea14f94b3e5923cbfb102.png';
  const gradientTextClass = "bg-[linear-gradient(90deg,#5264e4_0%,#427ede_50%,#3598d9_100%)] bg-clip-text text-transparent";
  const gradientBgClass = "bg-[linear-gradient(90deg,#5264e4_0%,#427ede_50%,#3598d9_100%)]";

  const GradientCheck = () => (
    <div className="relative flex items-center justify-center w-5 h-5 mr-3 mt-1 flex-shrink-0">
      <svg width="0" height="0">
        <defs>
          <linearGradient id="check-gradient-carousel" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#5264e4" />
            <stop offset="50%" stopColor="#427ede" />
            <stop offset="100%" stopColor="#3598d9" />
          </linearGradient>
        </defs>
      </svg>
      <Check className="w-5 h-5" style={{ stroke: "url(#check-gradient-carousel)" }} />
    </div>
  );

  return (
    <>
      <style>{`
        .hc-wrap{position:relative;overflow:hidden;background:linear-gradient(135deg,#020617 0%,#0a1642 40%,#1e40af 100%);min-height:90vh;padding-bottom:60px;font-family:'Poppins',sans-serif}
        .hc-track{display:flex;transition:transform .7s cubic-bezier(.4,0,.2,1);width:200%}
        .hc-slide{width:50%;min-height:90vh;display:flex;align-items:center;flex-shrink:0;position:relative}

        /* NAV */
        .hc-dots{position:absolute;bottom:32px;left:50%;transform:translateX(-50%);display:flex;gap:10px;z-index:10}
        .hc-dot{width:10px;height:10px;border-radius:50%;border:2px solid rgba(255,255,255,.4);background:transparent;cursor:pointer;transition:.3s;padding:0}
        .hc-dot.active{background:#fff;border-color:#fff}
        .hc-arrows{position:absolute;top:50%;left:0;right:0;display:flex;justify-content:space-between;padding:0 20px;transform:translateY(-50%);z-index:10;pointer-events:none}
        .hc-arrow{width:44px;height:44px;border-radius:50%;background:rgba(255,255,255,.1);border:1px solid rgba(255,255,255,.15);display:flex;align-items:center;justify-content:center;cursor:pointer;transition:.3s;pointer-events:auto;color:#fff}
        .hc-arrow:hover{background:rgba(255,255,255,.2)}
        .hc-arrow svg{width:20px;height:20px}

        /* SLIDE 1 — GENERATEUR */
        .hc-gen{padding:120px 0 80px}
        .hc-gen-container{max-width:1120px;margin:0 auto;padding:0 32px;display:grid;grid-template-columns:1fr 380px;gap:60px;align-items:center}
        .hc-gen-overline{display:block;font-size:12px;font-weight:700;letter-spacing:2.5px;text-transform:uppercase;background:linear-gradient(90deg,#5264e4,#427ede,#3598d9);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;margin-bottom:20px}
        .hc-gen h1{font-size:clamp(30px,4.8vw,48px);font-weight:900;line-height:1.1;letter-spacing:-.03em;margin-bottom:24px;color:#fff}
        .hc-gen-sub{font-size:16px;font-weight:300;color:rgba(255,255,255,.7);line-height:1.8;margin-bottom:36px;max-width:540px}
        .hc-gen-sub strong{font-weight:600;color:rgba(255,255,255,.9)}
        .hc-gen-intro{font-size:16px;font-weight:700;color:rgba(255,255,255,.9);margin-bottom:20px}
        .hc-gen-checks{list-style:none;display:flex;flex-direction:column;gap:16px;margin-bottom:40px;padding:0}
        .hc-gen-checks li{display:flex;align-items:flex-start;gap:14px;font-size:15px;font-weight:400;color:rgba(255,255,255,.9);line-height:1.6}
        .hc-gen-ci{width:24px;height:24px;min-width:24px;display:flex;align-items:center;justify-content:center;margin-top:2px}
        .hc-gen-ci svg{width:20px;height:20px}
        .hc-gen-cta{display:inline-flex;align-items:center;gap:12px;padding:18px 40px;background:linear-gradient(90deg,#5264e4,#427ede,#3598d9);border:none;border-radius:14px;color:#fff;font-family:inherit;font-size:16px;font-weight:700;cursor:pointer;transition:.4s;text-decoration:none;letter-spacing:.3px;box-shadow:0 4px 30px rgba(82,100,228,.35)}
        .hc-gen-cta:hover{transform:translateY(-3px);box-shadow:0 12px 50px rgba(82,100,228,.5)}
        .hc-gen-cta svg{width:18px;height:18px;transition:.3s}
        .hc-gen-cta:hover svg{transform:translateX(4px)}

        .hc-gen-right{position:relative;display:flex;justify-content:center}
        .hc-phone-glow{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:480px;height:480px;background:radial-gradient(circle,rgba(82,100,228,.15),transparent 70%);pointer-events:none}
        .hc-phone{width:310px;background:#fff;border-radius:40px;padding:10px;box-shadow:0 50px 100px rgba(0,0,0,.5),0 0 0 1px rgba(255,255,255,.08);position:relative}
        .hc-phone-notch{position:absolute;top:12px;left:50%;transform:translateX(-50%);width:90px;height:26px;background:#1a1a2e;border-radius:20px;z-index:2}
        .hc-phone-screen{background:linear-gradient(180deg,#f0f2f8,#fff);border-radius:32px;padding:48px 18px 22px;min-height:460px}
        .hc-ps-title{font-size:15px;font-weight:700;color:#040a23;line-height:1.35;margin-bottom:18px}
        .hc-ps-field{margin-bottom:12px}
        .hc-ps-field label{display:block;font-size:10.5px;font-weight:600;color:#040a23;margin-bottom:4px}
        .hc-ps-field label em{font-style:normal;color:#e24b4a}
        .hc-ps-field input,.hc-ps-field select,.hc-ps-field textarea{width:100%;border:1.5px solid #dfe2ed;border-radius:9px;padding:9px 11px;font-family:'Poppins',sans-serif;font-size:11.5px;color:#9098b5;background:#fff;outline:none;resize:none}
        .hc-ps-field textarea{height:60px}
        .hc-ps-field .hc-hint{font-size:9.5px;color:#b5bbd1;margin-top:2px}
        .hc-ps-btn{width:100%;padding:12px;background:linear-gradient(90deg,#5264e4,#427ede,#3598d9);border:none;border-radius:11px;color:#fff;font-family:'Poppins',sans-serif;font-size:12.5px;font-weight:700;cursor:pointer;margin-top:4px;letter-spacing:.2px}

        @media(max-width:900px){
          .hc-gen-container{grid-template-columns:1fr;gap:40px}
          .hc-gen-right{order:-1}
          .hc-phone{width:280px}
        }
        @media(max-width:600px){
          .hc-gen{padding:80px 0 60px}
          .hc-phone{width:260px}
          .hc-phone-screen{padding:42px 14px 18px;min-height:400px}
          .hc-arrows{display:none}
        }
      `}</style>

      <div className="hc-wrap">
        <div className="hc-track" style={{ transform: `translateX(-${active * 50}%)` }}>

          {/* SLIDE 1 — Générateur de refus */}
          <div className="hc-slide">
            <div className="hc-gen" style={{ width: '100%' }}>
              <div className="hc-gen-container">
                <div>
                  <div className="hc-gen-overline">Générateur IA feedback post-entretien</div>
                  <h1>Générez un mail de refus candidat personnalisé en 10 secondes !</h1>
                  <p className="hc-gen-sub">
                    Si vos candidats restent sans réponse après un entretien, que vous n'avez pas le temps de rédiger des <strong>feedbacks post-entretien</strong> individuels, ou que le <strong>ghosting candidat</strong> nuit à votre <strong>marque employeur</strong>...
                  </p>
                  <p className="hc-gen-intro">Accédez à votre générateur IA immédiatement pour :</p>
                  <ul className="hc-gen-checks">
                    <li>
                      <span className="hc-gen-ci">
                        <svg viewBox="0 0 20 20" fill="none"><path d="M3 10.5L7.5 15L17 5" stroke="#3598d9" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                      </span>
                      Rédiger un e-mail de refus humain et structuré en quelques secondes
                    </li>
                    <li>
                      <span className="hc-gen-ci">
                        <svg viewBox="0 0 20 20" fill="none"><path d="M3 10.5L7.5 15L17 5" stroke="#3598d9" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                      </span>
                      Améliorer votre expérience candidat sans effort supplémentaire
                    </li>
                    <li>
                      <span className="hc-gen-ci">
                        <svg viewBox="0 0 20 20" fill="none"><path d="M3 10.5L7.5 15L17 5" stroke="#3598d9" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                      </span>
                      Fidéliser les candidats non retenus pour vos futurs recrutements
                    </li>
                  </ul>
                  <Link to="/generateur-refus" className="hc-gen-cta">
                    Découvrir le générateur
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                  </Link>
                </div>
                <div className="hc-gen-right">
                  <div className="hc-phone-glow"></div>
                  <div className="hc-phone">
                    <div className="hc-phone-notch"></div>
                    <div className="hc-phone-screen">
                      <div className="hc-ps-title">Générez un e-mail de refus humain et hyper-personnalisé en 10 secondes...</div>
                      <div className="hc-ps-field">
                        <label>Prénom du candidat <em>*</em></label>
                        <input type="text" placeholder="Ex: Marie" readOnly />
                      </div>
                      <div className="hc-ps-field">
                        <label>Intitulé du poste visé <em>*</em></label>
                        <input type="text" placeholder="Ex: Développeur Full Stack" readOnly />
                      </div>
                      <div className="hc-ps-field">
                        <label>Notes d'entretien <em>*</em> <span style={{fontWeight:400,color:'#b5bbd1',fontSize:'9px'}}>(min. 20 car.)</span></label>
                        <textarea placeholder="Ex: Bon niveau technique mais manque d'expérience en leadership." readOnly></textarea>
                        <div className="hc-hint">0 / 20 caractères minimum</div>
                      </div>
                      <div className="hc-ps-field">
                        <label>Ton souhaité <em>*</em></label>
                        <select disabled><option>Sélectionnez un ton</option></select>
                      </div>
                      <button className="hc-ps-btn" type="button">Générer mon e-mail parfait</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* SLIDE 2 — Tableau de bord KPI */}
          <div className="hc-slide">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  animate={active === 1 ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="text-left flex flex-col items-start"
                >
                  <span className={`font-bold tracking-wider uppercase text-sm mb-4 ${gradientTextClass}`}>
                    TABLEAU DE BORD KPI CLÉ-EN-MAIN
                  </span>
                  <h1 className="text-3xl md:text-4xl lg:text-4xl font-extrabold leading-tight tracking-tight mb-6 text-white font-sans max-w-3xl">
                    Pilotez votre parcours candidat aujourd'hui, et éliminez +6h de reporting par mois !
                  </h1>
                  <p className="text-lg text-blue-100 mb-6 max-w-xl leading-relaxed">
                    Si vous perdez du temps à compiler des données éparpillées, que vous ne savez pas quels KPI suivre vraiment, ou que vos décisions manquent de données concrètes...
                  </p>
                  <p className="text-lg font-bold text-white mb-4">
                    Accédez à votre tableau de bord KPI immédiatement pour :
                  </p>
                  <ul className="space-y-3 mb-8">
                    {["Mesurer précisément vos délais de recrutement", "Détecter les abandons en cours de processus", "Analyser votre coût par embauche"].map((item, index) => (
                      <li key={index} className="flex items-start text-white/90">
                        <GradientCheck />
                        <span className="text-base md:text-lg">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                    <Button asChild size="lg" className={`${gradientBgClass} hover:opacity-90 text-white px-8 py-7 rounded-lg font-bold text-lg whitespace-nowrap transition-all duration-300 transform hover:scale-105 shadow-lg w-full sm:w-auto border-0`}>
                      <a href="https://services-elevantal.systeme.io/691c0248-55c3129f-5932e447" target="_blank" rel="noopener noreferrer">
                        Accéder au tableau de bord
                      </a>
                    </Button>
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  animate={active === 1 ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                  transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                  className="relative w-full flex justify-center lg:justify-end"
                >
                  <div className="relative rounded-xl shadow-2xl overflow-hidden w-full max-w-lg transform hover:scale-[1.02] transition-transform duration-500 border border-white/10 p-1">
                    <img src={spreadsheetImage} alt="Tableur KPI Dashboard" className="w-full h-auto rounded-lg" />
                  </div>
                </motion.div>
              </div>
            </div>
          </div>

        </div>

        {/* Arrows */}
        <div className="hc-arrows">
          <button className="hc-arrow" onClick={prev} aria-label="Précédent">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
          </button>
          <button className="hc-arrow" onClick={next} aria-label="Suivant">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 6 15 12 9 18"/></svg>
          </button>
        </div>

        {/* Dots */}
        <div className="hc-dots">
          {[0, 1].map((i) => (
            <button key={i} className={`hc-dot${active === i ? ' active' : ''}`} onClick={() => setActive(i)} aria-label={`Slide ${i + 1}`} />
          ))}
        </div>
      </div>
    </>
  );
};

export default HeroCarousel;
