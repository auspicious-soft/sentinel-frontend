import React from 'react';
import { FORM_PLACEHOLDER_VAL, FORM_LABELS } from '@/styles/assets';

interface TextAreaFieldProps {
  label?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  disabled?: boolean;
  required?: boolean;
  className?: string;
  name?: string;
  rows?: number;
}

export const TextAreaField: React.FC<TextAreaFieldProps> = ({
  label,
  placeholder = '',
  value,
  onChange,
  disabled = false,
  required = false,
  className = '',
  name,
  rows = 4,
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
        className={`self-stretch px-3.5 pt-2.5 pb-2.5 rounded-[10px] outline outline-zinc-100 flex flex-col justify-start items-start gap-2.5
          ${disabled ? 'bg-zinc-100 cursor-not-allowed' : 'bg-white'}
        `}
      >
        <textarea
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          disabled={disabled}
          required={required}
          rows={rows}
          className={`w-full bg-transparent outline-none resize-none ${FORM_PLACEHOLDER_VAL} placeholder:text-Placeholder`}
        />
      </div>
    </div>
  );
};