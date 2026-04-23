import React, { useEffect, useRef } from 'react';

const BlogHero = () => {
  const canvasRef = useRef(null);
  const sectionRef = useRef(null);

  // Reveal observer for elements inside the header
  useEffect(() => {
    if (!sectionRef.current) return;
    const els = sectionRef.current.querySelectorAll('.reveal');
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          obs.unobserve(e.target);
        }
      });
    }, { threshold: 0.05 });
    els.forEach((el) => obs.observe(el));
    // Force check after a short delay for elements already in viewport
    setTimeout(() => {
      els.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
          el.classList.add('visible');
        }
      });
    }, 100);
    return () => obs.disconnect();
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

  const handleFormSubmit = (e) => {
    e.preventDefault();
    window.open("https://services-elevantal.systeme.io/newsletter", '_blank');
  };

  return (
    <>
      <style>{`
        .nl-wrap{position:relative;overflow:hidden;background:linear-gradient(180deg,#040a23 0%,#060e2d 15%,#09153f 35%,#0c1b50 55%,#102364 75%,#132873 100%);color:#fff;font-family:'Poppins',sans-serif}
        .nl-dots-canvas{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:0}
        .nl-content-wrap{position:relative;z-index:1}

        .nl-header{padding:100px 0 60px;position:relative;overflow:hidden}
        .nl-container{max-width:1120px;margin:0 auto;padding:0 32px;display:grid;grid-template-columns:1fr 420px;gap:60px;align-items:center}

        .nl-badge{display:inline-flex;align-items:center;gap:8px;padding:7px 18px;border-radius:100px;font-size:11px;font-weight:700;letter-spacing:1.8px;text-transform:uppercase;background:rgba(82,100,228,.12);color:#8090f0;margin-bottom:24px}
        .nl-badge-dot{width:8px;height:8px;border-radius:50%;background:#5264e4;animation:nlpulse 2s infinite}
        @keyframes nlpulse{0%,100%{opacity:1;transform:scale(1)}50%{opacity:.4;transform:scale(.7)}}
        .nl-left h1{font-size:clamp(32px,5vw,52px);font-weight:900;line-height:1.08;letter-spacing:-.03em;margin-bottom:24px}
        .nl-left h1 .nl-grad{background:linear-gradient(90deg,#5264e4,#427ede,#3598d9);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}
        .nl-left>p{font-size:17px;font-weight:300;color:rgba(255,255,255,.6);line-height:1.8;margin-bottom:36px;max-width:480px}
        .nl-left>p strong{font-weight:600;color:rgba(255,255,255,.85)}

        .nl-features{display:flex;flex-direction:column;gap:14px;margin-bottom:40px}
        .nl-feat{display:flex;align-items:center;gap:14px;font-size:15px;font-weight:500;color:rgba(255,255,255,.9)}
        .nl-feat-icon{width:32px;height:32px;min-width:32px;border-radius:10px;display:flex;align-items:center;justify-content:center}
        .nl-feat:nth-child(1) .nl-feat-icon{background:rgba(82,100,228,.12)}
        .nl-feat:nth-child(2) .nl-feat-icon{background:rgba(66,126,222,.12)}
        .nl-feat:nth-child(3) .nl-feat-icon{background:rgba(53,152,217,.12)}
        .nl-feat-icon svg{width:16px;height:16px}

        .nl-form{display:flex;gap:12px;max-width:460px}
        .nl-input{flex:1;padding:16px 20px;border-radius:14px;border:1.5px solid rgba(255,255,255,.08);background:rgba(255,255,255,.04);color:#fff;font-family:'Poppins',sans-serif;font-size:14px;font-weight:400;outline:none;transition:.3s}
        .nl-input::placeholder{color:rgba(255,255,255,.3);font-weight:300}
        .nl-input:focus{border-color:#427ede;background:rgba(66,126,222,.06)}
        .nl-btn{padding:16px 28px;background:linear-gradient(90deg,#5264e4,#427ede,#3598d9);border:none;border-radius:14px;color:#fff;font-family:'Poppins',sans-serif;font-size:14px;font-weight:700;cursor:pointer;transition:.4s;white-space:nowrap;box-shadow:0 4px 24px rgba(82,100,228,.3)}
        .nl-btn:hover{transform:translateY(-2px);box-shadow:0 8px 40px rgba(82,100,228,.45)}
        .nl-note{margin-top:14px;font-size:12px;color:rgba(255,255,255,.3);font-weight:300}

        .nl-right{position:relative;display:flex;justify-content:center}
        .nl-glow{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:500px;height:500px;background:radial-gradient(circle,rgba(82,100,228,.12),transparent 70%);pointer-events:none}

        .nl-mockup{width:380px;position:relative}
        .nl-mail-card{background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.08);border-radius:20px;padding:0;overflow:hidden;backdrop-filter:blur(12px)}
        .nl-mail-top{background:rgba(255,255,255,.04);padding:16px 22px;display:flex;align-items:center;gap:12px;border-bottom:1px solid rgba(255,255,255,.06)}
        .nl-mail-dots{display:flex;gap:6px}
        .nl-mail-dots span{width:10px;height:10px;border-radius:50%}
        .nl-mail-dots span:nth-child(1){background:#e24b4a}
        .nl-mail-dots span:nth-child(2){background:#f5c075}
        .nl-mail-dots span:nth-child(3){background:#22c55e}
        .nl-mail-bar{flex:1;height:24px;border-radius:8px;background:rgba(255,255,255,.06);margin-left:8px}
        .nl-mail-body{padding:28px 24px}
        .nl-mail-from{display:flex;align-items:center;gap:12px;margin-bottom:20px}
        .nl-mail-avatar{width:40px;height:40px;border-radius:50%;background:linear-gradient(90deg,#5264e4,#427ede,#3598d9);display:flex;align-items:center;justify-content:center;font-size:14px;font-weight:700;color:#fff}
        .nl-mail-sender{font-size:14px;font-weight:600;color:rgba(255,255,255,.9)}
        .nl-mail-date{font-size:11px;color:rgba(255,255,255,.35);font-weight:300}
        .nl-mail-subject{font-size:16px;font-weight:700;color:#fff;margin-bottom:16px;line-height:1.4}
        .nl-mail-preview{font-size:13px;color:rgba(255,255,255,.5);line-height:1.8;font-weight:300}
        .nl-mail-preview p+p{margin-top:10px}
        .nl-mail-tags{display:flex;flex-wrap:wrap;gap:8px;margin-top:20px}
        .nl-mail-tag{padding:5px 14px;border-radius:100px;font-size:10px;font-weight:600;letter-spacing:.5px;text-transform:uppercase}
        .nlt-1{background:rgba(82,100,228,.12);color:#8090f0}
        .nlt-2{background:rgba(66,126,222,.12);color:#7aacf0}
        .nlt-3{background:rgba(53,152,217,.12);color:#6dc0eb}

        .nl-notif{position:absolute;bottom:-20px;left:-30px;background:rgba(255,255,255,.07);border:1px solid rgba(255,255,255,.1);border-radius:14px;padding:14px 18px;display:flex;align-items:center;gap:12px;backdrop-filter:blur(12px);animation:nlfloat 4s ease-in-out infinite}
        @keyframes nlfloat{0%,100%{transform:translateY(0)}50%{transform:translateY(-8px)}}
        .nl-notif-icon{width:36px;height:36px;border-radius:10px;background:rgba(34,197,94,.12);display:flex;align-items:center;justify-content:center}
        .nl-notif-icon svg{width:18px;height:18px}
        .nl-notif-text{font-size:12px;font-weight:600;color:rgba(255,255,255,.85)}
        .nl-notif-sub{font-size:10px;color:rgba(255,255,255,.4);font-weight:300}

        .nl-stats{position:absolute;top:-15px;right:-20px;background:rgba(255,255,255,.07);border:1px solid rgba(255,255,255,.1);border-radius:14px;padding:12px 18px;backdrop-filter:blur(12px);text-align:center;animation:nlfloat 4s ease-in-out infinite;animation-delay:2s}
        .nl-stats-num{font-size:20px;font-weight:800;background:linear-gradient(90deg,#5264e4,#427ede,#3598d9);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}
        .nl-stats-label{font-size:10px;color:rgba(255,255,255,.4);font-weight:400}

        @media(max-width:900px){
          .nl-container{grid-template-columns:1fr;gap:48px}
          .nl-right{order:-1}
          .nl-mockup{width:320px}
          .nl-notif{left:0;bottom:-16px}
          .nl-stats{right:0;top:-12px}
          .nl-form{flex-direction:column}
        }
        @media(max-width:500px){
          .nl-mockup{width:280px}
        }
      `}</style>

      <div className="nl-wrap" ref={sectionRef}>
        <canvas className="nl-dots-canvas" ref={canvasRef}></canvas>
        <div className="nl-content-wrap">
          <section className="nl-header">
            <div className="nl-container">

              <div className="nl-left">
                <div className="nl-badge reveal"><span className="nl-badge-dot"></span>Chaque jeudi dans votre boîte mail</div>
                <h1 className="reveal reveal-d1">L'Expérience <span className="nl-grad">en Vrai</span></h1>
                <p className="reveal reveal-d2">La newsletter qui vous donne <strong>des conseils actionnables</strong> pour transformer votre expérience candidat, chaque semaine. Pas de théorie, <strong>que du concret.</strong></p>

                <div className="nl-features reveal reveal-d2">
                  <div className="nl-feat">
                    <div className="nl-feat-icon"><svg viewBox="0 0 16 16" fill="none"><path d="M3 8.5L6 11.5L13 4.5" stroke="#5264e4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></div>
                    1 email par semaine, chaque jeudi
                  </div>
                  <div className="nl-feat">
                    <div className="nl-feat-icon"><svg viewBox="0 0 16 16" fill="none"><path d="M3 8.5L6 11.5L13 4.5" stroke="#427ede" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></div>
                    Conseils, cas pratiques, templates
                  </div>
                  <div className="nl-feat">
                    <div className="nl-feat-icon"><svg viewBox="0 0 16 16" fill="none"><path d="M3 8.5L6 11.5L13 4.5" stroke="#3598d9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></div>
                    0 spam, désabonnement en 1 clic
                  </div>
                </div>

                <a href="https://services-elevantal.systeme.io/newsletter" target="_blank" rel="noopener noreferrer" className="nl-btn reveal reveal-d3" style={{display:'inline-flex',alignItems:'center',gap:'10px',textDecoration:'none'}}>
                  S'inscrire
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{width:'18px',height:'18px'}}><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                </a>
                <p className="nl-note reveal reveal-d4">Rejoignez les RH qui veulent faire mieux, pas juste plus.</p>
              </div>

              <div className="nl-right reveal reveal-d2">
                <div className="nl-glow"></div>
                <div className="nl-mockup">
                  <div className="nl-stats">
                    <div className="nl-stats-num">Chaque jeudi</div>
                    <div className="nl-stats-label">dans votre boîte mail</div>
                  </div>
                  <div className="nl-mail-card">
                    <div className="nl-mail-top">
                      <div className="nl-mail-dots"><span></span><span></span><span></span></div>
                      <div className="nl-mail-bar"></div>
                    </div>
                    <div className="nl-mail-body">
                      <div className="nl-mail-from">
                        <div className="nl-mail-avatar">ZA</div>
                        <div>
                          <div className="nl-mail-sender">Ziad · Elevantal</div>
                          <div className="nl-mail-date">Jeudi 17 avril · 8h00</div>
                        </div>
                      </div>
                      <div className="nl-mail-subject">Comment j'ai réduit le ghosting de 40% en PME avec un seul mail</div>
                      <div className="nl-mail-preview">
                        <p>Salut,</p>
                        <p>La semaine dernière, une RRH m'a dit : "Mes candidats disparaissent après l'entretien." Je lui ai partagé un template. Résultat : 40% de réponses en plus...</p>
                      </div>
                      <div className="nl-mail-tags">
                        <span className="nl-mail-tag nlt-1">Expérience candidat</span>
                        <span className="nl-mail-tag nlt-2">Template inclus</span>
                        <span className="nl-mail-tag nlt-3">Cas réel</span>
                      </div>
                    </div>
                  </div>
                  <div className="nl-notif">
                    <div className="nl-notif-icon"><svg viewBox="0 0 18 18" fill="none"><path d="M3.5 9.5L7 13L14.5 5" stroke="#22c55e" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/></svg></div>
                    <div>
                      <div className="nl-notif-text">Nouveau numéro envoyé</div>
                      <div className="nl-notif-sub">Il y a 2 minutes</div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default BlogHero;
