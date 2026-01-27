'use client';

import React from 'react';
import Image from 'next/image';
import tickIcon from '../../../public/icons/tick.svg';

interface CustomCheckboxProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  size?: number;
  variant?: 'header' | 'row';
}

export const CustomCheckbox: React.FC<CustomCheckboxProps> = ({
  checked,
  onChange,
  size = 22,
  variant = 'row',
}) => {
  const isHeader = variant === 'header';

  return (
    <label
      className="relative inline-flex items-center justify-center cursor-pointer "
      style={{ width: size, height: size }}
    >
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className="peer absolute inset-0 opacity-0 cursor-pointer "
      />
    
      <span
        className={`
          flex items-center justify-center
          w-full h-full rounded-md
          transition-colors bg-white
          ${isHeader
            ? 'border border-white/60 peer-checked:bg-White peer-checked:border-white/60 bg-White'
            : 'border border-[#CCCCCC] peer-checked:bg-primary-blue peer-checked:border-primary-blue'}
          
          
        `}
      >
      {(!isHeader || checked) && (
  <Image
    src={tickIcon}
    alt="checked"
    className={`
      w-10 h-10 transition-opacity
      ${checked ? 'opacity-100' : 'opacity-0'}
    `}
    style={
      isHeader
        ? {
            filter:
              'invert(27%) sepia(91%) saturate(1900%) hue-rotate(203deg)',
          }
        : {}
    }
    quality={100}
  />
)}
      </span>
    </label>
  );
};
