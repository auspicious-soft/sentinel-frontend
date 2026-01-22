import React from 'react';
import { Calendar } from 'lucide-react';
import { FORM_PLACEHOLDER_VAL, FORM_LABELS } from '@/styles/assets';

interface DateFieldProps {
  label?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  required?: boolean;
  className?: string;
  name?: string;
  min?: string;
  max?: string;
}

export const DateField: React.FC<DateFieldProps> = ({
  label,
  placeholder = 'Select Date',
  value,
  onChange,
  disabled = false,
  required = false,
  className = '',
  name,
  min,
  max,
}) => {
  return (
    <div className={`self-stretch flex flex-col justify-start items-start gap-2 ${className}`}>
      {label && (
        <label className={FORM_LABELS}>
          {label}
          {required && <span className="text-red ml-1">*</span>}
        </label>
      )}
      <div
        className={`self-stretch h-14 px-3.5 py-2.5 rounded-[10px] outline outline-zinc-100 inline-flex justify-between items-center gap-2.5 relative
          ${disabled ? 'bg-zinc-100 cursor-not-allowed' : 'bg-white'}
        `}
      >
        <input
          type="date"
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          disabled={disabled}
          required={required}
          min={min}
          max={max}
          className={`w-full bg-transparent outline-none ${FORM_PLACEHOLDER_VAL} placeholder:text-Placeholder`}
        />
        <div className="w-4 h-4 pointer-events-none">
          <Calendar className="w-4 h-4 text-Paragraph" />
        </div>
      </div>
    </div>
  );
};