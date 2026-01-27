import React from 'react';

interface BtnProps {
  text?: string;
  onClick?: () => void;
  className?: string;
  bgColor?: string;
  disabled?: boolean;
  type?:string;
}

export const GlobalButton: React.FC<BtnProps> = ({ 
  text = "Button",
  onClick,
  className = "",
  bgColor = "bg-primary-red",
  disabled = false,
  type = "button"
}) => {
  return (
    <div 
      className={`self-stretch px-4 py-3 rounded-lg justify-center items-center transition-all
        ${disabled 
          ? 'bg-gray-300 cursor-not-allowed ' 
          : `${bgColor} cursor-pointer `
        }
        ${className}
      `}
      onClick={disabled ? undefined : onClick}
      role={type}
      // aria-disabled={disabled}
    >
      <div className={`justify-center text-center text-sm font-medium font-['Plus_Jakarta_Sans']
        ${disabled ? 'text-gray-500' : 'text-white'}
      `}>
        {text}
      </div>
    </div>
  );
};