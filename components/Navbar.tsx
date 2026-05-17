// components/Navbar.tsx
import { Menu } from 'lucide-react';
import Logo from './ui/Logo';
import NavLink from './ui/NavLink';

export default function Navbar() {
  return (
    <header className="bg-white/90 backdrop-blur-md fixed top-0 w-full z-50 border-b border-slate-100 shadow-sm h-20">
      <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
        <Logo />
        
        <nav className="hidden md:flex items-center gap-6" aria-label="Main Navigation">
          <NavLink href="/about">About</NavLink>
          <NavLink href="/admissions">Admissions</NavLink>
          <NavLink href="/academics">Academics</NavLink> {/* Set to "/" just to test the active state on the homepage */}
          <NavLink href="/events">Events</NavLink>
          <NavLink href="/contact">Contact</NavLink>
        </nav>
        
        <button className="md:hidden text-[#0066FF]" aria-label="Open Menu">
          <Menu className="w-8 h-8" />
        </button>
      </div>
    </header>
  );
}