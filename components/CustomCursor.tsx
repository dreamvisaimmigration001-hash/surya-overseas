'use client';

import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Responsive, fluid spring configuration for signature ultra-smooth animation without delay
  const springConfig = { damping: 32, stiffness: 480, mass: 0.15 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia('(pointer: fine)').matches) {
      return;
    }

    setIsVisible(true);

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 10);
      cursorY.set(e.clientY - 10);
    };

    const handleMouseOver = (e: MouseEvent) => {
      try {
        const target = e.target as HTMLElement | null;
        if (!target || typeof target.closest !== 'function') {
          setIsHovering(false);
          return;
        }

        const tagName = target.tagName ? target.tagName.toLowerCase() : '';
        const isInteractive = Boolean(
          tagName === 'a' ||
          tagName === 'button' ||
          target.closest('a') ||
          target.closest('button') ||
          target.closest('[role="button"]') ||
          (target.classList && typeof target.classList.contains === 'function' && target.classList.contains('cursor-hover-target'))
        );

        setIsHovering(isInteractive);
      } catch {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', moveCursor, { passive: true });
    window.addEventListener('mouseover', handleMouseOver, { passive: true });

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [cursorX, cursorY]);

  if (!isVisible) return null;

  return (
    <motion.div
      className="hidden lg:block fixed top-0 left-0 w-5 h-5 rounded-full pointer-events-none z-[99999] mix-blend-difference will-change-transform"
      style={{
        x: cursorXSpring,
        y: cursorYSpring,
        backgroundColor: '#FFFFFF',
      }}
      animate={{
        scale: isHovering ? 2.4 : 1,
        opacity: isHovering ? 0.85 : 1,
      }}
      transition={{ type: 'spring', stiffness: 450, damping: 25 }}
    />
  );
}
