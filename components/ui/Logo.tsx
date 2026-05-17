import Link from 'next/link';
import { GraduationCap } from 'lucide-react';

interface LogoProps {
  className?: string;
  iconSize?: number;
}

export default function Logo({ className = "", iconSize = 32 }: LogoProps) {
  return (
    <Link 
      href="/" 
      className={`flex items-center gap-2 group focus:outline-none ${className}`}
      aria-label="Rodan School Home"
    >
      <GraduationCap 
        className="text-primary-container group-hover:scale-110 transition-transform duration-300" 
        size={iconSize} 
        strokeWidth={2.5} 
      />
      <span className="text-2xl font-black tracking-tighter font-display text-primary-container">
        Rodan School
      </span>
    </Link>
  );
}