import React from 'react';
import { Check } from 'lucide-react';

interface CheckboxFieldProps {
  label?: string;
  checked?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  className?: string;
  name?: string;
}

export const CheckboxField: React.FC<CheckboxFieldProps> = ({
  label = '',
  checked = false,
  onChange,
  disabled = false,
  className = '',
  name,
}) => {
  const handleToggle = () => {
    if (disabled || !onChange) return;
    
    // Create a proper synthetic event
    const event = {
      target: {
        type: 'checkbox',
        checked: !checked,
        name: name,
        value: (!checked).toString(),
      },
      currentTarget: {
        type: 'checkbox',
        checked: !checked,
        name: name,
        value: (!checked).toString(),
      },
    } as any;
    
    onChange(event);
  };

  return (
    <div className={`inline-flex justify-start items-center gap-2.5 ${className}`}>
      <input
        type="checkbox"
        name={name}
        checked={checked}
        onChange={onChange}
        disabled={disabled}
        className="sr-only"
        id={`checkbox-${name}`}
      />
      <div
        onClick={handleToggle}
        className={`w-5 h-5 rounded-[5px] outline-[0.77px] outline-stone-300 backdrop-blur-[1.56px] flex justify-center items-center
          ${checked ? 'bg-primary-red' : 'bg-white'}
          ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
        `}
      >
        {checked && <Check className="w-3.5 h-3.5 text-white" strokeWidth={3} />}
      </div>
      {label && (
        <label 
          htmlFor={`checkbox-${name}`}
          onClick={handleToggle}
          className={`justify-center text-Paragraph text-xs font-normal font-['Plus_Jakarta_Sans'] ${
            disabled ? 'cursor-not-allowed' : 'cursor-pointer'
          }`}
        >
          {label}
        </label>
      )}
    </div>
  );
};