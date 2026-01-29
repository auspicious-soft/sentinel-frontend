import React from "react";

interface CustomRadioProps {
  checked: boolean;
  label?: string;
  onChange: (checked: boolean) => void;
  disabled?: boolean;
  activeColor?: string; // rose-800
}

export const CustomRadio: React.FC<CustomRadioProps> = ({
  checked,
  label,
  onChange,
  disabled = false,
  activeColor = "primary-red",
}) => {
  return (
    <div
      onClick={() => !disabled && onChange(true)}
      className={`flex items-center gap-1.5 select-none ${
        disabled ? "cursor-not-allowed opacity-50" : "cursor-pointer"
      }`}
    >
      {/* Box */}
      <div
        className={`
          w-4 h-4 p-0.75 rounded-[3px]
          
          ${
            checked
              ? `${activeColor} border border-primary-red`
              : "border-[0.71px] border-Placeholder"
          }
          flex justify-center items-center
        `}
      >
        {checked && (
          <div
            className={`w-2 h-2 rounded-xs bg-${activeColor}`}
          />
        )}
      </div>

      {/* Label */}
      {label && (
        <span
          className={`
            text-xs font-medium font-['Plus_Jakarta_Sans'] underline
            ${checked ? `text-${activeColor}` : "text-Placeholder"}
          `}
        >
          {label}
        </span>
      )}
    </div>
  );
};
