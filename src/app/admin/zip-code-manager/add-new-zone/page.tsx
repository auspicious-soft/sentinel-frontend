"use client";

import { GlobalButton } from "@/components/Buttons/GlobalButton";
import { DropdownField } from "@/components/Fields/DropdownField";
import { InputField } from "@/components/Fields/InputField";
import { TAB_HEADER } from "@/styles/assets";
import { useState } from "react";
import { ZipCodeManager } from "@/components/ZipCodeSelector";

interface ZipCode {
  id: number;
  code: string;
  city: string;
}

interface PricingRow {
  inspectionType: string;
  inspectionCost: string;
  fieldRepCommission: string;
  qaCommission: string;
}

const AddNewZone = () => {
  const [formData, setFormData] = useState({
    zoneName: "",
    state: "",
    county: "",
  });

  const [selectedZipCodes, setSelectedZipCodes] = useState<ZipCode[]>([]);

  const [pricingData, setPricingData] = useState<PricingRow[]>([
    {
      inspectionType: "Residential Exterior Fire/Liability",
      inspectionCost: "10",
      fieldRepCommission: "5",
      qaCommission: "3",
    },
    {
      inspectionType: "Residential Exterior Fire/Liability w/ Repl Cost",
      inspectionCost: "12",
      fieldRepCommission: "5",
      qaCommission: "3",
    },
    {
      inspectionType: "Residential Interior/Exterior Fire/ Liability",
      inspectionCost: "20",
      fieldRepCommission: "10",
      qaCommission: "3",
    },
    {
      inspectionType: "Residential Interior/Exterior Fire/ Liability w/ Repl Cost",
      inspectionCost: "22",
      fieldRepCommission: "10",
      qaCommission: "3",
    },
    {
      inspectionType: "Residential Exterior Fire/ Liability Photo Only",
      inspectionCost: "8",
      fieldRepCommission: "5",
      qaCommission: "3",
    },
    {
      inspectionType: "Residential Exterior Fire/ Liability over 3,000 Sq Ft",
      inspectionCost: "30",
      fieldRepCommission: "15",
      qaCommission: "4",
    },
    {
      inspectionType: "Residential Exterior Fire/ Liability over 3,000 Sq Ft w/ Repl Cost",
      inspectionCost: "32",
      fieldRepCommission: "15",
      qaCommission: "4",
    },
    {
      inspectionType: "Residential Interior/Exterior Fire/ Liability over 3,000 Sq Ft",
      inspectionCost: "40",
      fieldRepCommission: "20",
      qaCommission: "4",
    },
    {
      inspectionType: "Residential Interior/Exterior Fire/ Liability over 3,000 Sq Ft w/ Repl Cost",
      inspectionCost: "42",
      fieldRepCommission: "20",
      qaCommission: "4",
    },
  ]);

  const initialAvailableZips: ZipCode[] = [
    { id: 1, code: "62445", city: "Mount Erie" },
    { id: 2, code: "62446", city: "Springfield" },
    { id: 3, code: "62447", city: "Lincoln" },
    { id: 4, code: "62448", city: "Charleston" },
    { id: 5, code: "62449", city: "Decatur" },
    { id: 6, code: "62450", city: "Peoria" },
    { id: 7, code: "62451", city: "Rockford" },
    { id: 8, code: "62452", city: "Aurora" },
    { id: 9, code: "62453", city: "Chicago" },
    { id: 10, code: "62454", city: "Naperville" },
  ];

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handlePricingChange = (
    index: number,
    field: keyof PricingRow,
    value: string
  ) => {
    setPricingData((prev) => {
      const updated = [...prev];
      updated[index] = { ...updated[index], [field]: value };
      return updated;
    });
  };

  const handleZipCodeSelectionChange = (selectedZips: ZipCode[]) => {
    setSelectedZipCodes(selectedZips);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", {
      formData,
      selectedZipCodes,
      pricingData,
    });
  };

  return (
    <div className="w-full bg-gray-50 min-h-screen p-4 sm:p-6 lg:p-8">
      <form onSubmit={handleSubmit} className="max-w-7xl mx-auto">
        <div className="px-4 sm:px-6 lg:px-7 py-5 sm:py-6 lg:py-7 bg-sky-50 rounded-[20px]">
          <div className="w-full flex flex-col gap-4 sm:gap-5">
            {/* Zone Details Section */}
            <div className="flex flex-col gap-1.5">
              <span className={`${TAB_HEADER} w-full relative`}>
                Zone Details
              </span>
              <div className="p-3 sm:p-4 rounded-2xl border border-white flex flex-col gap-4 sm:gap-5">
                <div className="flex flex-col w-full lg:flex-row gap-4 sm:gap-5">
                  <InputField
                    label="Name of Zone"
                    placeholder="Type name here"
                    name="zoneName"
                    type="text"
                    value={formData.zoneName}
                    onChange={handleInputChange}
                    required
                    className="flex-1"
                  />
                  <DropdownField
                    label="Select State"
                    placeholder="Michigan"
                    name="state"
                    className="flex-1"
                    value={formData.state}
                    onChange={handleInputChange}
                    required
                  />
                  <DropdownField
                    label="Select County"
                    placeholder="Michigan"
                    name="county"
                    className="flex-1"
                    value={formData.county}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                {/* ZipCode Manager */}
                <div className="w-full">
                  <ZipCodeManager
                    availableZips={initialAvailableZips}
                    selectedZips={selectedZipCodes}
                    onSelectionChange={handleZipCodeSelectionChange}
                    title="Select Zip"
                    maxHeight="200px"
                    className="w-full"
                  />
                </div>
              </div>
            </div>

            {/* Pricing Section */}
            <div className="flex flex-col gap-1.5">
              <span className={`${TAB_HEADER} w-full relative`}>Pricing</span>
              <div className="p-3 sm:p-4 rounded-2xl border border-white flex flex-col gap-4 sm:gap-5">
                <div className="w-full flex flex-col gap-4">
                  {/* Desktop Pricing Table - Hidden on Mobile */}
                  <div className="hidden lg:block">
                    {/* Pricing Header */}
                    <div className="grid grid-cols-[3fr_1fr_1fr_1fr] gap-5 mb-4">
                      <div className="text-Placeholder text-sm font-medium font-['Plus_Jakarta_Sans'] leading-8">
                        Inspection Type
                      </div>
                      <div className="text-Placeholder text-sm font-medium font-['Plus_Jakarta_Sans'] leading-8">
                        Inspection Cost
                      </div>
                      <div className="text-Placeholder text-sm font-medium font-['Plus_Jakarta_Sans'] leading-8">
                        Field Rep Commission
                      </div>
                      <div className="text-Placeholder text-sm font-medium font-['Plus_Jakarta_Sans'] leading-8">
                        QA Commission
                      </div>
                    </div>

                    {/* Pricing Rows */}
                    <div className="flex flex-col gap-1.5">
                      {pricingData.map((row, index) => (
                        <div
                          key={index}
                          className="grid grid-cols-[3fr_1fr_1fr_1fr] gap-5 items-center"
                        >
                          <div className="px-3.5 py-1 bg-sky-50 rounded-[10px] border border-white">
                            <div className="text-Placeholder text-sm font-medium font-['Plus_Jakarta_Sans'] leading-8">
                              {row.inspectionType}
                            </div>
                          </div>
                          <InputField
                            placeholder="$10"
                            name={`inspectionCost-${index}`}
                            type="text"
                            value={`$${row.inspectionCost}`}
                            onChange={(e) =>
                              handlePricingChange(
                                index,
                                "inspectionCost",
                                e.target.value.replace("$", "")
                              )
                            }
                            customHeight="10"
                            className="flex-1"
                          />
                          <InputField
                            placeholder="$5"
                            name={`fieldRepCommission-${index}`}
                            type="text"
                            value={`$${row.fieldRepCommission}`}
                            onChange={(e) =>
                              handlePricingChange(
                                index,
                                "fieldRepCommission",
                                e.target.value.replace("$", "")
                              )
                            }
                            className="flex-1"
                            customHeight="10"
                          />
                          <InputField
                            placeholder="$3"
                            name={`qaCommission-${index}`}
                            type="text"
                            value={`$${row.qaCommission}`}
                            onChange={(e) =>
                              handlePricingChange(
                                index,
                                "qaCommission",
                                e.target.value.replace("$", "")
                              )
                            }
                            className="flex-1"
                            customHeight="10"
                          />
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Mobile Pricing Cards - Visible only on Mobile/Tablet */}
                  <div className="lg:hidden flex flex-col gap-4">
                    {pricingData.map((row, index) => (
                      <div
                        key={index}
                        className="p-4 bg-white rounded-[10px] border border-gray-200 flex flex-col gap-3"
                      >
                        <div className="px-3 py-2 bg-sky-50 rounded-[10px] border border-white">
                          <div className="text-Paragraph text-sm font-medium font-['Plus_Jakarta_Sans']">
                            {row.inspectionType}
                          </div>
                        </div>
                        
                        <div className="flex flex-col sm:flex-row gap-3">
                          <InputField
                            label="Inspection Cost"
                            placeholder="$10"
                            name={`inspectionCost-${index}`}
                            type="text"
                            value={`$${row.inspectionCost}`}
                            onChange={(e) =>
                              handlePricingChange(
                                index,
                                "inspectionCost",
                                e.target.value.replace("$", "")
                              )
                            }
                            className="flex-1"
                          />
                          <InputField
                            label="Field Rep Commission"
                            placeholder="$5"
                            name={`fieldRepCommission-${index}`}
                            type="text"
                            value={`$${row.fieldRepCommission}`}
                            onChange={(e) =>
                              handlePricingChange(
                                index,
                                "fieldRepCommission",
                                e.target.value.replace("$", "")
                              )
                            }
                            className="flex-1"
                          />
                        </div>
                        
                        <InputField
                          label="QA Commission"
                          placeholder="$3"
                          name={`qaCommission-${index}`}
                          type="text"
                          value={`$${row.qaCommission}`}
                          onChange={(e) =>
                            handlePricingChange(
                              index,
                              "qaCommission",
                              e.target.value.replace("$", "")
                            )
                          }
                          className="w-full sm:w-1/2"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <button
                type="button"
                className="text-primary-blue text-sm font-medium font-['Plus_Jakarta_Sans'] underline leading-8 text-end cursor-pointer hover:text-sky-700 transition-colors"
              >
                + Add Override For Company
              </button>
            </div>

            <GlobalButton type="submit" text="Save" bgColor="bg-sky-800" />
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddNewZone;