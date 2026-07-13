import Link from "next/link";
import {
  Quote,
  Check,
  Infinity,
  Users,
  TrendingUp,
  Target,
  Eye,
  Baby,
  BookOpen,
  GraduationCap,
} from "lucide-react";

import SchoolCard from "@/components/SchoolCard";
import Subheading from "@/components/ui/Subheading";
import PreFooterCTA from "@/components/PreFooterCTA";

export default function About() {
  return (
    <main className="flex-grow">
      {/* Hero Section */}
      <section className="relative w-full h-[600px] flex items-center justify-center overflow-hidden">
        {/* Background Image Layer */}
        <div className="absolute inset-0 z-0">
          <img
            alt="Welcoming school entrance and faculty"
            className="w-full h-full object-cover object-center"
            src="building.png"
          />
          {/* Added a subtle dark gradient overlay to improve contrast and make the blue card pop */}
          <div className="absolute inset-0 bg-black/20 bg-gradient-to-t from-black/40 to-transparent"></div>
        </div>

        {/* Foreground Content Layer */}
        {/* FIXED: Changed z-[-10] to z-10 so the text is actually selectable and sitting on top */}
        <div className="relative z-10 w-full max-w-7xl px-6 mx-auto">
          {/* UPDATED: Blue background, white text, premium shadow pop */}
          <div className="bg-primary/95 backdrop-blur-md rounded-2xl shadow-[0_20px_50px_-15px_rgba(0,102,255,0.4)] border border-primary-container w-full max-w-4xl mx-auto text-center py-14 px-8">
            <h1 className="font-h1 text-h1 text-white mb-6">
              Our Story, Our Community.
            </h1>
            <p className="font-body-lg text-body-lg text-white">
              More than just a school. We are a family dedicated to raising the
              next generation of leaders, thinkers, and creators.
            </p>
          </div>
        </div>
      </section>

      {/* The History / Founder's Message */}
      <section className="py-24 bg-surface">
        <Subheading title="Words From Our Founder" />

        <div className="mx-auto px-6 max-w-7xl mt-12">
          <div className="gap-xl items-center flex flex-col max-w-7xl mx-auto">
            
            {/* PORTRAIT WITH SHARP METALLIC GOLD FRAME */}
            <div 
              className="relative group mb-lg w-fit mx-auto"
              style={{ "--portrait-size": "clamp(280px, 35vw, 500px)" } as React.CSSProperties}
            >
              {/* Soft Gold Aura */}
              <div className="absolute -inset-8 bg-[#D4AF37] rounded-full blur-2xl opacity-15 transform transition-transform group-hover:scale-110 duration-500"></div>
              
              {/* Sharp Metallic Gold Frame */}
              <div className="absolute -inset-1.5 bg-gradient-to-tr from-[#BF953F] via-[#FCF6BA] to-[#B38728] rounded-full shadow-2xl transform transition-transform group-hover:scale-105 duration-500"></div>
              
              {/* The Portrait with crisp white matting */}
              <img
                alt="Founder portrait"
                className="relative z-10 w-[var(--portrait-size)] aspect-square rounded-full object-contain bg-white border-[6px] border-white mx-auto shrink-0"
                src="proprietress.png"
              />
            </div>
            
            {/* HEARTFELT MESSAGE & BIO */}
            <div className="flex flex-col items-center text-center relative max-w-5xl mx-auto">
              <h2 className="font-h1 text-[40px] md:text-[48px] leading-tight text-primary italic mb-md">
                A Legacy of Learning.
              </h2>
              
              <div className="relative px-8 md:px-16 mt-4">
                {/* Top background quote icon */}
                <Quote className="text-primary/20 w-16 h-16 absolute -left-2 -top-6 fill-current rotate-180" />

                <div className="relative z-10 space-y-6">
                  <p className="font-body-lg text-[20px] md:text-[24px] text-on-surface-variant leading-relaxed font-light italic">
                    When I opened the doors of Rodan International Schools in 1999, I had one simple dream in my heart, and that was to focus entirely on the child. We wanted to build a place that felt like a true extension of the home, a place where children are loved, understood, and given the space to truly thrive.
                  </p>
                  <p className="font-body-lg text-[20px] md:text-[24px] text-on-surface-variant leading-relaxed font-light italic">
                    It fills me with so much joy and gratitude to see families trust us enough to start their journey in our creche and stay with us all the way to their senior high graduation. We deeply believe that applied knowledge is power. Our children are the light of the world, and we are dedicated to helping them shine their absolute brightest in the midst of any darkness.
                  </p>
                </div>

                {/* Bottom background quote icon */}
                <Quote className="text-primary/20 w-16 h-16 absolute -right-2 -bottom-6 fill-current" />
              </div>

              {/* Founder Sign-off & Credentials */}
              <div className="mt-12 flex flex-col items-center">
                <h3 className="font-h3 text-2xl text-primary font-bold">
                  Mrs. Margaret Onome Ebilayefa Akinsefunmi
                </h3>
                <p className="text-on-surface-variant font-medium mt-2">
                  Founder, Educational Psychologist, and Mother
                </p>
                <div className="text-sm text-on-surface-variant/80 mt-3 max-w-2xl leading-relaxed space-y-1">
                  <p>
                    M.Ed & B.Ed (UNILAG) • Cert. Montessori Education (UI) • Fellow, NCF & CICOCEMA • Vice Chairperson, Eti-Osa NAPPS
                  </p>
                  <p className="italic text-primary/80">
                    Happily married to Engineer Amos Akinsefunmi and blessed with three beautiful children.
                  </p>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </section>

      {/* The Educational Journey */}
      <section className="py-24">
        <Subheading title="The Educational Journey" />

        <div className="mx-auto px-6 max-w-7xl mt-16 flex flex-col gap-[120px]">
          {/* Nursery Section */}
          <div className="grid md:grid-cols-2 gap-xl items-center">
            <SchoolCard
              title="Early Years"
              image="nursery_art02.jpeg"
              Icon={Baby}
              theme="bg-primary-container text-on-primary"
              blobTheme="bg-primary-fixed"
              badgePosition="right"
            />
            <div className="flex flex-col gap-md">
              <h3 className="font-h2 text-h2 text-primary">
                Nursery: Discovering the World
              </h3>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                We build a love for learning through structured, play-based
                discovery. Following national Early Childhood Care and Education
                (ECCE) guidelines, our educators focus on cognitive development,
                social skills, and foundational literacy in a safe, nurturing
                environment.
              </p>
              <ul className="flex flex-col gap-sm mt-sm">
                {[
                  "ECCE-aligned play-based learning modules.",
                  "Focus on motor skills, phonics, and early numeracy.",
                  "Low student-to-teacher ratio for maximum personal care.",
                ].map((text, i) => (
                  <li key={i} className="flex items-start gap-sm">
                    <div className="mt-1 w-6 h-6 rounded-full bg-primary-fixed-dim flex items-center justify-center text-primary-container shrink-0">
                      <Check className="w-4 h-4" />
                    </div>
                    <span className="font-body-md text-body-md text-on-surface-variant">
                      {text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Primary Section */}
          <div className="grid md:grid-cols-2 gap-xl items-center">
            <SchoolCard
              title="Foundational"
              image="guitar.jpeg"
              Icon={BookOpen}
              theme="bg-secondary-container text-on-secondary-container"
              blobTheme="bg-secondary-fixed"
              badgePosition="left"
              className="md:order-2"
            />
            <div className="flex flex-col gap-md md:order-1">
              <h3 className="font-h2 text-h2 text-secondary-container">
                Primary: Building the Core
              </h3>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                As curiosity grows, so does our curriculum. We deliver the
                complete Universal Basic Education (UBE) standard, introducing
                core academic subjects alongside creative arts to build strong
                study habits and critical thinking.
              </p>
              <ul className="flex flex-col gap-sm mt-sm">
                {[
                  "Comprehensive instruction in Mathematics, English, and Basic Sciences.",
                  "Introduction to pre-vocational studies and national values.",
                  "Continuous assessment to track and support individual progress.",
                ].map((text, i) => (
                  <li key={i} className="flex items-start gap-sm">
                    <div className="mt-1 w-6 h-6 rounded-full bg-secondary-fixed-dim flex items-center justify-center text-secondary shrink-0">
                      <Check className="w-4 h-4" />
                    </div>
                    <span className="font-body-md text-body-md text-on-surface-variant">
                      {text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Secondary Section */}
          <div className="grid md:grid-cols-2 gap-xl items-center">
            <SchoolCard
              title="Advanced"
              image="sports04.jpeg"
              Icon={GraduationCap}
              theme="bg-tertiary-container text-on-tertiary"
              blobTheme="bg-tertiary-fixed"
              badgePosition="right"
            />
            <div className="flex flex-col gap-md">
              <h3 className="font-h2 text-h2 text-tertiary">
                Secondary: Preparing for the Future
              </h3>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                We prepare young adults for higher education and beyond. With a
                strict focus on academic rigor, our secondary students are
                comprehensively prepped for their BECE, WAEC, NECO, and JAMB
                examinations, graduating ready to tackle the world.
              </p>
              <ul className="flex flex-col gap-sm mt-sm">
                {[
                  "Intensive preparation for all national and regional board exams.",
                  "Science, Commercial, and Arts tracking for SSS students.",
                  "Leadership, mentorship, and dedicated university guidance.",
                ].map((text, i) => (
                  <li key={i} className="flex items-start gap-sm">
                    <div className="mt-1 w-6 h-6 rounded-full bg-tertiary-fixed-dim flex items-center justify-center text-tertiary-container shrink-0">
                      <Check className="w-4 h-4" />
                    </div>
                    <span className="font-body-md text-body-md text-on-surface-variant">
                      {text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Our Roots & Values */}
      <section className="py-24 bg-surface-bright relative overflow-hidden">
        {/* Subtle background glow to add depth without boxes */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-[800px] bg-gradient-to-b from-primary-fixed/20 to-transparent blur-3xl -z-10 rounded-full pointer-events-none"></div>

        <Subheading title="Our Roots & Values" />

        <div className="mx-auto px-6 max-w-7xl mt-20">
          {/* Values Progression (Connected via lines and text) */}
          <div className="relative flex flex-col md:flex-row items-start justify-between gap-12 md:gap-0 lg:gap-4">
            {/* Desktop Connecting Line */}
            <div className="hidden md:block absolute top-10 left-[15%] right-[15%] h-[2px] bg-gradient-to-r from-tertiary-fixed-dim via-primary-fixed-dim to-secondary-fixed-dim z-0"></div>

            {/* Step 1 */}
            <div className="relative z-10 flex flex-col items-center text-center flex-1 px-4 lg:px-8">
              <div className="w-20 h-20 rounded-full bg-surface-container-lowest flex items-center justify-center shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-outline-variant/20 mb-6 transition-transform hover:-translate-y-1">
                <Infinity className="w-8 h-8 text-tertiary" />
              </div>
              <h3 className="font-h3 text-[28px] font-bold text-on-surface mb-3">
                Continuity
              </h3>
              <p className="font-body-md lg:font-body-lg text-on-surface-variant leading-relaxed">
                A seamless, stress-free educational path with no gaps from early
                childhood to graduation.
              </p>
            </div>

            {/* Text Connector 1 (Desktop) */}
            <div className="hidden md:flex relative z-10 bg-surface-bright px-3 lg:px-6 text-[11px] font-label-bold uppercase tracking-[0.2em] text-outline mt-8">
              Fosters
            </div>

            {/* Step 2 */}
            <div className="relative z-10 flex flex-col items-center text-center flex-1 px-4 lg:px-8">
              <div className="w-20 h-20 rounded-full bg-surface-container-lowest flex items-center justify-center shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-outline-variant/20 mb-6 transition-transform hover:-translate-y-1">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-h3 text-[28px] font-bold text-on-surface mb-3">
                Community
              </h3>
              <p className="font-body-md lg:font-body-lg text-on-surface-variant leading-relaxed">
                A close-knit family environment where every student is deeply
                known, valued, and supported.
              </p>
            </div>

            {/* Text Connector 2 (Desktop) */}
            <div className="hidden md:flex relative z-10 bg-surface-bright px-3 lg:px-6 text-[11px] font-label-bold uppercase tracking-[0.2em] text-outline mt-8">
              Drives
            </div>

            {/* Step 3 */}
            <div className="relative z-10 flex flex-col items-center text-center flex-1 px-4 lg:px-8">
              <div className="w-20 h-20 rounded-full bg-surface-container-lowest flex items-center justify-center shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-outline-variant/20 mb-6 transition-transform hover:-translate-y-1">
                <TrendingUp className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="font-h3 text-[28px] font-bold text-on-surface mb-3">
                Excellence
              </h3>
              <p className="font-body-md lg:font-body-lg text-on-surface-variant leading-relaxed">
                Expecting the best and providing the unwavering support needed
                to achieve it at every level.
              </p>
            </div>
          </div>

          {/* The Bridge Connecting Values to Mission/Vision */}
          <div className="mt-20 md:mt-24 max-w-3xl mx-auto text-center flex flex-col items-center">
            {/* Visual drop line */}
            <div className="w-px h-16 bg-gradient-to-b from-outline-variant/60 to-transparent mb-8"></div>

            {/* Punchy Kicker */}
            <h4 className="font-label-bold text-label-bold uppercase tracking-[0.2em] text-outline mb-6">
              The Engine Behind Our Actions
            </h4>

            {/* Color-coded, highly parseable text */}
            <p className="font-h3 text-[24px] md:text-[32px] text-on-surface leading-snug tracking-tight">
              Stable <span className="text-tertiary">continuity</span>, a
              supportive <span className="text-primary">community</span>, and a
              standard of <span className="text-secondary">excellence</span>{" "}
              work together to fuel our ultimate purpose.
            </p>

            {/* Visual drop line connecting to the bottom */}
            <div className="w-px h-16 bg-gradient-to-t from-outline-variant/60 to-transparent mt-8"></div>
          </div>

          {/* Editorial Mission & Vision */}
          <div className="mt-12 grid md:grid-cols-2 gap-16 md:gap-24 items-start relative">
            {/* Mission */}
            <div className="relative flex flex-col gap-6 pt-10 md:pt-0 border-t-2 border-secondary-fixed/50 md:mt-12 group">
              <div className="absolute -top-6 left-0 bg-surface-bright pr-6 flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-secondary-fixed flex items-center justify-center transition-transform group-hover:rotate-12">
                  <Target className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="font-label-bold uppercase tracking-widest text-secondary font-bold">
                  Our Mission
                </h3>
              </div>

              <p className="font-h2 text-[32px] md:text-[36px] leading-[1.3] text-on-surface tracking-tight mt-6">
                To nurture confident, well-rounded students by providing a
                stable, continuous, and enriching environment.
              </p>
              <p className="font-body-lg text-on-surface-variant leading-relaxed">
                From early childhood through graduation, we remove the friction
                of transition. We believe that by creating a unified academic
                journey, students are free to focus purely on their growth,
                discovery, and limitless potential.
              </p>
            </div>

            {/* Vision */}
            <div className="relative flex flex-col gap-6 pt-10 md:pt-0 border-t-2 border-primary-fixed/50 md:mt-12 group">
              <div className="absolute -top-6 left-0 bg-surface-bright pr-6 flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary-fixed flex items-center justify-center transition-transform group-hover:rotate-12">
                  <Eye className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-label-bold uppercase tracking-widest text-primary font-bold">
                  Our Vision
                </h3>
              </div>

              <p className="font-h2 text-[32px] md:text-[36px] leading-[1.3] text-on-surface tracking-tight mt-6">
                To be the community's most trusted partner, empowering every
                student to reach their full potential.
              </p>
              <p className="font-body-lg text-on-surface-variant leading-relaxed">
                We envision a future where our graduates step into the world
                with absolute confidence. Equipped with deep knowledge,
                emotional intelligence, and strong character, they are ready to
                lead and innovate in tomorrow's world.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Proprietress Mentorship */}
      <section className="py-24 bg-surface">
        <Subheading title="Other Services" />

        <div className="mx-auto px-6 max-w-7xl mt-12">
          {/* UPDATED: Premium, deep-blue banner look with glowing blurs and big CTA */}
          <div className="bg-gradient-to-br from-[#003fa4] to-[#001849] rounded-3xl p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-10 relative overflow-hidden shadow-2xl">
            {/* Glowing orbs for background texture */}
            <div className="absolute -right-32 -top-32 w-96 h-96 bg-primary-container rounded-full blur-[100px] opacity-60 pointer-events-none"></div>
            <div className="absolute -left-20 -bottom-20 w-64 h-64 bg-secondary-fixed/30 rounded-full blur-[80px] opacity-60 pointer-events-none"></div>

            <div className="max-w-2xl relative z-10 text-center md:text-left">
              <h3 className="font-h2 text-[36px] font-extrabold text-white mb-4">
                Exclusive Mentorship & Consulting
              </h3>
              <p className="font-body-lg text-body-lg text-primary-fixed opacity-90 leading-relaxed">
                Our proprietress offers exclusive mentorship and consulting for
                school owners and educators, sharing decades of experience in
                building high-standard educational institutions.
              </p>
            </div>

            <div className="relative z-10 shrink-0 w-full md:w-auto flex justify-center">
              <Link
                href="/contact?type=service#booking-form"
                className="inline-flex items-center justify-center bg-secondary-container text-on-secondary-container font-label-bold text-[16px] px-8 py-4 rounded-xl active:scale-95 transition-all shadow-lg hover:shadow-[0_10px_30px_rgba(254,208,0,0.3)] hover:-translate-y-1"
              >
                Book Services
              </Link>
            </div>
          </div>
        </div>
      </section>
      <PreFooterCTA />
    </main>
  );
}
