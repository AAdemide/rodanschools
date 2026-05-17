import Image from 'next/image';
import { LucideIcon } from 'lucide-react';

interface EventCardProps {
  title: string;
  date: string;
  month: string;
  timeOrLocation: string;
  category: string;
  imageSrc: string;
  Icon: LucideIcon;
  iconColorClass: string;
  dateColorClass: string;
}

export default function EventCard({ 
  title, date, month, timeOrLocation, category, imageSrc, Icon, iconColorClass, dateColorClass 
}: EventCardProps) {
  return (
    <div className="bg-surface rounded-2xl overflow-hidden shadow-[0_10px_30px_-15px_rgba(0,0,0,0.05)] hover:-translate-y-1 transition-all duration-300 group cursor-pointer border border-slate-200">
      <div className="h-48 overflow-hidden relative">
        <Image 
          src={imageSrc} 
          alt={title} 
          fill 
          className="object-cover group-hover:scale-105 transition-transform duration-500" 
        />
        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-lg text-center shadow-sm z-10">
          <span className={`block font-body font-bold text-xs uppercase tracking-wider ${dateColorClass}`}>{month}</span>
          <span className="block font-display font-bold text-2xl text-on-surface -mt-1">{date}</span>
        </div>
      </div>
      <div className="p-6">
        <div className={`flex items-center gap-2 mb-2 ${iconColorClass}`}>
          <Icon className="w-4 h-4" />
          <span className="font-body font-bold text-sm">{category}</span>
        </div>
        <h3 className="font-display font-bold text-xl text-on-surface mb-2 group-hover:text-primary-container transition-colors">
          {title}
        </h3>
        <p className="font-body text-on-surface-variant text-sm flex items-center gap-2">
          {timeOrLocation}
        </p>
      </div>
    </div>
  );
}