import React from 'react';
import { ChevronDown } from 'lucide-react';
import { FORM_PLACEHOLDER_VAL, FORM_LABELS } from '@/styles/assets';

interface DropdownOption {
  value: string;
  label: string;
}

interface DropdownFieldProps {
  label?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options?: DropdownOption[];
  disabled?: boolean;
  required?: boolean;
  className?: string;
  name?: string;
  dropdownHeight?:string;
}

export const DropdownField: React.FC<DropdownFieldProps> = ({
  label,
  placeholder = 'Select',
  value,
  onChange,
  options = [],
  disabled = false,
  required = false,
  className = '',
  dropdownHeight = '14',
  name,
}) => {
  return (
    <div className={`self-stretch flex flex-col justify-start items-start gap-1.25   ${className}`}>
      {label && (
        <label className={FORM_LABELS}>
          {label}
          {required && <span className="text-red ml-1">*</span>}
        </label>
      )}
      <div
        className={`self-stretch px-3.5 py-2.5 rounded-[10px] border border-[#E9E9E9] inline-flex justify-between items-center relative  ${dropdownHeight ? `h-${dropdownHeight}` : "h-14"}
          ${disabled ? 'bg-zinc-100 cursor-not-allowed' : 'bg-white'}
        `}
      >
        <select
          name={name}
          value={value}
          onChange={onChange}
          disabled={disabled}
          required={required}
          className={`w-full bg-transparent outline-none appearance-none ${FORM_PLACEHOLDER_VAL} ${
            !value ? 'text-Placeholder' : ''
          } ${disabled ? "cursor-not-allowed" : ""}`
        }
        >
          <option value="" disabled>
            {placeholder}
          </option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <div className="w-4 h-4 pointer-events-none">
          <ChevronDown className="w-4 h-4 text-Paragraph" />
        </div>
      </div>
    </div>
  );
};