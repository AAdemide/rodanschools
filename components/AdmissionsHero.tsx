'use client';

import Image from 'next/image';
import BookVisitForm from './BookVisitForm';
import { ArrowRight, Star } from 'lucide-react';

export default function AdmissionsHero() {
  const currentYear = new Date().getFullYear();

  return (
    <section className="relative py-36 px-gutter overflow-hidden flex items-center min-h-[716px] bg-surface-bright">
      
      {/* 1. MATTE PAPER TEXTURE OVERLAY */}
      <svg 
        className="pointer-events-none absolute inset-0 z-0 h-full w-full opacity-[0.4] mix-blend-overlay"
        aria-hidden="true"
      >
        <filter id="noiseFilterHero">
          <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="3" stitchTiles="stitch" />
        </filter>
        <rect width="100%" height="100%" filter="url(#noiseFilterHero)" />
      </svg>

      {/* 2. DYNAMIC BLUR BLOBS FOR COLOR & DEPTH */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary-fixed/40 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 z-0 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary-fixed/30 rounded-full blur-[100px] translate-y-1/4 -translate-x-1/4 z-0 pointer-events-none"></div>
      
      {/* 3. ARCHITECTURAL GRID PATTERN */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none"></div>

      {/* 4. DECORATIVE FLOATING POP-ART SHAPES */}
      <div className="absolute top-[20%] left-[45%] z-0 text-secondary-container animate-pulse" style={{ animationDuration: '4s' }}>
        <Star size={36} fill="currentColor" className="rotate-12" />
      </div>
      <div className="absolute bottom-[15%] right-[52%] z-0 text-tertiary-fixed-dim animate-pulse" style={{ animationDuration: '5s' }}>
        <Star size={24} fill="currentColor" className="-rotate-12" />
      </div>
      {/* Hollow circle accent */}
      <div className="absolute top-[15%] left-[8%] w-8 h-8 rounded-full border-[5px] border-primary-fixed-dim z-0 opacity-60"></div>


      {/* MAIN CONTENT CONTAINER */}
      <div className="max-w-container-max mx-auto w-full relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-xl items-center mt-8">
        
        {/* LEFT COLUMN: Text & CTAs */}
        <div className="max-w-2xl relative">
          <span 
            className="animate-fade-in-up inline-block px-md py-xs bg-white text-primary-container font-label-bold text-label-bold rounded-full mb-md shadow-sm border border-primary-fixed"
            style={{ animationDelay: '0ms' }}
          >
            Admissions {`${currentYear} - ${currentYear + 1}`}
          </span>
          
          <h1 
            className="animate-fade-in-up font-h1 text-[42px] md:text-h1 text-on-background mb-md"
            style={{ animationDelay: '150ms' }}
          >
            Begin Your Adventure at{' '}
            <span className="text-primary relative inline-block whitespace-nowrap">
              Rodan
              {/* Fun curved underline accent */}
              <svg className="absolute w-full h-3 -bottom-1 left-0 text-secondary-container" viewBox="0 0 100 20" preserveAspectRatio="none">
                <path d="M0 15 Q 50 0 100 15" fill="none" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
              </svg>
            </span>
          </h1>
          
          <p 
            className="animate-fade-in-up font-body-lg text-body-lg text-on-surface-variant mb-md font-medium"
            style={{ animationDelay: '300ms' }}
          >
            Join a community where learning is active, joyful, and deeply engaging. We invite you to visit our campus and experience the adventure of learning in person.
          </p>
          
          {/* <div 
            className="animate-fade-in-up flex flex-wrap gap-md"
            style={{ animationDelay: '450ms' }}
          >
            <button className="bg-primary-container text-on-primary font-label-bold text-label-bold px-lg py-sm rounded-lg hover:scale-105 active:scale-95 hover:bg-primary transition-all duration-300 shadow-[0_8px_20px_-8px_rgba(0,102,255,0.4)] hover:shadow-[0_12px_24px_-8px_rgba(0,102,255,0.6)] flex items-center gap-xs">
              Book a Visit <ArrowRight className="h-5 w-5 ml-1"/>
            </button>
          </div> */}
            <a href="tel:+18005550199" className="border-2 border-primary-container text-primary-container font-label-bold text-label-bold px-lg py-sm rounded-lg hover:scale-105 active:scale-95 hover:bg-primary-container hover:text-on-primary transition-all duration-300 gap-xs bg-white/40 backdrop-blur-sm">
              Contact Admissions
            </a>
        </div>

        {/* RIGHT COLUMN: The Form */}
        <div 
          className="relative animate-fade-in-up w-full max-w-[600px] justify-self-end mt-8 lg:mt-0" 
          style={{ animationDelay: '300ms' }}
        >
          {/* Offset gradient shadow to give the form a heavy, pop-art 3D feel */}
          <div className="absolute inset-0 bg-gradient-to-br from-white to-primary-fixed rounded-2xl translate-x-3 translate-y-4 md:translate-x-5 md:translate-y-6 -z-10 opacity-80"></div>
          
          {/* Form Component */}
          <BookVisitForm />
        </div>

      </div>
    </section>
  );
}