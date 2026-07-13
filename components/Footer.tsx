import Link from 'next/link';
import Logo from './ui/Logo';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-slate-200 bg-slate-50 text-sm mt-auto">
      <div className="mx-auto px-6 py-12 flex flex-col md:flex-row justify-between items-center gap-6">
        
        <Logo iconSize={24} scale={80} className="scale-90 transform origin-left" />
        
        <div className="text-slate-600 text-center md:text-left font-body">
          © {currentYear} Rodan School. Knowledge is Power. <span className="hidden md:inline">|</span> <br className="md:hidden" />
          16 Badore Rd, Ajah, Lagos 106104, Lagos, Nigeria
        </div>
        
        <nav aria-label="Footer Navigation" className='flex flex-col lg:flex-row gap-2'>
          <Link 
            href="/contact" 
            className="text-slate-500 hover:text-primary-container hover:underline decoration-2 underline-offset-4 font-display font-bold transition-colors"
          >
            Contact
          </Link>
           <Link 
            href="/admissions" 
            className="text-slate-500 hover:text-primary-container hover:underline decoration-2 underline-offset-4 font-display font-bold transition-colors"
          >
            Admissions
          </Link>
          <Link 
            href="/about" 
            className="text-slate-500 hover:text-primary-container hover:underline decoration-2 underline-offset-4 font-display font-bold transition-colors"
          >
            About
          </Link>
        </nav>
      </div>
    </footer>
  );
}