import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { GlobalButton } from '../Buttons/GlobalButton';
import { InputField } from '../Fields/InputField';
import logo from '../../../public/images/logo1.png';
import eyeOpen from '../../../public/icons/eyeOpen.svg';
import eyeClose from '../../../public/icons/eyeClosed.svg';

export type AuthFieldType = 'text' | 'email' | 'password' | 'tel' | 'number';

export interface AuthFieldConfig {
  type: AuthFieldType;
  name: string;
  label: string;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  showPasswordToggle?: boolean;
}

interface AuthFormProps {
  heading: string;
  subheading?: string;
  fields: AuthFieldConfig[];
  buttonText: string;
  onSubmit: (e: React.FormEvent) => void;
  showForgotPassword?: boolean;
  forgotPasswordText?: string;
  forgotPasswordLink?: string;
  bottomText?: string;
  bottomLinkText?: string;
  bottomLink?: string;
  isLoading?: boolean;
  className?: string;
}

export const AuthForm: React.FC<AuthFormProps> = ({
  heading,
  subheading,
  fields,
  buttonText,
  onSubmit,
  showForgotPassword = false,
  forgotPasswordText = 'Forgot Password?',
  forgotPasswordLink = '/forgot-password',
  bottomText,
  bottomLinkText,
  bottomLink,
  isLoading = false,
  className = '',
}) => {
  const [showPasswords, setShowPasswords] = React.useState<Record<string, boolean>>({});

  const togglePasswordVisibility = (fieldName: string) => {
    setShowPasswords((prev) => ({
      ...prev,
      [fieldName]: !prev[fieldName],
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(e);
  };

  return (
    <div
      className={`px-10 py-5 bg-white/70 rounded-[40px] -outline-offset-1 outline-zinc-200 inline-flex flex-col justify-start items-center gap-4 ${className}`}
    >
      <Image
        src={logo}
        alt="Logo"
        width={206}
        height={73}
        className="w-44 h-20 object-contain mix-blend-multiply"
        priority
      />

      <div className="w-96 max-w-96 flex flex-col justify-start items-start gap-7">
        <div className="self-stretch flex flex-col justify-center items-center gap-2.5">
          <div className="w-80 text-center justify-center text-Selected text-3xl font-semibold font-['Plus_Jakarta_Sans'] tracking-tight">
            {heading}
          </div>
          {subheading && (
            <div className="self-stretch text-center justify-center text-Placeholder text-xs font-medium font-['Plus_Jakarta_Sans']">
              {subheading}
            </div>
          )}
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="self-stretch flex flex-col justify-start items-center gap-5">
          <div className="self-stretch flex flex-col justify-start items-start gap-3.5">
            {/* Fields Container */}
            <div className="self-stretch flex flex-col justify-start items-start gap-4">
              {fields.map((field, index) => (
                <div key={index} className="self-stretch inline-flex justify-start items-start gap-5">
                  <div className="flex-1 inline-flex flex-col justify-start items-start gap-1.25">
                    <div className="self-stretch justify-center text-Paragraph text-xs font-normal font-['Plus_Jakarta_Sans']">
                      {field.label}
                    </div>
                    <div className="self-stretch px-3.5 py-2.5 bg-white/70 rounded-[10px] -outline-offset-1 outline-zinc-100 inline-flex justify-between items-center">
                      <input
                        type={
                          field.type === 'password' && field.showPasswordToggle
                            ? showPasswords[field.name]
                              ? 'text'
                              : 'password'
                            : field.type
                        }
                        name={field.name}
                        value={field.value}
                        onChange={field.onChange}
                        placeholder={field.placeholder}
                        required={field.required}
                        className="flex-1 bg-transparent outline-none text-Selected text-sm font-medium font-['Plus_Jakarta_Sans'] leading-8 placeholder:text-Placeholder"
                      />
                      {field.type === 'password' && field.showPasswordToggle && (
                     <button
  type="button"
  onClick={() => togglePasswordVisibility(field.name)}
  className="w-8 h-8 relative shrink-0 ml-2 cursor-pointer"
>
  <Image
    src={showPasswords[field.name] ? eyeOpen : eyeClose}
    alt="Toggle password visibility"
    width={22}
    height={22}
    className='text-gray'
  />
</button>

                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Forgot Password Link */}
            {showForgotPassword && (
              <div className="self-stretch inline-flex justify-end items-start gap-2.5">
                <Link
                  href={forgotPasswordLink}
                  className="justify-center text-Selected text-xs font-medium font-['Plus_Jakarta_Sans'] hover:underline"
                >
                  {forgotPasswordText}
                </Link>
              </div>
            )}
          </div>

          {/* Submit Button */}
          <GlobalButton
            text={buttonText}
            bgColor="bg-sky-800"
            disabled={isLoading}
            className="w-full"
          />
        </form>
      </div>

      {bottomText && (
        <div className="justify-start">
          <span className="text-zinc-700 text-sm font-normal font-['Plus_Jakarta_Sans']">
            {bottomText}{' '}
          </span>
          {bottomLinkText && bottomLink && (
            <Link
              href={bottomLink}
              className="text-zinc-700 text-sm font-medium font-['Plus_Jakarta_Sans'] underline hover:no-underline"
            >
              {bottomLinkText}
            </Link>
          )}
        </div>
      )}
    </div>
  );
};