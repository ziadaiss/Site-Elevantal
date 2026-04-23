import React from 'react';

export const DarkToLight = ({ darkBg = '#09153f', lightBg = '#F3F4F6' }) => (
  <div className="sep-waves" style={{ background: darkBg }}>
    <svg viewBox="0 0 1440 140" preserveAspectRatio="none">
      <path d="M0,50 C240,90 480,10 720,50 C960,90 1200,10 1440,50 L1440,140 L0,140 Z" fill="rgba(82,100,228,.2)"/>
      <path d="M0,65 C300,100 600,25 900,65 C1100,90 1300,35 1440,65 L1440,140 L0,140 Z" fill="rgba(66,126,222,.18)"/>
      <path d="M0,80 C200,100 500,55 800,80 C1050,100 1300,60 1440,80 L1440,140 L0,140 Z" fill="rgba(53,152,217,.15)"/>
      <path d="M0,100 C360,115 720,85 1080,100 C1260,108 1380,95 1440,100 L1440,140 L0,140 Z" fill={lightBg}/>
    </svg>
  </div>
);

export const WhiteToGray = ({ whiteBg = '#fff', grayBg = '#F3F4F6' }) => (
  <div className="sep-waves" style={{ background: whiteBg }}>
    <svg viewBox="0 0 1440 140" preserveAspectRatio="none">
      <path d="M0,50 C240,90 480,10 720,50 C960,90 1200,10 1440,50 L1440,140 L0,140 Z" fill="rgba(0,0,0,.02)"/>
      <path d="M0,65 C300,100 600,25 900,65 C1100,90 1300,35 1440,65 L1440,140 L0,140 Z" fill="rgba(0,0,0,.03)"/>
      <path d="M0,80 C200,100 500,55 800,80 C1050,100 1300,60 1440,80 L1440,140 L0,140 Z" fill="rgba(0,0,0,.04)"/>
      <path d="M0,100 C360,115 720,85 1080,100 C1260,108 1380,95 1440,100 L1440,140 L0,140 Z" fill={grayBg}/>
    </svg>
  </div>
);

export const GrayToWhite = ({ grayBg = '#F3F4F6', whiteBg = '#fff' }) => (
  <div className="sep-waves" style={{ background: grayBg }}>
    <svg viewBox="0 0 1440 140" preserveAspectRatio="none">
      <path d="M0,50 C240,90 480,10 720,50 C960,90 1200,10 1440,50 L1440,140 L0,140 Z" fill="rgba(255,255,255,.3)"/>
      <path d="M0,65 C300,100 600,25 900,65 C1100,90 1300,35 1440,65 L1440,140 L0,140 Z" fill="rgba(255,255,255,.5)"/>
      <path d="M0,80 C200,100 500,55 800,80 C1050,100 1300,60 1440,80 L1440,140 L0,140 Z" fill="rgba(255,255,255,.7)"/>
      <path d="M0,100 C360,115 720,85 1080,100 C1260,108 1380,95 1440,100 L1440,140 L0,140 Z" fill={whiteBg}/>
    </svg>
  </div>
);

export const LightToDark = ({ lightBg = '#F3F4F6', darkBg = '#040a23' }) => (
  <div className="sep-waves" style={{ background: lightBg }}>
    <svg viewBox="0 0 1440 140" preserveAspectRatio="none">
      <path d="M0,50 C240,90 480,10 720,50 C960,90 1200,10 1440,50 L1440,140 L0,140 Z" fill="rgba(53,152,217,.12)"/>
      <path d="M0,65 C300,100 600,25 900,65 C1100,90 1300,35 1440,65 L1440,140 L0,140 Z" fill="rgba(66,126,222,.15)"/>
      <path d="M0,80 C200,100 500,55 800,80 C1050,100 1300,60 1440,80 L1440,140 L0,140 Z" fill="rgba(82,100,228,.2)"/>
      <path d="M0,100 C360,115 720,85 1080,100 C1260,108 1380,95 1440,100 L1440,140 L0,140 Z" fill={darkBg}/>
    </svg>
  </div>
);
