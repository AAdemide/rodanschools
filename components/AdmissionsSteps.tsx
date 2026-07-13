"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";
import {
  MessageSquareText,
  Eye,
  CheckCircle,
  Calendar,
  PhoneCall,
} from "lucide-react";
import Link from "next/link";

export default function AdmissionsSteps() {
  const { ref, isVisible } = useScrollReveal(0.2);

  const baseCardStyle =
    "bg-surface-container-lowest p-lg rounded-xl ambient-shadow ambient-shadow-hover transition-all duration-700 ease-out relative overflow-hidden group flex flex-col gap-md rounded-l-none transform";

  // Tailwind classes for the reveal state
  const revealClass = isVisible
    ? "opacity-100 translate-y-0"
    : "opacity-0 translate-y-12";

  return (
    <section className="py-xl px-gutter bg-surface">
      <div className="max-w-container-max mx-auto">
        <div className="text-center mb-xl">
          <h2 className="font-h2 text-h2 text-on-background mb-sm">
            Your Journey Starts Here
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
            A personal, in-person admissions process designed to help us get to
            know your child and your family.
          </p>
        </div>

        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-3 gap-md items-stretch">
          {/* Step 1: Primary Theme */}
          <div
            className={`${baseCardStyle} border-l-8 border-primary-container ${revealClass}`}
            style={{ transitionDelay: "0ms" }}
          >
            <div className="flex items-start justify-between">
              <div className="w-16 h-16 bg-primary-fixed text-primary-container rounded-2xl flex items-center justify-center font-h1 text-h2 shadow-sm">
                1
              </div>
              <MessageSquareText className="w-auto h-full stroke-primary opacity-30 group-hover:opacity-70 transition-opacity duration-300" />
            </div>
            <div>
              <h3 className="font-h3 text-h3 text-on-background mb-sm">
                Get in Touch
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Reach out to our admissions team to start the conversation.
                We'll answer your initial questions and share more about what
                makes Rodan special.
              </p>
            </div>
            
            {/* Themed Primary Button */}
            <button className="mt-auto flex w-full items-center justify-center gap-1.5 px-4 py-3 bg-primary-container text-on-primary text-xs font-label-bold rounded-lg hover:bg-primary transition-colors shadow-md active:scale-95">
              <PhoneCall className="w-4 h-4" /> Call Us
            </button>
          </div>

          {/* Step 2: Secondary Theme */}
          <div
            className={`${baseCardStyle} border-l-8 border-secondary-container ${revealClass}`}
            style={{ transitionDelay: "150ms" }}
          >
            <div className="flex items-start justify-between">
              <div className="w-16 h-16 bg-secondary-fixed text-on-secondary-container rounded-2xl flex items-center justify-center font-h1 text-h2 shadow-sm">
                2
              </div>
              <Eye className="w-auto h-full stroke-secondary-container opacity-30 group-hover:opacity-70 transition-opacity duration-300" />
            </div>
            <div>
              <h3 className="font-h3 text-h3 text-on-background mb-sm">
                Experience Rodan
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Schedule a personal tour of our campus. See our classrooms in
                action, meet our faculty, and feel the energy of our learning
                community firsthand.
              </p>
            </div>
            
            {/* Themed Secondary Button */}
            <a 
              href="#book-visit-form" 
              className="mt-auto flex w-full items-center justify-center gap-1.5 px-4 py-3 bg-secondary-container text-on-secondary-container text-xs font-label-bold rounded-lg hover:bg-secondary hover:text-on-secondary transition-colors shadow-md active:scale-95"
            >
              <Calendar className="w-4 h-4" />
              Book Appointment
            </a>
          </div>

          {/* Step 3: Tertiary Theme */}
          <div
            className={`${baseCardStyle} border-l-8 border-tertiary-container ${revealClass}`}
            style={{ transitionDelay: "300ms" }}
          >
            <div className="flex items-start justify-between">
              <div className="w-16 h-16 bg-tertiary-container duration-300 text-on-tertiary-container rounded-2xl flex items-center justify-center font-h1 text-h2 shadow-sm">
                3
              </div>
              <CheckCircle className="w-auto h-full stroke-tertiary-container opacity-30 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <div>
              <h3 className="font-h3 text-h3 text-on-background mb-sm">
                Finalize Enrollment
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant">
                After your visit, we'll guide you through the final paperwork
                and in-person registration to officially join our family.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}