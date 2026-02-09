import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

export const Card: React.FC<CardProps> = ({ 
  children, 
  className = '', 
  hoverEffect = true 
}) => {
  return (
    <div 
      className={`
        bg-[#1A1A1A] border border-white/5 rounded-3xl p-6 relative overflow-hidden
        ${hoverEffect ? 'hover:border-white/10 hover:translate-y-[-4px] transition-all duration-300' : ''}
        ${className}
      `}
    >
      {children}
    </div>
  );
};