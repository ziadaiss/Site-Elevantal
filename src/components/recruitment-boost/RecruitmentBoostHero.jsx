import React, { useEffect, useRef } from 'react';

const RecruitmentBoostHero = () => {
  const canvasRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    // --- Canvas dots animation ---
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let W, H, scrollY = 0, mouseX = -1, mouseY = -1;
    const dots = [];
    const TOTAL = 90;
    const colors = ['82,100,228', '66,126,222', '53,152,217'];
    let animId;

    function resize() {
      W = canvas.width = window.innerWidth;
      H = canvas.height = window.innerHeight;
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

    function onScroll() { scrollY = window.pageYOffset; }
    function onMouseMove(e) { mouseX = e.clientX; mouseY = e.clientY; }
    function onMouseLeave() { mouseX = -1; mouseY = -1; }
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('mouseleave', onMouseLeave);

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
          if (dist < 200) a += 0.4 * (1 - dist / 200);
        }
        ctx.beginPath();
        ctx.arc(xx, yy, d.r, 0, 6.283185);
        ctx.fillStyle = 'rgba(' + d.color + ',' + a + ')';
        ctx.fill();
      }
      for (let i = 0; i < TOTAL; i++) {
        const d1 = dots[i];
        let y1 = d1.oy - scrollY * d1.speed;
        y1 = ((y1 % H) + H) % H;
        let x1 = d1.ox + Math.sin(scrollY * 0.0015 + d1.phase) * d1.drift;
        x1 = ((x1 % W) + W) % W;
        for (let j = i + 1; j < TOTAL; j++) {
          const d2 = dots[j];
          let y2 = d2.oy - scrollY * d2.speed;
          y2 = ((y2 % H) + H) % H;
          let x2 = d2.ox + Math.sin(scrollY * 0.0015 + d2.phase) * d2.drift;
          x2 = ((x2 % W) + W) % W;
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

    // --- Reveal observer ---
    const els = sectionRef.current ? sectionRef.current.querySelectorAll('.ah-reveal') : [];
    const obs = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.classList.add('ah-visible');
          obs.unobserve(e.target);
        }
      });
    }, { threshold: 0.12 });
    els.forEach(function (el) { obs.observe(el); });

    // Force-check for elements already in viewport
    setTimeout(function () {
      els.forEach(function (el) {
        if (!el.classList.contains('ah-visible')) {
          const rect = el.getBoundingClientRect();
          if (rect.top < window.innerHeight && rect.bottom > 0) {
            el.classList.add('ah-visible');
            obs.unobserve(el);
          }
        }
      });
    }, 200);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseleave', onMouseLeave);
      obs.disconnect();
    };
  }, []);

  const calendlyUrl = "https://calendly.com/contact-elevantal/premier-echange";

  return (
    <>
      <style>{`
.ah-dots-canvas{position:fixed;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:0}
.ah-wrap{position:relative;z-index:1}
.ah{padding:140px 0 100px;position:relative;background:linear-gradient(180deg,#040a23 0%,#060e2d 15%,#09153f 35%,#0c1b50 55%,#102364 75%,#132873 100%)}
.ah-container{max-width:1200px;margin:0 auto;padding:0 32px;display:grid;grid-template-columns:1fr 440px;gap:56px;align-items:center}
.ah-left{}
.ah-badge{display:inline-flex;align-items:center;gap:8px;padding:7px 18px;border-radius:100px;font-size:11px;font-weight:700;letter-spacing:1.8px;text-transform:uppercase;background:rgba(82,100,228,.12);color:#8090f0;margin-bottom:24px}
.ah-badge-dot{width:8px;height:8px;border-radius:50%;background:#5264e4;animation:ahdot 2s infinite}
@keyframes ahdot{0%,100%{opacity:1}50%{opacity:.3}}
.ah-left h1{font-size:clamp(28px,4vw,42px);font-weight:900;line-height:1.08;letter-spacing:-.03em;margin-bottom:24px;color:#fff}
.ah-left h1 .ah-grad{background:linear-gradient(90deg,#5264e4,#427ede,#3598d9);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}
.ah-left>p{font-size:17px;font-weight:300;color:rgba(255,255,255,.6);line-height:1.8;margin-bottom:36px;max-width:500px}
.ah-left>p strong{font-weight:600;color:rgba(255,255,255,.85)}
.ah-cta{display:inline-flex;align-items:center;gap:10px;padding:18px 36px;background:linear-gradient(90deg,#5264e4,#427ede,#3598d9);border:none;border-radius:14px;color:#fff;font-family:inherit;font-size:16px;font-weight:700;cursor:pointer;transition:.4s;text-decoration:none;box-shadow:0 4px 30px rgba(82,100,228,.35)}
.ah-cta:hover{transform:translateY(-3px);box-shadow:0 12px 50px rgba(82,100,228,.5)}
.ah-cta svg{width:18px;height:18px;transition:.3s}
.ah-cta:hover svg{transform:translateX(4px)}
.ah-trust{display:flex;align-items:center;gap:16px;margin-top:28px;flex-wrap:wrap}
.ah-trust-item{display:flex;align-items:center;gap:6px;font-size:12px;color:rgba(255,255,255,.4);font-weight:400}
.ah-trust-item svg{width:14px;height:14px}
.ah-trust-sep{width:3px;height:3px;border-radius:50%;background:rgba(255,255,255,.15)}
.ah-right{position:relative}
.ah-glow{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:500px;height:500px;background:radial-gradient(circle,rgba(82,100,228,.1),transparent 70%);pointer-events:none}
.ah-stack{position:relative;height:420px}
.ah-card{position:absolute;background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.08);border-radius:18px;padding:28px 24px;backdrop-filter:blur(8px);transition:.5s;width:340px}
.ah-card:hover{background:rgba(255,255,255,.08);border-color:rgba(66,126,222,.25)}
.ah-c1{top:0;left:0;z-index:3}
.ah-c2{top:100px;left:50px;z-index:2}
.ah-c3{top:200px;left:20px;z-index:1}
.ah-card-top{display:flex;align-items:center;gap:14px;margin-bottom:16px}
.ah-card-num{width:44px;height:44px;border-radius:12px;display:flex;align-items:center;justify-content:center;font-size:14px;font-weight:800}
.ah-c1 .ah-card-num{background:rgba(82,100,228,.15);color:#5264e4}
.ah-c2 .ah-card-num{background:rgba(66,126,222,.15);color:#427ede}
.ah-c3 .ah-card-num{background:rgba(53,152,217,.15);color:#3598d9}
.ah-card-label{font-size:10px;font-weight:700;letter-spacing:1.2px;text-transform:uppercase;color:rgba(255,255,255,.35)}
.ah-card h4{font-size:16px;font-weight:700;line-height:1.35;margin-bottom:8px;color:#fff}
.ah-card p{font-size:12.5px;color:rgba(255,255,255,.45);line-height:1.7;font-weight:300}
.ah-card-tag{display:inline-block;margin-top:12px;padding:4px 12px;border-radius:100px;font-size:9px;font-weight:600;letter-spacing:.5px;text-transform:uppercase}
.ah-c1 .ah-card-tag{background:rgba(82,100,228,.1);color:#8090f0}
.ah-c2 .ah-card-tag{background:rgba(66,126,222,.1);color:#7aacf0}
.ah-c3 .ah-card-tag{background:rgba(53,152,217,.1);color:#6dc0eb}
.ah-float{position:absolute;top:40px;right:-10px;z-index:4;background:rgba(255,255,255,.07);border:1px solid rgba(255,255,255,.1);border-radius:14px;padding:16px 20px;backdrop-filter:blur(12px);text-align:center;animation:ahfloat 4s ease-in-out infinite}
@keyframes ahfloat{0%,100%{transform:translateY(0)}50%{transform:translateY(-10px)}}
.ah-float-num{font-size:28px;font-weight:800;background:linear-gradient(90deg,#5264e4,#427ede,#3598d9);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;line-height:1.1}
.ah-float-label{font-size:10px;color:rgba(255,255,255,.4);font-weight:400;margin-top:2px}
.ah-float2{position:absolute;bottom:30px;right:40px;z-index:4;background:rgba(255,255,255,.07);border:1px solid rgba(255,255,255,.1);border-radius:14px;padding:12px 18px;backdrop-filter:blur(12px);display:flex;align-items:center;gap:10px;animation:ahfloat 4s ease-in-out infinite;animation-delay:2s}
.ah-float2-icon{width:32px;height:32px;border-radius:8px;background:rgba(34,197,94,.12);display:flex;align-items:center;justify-content:center}
.ah-float2-icon svg{width:16px;height:16px}
.ah-float2-text{font-size:11px;font-weight:600;color:rgba(255,255,255,.8)}
.ah-float2-sub{font-size:9px;color:rgba(255,255,255,.35);font-weight:300}
.ah-reveal{opacity:0;transform:translateY(40px);transition:opacity .8s cubic-bezier(.16,1,.3,1),transform .8s cubic-bezier(.16,1,.3,1)}
.ah-reveal.ah-visible{opacity:1;transform:translateY(0)}
.ah-reveal-d1{transition-delay:.1s}
.ah-reveal-d2{transition-delay:.2s}
.ah-reveal-d3{transition-delay:.3s}
.ah-reveal-d4{transition-delay:.4s}
@media(max-width:900px){
.ah-container{grid-template-columns:1fr;gap:48px}
.ah-stack{height:360px}
.ah-card{width:290px}
.ah-c1{left:0}
.ah-c2{left:30px}
.ah-c3{left:10px}
.ah-float{right:0}
.ah-float2{right:10px}
}
@media(max-width:500px){
.ah-card{width:260px}
.ah-c2{left:15px}
.ah-c3{left:5px}
}
      `}</style>

      <canvas className="ah-dots-canvas" ref={canvasRef}></canvas>

      <div className="ah-wrap" ref={sectionRef}>
        <section className="ah">
          <div className="ah-container">

            <div className="ah-left">
              <div className="ah-badge ah-reveal"><span className="ah-badge-dot"></span>Accompagnement 3 mois</div>
              <h1 className="ah-reveal ah-reveal-d1">Passez de l{"'"}improvisation<br/>{"à la "}<span className="ah-grad">strat{"é"}gie</span></h1>
              <p className="ah-reveal ah-reveal-d2">En 3 mois, on construit ensemble un processus de recrutement structur{"é"}, des outils concrets et une exp{"é"}rience candidat qui <strong>attire au lieu de faire fuir</strong>.</p>
              <a href={calendlyUrl} target="_blank" rel="noopener noreferrer" className="ah-cta ah-reveal ah-reveal-d3">
                R{"é"}server un {"é"}change
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
              </a>
              <div className="ah-trust ah-reveal ah-reveal-d4">
                <div className="ah-trust-item">
                  <svg viewBox="0 0 14 14" fill="none"><path d="M2.5 7L5.5 10L11.5 4" stroke="#3598d9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  PME / ETI
                </div>
                <div className="ah-trust-sep"></div>
                <div className="ah-trust-item">
                  <svg viewBox="0 0 14 14" fill="none"><path d="M2.5 7L5.5 10L11.5 4" stroke="#3598d9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  Pr{"é"}sentiel ou distanciel
                </div>
              </div>
            </div>

            <div className="ah-right ah-reveal ah-reveal-d2">
              <div className="ah-glow"></div>
              <div className="ah-stack">

                <div className="ah-float">
                  <div className="ah-float-num">3 mois</div>
                  <div className="ah-float-label">d{"'"}accompagnement</div>
                </div>

                <div className="ah-card ah-c1">
                  <div className="ah-card-top">
                    <div className="ah-card-num">01</div>
                    <div className="ah-card-label">{"É"}tape 1</div>
                  </div>
                  <h4>Diagnostic Immersion</h4>
                  <p>Audit complet de votre parcours candidat et analyse de vos indicateurs actuels.</p>
                  <span className="ah-card-tag">Rapport + restitution</span>
                </div>

                <div className="ah-card ah-c2">
                  <div className="ah-card-top">
                    <div className="ah-card-num">02</div>
                    <div className="ah-card-label">{"É"}tape 2</div>
                  </div>
                  <h4>Strat{"é"}gie Personnalis{"é"}e</h4>
                  <p>Objectifs clairs, personas candidats, priorisation des actions {"à"} fort impact.</p>
                  <span className="ah-card-tag">Feuille de route</span>
                </div>

                <div className="ah-card ah-c3">
                  <div className="ah-card-top">
                    <div className="ah-card-num">03</div>
                    <div className="ah-card-label">{"É"}tape 3</div>
                  </div>
                  <h4>Optimisation du Parcours</h4>
                  <p>Transformation concr{"è"}te de chaque point de contact avec vos candidats.</p>
                  <span className="ah-card-tag">Mod{"è"}les pr{"ê"}ts {"à"} l{"'"}emploi</span>
                </div>

                <div className="ah-float2">
                  <div className="ah-float2-icon"><svg viewBox="0 0 16 16" fill="none"><path d="M3 8.5L6 11.5L13 4.5" stroke="#22c55e" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/></svg></div>
                  <div>
                    <div className="ah-float2-text">21 KPIs install{"é"}s</div>
                    <div className="ah-float2-sub">Tableau de bord inclus</div>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </section>
      </div>
    </>
  );
};

export default RecruitmentBoostHero;
