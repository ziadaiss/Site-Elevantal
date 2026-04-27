import React, { useEffect, useRef } from 'react';

const FormationHero = ({ handleNotImplemented }) => {
  const sectionRef = useRef(null);
  const calendlyUrl = "https://calendly.com/contact-elevantal/premier-echange";

  useEffect(() => {
    const els = sectionRef.current ? sectionRef.current.querySelectorAll('.fh-reveal') : [];
    const obs = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.classList.add('fh-visible');
          obs.unobserve(e.target);
        }
      });
    }, { threshold: 0.12 });
    els.forEach(function (el) { obs.observe(el); });

    setTimeout(function () {
      els.forEach(function (el) {
        if (!el.classList.contains('fh-visible')) {
          const rect = el.getBoundingClientRect();
          if (rect.top < window.innerHeight && rect.bottom > 0) {
            el.classList.add('fh-visible');
            obs.unobserve(el);
          }
        }
      });
    }, 200);

    return () => obs.disconnect();
  }, []);

  return (
    <>
      <style>{`
.fh{padding:140px 0 100px;position:relative;overflow:hidden;background:linear-gradient(180deg,#040a23 0%,#060e2d 15%,#09153f 35%,#0c1b50 55%,#102364 75%,#132873 100%)}
.fh-container{max-width:1120px;margin:0 auto;padding:0 32px;display:grid;grid-template-columns:1fr 400px;gap:56px;align-items:center}
.fh-badge{display:inline-flex;align-items:center;gap:8px;padding:7px 18px;border-radius:100px;font-size:11px;font-weight:700;letter-spacing:1.8px;text-transform:uppercase;background:rgba(82,100,228,.12);color:#8090f0;margin-bottom:24px}
.fh-badge-dot{width:8px;height:8px;border-radius:50%;background:#5264e4;animation:fbdot 2s infinite}
@keyframes fbdot{0%,100%{opacity:1}50%{opacity:.3}}
.fh-left h1{font-size:clamp(32px,5vw,50px);font-weight:900;line-height:1.06;letter-spacing:-.03em;margin-bottom:10px;color:#fff}
.fh-left h1 .fh-thin{font-weight:300;display:block;font-size:.55em;letter-spacing:0;line-height:1.6;color:rgba(255,255,255,.5);margin-bottom:8px}
.fh-left h1 .fh-grad{background:linear-gradient(90deg,#5264e4,#427ede,#3598d9);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}
.fh-left>p{font-size:17px;font-weight:300;color:rgba(255,255,255,.6);line-height:1.8;margin-bottom:32px;max-width:500px}
.fh-left>p strong{font-weight:600;color:rgba(255,255,255,.85)}
.fh-pills{display:flex;flex-wrap:wrap;gap:10px;margin-bottom:36px}
.fh-pill{padding:8px 18px;border-radius:100px;font-size:12px;font-weight:600;border:1px solid rgba(255,255,255,.1);background:rgba(255,255,255,.04);color:rgba(255,255,255,.7);display:flex;align-items:center;gap:7px}
.fh-pill svg{width:14px;height:14px}
.fh-ctas{display:flex;align-items:center;gap:16px;margin-bottom:28px;flex-wrap:wrap}
.fh-cta-main{display:inline-flex;align-items:center;gap:10px;padding:18px 36px;background:linear-gradient(90deg,#5264e4,#427ede,#3598d9);border:none;border-radius:14px;color:#fff;font-family:inherit;font-size:16px;font-weight:700;cursor:pointer;transition:.4s;text-decoration:none;box-shadow:0 4px 30px rgba(82,100,228,.35)}
.fh-cta-main:hover{transform:translateY(-3px);box-shadow:0 12px 50px rgba(82,100,228,.5)}
.fh-cta-main svg{width:18px;height:18px;transition:.3s}
.fh-cta-main:hover svg{transform:translateX(4px)}
.fh-cta-sec{display:inline-flex;align-items:center;gap:10px;padding:18px 36px;background:transparent;border:1.5px solid rgba(255,255,255,.15);border-radius:14px;color:#fff;font-family:inherit;font-size:16px;font-weight:600;cursor:pointer;transition:.4s;text-decoration:none}
.fh-cta-sec:hover{border-color:rgba(255,255,255,.3);background:rgba(255,255,255,.04)}
.fh-cta-sec svg{width:18px;height:18px}
.fh-trust{display:flex;align-items:center;gap:16px;flex-wrap:wrap}
.fh-stars{display:flex;gap:2px}
.fh-stars svg{width:16px;height:16px}
.fh-trust-text{font-size:13px;color:rgba(255,255,255,.45);font-weight:400}
.fh-trust-text a,.fh-trust-text button{color:#7aacf0;text-decoration:none;font-weight:500;background:none;border:none;cursor:pointer;font-size:13px;font-family:inherit;padding:0}
.fh-right{position:relative;display:flex;justify-content:center}
.fh-glow{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:500px;height:500px;background:radial-gradient(circle,rgba(82,100,228,.12),transparent 70%);pointer-events:none}
.fh-visual{position:relative;width:380px;height:440px}
.fh-main-card{position:absolute;top:20px;left:10px;right:10px;background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.1);border-radius:22px;padding:32px 26px;backdrop-filter:blur(10px);z-index:2}
.fh-mc-overline{font-size:10px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;color:#8090f0;margin-bottom:14px}
.fh-mc-title{font-size:20px;font-weight:800;line-height:1.25;margin-bottom:16px;letter-spacing:-.02em;color:#fff}
.fh-mc-title .fh-grad{background:linear-gradient(90deg,#5264e4,#427ede,#3598d9);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}
.fh-mc-items{display:flex;flex-direction:column;gap:12px}
.fh-mc-item{display:flex;align-items:center;gap:12px;font-size:13px;font-weight:500;color:rgba(255,255,255,.8)}
.fh-mc-check{width:22px;height:22px;min-width:22px;border-radius:6px;display:flex;align-items:center;justify-content:center}
.fh-mc-check svg{width:12px;height:12px}
.fh-mc-item:nth-child(1) .fh-mc-check{background:rgba(82,100,228,.15)}
.fh-mc-item:nth-child(2) .fh-mc-check{background:rgba(66,126,222,.15)}
.fh-mc-item:nth-child(3) .fh-mc-check{background:rgba(53,152,217,.15)}
.fh-mc-item:nth-child(4) .fh-mc-check{background:rgba(82,100,228,.15)}
.fh-float-1{position:absolute;bottom:30px;left:-20px;z-index:3;background:rgba(255,255,255,.07);border:1px solid rgba(255,255,255,.1);border-radius:14px;padding:14px 18px;backdrop-filter:blur(12px);display:flex;align-items:center;gap:12px;animation:fhfloat 4s ease-in-out infinite}
@keyframes fhfloat{0%,100%{transform:translateY(0)}50%{transform:translateY(-8px)}}
.fh-f1-icon{width:36px;height:36px;border-radius:10px;background:rgba(34,197,94,.12);display:flex;align-items:center;justify-content:center}
.fh-f1-icon svg{width:18px;height:18px}
.fh-f1-text{font-size:12px;font-weight:600;color:rgba(255,255,255,.85)}
.fh-f1-sub{font-size:9px;color:rgba(255,255,255,.4);font-weight:300}
.fh-float-2{position:absolute;top:0;right:-10px;z-index:3;background:rgba(255,255,255,.07);border:1px solid rgba(255,255,255,.1);border-radius:14px;padding:14px 20px;backdrop-filter:blur(12px);text-align:center;animation:fhfloat 4s ease-in-out infinite;animation-delay:2s}
.fh-f2-num{font-size:24px;font-weight:800;background:linear-gradient(90deg,#5264e4,#427ede,#3598d9);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;line-height:1.1}
.fh-f2-label{font-size:10px;color:rgba(255,255,255,.4);font-weight:400;margin-top:2px}
.fh-float-3{position:absolute;bottom:0;right:20px;z-index:3;background:rgba(255,255,255,.07);border:1px solid rgba(255,255,255,.1);border-radius:14px;padding:12px 18px;backdrop-filter:blur(12px);animation:fhfloat 4s ease-in-out infinite;animation-delay:1s}
.fh-f3-text{font-size:11px;font-weight:600;color:rgba(255,255,255,.8);display:flex;align-items:center;gap:8px}
.fh-f3-text svg{width:14px;height:14px}
.fh-reveal{opacity:0;transform:translateY(40px);transition:opacity .8s cubic-bezier(.16,1,.3,1),transform .8s cubic-bezier(.16,1,.3,1)}
.fh-reveal.fh-visible{opacity:1;transform:translateY(0)}
.fh-reveal-d1{transition-delay:.1s}
.fh-reveal-d2{transition-delay:.2s}
.fh-reveal-d3{transition-delay:.3s}
.fh-reveal-d4{transition-delay:.4s}
@media(max-width:900px){
.fh-container{grid-template-columns:1fr;gap:48px}
.fh-visual{width:320px;height:400px;margin:0 auto}
.fh-float-1{left:0}
.fh-float-2{right:0}
.fh-ctas{flex-direction:column}
.fh-cta-main,.fh-cta-sec{width:100%;justify-content:center}
}
@media(max-width:500px){
.fh-visual{width:280px;height:380px}
.fh-main-card{padding:24px 20px}
}
      `}</style>

      <section className="fh" ref={sectionRef}>
        <div className="fh-container">

          <div className="fh-left">
            <div className="fh-badge fh-reveal"><span className="fh-badge-dot"></span>Formation exp{"é"}rience candidat</div>
            <h1 className="fh-reveal fh-reveal-d1">
              <span className="fh-thin">Cr{"é"}ez une exp{"é"}rience candidat qui attire, engage et fid{"é"}lise</span>
              La M{"é"}thode <span className="fh-grad">RH{"é"}v{"é"}lation</span>
            </h1>
            <p className="fh-reveal fh-reveal-d2">La m{"é"}thode qui transforme votre processus de recrutement en PME : <strong>un syst{"è"}me pour structurer votre parcours candidat</strong>, renforcer votre marque employeur, repartir avec des outils concrets et <strong>r{"é"}duire vos d{"é"}lais de recrutement jusqu{"'"}{"à"} 30%</strong>.</p>

            <div className="fh-pills fh-reveal fh-reveal-d2">
              <div className="fh-pill">
                <svg viewBox="0 0 14 14" fill="none"><path d="M2.5 7L5.5 10L11.5 4" stroke="#3598d9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                1 journ{"é"}e de formation
              </div>
              <div className="fh-pill">
                <svg viewBox="0 0 14 14" fill="none"><path d="M2.5 7L5.5 10L11.5 4" stroke="#3598d9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                S{"é"}ances de coaching personnalis{"é"}es
              </div>
              <div className="fh-pill">
                <svg viewBox="0 0 14 14" fill="none"><path d="M2.5 7L5.5 10L11.5 4" stroke="#3598d9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                Outils IA inclus
              </div>
            </div>

            <div className="fh-ctas fh-reveal fh-reveal-d3">
              <a href={calendlyUrl} target="_blank" rel="noopener noreferrer" className="fh-cta-main">
                Rejoindre la formation
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
              </a>
              <a href="#programme" className="fh-cta-sec">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><polyline points="19 12 12 19 5 12"/></svg>
                Voir le programme
              </a>
            </div>

          </div>

          <div className="fh-right fh-reveal fh-reveal-d2">
            <div className="fh-glow"></div>
            <div className="fh-visual">

              <div className="fh-main-card">
                <div className="fh-mc-overline">Programme de la journ{"é"}e</div>
                <div className="fh-mc-title">Recruter avec impact, cr{"é"}er une <span className="fh-grad">exp{"é"}rience candidat</span> m{"é"}morable</div>
                <div className="fh-mc-items">
                  <div className="fh-mc-item">
                    <div className="fh-mc-check"><svg viewBox="0 0 12 12" fill="none"><path d="M2 6.5L4.5 9L10 3" stroke="#5264e4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></div>
                    Parcours candidat en 6 {"é"}tapes
                  </div>
                  <div className="fh-mc-item">
                    <div className="fh-mc-check"><svg viewBox="0 0 12 12" fill="none"><path d="M2 6.5L4.5 9L10 3" stroke="#427ede" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></div>
                    M{"é"}thode F.A.I.R. pour les refus
                  </div>
                  <div className="fh-mc-item">
                    <div className="fh-mc-check"><svg viewBox="0 0 12 12" fill="none"><path d="M2 6.5L4.5 9L10 3" stroke="#3598d9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></div>
                    Marque employeur cr{"é"}dible
                  </div>
                  <div className="fh-mc-item">
                    <div className="fh-mc-check"><svg viewBox="0 0 12 12" fill="none"><path d="M2 6.5L4.5 9L10 3" stroke="#5264e4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></div>
                    Plan d{"'"}action + indicateurs
                  </div>
                </div>
              </div>

              <div className="fh-float-1">
                <div className="fh-f1-icon"><svg viewBox="0 0 18 18" fill="none"><path d="M3.5 9.5L7 13L14.5 5" stroke="#22c55e" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/></svg></div>
                <div>
                  <div className="fh-f1-text">Pack IA Recruteur</div>
                  <div className="fh-f1-sub">Agents IA + templates inclus</div>
                </div>
              </div>

              <div className="fh-float-3">
                <div className="fh-f3-text">
                  <svg viewBox="0 0 14 14" fill="none"><circle cx="7" cy="7" r="5.5" stroke="#f5c075" strokeWidth="1.5"/><path d="M7 4.5v3l2 1" stroke="#f5c075" strokeWidth="1.5" strokeLinecap="round"/></svg>
                  S{"é"}ances de coaching personnalis{"é"}es
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>
    </>
  );
};

export default FormationHero;
