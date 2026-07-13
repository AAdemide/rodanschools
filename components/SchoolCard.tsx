import React from 'react';
import { LucideIcon } from 'lucide-react';

export interface SchoolCardProps {
  title: string;
  image: string;
  Icon: LucideIcon;
  theme: string;       // Background/text color for the badge icon
  blobTheme: string;   // Background color for the blob behind the image
  badgePosition?: 'left' | 'right';
  className?: string;  // Allows parent to pass positioning/sizing classes (e.g., aspect ratio or absolute)
  style?: React.CSSProperties; // Allows passing inline styles (used by your stack animation later)
}

export default function SchoolCard({
  title,
  image,
  Icon,
  theme,
  blobTheme,
  badgePosition = 'right',
  className = '',
  style = {}
}: SchoolCardProps) {
  // Dynamic placement for the floating badge
  const badgePlacement = badgePosition === 'left' ? '-bottom-6 -left-6' : '-bottom-6 -right-6';
  
  // Smart hover animation: Image pushes *away* from the badge
  const hoverTranslate = badgePosition === 'left' 
    ? 'group-hover:-translate-y-2 group-hover:translate-x-2' 
    : 'group-hover:-translate-y-2 group-hover:-translate-x-2';

  return (
    <div className={`relative group ${className}`} style={style}>
      {/* Background Blob: Scales and rotates further on hover */}
      <div 
        className={`absolute inset-0 rounded-3xl transform rotate-3 scale-105 transition-transform group-hover:rotate-6 group-hover:scale-110 duration-500 ease-out z-0 ${blobTheme}`}
      ></div>

      {/* Main Image: Smart translation on hover */}
      <img
        alt={title}
        className={`relative z-10 w-full h-full object-cover rounded-3xl shadow-[0_20px_50px_-20px_rgba(0,0,0,0.2)] bg-surface transition-transform duration-300 ${hoverTranslate}`}
        src={image}
      />
      
      {/* Floating Badge: Pops and scales up on hover */}
      <div className={`absolute ${badgePlacement} z-20 bg-surface text-on-surface p-sm rounded-2xl shadow-xl flex items-center gap-sm border border-outline-variant/20 transform group-hover:scale-110 transition-transform duration-300`}>
        <div className={`w-12 h-12 rounded-full flex items-center justify-center ${theme}`}>
          <Icon className="w-6 h-6" />
        </div>
        <div>
          <p className="font-label-bold text-label-bold text-on-surface pr-2">{title}</p>
        </div>
      </div>
    </div>
  );
}