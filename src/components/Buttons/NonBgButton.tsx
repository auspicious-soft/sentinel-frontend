import { ChevronDown } from 'lucide-react';
import React from 'react';

interface BtnProps {
  text?: string;
  onClick?: () => void;
  className?: string;
  borderColor: string;
  textColor: string;
  icon?:boolean;
  bgColor?:string;
}

export const NonBgButton: React.FC<BtnProps> = ({ 
  text = "Button",
  onClick,
  className = "",
  borderColor = "border-Black",
  textColor = "text-Black",
  icon = false,
  bgColor = "bg-White",
}) => {
  return (
    <div 
      className={`self-stretch ${bgColor} px-4 flex py-3 rounded-lg justify-center items-center border gap-2 ${borderColor} cursor-pointer ${className}` }
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

