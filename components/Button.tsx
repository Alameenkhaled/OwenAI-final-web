import React from 'react';
import { Loader2 } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'danger' | 'ghost';
  isLoading?: boolean;
  icon?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  isLoading, 
  icon,
  className = '',
  ...props 
}) => {
  const baseStyles = "relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-display font-medium transition-all duration-300 rounded group focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-void";
  
  const variants = {
    primary: "bg-cyan/10 text-cyan border border-cyan/50 hover:bg-cyan hover:text-void hover:border-cyan hover:shadow-[0_0_30px_rgba(0,240,255,0.4)]",
    secondary: "bg-white/5 text-white border border-white/10 hover:bg-white/10 hover:border-white/30",
    danger: "bg-risk/10 text-risk border border-risk/50 hover:bg-risk hover:text-white",
    ghost: "bg-transparent text-slate-400 hover:text-white"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className} ${isLoading ? 'opacity-80 cursor-wait' : ''}`}
      disabled={isLoading || props.disabled}
      {...props}
    >
      {variant === 'primary' && (
        <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56 opacity-10"></span>
      )}
      
      <span className="relative flex items-center gap-2">
        {isLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : icon}
        {children}
      </span>
    </button>
  );
};