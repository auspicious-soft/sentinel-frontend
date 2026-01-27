"use client";

import { GlobalButton } from "@/components/Buttons/GlobalButton";
import { DropdownField } from "@/components/Fields/DropdownField";
import FileUploadField from "@/components/Fields/FileUploadField";
import { InputField } from "@/components/Fields/InputField";
import { useState } from "react";

const AddNewCompany = () => {
  const [formData, setFormData] = useState({
    name: "",
    parent: "",
    phone: "",
    email: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    fax: "",
    contactManager: "",
    companyId: "",
    billingPO: "",
    logo: null as File | null,
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileSelect = (file: File | null) => {
    setFormData((prev) => ({ ...prev, logo: file }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission here
  };

  const parentOptions = [
    { label: "AAA", value: "aaa" },
    { label: "BBB", value: "bbb" },
    { label: "CCC", value: "ccc" },
  ];

  return (
    <div className="w-full bg-gray-50">
      <form
        onSubmit={handleSubmit}
        className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8"
      >
        {/* Left Side - Logo Upload */}
        <div className="lg:w-96 shrink-0 h-full">
          <div className="p-5 bg-medium-blue rounded-[20px] h-full">
            <FileUploadField
              label="Upload Logo"
              onFileSelect={handleFileSelect}
              accept="image/*"
            />
          </div>
        </div>

        {/* Right Side - Form Fields */}
        <div className="flex-1 px-7 py-7 bg-medium-blue rounded-[20px]">
          <div className="w-full flex flex-col gap-10">
            <div className="p-4 rounded-2xl border border-white flex flex-col gap-5">
              {/* Name */}
              <InputField
                label="Name"
                placeholder="Enter name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />

              {/* Parent Select */}
              <DropdownField
                label="Select parent"
                name="parent"
                value={formData.parent}
                onChange={handleInputChange}
                options={parentOptions}
                placeholder="Select parent company"
                required
              />

              {/* Phone & Email */}
              <div className="flex flex-col w-full lg:flex-row gap-5">
                <InputField
                  label="Phone"
                  placeholder="+1 547 589 5698"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="flex-1"
                />
                <InputField
                  label="Email"
                  placeholder="mail@dummymail.com"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="flex-1"
                />
              </div>

              {/* Address */}
              <InputField
                label="Address"
                placeholder="Enter full address"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                required
              />

              {/* City, State, Zip */}
              <div className="flex flex-col lg:flex-row gap-5">
                <InputField
                  label="City"
                  placeholder="City Here"
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  required
                />
                <InputField
                  label="State"
                  placeholder="State"
                  name="state"
                  value={formData.state}
                  onChange={handleInputChange}
                  required
                />
                <InputField
                  label="Zip"
                  placeholder="125478"
                  name="zip"
                  value={formData.zip}
                  onChange={handleInputChange}
                  required
                />
              </div>

              {/* Fax */}
              <InputField
                label="Fax"
                placeholder="+1 547 589 5698"
                name="fax"
                type="tel"
                value={formData.fax}
                onChange={handleInputChange}
                required
              />

              {/* Contact Manager */}
              <InputField
                label="Contact manager"
                placeholder="Enter contact manager"
                name="contactManager"
                value={formData.contactManager}
                onChange={handleInputChange}
                required
              />

              {/* Company ID */}
              <InputField
                label="Company ID"
                placeholder="Enter company ID"
                name="companyId"
                value={formData.companyId}
                onChange={handleInputChange}
                required
              />

              {/* Billing PO# */}
              <InputField
                label="Billing PO#"
                placeholder="Enter billing PO number"
                name="billingPO"
                value={formData.billingPO}
                onChange={handleInputChange}
                required
              />

              {/* Billing Sort Preference - Radio buttons */}
              <div className="self-stretch flex flex-col justify-start items-start gap-3.5">
                <div className="justify-center text-Paragraph text-xs font-normal font-['Plus_Jakarta_Sans']">
                  Billing sort preference
                </div>
                <div className="self-stretch inline-flex justify-start items-start gap-12">
                  <label className="flex justify-start items-center gap-1.25 cursor-pointer">
                    <input
                      type="radio"
                      name="billingPreference"
                      value="preference"
                      className="sr-only peer"
                    />
                    <div className="w-4 h-4 p-0.75 bg-white rounded-[99px] -outline-offset-1 outline-blue-950 inline-flex flex-col justify-center items-center gap-2.5 peer-checked:bg-blue-950">
                      <div className="w-2.5 h-2.5 bg-white rounded-full peer-checked:bg-white" />
                    </div>
                    <span className="justify-start text-Primary-Blue text-sm font-normal font-['Plus_Jakarta_Sans'] capitalize">
                      Billing sort preference
                    </span>
                  </label>
                  <label className="flex justify-start items-center gap-1.25 cursor-pointer">
                    <input
                      type="radio"
                      name="billingPreference"
                      value="policy"
                      className="sr-only peer"
                    />
                    <div className="w-4 h-4 p-0.75 bg-white rounded-[99px] -outline-offset-1 outline-neutral-200 inline-flex flex-col justify-center items-center gap-2.5 peer-checked:bg-blue-950">
                      <div className="w-2.5 h-2.5 bg-white rounded-full peer-checked:bg-white" />
                    </div>
                    <span className="justify-center text-Paragraph text-sm font-normal font-['Plus_Jakarta_Sans'] capitalize">
                      By policy number
                    </span>
                  </label>
                </div>
              </div>
            </div>

            <GlobalButton
              type="submit"
              text={" Insert Company"}
              bgColor="bg-primary-blue"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddNewCompany;
