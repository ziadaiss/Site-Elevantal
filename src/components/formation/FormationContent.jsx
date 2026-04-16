import React from 'react';

const FormationContent = () => {
  return (
    <>
      <style>{`
        .inclus{padding:100px 0;position:relative;overflow:hidden;background:linear-gradient(180deg,#040a23 0%,#09153f 50%,#132873 100%);color:#fff}
        .inclus .container{max-width:1200px;margin:0 auto;padding:0 24px}
        .inclus-inner{position:relative;text-align:center}
        .inclus-watermark{font-size:clamp(80px,14vw,160px);font-weight:900;line-height:.9;letter-spacing:-.04em;color:#fff;opacity:.04;position:absolute;top:-20px;left:50%;transform:translateX(-50%);white-space:nowrap;pointer-events:none;user-select:none}
        .inclus-inner h2{font-size:clamp(24px,3.5vw,36px);font-weight:800;line-height:1.2;margin-bottom:80px;position:relative}
        .inclus-inner h2 .grad{background:linear-gradient(90deg,#5264e4,#427ede,#3598d9);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}
        .inclus-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:24px;text-align:left}
        .inclus-card{background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.08);border-radius:20px;padding:0;overflow:hidden;transition:.4s}
        .inclus-card:hover{background:rgba(255,255,255,.08);transform:translateY(-6px);border-color:rgba(255,255,255,.15)}
        .inclus-card-icon{height:160px;display:flex;align-items:center;justify-content:center;position:relative;overflow:hidden}
        .inclus-card-icon::after{content:'';position:absolute;bottom:0;left:0;right:0;height:40px;background:linear-gradient(to top,rgba(4,10,35,.6),transparent);pointer-events:none}
        .ici-1{background:linear-gradient(135deg,rgba(82,100,228,.15),rgba(53,152,217,.1))}
        .ici-2{background:linear-gradient(135deg,rgba(53,152,217,.15),rgba(66,126,222,.1))}
        .ici-3{background:linear-gradient(135deg,rgba(66,126,222,.15),rgba(82,100,228,.1))}
        .inclus-card-body{padding:28px 24px}
        .inclus-card-body h4{font-size:17px;font-weight:700;line-height:1.3;margin-bottom:4px}
        .inclus-card-body .card-sub{font-size:14px;font-weight:600;margin-bottom:14px;background:linear-gradient(90deg,#5264e4,#427ede,#3598d9);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}
        .inclus-card-body p{font-size:13px;color:rgba(255,255,255,.5);line-height:1.75;font-weight:300}
        .inclus-card-body p+p{margin-top:10px}
        @media(max-width:900px){.inclus-grid{grid-template-columns:1fr}}
      `}</style>

      <section className="inclus reveal">
        <div className="container">
          <div className="inclus-inner">
            <div className="inclus-watermark">c'est inclus</div>
            <h2>dans la formation <span className="grad">RHévélation</span></h2>
            <div className="inclus-grid">

              <div className="inclus-card">
                <div className="inclus-card-icon ici-1">
                  <svg width="72" height="72" viewBox="0 0 72 72" fill="none">
                    <rect x="12" y="16" width="48" height="40" rx="6" stroke="#5264e4" strokeWidth="2.5" fill="rgba(82,100,228,.1)"/>
                    <path d="M12 28h48" stroke="#5264e4" strokeWidth="2"/>
                    <circle cx="20" cy="22" r="2.5" fill="#5264e4"/>
                    <circle cx="28" cy="22" r="2.5" fill="#427ede"/>
                    <circle cx="36" cy="22" r="2.5" fill="#3598d9"/>
                    <path d="M24 38h10M24 44h16" stroke="#427ede" strokeWidth="2" strokeLinecap="round"/>
                    <rect x="44" y="34" width="10" height="14" rx="2" fill="rgba(53,152,217,.2)" stroke="#3598d9" strokeWidth="1.5"/>
                    <path d="M47 40l2 2 3-4" stroke="#3598d9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="inclus-card-body">
                  <h4>Pack IA Recruteur</h4>
                  <div className="card-sub">agents IA + templates prêts à l'emploi</div>
                  <p>Livre numérique de templates de communication candidat pour ne plus jamais repartir de zéro.</p>
                  <p>Agent IA pour vos posts LinkedIn, votre calendrier éditorial, l'analyse de votre grille d'expérience candidat et la création de personas candidats.</p>
                </div>
              </div>

              <div className="inclus-card">
                <div className="inclus-card-icon ici-2">
                  <svg width="72" height="72" viewBox="0 0 72 72" fill="none">
                    <rect x="14" y="14" width="44" height="44" rx="8" stroke="#427ede" strokeWidth="2.5" fill="rgba(66,126,222,.1)"/>
                    <path d="M26 30l6 6 14-14" stroke="#3598d9" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M22 42h28M22 48h20" stroke="#5264e4" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
                <div className="inclus-card-body">
                  <h4>Kit Marque Employeur</h4>
                  <div className="card-sub">audit + outils opérationnels</div>
                  <p>Grille d'audit de votre site carrière, guide de création et d'optimisation, agent IA pour votre communication interne et la rédaction de vos offres d'emploi.</p>
                  <p>Modèle de landing page carrière + formulaire NPS candidat prêt à déployer.</p>
                </div>
              </div>

              <div className="inclus-card">
                <div className="inclus-card-icon ici-3">
                  <svg width="72" height="72" viewBox="0 0 72 72" fill="none">
                    <circle cx="36" cy="32" r="18" stroke="#5264e4" strokeWidth="2.5" fill="rgba(82,100,228,.1)"/>
                    <path d="M36 22v10l7 5" stroke="#427ede" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M24 54h24" stroke="#3598d9" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M28 58h16" stroke="#3598d9" strokeWidth="2" strokeLinecap="round" opacity=".5"/>
                  </svg>
                </div>
                <div className="inclus-card-body">
                  <h4>6 webinaires privés</h4>
                  <div className="card-sub">+ coaching post-formation (6×1h)</div>
                  <p>Accès illimité pendant 1 an à 6 webinaires exclusifs pour approfondir chaque thématique à votre rythme.</p>
                  <p>6 séances de coaching individuel sur-mesure pour passer à l'action, lever les blocages terrain et ancrer les apprentissages dans votre quotidien.</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FormationContent;
