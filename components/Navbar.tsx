"use client";
import { useState } from 'react';
// Assuming you are using an icon library like lucide-react
import { Menu, X } from 'lucide-react'; 
import NavLink from './ui/NavLink';
import Logo from './ui/Logo';
export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    // Note: I changed z-500 to z-[500] because Tailwind requires brackets for arbitrary values above 50!
    <header className="bg-white/90 backdrop-blur-md fixed top-0 w-full z-[500] border-b border-slate-100 shadow-sm">
      
      {/* Top Bar (Always visible) */}
      <div className="mx-auto px-6 h-20 flex items-center justify-between">
        <Logo />
        
        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6" aria-label="Main Navigation">
          <NavLink href="/about">About</NavLink>
          <NavLink href="/admissions">Admissions</NavLink>
          <NavLink href="/events">Events</NavLink>
          <NavLink href="/contact">Contact</NavLink>
        </nav>
        
        {/* Mobile Hamburger/Close Button */}
        <button 
          className="md:hidden text-[#0066FF] p-2 -mr-2" 
          aria-label={isMobileMenuOpen ? "Close Menu" : "Open Menu"}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <nav 
          className="md:hidden bg-white border-t border-slate-100 flex flex-col px-6 py-4 gap-4 shadow-lg pb-8"
          aria-label="Mobile Navigation"
        >
          {/* Make sure your NavLink component can accept an onClick handler,
            so the menu closes when a user clicks a link!
          */}
          <NavLink href="/about" onClick={() => setIsMobileMenuOpen(false)}>About</NavLink>
          <NavLink href="/admissions" onClick={() => setIsMobileMenuOpen(false)}>Admissions</NavLink>
          <NavLink href="/events" onClick={() => setIsMobileMenuOpen(false)}>Events</NavLink>
          <NavLink href="/contact" onClick={() => setIsMobileMenuOpen(false)}>Contact</NavLink>
        </nav>
      )}
    </header>
  );
}