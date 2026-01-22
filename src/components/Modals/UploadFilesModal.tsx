import React, { ReactNode, useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import { Upload, ChevronDown } from 'lucide-react';
import { GlobalButton } from '../Buttons/GlobalButton';
import { NonBgButton } from '../Buttons/NonBgButton';
import { CheckboxField } from '../Fields/CheckboxField';
import { DropdownField } from '../Fields/DropdownField';
import { MODAL_HEADER } from '@/styles/assets';

export interface UploadedFile {
  id: string;
  imageUrl: string;
  photoType?: string;
  isCoverPhoto: boolean;
  isSelected: boolean;
}

interface UploadFilesModalProps {
  icon?: ReactNode | string | StaticImageData;
  headingText?: string;
  inspectionType?: string;
  inspectorName?: string;
  uploadedFiles: UploadedFile[];
  photoTypeOptions?: { value: string; label: string }[];
  onPhotoTypeChange?: (fileId: string, photoType: string) => void;
  onCoverPhotoChange?: (fileId: string, isCover: boolean) => void;
  onFileSelect?: (fileId: string, isSelected: boolean) => void;
  onDeleteSelected?: () => void;
  onUploadNew?: () => void;
  onConfirm?: () => void;
  onCancel?: () => void;
  className?: string;
}

export const UploadFilesModal: React.FC<UploadFilesModalProps> = ({
  icon,
  headingText = 'Upload Files',
  inspectionType = '',
  inspectorName = '',
  uploadedFiles = [],
  photoTypeOptions = [],
  onPhotoTypeChange,
  onCoverPhotoChange,
  onFileSelect,
  onDeleteSelected,
  onUploadNew,
  onConfirm,
  onCancel,
  className = '',
}) => {
  const hasSelectedFiles = uploadedFiles.some((file) => file.isSelected);

  return (
    <div
      className={`w-full max-w-2xl p-7 bg-white rounded-[30px] inline-flex flex-col justify-start items-center gap-7 h-full max-h-2xl ${className}`}
    >
      {/* Header Section */}
      <div className="self-stretch inline-flex flex-col justify-start items-center gap-5">
        {icon && (
          <div className="w-20 h-20 flex items-center justify-center relative">
            {typeof icon === 'string' || (typeof icon === 'object' && 'src' in icon) ? (
              <Image
                src={icon}
                alt="Modal icon"
                width={76}
                height={76}
                className="w-20 h-20 object-contain"
              />
            ) : (
              icon
            )}
          </div>
        )}
        <div className={MODAL_HEADER}>{headingText}</div>
      </div>

      {/* Info Fields */}
      <div className="self-stretch inline-flex justify-start items-center gap-5">
        <div className="inline-flex flex-col justify-start items-start gap-1.25">
          <div className="w-52 px-3.5 py-1.5 rounded-[10px] -outline-offset-1 outline-white inline-flex justify-start items-center gap-2.5">
            <div className="justify-center text-Placeholder text-sm font-medium font-['Plus_Jakarta_Sans'] leading-8">
              Inspection Type and ID
            </div>
          </div>
        </div>
        <div className="flex-1 inline-flex flex-col justify-start items-start gap-1.25">
          <div className="self-stretch px-3.5 py-1.5 bg-sky-50 rounded-[10px] -outline-offset-1 outline-white inline-flex justify-start items-center gap-2.5">
            <div className="justify-center text-Placeholder text-sm font-medium font-['Plus_Jakarta_Sans'] leading-8">
              {inspectionType}
            </div>
          </div>
        </div>
      </div>

      <div className="self-stretch inline-flex justify-start items-center gap-5">
        <div className="inline-flex flex-col justify-start items-start gap-1.25">
          <div className="w-52 px-3.5 py-1.5 rounded-[10px] -outline-offset-1 outline-white inline-flex justify-start items-center gap-2.5">
            <div className="justify-center text-Placeholder text-sm font-medium font-['Plus_Jakarta_Sans'] leading-8">
              Name
            </div>
          </div>
        </div>
        <div className="flex-1 inline-flex flex-col justify-start items-start gap-1.25">
          <div className="self-stretch px-3.5 py-1.5 bg-sky-50 rounded-[10px] -outline-offset-1 outline-white inline-flex justify-start items-center gap-2.5">
            <div className="justify-center text-Placeholder text-sm font-medium font-['Plus_Jakarta_Sans'] leading-8">
              {inspectorName}
            </div>
          </div>
        </div>
      </div>

      {/* Upload New File Section */}
      <div className="self-stretch p-4 bg-sky-50 rounded-[10px] -outline-offset-1 outline-white inline-flex flex-col justify-start items-end gap-2.5">
        <div className="self-stretch inline-flex justify-start items-start gap-5">
          <div className="flex-1 inline-flex flex-col justify-start items-start gap-1.25">
            <div className="self-stretch justify-center text-Paragraph text-xs font-normal font-['Plus_Jakarta_Sans']">
              Photo Type
            </div>
            <div
              onClick={onUploadNew}
              className="self-stretch px-3.5 py-2.5 bg-white rounded-[10px] -outline-offset-1 outline-zinc-100 inline-flex justify-between items-center cursor-pointer hover:bg-gray-50"
            >
              <div className="justify-center text-Placeholder text-sm font-medium font-['Plus_Jakarta_Sans'] leading-8">
                Upload File
              </div>
              <div className="w-4 h-4 relative overflow-hidden">
                <Upload className="w-4 h-4 text-Paragraph" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Uploaded Items Section */}
      <div className="self-stretch p-4 bg-sky-50 rounded-[10px] -outline-offset-1 outline-white inline-flex justify-start items-start gap-2.5">
        <div className="flex-1 inline-flex flex-col justify-start items-start gap-2.5">
          {/* Header with Delete Button */}
          <div className="self-stretch inline-flex justify-between items-center">
            <div className="justify-center text-Black text-base font-semibold font-['Plus_Jakarta_Sans'] leading-6">
              Uploaded Items
            </div>


            <GlobalButton
          text="Delete Selected"
          bgColor="bg-primary-red"
          className=""
          disabled={hasSelectedFiles ? false : true}
        />
          </div>

          <div className="self-stretch inline-flex justify-end items-start gap-4">
            {/* Images Grid */}
            <div className="flex-1 max-h-88 overflow-y-auto pr-2 custom-scrollbar">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {uploadedFiles.map((file) => (
                  <div key={file.id} className="inline-flex flex-col justify-start items-start gap-2.5">
                    {/* Image with Checkbox */}
                    <div className="self-stretch h-44 p-3 bg-zinc-300 rounded-2xl inline-flex justify-end items-start gap-2.5 relative">
                      <img
                        src={file.imageUrl}
                        alt="Uploaded"
                        className="absolute inset-0 w-full h-full object-cover rounded-2xl"
                      />
                      <div className="relative z-10">
                        <input
                          type="checkbox"
                          checked={file.isSelected}
                          onChange={(e) => onFileSelect?.(file.id, e.target.checked)}
                          className="sr-only peer"
                        />
                        <div
                          onClick={() => onFileSelect?.(file.id, !file.isSelected)}
                          className={`w-4 h-4 rounded outline-[0.66px] outline-stone-300 backdrop-blur-[1.34px] flex justify-center items-center cursor-pointer
                            ${file.isSelected ? 'bg-primary-red' : 'bg-white'}
                          `}
                        >
                          {file.isSelected && (
                            <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                            </svg>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Photo Type Dropdown */}
                    <div className="self-stretch px-3.5 py-2.5 bg-white rounded-[10px] -outline-offset-1 outline-zinc-100 inline-flex justify-between items-center">
                      <select
                        value={file.photoType || ''}
                        onChange={(e) => onPhotoTypeChange?.(file.id, e.target.value)}
                        className="w-full bg-transparent outline-none appearance-none text-Placeholder text-xs font-normal font-['Plus_Jakarta_Sans'] cursor-pointer"
                      >
                        <option value="">Select Photo Type</option>
                        {photoTypeOptions.map((option) => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </select>
                      <ChevronDown className="w-3.5 h-3.5 text-zinc-800 pointer-events-none" />
                    </div>

                    {/* Make Cover Photo Checkbox */}
                    <CheckboxField
                      label="Make Cover Photo"
                      checked={file.isCoverPhoto}
                      onChange={(e) => onCoverPhotoChange?.(file.id, e.target.checked)}
                    />
                  </div>
                ))}
              </div>
            </div>

          
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="self-stretch inline-flex justify-start items-start gap-2.5">
        <div className="w-40">
          <NonBgButton
            text="Cancel"
            onClick={onCancel}
            borderColor="border-Selected"
            textColor="text-Selected"
          />
        </div>

        <div className="flex-1">
          <GlobalButton text="Update" onClick={onConfirm} bgColor="bg-primary-red" />
        </div>
      </div>

      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #e5e7eb;
          border-radius: 12px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #9ca3af;
          border-radius: 12px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #6b7280;
        }
      `}</style>
    </div>
  );
};