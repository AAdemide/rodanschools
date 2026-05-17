import Link from 'next/link';
import Logo from './ui/Logo';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-slate-200 bg-slate-50 text-sm mt-auto">
      <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row justify-between items-center gap-6">
        
        <Logo iconSize={24} className="scale-90 transform origin-left" />
        
        <div className="text-slate-600 text-center md:text-left font-body">
          © {currentYear} Rodan School. Knowledge is Power. <span className="hidden md:inline">|</span> <br className="md:hidden" />
          123 Academic Way, Scholarly Hills, ED 54321
        </div>
        
        <nav aria-label="Footer Navigation">
          <Link 
            href="/contact" 
            className="text-slate-500 hover:text-primary-container hover:underline decoration-2 underline-offset-4 font-display font-bold transition-colors"
          >
            Contact
          </Link>
        </nav>
      </div>
    </footer>
  );
}