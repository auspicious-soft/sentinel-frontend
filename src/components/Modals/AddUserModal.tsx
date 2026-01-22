import React, { ReactNode } from 'react';
import Image, { StaticImageData } from 'next/image';
import { GlobalButton } from '../Buttons/GlobalButton';
import { NonBgButton } from '../Buttons/NonBgButton';
import { InputField } from '../Fields/InputField';
import { DropdownField } from '../Fields/DropdownField';
import { CheckboxField } from '../Fields/CheckboxField';
import { MODAL_HEADER } from '@/styles/assets';

interface AddUserFormData {
  company: string;
  firstName: string;
  lastName: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  phone: string;
  email: string;
  isAdministrator: boolean;
}

interface AddUserModalProps {
  icon?: ReactNode | string | StaticImageData;
  headingText?: string;
  formData: AddUserFormData;
  onFieldChange: (field: keyof AddUserFormData, value: string | boolean) => void;
  companyOptions?: { value: string; label: string }[];
  stateOptions?: { value: string; label: string }[];
  confirmButtonText?: string;
  cancelButtonText?: string;
  onConfirm?: () => void;
  onCancel?: () => void;
  className?: string;
}

export const AddUserModal: React.FC<AddUserModalProps> = ({
  icon,
  headingText = 'Add User',
  formData,
  onFieldChange,
  companyOptions = [],
  stateOptions = [],
  confirmButtonText = 'Add',
  cancelButtonText = 'Cancel',
  onConfirm,
  onCancel,
  className = '',
}) => {
  return (
    <div
      className={`w-full max-w-xl p-7 bg-white rounded-[30px] inline-flex flex-col justify-start items-center gap-7 ${className}`}
    >
      {/* Header Section */}
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
          <DropdownField
            label="Select Company"
            placeholder="Select Company"
            value={formData.company}
            onChange={(e) => onFieldChange('company', e.target.value)}
            options={companyOptions}
            required
          />

          <div className="self-stretch inline-flex justify-start items-start gap-5">
            <div className="flex-1">
              <InputField
                label="First Name"
                placeholder=""
                value={formData.firstName}
                onChange={(e) => onFieldChange('firstName', e.target.value)}
                required
              />
            </div>
            <div className="flex-1">
              <InputField
                label="Last Name"
                placeholder=""
                value={formData.lastName}
                onChange={(e) => onFieldChange('lastName', e.target.value)}
                required
              />
            </div>
          </div>

          <InputField
            label="Address"
            placeholder=""
            value={formData.address}
            onChange={(e) => onFieldChange('address', e.target.value)}
            required
          />

          <div className="self-stretch inline-flex justify-start items-start gap-5">
            <div className="flex-1">
              <InputField
                label="City"
                placeholder=""
                value={formData.city}
                onChange={(e) => onFieldChange('city', e.target.value)}
                required
              />
            </div>
            <div className="flex-1">
              <DropdownField
                label="State"
                placeholder="Select State"
                value={formData.state}
                onChange={(e) => onFieldChange('state', e.target.value)}
                options={stateOptions}
                required
              />
            </div>
            <div className="flex-1">
              <InputField
                label="Zip"
                placeholder=""
                value={formData.zip}
                onChange={(e) => onFieldChange('zip', e.target.value)}
                required
              />
            </div>
          </div>

          <div className="self-stretch inline-flex justify-start items-start gap-5">
            <div className="flex-1">
              <InputField
                label="Phone"
                placeholder=""
                type="tel"
                value={formData.phone}
                onChange={(e) => onFieldChange('phone', e.target.value)}
                required
              />
            </div>
            <div className="flex-1">
              <InputField
                label="Email"
                placeholder=""
                type="email"
                value={formData.email}
                onChange={(e) => onFieldChange('email', e.target.value)}
                required
              />
            </div>
          </div>

          <CheckboxField
            label="Administrator"
            checked={formData.isAdministrator}
            onChange={(e) => onFieldChange('isAdministrator', e.target.checked)}
          />
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

export type { AddUserFormData };