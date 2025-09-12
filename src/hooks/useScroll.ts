// src/hooks/useScroll.ts

"use client";

import { useState, useEffect } from 'react';

export function useScroll(threshold = 10) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > threshold) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    // Limpa o evento quando o componente é desmontado
    return () => window.removeEventListener('scroll', handleScroll);
  }, [threshold]);

  return scrolled;
}