'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { ArrowRight, X } from 'lucide-react';

export default function NotFound() {
  const [countdown, setCountdown] = useState(7);
  const [isCancelled, setIsCancelled] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Stop the timer if the user cancels it
    if (isCancelled) return;

    // Trigger redirect when countdown hits 0
    if (countdown <= 0) {
      router.push('/');
      return;
    }

    // Decrement counter
    const timer = setInterval(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [countdown, isCancelled, router]);

  const cancelRedirect = () => {
    setIsCancelled(true);
  };

  return (
    <main className="flex-grow flex items-center justify-center min-h-[85vh] bg-surface relative overflow-hidden px-gutter py-xl">
      
      {/* Inline styles for the whiteboard marker animation */}
      <style>{`
        .marker-draw {
          stroke-dasharray: 1;
          stroke-dashoffset: 1;
          animation: drawStroke 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }
        @keyframes drawStroke {
          to { stroke-dashoffset: 0; }
        }
      `}</style>

      {/* The Whiteboard Container */}
      <div className="bg-surface-container-lowest max-w-3xl w-full rounded-2xl ambient-shadow relative z-10 flex flex-col border-4 border-surface-variant/40 shadow-xl overflow-hidden">
        
        {/* Subtle Whiteboard Texture (Dot Grid) */}
        <div className="absolute inset-0 opacity-[0.15] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#727687 2px, transparent 2px)', backgroundSize: '30px 30px' }}></div>

        {/* Whiteboard Content */}
        <div className="p-10 md:p-16 flex flex-col items-center text-center relative z-10">
          
          {/* Animated 404 Drawing */}
          <div className="relative w-full max-w-[320px] mx-auto mb-12">
            <svg 
              viewBox="0 0 240 100" 
              className="w-full overflow-visible drop-shadow-sm" 
              stroke="var(--color-primary)" 
              strokeWidth="10" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              fill="none"
            >
              {/* First '4' */}
              <path className="marker-draw" style={{ animationDelay: '0.2s' }} d="M 50 10 L 10 70 L 65 70" pathLength={1} />
              <path className="marker-draw" style={{ animationDelay: '0.6s' }} d="M 45 5 L 45 95" pathLength={1} />
              
              {/* The '0' */}
              <path className="marker-draw" style={{ animationDelay: '1.0s' }} d="M 120 10 C 70 10, 70 90, 120 90 C 170 90, 170 10, 120 10" pathLength={1} />
              
              {/* Second '4' */}
              <path className="marker-draw" style={{ animationDelay: '1.6s' }} d="M 215 10 L 175 70 L 230 70" pathLength={1} />
              <path className="marker-draw" style={{ animationDelay: '2.0s' }} d="M 210 5 L 210 95" pathLength={1} />
            </svg>
          </div>

          <h1 className="font-h2 text-[32px] md:text-[40px] text-on-surface mb-4">
            Page Not Found
          </h1>
          {/* Removed max-w constraints so it fills the available space nicely */}
          <p className="font-body-lg text-on-surface-variant w-full mb-10 leading-relaxed">
            It looks like this page was erased from the board. It might have been moved, or the address could be incorrect. Let's get you back to the main lesson.
          </p>

          {/* Action Area */}
          <div className="flex w-full justify-center">
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 bg-primary text-white font-label-bold text-[16px] px-8 py-4 rounded-xl active:scale-95 transition-all shadow-md hover:shadow-[0_10px_20px_rgba(0,102,255,0.2)] hover:-translate-y-1 w-full sm:w-auto"
            >
              Back to Homepage <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>

        {/* Whiteboard Marker Tray (Bottom Edge) */}
        <div className="h-6 w-full bg-surface-variant border-t border-outline-variant/30 flex items-center px-8 relative z-10 shadow-inner">
          <div className="w-32 h-2 bg-outline-variant/20 rounded-full mx-auto"></div>
        </div>
      </div>

      {/* Floating Status Indicator with Cancel 'X' */}
      {!isCancelled && (
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-3 px-2 py-2 pl-6 rounded-full bg-white/90 backdrop-blur-md shadow-lg border border-surface-variant animate-in slide-in-from-bottom-8 fade-in duration-500">
          <svg 
            className="animate-spin h-4 w-4 text-primary shrink-0" 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24"
          >
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          <p className="font-label-bold text-sm text-on-surface-variant whitespace-nowrap">
            Redirecting in <span className="text-primary">{countdown}s</span>...
          </p>
          <button 
            onClick={cancelRedirect}
            className="ml-2 bg-surface-container hover:bg-surface-variant text-outline hover:text-on-surface transition-colors rounded-full p-1.5"
            aria-label="Cancel automatic redirect"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      )}

    </main>
  );
}