import React, { useEffect, useRef } from 'react';

const FormationGarantie = () => {
  const sectionRef = useRef(null);
  const calendlyUrl = "https://calendly.com/contact-elevantal/premier-echange";

  useEffect(() => {
    const els = sectionRef.current ? sectionRef.current.querySelectorAll('.gar-reveal') : [];
    const obs = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.classList.add('gar-visible');
          obs.unobserve(e.target);
        }
      });
    }, { threshold: 0.12 });
    els.forEach(function (el) { obs.observe(el); });

    return () => obs.disconnect();
  }, []);

  return (
    <>
      <style>{`
.garantie{padding:100px 0;background:#F3F4F6}
.garantie .gar-container{max-width:900px;margin:0 auto;padding:0 32px}
.garantie-box{position:relative;border-radius:24px;overflow:hidden;padding:56px 52px;background:#fff;border:1px solid #E5E7EB;box-shadow:0 4px 24px rgba(0,0,0,.06)}
.garantie-box::before{content:'';position:absolute;top:50%;right:-40px;transform:translateY(-50%);width:280px;height:280px;opacity:.03;background:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='white'%3E%3Cpath d='M12 2L4 5v6.09c0 5.05 3.41 9.76 8 10.91 4.59-1.15 8-5.86 8-10.91V5l-8-3z'/%3E%3C/svg%3E") no-repeat center;background-size:contain;pointer-events:none}
.garantie-top{display:flex;align-items:flex-start;gap:28px;margin-bottom:32px}
.garantie-shield{width:72px;height:72px;min-width:72px;border-radius:20px;background:linear-gradient(135deg,rgba(34,197,94,.12),rgba(34,197,94,.06));border:1px solid rgba(34,197,94,.15);display:flex;align-items:center;justify-content:center}
.garantie-shield svg{width:36px;height:36px}
.garantie-title{flex:1}
.garantie-title .gt-overline{font-size:11px;font-weight:700;letter-spacing:1.8px;text-transform:uppercase;color:#4ade80;margin-bottom:8px}
.garantie-title h2{font-size:clamp(24px,3.5vw,34px);font-weight:800;line-height:1.2;letter-spacing:-.02em;color:#1a1a2e}
.garantie-title h2 .gar-green{color:#4ade80}
.garantie-body{margin-bottom:36px}
.garantie-body p{font-size:16px;font-weight:400;color:#6B7280;line-height:1.85;margin-bottom:16px}
.garantie-body p strong{font-weight:600;color:#1a1a2e}
.garantie-quote{background:rgba(34,197,94,.04);border-left:3px solid #22c55e;border-radius:0 14px 14px 0;padding:24px 28px;margin-bottom:36px;display:flex;align-items:center;gap:24px}
.gq-content{flex:1}
.gq-content p{font-size:15px;font-weight:500;color:#374151;line-height:1.7;font-style:italic}
.garantie-quote .gq-author{margin-top:12px;font-size:13px;font-weight:600;color:#22c55e;font-style:normal}
.gq-photo{min-width:120px}
.gq-photo img{width:120px;height:120px;object-fit:contain}
.garantie-points{display:grid;grid-template-columns:1fr 1fr;gap:14px;margin-bottom:36px}
.gp-item{display:flex;align-items:center;gap:12px;padding:14px 18px;background:#F9FAFB;border:1px solid #E5E7EB;border-radius:12px;font-size:13px;font-weight:500;color:#374151;transition:.3s}
.gp-item:hover{background:#F3F4F6;border-color:rgba(34,197,94,.3)}
.gp-check{width:24px;height:24px;min-width:24px;border-radius:8px;background:rgba(34,197,94,.12);display:flex;align-items:center;justify-content:center}
.gp-check svg{width:13px;height:13px}
.garantie-cta{text-align:center}
.garantie-cta a{display:inline-flex;align-items:center;gap:10px;padding:18px 36px;background:linear-gradient(90deg,#5264e4,#427ede,#3598d9);border:none;border-radius:14px;color:#fff;font-family:inherit;font-size:16px;font-weight:700;cursor:pointer;transition:.4s;text-decoration:none;box-shadow:0 4px 30px rgba(82,100,228,.35)}
.garantie-cta a:hover{transform:translateY(-3px);box-shadow:0 12px 50px rgba(82,100,228,.5)}
.garantie-cta a svg{width:18px;height:18px;transition:.3s}
.garantie-cta a:hover svg{transform:translateX(4px)}
.gar-reveal{opacity:0;transform:translateY(40px);transition:opacity .8s cubic-bezier(.16,1,.3,1),transform .8s cubic-bezier(.16,1,.3,1)}
.gar-reveal.gar-visible{opacity:1;transform:translateY(0)}
@media(max-width:700px){
.garantie-box{padding:36px 24px}
.garantie-top{flex-direction:column;gap:16px}
.garantie-points{grid-template-columns:1fr}
.garantie-quote{flex-direction:column;text-align:center}
.garantie-quote{border-left:none;border-top:3px solid #4ade80;border-radius:14px 14px 0 0}
}
      `}</style>

      <section className="garantie" ref={sectionRef}>
        <div className="gar-container">
          <div className="garantie-box gar-reveal">

            <div className="garantie-top">
              <div className="garantie-shield">
                <svg viewBox="0 0 36 36" fill="none">
                  <path d="M18 3L6 8v9.14c0 7.21 4.87 13.95 12 15.61 7.13-1.66 12-8.4 12-15.61V8L18 3z" fill="rgba(74,222,128,.15)" stroke="#4ade80" strokeWidth="2"/>
                  <path d="M13 18.5L16 21.5L23 14.5" stroke="#4ade80" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="garantie-title">
                <div className="gt-overline">Notre engagement</div>
                <h2>Satisfait ou <span className="gar-green">accompagn{"é"}</span></h2>
              </div>
            </div>

            <div className="garantie-body">
              <p>On ne vous laisse pas repartir avec un classeur qui prend la poussi{"è"}re. <strong>Si {"à"} l{"'"}issue de la m{"é"}thode RH{"é"}v{"é"}lation, vous estimez que vos objectifs ne sont pas atteints, on continue de vous accompagner sans frais suppl{"é"}mentaires.</strong></p>
              <p>Pas de petites lignes, pas de limite de temps. On reste {"à"} vos c{"ô"}t{"é"}s jusqu{"'"}{"à"} ce que votre processus de recrutement et votre exp{"é"}rience candidat soient {"à"} la hauteur de vos ambitions.</p>
            </div>

            <div className="garantie-quote">
              <div className="gq-content">
                <p>{"\""}Je pr{"é"}f{"è"}re accompagner un client gratuitement que de le laisser repartir sans r{"é"}sultats. Un client satisfait, c{"'"}est la meilleure preuve que la m{"é"}thode fonctionne.{"\""}
                </p>
                <div className="gq-author">{"—"} Ziad Aissaoua, fondateur d{"'"}Elevantal</div>
              </div>
              <div className="gq-photo">
                <img src="/images/ziad-photo.png" alt="Ziad Aissaoua" />
              </div>
            </div>

            <div className="garantie-points">
              <div className="gp-item">
                <div className="gp-check"><svg viewBox="0 0 13 13" fill="none"><path d="M2 6.5L5 9.5L11 3.5" stroke="#4ade80" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></div>
                Accompagnement prolong{"é"} sans surco{"û"}t
              </div>
              <div className="gp-item">
                <div className="gp-check"><svg viewBox="0 0 13 13" fill="none"><path d="M2 6.5L5 9.5L11 3.5" stroke="#4ade80" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></div>
                Aucune condition cach{"é"}e
              </div>
              <div className="gp-item">
                <div className="gp-check"><svg viewBox="0 0 13 13" fill="none"><path d="M2 6.5L5 9.5L11 3.5" stroke="#4ade80" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></div>
                R{"é"}sultats mesurables avec vos indicateurs
              </div>
              <div className="gp-item">
                <div className="gp-check"><svg viewBox="0 0 13 13" fill="none"><path d="M2 6.5L5 9.5L11 3.5" stroke="#4ade80" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></div>
                Engagement terrain, pas juste th{"é"}orique
              </div>
            </div>

            <div className="garantie-cta">
              <a href={calendlyUrl} target="_blank" rel="noopener noreferrer">
                Rejoindre la formation
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
              </a>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default FormationGarantie;
