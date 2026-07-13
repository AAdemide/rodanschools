import {
  MapPin,
  Phone,
  Mail,
  ArrowDownRight,
  ExternalLink,
} from "lucide-react";
import BookVisitForm from "@/components/BookVisitForm";

export default function Contact() {
  return (
    <main className="flex-grow flex flex-col relative overflow-hidden bg-surface">
      {/* 1. CREATIVE BACKGROUND: Dot Grid + Massive Ambient Glows */}
      <div
        className="absolute inset-0 z-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(var(--color-outline-variant) 2px, transparent 2px)",
          backgroundSize: "40px 40px",
        }}
      ></div>
      <div className="absolute top-0 left-0 w-full h-[800px] bg-gradient-to-b from-primary-fixed/60 to-transparent -z-10"></div>
      <div className="absolute -top-40 -right-20 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] -z-10 pointer-events-none"></div>
      <div className="absolute top-80 -left-20 w-[500px] h-[500px] bg-secondary-fixed/30 rounded-full blur-[120px] -z-10 pointer-events-none"></div>

      {/* 2. HERO SECTION */}
      <section className="w-full pt-24 md:pt-32 pb-12 px-gutter relative z-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-end gap-8">
          <div className="max-w-2xl">
            <h1 className="font-h1 text-[56px] md:text-[72px] font-extrabold text-on-surface mb-6 tracking-tight leading-[1.1]">
              Let's start the <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-container">
                conversation.
              </span>
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
              Whether you're ready to enroll, want to schedule a tour, or just
              have a few questions, our doors (and inboxes) are always open.
            </p>
          </div>

          <div className="hidden md:flex items-center justify-center w-24 h-24 rounded-full bg-primary-container text-on-primary animate-[bounce_3s_infinite]">
            <ArrowDownRight className="w-10 h-10" />
          </div>
        </div>
      </section>

      {/* 3. THE FLOATING MAP SECTION */}
      <section className="w-full px-gutter pb-20 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* 
            Wrapped in an anchor tag to open Google Maps natively.
            The group class handles the hover states for the inner overlay.
          */}
          <a
            href="https://www.google.com/maps/search/?api=1&query=London"
            target="_blank"
            rel="noopener noreferrer"
            className="block relative w-full h-[350px] md:h-[450px] rounded-[2.5rem] bg-surface-container-lowest p-3 md:p-4 shadow-[0_20px_60px_-15px_rgba(0,102,255,0.15)] transform md:-rotate-1 hover:rotate-0 transition-transform duration-700 ease-out z-20 group cursor-pointer"
          >
            <div className="w-full h-full rounded-[2rem] overflow-hidden relative border border-outline-variant/30">
              {/* Pointer-events-none ensures the iframe doesn't intercept clicks meant for the anchor tag */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15857.132977871033!2d3.5650799153570563!3d6.485770016098817!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bfa0b0aa3ffff%3A0xe477edbb8bc04a6f!2sRodan%20International%20Schools!5e0!3m2!1sen!2sca!4v1783895002975!5m2!1sen!2sca"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "grayscale(0.2) contrast(1.1)" }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="transition-all duration-700 group-hover:scale-105 pointer-events-none"
              ></iframe>

              {/* Hover Overlay: Darkens the map slightly and brings up the button */}
              <div className="absolute inset-0 bg-primary-fixed/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="bg-white text-primary px-6 py-3 rounded-full font-label-bold shadow-xl flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                  <ExternalLink className="w-5 h-5" /> Open in Maps
                </div>
              </div>
            </div>
          </a>
        </div>
      </section>

      {/* 4. VIBRANT CONTACT CARDS & FORM SPLIT */}
      <section className="max-w-7xl mx-auto px-gutter pb-32 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-start">
          {/* Colorful Layered Contact Cards (Left - 5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-6 lg:pr-8 pt-8">
            
            {/* Primary Blue Card - Opens Google Maps in a new tab */}
            <a 
              href="https://www.google.com/maps/search/?api=1&query=16+Badore+Rd,+Ajah,+Lagos+106104,+Nigeria"
              target="_blank"
              rel="noopener noreferrer"
              className="block cursor-pointer bg-primary-container text-on-primary rounded-[2rem] p-8 shadow-lg transform transition-transform hover:-translate-y-2 hover:rotate-1 relative overflow-hidden group"
            >
              <div className="absolute -right-8 -top-8 w-32 h-32 bg-white/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
              <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center text-white mb-6">
                <MapPin className="w-7 h-7" />
              </div>
              <h3 className="font-label-bold text-[16px] mb-2 uppercase tracking-widest opacity-90">
                Visit Us
              </h3>
              <p className="font-body-lg text-[20px] leading-relaxed font-light">
                16 Badore Rd, Ajah
                <br />
                Lagos 106104, Lagos, Nigeria
              </p>
            </a>

            {/* Secondary Yellow Card - Triggers Phone Dialer */}
            <a 
              href="tel:+2348074737348"
              className="block cursor-pointer bg-secondary-container text-on-secondary-container rounded-[2rem] p-8 shadow-lg transform transition-transform hover:-translate-y-2 hover:-rotate-1 lg:ml-8 relative overflow-hidden group"
            >
              <div className="absolute -left-8 -bottom-8 w-32 h-32 bg-white/30 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
              <div className="w-14 h-14 rounded-2xl bg-white/40 backdrop-blur-md flex items-center justify-center text-on-secondary-container mb-6">
                <Phone className="w-7 h-7" />
              </div>
              <h3 className="font-label-bold text-[16px] mb-2 uppercase tracking-widest opacity-80">
                Call Us
              </h3>
              {/* Note: Changed the inner <a> to a <span> so we don't have nested anchors */}
              <span className="block font-body-lg text-[20px] leading-relaxed font-bold">
                +234 807 473 7348
              </span>
              <p className="font-body-md mt-2 opacity-80">Mon-Fri, 8am - 4pm</p>
            </a>

            {/* Tertiary Red Card - Triggers Default Email Client */}
            <a 
              href="mailto:contactus@rodanschools.com"
              className="block cursor-pointer bg-tertiary-container text-on-tertiary rounded-[2rem] p-8 shadow-lg transform transition-transform hover:-translate-y-2 hover:rotate-1 relative overflow-hidden group"
            >
              <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-white/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
              <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center text-white mb-6">
                <Mail className="w-7 h-7" />
              </div>
              <h3 className="font-label-bold text-[16px] mb-2 uppercase tracking-widest opacity-90">
                Email Us
              </h3>
              <p className="font-body-lg text-[20px] leading-relaxed font-light">
                contactus@rodanschools.com
              </p>
              <p className="font-body-md mt-2 opacity-80">
                We aim to reply quickly
              </p>
            </a>
            
          </div>

          {/* Elevated Form Pedestal (Right - 7 cols) */}
          <div className="lg:col-span-7 relative w-full mt-12 lg:mt-0">
            {/* Creative Offset Shadow/Backdrop behind the form */}
            <div className="absolute top-6 left-6 md:top-8 md:left-8 w-full h-full bg-primary-fixed rounded-3xl border-2 border-primary-fixed-dim -z-10"></div>

            <div className="relative z-10 w-full">
              {/* Injecting your exact BookVisitForm component */}
              <BookVisitForm />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
