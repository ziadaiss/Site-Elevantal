import React, { useEffect, useRef } from 'react';

const WhyImproveExperience = () => {
  const sectionRef = useRef(null);
  const calendlyUrl = "https://calendly.com/contact-elevantal/30min";

  useEffect(() => {
    const els = sectionRef.current ? sectionRef.current.querySelectorAll('.pq-reveal') : [];
    const obs = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.classList.add('pq-visible');
          obs.unobserve(e.target);
        }
      });
    }, { threshold: 0.12 });
    els.forEach(function (el) { obs.observe(el); });

    setTimeout(function () {
      els.forEach(function (el) {
        if (!el.classList.contains('pq-visible')) {
          const rect = el.getBoundingClientRect();
          if (rect.top < window.innerHeight && rect.bottom > 0) {
            el.classList.add('pq-visible');
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
.pourquoi{padding:100px 0 120px;background:#F3F4F6}
.pourquoi .pq-container{max-width:1120px;margin:0 auto;padding:0 32px}
.pq-top{display:grid;grid-template-columns:1fr 1fr;gap:60px;align-items:start;margin-bottom:64px}
.pq-overline{display:inline-block;padding:6px 18px;border-radius:100px;font-size:11px;font-weight:700;letter-spacing:1.8px;text-transform:uppercase;background:rgba(82,100,228,.08);color:#5264e4;margin-bottom:20px}
.pq-top-left h2{font-size:clamp(28px,4vw,42px);font-weight:800;line-height:1.12;letter-spacing:-.02em;color:#1a1a2e}
.pq-top-left h2 .pq-grad{background:linear-gradient(90deg,#5264e4,#427ede,#3598d9);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}
.pq-top-right{padding-top:40px}
.pq-top-right p{font-size:16px;font-weight:400;color:#6B7280;line-height:1.85}
.pq-top-right p strong{font-weight:600;color:#374151}
.pq-grid{display:grid;grid-template-columns:1fr 1fr;gap:20px;margin-bottom:56px}
.pq-card{background:#fff;border:1px solid #E5E7EB;border-radius:18px;padding:0;overflow:hidden;transition:.5s;position:relative}
.pq-card:hover{background:#fff;border-color:rgba(226,75,74,.25);transform:translateY(-4px);box-shadow:0 12px 32px rgba(0,0,0,.06)}
.pq-card-inner{display:grid;grid-template-columns:72px 1fr;min-height:100%}
.pq-card-side{display:flex;align-items:center;justify-content:center}
.pq-card:nth-child(1) .pq-card-side{background:rgba(226,75,74,.06)}
.pq-card:nth-child(2) .pq-card-side{background:rgba(245,192,117,.06)}
.pq-card:nth-child(3) .pq-card-side{background:rgba(226,75,74,.06)}
.pq-card:nth-child(4) .pq-card-side{background:rgba(245,192,117,.06)}
.pq-errnum{font-size:28px;font-weight:900;opacity:.7}
.pq-card:nth-child(1) .pq-errnum{color:#e24b4a}
.pq-card:nth-child(2) .pq-errnum{color:#D4A017}
.pq-card:nth-child(3) .pq-errnum{color:#e24b4a}
.pq-card:nth-child(4) .pq-errnum{color:#D4A017}
.pq-card-body{padding:28px 24px}
.pq-card-body h4{font-size:16px;font-weight:700;line-height:1.35;margin-bottom:10px;color:#1a1a2e}
.pq-card-body p{font-size:13px;color:#6B7280;line-height:1.75;font-weight:400}
.pq-bottom{text-align:center}
.pq-bottom p{font-size:18px;font-weight:500;color:#374151;line-height:1.7;max-width:640px;margin:0 auto 32px}
.pq-bottom p strong{font-weight:700;color:#1a1a2e}
.pq-cta{display:inline-flex;align-items:center;gap:10px;padding:18px 36px;background:linear-gradient(90deg,#5264e4,#427ede,#3598d9);border:none;border-radius:14px;color:#fff;font-family:inherit;font-size:16px;font-weight:700;cursor:pointer;transition:.4s;text-decoration:none;box-shadow:0 4px 24px rgba(82,100,228,.25)}
.pq-cta:hover{transform:translateY(-3px);box-shadow:0 12px 40px rgba(82,100,228,.4)}
.pq-cta svg{width:18px;height:18px;transition:.3s}
.pq-cta:hover svg{transform:translateX(4px)}
.pq-reveal{opacity:0;transform:translateY(40px);transition:opacity .8s cubic-bezier(.16,1,.3,1),transform .8s cubic-bezier(.16,1,.3,1)}
.pq-reveal.pq-visible{opacity:1;transform:translateY(0)}
.pq-reveal-d1{transition-delay:.1s}
.pq-reveal-d2{transition-delay:.2s}
.pq-reveal-d3{transition-delay:.3s}
.pq-reveal-d4{transition-delay:.4s}
@media(max-width:900px){
.pq-top{grid-template-columns:1fr;gap:20px}
.pq-top-right{padding-top:0}
.pq-grid{grid-template-columns:1fr}
}
@media(max-width:600px){
.pq-card-inner{grid-template-columns:56px 1fr}
.pq-card-body{padding:22px 18px}
}
      `}</style>

      <section className="pourquoi" ref={sectionRef}>
        <div className="pq-container">

          <div className="pq-top">
            <div className="pq-top-left">
              <div className="pq-overline pq-reveal">Accompagnement RH{"é"}v{"é"}lation</div>
              <h2 className="pq-reveal pq-reveal-d1">Pourquoi am{"é"}liorer votre <span className="pq-grad">exp{"é"}rience candidat</span> en PME ?</h2>
            </div>
            <div className="pq-top-right pq-reveal pq-reveal-d2">
              <p>Chaque candidat non-retenu devient soit un d{"é"}tracteur, soit un ambassadeur de votre <strong>marque employeur</strong>. La plupart des PME font 4 erreurs qui co{"û"}tent cher en candidatures manqu{"é"}es et en r{"é"}putation ab{"î"}m{"é"}e.</p>
            </div>
          </div>

          <div className="pq-grid">
            <div className="pq-card pq-reveal">
              <div className="pq-card-inner">
                <div className="pq-card-side"><div className="pq-errnum">01</div></div>
                <div className="pq-card-body">
                  <h4>Votre processus de recrutement fait fuir sans que vous le sachiez</h4>
                  <p>Un parcours trop long, des {"é"}tapes floues, aucun retour apr{"è"}s l{"'"}entretien. R{"é"}sultat : des candidats qui abandonnent en silence. Am{"é"}liorer votre exp{"é"}rience candidat commence par identifier o{"ù"} vous les perdez.</p>
                </div>
              </div>
            </div>
            <div className="pq-card pq-reveal pq-reveal-d1">
              <div className="pq-card-inner">
                <div className="pq-card-side"><div className="pq-errnum">02</div></div>
                <div className="pq-card-body">
                  <h4>Vos offres d{"'"}emploi ressemblent {"à"} toutes les autres</h4>
                  <p>M{"ê"}me structure, m{"ê"}me ton, m{"ê"}mes phrases. Les candidats les parcourent en 10 secondes et passent {"à"} la suivante. Votre offre ne donne aucune raison de postuler chez vous plut{"ô"}t que chez le concurrent.</p>
                </div>
              </div>
            </div>
            <div className="pq-card pq-reveal pq-reveal-d2">
              <div className="pq-card-inner">
                <div className="pq-card-side"><div className="pq-errnum">03</div></div>
                <div className="pq-card-body">
                  <h4>Vos candidats restent sans r{"é"}ponse apr{"è"}s l{"'"}entretien</h4>
                  <p>Pas de retour, des d{"é"}lais trop longs, un feedback inexistant. Le silence apr{"è"}s un entretien envoie le pire des messages. Un simple mail de refus personnalis{"é"} change tout pour votre marque employeur.</p>
                </div>
              </div>
            </div>
            <div className="pq-card pq-reveal pq-reveal-d3">
              <div className="pq-card-inner">
                <div className="pq-card-side"><div className="pq-errnum">04</div></div>
                <div className="pq-card-body">
                  <h4>Vous ne mesurez pas vos d{"é"}lais de recrutement ni vos abandons</h4>
                  <p>Pas d{"'"}indicateurs, pas de suivi, pas de donn{"é"}es sur votre parcours candidat. Vous recrutez {"à"} l{"'"}instinct. R{"é"}duire vos d{"é"}lais de recrutement en PME commence par les mesurer.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="pq-bottom pq-reveal pq-reveal-d4">
            <p>L{"'"}accompagnement RH{"é"}v{"é"}lation cible ces 4 points et <strong>s{"'"}adapte {"à"} votre r{"é"}alit{"é"} de PME</strong>. On en parle ?</p>
            <a href={calendlyUrl} target="_blank" rel="noopener noreferrer" className="pq-cta">
              R{"é"}server un {"é"}change
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </a>
          </div>

        </div>
      </section>
    </>
  );
};

export default WhyImproveExperience;
