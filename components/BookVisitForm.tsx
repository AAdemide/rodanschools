'use client';

import { useState, useEffect } from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';

export default function BookingForm() {
  // 1. Added bookingType and unified fields to handle both variations
  const [formData, setFormData] = useState({
    bookingType: 'visit' as 'visit' | 'service',
    date: '',
    timeSlot: 'Morning' as 'Morning' | 'Afternoon',
    name: '', // Replaced parentName to serve as both Parent Name and Client Name
    email: '',
    phone: '',
    gradeLevel: '',
    serviceType: 'mentorship', // Default service
    notes: '' // Replaced specialInterests to serve as a generic textarea
  });

  useEffect(() => {
    // Check if we are in the browser before reading window to prevent SSR errors
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      if (params.get('type') === 'service') {
        setFormData(prev => ({ ...prev, bookingType: 'service' }));
      }
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleTimeSlot = (slot: 'Morning' | 'Afternoon') => {
    setFormData((prev) => ({
      ...prev,
      timeSlot: slot
    }));
  };

  const handleBookingType = (type: 'visit' | 'service') => {
    setFormData((prev) => ({
      ...prev,
      bookingType: type
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const isVisit = formData.bookingType === 'visit';

    // 1. Generate the Google Calendar link
    const eventTitle = isVisit ? "School Visit: Rodan International Schools" : "Consultation: Rodan Schools";
    const eventDetails = `Preferred Date: ${formData.date}\nTime Slot: ${formData.timeSlot}\n\n(Note: A member of our team will confirm the exact time with you shortly!)`;
    const location = "Rodan International Schools";
    
    // Convert the HTML date (YYYY-MM-DD) into a format Google Calendar likes (YYYYMMDD)
    const formattedDate = formData.date.replace(/-/g, ''); 
    const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(eventTitle)}&details=${encodeURIComponent(eventDetails)}&location=${encodeURIComponent(location)}&dates=${formattedDate}/${formattedDate}`;

    // 2. Create the clean payload for Formspree
    const readablePayload: Record<string, string> = {
      _subject: isVisit 
        ? `New Visit Request from ${formData.name}` 
        : `New Consultation Request from ${formData.name}`,
      _replyto: formData.email, 
      "Client Name": formData.name,
      "Email Address": formData.email,
      "Phone Number": formData.phone,
      "Booking Type": isVisit ? "School Visit" : "Mentorship & Consulting",
      "Requested Date": formData.date,
      "Time Slot": formData.timeSlot,
    };

    // Add specific fields based on the active tab
    if (isVisit) {
      readablePayload["Grade Level"] = formData.gradeLevel || "Not selected";
    } else {
      readablePayload["Service"] = formData.serviceType;
    }

    readablePayload["Notes"] = formData.notes || "No additional notes provided.";
    
    // Pass the raw calendar link so Formspree doesn't strip it out
    readablePayload["Add to Google Calendar"] = googleCalendarUrl; 

    try {
      // 3. Send to Formspree
      const response = await fetch("https://formspree.io/f/mjgnvkgo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(readablePayload)
      });

      if (response.ok) {
        alert("Booking request sent successfully! We will be in touch soon.");
        
        // Clear the form back to its default state
        setFormData({
          bookingType: 'visit',
          date: '',
          timeSlot: 'Morning',
          name: '',
          email: '',
          phone: '',
          gradeLevel: '',
          serviceType: 'mentorship',
          notes: ''
        });
      } else {
        alert("Oops! Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form", error);
      alert("Oops! Something went wrong. Please check your connection and try again.");
    }
  };

  const isVisit = formData.bookingType === 'visit';

  return (
    <div className="w-full max-w-2xl mx-auto bg-surface-container-lowest p-xl rounded-2xl ambient-shadow" id="booking-form">
      
      {/* Dynamic Header */}
      <h2 className="font-h2 text-h3 text-on-background mb-md">
        {isVisit ? 'Book Your Visit' : 'Book a Consultation'}
      </h2>

      {/* Booking Type Toggle */}
      <div className="flex bg-surface-container-low p-1 rounded-lg mb-lg">
        <button
          type="button"
          onClick={() => handleBookingType('visit')}
          className={`flex-1 py-2 px-4 rounded-md font-label-bold text-sm transition-all duration-200 ${
            isVisit 
              ? 'bg-surface-container-lowest text-primary-container shadow-sm' 
              : 'text-on-surface-variant hover:text-on-surface'
          }`}
        >
          School Visit
        </button>
        <button
          type="button"
          onClick={() => handleBookingType('service')}
          className={`flex-1 py-2 px-4 rounded-md font-label-bold text-sm transition-all duration-200 ${
            !isVisit 
              ? 'bg-surface-container-lowest text-primary-container shadow-sm' 
              : 'text-on-surface-variant hover:text-on-surface'
          }`}
        >
          Mentorship & Consulting
        </button>
      </div>
      
      <form className="flex flex-col gap-md" onSubmit={handleSubmit}>
        
        {/* Row 1: Date and Time Slot */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
          <div className="flex flex-col gap-xs">
            <label className="font-label-bold text-label-bold text-on-surface">Preferred Date</label>
            <div className="relative">
              <input 
                type="date" 
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg px-md py-sm text-on-surface focus:outline-none focus:border-primary-container focus:ring-1 focus:ring-primary-container transition-all appearance-none"
                required
              />
            </div>
          </div>

          <div className="flex flex-col gap-xs">
            <label className="font-label-bold text-label-bold text-on-surface">Time Slot</label>
            <div className="flex bg-surface-container-low p-1 rounded-lg">
              <button
                type="button"
                onClick={() => handleTimeSlot('Morning')}
                className={`flex-1 py-1.5 px-3 rounded-md font-label-bold text-sm transition-all duration-200 ${
                  formData.timeSlot === 'Morning' 
                    ? 'bg-surface-container-lowest text-primary-container shadow-sm' 
                    : 'text-on-surface-variant hover:text-on-surface'
                }`}
              >
                Morning
              </button>
              <button
                type="button"
                onClick={() => handleTimeSlot('Afternoon')}
                className={`flex-1 py-1.5 px-3 rounded-md font-label-bold text-sm transition-all duration-200 ${
                  formData.timeSlot === 'Afternoon' 
                    ? 'bg-surface-container-lowest text-primary-container shadow-sm' 
                    : 'text-on-surface-variant hover:text-on-surface'
                }`}
              >
                Afternoon
              </button>
            </div>
          </div>
        </div>

        {/* Row 2: Name and Email */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
          <div className="flex flex-col gap-xs">
            {/* Dynamic Label */}
            <label className="font-label-bold text-label-bold text-on-surface">
              {isVisit ? 'Parent/Guardian Name' : 'Full Name'}
            </label>
            <input 
              type="text" 
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Jane Doe"
              className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg px-md py-sm text-on-surface placeholder:text-outline focus:outline-none focus:border-primary-container focus:ring-1 focus:ring-primary-container transition-all"
              required
            />
          </div>

          <div className="flex flex-col gap-xs">
            <label className="font-label-bold text-label-bold text-on-surface">Email Address</label>
            <input 
              type="email" 
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="jane@example.com"
              className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg px-md py-sm text-on-surface placeholder:text-outline focus:outline-none focus:border-primary-container focus:ring-1 focus:ring-primary-container transition-all"
              required
            />
          </div>
        </div>

        {/* Row 3: Phone and Conditional Dropdown */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
          <div className="flex flex-col gap-xs">
            <label className="font-label-bold text-label-bold text-on-surface">Phone Number</label>
            <input 
              type="tel" 
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="(555) 123-4567"
              className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg px-md py-sm text-on-surface placeholder:text-outline focus:outline-none focus:border-primary-container focus:ring-1 focus:ring-primary-container transition-all"
              required
            />
          </div>

          <div className="flex flex-col gap-xs">
            {isVisit ? (
              <>
                <label className="font-label-bold text-label-bold text-on-surface">Child's Grade Level</label>
                <div className="relative flex items-center justify-between border border-outline-variant rounded-lg px-md py-sm">
                  <select 
                    name="gradeLevel"
                    value={formData.gradeLevel} 
                    onChange={handleChange}
                    className="w-full bg-surface-container-lowest text-on-surface focus:outline-none focus:border-primary-container focus:ring-1 focus:ring-primary-container transition-all appearance-none pr-10 bg-transparent"
                    required
                  >
                    <option value="" disabled className="text-outline">Select Grade</option>
                    <option value="nursery" className="text-on-surface">Nursery</option>
                    <option value="primary" className="text-on-surface">Primary</option>
                    <option value="secondary" className="text-on-surface">Secondary</option>
                  </select>
                  <ChevronDown className="pointer-events-none text-outline" />
                </div>
              </>
            ) : (
              <>
                <label className="font-label-bold text-label-bold text-on-surface">Service Requested</label>
                <div className="relative flex items-center justify-between border border-outline-variant rounded-lg px-md py-sm bg-surface-container-low opacity-80 cursor-not-allowed">
                  <select 
                    name="serviceType"
                    value={formData.serviceType} 
                    disabled
                    className="w-full bg-transparent text-on-surface focus:outline-none appearance-none cursor-not-allowed font-medium"
                  >
                    <option value="mentorship">Exclusive Mentorship & Consulting</option>
                  </select>
                </div>
              </>
            )}
          </div>
        </div>

        {/* Row 4: Textarea */}
        <div className="flex flex-col gap-xs">
          {/* Dynamic Label and Placeholder */}
          <label className="font-label-bold text-label-bold text-on-surface">
            {isVisit ? 'Special Interests (Optional)' : 'What would you like to discuss? (Optional)'}
          </label>
          <textarea 
            name="notes"
            value={formData.notes}
            onChange={handleChange}
            placeholder={isVisit ? "e.g., Sports, Arts, STEM, specific support needs..." : "Briefly outline your goals or specific areas you need guidance on..."}
            rows={3}
            className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg px-md py-sm text-on-surface placeholder:text-outline focus:outline-none focus:border-primary-container focus:ring-1 focus:ring-primary-container transition-all resize-none"
          ></textarea>
        </div>

        {/* Submit Button */}
        <button 
          type="submit" 
          className="mt-sm w-full bg-primary-container text-on-primary font-label-bold text-label-bold py-sm rounded-lg hover:scale-[1.02] active:scale-[0.98] transition-all shadow-[0_8px_20px_-8px_rgba(0,102,255,0.4)] hover:shadow-[0_12px_24px_-8px_rgba(0,102,255,0.6)] flex items-center justify-center gap-2"
        >
          Confirm Booking
          <ArrowRight className='h-[70%]'/>
        </button>

      </form>
    </div>
  );
}