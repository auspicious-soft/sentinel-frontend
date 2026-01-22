import React from "react";
import { Search } from "lucide-react";

interface SearchInputProps {
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  disabled?: boolean;
  showIcon?: boolean;
}

export const SearchInput: React.FC<SearchInputProps> = ({
  placeholder = "Search",
  value,
  onChange,
  className = "",
  disabled = false,
  showIcon = true,
}) => {
  return (
    <div
      className={`self-stretch w-full px-4 py-3 border rounded-lg border-Input flex items-center gap-2
        ${disabled ? "opacity-50 cursor-not-allowed" : "focus-within:border-Input"}
        ${className}`}
    >
     

      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
          className="
          w-full bg-transparent outline-none
          text-xs font-medium font-sans text-Input
          placeholder:text-Input
        "
      />

       {showIcon && (
         <div className="w-4 h-4 relative overflow-hidden">
        <Search className="w-4 h-4 text-Input" />
        </div>
      )}


    </div>
  );
};
