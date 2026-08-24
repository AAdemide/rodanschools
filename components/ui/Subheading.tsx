"use client";

import { useEffect, useRef, useState } from "react";

interface SubheadingProps {
  title: string;
}

export default function Subheading({ title }: SubheadingProps) {
  const [isVisible, setIsVisible] = useState(false);
  const headingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // When the element enters the screen
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Stop observing once it has animated so it doesn't repeat
          if (headingRef.current) observer.unobserve(headingRef.current);
        }
      },
      {
        threshold: 0.2, // Triggers when 20% of the element is visible
        rootMargin: "0px 0px -50px 0px" // Triggers slightly before it fully crosses the bottom of the screen
      }
    );

    if (headingRef.current) {
      observer.observe(headingRef.current);
    }

    return () => {
      if (headingRef.current) observer.unobserve(headingRef.current);
    };
  }, []);

  return (
    // 1. Attach the ref to the wrapper so the observer can watch it
    <div ref={headingRef} className="relative flex items-center mb-12 -ml-6 overflow-hidden pl-6 pr-8 py-2">
      <h2 
        className={`bg-primary-container text-white font-display font-extrabold text-[clamp(1rem,3vw,2.5rem)] py-3 pl-6 pr-12 relative inline-flex items-center shadow-lg origin-left whitespace-nowrap opacity-0 ${
          // 2. Only apply the animation class when the observer says it is visible
          isVisible ? 'animate-roll-out' : ''
        }`}
        style={{ animationFillMode: 'forwards' }}
      >
        {title}
        {/* The angled geometric cut-out */}
        <div 
          className="absolute top-0 right-[5px] h-full w-8 bg-primary-container" 
          style={{ clipPath: 'polygon(0% 0%, 100% 0%, 50% 50%, 100% 100%, 0% 100%)', transform: 'translateX(99%)' }} 
        />
      </h2>
    </div>
  );
}