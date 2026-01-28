import React from 'react';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import { GlobalButton } from '../Buttons/GlobalButton';
import { InputField } from '../Fields/InputField';
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
  logoSrc?: string | StaticImageData;
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
  logoSrc = '/images/logo1.png',
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
      className={`px-10 py-5 max-[500px]:px-6 max-[500px]:py-4 max-[350px]:px-4 max-[350px]:py-3 bg-white/70 rounded-[40px] max-[500px]:rounded-[20px] -outline-offset-1 outline-zinc-200 inline-flex flex-col justify-start items-center gap-4 ${className}`}
    >
      <Image
        src={logoSrc}
        alt="Logo"
        width={206}
        height={73}
        className="w-44 h-20 max-[500px]:w-36 max-[500px]:h-16 max-[350px]:w-28 max-[350px]:h-12 object-contain mix-blend-multiply"
        priority
      />

      <div className="w-96 max-w-full flex flex-col justify-start items-start gap-7 max-[500px]:gap-5">
        <div className="self-stretch flex flex-col justify-center items-center gap-2.5">
          <div className="w-full text-center justify-center text-Selected text-3xl max-[500px]:text-2xl max-[350px]:text-xl font-semibold font-['Plus_Jakarta_Sans'] tracking-tight px-2">
            {heading}
          </div>
          {subheading && (
            <div className="self-stretch text-center justify-center text-Placeholder text-xs max-[350px]:text-[10px] font-medium font-['Plus_Jakarta_Sans'] px-2">
              {subheading}
            </div>
          )}
        </div>

        <form onSubmit={handleSubmit} className="self-stretch flex flex-col justify-start items-center gap-5 max-[500px]:gap-4">
          <div className="self-stretch flex flex-col justify-start items-start gap-3.5 max-[500px]:gap-3">
            <div className="self-stretch flex flex-col justify-start items-start gap-4 max-[500px]:gap-3">
              {fields.map((field, index) => (
                <div key={index} className="self-stretch inline-flex justify-start items-start gap-5">
                  <div className="flex-1 inline-flex flex-col justify-start items-start gap-1.25">
                    <div className="self-stretch justify-center text-Paragraph text-xs max-[350px]:text-[10px] font-normal font-['Plus_Jakarta_Sans']">
                      {field.label}
                    </div>
                    <div className="self-stretch px-3.5 py-2.5 max-[500px]:px-3 max-[500px]:py-2 max-[350px]:px-2 max-[350px]:py-1.5 bg-white/70 rounded-[10px] -outline-offset-1 outline-zinc-100 inline-flex justify-between items-center">
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
                        className="flex-1 bg-transparent outline-none text-Selected text-sm max-[350px]:text-xs font-medium font-['Plus_Jakarta_Sans'] leading-8 max-[350px]:leading-6 placeholder:text-Placeholder"
                      />
                      {field.type === 'password' && field.showPasswordToggle && (
                        <button
                          type="button"
                          onClick={() => togglePasswordVisibility(field.name)}
                          className="w-8 h-8 max-[350px]:w-6 max-[350px]:h-6 relative shrink-0 ml-2 cursor-pointer"
                        >
                          <Image
                            src={showPasswords[field.name] ? eyeOpen : eyeClose}
                            alt="Toggle password visibility"
                            width={22}
                            height={22}
                            className="text-gray max-[350px]:w-4 max-[350px]:h-4"
                          />
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {showForgotPassword && (
              <div className="self-stretch inline-flex justify-end items-start gap-2.5">
                <Link
                  href={forgotPasswordLink}
                  className="justify-center text-Selected text-xs max-[350px]:text-[10px] font-medium font-['Plus_Jakarta_Sans'] hover:underline"
                >
                  {forgotPasswordText}
                </Link>
              </div>
            )}
          </div>

          <GlobalButton
            text={buttonText}
            bgColor="bg-sky-800"
            disabled={isLoading}
            className="w-full text-sm max-[350px]:text-xs"
            type="submit"
          />
        </form>
      </div>

      {bottomText && (
        <div className="justify-start text-center">
          <span className="text-zinc-700 text-sm max-[350px]:text-xs font-normal font-['Plus_Jakarta_Sans']">
            {bottomText}{' '}
          </span>
          {bottomLinkText && bottomLink && (
            <Link
              href={bottomLink}
              className="text-zinc-700 text-sm max-[350px]:text-xs font-medium font-['Plus_Jakarta_Sans'] underline hover:no-underline"
            >
              {bottomLinkText}
            </Link>
          )}
        </div>
      )}
    </div>
  );
};