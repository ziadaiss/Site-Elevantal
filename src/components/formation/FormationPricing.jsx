import React, { useEffect, useRef } from 'react';

const FormationPricing = () => {
  const sectionRef = useRef(null);
  const calendlyUrl = "https://calendly.com/contact-elevantal/premier-echange";

  useEffect(() => {
    const els = sectionRef.current ? sectionRef.current.querySelectorAll('.tp-reveal') : [];
    const obs = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.classList.add('tp-visible');
          obs.unobserve(e.target);
        }
      });
    }, { threshold: 0.12 });
    els.forEach(function (el) { obs.observe(el); });

    return () => obs.disconnect();
  }, []);

  const CheckIcon = () => (
    <div className="tc-feat-icon">
      <svg viewBox="0 0 12 12" fill="none"><path d="M2 6.5L4.5 9L10 3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
    </div>
  );

  const CrossIcon = () => (
    <div className="tc-feat-icon">
      <svg viewBox="0 0 12 12" fill="none"><path d="M3 3l6 6M9 3l-6 6" strokeWidth="2" strokeLinecap="round"/></svg>
    </div>
  );

  return (
    <>
      <style>{`
.tarifs{padding:100px 0 120px;background:#F3F4F6}
.tarifs .container{max-width:1180px;margin:0 auto;padding:0 32px}
.tarifs-top{text-align:center;margin-bottom:56px}
.tarifs-overline{display:inline-block;padding:6px 18px;border-radius:100px;font-size:11px;font-weight:700;letter-spacing:1.8px;text-transform:uppercase;background:rgba(82,100,228,.08);color:#5264e4;margin-bottom:18px}
.tarifs-top h2{font-size:clamp(28px,4vw,42px);font-weight:800;line-height:1.15;letter-spacing:-.02em;margin-bottom:14px;color:#1a1a2e}
.tarifs-top h2 .tp-grad{background:linear-gradient(90deg,#5264e4,#427ede,#3598d9);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}
.tarifs-top>p{font-size:16px;font-weight:400;color:#6B7280;max-width:560px;margin:0 auto}
.tarifs-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:24px;align-items:start}
.tc{background:#fff;border-radius:22px;padding:40px 32px;position:relative;overflow:hidden;transition:.4s;border:2px solid transparent}
.tc:hover{transform:translateY(-6px);box-shadow:0 20px 50px rgba(0,0,0,.08)}
.tc-pop{background:linear-gradient(180deg,#040a23 0%,#09153f 100%);color:#fff;border:2px solid rgba(82,100,228,.3);box-shadow:0 20px 60px rgba(82,100,228,.15)}
.tc-pop:hover{box-shadow:0 28px 70px rgba(82,100,228,.25);transform:translateY(-8px)}
.tc-badge{position:absolute;top:0;left:50%;transform:translateX(-50%);padding:6px 24px;background:linear-gradient(90deg,#5264e4,#427ede,#3598d9);border-radius:0 0 12px 12px;font-size:11px;font-weight:700;letter-spacing:1.2px;text-transform:uppercase;color:#fff}
.tc-header{margin-bottom:28px;padding-bottom:24px;border-bottom:1px solid rgba(0,0,0,.06)}
.tc-pop .tc-header{border-bottom-color:rgba(255,255,255,.08)}
.tc-name{font-size:13px;font-weight:600;color:#6B7280;text-transform:uppercase;letter-spacing:1px;margin-bottom:4px}
.tc-pop .tc-name{color:rgba(255,255,255,.5)}
.tc-title{font-size:22px;font-weight:800;line-height:1.2;margin-bottom:16px}
.tc-pop .tc-title .tp-grad{background:linear-gradient(90deg,#5264e4,#427ede,#3598d9);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}
.tc-price{display:flex;align-items:baseline;gap:8px}
.tc-amount{font-size:48px;font-weight:900;letter-spacing:-.03em;line-height:1}
.tc-pop .tc-amount{background:linear-gradient(90deg,#5264e4,#427ede,#3598d9);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}
.tc-currency{font-size:24px;font-weight:700}
.tc-pop .tc-currency{background:linear-gradient(90deg,#5264e4,#427ede,#3598d9);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}
.tc-per{font-size:14px;font-weight:400;color:#9CA3AF}
.tc-pop .tc-per{color:rgba(255,255,255,.4)}
.tc-devis{font-size:36px;font-weight:900;letter-spacing:-.02em;line-height:1}
.tc-features{display:flex;flex-direction:column;gap:14px;margin-bottom:32px}
.tc-feat{display:flex;align-items:flex-start;gap:12px;font-size:14px;font-weight:400;color:#374151;line-height:1.5}
.tc-pop .tc-feat{color:rgba(255,255,255,.75)}
.tc-feat-icon{width:22px;height:22px;min-width:22px;border-radius:6px;display:flex;align-items:center;justify-content:center;margin-top:1px}
.tc-feat-icon svg{width:12px;height:12px}
.tc .tc-feat-icon{background:rgba(82,100,228,.08)}
.tc .tc-feat-icon svg path{stroke:#5264e4}
.tc-pop .tc-feat-icon{background:rgba(82,100,228,.2)}
.tc-pop .tc-feat-icon svg path{stroke:#7aacf0}
.tc-feat.disabled{opacity:.35}
.tc-feat.disabled .tc-feat-icon{background:rgba(0,0,0,.04)}
.tc-feat.disabled .tc-feat-icon svg path{stroke:#9CA3AF}
.tc-cta{display:block;width:100%;padding:16px;text-align:center;border-radius:14px;font-family:inherit;font-size:15px;font-weight:700;cursor:pointer;transition:.4s;text-decoration:none;letter-spacing:.3px}
.tc-cta-outline{background:transparent;border:2px solid #1a1a2e;color:#1a1a2e}
.tc-cta-outline:hover{background:#1a1a2e;color:#fff}
.tc-cta-gradient{background:linear-gradient(90deg,#5264e4,#427ede,#3598d9);border:none;color:#fff;box-shadow:0 4px 20px rgba(82,100,228,.3)}
.tc-cta-gradient:hover{transform:translateY(-2px);box-shadow:0 8px 30px rgba(82,100,228,.45)}
.tc-cta-dark{background:#1a1a2e;border:2px solid #1a1a2e;color:#fff}
.tc-cta-dark:hover{background:#2d2d4e;border-color:#2d2d4e}
.tc-note{text-align:center;margin-top:14px;font-size:11px;color:#9CA3AF;font-weight:400}
.tc-pop .tc-note{color:rgba(255,255,255,.35)}
.tarifs-bottom{text-align:center;margin-top:40px}
.tarifs-bottom p{font-size:13px;color:#9CA3AF;font-weight:400;max-width:500px;margin:0 auto}
.tarifs-bottom p strong{font-weight:600;color:#6B7280}
.tp-reveal{opacity:0;transform:translateY(40px);transition:opacity .8s cubic-bezier(.16,1,.3,1),transform .8s cubic-bezier(.16,1,.3,1)}
.tp-reveal.tp-visible{opacity:1;transform:translateY(0)}
.tp-reveal-d1{transition-delay:.1s}
.tp-reveal-d2{transition-delay:.2s}
.tp-reveal-d3{transition-delay:.3s}
@media(max-width:900px){
.tarifs-grid{grid-template-columns:1fr;max-width:420px;margin:0 auto}
.tc-pop{order:-1}
}
      `}</style>

      <section className="tarifs" ref={sectionRef}>
        <div className="container">

          <div className="tarifs-top">
            <div className="tarifs-overline tp-reveal">Tarifs formation exp{"é"}rience candidat</div>
            <h2 className="tp-reveal tp-reveal-d1">Choisissez la formule <span className="tp-grad">qui vous correspond</span></h2>
            <p className="tp-reveal tp-reveal-d2">Une m{"é"}thode qui s{"'"}adapte {"à"} votre contexte et {"à"} vos objectifs de recrutement en PME.</p>
          </div>

          <div className="tarifs-grid">

            {/* ESSENTIELLE */}
            <div className="tc tp-reveal">
              <div className="tc-header">
                <div className="tc-name">Essentielle</div>
                <div className="tc-title">M{"é"}thode RH{"é"}v{"é"}lation</div>
                <div className="tc-price">
                  <span className="tc-amount">1 590</span>
                  <span className="tc-currency">{"€"}</span>
                  <span className="tc-per">par personne</span><span className="tc-per" style={{display:'block',fontSize:'11px',opacity:'.6',marginTop:'2px'}}>{"à"} partir de 3 participants</span>
                </div>
              </div>
              <div className="tc-features">
                <div className="tc-feat"><CheckIcon /> 1 journ{"é"}e de formation (pr{"é"}sentiel ou distanciel)</div>
                <div className="tc-feat"><CheckIcon /> 2 s{"é"}ances de coaching post-formation</div>
                <div className="tc-feat"><CheckIcon /> Pack IA Recruteur (2 agents IA + livre num{"é"}rique)</div>
                <div className="tc-feat disabled"><CrossIcon /> Kit Marque Employeur</div>
                <div className="tc-feat disabled"><CrossIcon /> Acc{"è"}s aux 6 webinaires priv{"é"}s</div>
              </div>
              <a href={calendlyUrl} target="_blank" rel="noopener noreferrer" className="tc-cta tc-cta-outline">Je suis int{"é"}ress{"é"}</a>
              <div className="tc-note">Id{"é"}al pour d{"é"}couvrir la m{"é"}thode</div>
            </div>

            {/* PRO (POPULAIRE) */}
            <div className="tc tc-pop tp-reveal tp-reveal-d1">
              <div className="tc-badge">Recommand{"é"}</div>
              <div className="tc-header">
                <div className="tc-name">Pro</div>
                <div className="tc-title">M{"é"}thode RH{"é"}v{"é"}lation <span className="tp-grad">Pro</span></div>
                <div className="tc-price">
                  <span className="tc-amount">1 790</span>
                  <span className="tc-currency">{"€"}</span>
                  <span className="tc-per">par personne</span><span className="tc-per" style={{display:'block',fontSize:'11px',opacity:'.6',marginTop:'2px'}}>{"à"} partir de 3 participants</span>
                </div>
              </div>
              <div className="tc-features">
                <div className="tc-feat"><CheckIcon /> 1 journ{"é"}e de formation (pr{"é"}sentiel ou distanciel)</div>
                <div className="tc-feat"><CheckIcon /> 4 s{"é"}ances de coaching post-formation</div>
                <div className="tc-feat"><CheckIcon /> Pack IA Recruteur (2 agents IA + livre num{"é"}rique)</div>
                <div className="tc-feat"><CheckIcon /> Kit Marque Employeur (agents IA, grilles d{"'"}audit, mod{"è"}les)</div>
                <div className="tc-feat"><CheckIcon /> Acc{"è"}s illimit{"é"} aux 6 webinaires priv{"é"}s pendant 1 an</div>
              </div>
              <a href={calendlyUrl} target="_blank" rel="noopener noreferrer" className="tc-cta tc-cta-gradient">Je suis int{"é"}ress{"é"}</a>
              <div className="tc-note">Le meilleur rapport qualit{"é"}-r{"é"}sultats</div>
            </div>

            {/* PERSONNALISÉE */}
            <div className="tc tp-reveal tp-reveal-d2">
              <div className="tc-header">
                <div className="tc-name">Sur-mesure</div>
                <div className="tc-title">M{"é"}thode RH{"é"}v{"é"}lation Personnalis{"é"}e</div>
                <div className="tc-price">
                  <span className="tc-devis">Sur devis</span>
                </div>
              </div>
              <div className="tc-features">
                <div className="tc-feat"><CheckIcon /> 1 journ{"é"}e de formation (pr{"é"}sentiel ou distanciel)</div>
                <div className="tc-feat"><CheckIcon /> S{"é"}ances de coaching personnalis{"é"}es</div>
                <div className="tc-feat"><CheckIcon /> Pack IA Recruteur (3 agents IA + livre num{"é"}rique)</div>
                <div className="tc-feat"><CheckIcon /> Kit Marque Employeur (agents IA, grilles d{"'"}audit, mod{"è"}les)</div>
                <div className="tc-feat"><CheckIcon /> Acc{"è"}s illimit{"é"} aux 6 webinaires priv{"é"}s pendant 1 an</div>
              </div>
              <a href={calendlyUrl} target="_blank" rel="noopener noreferrer" className="tc-cta tc-cta-dark">Demander un devis</a>
              <div className="tc-note">Adapt{"é"} {"à"} votre contexte multi-sites</div>
            </div>

          </div>

          <div className="tarifs-bottom tp-reveal tp-reveal-d3">
            <p><strong>Garantie satisfait ou accompagn{"é"}</strong> {"—"} tant que vous n{"'"}{"ê"}tes pas satisfait, on continue de vous accompagner sans frais suppl{"é"}mentaires.</p>
          </div>

        </div>
      </section>
    </>
  );
};

export default FormationPricing;
