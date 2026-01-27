"use client";

import { GlobalButton } from "@/components/Buttons/GlobalButton";
import { DateField } from "@/components/Fields/DateField";
import { DropdownField } from "@/components/Fields/DropdownField";
import { InputField } from "@/components/Fields/InputField";
import { TextAreaField } from "@/components/Fields/TextAreaField";
import { ZipCodeManager } from "@/components/ZipCodeSelector";
import { TAB_HEADER } from "@/styles/assets";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface ZipCode {
  id: number;
  code: string;
  city: string;
}

// Static data - this will be replaced with API call later
const fieldRepStaticData = {
  id: "1234",
  lastName: "Johnson",
  firstName: "Michael",
  phone: "+1 555 123 4567",
  email: "mjohnson@example.com",
  address: "123 Main Street",
  city: "Springfield",
  state: "Illinois",
  zip: "62701",
  cellPhone: "+1 555 987 6543",
  fax: "+1 555 123 4568",
  socialSecurity: "123-45-6789",
  inspectorId: "INS-001",
  startDate: "2023-01-15",
  description: "Experienced field representative with 10+ years in quality inspection.",
  qualityRep: "John Doe",
  workDetailState: "Illinois",
  workDetailCounty: "Sangamon County",
};

const initialAvailableZips: ZipCode[] = [
  { id: 1, code: "62445", city: "Mount Erie" },
  { id: 2, code: "62446", city: "Springfield" },
  { id: 4, code: "62448", city: "Charleston" },
  { id: 6, code: "62450", city: "Peoria" },
  { id: 7, code: "62451", city: "Rockford" },
  { id: 8, code: "62452", city: "Aurora" },
  { id: 10, code: "62454", city: "Naperville" },
];

const initialSelectedZips: ZipCode[] = [
  { id: 3, code: "62447", city: "Lincoln" },
  { id: 5, code: "62449", city: "Decatur" },
  { id: 9, code: "62453", city: "Chicago" },
];

const FieldRepDetail = () => {
  const router = useRouter();

  const [formData, setFormData] = useState(fieldRepStaticData);
  const [selectedZipCodes, setSelectedZipCodes] = useState<ZipCode[]>(initialSelectedZips);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleZipCodeSelectionChange = (selectedZips: ZipCode[]) => {
    setSelectedZipCodes(selectedZips);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Updated Field Rep Data:", {
      ...formData,
      selectedZipCodes,
    });
    
    // TODO: Add API call here
    // await fetch(`/api/field-reps/${formData.id}`, {
    //   method: 'PUT',
    //   body: JSON.stringify({ ...formData, selectedZipCodes }),
    // });
    
    alert("Field Rep updated successfully!");
  };

  const handleCancel = () => {
    router.back();
  };

  return (
    <div className="w-full bg-gray-50 min-h-screen py-6">
      <form onSubmit={handleSubmit} className="max-w-7xl mx-auto gap-8">
        <div className="flex-1 px-7 py-7 bg-medium-blue rounded-[20px]">
          <div className="flex justify-between items-center mb-4">
            <span className={`${TAB_HEADER}`}>
              Edit Field Rep - {formData.firstName} {formData.lastName}
            </span>
            <span className="text-sm text-gray-600">ID: {formData.id}</span>
          </div>

          <div className="w-full flex flex-col gap-4">
            <div className="p-4 rounded-2xl border border-white flex flex-col gap-5">
              {/* Name */}
              <div className="flex flex-col w-full lg:flex-row gap-5">
                <InputField
                  label="Last Name"
                  placeholder="Enter Last Name"
                  name="lastName"
                  type="text"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  required
                  className="flex-1"
                />
                <InputField
                  label="First Name"
                  placeholder="Enter First Name"
                  name="firstName"
                  type="text"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  required
                  className="flex-1"
                />
              </div>

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

              <InputField
                label="Address"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                placeholder="Add Address"
                required
              />

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
                <InputField
                  label="State"
                  placeholder="State"
                  name="state"
                  className="flex-1"
                  value={formData.state}
                  onChange={handleInputChange}
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

              <div className="flex flex-col w-full lg:flex-row gap-5">
                <InputField
                  label="Cell Phone"
                  placeholder="+1 547 589 5698"
                  name="cellPhone"
                  type="tel"
                  value={formData.cellPhone}
                  onChange={handleInputChange}
                  required
                  className="flex-1"
                />
                <InputField
                  label="Fax"
                  placeholder="Fax Number"
                  name="fax"
                  type="text"
                  value={formData.fax}
                  onChange={handleInputChange}
                  required
                  className="flex-1"
                />
              </div>

              <div className="flex flex-col w-full lg:flex-row gap-5">
                <InputField
                  label="Social Security #"
                  placeholder="468-57-4587"
                  name="socialSecurity"
                  className="flex-1"
                  value={formData.socialSecurity}
                  onChange={handleInputChange}
                  required
                />
                <InputField
                  label="Inspector ID"
                  placeholder="id"
                  name="inspectorId"
                  className="flex-1"
                  value={formData.inspectorId}
                  onChange={handleInputChange}
                  required
                />
                <DateField
                  label="Start Date"
                  name="startDate"
                  value={formData.startDate}
                  className="flex-1"
                  onChange={handleInputChange}
                  required
                />
              </div>

              <TextAreaField
                label="Description"
                name="description"
                value={formData.description}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    description: e.target.value,
                  })
                }
                required
              />
            </div>

            <span className={`${TAB_HEADER} w-full relative`}>
              Select Quality Rep
            </span>
            <div className="p-4 rounded-2xl border border-white flex flex-col gap-5">
              <DropdownField
                label="Select"
                placeholder="Select Quality Rep"
                name="qualityRep"
                className="flex-1"
                value={formData.qualityRep}
                onChange={handleInputChange}
                required
              />
            </div>

            <span className={`${TAB_HEADER} w-full relative`}>
              Work details
            </span>
            <div className="p-4 rounded-2xl border border-white flex flex-col gap-4">
              <div className="flex flex-col w-full lg:flex-row gap-5">
                <DropdownField
                  label="State"
                  placeholder="Select State"
                  name="workDetailState"
                  className="flex-1"
                  value={formData.workDetailState}
                  onChange={handleInputChange}
                  required
                />
                <DropdownField
                  label="County"
                  placeholder="Select County"
                  name="workDetailCounty"
                  className="flex-1"
                  value={formData.workDetailCounty}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="rounded-2xl">
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

            <div className="flex gap-4">
              <GlobalButton
                type="button"
                text="Cancel"
                className="flex-1"
                onClick={handleCancel}
                bgColor="bg-gray-400"
              />
              <GlobalButton
                type="submit"
                text="Update"
                className="flex-1"
                bgColor="bg-primary-blue"
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default FieldRepDetail;