import React, { ReactNode } from 'react';
import { NonBgButton } from '../Buttons/NonBgButton';
import { GlobalButton } from '../Buttons/GlobalButton';
import { MODAL_HEADER, MODAL_TEXT } from '@/styles/assets';
import Image, { StaticImageData } from 'next/image';

interface NonFieldModalProps {
  icon?: ReactNode | string | StaticImageData;
  headingText?: string;
  paragraphText?: string;
  confirmButtonText?: string;
  cancelButtonText?: string;
  showCancelButton?: boolean;
  onConfirm?: () => void;
  onCancel?: () => void;
  className?: string;
}

export const NonFieldModal: React.FC<NonFieldModalProps> = ({ 
  icon,
  headingText = "Modal Title",
  paragraphText = "Modal description.",
  confirmButtonText = "Okay",
  cancelButtonText = "Cancel",
  showCancelButton = false,
  onConfirm,
  onCancel,
  className = ""
}) => {
  return (
    <div className={`w-full max-w-xl p-7 bg-white rounded-[30px] inline-flex flex-col justify-start items-center gap-7 ${className}`}>
      <div className="self-stretch flex flex-col justify-start items-center gap-5">
       {icon && (
          <div className="w-20-20 flex items-center justify-center relative">
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
        
        <div className="self-stretch flex flex-col justify-start items-start gap-2.5">
          <div className={MODAL_HEADER}>
            {headingText}
          </div>
          <div className={MODAL_TEXT}>
            {paragraphText}
          </div>
        </div>
      </div>

      <div className="self-stretch inline-flex justify-start items-start gap-2.5">
        {showCancelButton && (
          <div className="flex-2">
            <NonBgButton
              text={cancelButtonText}
              onClick={onCancel}
              borderColor="border-Selected"
              textColor="text-Selected"
            />
          </div>
        )}
        
        <div className={showCancelButton ? "flex-1" : "w-full"}>
          <GlobalButton
            text={confirmButtonText}
            onClick={onConfirm}
            bgColor="bg-primary-red"
          />
        </div>
      </div>
    </div>
  );
};