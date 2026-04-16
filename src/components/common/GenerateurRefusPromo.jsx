import React from 'react';
import { Link } from 'react-router-dom';

const GenerateurRefusPromo = () => {
  return (
    <>
      <style>{`
        .grp-section{padding:100px 0;position:relative;overflow:hidden;background:linear-gradient(180deg,#040a23 0%,#09153f 50%,#132873 100%);color:#fff;font-family:'Poppins',sans-serif}
        .grp-container{max-width:1120px;margin:0 auto;padding:0 32px;display:grid;grid-template-columns:1fr 380px;gap:60px;align-items:center}
        .grp-overline{display:block;font-size:12px;font-weight:700;letter-spacing:2.5px;text-transform:uppercase;background:linear-gradient(90deg,#5264e4,#427ede,#3598d9);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;margin-bottom:20px}
        .grp-section h2{font-size:clamp(30px,4.8vw,48px);font-weight:900;line-height:1.1;letter-spacing:-.03em;margin-bottom:24px}
        .grp-sub{font-size:16px;font-weight:300;color:rgba(255,255,255,.7);line-height:1.8;margin-bottom:36px;max-width:540px}
        .grp-sub strong{font-weight:600;color:rgba(255,255,255,.9)}
        .grp-intro{font-size:16px;font-weight:700;color:rgba(255,255,255,.9);margin-bottom:20px}
        .grp-checks{list-style:none;display:flex;flex-direction:column;gap:16px;margin-bottom:40px;padding:0}
        .grp-checks li{display:flex;align-items:flex-start;gap:14px;font-size:15px;font-weight:400;color:rgba(255,255,255,.9);line-height:1.6}
        .grp-check-icon{width:24px;height:24px;min-width:24px;display:flex;align-items:center;justify-content:center;margin-top:2px}
        .grp-check-icon svg{width:20px;height:20px}
        .grp-cta{display:inline-flex;align-items:center;gap:12px;padding:18px 40px;background:linear-gradient(90deg,#5264e4,#427ede,#3598d9);border:none;border-radius:14px;color:#fff;font-family:inherit;font-size:16px;font-weight:700;cursor:pointer;transition:.4s;text-decoration:none;letter-spacing:.3px;box-shadow:0 4px 30px rgba(82,100,228,.35)}
        .grp-cta:hover{transform:translateY(-3px);box-shadow:0 12px 50px rgba(82,100,228,.5)}
        .grp-cta svg{width:18px;height:18px;transition:.3s}
        .grp-cta:hover svg{transform:translateX(4px)}
        .grp-right{position:relative;display:flex;justify-content:center}
        .grp-phone-glow{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:480px;height:480px;background:radial-gradient(circle,rgba(82,100,228,.15),transparent 70%);pointer-events:none}
        .grp-phone{width:310px;background:#fff;border-radius:40px;padding:10px;box-shadow:0 50px 100px rgba(0,0,0,.5),0 0 0 1px rgba(255,255,255,.08);position:relative}
        .grp-phone-notch{position:absolute;top:12px;left:50%;transform:translateX(-50%);width:90px;height:26px;background:#1a1a2e;border-radius:20px;z-index:2}
        .grp-phone-screen{background:linear-gradient(180deg,#f0f2f8,#fff);border-radius:32px;padding:48px 18px 22px;min-height:460px}
        .grp-ps-title{font-size:15px;font-weight:700;color:#040a23;line-height:1.35;margin-bottom:18px}
        .grp-ps-field{margin-bottom:12px}
        .grp-ps-field label{display:block;font-size:10.5px;font-weight:600;color:#040a23;margin-bottom:4px}
        .grp-ps-field label em{font-style:normal;color:#e24b4a}
        .grp-ps-field input,.grp-ps-field select,.grp-ps-field textarea{width:100%;border:1.5px solid #dfe2ed;border-radius:9px;padding:9px 11px;font-family:'Poppins',sans-serif;font-size:11.5px;color:#9098b5;background:#fff;outline:none;resize:none}
        .grp-ps-field textarea{height:60px}
        .grp-ps-field .grp-hint{font-size:9.5px;color:#b5bbd1;margin-top:2px}
        .grp-ps-btn{width:100%;padding:12px;background:linear-gradient(90deg,#5264e4,#427ede,#3598d9);border:none;border-radius:11px;color:#fff;font-family:'Poppins',sans-serif;font-size:12.5px;font-weight:700;cursor:pointer;margin-top:4px;letter-spacing:.2px}
        @media(max-width:900px){
          .grp-container{grid-template-columns:1fr;gap:40px}
          .grp-right{order:-1}
          .grp-phone{width:280px}
        }
        @media(max-width:600px){
          .grp-section{padding:80px 0 60px}
          .grp-phone{width:260px}
          .grp-phone-screen{padding:42px 14px 18px;min-height:400px}
        }
      `}</style>

      <section className="grp-section reveal">
        <div className="grp-container">
          <div>
            <div className="grp-overline">Agent IA feedback post-entretien</div>
            <h2>Générez un mail de refus candidat personnalisé en 10 secondes !</h2>
            <p className="grp-sub">
              Si vos candidats restent sans réponse après un entretien, que vous n'avez pas le temps de rédiger des <strong>feedbacks post-entretien</strong> individuels, ou que le <strong>ghosting candidat</strong> nuit à votre <strong>marque employeur</strong>...
            </p>
            <p className="grp-intro">Accédez à votre agent IA immédiatement pour :</p>
            <ul className="grp-checks">
              <li>
                <span className="grp-check-icon">
                  <svg viewBox="0 0 20 20" fill="none"><path d="M3 10.5L7.5 15L17 5" stroke="#3598d9" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </span>
                Rédiger un e-mail de refus humain et structuré en quelques secondes
              </li>
              <li>
                <span className="grp-check-icon">
                  <svg viewBox="0 0 20 20" fill="none"><path d="M3 10.5L7.5 15L17 5" stroke="#3598d9" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </span>
                Améliorer votre expérience candidat sans effort supplémentaire
              </li>
              <li>
                <span className="grp-check-icon">
                  <svg viewBox="0 0 20 20" fill="none"><path d="M3 10.5L7.5 15L17 5" stroke="#3598d9" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </span>
                Fidéliser les candidats non retenus pour vos futurs recrutements
              </li>
            </ul>
            <Link to="/generateur-refus" className="grp-cta">
              Je télécharge le générateur
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </Link>
          </div>
          <div className="grp-right">
            <div className="grp-phone-glow"></div>
            <div className="grp-phone">
              <div className="grp-phone-notch"></div>
              <div className="grp-phone-screen">
                <div className="grp-ps-title">Générez un e-mail de refus humain et hyper-personnalisé en 10 secondes...</div>
                <div className="grp-ps-field">
                  <label>Prénom du candidat <em>*</em></label>
                  <input type="text" placeholder="Ex: Marie" readOnly />
                </div>
                <div className="grp-ps-field">
                  <label>Intitulé du poste visé <em>*</em></label>
                  <input type="text" placeholder="Ex: Développeur Full Stack" readOnly />
                </div>
                <div className="grp-ps-field">
                  <label>Notes d'entretien <em>*</em> <span style={{fontWeight:400,color:'#b5bbd1',fontSize:'9px'}}>(min. 20 car.)</span></label>
                  <textarea placeholder="Ex: Bon niveau technique mais manque d'expérience en leadership. Profil junior prometteur." readOnly></textarea>
                  <div className="grp-hint">0 / 20 caractères minimum</div>
                </div>
                <div className="grp-ps-field">
                  <label>Ton souhaité <em>*</em></label>
                  <select disabled><option>Sélectionnez un ton</option></select>
                </div>
                <button className="grp-ps-btn" type="button">Générer mon e-mail parfait</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default GenerateurRefusPromo;
