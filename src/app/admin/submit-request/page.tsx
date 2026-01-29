"use client";

import { GlobalButton } from "@/components/Buttons/GlobalButton";
import { DateField } from "@/components/Fields/DateField";
import { DropdownField } from "@/components/Fields/DropdownField";
import { InputField } from "@/components/Fields/InputField";
import { TextAreaField } from "@/components/Fields/TextAreaField";
import { DIV_HEAD, TAB_HEADER } from "@/styles/assets";
import { useState } from "react";

const SubmitRequest = () => {
  const [formData, setFormData] = useState({
    company: "",
    division: "",
    underwriter: "",
    policyNumber: "",
    valuationId: "",
    policyDate: "",
    primaryInsuredName: "",
    secondaryInsuredName: "",
    address: "",
    additionalAddress: "",
    city: "",
    state: "",
    zip: "",
    county: "",
    phone: "",
    inspectionType: "",
    requestDate: "",
    isRush: "",
    houseAppliance: "",
    woodStove: "",
    canine: "",
    producer: "",
    agentPhone: "",
    specialAttention: "",
    additionalComments: "",
    frontPhotos: "",
    rearPhotos: "",
    interiorPhotos: "",
    outBuildingPhotos: "",
    otherPhotos: "",
    coverage: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  // Options for dropdowns
  const companyOptions = [
    { value: "company1", label: "Company 1" },
    { value: "company2", label: "Company 2" },
  ];

  const divisionOptions = [
    { value: "div1", label: "Division 1" },
    { value: "div2", label: "Division 2" },
  ];

  const underwriterOptions = [
    { value: "uw1", label: "Underwriter 1" },
    { value: "uw2", label: "Underwriter 2" },
  ];

  const stateOptions = [
    { value: "CA", label: "California" },
    { value: "TX", label: "Texas" },
    { value: "NY", label: "New York" },
  ];

  const inspectionTypeOptions = [
    { value: "type1", label: "Residential Exterior" },
    { value: "type2", label: "Commercial" },
  ];

  const yesNoOptions = [
    { value: "yes", label: "Yes" },
    { value: "no", label: "No" },
  ];

  return (
    <div className="w-full bg-[#F4F9FF] h-full p-5 rounded-[10px]">
      <form onSubmit={handleSubmit} className="flex flex-col gap-8 ">
        <span className={TAB_HEADER}>Request New Inspection</span>

        {/* Basic Details Section */}
        <div className="flex flex-col gap-4 p-7 bg-medium-blue rounded-[20px]">
          <span className={DIV_HEAD}>Basic Details</span>
          <div className="p-4 rounded-2xl border border-white flex flex-col gap-5">
            {/* Company & Division */}
            <div className="flex flex-col w-full lg:flex-row gap-5">
              <DropdownField
                label="Select Company"
                placeholder="Select"
                name="company"
                className="flex-1"
                value={formData.company}
                onChange={handleInputChange}
                options={companyOptions}
                required
              />
              <DropdownField
                label="Select Division"
                placeholder="Select"
                name="division"
                className="flex-1"
                value={formData.division}
                onChange={handleInputChange}
                options={divisionOptions}
                required
              />
            </div>

            {/* Underwriter & Policy Number */}
            <div className="flex flex-col w-full lg:flex-row gap-5">
              <DropdownField
                label="Select Underwriter"
                placeholder="Select"
                name="underwriter"
                className="flex-1"
                value={formData.underwriter}
                onChange={handleInputChange}
                options={underwriterOptions}
                required
              />
              <InputField
                label="Policy Number"
                placeholder="xxxxxxxxxx"
                name="policyNumber"
                className="flex-1"
                value={formData.policyNumber}
                onChange={handleInputChange}
                required
              />
            </div>

            {/* Valuation ID & Policy Date */}
            <div className="flex flex-col w-full lg:flex-row gap-5">
              <InputField
                label="Valuation Id"
                placeholder="xxxxxxxxxx"
                name="valuationId"
                className="flex-1"
                value={formData.valuationId}
                onChange={handleInputChange}
              />
              <DateField
                label="Policy Eff Date"
                name="policyDate"
                placeholder="MM/DD/YYYY"
                value={formData.policyDate}
                className="flex-1"
                onChange={handleInputChange}
              />
            </div>

            {/* Insured Names */}
            <div className="flex flex-col w-full lg:flex-row gap-5">
              <InputField
                label="Insured Name 1"
                placeholder="xxxxxxxxxx"
                name="primaryInsuredName"
                className="flex-1"
                value={formData.primaryInsuredName}
                onChange={handleInputChange}
                required
              />
              <InputField
                label="Insured Name 2"
                placeholder="xxxxxxxxxx"
                name="secondaryInsuredName"
                className="flex-1"
                value={formData.secondaryInsuredName}
                onChange={handleInputChange}
              />
            </div>

            {/* Address & Additional Address */}
            <div className="flex flex-col w-full lg:flex-row gap-5">
              <InputField
                label="Address"
                placeholder="Type your address here"
                name="address"
                className="flex-1"
                value={formData.address}
                onChange={handleInputChange}
                required
              />
              <InputField
                label="Additional Address"
                placeholder="Type your address here"
                name="additionalAddress"
                className="flex-1"
                value={formData.additionalAddress}
                onChange={handleInputChange}
              />
            </div>

            {/* City, State, Zip */}
            <div className="flex flex-col lg:flex-row gap-5">
              <InputField
                label="City"
                placeholder="City Here"
                name="city"
                className="flex-1"
                value={formData.city}
                onChange={handleInputChange}
                required
              />
              <DropdownField
                label="State"
                placeholder="State"
                name="state"
                className="flex-1"
                value={formData.state}
                onChange={handleInputChange}
                options={stateOptions}
                required
              />
              <InputField
                label="Zip"
                placeholder="125478"
                name="zip"
                className="flex-1"
                value={formData.zip}
                onChange={handleInputChange}
                required
              />
            </div>

            {/* County & Phone */}
            <div className="flex flex-col w-full lg:flex-row gap-5">
              <DropdownField
                label="County"
                placeholder="+1 547 589 5698"
                name="county"
                className="flex-1"
                value={formData.county}
                onChange={handleInputChange}
                options={[]}
              />
              <InputField
                label="Phone"
                placeholder="xxx-xxx-xxxx"
                name="phone"
                type="tel"
                className="flex-1"
                value={formData.phone}
                onChange={handleInputChange}
              />
            </div>
          </div>
        </div>

        {/* Inspection Details Section */}
        <div className="flex flex-col gap-4 p-7 bg-medium-blue rounded-[20px]">
          <span className={DIV_HEAD}>Inspection Details</span>
          <div className="p-4 rounded-2xl border border-white flex flex-col gap-5">
            {/* Inspection Type & Request Date */}
            <div className="flex flex-col w-full lg:flex-row gap-5">
              <DropdownField
                label="Inspection Type"
                placeholder="Select"
                name="inspectionType"
                className="flex-1 lg:flex-2"
                value={formData.inspectionType}
                onChange={handleInputChange}
                options={inspectionTypeOptions}
                required
              />
              <DateField
                label="Request Date"
                name="requestDate"
                value={formData.requestDate}
                className="flex-1"
                onChange={handleInputChange}
              />
            </div>

            {/* Rush Service, House Appliance, Wood Stove, Canine */}
            <div className="flex flex-col lg:flex-row gap-5">
              <DropdownField
                label="Rush Service"
                placeholder="No"
                name="isRush"
                className="flex-1"
                value={formData.isRush}
                onChange={handleInputChange}
                options={yesNoOptions}
              />
              <DropdownField
                label="Electrical / Heat/ Plumbing"
                placeholder="No"
                name="houseAppliance"
                className="flex-1"
                value={formData.houseAppliance}
                onChange={handleInputChange}
                options={yesNoOptions}
              />
              <DropdownField
                label="Wood Stove"
                placeholder="No"
                name="woodStove"
                className="flex-1"
                value={formData.woodStove}
                onChange={handleInputChange}
                options={yesNoOptions}
              />
              <DropdownField
                label="Canine"
                placeholder="No"
                name="canine"
                className="flex-1"
                value={formData.canine}
                onChange={handleInputChange}
                options={yesNoOptions}
              />
            </div>

            {/* Producer & Agent Phone */}
            <div className="flex flex-col w-full lg:flex-row gap-5">
              <InputField
                label="Producer"
                placeholder="xxxxxxxxxx"
                name="producer"
                className="flex-1"
                value={formData.producer}
                onChange={handleInputChange}
              />
              <InputField
                label="Agent Phone"
                placeholder="xxx-xxx-xxxx"
                name="agentPhone"
                type="tel"
                className="flex-1"
                value={formData.agentPhone}
                onChange={handleInputChange}
                required
              />
            </div>

            {/* Special Attention */}
            <InputField
              label="Special Attention"
              placeholder="xxxxxxxxxx"
              name="specialAttention"
              value={formData.specialAttention}
              onChange={handleInputChange}
            />

            {/* Additional Comments */}
            <TextAreaField
              label="Additional Comments"
              placeholder="xxxxxxxxxx"
              name="additionalComments"
              value={formData.additionalComments}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  additionalComments: e.target.value,
                })
              }
              rows={4}
            />

            {/* Photos Row 1 */}
            <div className="flex flex-col lg:flex-row gap-5">
              <InputField
                label="Front Photos"
                placeholder="xxx-xxx-xxxx"
                name="frontPhotos"
                className="flex-1"
                value={formData.frontPhotos}
                onChange={handleInputChange}
                required
              />
              <InputField
                label="Rear Photos"
                placeholder="xxx-xxx-xxxx"
                name="rearPhotos"
                className="flex-1"
                value={formData.rearPhotos}
                onChange={handleInputChange}
              />
              <InputField
                label="Interior Photos"
                placeholder="xxx-xxx-xxxx"
                name="interiorPhotos"
                className="flex-1"
                value={formData.interiorPhotos}
                onChange={handleInputChange}
              />
            </div>

            {/* Photos Row 2 */}
            <div className="flex flex-col w-full lg:flex-row gap-5">
              <InputField
                label="Outbuilding Photo(s)"
                placeholder="xxx-xxx-xxxx"
                name="outBuildingPhotos"
                className="flex-1"
                value={formData.outBuildingPhotos}
                onChange={handleInputChange}
              />
              <InputField
                label="Other Photos"
                placeholder="xxxxxxxxxxxxxxx"
                name="otherPhotos"
                className="flex-1"
                value={formData.otherPhotos}
                onChange={handleInputChange}
              />
            </div>

            {/* Coverage A */}
            <InputField
              label="Coverage A"
              placeholder="xxx-xxx-xxxx"
              name="coverage"
              value={formData.coverage}
              onChange={handleInputChange}
            />
          </div>
        </div>

        {/* Submit Button */}
        <GlobalButton
          type="submit"
          text="Submit Request"
          bgColor="bg-primary-blue"
        />
      </form>
    </div>
  );
};

export default SubmitRequest;