import { ButtonHTMLAttributes, ReactNode } from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'gold';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  className?: string;
}

export default function Button({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  href,
  className = '',
  ...props 
}: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center font-bold tracking-wider uppercase transition-all duration-200 active:scale-95 disabled:opacity-50 disabled:pointer-events-none rounded-[6px]";
  
  const variants = {
    primary: "bg-school-blue text-white hover:bg-slate-800 shadow-md hover:shadow-lg hover:-translate-y-0.5",
    secondary: "border-2 border-school-blue text-school-blue hover:bg-slate-50 hover:shadow-lg hover:-translate-y-0.5",
    outline: "border-2 border-white text-white hover:bg-white/10 hover:shadow-lg hover:-translate-y-0.5",
    ghost: "text-slate-600 hover:bg-slate-50 hover:text-school-blue",
    gold: "bg-school-gold text-school-blue hover:shadow-lg hover:-translate-y-0.5",
  };

  const sizes = {
    sm: "px-6 py-3 text-xs",
    md: "px-8 py-3.5 text-[0.85rem]",
    lg: "px-10 py-4.5 text-sm",
  };

  const combinedClasses = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    if (href.startsWith('http') || href.startsWith('tel') || href.startsWith('mailto')) {
      return (
        <a href={href} className={combinedClasses}>
          {children}
        </a>
      );
    }
    return (
      <Link to={href} className={combinedClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {children}
    </button>
  );
}
