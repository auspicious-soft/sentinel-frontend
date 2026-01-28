import React, { ReactNode } from 'react';
import Image, { StaticImageData } from 'next/image';
import { GlobalButton } from '../Buttons/GlobalButton';
import { NonBgButton } from '../Buttons/NonBgButton';
import { MODAL_HEADER } from '@/styles/assets';
import { InputField } from '../Fields/InputField';
import { DropdownField } from '../Fields/DropdownField';
import { CheckboxField } from '../Fields/CheckboxField';
import { TextAreaField } from '../Fields/TextAreaField';
import { DateField } from '../Fields/DateField';
import { SearchInput } from '../Buttons/InputSearch';

export type FieldType = 'input' | 'dropdown' | 'checkbox' | 'textarea' | 'date' | 'search';

export interface FieldConfig {
  type: FieldType;
  name: string;
  label?: string;
  placeholder?: string;
  value?: string | boolean;
  onChange?: (e: any) => void;
  required?: boolean;
  disabled?: boolean;
  options?: { value: string; label: string }[];
  rows?: number;
  min?: string;
  max?: string;
  showIcon?: boolean;
}

interface FieldModalProps {
  icon?: ReactNode | string | StaticImageData;
  headingText?: string;
  fields: FieldConfig[];
  confirmButtonText?: string;
  cancelButtonText?: string;
  onConfirm?: () => void;
  onCancel?: () => void;
  className?: string;
}

export const FieldModal: React.FC<FieldModalProps> = ({
  icon,
  headingText = 'Modal Title',
  fields = [],
  confirmButtonText = 'Submit',
  cancelButtonText = 'Cancel',
  onConfirm,
  onCancel,
  className = '',
}) => {
  const renderField = (field: FieldConfig, index: number) => {
    const commonProps = {
      name: field.name,
      label: field.label,
      placeholder: field.placeholder,
      required: field.required,
      disabled: field.disabled,
    };

    switch (field.type) {
      case 'input':
        return (
          <InputField
            {...commonProps}
             key={index}
            value={field.value as string}
            onChange={field.onChange}
          />
        );

      case 'dropdown':
        return (
          <DropdownField
            {...commonProps}
             key={index}
            value={field.value as string}
            onChange={field.onChange}
            options={field.options}
          />
        );

    case 'checkbox':
  return (
    <CheckboxField
      key={index}
      name={field.name}
      label={field.label}
      checked={field.value as boolean}
      onChange={(e) => {
        if (field.onChange) {
          field.onChange(e);
        }
      }}
      disabled={field.disabled}
    />
  );

      case 'textarea':
        return (
          <TextAreaField
            {...commonProps}
             key={index}
            value={field.value as string}
            onChange={field.onChange}
            rows={field.rows}
          />
        );

      case 'date':
        return (
          <DateField
            {...commonProps}
             key={index}
            value={field.value as string}
            onChange={field.onChange}
            min={field.min}
            max={field.max}
          />
        );

      case 'search':
        return (
          <SearchInput
            key={index}
            placeholder={field.placeholder}
            value={field.value as string}
            onChange={field.onChange}
            disabled={field.disabled}
            showIcon={field.showIcon}
          />
        );

      default:
        return null;
    }
  };

  return (
    <div
className={`w-full max-w-xl p-7 max-[500px]:p-5 max-[350px]:p-4 mx-4 max-[500px]:mx-3 max-[350px]:mx-2 bg-white rounded-[30px] max-[500px]:rounded-[20px] inline-flex flex-col justify-start items-center gap-7 max-[500px]:gap-5 ${className}`}
    >
      <div className="self-stretch flex flex-col justify-start items-center gap-5">
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

      <div className="self-stretch flex flex-col justify-start items-center gap-10">
        <div className="self-stretch flex flex-col justify-start items-start gap-5">
          {fields.map((field, index) => renderField(field, index))}
        </div>

        <div className="self-stretch inline-flex justify-start items-start gap-2.5">
          <div className="w-40">
            <NonBgButton
              text={cancelButtonText}
              onClick={onCancel}
              borderColor="border-Selected"
              textColor="text-Selected"
            />
          </div>

          <div className="flex-1">
            <GlobalButton
              text={confirmButtonText}
              onClick={onConfirm}
              bgColor="bg-primary-red"
            />
          </div>
        </div>
      </div>
    </div>
  );
};