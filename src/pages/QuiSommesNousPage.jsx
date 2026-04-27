import React, { useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet';
import useScrollReveal from '@/hooks/useScrollReveal';

const QuiSommesNousPage = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useScrollReveal();

  // Canvas particle animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let W, H, scrollY = 0, mouseX = -1, mouseY = -1;
    const TOTAL = 90;
    const colors = ['82,100,228', '66,126,222', '53,152,217'];
    const dots = [];

    function resize() {
      W = canvas.width = window.innerWidth;
      H = canvas.height = window.innerHeight;
    }
    resize();

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

    const onResize = () => resize();
    const onScroll = () => { scrollY = window.pageYOffset; };
    const onMouseMove = (e) => { mouseX = e.clientX; mouseY = e.clientY; };
    const onMouseLeave = () => { mouseX = -1; mouseY = -1; };

    window.addEventListener('resize', onResize);
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('mouseleave', onMouseLeave);

    let raf;
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
      raf = requestAnimationFrame(loop);
    }
    loop();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', onResize);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseleave', onMouseLeave);
    };
  }, []);

  const calendlyUrl = "https://calendly.com/contact-elevantal/premier-echange";
  const newsletterUrl = "https://services-elevantal.systeme.io/newsletter";

  const ArrowIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
  );

  return (
    <>
      <Helmet>
        <title>{"À"} propos d{"'"}Elevantal {"—"} Expert Exp{"é"}rience Candidat PME</title>
        <meta name="description" content="Elevantal aide les PME &agrave; transformer leur exp&eacute;rience candidat en avantage concurrentiel. D&eacute;couvrez notre mission, notre m&eacute;thode et notre fondateur Ziad Aissaoua." />
      </Helmet>

      <style>{`
.ap-page-bg{background:linear-gradient(180deg,#040a23 0%,#060e2d 15%,#09153f 35%,#0c1b50 55%,#102364 75%,#132873 100%);background-attachment:fixed;min-height:100vh}
.ap-dots-canvas{position:fixed;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:0}
.ap-content-wrap{position:relative;z-index:1}
.ap-grad{background:linear-gradient(90deg,#5264e4,#427ede,#3598d9);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}
.ap-wave{position:relative;height:140px;width:100%;line-height:0;overflow:hidden}
.ap-wave svg{position:absolute;bottom:0;left:0;width:100%;height:100%;display:block}
.ap-hero{padding:140px 0 100px}
.ap-hero .ap-container{display:grid;grid-template-columns:1fr 180px;gap:40px;align-items:center}
.ap-container{max-width:1120px;margin:0 auto;padding:0 32px}
.ap-overline{display:inline-block;padding:6px 18px;border-radius:100px;font-size:11px;font-weight:700;letter-spacing:1.8px;text-transform:uppercase;background:rgba(82,100,228,.12);color:#8090f0;margin-bottom:20px}
.ap-hero h1{font-size:clamp(32px,4.5vw,48px);font-weight:900;line-height:1.1;letter-spacing:-.03em;margin-bottom:20px;color:#fff}
.ap-hero-text{font-size:16px;font-weight:300;color:rgba(255,255,255,.6);line-height:1.8;margin-bottom:28px;max-width:480px}
.ap-hero-text strong{font-weight:600;color:rgba(255,255,255,.85)}
.ap-stat-box{display:inline-flex;align-items:center;gap:14px;padding:18px 24px;background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.06);border-radius:16px;margin-bottom:28px}
.ap-stat-num{font-size:36px;font-weight:900;background:linear-gradient(90deg,#5264e4,#427ede,#3598d9);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;line-height:1}
.ap-stat-label{font-size:13px;color:rgba(255,255,255,.5);line-height:1.4}
.ap-hero-cta{display:inline-flex;align-items:center;gap:10px;padding:16px 32px;background:linear-gradient(90deg,#5264e4,#427ede,#3598d9);border-radius:14px;color:#fff;font-family:inherit;font-size:15px;font-weight:700;text-decoration:none;box-shadow:0 4px 30px rgba(82,100,228,.35);transition:.4s}
.ap-hero-cta:hover{transform:translateY(-3px);box-shadow:0 12px 50px rgba(82,100,228,.5)}
.ap-hero-cta svg{width:16px;height:16px}
.ap-photo{position:relative}
.ap-photo img{width:100%;aspect-ratio:1/1;object-fit:cover;object-position:center top;border-radius:22px;display:block}
.ap-photo-bio{margin-top:14px;padding:14px 18px;background:rgba(4,10,35,.75);backdrop-filter:blur(12px);border-radius:14px;border:1px solid rgba(255,255,255,.08);text-align:center}
.ap-photo-bio strong{font-size:15px;font-weight:700;display:block;margin-bottom:2px;color:#fff}
.ap-photo-bio span{font-size:12px;color:rgba(255,255,255,.5);font-weight:300}
.ap-mission{padding:100px 0;background:#fff;color:#1a1a2e}
.ap-mission-top{text-align:center;margin-bottom:56px}
.ap-mission-top h2{font-size:clamp(26px,3.5vw,38px);font-weight:800;letter-spacing:-.02em;margin-bottom:12px;color:#1a1a2e}
.ap-mission-top p{font-size:15px;color:#6B7280;font-weight:300;max-width:560px;margin:0 auto}
.ap-mgrid{display:grid;grid-template-columns:repeat(3,1fr);gap:18px;max-width:960px;margin:0 auto}
.ap-mc{padding:32px 26px;background:#F9FAFB;border:1px solid #E5E7EB;border-radius:18px;transition:.4s}
.ap-mc:hover{background:#fff;border-color:rgba(82,100,228,.2);transform:translateY(-4px);box-shadow:0 8px 30px rgba(0,0,0,.06)}
.ap-mc-ico{width:48px;height:48px;border-radius:14px;display:flex;align-items:center;justify-content:center;margin-bottom:18px}
.ap-mc:nth-child(1) .ap-mc-ico{background:rgba(82,100,228,.08)}
.ap-mc:nth-child(2) .ap-mc-ico{background:rgba(66,126,222,.08)}
.ap-mc:nth-child(3) .ap-mc-ico{background:rgba(53,152,217,.08)}
.ap-mc h4{font-size:16px;font-weight:700;margin-bottom:8px;color:#1a1a2e}
.ap-mc p{font-size:13.5px;color:#6B7280;line-height:1.7;font-weight:300}
.ap-impact{padding:100px 0}
.ap-impact .ap-container{display:grid;grid-template-columns:1fr 1fr;gap:48px;align-items:center}
.ap-impact h2{font-size:clamp(24px,3.5vw,34px);font-weight:800;letter-spacing:-.02em;margin-bottom:20px;color:#fff}
.ap-impact p{font-size:15px;font-weight:300;color:rgba(255,255,255,.55);line-height:1.8;margin-bottom:20px}
.ap-impact p strong{font-weight:600;color:rgba(255,255,255,.85)}
.ap-hl{padding:20px 24px;border-radius:14px;background:rgba(82,100,228,.06);border-left:3px solid #5264e4;font-size:15px;font-weight:500;color:rgba(255,255,255,.8);line-height:1.7;margin-bottom:28px}
.ap-impact-cta{display:inline-flex;align-items:center;gap:10px;padding:16px 32px;background:linear-gradient(90deg,#5264e4,#427ede,#3598d9);border-radius:14px;color:#fff;font-family:inherit;font-size:15px;font-weight:700;text-decoration:none;box-shadow:0 4px 24px rgba(82,100,228,.3);transition:.4s}
.ap-impact-cta:hover{transform:translateY(-2px);box-shadow:0 8px 40px rgba(82,100,228,.45)}
.ap-impact-cta svg{width:16px;height:16px}
.ap-chart{background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.06);border-radius:22px;padding:36px 32px}
.ap-chart-title{font-size:13px;font-weight:600;color:rgba(255,255,255,.5);margin-bottom:24px;text-align:center;text-transform:uppercase;letter-spacing:1px}
.ap-chart-bars{display:flex;align-items:flex-end;justify-content:center;gap:48px;height:240px;margin-bottom:20px}
.ap-bar{display:flex;flex-direction:column;align-items:center;gap:8px}
.ap-bar-fill{width:80px;border-radius:12px 12px 4px 4px;display:flex;align-items:flex-end;justify-content:center;padding-bottom:12px;font-weight:800;font-size:15px;color:#fff}
.ap-bar-fill.ap-red{background:linear-gradient(180deg,#ef4444,#dc2626);height:210px}
.ap-bar-fill.ap-blue{background:linear-gradient(90deg,#5264e4,#427ede,#3598d9);height:80px}
.ap-bar-label{font-size:11px;color:rgba(255,255,255,.4);text-align:center;max-width:100px}
.ap-chart-save{text-align:center;padding:14px;background:rgba(34,197,94,.06);border:1px solid rgba(34,197,94,.15);border-radius:12px;margin-top:14px}
.ap-chart-save strong{font-size:18px;font-weight:800;color:#4ade80}
.ap-chart-save span{display:block;font-size:11px;color:rgba(255,255,255,.4);margin-top:4px}
.ap-chart-src{text-align:center;font-size:10px;color:rgba(255,255,255,.25);margin-top:10px}
.ap-values{padding:100px 0;background:#fff;color:#1a1a2e}
.ap-values-top{text-align:center;margin-bottom:56px}
.ap-values-top h2{font-size:clamp(26px,3.5vw,38px);font-weight:800;letter-spacing:-.02em;margin-bottom:12px;color:#1a1a2e}
.ap-values-top p{font-size:15px;color:#6B7280;font-weight:300;max-width:520px;margin:0 auto}
.ap-vgrid{display:grid;grid-template-columns:repeat(2,1fr);gap:18px;max-width:800px;margin:0 auto}
.ap-vc{display:flex;align-items:flex-start;gap:18px;padding:28px 26px;background:#F9FAFB;border:1px solid #E5E7EB;border-radius:18px;transition:.3s}
.ap-vc:hover{border-color:rgba(82,100,228,.2);transform:translateY(-3px);box-shadow:0 6px 24px rgba(0,0,0,.05)}
.ap-vc-num{width:40px;height:40px;min-width:40px;border-radius:10px;display:flex;align-items:center;justify-content:center;font-size:14px;font-weight:800;color:#5264e4;background:rgba(82,100,228,.08)}
.ap-vc h4{font-size:15px;font-weight:700;margin-bottom:4px;color:#1a1a2e}
.ap-vc p{font-size:13px;color:#6B7280;line-height:1.7;font-weight:300}
.ap-nl{padding:0 0 100px}
.ap-nl-box{max-width:700px;margin:0 auto;padding:48px;background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.08);border-radius:24px;text-align:center;position:relative;overflow:hidden}
.ap-nl-box::before{content:'';position:absolute;top:0;left:0;right:0;height:3px;background:linear-gradient(90deg,#5264e4,#427ede,#3598d9)}
.ap-nl-box h3{font-size:24px;font-weight:800;margin-bottom:8px;color:#fff}
.ap-nl-box p{font-size:14px;color:rgba(255,255,255,.45);font-weight:300;margin-bottom:24px}
.ap-nl-cta{display:inline-flex;align-items:center;gap:10px;padding:16px 32px;background:linear-gradient(90deg,#5264e4,#427ede,#3598d9);border-radius:14px;color:#fff;font-family:inherit;font-size:15px;font-weight:700;text-decoration:none;box-shadow:0 4px 24px rgba(82,100,228,.3);transition:.4s}
.ap-nl-cta:hover{transform:translateY(-2px);box-shadow:0 8px 40px rgba(82,100,228,.45)}
.ap-actu{padding:100px 0}
.ap-actu-top{text-align:center;margin-bottom:56px}
.ap-actu-top h2{font-size:clamp(26px,3.5vw,38px);font-weight:800;letter-spacing:-.02em;margin-bottom:12px;color:#fff}
.ap-actu-top p{font-size:15px;color:rgba(255,255,255,.45);font-weight:300}
.ap-actu-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:20px;max-width:1160px;margin:0 auto}
.ap-actu-card{background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.06);border-radius:18px;overflow:hidden;transition:.4s}
.ap-actu-card:hover{background:rgba(255,255,255,.07);border-color:rgba(82,100,228,.2);transform:translateY(-4px)}
.ap-actu-thumb{position:relative;width:100%;aspect-ratio:16/10;overflow:hidden;background:#0c1b50}
.ap-actu-thumb img{width:100%;height:100%;object-fit:cover;display:block;opacity:.85;transition:.3s}
.ap-actu-card:hover .ap-actu-thumb img{opacity:1;transform:scale(1.03)}
.ap-actu-tag{position:absolute;top:12px;left:12px;padding:4px 12px;border-radius:100px;font-size:10px;font-weight:700;letter-spacing:.8px;text-transform:uppercase;backdrop-filter:blur(8px)}
.ap-actu-tag.ap-tag-blog{background:rgba(82,100,228,.8);color:#fff}
.ap-actu-tag.ap-tag-video{background:rgba(239,68,68,.8);color:#fff}
.ap-actu-play{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:48px;height:48px;background:rgba(255,255,255,.15);backdrop-filter:blur(6px);border-radius:50%;display:flex;align-items:center;justify-content:center;opacity:0;transition:.3s}
.ap-actu-card:hover .ap-actu-play{opacity:1}
.ap-actu-play svg{width:20px;height:20px;margin-left:2px}
.ap-actu-body{padding:20px}
.ap-actu-date{font-size:11px;color:rgba(255,255,255,.3);font-weight:500;margin-bottom:8px}
.ap-actu-card h4{font-size:15px;font-weight:700;line-height:1.4;margin-bottom:8px;color:rgba(255,255,255,.9)}
.ap-actu-card p{font-size:12.5px;color:rgba(255,255,255,.4);line-height:1.6;font-weight:300}
.ap-actu-link{display:inline-flex;align-items:center;gap:6px;margin-top:12px;font-size:12px;font-weight:600;color:#8090f0;text-decoration:none;transition:.3s}
.ap-actu-link:hover{color:#fff}
.ap-actu-link svg{width:12px;height:12px;transition:.2s}
.ap-actu-link:hover svg{transform:translateX(3px)}
@media(max-width:900px){
.ap-hero .ap-container{grid-template-columns:1fr;gap:40px}
.ap-photo{max-width:180px;margin:0 auto}
.ap-mgrid,.ap-vgrid{grid-template-columns:1fr}
.ap-impact .ap-container{grid-template-columns:1fr}
.ap-actu-grid{grid-template-columns:1fr}
}
@media(min-width:601px) and (max-width:900px){.ap-actu-grid{grid-template-columns:1fr 1fr}}
@media(max-width:500px){.ap-nl-box{padding:36px 24px}.ap-chart{padding:28px 20px}}
.ft-wave{display:none !important}
      `}</style>

      <div className="ap-page-bg">
      <canvas className="ap-dots-canvas" ref={canvasRef} />
      <div className="ap-content-wrap">

        {/* HERO */}
        <section className="ap-hero">
          <div className="ap-container">
            <div>
              <div className="ap-overline reveal">{"À"} propos</div>
              <h1 className="reveal reveal-d1">L{"'"}exp{"é"}rience candidat<br/>comme <span className="ap-grad">avantage concurrentiel</span></h1>
              <p className="ap-hero-text reveal reveal-d2">Elevantal aide les <strong>PME et ETI</strong> {"à"} transformer leur processus de recrutement. Pas de th{"é"}orie, que des m{"é"}thodes concr{"è"}tes et des outils pr{"ê"}ts {"à"} l{"'"}emploi pour attirer, engager et fid{"é"}liser les meilleurs talents.</p>
              <div className="ap-stat-box reveal reveal-d3">
                <div className="ap-stat-num">60%</div>
                <div className="ap-stat-label">des candidats ghostent<br/>les PME en recrutement</div>
              </div>
              <br/>
              <a href={calendlyUrl} target="_blank" rel="noopener noreferrer" className="ap-hero-cta reveal reveal-d3">R{"é"}server un {"é"}change <ArrowIcon /></a>
            </div>
            <div className="ap-photo reveal reveal-d2">
              <img src="/images/ziad-photo.png" alt="Ziad Aissaoua, fondateur Elevantal" />
              <div className="ap-photo-bio"><strong>Ziad Aissaoua</strong><span>Fondateur d{"'"}Elevantal {"·"} Ex-recruteur {"·"} Expert exp{"é"}rience candidat</span></div>
            </div>
          </div>
        </section>

        {/* VAGUE sombre → blanc */}
        <div className="ap-wave" style={{ background: 'transparent' }}>
          <svg viewBox="0 0 1440 140" preserveAspectRatio="none">
            <path d="M0,50 C240,90 480,10 720,50 C960,90 1200,10 1440,50 L1440,140 L0,140 Z" fill="rgba(82,100,228,.35)"/>
            <path d="M0,65 C300,100 600,25 900,65 C1100,90 1300,35 1440,65 L1440,140 L0,140 Z" fill="rgba(66,126,222,.3)"/>
            <path d="M0,80 C200,100 500,55 800,80 C1050,100 1300,60 1440,80 L1440,140 L0,140 Z" fill="rgba(53,152,217,.25)"/>
            <path d="M0,100 C360,115 720,85 1080,100 C1260,108 1380,95 1440,100 L1440,140 L0,140 Z" fill="#fff"/>
          </svg>
        </div>

        {/* MISSION (blanc) */}
        <section className="ap-mission">
          <div className="ap-container">
            <div className="ap-mission-top">
              <h2 className="reveal">Notre <span className="ap-grad">mission</span></h2>
              <p className="reveal reveal-d1">Faire de l{"'"}exp{"é"}rience candidat un levier de croissance pour les PME qui recrutent.</p>
            </div>
            <div className="ap-mgrid">
              <div className="ap-mc reveal">
                <div className="ap-mc-ico"><svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M12 3L4 7v6c0 5.5 3.4 10.3 8 12 4.6-1.7 8-6.5 8-12V7l-8-4z" stroke="#5264e4" strokeWidth="2"/><path d="M9 12l2 2 4-4" stroke="#5264e4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></div>
                <h4>Z{"é"}ro th{"é"}orie</h4>
                <p>Chaque outil et chaque m{"é"}thode a {"é"}t{"é"} test{"é"} dans des PME qui recrutent avec les m{"ê"}mes contraintes que vous.</p>
              </div>
              <div className="ap-mc reveal reveal-d1">
                <div className="ap-mc-ico"><svg width="24" height="24" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="#427ede" strokeWidth="2"/><path d="M12 8v4l3 2" stroke="#427ede" strokeWidth="2" strokeLinecap="round"/></svg></div>
                <h4>R{"é"}sultats d{"è"}s la semaine 1</h4>
                <p>Pas besoin d{"'"}attendre 6 mois. Nos outils sont con{"ç"}us pour un impact mesurable d{"è"}s les premi{"è"}res semaines.</p>
              </div>
              <div className="ap-mc reveal reveal-d2">
                <div className="ap-mc-ico"><svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M5 21V11l7-7 7 7v10a1 1 0 01-1 1H6a1 1 0 01-1-1z" stroke="#3598d9" strokeWidth="2"/><path d="M10 21v-6h4v6" stroke="#3598d9" strokeWidth="2"/></svg></div>
                <h4>Adapt{"é"} {"à"} votre culture</h4>
                <p>On ne plaque pas un processus standard. On structure votre parcours candidat autour de ce qui fait votre force.</p>
              </div>
            </div>
          </div>
        </section>

        {/* VAGUE blanc → sombre */}
        <div className="ap-wave" style={{ background: '#fff' }}>
          <svg viewBox="0 0 1440 140" preserveAspectRatio="none">
            <path d="M0,40 C240,80 480,0 720,40 C960,80 1200,0 1440,40 L1440,140 L0,140 Z" fill="rgba(200,210,240,.4)"/>
            <path d="M0,55 C300,90 600,15 900,55 C1100,80 1300,25 1440,55 L1440,140 L0,140 Z" fill="rgba(120,150,220,.35)"/>
            <path d="M0,70 C200,90 500,45 800,70 C1050,90 1300,50 1440,70 L1440,140 L0,140 Z" fill="rgba(82,100,228,.5)"/>
            <path d="M0,85 C360,100 720,70 1080,85 C1260,92 1380,80 1440,85 L1440,140 L0,140 Z" fill="rgba(30,50,140,.8)"/>
            <path d="M0,100 C360,112 720,92 1080,100 C1260,106 1380,96 1440,100 L1440,140 L0,140 Z" fill="rgba(9,21,63,.95)"/>
          </svg>
        </div>

        {/* IMPACT (sombre) */}
        <section className="ap-impact">
          <div className="ap-container">
            <div>
              <h2 className="reveal">L{"'"}impact concret sur<br/><span className="ap-grad">votre recrutement</span></h2>
              <p className="reveal reveal-d1">Un processus de recrutement sans strat{"é"}gie d{"'"}exp{"é"}rience candidat co{"û"}te en moyenne <strong>26 400{"€"}</strong> pour un poste cadre. Avec notre accompagnement, ce co{"û"}t descend {"à"} <strong>10 090{"€"}</strong>.</p>
              <div className="ap-hl reveal reveal-d2">Vous recrutez 10 cadres par an ? Vous {"é"}conomisez 163 100{"€"}. Tout en recrutant plus vite, mieux, et en fid{"é"}lisant vos talents.</div>
              <a href={calendlyUrl} target="_blank" rel="noopener noreferrer" className="ap-impact-cta reveal reveal-d3">R{"é"}server un {"é"}change <ArrowIcon /></a>
            </div>
            <div className="ap-chart reveal reveal-d2">
              <div className="ap-chart-title">Co{"û"}t moyen d{"'"}un recrutement cadre</div>
              <div className="ap-chart-bars">
                <div className="ap-bar"><div className="ap-bar-fill ap-red">26 400{"€"}</div><div className="ap-bar-label">Sans strat{"é"}gie</div></div>
                <div className="ap-bar"><div className="ap-bar-fill ap-blue">10 090{"€"}</div><div className="ap-bar-label">Avec Elevantal</div></div>
              </div>
              <div className="ap-chart-save"><strong>-16 310{"€"} par recrutement</strong><span>Soit -62% sur le co{"û"}t total</span></div>
              <div className="ap-chart-src">Source : APEC, Harvard Business Review</div>
            </div>
          </div>
        </section>

        {/* VAGUE sombre → blanc */}
        <div className="ap-wave" style={{ background: 'transparent' }}>
          <svg viewBox="0 0 1440 140" preserveAspectRatio="none">
            <path d="M0,50 C240,90 480,10 720,50 C960,90 1200,10 1440,50 L1440,140 L0,140 Z" fill="rgba(82,100,228,.35)"/>
            <path d="M0,65 C300,100 600,25 900,65 C1100,90 1300,35 1440,65 L1440,140 L0,140 Z" fill="rgba(66,126,222,.3)"/>
            <path d="M0,80 C200,100 500,55 800,80 C1050,100 1300,60 1440,80 L1440,140 L0,140 Z" fill="rgba(53,152,217,.25)"/>
            <path d="M0,100 C360,115 720,85 1080,100 C1260,108 1380,95 1440,100 L1440,140 L0,140 Z" fill="#fff"/>
          </svg>
        </div>

        {/* VALEURS (blanc) */}
        <section className="ap-values">
          <div className="ap-container">
            <div className="ap-values-top">
              <h2 className="reveal">Ce qui nous <span className="ap-grad">diff{"é"}rencie</span></h2>
              <p className="reveal reveal-d1">4 engagements concrets, pas des beaux discours.</p>
            </div>
            <div className="ap-vgrid">
              <div className="ap-vc reveal"><div className="ap-vc-num">01</div><div><h4>Terrain, pas bureau</h4><p>Chaque outil vient du terrain. Ex-recruteur en PME, pas consultant en chambre.</p></div></div>
              <div className="ap-vc reveal reveal-d1"><div className="ap-vc-num">02</div><div><h4>R{"é"}sultats mesurables</h4><p>Des KPIs concrets d{"è"}s le d{"é"}part. Si on ne peut pas le mesurer, on ne le fait pas.</p></div></div>
              <div className="ap-vc reveal reveal-d2"><div className="ap-vc-num">03</div><div><h4>Garantie satisfait ou accompagn{"é"}</h4><p>Tant que vous n{"'"}{"ê"}tes pas satisfait, on continue sans frais suppl{"é"}mentaires.</p></div></div>
              <div className="ap-vc reveal reveal-d3"><div className="ap-vc-num">04</div><div><h4>IA int{"é"}gr{"é"}e partout</h4><p>Chaque formation inclut des outils IA pour automatiser les t{"â"}ches chronophages.</p></div></div>
            </div>
          </div>
        </section>

        {/* VAGUE blanc → sombre */}
        <div className="ap-wave" style={{ background: '#fff' }}>
          <svg viewBox="0 0 1440 140" preserveAspectRatio="none">
            <path d="M0,40 C240,80 480,0 720,40 C960,80 1200,0 1440,40 L1440,140 L0,140 Z" fill="rgba(200,210,240,.4)"/>
            <path d="M0,55 C300,90 600,15 900,55 C1100,80 1300,25 1440,55 L1440,140 L0,140 Z" fill="rgba(120,150,220,.35)"/>
            <path d="M0,70 C200,90 500,45 800,70 C1050,90 1300,50 1440,70 L1440,140 L0,140 Z" fill="rgba(82,100,228,.5)"/>
            <path d="M0,85 C360,100 720,70 1080,85 C1260,92 1380,80 1440,85 L1440,140 L0,140 Z" fill="rgba(30,50,140,.8)"/>
            <path d="M0,100 C360,112 720,92 1080,100 C1260,106 1380,96 1440,100 L1440,140 L0,140 Z" fill="rgba(9,21,63,.95)"/>
          </svg>
        </div>

        {/* ACTUALITÉS */}
        <section className="ap-actu">
          <div className="ap-container">
            <div className="ap-actu-top">
              <h2 className="reveal">Nos derni{"è"}res <span className="ap-grad">actualit{"é"}s</span></h2>
              <p className="reveal reveal-d1">Articles, vid{"é"}os et conseils pour transformer votre recrutement en PME.</p>
            </div>
            <div className="ap-actu-grid">

              {/* Short — 16 Avril 2026 */}
              <div className="ap-actu-card reveal">
                <div className="ap-actu-thumb">
                  <img src="https://i.ytimg.com/vi/w8o7opuKJIs/hq2.jpg" alt="Pourquoi vos candidats vous googlisent avant de postuler" />
                  <div className="ap-actu-tag ap-tag-video">Short</div>
                  <div className="ap-actu-play"><svg viewBox="0 0 24 24" fill="#fff"><polygon points="8,5 19,12 8,19"/></svg></div>
                </div>
                <div className="ap-actu-body">
                  <div className="ap-actu-date">16 Avril, 2026</div>
                  <h4>Pourquoi vos candidats vous googlisent avant de postuler</h4>
                  <p>Vos candidats vous recherchent en ligne avant m{"ê"}me de postuler. Votre marque employeur est-elle pr{"ê"}te ?</p>
                  <a href="https://youtube.com/shorts/w8o7opuKJIs" target="_blank" rel="noopener noreferrer" className="ap-actu-link">Regarder <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg></a>
                </div>
              </div>

              {/* Article — 16 Avril 2026 */}
              <div className="ap-actu-card reveal reveal-d1">
                <div className="ap-actu-thumb">
                  <img src="/images/newsletter-3-cover.png.png" alt="Recruter et attirer : stratégies gagnantes pour PME/ETI" />
                  <div className="ap-actu-tag ap-tag-blog">Article</div>
                </div>
                <div className="ap-actu-body">
                  <div className="ap-actu-date">16 Avril, 2026</div>
                  <h4>Recruter et attirer : strat{"é"}gies gagnantes pour PME/ETI</h4>
                  <p>Dans un march{"é"} o{"ù"} la p{"é"}nurie de talents est omnipr{"é"}sente, il est essentiel pour les PME d{"'"}optimiser leur processus de recrutement afin d{"'"}attirer et de retenir les meilleurs profils...</p>
                  <a href="/blog/recruter-attirer-strategies-pme-eti" className="ap-actu-link">Lire l{"'"}article <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg></a>
                </div>
              </div>

              {/* Short — 14 Avril 2026 */}
              <div className="ap-actu-card reveal reveal-d2">
                <div className="ap-actu-thumb">
                  <img src="https://i.ytimg.com/vi/RSqrte4w-Ss/hq2.jpg" alt="Comment un mail de refus ruine votre marque employeur" />
                  <div className="ap-actu-tag ap-tag-video">Short</div>
                  <div className="ap-actu-play"><svg viewBox="0 0 24 24" fill="#fff"><polygon points="8,5 19,12 8,19"/></svg></div>
                </div>
                <div className="ap-actu-body">
                  <div className="ap-actu-date">14 Avril, 2026</div>
                  <h4>Comment un mail de refus ruine votre marque employeur</h4>
                  <p>Un simple mail de refus peut d{"é"}truire votre image aupr{"è"}s des candidats. D{"é"}couvrez pourquoi en quelques secondes.</p>
                  <a href="https://youtube.com/shorts/RSqrte4w-Ss" target="_blank" rel="noopener noreferrer" className="ap-actu-link">Regarder <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg></a>
                </div>
              </div>

              {/* Article — 07 Août 2025 */}
              <div className="ap-actu-card reveal reveal-d3">
                <div className="ap-actu-thumb">
                  <img src="https://horizons-cdn.hostinger.com/9fdb5cd6-7395-42e7-a897-ebea996e876c/52edae4d2d6d0b76ce883739c56ee0e7.png" alt="Le vrai coût d'un refus impersonnel" />
                  <div className="ap-actu-tag ap-tag-blog">Article</div>
                </div>
                <div className="ap-actu-body">
                  <div className="ap-actu-date">07 Ao{"û"}t, 2025</div>
                  <h4>Le vrai co{"û"}t d{"'"}un refus impersonnel</h4>
                  <p>Chaque point de contact avec un candidat est un point de bascule : pour l{"'"}image, la r{"é"}putation et l{"'"}engagement. Et parmi ces points de contact, il y en a un que beaucoup sous-estime encore trop : le message de refus.</p>
                  <a href="/blog/le-vrai-cout-dun-refus-impersonnel" className="ap-actu-link">Lire l{"'"}article <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg></a>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* NEWSLETTER */}
        <section className="ap-nl">
          <div className="ap-container">
            <div className="ap-nl-box reveal">
              <h3>Rejoignez la <span className="ap-grad">newsletter</span></h3>
              <p>Conseils recrutement, outils IA et bonnes pratiques {"—"} deux jeudis par mois.</p>
              <a href={newsletterUrl} target="_blank" rel="noopener noreferrer" className="ap-nl-cta">S{"'"}inscrire {"à"} la newsletter</a>
            </div>
          </div>
        </section>

        {/* Transition fluide vers le footer */}
        <div className="ap-wave" style={{ background: 'transparent' }}>
          <svg viewBox="0 0 1440 140" preserveAspectRatio="none">
            <path d="M0,50 C240,90 480,10 720,50 C960,90 1200,10 1440,50 L1440,140 L0,140 Z" fill="rgba(2,6,21,.25)"/>
            <path d="M0,70 C300,100 600,30 900,70 C1100,90 1300,45 1440,70 L1440,140 L0,140 Z" fill="rgba(2,6,21,.5)"/>
            <path d="M0,90 C360,110 720,75 1080,90 C1260,98 1380,85 1440,90 L1440,140 L0,140 Z" fill="rgba(2,6,21,.8)"/>
            <path d="M0,110 C360,120 720,100 1080,110 C1260,115 1380,105 1440,110 L1440,140 L0,140 Z" fill="#020615"/>
          </svg>
        </div>

      </div>
      </div>
    </>
  );
};

export default QuiSommesNousPage;
