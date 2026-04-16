import { useEffect } from 'react';

export default function useScrollReveal() {
  useEffect(function() {
    var els = document.querySelectorAll('.reveal');
    var obs = new IntersectionObserver(function(entries) {
      entries.forEach(function(e) {
        if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); }
      });
    }, { threshold: .12 });
    for (var i = 0; i < els.length; i++) obs.observe(els[i]);
    return function() { obs.disconnect(); };
  }, []);
}
