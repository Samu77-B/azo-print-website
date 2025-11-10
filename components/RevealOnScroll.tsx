'use client';

import { useEffect, useRef, useState, type ReactNode } from 'react';

type Direction = 'up' | 'down' | 'left' | 'right' | 'none';

interface RevealOnScrollProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  threshold?: number;
  direction?: Direction;
  durationClassName?: string;
  triggerOnce?: boolean;
}

const directionMap: Record<Direction, string> = {
  up: 'translate-y-8',
  down: '-translate-y-8',
  left: 'translate-x-8',
  right: '-translate-x-8',
  none: '',
};

export default function RevealOnScroll({
  children,
  className = '',
  delay = 0,
  threshold = 0.15,
  direction = 'up',
  durationClassName = 'duration-700',
  triggerOnce = true,
}: RevealOnScrollProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      setIsVisible(true);
      return;
    }

    const supportsIntersectionObserver =
      typeof window !== 'undefined' && 'IntersectionObserver' in window;

    if (!supportsIntersectionObserver) {
      setIsVisible(true);
      return;
    }

    const isMobileViewport =
      typeof window !== 'undefined' &&
      window.matchMedia?.('(max-width: 768px)').matches;

    const observerThreshold = isMobileViewport
      ? Math.min(threshold, 0.05)
      : threshold;

    const rootMargin = isMobileViewport ? '0px 0px -5% 0px' : '0px 0px -10% 0px';

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (triggerOnce) {
            observer.unobserve(entry.target);
          }
        } else if (!triggerOnce) {
          setIsVisible(false);
        }
      },
      { threshold: observerThreshold, rootMargin }
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
    };
  }, [threshold, triggerOnce]);

  const hiddenTransform = directionMap[direction];

  const visibilityClasses = isVisible
    ? ['opacity-100', 'translate-y-0', 'translate-x-0']
    : ['opacity-0', hiddenTransform];

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={[
        'transition-all',
        'transform-gpu',
        durationClassName,
        'ease-out',
        'will-change-transform',
        ...visibilityClasses,
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      {children}
    </div>
  );
}


