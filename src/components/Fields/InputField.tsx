import React from 'react';
import { FORM_PLACEHOLDER_VAL, FORM_LABELS } from '@/styles/assets';

interface InputFieldProps {
  label?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: 'text' | 'email' | 'password' | 'number' |"tel";
  disabled?: boolean;
  required?: boolean;
  className?: string;
  name?: string;
  customHeight?:string;
  customBorder?:string;
}

export const InputField: React.FC<InputFieldProps> = ({
  label,
  placeholder = '',
  value,
  onChange,
  type = 'text',
  disabled = false,
  required = false,
  className = '',
  name,
  customHeight = '14',
  customBorder = ''
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
        className={`self-stretch ${customHeight ? `h-${customHeight}` : "h-14"}  px-3.5 py-2.5 rounded-[10px] ${customBorder ? `border border-${customBorder}` : "outline  outline-zinc-100" } inline-flex justify-start items-center gap-2.5
          ${disabled ? 'bg-zinc-100 cursor-not-allowed' : 'bg-white'}
        `}
      >
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          disabled={disabled}
          required={required}
          className={`w-full bg-transparent outline-none ${FORM_PLACEHOLDER_VAL} placeholder:text-Placeholder`}
        />
      </div>
    </div>
  );
};