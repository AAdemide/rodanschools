import Subheading from "@/components/ui/Subheading";
import FeatureStack from "@/components/FeatureStack";
import PreFooterCTA from "@/components/PreFooterCTA";
import ImageCarousel from "@/components/ImageCarousel";
import EventList from "@/components/EventList";

// --- DATA ARRAYS (Keeps JSX DRY) ---
const STATS = [
  { value: "25+", label: "YEARS OF ACADEMIC EXCELLENCE" },
  { value: "1,200+", label: "PROUD GRADUATES" },
  { value: "45+", label: "EXTRACURRICULAR ACTIVITIES" },
  { value: "85", label: "DEDICATED FACULTY MEMBERS" },
];

const FEATURES = [
  "Seamless transitions across Nursery, Primary, and Secondary levels.",
  "Consistent mentorship that grows alongside your child's unique needs.",
  "A unified curriculum designed to build confidence year after year.",
];

const EVENTS: any[] = [];

export default function Home() {
  return (
    /* Master Wrapper: Gives the whole page the blue background that stays visible before the rip */
    <main className="relative bg-primary min-h-screen overflow-hidden z-100">
      {/* MATTE PAPER TEXTURE */}
      <svg
        className="pointer-events-none fixed inset-0 z-50 h-full w-full opacity-[0.35] mix-blend-overlay"
        aria-hidden="true"
      >
        <filter id="noiseFilter">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.8"
            numOctaves="3"
            stitchTiles="stitch"
          />
        </filter>
        <rect width="100%" height="100%" filter="url(#noiseFilter)" />
      </svg>

      {/* HERO SECTION */}
      {/* Upgraded to CSS Grid (grid-cols-12) to strictly enforce widths and prevent text squishing */}
      <section className="relative w-full max-w-[2000px] mx-auto min-h-[100svh] lg:min-h-[85vh] grid grid-cols-1 lg:flex lg:justify-around items-center z-10 overflow-hidden lg:overflow-visible">
        
        {/* 1. TEXT CONTENT 
            Desktop: Commands exactly 5 out of 12 columns (lg:col-span-5). 
            Mobile: Spans full width, sits on top of carousel. 
        */}
        <div className="relative z-20 flex flex-col items-start gap-6  lg:col-span-5 px-6 pt-32 pb-24 lg:py-0 lg:pl-12 lg:pr-4 max-w-4xl">
          
          <span className="inline-block bg-white/20 backdrop-blur-md text-white font-label-bold text-[12px] uppercase tracking-widest px-md py-xs rounded-full animate-pulse-glow-white border border-white/30">
            Admissions Now Open
          </span>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight w-full">
            Empowering Minds Through the{" "}
            <span className="text-blue-600 relative inline-block z-10 px-2 mt-2 sm:mt-0">
              Power
              <svg width="0" height="0" className="absolute">
                <filter id="brush-edge">
                  <feTurbulence
                    type="fractalNoise"
                    baseFrequency="0.1 0.7"
                    numOctaves="5"
                    result="noise"
                  />
                  <feDisplacementMap
                    in="SourceGraphic"
                    in2="noise"
                    scale="15"
                    xChannelSelector="R"
                    yChannelSelector="G"
                  />
                </filter>
              </svg>
              <style>{`
                  @keyframes highlightWipe {
                    0% { transform: scaleX(0) rotate(-1.5deg); opacity: 0; }
                    100% { transform: scaleX(1) rotate(-1.5deg); opacity: 1; }
                  }
                `}</style>
              <span
                className="absolute bottom-1 left-[-4%] w-[108%] h-[85%] bg-yellow-400 -z-10"
                style={{
                  filter: "url(#brush-edge)",
                  transformOrigin: "left",
                  transform: "scaleX(0) rotate(-1.5deg)",
                  animation:
                    "highlightWipe 0.8s cubic-bezier(0.22, 1, 0.36, 1) 0.4s forwards",
                }}
              ></span>
            </span>
            <br />
            of Knowledge.
          </h1>
          
          {/* Increased text size (text-lg sm:text-xl) and forced full width (w-full) */}
          <p className="text-lg sm:text-xl text-slate-100 leading-relaxed w-full">
            We believe that guiding a child's future starts with supporting who
            they are today. Our dedicated educators focus on whole-child growth,
            giving them the tools and confidence to thrive in an ever-changing
            world.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mt-2 w-full sm:w-auto relative z-20">
            <a
              className="w-full sm:w-auto text-center px-6 md:px-8 py-3.5 rounded-lg bg-surface-container-lowest text-primary hover:bg-primary-fixed hover:scale-105 active:scale-95 transition-all duration-300 font-label-bold shadow-lg"
              href="#contact-form"
            >
              Join Rodan
            </a>
            <a
              className="w-full sm:w-auto text-center px-6 md:px-8 py-3.5 rounded-lg border-2 border-white/80 text-white hover:bg-white/15 hover:border-white hover:scale-105 active:scale-95 transition-all duration-300 font-label-bold"
              href="/admissions"
            >
              Visit Our Campus
            </a>
          </div>
        </div>

        {/* 2. CAROUSEL WRAPPER 
            Desktop: Commands exactly 7 out of 12 columns (lg:col-span-7). 
            Mobile: Absolute positioned completely behind the text. 
        */}
        <div className="absolute inset-0 z-0 lg:relative lg:col-span-7 lg:h-[85vh] pointer-events-none lg:pointer-events-auto w-full max-w-[850px]">
          <ImageCarousel />
          
          {/* HIGH-CONTRAST MOBILE OVERLAYS */}
          {/* 1. Base wash to slightly darken the photos overall */}
          <div className="absolute inset-0 bg-primary/50 lg:hidden z-10 pointer-events-none"></div>
          {/* 2. Deep gradient anchoring the bottom so the paragraph text stays highly readable */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#002f7a] via-primary/80 to-transparent lg:hidden z-10 pointer-events-none"></div>
        </div>

      </section>

      {/* --- LOWER SECTION WRAPPER --- */}
      <div className="relative w-full">
        {/* --- THE BACKGROUND OVERLAY (Repeating "Welcome to Rodan") --- */}
        {/* This sits perfectly on the blue background and is completely erased/covered when the gray tear animates over it */}
        <div className="absolute inset-0 pt-20 pb-32 flex flex-col items-center justify-start z-0 overflow-hidden pointer-events-none select-none">
          {/* We map 20 iterations to ensure it completely covers even the longest possible content length */}
          {Array.from({ length: 5 }).map((_, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center font-extrabold w-full max-w-7xl px-4 py-16 mb-40"
              style={{ fontSize: "min(12vw, 11rem)", lineHeight: "0.9" }}
            >
              {/* WELCOME */}
              <div className="flex gap-[0.05em]">
                <span className="pop-letter pop-c -rotate-2">W</span>
                <span className="pop-letter pop-m translate-y-2">E</span>
                <span className="pop-letter pop-y rotate-2">L</span>
                <span className="pop-letter pop-g -translate-y-1">C</span>
                <span className="pop-letter pop-p rotate-3">O</span>
                <span className="pop-letter pop-c -translate-y-2">M</span>
                <span className="pop-letter pop-y rotate-2">E</span>
              </div>

              {/* TO */}
              <div
                className="flex gap-[0.05em] mt-4 md:mt-8"
                style={{ fontSize: "1.4em" }}
              >
                <span className="pop-letter pop-g rotate-6">T</span>
                <span className="pop-letter pop-m -rotate-3 translate-y-2">
                  O
                </span>
              </div>

              {/* RODAN */}
              <div
                className="flex gap-[0.05em] mt-4 md:mt-8"
                style={{ fontSize: "1.2em" }}
              >
                <span className="pop-letter pop-p -rotate-2">R</span>
                <span className="pop-letter pop-y translate-y-3">O</span>
                <span className="pop-letter pop-c rotate-3">D</span>
                <span className="pop-letter pop-m -translate-y-1 -rotate-6">
                  A
                </span>
                <span className="pop-letter pop-g rotate-2">N</span>
              </div>
            </div>
          ))}
        </div>

        {/* --- REVEAL WRAPPER --- */}
        {/* This single wrapper holds BOTH the torn SVG and the gray content. 
            When this wipes, everything unmasks perfectly in sync, covering the text above. */}
        <div className="relative z-20 bg-slate-50 animate-rip mt-12 lg:mt-0">
          
          {/* THE TORN SVG */}
          {/* FIX: We anchor to `bottom-full` (0% top), and use fixed pixel translations 
              (translate-y-6, md:translate-y-10) to overlap the rotation gap. 
              This prevents the mobile height from breaking the placement. */}
          <div className="absolute bottom-[100.65%] lg:bottom-full left-[-5%] w-[110%] z-20 lg:-rotate-1 pointer-events-none translate-y-6 md:translate-y-10 lg:translate-y-12">
            <svg
              viewBox="0 540 798 60"
              preserveAspectRatio="none"
              className="relative block w-full h-[70px] md:h-[100px] lg:h-[130px] -scale-y-100"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                className="fill-white/60 -translate-y-[2px]"
                d="M-1,80c266.64,0,533.359,0,800,0c0,12.999,0,501.301,0,514.3 c-1.979-0.251-3.19-1.51-5.5-1c-2.073,0.458-4.398,3.336-8,2c-1.363-0.506-0.945-1.542-3-2c-4.889,6.421-17.787,5.443-26.5,3.5 c-5.321-1.187-7.796,2.695-12,1.5c-2.144-0.609-2.77-3.334-5-2.5c-2.848,0.736-2.954,2.354-7,2.5c-0.38-0.469-4.143-3.869-4.5-4 c-2.584-0.948-6.562,0.988-8.5-0.5c-0.765-0.587-1.982-3.179-2.5-4c-3.338,1.996-12.865,4.709-19,3c-2.279-0.635-3.527-4.016-7-3 c-0.5,0.5-1,1-1.5,1.5c-3.666,0-7.334,0-11,0c-2.354,0.689-6.891,2.412-9,3c-2.5-0.333-5-0.667-7.5-1c-4.039,1.34-3.785,4.881-11,5 c-2.197-3.009-4.073-1.426-8.5-2.5c-0.238-0.058-0.982-1.084-1.5-1c-1.27,0.206-2.033,2.104-4.5,1.5c-2.456-0.601-4.021-3.434-6-4 c-2.458-0.703-5.953,1.17-8.5-0.5c-1.283-0.842-2.55-3.348-4-4c-1.666-0.167-3.334-0.333-5-0.5c-0.666-0.667-1.334-1.333-2-2 c-2.108-0.574-2.424,1.148-3.5,1.5c-2.5,0-5,0-7.5,0c-1.213,0.372-2.324,1.938-4.5,1.5c-2.477-0.498-3.352-2.81-5-3.5 c-2.5,0.167-5,0.333-7.5,0.5c-0.653-0.161-2.545-1.396-3-1.5c-2.496-0.57-6.471,1.454-8,2c-2.333,0-4.667,0-7,0 c-3.384,1.001-8.081,1.086-11.5,2c-3,0.167-6,0.333-9,0.5c-2.076,0.81-5.334,2.928-7.5,3.5c-4.587,1.211-14.058-4.523-17.5-4 c-8.551,1.3-15.195,5.692-23,7c-4.572,0.766-8.705-2.709-14-1c-2.795,0.902-3.689,2.417-8,2.5c-0.082-0.11-14.328-8.949-14.5-9 c-2.576-0.767-9.65,1.133-13.5,0.5c-1.744-0.287-1.166-2.031-3.5-1.5c-0.5,0.5-1,1-1.5,1.5c-4,0-8,0-12,0c-0.5,0.667-1,1.333-1.5,2 c-2.643,1.622-6.873,0.754-9.5,0c-2.666,0-5.334,0-8,0c-2.848-0.902-13.672-4.712-16-1c-1.175,1.527-0.919,3.418-1.5,4.5 c-0.59,0.401-0.841,0.387-2,0.5c-2.2-2.122-7.899,1.788-10,1c-1.471-0.552-1.547-1.891-4.5-2c0,0.333,0,0.667,0,1 c0.376,0.536,0.301,0.473,0.5,1.5c-1.024,0.356-2.337,0.497-4,0.5c-0.573-0.728-1.001-1.1-1.5-2c-3.663,2.891-16.4,7.378-24,5 c-1.621-0.507-1.684-2.654-4.5-2c-0.333,0.333-0.667,0.667-1,1c-4.166-0.167-8.334-0.333-12.5-0.5c-1.505,0.609-5.567,3.475-9,2.5 c-0.5-0.5-1-1-1.5-1.5c-2.5-0.167-5-0.333-7.5-0.5c-0.5-0.5-1-1-1.5-1.5c-2.686-1.046-5.182-0.016-7.5-1 c-1.642-0.697-2.621-2.479-4.5-3c-4.166-0.167-8.334-0.333-12.5-0.5c-0.951-0.283-1.863-1.735-2.5-2c-2.833,0-5.667,0-8.5,0 c-1.544,1.963-6.576,5.229-9,6c-5-0.167-10-0.333-15-0.5c-0.333,0.5-0.667,1-1,1.5c-5.854,2.65-14.461-3.294-18-5 c-2.541-1.225-3.66,1.546-6,1c-3.339-0.778-7.41-3.668-11.5-4c-3.641,5.078-8.567,0.247-13.5-0.5c-4.897-0.742-8.296,4.77-14,2.5 c-2.632-1.048-6.404-4.41-11.5-3c-3.154,0.873-6.272,4.116-9.5,5c-2.915,0.798-5.877-1.014-8-1.5c-5.647-1.293-8.433,2.647-13,1.5 c-2.042-0.513-3.28-2.318-5-3c-2.586-1.025-4.607-0.723-7-2c-0.667-0.667-1.333-1.333-2-2c-4,0-8,0-12,0 c-0.788-0.266-1.711-1.735-2.5-2c-2.288-0.769-15.792-0.718-17.5,0c-1.283,0.539-3.721,2.519-5.5,3c-2.606,0.705-3.513-0.84-6-1 c-0.985,1.586-2.277,2.684-3.5,4c-5.542,0.053-10.706-0.618-15-1c-1.055,1.718-1.689,2.406-4.5,2.5c-1.013-1.06-1.471-1.325-3.5-1.5 c-0.986,1.424-1.506,1.507-4,1.5c-1.993-1.967-3.643-0.51-7-1.5c-1.853-0.546-7.212-4.996-10-4c-0.654,0.233-2.018,1.861-3,2 c-2.529,0.358-3.821-3.567-7-2c-3.888,1.916-6.714,5.653-12,6c-6.722-5.98-12.787,1.042-18,2C-1,580.968-1,92.832-1,80z"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                className="fill-slate-50"
                d="M-1,80c266.64,0,533.359,0,800,0c0,12.999,0,501.301,0,514.3 c-1.979-0.251-3.19-1.51-5.5-1c-2.073,0.458-4.398,3.336-8,2c-1.363-0.506-0.945-1.542-3-2c-4.889,6.421-17.787,5.443-26.5,3.5 c-5.321-1.187-7.796,2.695-12,1.5c-2.144-0.609-2.77-3.334-5-2.5c-2.848,0.736-2.954,2.354-7,2.5c-0.38-0.469-4.143-3.869-4.5-4 c-2.584-0.948-6.562,0.988-8.5-0.5c-0.765-0.587-1.982-3.179-2.5-4c-3.338,1.996-12.865,4.709-19,3c-2.279-0.635-3.527-4.016-7-3 c-0.5,0.5-1,1-1.5,1.5c-3.666,0-7.334,0-11,0c-2.354,0.689-6.891,2.412-9,3c-2.5-0.333-5-0.667-7.5-1c-4.039,1.34-3.785,4.881-11,5 c-2.197-3.009-4.073-1.426-8.5-2.5c-0.238-0.058-0.982-1.084-1.5-1c-1.27,0.206-2.033,2.104-4.5,1.5c-2.456-0.601-4.021-3.434-6-4 c-2.458-0.703-5.953,1.17-8.5-0.5c-1.283-0.842-2.55-3.348-4-4c-1.666-0.167-3.334-0.333-5-0.5c-0.666-0.667-1.334-1.333-2-2 c-2.108-0.574-2.424,1.148-3.5,1.5c-2.5,0-5,0-7.5,0c-1.213,0.372-2.324,1.938-4.5,1.5c-2.477-0.498-3.352-2.81-5-3.5 c-2.5,0.167-5,0.333-7.5,0.5c-0.653-0.161-2.545-1.396-3-1.5c-2.496-0.57-6.471,1.454-8,2c-2.333,0-4.667,0-7,0 c-3.384,1.001-8.081,1.086-11.5,2c-3,0.167-6,0.333-9,0.5c-2.076,0.81-5.334,2.928-7.5,3.5c-4.587,1.211-14.058-4.523-17.5-4 c-8.551,1.3-15.195,5.692-23,7c-4.572,0.766-8.705-2.709-14-1c-2.795,0.902-3.689,2.417-8,2.5c-0.082-0.11-14.328-8.949-14.5-9 c-2.576-0.767-9.65,1.133-13.5,0.5c-1.744-0.287-1.166-2.031-3.5-1.5c-0.5,0.5-1,1-1.5,1.5c-4,0-8,0-12,0c-0.5,0.667-1,1.333-1.5,2 c-2.643,1.622-6.873,0.754-9.5,0c-2.666,0-5.334,0-8,0c-2.848-0.902-13.672-4.712-16-1c-1.175,1.527-0.919,3.418-1.5,4.5 c-0.59,0.401-0.841,0.387-2,0.5c-2.2-2.122-7.899,1.788-10,1c-1.471-0.552-1.547-1.891-4.5-2c0,0.333,0,0.667,0,1 c0.376,0.536,0.301,0.473,0.5,1.5c-1.024,0.356-2.337,0.497-4,0.5c-0.573-0.728-1.001-1.1-1.5-2c-3.663,2.891-16.4,7.378-24,5 c-1.621-0.507-1.684-2.654-4.5-2c-0.333,0.333-0.667,0.667-1,1c-4.166-0.167-8.334-0.333-12.5-0.5c-1.505,0.609-5.567,3.475-9,2.5 c-0.5-0.5-1-1-1.5-1.5c-2.5-0.167-5-0.333-7.5-0.5c-0.5-0.5-1-1-1.5-1.5c-2.686-1.046-5.182-0.016-7.5-1 c-1.642-0.697-2.621-2.479-4.5-3c-4.166-0.167-8.334-0.333-12.5-0.5c-0.951-0.283-1.863-1.735-2.5-2c-2.833,0-5.667,0-8.5,0 c-1.544,1.963-6.576,5.229-9,6c-5-0.167-10-0.333-15-0.5c-0.333,0.5-0.667,1-1,1.5c-5.854,2.65-14.461-3.294-18-5 c-2.541-1.225-3.66,1.546-6,1c-3.339-0.778-7.41-3.668-11.5-4c-3.641,5.078-8.567,0.247-13.5-0.5c-4.897-0.742-8.296,4.77-14,2.5 c-2.632-1.048-6.404-4.41-11.5-3c-3.154,0.873-6.272,4.116-9.5,5c-2.915,0.798-5.877-1.014-8-1.5c-5.647-1.293-8.433,2.647-13,1.5 c-2.042-0.513-3.28-2.318-5-3c-2.586-1.025-4.607-0.723-7-2c-0.667-0.667-1.333-1.333-2-2c-4,0-8,0-12,0 c-0.788-0.266-1.711-1.735-2.5-2c-2.288-0.769-15.792-0.718-17.5,0c-1.283,0.539-3.721,2.519-5.5,3c-2.606,0.705-3.513-0.84-6-1 c-0.985,1.586-2.277,2.684-3.5,4c-5.542,0.053-10.706-0.618-15-1c-1.055,1.718-1.689,2.406-4.5,2.5c-1.013-1.06-1.471-1.325-3.5-1.5 c-0.986,1.424-1.506,1.507-4,1.5c-1.993-1.967-3.643-0.51-7-1.5c-1.853-0.546-7.212-4.996-10-4c-0.654,0.233-2.018,1.861-3,2 c-2.529,0.358-3.821-3.567-7-2c-3.888,1.916-6.714,5.653-12,6c-6.722-5.98-12.787,1.042-18,2C-1,580.968-1,92.832-1,80z"
              />
            </svg>
          </div>

          {/* --- LOWER CONTENT --- */}
          <section className="pt-24 pb-12 relative z-30">
            <Subheading title="Who We Are" />
            <div className="mx-auto px-6 max-w-7xl grid grid-cols-2 lg:grid-cols-4 gap-y-12 divide-x-0 lg:divide-x-2 divide-slate-100 mt-12 section">
              {STATS.map((stat, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center text-center px-4"
                >
                  <span className="text-5xl font-extrabold text-slate-900 mb-2">
                    {stat.value}
                  </span>
                  <span className="text-xs font-bold text-blue-500 uppercase tracking-widest max-w-[150px]">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </section>

          <FeatureStack />

          <section className="py-24">
            <Subheading title="Events" />
            <div className="mx-auto w-full section px-6 max-w-7xl flex flex-col sm:items-end justify-between gap-4 mb-12">
              <a
                href="/events"
                className="text-blue-600 font-bold hover:text-blue-800 transition-colors flex items-center gap-1 pb-2"
              >
                See Full Calendar <span aria-hidden="true">&rarr;</span>
              </a>
              <EventList events={EVENTS} />
            </div>
          </section>

          <PreFooterCTA />
        </div>
      </div>
    </main>
  );
}
