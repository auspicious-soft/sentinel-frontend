import { Plus } from 'lucide-react';
import React from 'react';

interface AddBtnProps {
  text?: string;
  onClick?: () => void;
  className?: string;
  icon?: boolean;
}

export const AddButton: React.FC<AddBtnProps> = ({ 
  text = "Add New Company",
  onClick,
  className = "",
  icon = false 
}) => {
  return (
    <div 
      className={`self-stretch px-4 py-3 bg-primary-red rounded-lg inline-flex justify-center items-center gap-2.5 cursor-pointer ${className}`}
      onClick={onClick}
      role="button"
    >
          {icon && (
      <div className="w-4 h-4 relative overflow-hidden">
        <Plus className='w-4 h-4 text-white'/> 
      </div>
      )}

      <div className="justify-start text-white text-xs font-medium font-['Plus_Jakarta_Sans']">
        {text}
      </div>
    
    
    </div>
  );
};