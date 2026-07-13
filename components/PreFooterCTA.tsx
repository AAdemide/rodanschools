"use client";

import { useState } from "react";
import ContactForm from "@/components/ContactForm";
// Import your other form here, e.g.:
// import BookingForm from "@/components/BookingForm"; 

export default function PreFooterCTA() {
  // 1. Add state to track the active form
  const [activeTab, setActiveTab] = useState<"contact" | "book">("contact");

  return (
    <section
      id="contact-form"
      className="bg-primary-container text-on-primary py-lg lg:py-xl relative overflow-hidden"
    >
      {/* Background Blurred Orbs */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 max-w-[1280px]"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-secondary-fixed/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4 max-w-[1280px]"></div>

      <div className="flex flex-col justify-center lg:flex-row lg:justify-around items-center gap-lg text-left px-6">
        
        {/* Left Content: Text & Buttons */}
        <div className="flex flex-col items-start gap-sm lg:gap-md">
          <h2 className="font-h1 text-h1 text-on-primary mb-sm lg:mb-md">
            Ready to Start?
          </h2>
          <p className="font-body-lg text-body-lg text-primary-fixed opacity-90">
            Applications for the upcoming semester are now open.
            <br />
            Don't miss your chance to join Rodan Schools.
          </p>

          <div className="flex flex-wrap gap-sm mt-sm">
            <a 
              href="/admissions" 
              className="bg-white text-[#0066FF] font-label-bold text-label-bold px-md py-sm rounded-md lg:rounded-lg hover:scale-105 active:scale-95 hover:bg-surface transition-all shadow-lg flex items-center gap-xs"
            >
              Admissions Page
            </a>
          </div>
        </div>

        {/* Right Content: The Form Card Wrapper */}
        <div className="bg-white/10 backdrop-blur-md p-lg rounded-2xl border border-white/20 shadow-xl w-full max-w-[500px]">
          
          {/* Glassmorphic Toggle UI */}
          <div className="flex bg-black/20 p-1 rounded-lg mb-6">
            <button
              onClick={() => setActiveTab("contact")}
              className={`flex-1 py-2 px-4 rounded-md font-label-bold text-sm transition-all duration-200 ${
                activeTab === "contact"
                  ? "bg-white text-[#0066FF] shadow-sm" // Active state matches your primary button
                  : "text-white/70 hover:text-white"
              }`}
            >
              Send Message
            </button>
            <button
              onClick={() => setActiveTab("book")}
              className={`flex-1 py-2 px-4 rounded-md font-label-bold text-sm transition-all duration-200 ${
                activeTab === "book"
                  ? "bg-white text-[#0066FF] shadow-sm"
                  : "text-white/70 hover:text-white"
              }`}
            >
              Book a Visit
            </button>
          </div>
            <ContactForm tab={activeTab} />

        </div>
      </div>
    </section>
  );
}