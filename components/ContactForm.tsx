"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function ContactForm({ tab }: { tab: "contact" | "book" }) {
  // 1. Define the state object for the form fields
// Define the rules for your state
  type FormDataState = {
    name: string;
    email: string;
    grade: string;
    message: string;
    service: "contact" | "book"; 
  };

  // Pass the rules into useState, then provide the default values
  const [formData, setFormData] = useState<FormDataState>({
    name: "",
    email: "",
    grade: "",
    message: "",
    service: "contact", 
  });
const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  // 2. Generic change handler for all inputs
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // 3. Handle submission using the controlled state
const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    // 1. Generate the Google Calendar link
    const eventTitle = "School Visit: Rodan International Schools";
    const eventDetails = "We are so excited to show you our campus! (Please note: The exact time will be confirmed by our admin team via email).";
    const location = "Rodan International Schools";
    const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(eventTitle)}&details=${encodeURIComponent(eventDetails)}&location=${encodeURIComponent(location)}`;

    // 2. Create a clean, human-readable payload
    const readablePayload: Record<string, string> = {
      _subject: tab === "contact" 
        ? `New General Inquiry from ${formData.name}` 
        : `New Booking Request from ${formData.name}`,
      _replyto: formData.email, // Formspree uses this so you can reply directly to the sender
      "Parent Name": formData.name,
      "Email Address": formData.email,
      "Inquiry Type": tab === "contact" ? "General Contact" : "Service Booking",
    };

    // Add specific fields based on the active tab
    if (tab === "contact") {
      readablePayload["Grade Level"] = formData.grade;
    } else {
      readablePayload["Requested Service"] = formData.service;
      // Inject the Google Calendar link directly into the email payload for bookings
      readablePayload["Add to Google Calendar"] = googleCalendarUrl;
    }

    // Add the message last so it sits at the bottom of the email
    readablePayload["Message"] = formData.message;

    try {
      // 3. Send the payload to Formspree
      const response = await fetch("https://formspree.io/f/mjgnvkgo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(readablePayload)
      });

      if (response.ok) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Error submitting form", error);
      setStatus("error");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-md w-full">
      <div>
        <label
          htmlFor="name"
          className="block font-label-bold text-label-bold text-on-primary mb-xs"
        >
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Full Name"
          required
          className="w-full bg-white/5 border border-white/30 rounded-lg px-md py-sm text-on-primary placeholder:text-white/50 focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition-all"
        />
      </div>

      <div>
        <label
          htmlFor="email"
          className="block font-label-bold text-label-bold text-on-primary mb-xs"
        >
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="your@email.com"
          required
          className="w-full bg-white/5 border border-white/30 rounded-lg px-md py-sm text-on-primary placeholder:text-white/50 focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition-all"
        />
      </div>

      <div>
        {tab === "contact" ? (
          <>
            <label
              htmlFor="grade"
              className="block font-label-bold text-label-bold text-on-primary mb-xs"
            >
              Grade Level
            </label>
            <div className="relative">
              <select
                id="grade"
                name="grade"
                value={formData.grade}
                onChange={handleChange}
                required
                className="w-full bg-white/5 border border-white/30 rounded-lg px-md py-sm text-on-primary focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition-all appearance-none"
              >
                {/* Added bg-white to options so they are readable when opened */}
                <option value="" disabled className="text-on-surface bg-white">
                  Select Grade
                </option>
                <option value="nursery" className="text-on-surface bg-white">
                  Nursery
                </option>
                <option value="primary" className="text-on-surface bg-white">
                  Primary
                </option>
                <option value="secondary" className="text-on-surface bg-white">
                  Secondary
                </option>
              </select>
              {/* Custom Lucide Arrow */}
              <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/70 pointer-events-none" />
            </div>
          </>
        ) : (
          <>
            <label
              htmlFor="services"
              className="block font-label-bold text-label-bold text-on-primary mb-xs"
            >
              Select Service
            </label>
            <div className="relative">
              <select
                id="services"
                name="services"
                value={formData.service}
                onChange={handleChange}
                required
                className="w-full bg-white/5 border border-white/30 rounded-lg px-md py-sm text-on-primary focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition-all appearance-none"
              >
                {/* Added bg-white to options so they are readable when opened */}
                <option value="" disabled className="text-on-surface bg-white">
                  Select Service
                </option>
                <option value="nursery" className="text-on-surface bg-white">
                  Mentoring & Consulting
                </option>
              </select>
              {/* Custom Lucide Arrow */}
              <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/70 pointer-events-none" />
            </div>
          </>
        )}
      </div>

      <div>
        <label
          htmlFor="message"
          className="block font-label-bold text-label-bold text-on-primary mb-xs"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={3}
          placeholder="Write your message here..."
          required
          className="w-full bg-white/5 border border-white/30 rounded-lg px-md py-sm text-on-primary placeholder:text-white/50 focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition-all resize-none"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-white text-[#0066FF] font-label-bold text-label-bold py-sm rounded-lg hover:bg-surface transition-all shadow-lg mt-2"
      >
        Send Message
      </button>
    </form>
  );
}
