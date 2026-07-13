import Link from 'next/link';
import { GraduationCap } from 'lucide-react';

interface LogoProps {
  className?: string;
  iconSize?: number;
  scale?: number; // 100 is the default (100%)
}

export default function Logo({ 
  className = "", 
  iconSize = 32, 
  scale = 100 
}: LogoProps) {
  
  // Create a multiplier (e.g., scale 80 becomes 0.8)
  const multiplier = scale / 100;
  
  // Calculate the exact layout values mathematically
  const currentIconSize = iconSize * multiplier;
  const currentFontSize = `${1.5 * multiplier}rem`; // text-2xl is normally 1.5rem
  const currentGap = `${0.5 * multiplier}rem`;      // gap-2 is normally 0.5rem

  return (
    <Link 
      href="/" 
      // Tailwind handles the CSS transform hover animations
      // We added `origin-left` so it scales outward from the start, 
      // preventing it from clipping out of the left side of your container.
      className={`flex items-center hover:scale-${scale+5} hover:-rotate-1 transition-all duration-300 focus:outline-none origin-left ${className}`}
      aria-label="Rodan School Home"
      style={{ gap: currentGap }}
    >
      <GraduationCap 
        className="text-primary-container" 
        size={currentIconSize} 
        strokeWidth={2.5} 
      />
      <span 
        className="font-black tracking-tighter font-display text-primary-container"
        // Applying the calculated font size directly
        style={{ 
          fontSize: currentFontSize, 
          lineHeight: 1.1 
        }}
      >
        Rodan School
      </span>
    </Link>
  );
}