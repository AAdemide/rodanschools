import Image from "next/image";

export default function ImageCarousel() {
  const images = [
    {
      name: "basketball02.jpeg",
      alt: "Children Playing Basketball",
    },
    {
      name: "cleaning01.jpeg",
      alt: "Students Help Clean The Environment",
    },
    {
      name: "cooking01.jpeg",
      alt: "Children Cooking With A Chef",
    },
    {
      name: "dancing02.jpeg",
      alt: "Children Dancing",
    },
    {
      name: "grad_mix.jpeg",
      alt: "Graduation Picture of Nursery And Secondary Schools",
    },
    {
      name: "nursery_art01.jpeg",
      alt: "Nursery Children Holding Up Their Artwork",
    },
    {
      name: "sports02.jpeg",
      alt: "Children And Teachers Celebrating Sports Tournament Win",
    },
    {
      name: "trad_wear02.jpeg",
      alt: "Children In Their Traditional Attire",
    },
  ];

  // We lock these in so the scroll math is perfect and doesn't glitch across devices
  const CARD_HEIGHT = 450; // Slightly shorter so it looks great on phones
  const GAP = 24; // Tailwind's gap-6 is exactly 24px

  return (
    <div className="relative h-[100svh] xl:h-[85vh] w-full overflow-hidden">
      
      {/* 
        1. Removed the absolute right-6 so it stays in its lane.
        2. Added mx-auto for mobile centering, xl:mx-0 for desktop left-alignment.
        3. Added side padding (px-4 sm:px-8) so the border radius is actually visible on mobile!
        4. Removed the heavenly mask-image fade-out.
      */}
      <div className="absolute inset-0 z-10 w-full h-[200vh] max-w-[850px] mx-auto xl:mx-0 px-4 sm:px-8 xl:px-4 py-8 overflow-hidden">
        
        <div
          className="flex flex-col gap-6 animate-scroll-y"
          style={
            {
              "--scroll-height": `-${images.length * (CARD_HEIGHT + GAP)}px`,
            } as React.CSSProperties
          }
        >
          {/* Render the images once, then a copy */}
          {[...images, ...images].map((i, k) => (
            <div
              key={k}
              className="relative w-full shrink-0 rounded-2xl md:rounded-3xl shadow-xl overflow-hidden border border-white/10"
              style={{ height: `${CARD_HEIGHT}px` }}
            >
              <Image
                src={"/" + i.name}
                alt={i.alt}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}