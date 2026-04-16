import React, { useEffect, useRef } from 'react';

const AccompagnementTimeline = () => {
  const sectionRef = useRef(null);
  const canvasRef = useRef(null);
  const calendlyUrl = "https://calendly.com/contact-elevantal/premier-echange";

  // Timeline glow observer
  useEffect(() => {
    if (!sectionRef.current) return;
    var items = sectionRef.current.querySelectorAll('.tl-item');
    var glowObs = new IntersectionObserver(function(entries) {
      entries.forEach(function(e) {
        if (e.isIntersecting) { e.target.classList.add('active'); }
        else { e.target.classList.remove('active'); }
      });
    }, { threshold: 0.4, rootMargin: '-10% 0px -10% 0px' });
    for (var i = 0; i < items.length; i++) glowObs.observe(items[i]);
    return function() { glowObs.disconnect(); };
  }, []);

  // Canvas dots animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let W, H, scrollY = 0, mouseX = -1, mouseY = -1;
    const dots = [];
    const TOTAL = 90;
    const colors = ['82,100,228', '66,126,222', '53,152,217'];

    function resize() {
      W = canvas.width = canvas.parentElement.offsetWidth;
      H = canvas.height = canvas.parentElement.offsetHeight;
    }
    resize();
    window.addEventListener('resize', resize);

    for (let i = 0; i < TOTAL; i++) {
      dots.push({
        ox: Math.random() * 3000 - 500,
        oy: Math.random() * 10000,
        r: Math.random() * 2.4 + 0.6,
        speed: 0.12 + Math.random() * 0.4,
        drift: 20 + Math.random() * 40,
        phase: Math.random() * Math.PI * 2,
        alpha: 0.06 + Math.random() * 0.22,
        color: colors[Math.floor(Math.random() * 3)]
      });
    }

    const onScroll = () => { scrollY = window.pageYOffset; };
    const onMouseMove = (e) => { mouseX = e.clientX; mouseY = e.clientY; };
    const onMouseLeave = () => { mouseX = -1; mouseY = -1; };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('mouseleave', onMouseLeave);

    let animId;
    function loop() {
      ctx.clearRect(0, 0, W, H);
      for (let i = 0; i < TOTAL; i++) {
        const d = dots[i];
        let yy = d.oy - scrollY * d.speed;
        yy = ((yy % H) + H) % H;
        let xx = d.ox + Math.sin(scrollY * 0.0015 + d.phase) * d.drift;
        xx = ((xx % W) + W) % W;

        let a = d.alpha;
        if (mouseX >= 0) {
          const dx = xx - mouseX, dy = yy - mouseY;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 200) {
            a += 0.4 * (1 - dist / 200);
          }
        }

        ctx.beginPath();
        ctx.arc(xx, yy, d.r, 0, 6.283185);
        ctx.fillStyle = 'rgba(' + d.color + ',' + a + ')';
        ctx.fill();
      }

      for (let i = 0; i < TOTAL; i++) {
        const d1 = dots[i];
        let y1 = d1.oy - scrollY * d1.speed; y1 = ((y1 % H) + H) % H;
        let x1 = d1.ox + Math.sin(scrollY * 0.0015 + d1.phase) * d1.drift; x1 = ((x1 % W) + W) % W;
        for (let j = i + 1; j < TOTAL; j++) {
          const d2 = dots[j];
          let y2 = d2.oy - scrollY * d2.speed; y2 = ((y2 % H) + H) % H;
          let x2 = d2.ox + Math.sin(scrollY * 0.0015 + d2.phase) * d2.drift; x2 = ((x2 % W) + W) % W;
          const dx = x1 - x2, dy = y1 - y2;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(x1, y1);
            ctx.lineTo(x2, y2);
            ctx.strokeStyle = 'rgba(82,100,228,' + (0.06 * (1 - dist / 120)) + ')';
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
      animId = requestAnimationFrame(loop);
    }
    loop();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseleave', onMouseLeave);
    };
  }, []);

  return (
    <>
      <style>{`
        .tl-section{padding:100px 0 120px;position:relative;overflow:hidden;background:linear-gradient(180deg,#040a23 0%,#060e2d 15%,#09153f 35%,#0c1b50 55%,#102364 75%,#132873 100%);color:#fff;font-family:'Poppins',sans-serif}
        .tl-dots-canvas{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:0}
        .tl-content-wrap{position:relative;z-index:1}
        .tl-section .tl-container{max-width:1120px;margin:0 auto;padding:0 32px}
        .tl-section h2{font-size:clamp(28px,4vw,44px);font-weight:800;line-height:1.15;letter-spacing:-.02em;text-align:center;margin-bottom:12px}
        .tl-section h2 .tl-grad{background:linear-gradient(90deg,#5264e4,#427ede,#3598d9);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}
        .tl-sub{text-align:center;font-size:16px;font-weight:300;color:rgba(255,255,255,.5);margin-bottom:72px}
        .timeline{position:relative;max-width:900px;margin:0 auto}
        .timeline::before{content:'';position:absolute;left:50%;top:0;bottom:0;width:2px;background:linear-gradient(180deg,rgba(82,100,228,.15),rgba(53,152,217,.15),rgba(82,100,228,.1));transform:translateX(-50%)}
        .tl-item{position:relative;display:flex;align-items:flex-start;margin-bottom:60px;transition:opacity .6s ease;opacity:.3}
        .tl-item:last-child{margin-bottom:0}
        .tl-item:nth-child(odd){flex-direction:row}
        .tl-item:nth-child(even){flex-direction:row-reverse}
        .tl-item.active{opacity:1}
        .tl-dot{position:absolute;left:50%;transform:translateX(-50%);width:20px;height:20px;border-radius:50%;border:3px solid rgba(66,126,222,.3);background:#040a23;z-index:2;top:32px;transition:all .6s ease}
        .tl-dot::after{content:'';position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:8px;height:8px;border-radius:50%;background:rgba(66,126,222,.3);transition:all .6s ease}
        .tl-item.active .tl-dot{border-color:#427ede;box-shadow:0 0 20px rgba(66,126,222,.5),0 0 40px rgba(66,126,222,.2)}
        .tl-item.active .tl-dot::after{background:#427ede;box-shadow:0 0 8px rgba(66,126,222,.8)}
        .tl-content{width:calc(50% - 48px);position:relative}
        .tl-item:nth-child(odd) .tl-content{margin-right:auto}
        .tl-item:nth-child(even) .tl-content{margin-left:auto}
        .tl-label{display:inline-block;padding:6px 18px;border-radius:100px;font-size:12px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;margin-bottom:16px;transition:all .6s ease}
        .tl-item:nth-child(1) .tl-label,.tl-item:nth-child(4) .tl-label{background:rgba(82,100,228,.15);color:#8090f0}
        .tl-item:nth-child(2) .tl-label,.tl-item:nth-child(5) .tl-label{background:rgba(66,126,222,.15);color:#7aacf0}
        .tl-item:nth-child(3) .tl-label,.tl-item:nth-child(6) .tl-label{background:rgba(53,152,217,.15);color:#6dc0eb}
        .tl-card{background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.08);border-radius:18px;padding:28px 26px;backdrop-filter:blur(8px);transition:all .6s ease}
        .tl-item.active .tl-card{background:rgba(255,255,255,.07);border-color:rgba(66,126,222,.3);box-shadow:0 0 30px rgba(82,100,228,.1),0 8px 32px rgba(0,0,0,.2)}
        .tl-card h4{font-size:18px;font-weight:700;margin-bottom:12px;line-height:1.3}
        .tl-card p{font-size:13.5px;color:rgba(255,255,255,.7);line-height:1.75;font-weight:300}
        .tl-livrable{margin-top:16px;padding-top:14px;border-top:1px solid rgba(255,255,255,.08);font-size:12.5px;font-weight:500;line-height:1.6}
        .tl-livrable span{background:linear-gradient(90deg,#5264e4,#427ede,#3598d9);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;font-weight:700}
        .timeline-cta{text-align:center;margin-top:72px}
        .timeline-cta a{display:inline-flex;align-items:center;gap:12px;padding:18px 44px;background:linear-gradient(90deg,#5264e4,#427ede,#3598d9);border:none;border-radius:100px;color:#fff;font-family:inherit;font-size:16px;font-weight:700;cursor:pointer;transition:.4s;text-decoration:none;letter-spacing:.3px;box-shadow:0 4px 30px rgba(82,100,228,.3)}
        .timeline-cta a:hover{transform:translateY(-3px);box-shadow:0 12px 50px rgba(82,100,228,.45)}
        .timeline-cta a svg{width:18px;height:18px;transition:.3s}
        .timeline-cta a:hover svg{transform:translateX(4px)}
        @media(max-width:768px){
          .timeline::before{left:24px}
          .tl-dot{left:24px}
          .tl-item,.tl-item:nth-child(odd),.tl-item:nth-child(even){flex-direction:row}
          .tl-content,.tl-item:nth-child(odd) .tl-content,.tl-item:nth-child(even) .tl-content{width:calc(100% - 64px);margin-left:auto;margin-right:0}
        }
      `}</style>

      <section className="tl-section" ref={sectionRef}>
        <canvas className="tl-dots-canvas" ref={canvasRef}></canvas>
        <div className="tl-content-wrap">
        <div className="tl-container">
          <h2>Les étapes de <span className="tl-grad">l'accompagnement</span></h2>
          <p className="tl-sub">6 mois pour transformer durablement votre expérience candidat</p>

          <div className="timeline">
            <div className="tl-item">
              <div className="tl-dot"></div>
              <div className="tl-content">
                <div className="tl-label">Étape 1</div>
                <div className="tl-card">
                  <h4>Diagnostic Immersion</h4>
                  <p>Audit complet de votre parcours candidat, analyse de vos KPIs actuels, entretiens avec votre équipe et 5 candidats récents.</p>
                  <div className="tl-livrable"><span>Livrable :</span> Rapport de diagnostic + session de restitution (2h)</div>
                </div>
              </div>
            </div>

            <div className="tl-item">
              <div className="tl-dot"></div>
              <div className="tl-content">
                <div className="tl-label">Étape 2</div>
                <div className="tl-card">
                  <h4>Stratégie Personnalisée</h4>
                  <p>Définition de vos objectifs SMART, création de vos personas candidats émotionnels, priorisation des Quick Wins adaptés à votre situation.</p>
                  <div className="tl-livrable"><span>Livrable :</span> Feuille de route stratégique + Personas + Planning d'action</div>
                </div>
              </div>
            </div>

            <div className="tl-item">
              <div className="tl-dot"></div>
              <div className="tl-content">
                <div className="tl-label">Étape 3</div>
                <div className="tl-card">
                  <h4>Optimisation du Parcours</h4>
                  <p>Transformation concrète de chaque étape : sourcing, communication, expérience entretien, délai de réponse, onboarding express.</p>
                  <div className="tl-livrable"><span>Livrable :</span> Templates prêts à l'emploi + Tableau de bord</div>
                </div>
              </div>
            </div>

            <div className="tl-item">
              <div className="tl-dot"></div>
              <div className="tl-content">
                <div className="tl-label">Étape 4</div>
                <div className="tl-card">
                  <h4>Activation Marque Employeur</h4>
                  <p>Audit de votre marque employeur, stratégie de contenu candidat, stratégie 3 mois, campagne de réactivation candidats refusés.</p>
                  <div className="tl-livrable"><span>Livrable :</span> Stratégie 6 mois + 10 posts LinkedIn</div>
                </div>
              </div>
            </div>

            <div className="tl-item">
              <div className="tl-dot"></div>
              <div className="tl-content">
                <div className="tl-label">Étape 5</div>
                <div className="tl-card">
                  <h4>Mesure & Pilotage</h4>
                  <p>Installation du tableau de bord 21 KPIs, formation à l'interprétation, campagne NPS candidat automatisée, rituels de suivi.</p>
                  <div className="tl-livrable"><span>Livrable :</span> Tableau de bord Excel</div>
                </div>
              </div>
            </div>

            <div className="tl-item">
              <div className="tl-dot"></div>
              <div className="tl-content">
                <div className="tl-label">Étape 6</div>
                <div className="tl-card">
                  <h4>Bilan & Pérennisation</h4>
                  <p>Mesure des résultats vs baseline, session de bilan, plan d'action 6 mois en autonomie.</p>
                  <div className="tl-livrable"><span>Livrable :</span> Rapport de résultats</div>
                </div>
              </div>
            </div>
          </div>

          <div className="timeline-cta">
            <a href={calendlyUrl} target="_blank" rel="noopener noreferrer">
              Réserver un échange
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </a>
          </div>
        </div>
        </div>
      </section>
    </>
  );
};

export default AccompagnementTimeline;
