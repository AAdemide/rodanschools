import Link from 'next/link';
import { 
  Calendar, 
  ArrowRight, 
  CalendarOff, 
  ArrowDownRight
} from 'lucide-react';
import EventCard from '@/components/EventCard'; // Make sure this path is correct for your app!
import PreFooterCTA from '@/components/PreFooterCTA';

// --- MOCK DATA ---
// Left empty so it defaults to the empty state. 
// When you're ready, populate this array with objects containing: 
// { id, title, date, month, time, location, description, theme, link }
const MOCK_EVENTS: any[] = [];

export default function Events() {
  const hasEvents = MOCK_EVENTS.length > 0;

  return (
    <main className="flex-grow flex flex-col relative overflow-hidden bg-surface">
      
      {/* CREATIVE BACKGROUND: Dot Grid + Ambient Glows */}
      <div 
        className="absolute inset-0 z-0 opacity-20 pointer-events-none" 
        style={{ backgroundImage: 'radial-gradient(var(--color-outline-variant) 2px, transparent 2px)', backgroundSize: '40px 40px' }}
      ></div>
      <div className="absolute top-0 left-0 w-full h-[600px] bg-gradient-to-b from-primary-fixed/50 to-transparent -z-10"></div>
      <div className="absolute -top-40 right-0 w-[500px] h-[500px] bg-secondary-fixed/20 rounded-full blur-[120px] -z-10 pointer-events-none"></div>

      {/* HERO SECTION */}
      <section className="w-full pt-24 md:pt-32 pb-12 px-gutter relative z-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-end gap-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface-container-lowest border border-primary-fixed shadow-sm mb-6">
              <Calendar className="w-4 h-4 text-primary" />
              <span className="font-label-bold text-xs uppercase tracking-widest text-primary">Campus Calendar</span>
            </div>
            <h1 className="font-h1 text-[56px] md:text-[72px] font-extrabold text-on-surface mb-6 tracking-tight leading-[1.1]">
              Upcoming <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-container">Events.</span>
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
              Discover what's happening at Rodan School. From academic showcases to community gatherings, stay connected with our vibrant campus life.
            </p>
          </div>
          
          <div className="hidden md:flex items-center justify-center w-24 h-24 rounded-full bg-primary-container text-on-primary animate-[bounce_3s_infinite]">
            <ArrowDownRight className="w-10 h-10" />
          </div>
        </div>
      </section>

      {/* MAIN CONTENT AREA */}
      <section className="w-full px-gutter pb-32 relative z-10">
        <div className="max-w-7xl mx-auto">

          {hasEvents ? (
            /* --- POPULATED STATE --- */
            <div className="flex flex-col gap-6">
              {MOCK_EVENTS.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          ) : (
            /* --- EMPTY STATE --- */
            <div className="w-full bg-surface-container-lowest/50 backdrop-blur-sm border-2 border-dashed border-outline-variant/50 rounded-[3rem] p-12 md:p-24 flex flex-col items-center text-center relative overflow-hidden">
              
              {/* Soft background decor for empty state */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-surface-variant/30 rounded-full blur-3xl -z-10"></div>

              <div className="w-24 h-24 bg-surface-variant text-outline rounded-full flex items-center justify-center mb-8 shadow-inner">
                <CalendarOff className="w-10 h-10" />
              </div>
              
              <h2 className="font-h2 text-[32px] md:text-[40px] text-on-surface mb-4">
                No Upcoming Events
              </h2>
              <p className="font-body-lg text-on-surface-variant w-full max-w-3xl mb-10 leading-relaxed">
                Our calendar is currently clear! Check back soon as we are always planning exciting new activities, workshops, and gatherings for our community.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                <Link 
                  href="/admissions"
                  className="inline-flex items-center justify-center gap-2 bg-primary text-on-primary font-label-bold px-8 py-4 rounded-xl shadow-lg hover:shadow-[0_10px_20px_rgba(0,102,255,0.2)] hover:-translate-y-1 transition-all active:scale-95"
                >
                  Book a Campus Tour <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          )}

        </div>
      </section>
      < PreFooterCTA />
    </main>
  );
}