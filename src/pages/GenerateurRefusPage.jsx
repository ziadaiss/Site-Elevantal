import React, { useEffect, useRef, useState } from 'react';
import { Helmet } from 'react-helmet';

const GenerateurRefusPage = () => {
  const canvasRef = useRef(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formSending, setFormSending] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
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

  // Scroll reveal with IntersectionObserver
  useEffect(() => {
    const els = document.querySelectorAll('.gr-reveal');
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('gr-visible');
          obs.unobserve(e.target);
        }
      });
    }, { threshold: 0.12 });
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <Helmet>
        <title>Générateur de refus — Méthode F.A.I.R. | Elevantal</title>
        <meta name="description" content="Générez un e-mail de refus candidat personnalisé en 10 secondes avec la méthode F.A.I.R. Améliorez votre expérience candidat et votre marque employeur en PME/ETI." />
      </Helmet>

      <style>{`
        .gr-page {
          --bg-deep:#040a23;
          --bg-mid:#09153f;
          --bg-light:#132873;
          --gr-accent-1:#5264e4;
          --gr-accent-2:#427ede;
          --gr-accent-3:#3598d9;
          --gr-white:#fff;
          --gr-white-90:rgba(255,255,255,.9);
          --gr-white-70:rgba(255,255,255,.7);
          --gr-white-50:rgba(255,255,255,.5);
          --gr-white-30:rgba(255,255,255,.3);
          --gr-white-15:rgba(255,255,255,.15);
          --gr-white-08:rgba(255,255,255,.08);
          --gr-white-04:rgba(255,255,255,.04);
          --gr-gradient-accent:linear-gradient(90deg,#5264e4,#427ede,#3598d9);
          --gr-gradient-bg:linear-gradient(180deg,#040a23 0%,#060e2d 15%,#09153f 35%,#0c1b50 55%,#102364 75%,#132873 100%);

          font-family:'Poppins',sans-serif;
          background:var(--gr-gradient-bg);
          background-attachment:fixed;
          color:var(--gr-white);
          line-height:1.6;
          overflow-x:hidden;
          position:relative;
          min-height:100vh;
        }

        .gr-dots-canvas{position:fixed;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:0}
        .gr-content-wrap{position:relative;z-index:1}
        .gr-container{max-width:1120px;margin:0 auto;padding:0 32px}

        /* HERO */
        .gr-hero{padding:120px 0 100px;position:relative}
        .gr-hero .gr-container{display:grid;grid-template-columns:1fr 380px;gap:60px;align-items:center}
        .gr-hero .gr-overline{display:block;font-size:12px;font-weight:700;letter-spacing:2.5px;text-transform:uppercase;background:var(--gr-gradient-accent);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;margin-bottom:20px}
        .gr-hero h1{font-size:clamp(30px,4.8vw,48px);font-weight:900;line-height:1.1;letter-spacing:-.03em;margin-bottom:24px}
        .gr-hero .gr-sub{font-size:16px;font-weight:300;color:var(--gr-white-70);line-height:1.8;margin-bottom:36px;max-width:540px}
        .gr-hero .gr-sub strong{font-weight:600;color:var(--gr-white-90)}
        .gr-hero-intro{font-size:16px;font-weight:700;color:var(--gr-white-90);margin-bottom:20px}
        .gr-hero-checks{list-style:none;display:flex;flex-direction:column;gap:16px;margin-bottom:40px;padding:0}
        .gr-hero-checks li{display:flex;align-items:flex-start;gap:14px;font-size:15px;font-weight:400;color:var(--gr-white-90);line-height:1.6}
        .gr-hc-icon{width:24px;height:24px;min-width:24px;display:flex;align-items:center;justify-content:center;margin-top:2px}
        .gr-hc-icon svg{width:20px;height:20px}
        .gr-hero-cta{display:inline-flex;align-items:center;gap:12px;padding:18px 40px;background:var(--gr-gradient-accent);border:none;border-radius:14px;color:#fff;font-family:inherit;font-size:16px;font-weight:700;cursor:pointer;transition:.4s;text-decoration:none;letter-spacing:.3px;box-shadow:0 4px 30px rgba(82,100,228,.35)}
        .gr-hero-cta:hover{transform:translateY(-3px);box-shadow:0 12px 50px rgba(82,100,228,.5)}
        .gr-hero-cta svg{width:18px;height:18px;transition:.3s}
        .gr-hero-cta:hover svg{transform:translateX(4px)}

        /* PHONE MOCKUP */
        .gr-hero-right{position:relative;display:flex;justify-content:center}
        .gr-phone-glow{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:480px;height:480px;background:radial-gradient(circle,rgba(82,100,228,.15),transparent 70%);pointer-events:none}
        .gr-phone{width:310px;background:var(--gr-white);border-radius:40px;padding:10px;box-shadow:0 50px 100px rgba(0,0,0,.5),0 0 0 1px var(--gr-white-08);position:relative}
        .gr-phone-notch{position:absolute;top:12px;left:50%;transform:translateX(-50%);width:90px;height:26px;background:#1a1a2e;border-radius:20px;z-index:2}
        .gr-phone-screen{background:linear-gradient(180deg,#f0f2f8,#fff);border-radius:32px;padding:48px 18px 22px;min-height:460px}
        .gr-ps-title{font-size:15px;font-weight:700;color:var(--bg-deep);line-height:1.35;margin-bottom:18px}
        .gr-ps-field{margin-bottom:12px}
        .gr-ps-field label{display:block;font-size:10.5px;font-weight:600;color:var(--bg-deep);margin-bottom:4px}
        .gr-ps-field label em{font-style:normal;color:#e24b4a}
        .gr-ps-field input,.gr-ps-field select,.gr-ps-field textarea{width:100%;border:1.5px solid #dfe2ed;border-radius:9px;padding:9px 11px;font-family:'Poppins',sans-serif;font-size:11.5px;color:#9098b5;background:#fff;outline:none;resize:none}
        .gr-ps-field textarea{height:60px}
        .gr-ps-field .gr-hint{font-size:9.5px;color:#b5bbd1;margin-top:2px}
        .gr-ps-btn{width:100%;padding:12px;background:var(--gr-gradient-accent);border:none;border-radius:11px;color:#fff;font-family:'Poppins',sans-serif;font-size:12.5px;font-weight:700;cursor:pointer;margin-top:4px;letter-spacing:.2px}

        /* DIVIDER */
        .gr-divider{width:60px;height:3px;background:var(--gr-gradient-accent);border-radius:10px;margin:0 auto 48px}

        /* BENEFITS */
        .gr-benefits{padding:100px 0;background:#fff;color:#1a1a2e}
        .gr-benefits .gr-container{display:grid;grid-template-columns:1fr 1fr;gap:80px;align-items:center}
        .gr-benefits-text .gr-overline-sm{font-size:11px;font-weight:700;letter-spacing:2px;text-transform:uppercase;background:var(--gr-gradient-accent);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;margin-bottom:16px}
        .gr-benefits-text h2{font-size:clamp(26px,3.8vw,40px);font-weight:800;line-height:1.15;letter-spacing:-.02em;margin-bottom:20px;color:#1a1a2e}
        .gr-benefits-text h2 .gr-grad{background:var(--gr-gradient-accent);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}
        .gr-benefits-text>p{font-size:16px;font-weight:300;color:#555;line-height:1.8;margin-bottom:36px}
        .gr-check-list{list-style:none;display:flex;flex-direction:column;gap:18px;padding:0}
        .gr-check-list li{display:flex;align-items:flex-start;gap:16px;font-size:15px;font-weight:400;color:#333;line-height:1.6}
        .gr-check-dot{width:26px;height:26px;min-width:26px;border-radius:50%;background:rgba(53,152,217,.12);display:flex;align-items:center;justify-content:center;margin-top:1px}
        .gr-check-dot svg{width:13px;height:13px}

        .gr-benefits-visual{display:flex;flex-direction:column;gap:16px}
        .gr-stat-card{background:#f5f7fb;border:1px solid #e2e6ef;border-radius:16px;padding:28px 24px;transition:.4s}
        .gr-stat-card:hover{background:#edf0f7;border-color:#d0d5e3;transform:translateX(6px)}
        .gr-stat-num{font-size:36px;font-weight:800;letter-spacing:-.02em;margin-bottom:4px;background:var(--gr-gradient-accent);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}
        .gr-stat-label{font-size:14px;color:#666;font-weight:400}

        /* METHODE FAIR */
        .gr-fair{padding:100px 0;text-align:center}
        .gr-fair h2{font-size:clamp(26px,3.8vw,40px);font-weight:800;line-height:1.15;letter-spacing:-.02em;margin-bottom:12px}
        .gr-fair>p,.gr-fair .gr-container>p{font-size:16px;color:var(--gr-white-70);font-weight:300;max-width:540px;margin:0 auto 64px}
        .gr-fair-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:16px;text-align:left}
        .gr-fair-card{background:var(--gr-white-04);border:1px solid var(--gr-white-08);border-radius:18px;padding:30px 22px;position:relative;overflow:hidden;transition:.4s}
        .gr-fair-card:hover{background:var(--gr-white-08);transform:translateY(-6px)}
        .gr-fair-card::before{content:'';position:absolute;top:0;left:0;right:0;height:3px;border-radius:18px 18px 0 0;transition:.4s;opacity:0}
        .gr-fair-card:hover::before{opacity:1}
        .gr-fair-card:nth-child(1)::before{background:#5264e4}
        .gr-fair-card:nth-child(2)::before{background:#427ede}
        .gr-fair-card:nth-child(3)::before{background:#3598d9}
        .gr-fair-card:nth-child(4)::before{background:linear-gradient(90deg,#3598d9,#5264e4)}
        .gr-fair-letter{font-size:44px;font-weight:900;line-height:1;margin-bottom:14px;opacity:.85}
        .gr-fair-card:nth-child(1) .gr-fair-letter{color:#5264e4}
        .gr-fair-card:nth-child(2) .gr-fair-letter{color:#427ede}
        .gr-fair-card:nth-child(3) .gr-fair-letter{color:#3598d9}
        .gr-fair-card:nth-child(4) .gr-fair-letter{background:linear-gradient(90deg,#3598d9,#5264e4);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}
        .gr-fair-card h4{font-size:16px;font-weight:700;margin-bottom:8px}
        .gr-fair-card p{font-size:13px;color:var(--gr-white-50);line-height:1.7;font-weight:300}

        /* FORM */
        .gr-form-section{padding:100px 0}
        .gr-form-section .gr-container{max-width:560px}
        .gr-form-box{background:var(--gr-white-04);border:1px solid var(--gr-white-08);border-radius:24px;padding:48px 40px;backdrop-filter:blur(12px);text-align:center}
        .gr-form-box h2{font-size:clamp(22px,3vw,30px);font-weight:800;line-height:1.2;margin-bottom:10px}
        .gr-form-box h2 .gr-grad{background:var(--gr-gradient-accent);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}
        .gr-form-box>p{font-size:14px;color:var(--gr-white-50);font-weight:300;margin-bottom:32px;line-height:1.7}
        .gr-field{margin-bottom:18px;text-align:left}
        .gr-field label{display:block;font-size:13px;font-weight:600;margin-bottom:7px;color:var(--gr-white-90)}
        .gr-field label .gr-req{color:var(--gr-accent-3)}
        .gr-field input{width:100%;padding:15px 20px;border-radius:12px;border:1.5px solid var(--gr-white-08);background:var(--gr-white-04);color:var(--gr-white);font-family:'Poppins',sans-serif;font-size:14px;font-weight:400;outline:none;transition:.3s}
        .gr-field input::placeholder{color:var(--gr-white-30);font-weight:300}
        .gr-field input:focus{border-color:var(--gr-accent-2);background:rgba(66,126,222,.06)}
        .gr-field .gr-help{font-size:11px;color:var(--gr-white-30);margin-top:5px;font-weight:300}
        .gr-form-submit{width:100%;padding:17px;background:var(--gr-gradient-accent);border:none;border-radius:12px;color:#fff;font-family:'Poppins',sans-serif;font-size:15px;font-weight:700;cursor:pointer;transition:.4s;letter-spacing:.3px;margin-top:8px;box-shadow:0 4px 24px rgba(82,100,228,.25)}
        .gr-form-submit:hover{transform:translateY(-2px);box-shadow:0 8px 40px rgba(82,100,228,.4)}
        .gr-form-footnote{margin-top:18px;font-size:11px;color:var(--gr-white-30);line-height:1.7;font-weight:300}

        /* SCROLL REVEAL */
        .gr-reveal{opacity:0;transform:translateY(40px);transition:opacity .8s cubic-bezier(.16,1,.3,1),transform .8s cubic-bezier(.16,1,.3,1)}
        .gr-visible{opacity:1;transform:translateY(0)}
        .gr-reveal-d1{transition-delay:.1s}
        .gr-reveal-d2{transition-delay:.2s}
        .gr-reveal-d3{transition-delay:.3s}
        .gr-reveal-d4{transition-delay:.4s}

        /* RESPONSIVE */
        @media(max-width:900px){
          .gr-hero .gr-container{grid-template-columns:1fr;gap:40px}
          .gr-hero-right{order:-1}
          .gr-phone{width:280px}
          .gr-benefits .gr-container{grid-template-columns:1fr;gap:48px}
          .gr-fair-grid{grid-template-columns:repeat(2,1fr)}
        }
        @media(max-width:600px){
          .gr-hero{padding:80px 0 60px}
          .gr-phone{width:260px}
          .gr-phone-screen{padding:42px 14px 18px;min-height:400px}
          .gr-fair-grid{grid-template-columns:1fr}
          .gr-form-box{padding:32px 24px}
          .gr-benefits-visual{display:grid;grid-template-columns:1fr 1fr;gap:12px}
        }
      `}</style>

      <div className="gr-page">
        <canvas className="gr-dots-canvas" ref={canvasRef}></canvas>

        <div className="gr-content-wrap">

          {/* HERO */}
          <section className="gr-hero">
            <div className="gr-container">
              <div className="gr-hero-left">
                <div className="gr-overline gr-reveal">Agent IA feedback post-entretien</div>
                <h1 className="gr-reveal gr-reveal-d1">Générez un mail de refus candidat personnalisé en 10 secondes !</h1>
                <p className="gr-sub gr-reveal gr-reveal-d2">
                  Si vos candidats restent sans réponse après un entretien, que vous n'avez pas le temps de rédiger des <strong>feedbacks post-entretien</strong> individuels, ou que le <strong>ghosting candidat</strong> nuit à votre <strong>marque employeur</strong>...
                </p>
                <p className="gr-hero-intro gr-reveal gr-reveal-d3">Accédez à votre agent IA immédiatement pour :</p>
                <ul className="gr-hero-checks">
                  <li className="gr-reveal gr-reveal-d3">
                    <span className="gr-hc-icon">
                      <svg viewBox="0 0 20 20" fill="none"><path d="M3 10.5L7.5 15L17 5" stroke="#3598d9" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </span>
                    Rédiger un e-mail de refus humain et structuré en quelques secondes
                  </li>
                  <li className="gr-reveal gr-reveal-d3">
                    <span className="gr-hc-icon">
                      <svg viewBox="0 0 20 20" fill="none"><path d="M3 10.5L7.5 15L17 5" stroke="#3598d9" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </span>
                    Améliorer votre expérience candidat sans effort supplémentaire
                  </li>
                  <li className="gr-reveal gr-reveal-d4">
                    <span className="gr-hc-icon">
                      <svg viewBox="0 0 20 20" fill="none"><path d="M3 10.5L7.5 15L17 5" stroke="#3598d9" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </span>
                    Fidéliser les candidats non retenus pour vos futurs recrutements
                  </li>
                </ul>
                <a href="#gr-access" className="gr-hero-cta gr-reveal gr-reveal-d4">
                  Je télécharge le générateur
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                </a>
              </div>
              <div className="gr-hero-right gr-reveal gr-reveal-d2">
                <div className="gr-phone-glow"></div>
                <div className="gr-phone">
                  <div className="gr-phone-notch"></div>
                  <div className="gr-phone-screen">
                    <div className="gr-ps-title">Générez un e-mail de refus humain et hyper-personnalisé en 10 secondes...</div>
                    <div className="gr-ps-field">
                      <label>Prénom du candidat <em>*</em></label>
                      <input type="text" placeholder="Ex: Marie" readOnly />
                    </div>
                    <div className="gr-ps-field">
                      <label>Intitulé du poste visé <em>*</em></label>
                      <input type="text" placeholder="Ex: Développeur Full Stack" readOnly />
                    </div>
                    <div className="gr-ps-field">
                      <label>Notes d'entretien <em>*</em> <span style={{fontWeight:400,color:'#b5bbd1',fontSize:'9px'}}>(min. 20 car.)</span></label>
                      <textarea placeholder="Ex: Bon niveau technique mais manque d'expérience en leadership. Profil junior prometteur." readOnly></textarea>
                      <div className="gr-hint">0 / 20 caractères minimum</div>
                    </div>
                    <div className="gr-ps-field">
                      <label>Ton souhaité <em>*</em></label>
                      <select disabled><option>Sélectionnez un ton</option></select>
                    </div>
                    <button className="gr-ps-btn" type="button">Générer mon e-mail parfait</button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* BENEFITS */}
          <section className="gr-benefits">
            <div className="gr-container">
              <div className="gr-benefits-text">
                <div className="gr-overline-sm gr-reveal">Pourquoi cet outil</div>
                <h2 className="gr-reveal gr-reveal-d1">Améliorez votre <span className="gr-grad">expérience candidat</span> sans effort supplémentaire</h2>
                <p className="gr-reveal gr-reveal-d2">Vous perdez du temps à rédiger des mails de refus génériques ? Vos candidats restent sans réponse et descendent votre réputation sur Glassdoor ?</p>
                <ul className="gr-check-list">
                  <li className="gr-reveal gr-reveal-d1">
                    <span className="gr-check-dot"><svg viewBox="0 0 14 14" fill="none"><path d="M2.5 7.5L5.5 10.5L11.5 4" stroke="#3598d9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></span>
                    Générer un mail de refus candidat structuré et personnalisé en 10 secondes
                  </li>
                  <li className="gr-reveal gr-reveal-d2">
                    <span className="gr-check-dot"><svg viewBox="0 0 14 14" fill="none"><path d="M2.5 7.5L5.5 10.5L11.5 4" stroke="#3598d9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></span>
                    Valoriser votre marque employeur à chaque interaction — même les refus
                  </li>
                  <li className="gr-reveal gr-reveal-d3">
                    <span className="gr-check-dot"><svg viewBox="0 0 14 14" fill="none"><path d="M2.5 7.5L5.5 10.5L11.5 4" stroke="#3598d9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></span>
                    Fidéliser les candidats non retenus pour vos futurs recrutements en PME/ETI
                  </li>
                  <li className="gr-reveal gr-reveal-d4">
                    <span className="gr-check-dot"><svg viewBox="0 0 14 14" fill="none"><path d="M2.5 7.5L5.5 10.5L11.5 4" stroke="#3598d9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></span>
                    Appliquer la méthode F.A.I.R. automatiquement — sans formation préalable
                  </li>
                </ul>
              </div>
              <div className="gr-benefits-visual">
                <div className="gr-stat-card gr-reveal">
                  <div className="gr-stat-num">10s</div>
                  <div className="gr-stat-label">pour générer un feedback personnalisé</div>
                </div>
                <div className="gr-stat-card gr-reveal gr-reveal-d1">
                  <div className="gr-stat-num">92%</div>
                  <div className="gr-stat-label">des candidats souhaitent un retour post-entretien</div>
                </div>
                <div className="gr-stat-card gr-reveal gr-reveal-d2">
                  <div className="gr-stat-num">&times;3</div>
                  <div className="gr-stat-label">plus de chances d'être recommandé par un candidat refusé avec respect</div>
                </div>
              </div>
            </div>
          </section>

          {/* METHODE FAIR */}
          <section className="gr-fair">
            <div className="gr-container">
              <div className="gr-divider"></div>
              <h2 className="gr-reveal">La méthode <span className="gr-grad">F.A.I.R.</span></h2>
              <p className="gr-reveal gr-reveal-d1">4 piliers pour transformer chaque refus en expérience candidat mémorable.</p>
              <div className="gr-fair-grid">
                <div className="gr-fair-card gr-reveal">
                  <div className="gr-fair-letter">F</div>
                  <h4>Feedback</h4>
                  <p>Un retour constructif et spécifique — jamais de phrase générique type « nous avons retenu un autre profil ».</p>
                </div>
                <div className="gr-fair-card gr-reveal gr-reveal-d1">
                  <div className="gr-fair-letter">A</div>
                  <h4>Appréciation</h4>
                  <p>Reconnaître le temps investi par le candidat et les qualités démontrées lors de l'entretien.</p>
                </div>
                <div className="gr-fair-card gr-reveal gr-reveal-d2">
                  <div className="gr-fair-letter">I</div>
                  <h4>Individualisation</h4>
                  <p>Personnaliser avec les éléments concrets de l'échange. Le candidat doit sentir que ce mail a été écrit pour lui.</p>
                </div>
                <div className="gr-fair-card gr-reveal gr-reveal-d3">
                  <div className="gr-fair-letter">R</div>
                  <h4>Réouverture</h4>
                  <p>Laisser la porte ouverte : encourager à postuler à nouveau, rester en contact, ou recommander ailleurs.</p>
                </div>
              </div>
            </div>
          </section>

          {/* FORM */}
          <section className="gr-form-section" id="gr-access">
            <div className="gr-container">
              <div className="gr-form-box gr-reveal">
                {formSubmitted ? (
                  <p style={{ color: '#fff', fontWeight: 600, fontSize: '18px', textAlign: 'center' }}>
                    Merci pour votre téléchargement, vérifiez votre boîte mail !
                  </p>
                ) : (
                  <form onSubmit={async (e) => {
                    e.preventDefault();
                    setFormSending(true);
                    const formData = new FormData(e.target);
                    try {
                      await fetch('https://ae529cc7.sibforms.com/serve/MUIFAKCKOEVHY9oRZvGzAHAaRl8FJruR6ARp_a4cNylIHYn6j4ksXc0JYmtHpTnteSoKQg7_qMKYPPqxKQuMfZI20XCuzhMu8apydIcJIGKpKYKRvotrclFX2QkdcHz9JpifnhmjA4CKYTRq35HemFAaMIfY3nbKcRSzveh9Ez8kams3tqzV6kROQc6T1b6x9tLJ6HPmpk7-nD3ksw==', {
                        method: 'POST',
                        body: formData,
                        mode: 'no-cors',
                      });
                    } catch (_) {
                      // no-cors requests are opaque, treat as success
                    }
                    setFormSending(false);
                    setFormSubmitted(true);
                  }}>
                    <h2>Accédez à votre <span className="gr-grad">agent IA</span> gratuitement</h2>
                    <p>Recevez l'accès instantanément. Commencez à envoyer des feedbacks post-entretien personnalisés dès aujourd'hui.</p>
                    <div className="gr-field">
                      <label>Prénom <span className="gr-req">*</span></label>
                      <input type="text" name="PRENOM" placeholder="Votre prénom" required />
                      <div className="gr-help">Entrez votre prénom</div>
                    </div>
                    <div className="gr-field">
                      <label>Email professionnel <span className="gr-req">*</span></label>
                      <input type="email" name="EMAIL" placeholder="votre@entreprise.com" required />
                      <div className="gr-help">Entrez votre email professionnel</div>
                    </div>
                    <button className="gr-form-submit" type="submit" disabled={formSending}>
                      {formSending ? 'Envoi en cours...' : 'Je télécharge le générateur*'}
                    </button>
                    <p className="gr-form-footnote">*Vous recevrez un lien par mail pour accéder à l'agent IA de recrutement sans avoir à vous reconnecter.</p>
                  </form>
                )}
              </div>
            </div>
          </section>

        </div>
      </div>
    </>
  );
};

export default GenerateurRefusPage;
