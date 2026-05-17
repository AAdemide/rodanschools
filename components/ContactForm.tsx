'use client';

export default function ContactForm() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle your form submission logic here
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6 w-full">
      <div className="grid gap-2">
        <label htmlFor="name" className="font-bold text-sm text-white">Name</label>
        <input 
          id="name"
          type="text" 
          placeholder="Your Full Name" 
          required
          className="w-full bg-white/5 border border-white/30 rounded-lg px-4 py-3 text-white placeholder:text-white/50 focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition-all" 
        />
      </div>
      <div className="grid gap-2">
        <label htmlFor="email" className="font-bold text-sm text-white">Email</label>
        <input 
          id="email"
          type="email" 
          placeholder="your@email.com" 
          required
          className="w-full bg-white/5 border border-white/30 rounded-lg px-4 py-3 text-white placeholder:text-white/50 focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition-all" 
        />
      </div>
      <button 
        type="submit" 
        className="w-full bg-white text-primary-container font-bold py-4 rounded-lg hover:bg-slate-50 transition-all shadow-lg mt-2 font-display"
      >
        Send Message
      </button>
    </form>
  );
}