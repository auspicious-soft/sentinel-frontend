"use client";
import { TABLE_VALUES } from "@/styles/assets";
import Image from "next/image";
import React, { useState } from "react";
import eyeIcon from "../../../../public/icons/eye1.svg";
import deleteIcon from "../../../../public/icons/redDelete.svg";
import pencilIcon from "../../../../public/icons/pencil.svg";
import galleryIcon from "../../../../public/icons/gallery.svg";
import assign from "../../../../public/icons/assigningLogo.svg";
import { DropdownField } from "@/components/Fields/DropdownField";
import { CustomRadio } from "@/components/Fields/CustomRadio";
import { InputField } from "@/components/Fields/InputField";

type EditMode = "cost" | "commission" | null;


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

export const DeleteEyeCell: React.FC<{ onClick?: () => void }> = ({
  onClick,
}) => {
  return (
    <div className="flex justify-center items-center">
      <button
        onClick={onClick}
        className="w-8 h-8 px-4 py-2 rounded-lg outline-1 outline-primary-red backdrop-blur-[2.50px] flex justify-center items-center gap-2 cursor-pointer"
      >
        <div className="w-4 h-4 absolute overflow-hidden">
          <Image src={deleteIcon} alt={"delete"} width={16} height={16} />
        </div>
      </button>
    </div>
  );
};

export const ReAssignEye: React.FC<{ onClick?: () => void }> = ({
  onClick,
}) => {
  return (
    <div className="flex justify-center items-center">
      <button
        onClick={onClick}
        className="w-8 h-8 px-2 py-2 rounded-lg bg-primary-red backdrop-blur-[2.50px] flex justify-center items-center gap-2 cursor-pointer"
      >
        <div className="w-6 h-6 absolute overflow-hidden">
          <Image src={assign} alt={"assign"} width={30} height={30} />
        </div>
      </button>
    </div>
  );
};

export const EditDeleteCell: React.FC<{ onEditClick?: () => void, onDeleteClick?: () => void }> = ({
  onEditClick,
  onDeleteClick,
}) => {
  return (
    <div className="flex justify-center items-center gap-2">
      <button
        onClick={onEditClick}
        className="w-8 h-8 px-4 py-2 rounded-lg bg-primary-red backdrop-blur-[2.50px] flex justify-center items-center gap-2 cursor-pointer"
      >
        <div className="w-4 h-4 absolute overflow-hidden">
          <Image src={pencilIcon} alt={"delete"} width={16} height={16} />
        </div>
      </button>
      <button
        onClick={onDeleteClick}
        className="w-8 h-8 px-4 py-2 rounded-lg bg-primary-red backdrop-blur-[2.50px] flex justify-center items-center gap-2 cursor-pointer"
      >
        <div className="w-4 h-4 absolute overflow-hidden">
          <Image src={galleryIcon} alt={"delete"} width={16} height={16} />
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
      className={`text-sm font-medium cursor-pointer font-['Plus_Jakarta_Sans'] ${underline ? "underline" : ""}`}
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
      className={`text-sm font-medium ${primaryTextColor} ${primaryUnderline ? "underline" : ""}`}
      style={{  }}
    >
      <span className={`text-${primaryTextColor}`}>{primaryText}</span>
    </button>
    {secondaryText && (
     <button
      onClick={onSecondaryClick}
      className={`text-sm font-medium ${secondaryTextColor} ${secondayUnderline ? "underline" : ""}`}
      // style={{ secondaryTextColor }}
    >
      <span className={`text-${secondaryTextColor}`}>{secondaryText}</span>
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
  underline?:boolean;
  onLinkClick?: () => void;
}> = ({ text, linkText, linkColor = "#9D2137", onLinkClick, underline=false }) => {
  return (
    <div className={`flex flex-col ${underline ? "underline" : ""} `}>
      <span className={`${TABLE_VALUES}`}>{text}</span>
      {linkText && (
        <button
          onClick={onLinkClick}
          className="text-sm font-normal  leading-8"
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
   
     <div className="w-full min-w-0">
      <DropdownField
        placeholder={placeholder}
        value={value}
        options={options}
        onChange={(e) => onChange(e.target.value)}
        className="w-full "
        dropdownHeight="8"
      />
    </div>
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
  editMode: EditMode;
  onModeChange: (mode: EditMode) => void;
  onCostChange: (newCost: number) => void;
}> = ({
  currentCost,
  editMode,
  onModeChange,
  onCostChange,
}) => {
  const [tempCost, setTempCost] = React.useState(
    currentCost.toFixed(2)
  );

  const isEditCost = editMode === "cost";

  return (
    <div className="w-72 p-2 inline-flex flex-col gap-2">
      {/* TOP RADIO GROUP */}
      <div className="flex gap-7">
        <CustomRadio
          checked={editMode === "cost"}
          label="Edit Insp Cost"
          onChange={() => onModeChange("cost")}
        />

        <CustomRadio
          checked={editMode === "commission"}
          label="Field Rep Comm"
          onChange={() => onModeChange("commission")}
        />
      </div>

      <div className="flex items-center gap-4">
        <span className="text-sm font-medium text-Paragraph">
          Current cost (${currentCost.toFixed(2)})
        </span>

        <div className="flex items-center gap-1.5">
          <div
            onClick={() => onModeChange("cost")}
            className={`
              w-4 h-4 rounded-full border
              ${
                isEditCost
                  ? "border-primary-red"
                  : "border-Placeholder"
              }
              cursor-pointer
            `}
          />

          <InputField
            type="number"
            placeholder="$"
            value={tempCost}
            disabled={!isEditCost}
            onChange={(e) => setTempCost(e.target.value)}
            className={`
              w-20 px-2 py-1 text-[10px]
              ${
                isEditCost
                  ? "outline-Input"
                  : "text-Placeholder cursor-not-allowed"
              }
            `}
            customHeight="8"
            customBorder="Input"
          />
        </div>
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
    <div className="flex flex-col justify-center align-middle">
      {texts.map((text, index) => (
        <span
          key={index}
          className={`text-sm text-center ${underlineAll ? "underline" : ""}`}
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
        <button onClick={onView}  className="w-8 h-8 px-2 py-2 rounded-lg bg-primary-red backdrop-blur-[2.50px] flex justify-center items-center gap-2 cursor-pointer"
      >
                   <Image src={pencilIcon} alt={"assign"} width={16} height={16} />

        </button>
      )}
      {onEdit && (
        <button
          onClick={onEdit}
           className="w-8 h-8 px-2 py-2 rounded-lg bg-primary-red backdrop-blur-[2.50px] flex justify-center items-center gap-2 cursor-pointer"
      >
          <Image src={galleryIcon} alt={"assign"} width={16} height={16} />
        </button>
      )}
      {onDelete && (
         <div className="flex justify-center items-center">
      <button
        onClick={onDelete}
        className="w-8 h-8 px-4 py-2 rounded-lg outline-1 outline-primary-red backdrop-blur-[2.50px] flex justify-center items-center gap-2 cursor-pointer"
      >
        <div className="w-4 h-4 absolute overflow-hidden">
          <Image src={deleteIcon} alt={"delete"} width={16} height={16} />
        </div>
      </button>
    </div>
      )}
    </div>
  );
};
