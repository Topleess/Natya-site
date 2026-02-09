import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  children: React.ReactNode;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  children, 
  className = '',
  ...props 
}) => {
  // Updated Styles to match reference:
  // Primary is now the bright Mint/Green with glow
  
  const baseStyles = "inline-flex items-center justify-center px-8 py-4 rounded-full font-bold transition-all duration-300 transform active:scale-95 text-sm tracking-wide uppercase font-sans";
  
  const variants = {
    // Reference Primary: Bright Green, Black Text, Green Glow
    primary: "bg-brand-mint text-brand-black hover:bg-[#00ffc3] shadow-[0_0_25px_rgba(0,210,160,0.4)] hover:shadow-[0_0_35px_rgba(0,210,160,0.6)]",
    
    // Reference Secondary/Yellow:
    secondary: "bg-brand-yellow text-brand-black hover:bg-yellow-400 shadow-[0_0_20px_rgba(253,203,88,0.3)]",
    
    // Outline: Mint border
    outline: "border border-brand-mint/50 text-brand-mint hover:bg-brand-mint hover:text-brand-black backdrop-blur-sm",
    
    ghost: "text-white hover:text-brand-mint hover:bg-white/5",
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};