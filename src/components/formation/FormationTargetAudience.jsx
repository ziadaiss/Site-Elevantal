import React from 'react';

const FormationTargetAudience = () => {
  const calendlyUrl = "https://calendly.com/contact-elevantal/premier-echange";

  return (
    <>
      <style>{`
        .pv-section{padding:100px 0;position:relative;background:#fff;font-family:'Poppins',sans-serif}
        .pv-container{max-width:1120px;margin:0 auto;padding:0 32px}
        .pv-inner{display:grid;grid-template-columns:400px 1fr;gap:64px;align-items:start}
        .pv-left{position:sticky;top:120px}
        .pv-overline{display:inline-block;padding:6px 18px;border-radius:100px;font-size:11px;font-weight:700;letter-spacing:1.8px;text-transform:uppercase;background:rgba(82,100,228,.08);color:#5264e4;margin-bottom:20px}
        .pv-section h2{font-size:clamp(28px,3.5vw,40px);font-weight:800;line-height:1.15;letter-spacing:-.02em;margin-bottom:20px;color:#1a1a2e}
        .pv-section h2 .pv-grad{background:linear-gradient(90deg,#5264e4,#427ede,#3598d9);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}
        .pv-left>p{font-size:15px;font-weight:400;color:#6B7280;line-height:1.8;margin-bottom:32px}
        .pv-cta{display:inline-flex;align-items:center;gap:10px;padding:14px 32px;background:linear-gradient(90deg,#5264e4,#427ede,#3598d9);border:none;border-radius:14px;color:#fff;font-family:inherit;font-size:14px;font-weight:700;cursor:pointer;transition:.4s;text-decoration:none;box-shadow:0 4px 24px rgba(82,100,228,.3)}
        .pv-cta:hover{transform:translateY(-2px);box-shadow:0 8px 40px rgba(82,100,228,.45)}
        .pv-cta svg{width:16px;height:16px}
        .pv-right{display:flex;flex-direction:column;gap:20px}
        .pv-card{background:#F9FAFB;border:1px solid #E5E7EB;border-radius:18px;padding:32px 28px;display:grid;grid-template-columns:56px 1fr;gap:20px;transition:all .5s ease;position:relative;overflow:hidden}
        .pv-card::before{content:'';position:absolute;left:0;top:0;bottom:0;width:3px;border-radius:18px 0 0 18px;opacity:0;transition:opacity .5s ease}
        .pv-card:hover{background:#fff;border-color:rgba(66,126,222,.3);transform:translateX(8px);box-shadow:0 8px 30px rgba(82,100,228,.08)}
        .pv-card:hover::before{opacity:1}
        .pv-card:nth-child(1)::before{background:#5264e4}
        .pv-card:nth-child(2)::before{background:#427ede}
        .pv-card:nth-child(3)::before{background:#3598d9}
        .pv-card:nth-child(4)::before{background:linear-gradient(180deg,#3598d9,#5264e4)}
        .pv-num{width:56px;height:56px;border-radius:16px;display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:800;transition:all .5s ease}
        .pv-card:nth-child(1) .pv-num{background:rgba(82,100,228,.1);color:#5264e4}
        .pv-card:nth-child(2) .pv-num{background:rgba(66,126,222,.1);color:#427ede}
        .pv-card:nth-child(3) .pv-num{background:rgba(53,152,217,.1);color:#3598d9}
        .pv-card:nth-child(4) .pv-num{background:linear-gradient(135deg,rgba(53,152,217,.1),rgba(82,100,228,.1));color:#5264e4}
        .pv-card:hover:nth-child(1) .pv-num{background:rgba(82,100,228,.2);box-shadow:0 0 20px rgba(82,100,228,.15)}
        .pv-card:hover:nth-child(2) .pv-num{background:rgba(66,126,222,.2);box-shadow:0 0 20px rgba(66,126,222,.15)}
        .pv-card:hover:nth-child(3) .pv-num{background:rgba(53,152,217,.2);box-shadow:0 0 20px rgba(53,152,217,.15)}
        .pv-card:hover:nth-child(4) .pv-num{background:linear-gradient(135deg,rgba(53,152,217,.2),rgba(82,100,228,.2));box-shadow:0 0 20px rgba(82,100,228,.15)}
        .pv-card-body h4{font-size:17px;font-weight:700;line-height:1.35;margin-bottom:10px;color:#1a1a2e}
        .pv-card-body p{font-size:13.5px;font-weight:400;color:#6B7280;line-height:1.75}
        .pv-card-body p strong{font-weight:600;color:#374151}
        @media(max-width:900px){
          .pv-inner{grid-template-columns:1fr;gap:40px}
          .pv-left{position:relative;top:auto;text-align:center}
          .pv-left>p{max-width:500px;margin-left:auto;margin-right:auto}
        }
        @media(max-width:600px){
          .pv-card{grid-template-columns:44px 1fr;gap:16px;padding:24px 20px}
          .pv-num{width:44px;height:44px;font-size:18px;border-radius:12px}
        }
      `}</style>

      <section className="pv-section">
        <div className="pv-container">
          <div className="pv-inner">

            <div className="pv-left">
              <div className="pv-overline reveal">À qui s'adresse la formation</div>
              <h2 className="reveal reveal-d1">Cette formation est faite <span className="pv-grad">pour vous</span> si :</h2>
              <p className="reveal reveal-d2">Chaque point ci-dessous est une douleur que nous avons identifiée chez les RH en PME. Si vous vous reconnaissez dans au moins deux, RHévélation est faite pour vous.</p>
              <a href={calendlyUrl} target="_blank" rel="noopener noreferrer" className="pv-cta reveal reveal-d3">
                Rejoindre la formation
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
              </a>
            </div>

            <div className="pv-right">
              <div className="pv-card reveal">
                <div className="pv-num">01</div>
                <div className="pv-card-body">
                  <h4>Vous êtes seul·e à gérer le recrutement et vous n'avez pas le temps de bien faire</h4>
                  <p>14 postes ouverts, zéro process structuré, des candidats qui disparaissent sans explication. <strong>Vous perdez du temps</strong> au lieu de construire un vrai parcours candidat.</p>
                </div>
              </div>
              <div className="pv-card reveal reveal-d1">
                <div className="pv-num">02</div>
                <div className="pv-card-body">
                  <h4>Vos délais de recrutement explosent et vous n'avez aucune donnée pour le prouver</h4>
                  <p>Vous savez que votre processus a des fuites mais vous ne pouvez pas les mesurer. <strong>Quand la direction demande des chiffres</strong>, vous n'avez rien de concret à présenter.</p>
                </div>
              </div>
              <div className="pv-card reveal reveal-d2">
                <div className="pv-num">03</div>
                <div className="pv-card-body">
                  <h4>Vos offres attirent peu et votre site carrière date de 2016</h4>
                  <p>Les candidats comparent. Si votre page carrière est générique et vos avis en ligne inexistants, <strong>les meilleurs talents partent chez le concurrent</strong> avant même de postuler.</p>
                </div>
              </div>
              <div className="pv-card reveal reveal-d3">
                <div className="pv-num">04</div>
                <div className="pv-card-body">
                  <h4>Vous voulez des outils applicables dès lundi, pas un diaporama de 200 pages</h4>
                  <p>Modèles de mails, grilles d'audit, agents IA, tableau de bord — <strong>tout ce que vous repartez avec est directement utilisable</strong> dans votre quotidien de RH en PME.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default FormationTargetAudience;
