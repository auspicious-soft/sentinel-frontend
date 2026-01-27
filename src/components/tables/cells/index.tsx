"use client";
import { TABLE_VALUES } from "@/styles/assets";
import Image from "next/image";
import React, { useState } from "react";
import eyeIcon from "../../../../public/icons/eye1.svg";

export const ActionEyeCell: React.FC<{ onClick?: () => void }> = ({
  onClick,
}) => {
  return (
    <div className="flex justify-center items-center">
      <button
        onClick={onClick}
        className="w-8 h-8 px-4 py-2 bg-primary-red rounded-lg outline-1 outline-white/20 backdrop-blur-[2.50px] flex justify-center items-center gap-2 cursor-pointer"
      >
        <div className="w-4 h-4 absolute overflow-hidden">
          <Image src={eyeIcon} alt={"Eye"} width={16} height={16} />
        </div>
      </button>
    </div>
  );
};

// 2. Delete/Restore Action Cell
export const ActionTextCell: React.FC<{
  text: string;
  color?: string;
  underline?: boolean;
  onClick?: () => void;
}> = ({ text, color = "#9D2137", underline = false, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`text-xs cursor-pointer font-medium ${underline ? "underline" : ""}`}
      style={{ color }}
    >
      {text}
    </button>
  );
};

export const DualActionTextCell: React.FC<{
  primaryText: string;
  secondaryText?:string;
  primaryTextColor?: string;
  secondaryTextColor?: string;
  primaryUnderline?: boolean;
  secondayUnderline?: boolean;
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
}> = ({ primaryText, secondaryText, primaryTextColor = "#9D2137", secondaryTextColor= "#9D2137", primaryUnderline = false, secondayUnderline = false ,onPrimaryClick, onSecondaryClick }) => {
  return (
   <div className="flex flex-col gap-1">
     <button
      onClick={onPrimaryClick}
      className={`text-xs font-medium ${primaryTextColor} ${primaryUnderline ? "underline" : ""}`}
      style={{  }}
    >
      {primaryText}
    </button>
    {secondaryText && (
     <button
      onClick={onSecondaryClick}
      className={`text-xs font-medium ${secondaryTextColor} ${secondayUnderline ? "underline" : ""}`}
      // style={{ secondaryTextColor }}
    >
      {secondaryText}
    </button>
    )}
   </div>
  );
};

// 3. Status Badge Cell
export const StatusBadgeCell: React.FC<{
  status: string;
  variant?: "success" | "warning" | "error" | "info" | "custom";
  bgColor?: string;
  textColor?: string;
  className?:string
}> = ({ status, variant = "custom", bgColor, textColor,className }) => {
  const getVariantColors = () => {
    switch (variant) {
      case "success":
        return { bg: "#49BF5F", text: "#FFFFFF" };
      case "warning":
        return { bg: "#CDBF28", text: "#000000" };
      case "error":
        return { bg: "#FF6262", text: "#FFFFFF" };
      case "info":
        return { bg: "#4268A2", text: "#FFFFFF" };
      default:
        return { bg: bgColor || "#E5E7EB", text: textColor || "#000000" };
    }
  };

  const colors = getVariantColors();

  return (
    <div
      className={`px-2 py-1 rounded flex justify-center items-center gap-2.5 ${className ? className : ""}`}
      style={{ backgroundColor: colors.bg }}
    >
      <span
        className="text-xs font-normal capitalize leading-5"
        style={{ color: colors.text }}
      >
        {status}
      </span>
    </div>
  );
};

// 4. Text with Underlined Link Cell
export const TextWithLinkCell: React.FC<{
  text: string;
  linkText?: string;
  linkColor?: string;
  onLinkClick?: () => void;
}> = ({ text, linkText, linkColor = "#9D2137", onLinkClick }) => {
  return (
    <div className="flex flex-col">
      <span className={`${TABLE_VALUES}`}>{text}</span>
      {linkText && (
        <button
          onClick={onLinkClick}
          className="text-sm font-normal underline leading-8"
          style={{ color: linkColor }}
        >
          {linkText}
        </button>
      )}
    </div>
  );
};

// 5. Dropdown Cell
export const DropdownCell: React.FC<{
  value: string;
  options: { label: string; value: string }[];
  onChange: (value: string) => void;
  placeholder?: string;
}> = ({ value, options, onChange, placeholder = "Select..." }) => {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="px-3 py-2 bg-white rounded -outline-offset-1 outline-gray-200 flex justify-center items-center gap-2"
    >
      <option value="">{placeholder}</option>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

// 6. Dual Action Button Cell (Approve/Send to QA)
export const DualActionCell: React.FC<{
  onApprove?: () => void;
  onSendToQA?: () => void;
  approveDisabled?: boolean;
}> = ({ onApprove, onSendToQA, approveDisabled = false }) => {
  return (
    <div className="flex justify-center items-center gap-4">
      <button
        onClick={onApprove}
        disabled={approveDisabled}
        className={`text-[10px] font-medium ${approveDisabled ? "text-zinc-700" : "text-rose-800 underline"}`}
      >
        Approve
      </button>
      <button
        onClick={onSendToQA}
        className="px-4 py-1.5 rounded-2xl -outline-offset-1 outline-rose-800 flex justify-center items-center gap-2.5"
      >
        <span className="text-[10px] font-medium text-rose-800">
          Send to QA
        </span>
      </button>
    </div>
  );
};

export const InspectionCostCell: React.FC<{
  currentCost: number;
  onCostChange: (newCost: number) => void;
  onEditToggle: (field: "cost" | "commission", checked: boolean) => void;
  editCost?: boolean;
  editCommission?: boolean;
}> = ({
  currentCost,
  onCostChange,
  onEditToggle,
  editCost = false,
  editCommission = false,
}) => {
  const [tempCost, setTempCost] = useState<string>(currentCost.toString());

  return (
    <div className="flex flex-col gap-2 p-2">
      {/* Checkboxes */}
      <div className="flex gap-4">
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={editCost}
            onChange={(e) => onEditToggle("cost", e.target.checked)}
            className="w-4 h-4"
          />
          <span className="text-xs">Edit Insp Cost</span>
        </label>
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={editCommission}
            onChange={(e) => onEditToggle("commission", e.target.checked)}
            className="w-4 h-4"
          />
          <span className="text-xs">Field Rep Comm</span>
        </label>
      </div>

      {/* Cost Input */}
      <div className="flex items-center gap-2">
        <span className="text-sm">Current Cost (${currentCost})</span>
        {editCost && (
          <>
            <input
              type="number"
              value={tempCost}
              onChange={(e) => setTempCost(e.target.value)}
              onBlur={() => onCostChange(parseFloat(tempCost) || currentCost)}
              className="w-20 px-2 py-1 border rounded text-sm"
              placeholder="Amount"
            />
          </>
        )}
      </div>
    </div>
  );
};

// 8. Triple Text Cell (for Completed table)
export const TripleTextCell: React.FC<{
  texts: [string, string, string];
  underlineAll?: boolean;
  linkColor?: string;
}> = ({ texts, underlineAll = false, linkColor = "#9D2137" }) => {
  return (
    <div className="flex flex-col">
      {texts.map((text, index) => (
        <span
          key={index}
          className={`text-sm ${underlineAll ? "underline" : ""}`}
          style={underlineAll ? { color: linkColor } : {}}
        >
          {text}
        </span>
      ))}
    </div>
  );
};

// 9. View/Generate Invoice Cell
export const InvoiceActionCell: React.FC<{
  onView?: () => void;
  onGenerate?: () => void;
}> = ({ onView, onGenerate }) => {
  return (
    <div className="flex gap-3">
      <button onClick={onView} className="text-sm text-rose-800 underline">
        View
      </button>
      <button onClick={onGenerate} className="text-sm text-rose-800">
        Generate
      </button>
    </div>
  );
};

export const IconActionsCell: React.FC<{
  onView?: () => void;
  onEdit?: () => void;
  onDelete?: () => void;
}> = ({ onView, onEdit, onDelete }) => {
  return (
    <div className="flex gap-3">
      {onView && (
        <button onClick={onView} className="text-blue-600 hover:text-blue-800">
          👁️
        </button>
      )}
      {onEdit && (
        <button
          onClick={onEdit}
          className="text-green-600 hover:text-green-800"
        >
          ✏️
        </button>
      )}
      {onDelete && (
        <button onClick={onDelete} className="text-red-600 hover:text-red-800">
          🗑️
        </button>
      )}
    </div>
  );
};
