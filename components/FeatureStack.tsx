"use client";

import { useState, useEffect, useRef } from "react";
import { Baby, GraduationCap, Check, BookOpen } from "lucide-react";

const SCHOOL_LEVELS = [
  {
    id: "nursery",
    title: "Nursery School",
    icon: Baby,
    image: "/grad_nursery.jpeg",
    theme: "bg-tertiary-container text-on-tertiary",
    blobTheme: "bg-tertiary-container",
  },
  {
    id: "primary",
    title: "Primary School",
    icon: BookOpen,
    image: "/grad_primary.jpeg",
    theme: "bg-primary-container text-on-primary",
    blobTheme: "bg-primary-container",
  },
  {
    id: "secondary",
    title: "Secondary School",
    icon: GraduationCap,
    image: "/grad_secondary.jpeg",
    theme: "bg-secondary-container text-on-secondary-container",
    blobTheme: "bg-secondary-container",
  },
];

export default function FeatureStack() {
  const [cards, setCards] = useState(SCHOOL_LEVELS);
  const [isAnimating, setIsAnimating] = useState(false);
  
  // 1. Create a ref to track animation state to avoid stale closures in the interval
  const isAnimatingRef = useRef(isAnimating);

  // 2. Keep the ref synced with the actual state
  useEffect(() => {
    isAnimatingRef.current = isAnimating;
  }, [isAnimating]);

  const handleNextCard = () => {
    // 3. Check the ref instead of the state variable
    if (isAnimatingRef.current) return;
    
    setIsAnimating(true);

    setTimeout(() => {
      setCards((prev) => {
        const newCards = [...prev];
        const topCard = newCards.shift();
        if (topCard) newCards.push(topCard);
        return newCards;
      });
      
      setIsAnimating(false);
    }, 500); 
  };

  useEffect(() => {
    const timer = setInterval(() => {
      // 4. Safely call the function directly. Because setCards uses the `prev` 
      // callback pattern inside handleNextCard, the array will always be fresh!
      handleNextCard();
    }, 4000);
    
    return () => clearInterval(timer);
  }, []); // Empty dependency array is now perfectly safe

  return (
    <section className="max-w-[1280px] mx-auto px-md py-xl mb-xl">
      <div className="grid md:grid-cols-2 gap-xl items-center">
        
        {/* Interactive Card Stack */}
        <div 
          className="relative group stack-container w-full aspect-square cursor-pointer"
          onClick={handleNextCard}
        >
          {cards.map((card, index) => {
            const isTop = index === 0;
            const isMiddle = index === 1;
            const isBottom = index === 2;
            const IconComponent = card.icon;
            
            const isSliding = isTop && isAnimating;

            let style: React.CSSProperties = {};
            let zIndex = 10;

            if (isSliding) {
              style = { transform: "translate(80px, -80px) rotate(15deg) scale(0.95)", opacity: 0 };
              zIndex = 40;
            } else if (isTop) {
              style = { transform: "translate(0px, 0px) scale(1) rotate(0deg)", opacity: 1 };
              zIndex = 30;
            } else if (isMiddle) {
              style = isAnimating 
                ? { transform: "translate(0px, 0px) scale(1) rotate(0deg)", opacity: 1 }
                : { transform: "translate(0px, 16px) scale(0.95) rotate(-2deg)", opacity: 0.85 };
              zIndex = 20;
            } else if (isBottom) {
              style = isAnimating
                ? { transform: "translate(0px, 16px) scale(0.95) rotate(-2deg)", opacity: 0.85 }
                : { transform: "translate(0px, 32px) scale(0.9) rotate(-4deg)", opacity: 0.6 };
              zIndex = 10;
            }

            return (
              <div
                key={card.id}
                className={`absolute inset-0 w-full h-full origin-center will-change-transform ${
                  isAnimating ? "transition-all duration-500 ease-out" : ""
                }`}
                style={{ ...style, zIndex }}
              >
                <div className={`absolute inset-0 rounded-3xl transform rotate-3 scale-105 transition-transform group-hover:rotate-6 group-hover:scale-110 duration-500 ease-out -z-10 ${card.blobTheme}`}></div>

                <img
                  alt={card.title}
                  className="w-full h-full object-cover rounded-3xl shadow-[0_20px_50px_-20px_rgba(114,92,0,0.2)] bg-surface"
                  src={card.image}
                />
                
                <div className="absolute -bottom-6 -right-6 z-20 bg-surface text-on-surface p-sm rounded-2xl shadow-xl flex items-center gap-sm border border-outline-variant/20">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center ${card.theme}`}>
                    <IconComponent className="w-6 h-6"/>
                  </div>
                  <div>
                    <p className="font-label-bold text-label-bold text-on-surface">{card.title}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Text Content Container */}
        <div className="flex flex-col gap-md">
          <h2 className="font-h2 text-h2 text-on-surface">One School. One Family. Every Step of the Way.</h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant">
              We believe that the best ideas happen when you're moving, talking, and experimenting. Our campus is designed to eliminate friction between inspiration and action. No stiff lecture halls—just dynamic environments built for collaboration.
          </p>
          <ul className="flex flex-col gap-sm mt-sm">
            {[
              "Seamless transitions across Nursery, Primary, and Secondary levels.",
              "Consistent mentorship that grows alongside your child's unique needs.",
              "A unified curriculum designed to build confidence year after year."
            ].map((text, i) => (
              <li key={i} className="flex items-start gap-sm">
                <div className="mt-1 p-1 w-6 h-6 rounded-full bg-primary-fixed-dim flex items-center justify-center text-primary-container shrink-0">
                  <Check className="w-4 h-4 stroke-[3px]" />
                </div>
                <span className="font-body-md text-body-md text-on-surface-variant">{text}</span>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  );
}