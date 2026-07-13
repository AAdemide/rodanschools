import Link from 'next/link';
import { Clock, MapPin, ArrowRight } from 'lucide-react';

export default function EventCard({ event }: { event: any }) {
  return (
    <div className="bg-surface-container-lowest p-6 md:p-8 rounded-[2rem] shadow-sm border border-surface-variant/50 hover:-translate-y-1 hover:shadow-[0_20px_40px_-15px_rgba(0,102,255,0.12)] transition-all duration-300 group flex flex-col md:flex-row gap-6 md:gap-10 items-start md:items-center relative overflow-hidden">
      {/* Hover ambient blur */}
      <div className={`absolute -right-20 -bottom-20 w-64 h-64 ${event.theme.split(' ')[0]} rounded-full blur-[80px] opacity-0 group-hover:opacity-20 transition-opacity duration-700 pointer-events-none`}></div>

      {/* Date Block */}
      <div className={`shrink-0 w-24 h-28 ${event.theme} rounded-2xl flex flex-col items-center justify-center shadow-md transform transition-transform group-hover:scale-105 group-hover:-rotate-2`}>
        <span className="font-label-bold text-sm uppercase tracking-widest opacity-90">{event.month}</span>
        <span className="font-h1 text-[40px] leading-none mt-1">{event.date}</span>
      </div>

      {/* Event Details */}
      <div className="flex-grow flex flex-col gap-3 z-10">
        <h3 className="font-h2 text-[28px] md:text-[32px] text-on-surface group-hover:text-primary transition-colors duration-300 tracking-tight">
          {event.title}
        </h3>
        
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mb-2">
          <div className="flex items-center gap-2 text-on-surface-variant font-label-bold text-sm">
            <Clock className="w-4 h-4 text-primary" />
            {event.time}
          </div>
          <div className="flex items-center gap-2 text-on-surface-variant font-label-bold text-sm">
            <MapPin className="w-4 h-4 text-secondary" />
            {event.location}
          </div>
        </div>
        
        <p className="font-body-md text-on-surface-variant leading-relaxed max-w-3xl">
          {event.description}
        </p>
      </div>

      {/* Action Button */}
      <div className="shrink-0 mt-4 md:mt-0 z-10 w-full md:w-auto">
        <Link 
          href={event.link}
          className="inline-flex items-center justify-center w-full md:w-auto gap-2 bg-surface hover:bg-primary-container text-primary hover:text-on-primary border border-outline-variant/30 hover:border-transparent font-label-bold px-6 py-3 rounded-xl transition-all active:scale-95 shadow-sm"
        >
          View Details <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}