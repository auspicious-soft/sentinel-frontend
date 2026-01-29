"use client";

import { GlobalButton } from "@/components/Buttons/GlobalButton";
import { CheckboxField } from "@/components/Fields/CheckboxField";
import { DateField } from "@/components/Fields/DateField";
import { DropdownField } from "@/components/Fields/DropdownField";
import { InputField } from "@/components/Fields/InputField";
import { TextAreaField } from "@/components/Fields/TextAreaField";
import { DIV_HEAD, TAB_HEADER } from "@/styles/assets";
import { useRouter } from "next/navigation";
import { useState } from "react";

const SubmitRequest = () => {
    const router = useRouter()
  const [formData, setFormData] = useState({
    startDate: "",
    endDate: "",
    insuredName: "",
    policyNumber: "",
    address: "",
    deletedInspections: false,
  
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {

    console.log("Form submitted:", formData);
    router.push("/admin/search-inspections/123")
  };

  // Options for dropdowns
  const insuredOptions = [
    { value: "Insure1", label: "Insure 1" },
    { value: "Insure2", label: "Insure 2" },
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
      <div className="flex flex-col gap-8 ">
        <span className={TAB_HEADER}>Request New Inspection</span>

        {/* Basic Details Section */}
        <div className="flex flex-col gap-4 p-7 bg-medium-blue rounded-[20px]">
          <span className={DIV_HEAD}>Basic Details</span>
          <div className="p-4 rounded-2xl border border-white flex flex-col gap-5">
            {/* Company & Division */}
            <div className="flex flex-col w-full lg:flex-row gap-5">
                    <DateField
                label="Start Date"
                name="startDate"
                placeholder="MM/DD/YYYY"
                value={formData.startDate}
                className="flex-1"
                onChange={handleInputChange}
              />
          
            <DateField
                label="End Date"
                name="endDate"
                placeholder="MM/DD/YYYY"
                value={formData.endDate}
                className="flex-1"
                onChange={handleInputChange}
              />
           </div>
        
          </div>
        </div>

        {/* Inspection Details Section */}
        <div className="flex flex-col gap-4 p-7 bg-medium-blue rounded-[20px]">
          <span className={DIV_HEAD}>Search By Other Details</span>
          <div className="p-4 rounded-2xl border border-white flex flex-col gap-5">
          

            {/* Special Attention */}
            <DropdownField
                label="Insured Name"
                placeholder="Select"
                name="insuredName"
                className="flex-1"
                value={formData.insuredName}
                onChange={handleInputChange}
                options={insuredOptions}
              />

            {/* Additional Comments */}
            <InputField
              label="Policy Number"
              placeholder="xxxxxxxxxx"
              name="policyNumber"
              value={formData.policyNumber}
               onChange={handleInputChange}
             
            />
              <InputField
              label="Address"
              placeholder="Add Address"
              name="address"
              value={formData.address}
               onChange={handleInputChange}
             
            />

 <CheckboxField
      key={"1"}
      name={"deletedInspections"}
      label={"Show Deleted Inspections"}
      checked={formData.deletedInspections as boolean}
     onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
    setFormData({
      ...formData,
      deletedInspections: e.target.checked,
    })
}
    />

        
          </div>
        </div>

        <GlobalButton
          type="button"
          onClick={handleSubmit}
          text="Search"
          bgColor="bg-primary-blue"
        />
      </div>
    </div>
  );
};

export default SubmitRequest;