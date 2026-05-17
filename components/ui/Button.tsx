import { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

export default function Button({ children, className = "", ...props }: ButtonProps) {
  return (
    <button 
      className={`font-display font-bold px-6 md:px-8 py-3 rounded-lg hover:scale-105 active:scale-95 transition-all duration-200 shadow-sm hover:shadow-md flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-offset-2 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}