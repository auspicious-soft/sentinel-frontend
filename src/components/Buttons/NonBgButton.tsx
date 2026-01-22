import { ChevronDown } from 'lucide-react';
import React from 'react';

interface BtnProps {
  text?: string;
  onClick?: () => void;
  className?: string;
  borderColor: string;
  textColor: string;
  icon?:boolean;
}

export const NonBgButton: React.FC<BtnProps> = ({ 
  text = "Button",
  onClick,
  className = "",
  borderColor = "border-Black",
  textColor = "text-Black",
  icon = false
}) => {
  return (
    <div 
      className={`self-stretch bg-white px-4 flex py-3 rounded-lg justify-around items-center border gap-4 ${borderColor} cursor-pointer ${className}` }
      onClick={onClick}
      role="button"
    >
       
      <div className={`justify-center ${textColor} text-sm text-center font-bold font-['Plus_Jakarta_Sans']`}>
        {text}
      </div>
    {icon && (
      <div className="w-4 h-4 relative overflow-hidden">
        <ChevronDown className={`w-4 h-4 ${textColor}`}/> 
      </div>
      )}
    
    </div>
  );
};

