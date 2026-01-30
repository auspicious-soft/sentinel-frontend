"use client";

import { GlobalButton } from "@/components/Buttons/GlobalButton";
import { InputField } from "@/components/Fields/InputField";
import { useState } from "react";
import Eye from "../../../../public/icons/eyeOpen.svg"
import EyeOff from "../../../../public/icons/eyeClosed.svg"
import Image from "next/image";
const ChangePassword = () => {
  const [formData, setFormData] = useState({
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const [showPasswords, setShowPasswords] = useState({
    oldPassword: false,
    newPassword: false,
    confirmPassword: false,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const togglePasswordVisibility = (field: keyof typeof showPasswords) => {
    setShowPasswords((prev) => ({ ...prev, [field]: !prev[field] }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate passwords match
    if (formData.newPassword !== formData.confirmPassword) {
      alert("New passwords do not match!");
      return;
    }
    
    console.log("Password change submitted:", formData);
  };

  return (
    <div className="w-full">
      <form onSubmit={handleSubmit} className="max-w-7xl mx-auto">
        <div className="p-5 bg-medium-blue rounded-[10px] outline-1 outline-white/20 backdrop-blur-[2.50px] flex flex-col gap-5">
          {/* Header */}
          <div className="flex justify-start items-center gap-5">
            <div className="flex-1 flex justify-start items-center gap-5">
              <h2 className="text-Black-000 text-2xl font-semibold font-['Plus_Jakarta_Sans'] leading-8">
                Change Password
              </h2>
            </div>
          </div>

          {/* Form Fields */}
          <div className="flex flex-col gap-1.5">
            <div className="p-4 rounded-2xl -outline-offset-1 outline-white flex flex-col gap-5">
              {/* Old Password */}
              <div className="relative">
                <InputField
                  label="Old Password"
                  placeholder="*************"
                  name="oldPassword"
                  type={showPasswords.oldPassword ? "text" : "password"}
                  value={formData.oldPassword}
                  onChange={handleInputChange}
                  required
                />
                <button
                  type="button"
                  onClick={() => togglePasswordVisibility("oldPassword")}
                  className="absolute right-3.5 top-12 text-Paragraph hover:text-gray-600 transition-colors"
                  aria-label="Toggle password visibility"
                >
                  {showPasswords.oldPassword ? (
                    <Image
                    src={EyeOff}
                    alt="eyeClose"
                    className="w-4 h-4" />
                  ) : (
                     <Image
                    src={Eye}
                    alt="eyeOpen"
                    className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* New Password */}
              <div className="relative">
                <InputField
                  label="New Password"
                  placeholder="*************"
                  name="newPassword"
                  type={showPasswords.newPassword ? "text" : "password"}
                  value={formData.newPassword}
                  onChange={handleInputChange}
                  required
                />
                <button
                  type="button"
                  onClick={() => togglePasswordVisibility("newPassword")}
                  className="absolute right-3.5 top-12
 text-Paragraph hover:text-gray-600 transition-colors"
                  aria-label="Toggle password visibility"
                >
                  {showPasswords.newPassword ? (
                    <Image
                    src={EyeOff}
                    alt="eyeClose"
                    className="w-4 h-4" />
                  ) : (
                     <Image
                    src={Eye}
                    alt="eyeOpen"
                    className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* Confirm New Password */}
              <div className="relative">
                <InputField
                  label="Confirm New Password"
                  placeholder="*************"
                  name="confirmPassword"
                  type={showPasswords.confirmPassword ? "text" : "password"}
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  required
                />
                <button
                  type="button"
                  onClick={() => togglePasswordVisibility("confirmPassword")}
                  className="absolute right-3.5 top-12
 text-Paragraph hover:text-gray-600 transition-colors"
                  aria-label="Toggle password visibility"
                >
                  {showPasswords.confirmPassword ? (
                   <Image
                    src={EyeOff}
                    alt="eyeClose"
                    className="w-4 h-4" />
                  ) : (
                     <Image
                    src={Eye}
                    alt="eyeOpen"
                    className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <GlobalButton 
            type="submit" 
            text="Save" 
            bgColor="bg-primary-blue" 
          />
        </div>
      </form>
    </div>
  );
};

export default ChangePassword;