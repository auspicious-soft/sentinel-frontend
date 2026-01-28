"use client"

import { AddButton } from "@/components/Buttons/AddButton";
import { SearchInput } from "@/components/Buttons/InputSearch";
import { CompanyUsers } from "@/components/tables/CompanyUsersTable";
import { Plus } from "lucide-react";
import { useState } from "react";

const Page = () => {
  const [searchUsers, setSearchUsers] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);

  const companyUsersData = [
    { id: 1, srNo: '12345', lastName: 'SunnySkywalker', firstName: 'Alice Johnson', email: 'alex@gmail.com' },
    { id: 2, srNo: '12345', lastName: 'TechGuru', firstName: 'Bob Smith', email: 'chris@sample.com' },
    { id: 3, srNo: '12345', lastName: 'CreativeMind', firstName: 'Catherine Lee', email: 'jordan@sample.com' },
    { id: 4, srNo: '67890', lastName: 'AdventureSeeker', firstName: 'David Brown', email: 'taylor@sample.com' },
    { id: 5, srNo: '12345', lastName: 'NatureLover', firstName: 'Eva White', email: 'morgan@email.com' },
    { id: 6, srNo: '67890', lastName: 'BookWorm', firstName: 'Frank Green', email: 'jamie@sample.com' },
    { id: 7, srNo: '12345', lastName: 'MusicMaestro', firstName: 'Grace Hall', email: 'casey@sample.com' },
    { id: 8, srNo: '67890', lastName: 'FitnessFanatic', firstName: 'Henry Adams', email: 'riley@gmail.com' },
    { id: 9, srNo: '12345', lastName: 'GamerDude', firstName: 'Ivy Clark', email: 'cameron@sample.com' },
    { id: 10, srNo: '67890', lastName: 'ArtisticSoul', firstName: 'Jack Turner', email: 'casey@sample.com' },
  ];

  const companyData = {
    name: 'AAA Homeowners',
    phone: '313-583-2342',
    email: 'acrobertson@aaamichigan.com',
    address: '1 Auto Club Dr',
    city: 'United States',
    state: 'California, USA',
    zip: '10001',
    billingPO: '452130',
    billingPreference: 'By Insured Name',
    logo: 'https://placehold.co/257x257',
  };

  const divisionsData = [
    { id: 1, name: 'Standard', email: 'acrobertson@aaamichigan.com' },
    { id: 2, name: 'Premium', email: 'premium@aaamichigan.com' },
    { id: 3, name: 'Enterprise', email: 'enterprise@aaamichigan.com' },
  ];

  const totalItems = companyUsersData.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = companyUsersData.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleAddUser = () => {
    console.log('Add new user');
  };

  const handleAddDivision = () => {
    console.log('Add new division');
  };

  return (
    <div className="w-full min-h-screen flex flex-col gap-5">
      {/* Logo Section - Separate Card */}
      <div className="p-4  rounded-[10px]">
        <div className="flex flex-col lg:flex-row gap-5">
          {/* Logo Image Card */}
          <div className="lg:w-72 ">
            <div className="p-4 bg-medium-blue rounded-2xl h-full">
              <div className="flex flex-col gap-4">
                <img
                  src={companyData.logo}
                  alt="Company Logo"
                  className="w-full h-64 rounded-lg border-[0.76px] border-medium-blue object-cover"
                  onError={(e) => {
                    e.currentTarget.src = 'https://via.placeholder.com/257x257?text=Company+Logo';
                  }}
                />
              </div>
            </div>
          </div>

          {/* Company Details Card */}
          <div className="flex-1 p-4 bg-medium-blue rounded-[10px] -outline-offset-1 outline-white/20">
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-5">
                <div className="flex flex-col gap-1.25">
                  <div className="text-Black-000 text-2xl font-bold">
                    {companyData.name}
                  </div>
                </div>
              </div>

              {/* Phone & Email */}
              <div className="flex flex-col lg:flex-row gap-5">
                <div className="flex-1 flex flex-col gap-1.25">
                  <div className="flex items-center gap-4">
                    <div className="text-Paragraph text-xs font-normal">Phone</div>
                  </div>
                  <div className="text-Paragraph text-base font-semibold">
                    {companyData.phone}
                  </div>
                </div>
                <div className="flex-1 flex flex-col gap-1.25">
                  <div className="flex items-center gap-4">
                    <div className="text-Paragraph text-xs font-normal">Email</div>
                  </div>
                  <div className="text-Paragraph text-base font-semibold">
                    {companyData.email}
                  </div>
                </div>
              </div>

              {/* Address & City */}
              <div className="flex flex-col gap-5">
                <div className="flex flex-col lg:flex-row gap-5">
                  <div className="flex-1 flex flex-col gap-1.25">
                    <div className="text-Paragraph text-xs font-normal">Address</div>
                    <div className="text-Paragraph text-base font-semibold">
                      {companyData.address}
                    </div>
                  </div>
                  <div className="flex-1 flex flex-col gap-1.25">
                    <div className="text-Paragraph text-xs font-normal">City</div>
                    <div className="text-Paragraph text-base font-semibold">
                      {companyData.city}
                    </div>
                  </div>
                </div>

                {/* State & Zip */}
                <div className="flex flex-col lg:flex-row gap-5">
                  <div className="flex-1 flex flex-col gap-1.25">
                    <div className="text-Paragraph text-xs font-normal">State</div>
                    <div className="text-Paragraph text-base font-semibold">
                      {companyData.state}
                    </div>
                  </div>
                  <div className="flex-1 flex flex-col gap-1.25">
                    <div className="text-Paragraph text-xs font-normal">Zip</div>
                    <div className="text-Paragraph text-base font-semibold">
                      {companyData.zip}
                    </div>
                  </div>
                </div>

                {/* Billing PO & Preference */}
                <div className="flex flex-col lg:flex-row gap-5">
                  <div className="flex-1 flex flex-col gap-1.25">
                    <div className="text-Paragraph text-xs font-normal">Billing PO</div>
                    <div className="text-Paragraph text-base font-semibold">
                      {companyData.billingPO}
                    </div>
                  </div>
                  <div className="flex-1 flex flex-col gap-1.25">
                    <div className="text-Paragraph text-xs font-normal">Billing Sort Preference</div>
                    <div className="text-Paragraph text-base font-semibold">
                      {companyData.billingPreference}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Company Divisions - Separate Card */}
      <div className="p-4 rounded-[10px]">
        <div className="p-4 bg-medium-blue rounded-[10px] -outline-offset-1 outline-white/20">
          <div className="flex flex-col gap-4">
            <div className="flex justify-between items-center">
              <div className="text-Black text-2xl font-bold">
                Company Divisions
              </div>
              <button
                onClick={handleAddDivision}
                className="pb-0.5 border-b border-primary-red flex items-center gap-1.5 transition-all hover:border-b-2"
              >
                <Plus className="w-4 h-4 text-primary-red" />
                <div className="text-primary-red text-xs font-medium">
                  Add Division
                </div>
              </button>
            </div>

            {/* Divisions List */}
           <div className="space-y-3">
  {/* Header row */}
  <div className="flex flex-col lg:flex-row gap-4 w-full px-4">
    <span className="flex-1 text-Paragraph text-sm font-normal">
      Division Name
    </span>
    <span className="flex-1 text-Paragraph text-sm font-normal">
      Email
    </span>
  </div>

  {/* Data rows */}
  {divisionsData.map((division) => (
    <div
      key={division.id}
      className="px-4 bg-medium-blue rounded-lg"
    >
      <div className="flex flex-col lg:flex-row gap-4 w-full">
        <span className="flex-1 text-Paragraph text-base font-semibold">
          {division.name}
        </span>
        <span className="flex-1 text-Paragraph text-sm font-medium">
          {division.email}
        </span>
      </div>
    </div>
  ))}
</div>

          </div>
        </div>
      </div>

      {/* Company Users Table - Separate Card */}
      <div className="p-4 bg-medium-blue rounded-[10px]">
        <div className="p-5 bg-medium-blue rounded-[10px] outline-white/20 backdrop-blur-[2.50px]">
          <div className="flex flex-col gap-5">
            {/* Header with Search and Add Button */}
            <div className="flex flex-col lg:flex-row justify-between items-start gap-4">
              <div className="text-Black-000 text-2xl font-semibold leading-8">
                Company Users
              </div>
              <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
                <SearchInput
                  placeholder="Search users..."
                  value={searchUsers}
                  onChange={(e) => setSearchUsers(e.target.value)}
                  className="flex-1"
                />
                <AddButton
                  text="Add New User"
                  icon
                  onClick={handleAddUser}
                  className="flex-1"
                />
              </div>
            </div>

            {/* Users Table */}
            <div className="rounded-[10px] overflow-hidden">
              <CompanyUsers
                data={companyUsersData}
              />
            </div>


          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;