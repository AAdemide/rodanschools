// components/ui/NavLink.tsx
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

export default function NavLink({ href, children }: NavLinkProps) {
  const pathname = usePathname();
  
  // Check if the current route matches the link's destination
  const isActive = pathname === href;

  return (
    <Link 
      href={href}
      className={`
        font-display font-bold tracking-tight inline-block transition-all duration-300
        hover:scale-105 hover:-rotate-2 active:scale-95
        ${isActive 
          ? 'text-[#0066FF] border-b-2 border-[#0066FF] pb-1' // Active state: Primary color + underline
          : 'text-slate-600 hover:text-[#0066FF]'             // Inactive state: Slate, turns primary on hover
        }
      `}
    >
      {children}
    </Link>
  );
}