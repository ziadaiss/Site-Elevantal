import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

const Counter = ({ target, duration = 2500, prefix = "", suffix = "" }) => {
  const [count, setCount] = useState(0);
  const nodeRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (nodeRef.current) observer.observe(nodeRef.current);
    
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTime;
    let animationFrame;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const progressPercent = Math.min(progress / duration, 1);
      
      const ease = 1 - Math.pow(1 - progressPercent, 4);
      
      setCount(Math.floor(target * ease));

      if (progress < duration) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(target);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [isVisible, target, duration]);

  return <span ref={nodeRef}>{prefix}{count}{suffix}</span>;
};

// Simplified StatItem: borders are handled by the parent container's divide utilities
const StatItem = ({ value, label, prefix = "", suffix = "", onClick, isClickable }) => (
  <div className={cn(
    "flex flex-col items-center justify-center p-6 sm:p-4 text-center w-full md:w-1/3"
  )}>
    <div 
      onClick={onClick}
      className={cn(
        "font-bold text-white mb-2 tracking-tight transition-transform duration-300",
        // Enhanced responsiveness for font sizes
        "text-5xl sm:text-4xl md:text-5xl lg:text-6xl", 
        isClickable && "cursor-pointer hover:scale-110 hover:text-white/90"
      )}
    >
      <Counter target={value} prefix={prefix} suffix={suffix} />
    </div>
    <div className="text-sm sm:text-xs md:text-sm font-semibold text-white/90 uppercase tracking-widest">
      {label}
    </div>
  </div>
);

const FloatingStatsCard = () => {
  const cardRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTestimonials = () => {
    const element = document.getElementById('temoignages');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative w-full z-20 -mt-16 sm:-mt-24 px-4 sm:px-6 lg:px-8">
      <motion.div
        ref={cardRef}
        initial={{ opacity: 0, y: 30 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full max-w-5xl mx-auto"
      >
        <div 
          className="rounded-2xl shadow-2xl overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, #5264e4 0%, #427ede 50%, #3598d9 100%)'
          }}
        >
          {/* 
            Layout:
            - Mobile: flex-col (vertical stack) with divide-y (horizontal lines)
            - Desktop: flex-row (horizontal row) with divide-x (vertical lines)
            - Added py-4 for mobile vertical spacing inside container
           */}
          <div className="flex flex-col md:flex-row items-center justify-between divide-y md:divide-y-0 md:divide-x divide-white/20 py-4 md:py-8">
            <StatItem value={10} prefix="+" label="RH et recruteurs formés" />
            <StatItem value={1500} prefix="+" label="Abonnés LinkedIn" />
            <StatItem 
              value={4} 
              prefix="⭐ +" 
              label="Avis" 
              onClick={scrollToTestimonials}
              isClickable={true}
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default FloatingStatsCard;