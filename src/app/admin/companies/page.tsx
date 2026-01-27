"use client";
import { AddButton } from "@/components/Buttons/AddButton";
import { SearchInput } from "@/components/Buttons/InputSearch";
import { CompanyTable } from "@/components/tables/CompanyTable";
import { TAB_HEADER } from "@/styles/assets";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Companies = () => {
  const router = useRouter();
  const [search, setSearch] = useState("");
  const companyData = [
    {
      id: 1,
      srNo: "12345",
      companyName: "SunnySkywalker",
      companyContact: "Alice Johnson",
      companyEmail: "alex@gmail.com",
      phoneNumber: "313582342",
      fax: "313362009",
    },
    {
      id: 2,
      srNo: "12345",
      companyName: "SunnySkywalker",
      companyContact: "Alice Johnson",
      companyEmail: "alex@gmail.com",
      phoneNumber: "313582342",
      fax: "313362009",
    },
    {
      id: 3,
      srNo: "12345",
      companyName: "SunnySkywalker",
      companyContact: "Alice Johnson",
      companyEmail: "alex@gmail.com",
      phoneNumber: "313582342",
      fax: "313362009",
    },
    {
      id: 4,
      srNo: "12345",
      companyName: "SunnySkywalker",
      companyContact: "Alice Johnson",
      companyEmail: "alex@gmail.com",
      phoneNumber: "313582342",
      fax: "313362009",
    },
    {
      id: 5,
      srNo: "12345",
      companyName: "SunnySkywalker",
      companyContact: "Alice Johnson",
      companyEmail: "alex@gmail.com",
      phoneNumber: "313582342",
      fax: "313362009",
    },
    {
      id: 6,
      srNo: "12345",
      companyName: "SunnySkywalker",
      companyContact: "Alice Johnson",
      companyEmail: "alex@gmail.com",
      phoneNumber: "313582342",
      fax: "313362009",
    },
    {
      id: 7,
      srNo: "12345",
      companyName: "SunnySkywalker",
      companyContact: "Alice Johnson",
      companyEmail: "alex@gmail.com",
      phoneNumber: "313582342",
      fax: "313362009",
    },
    {
      id: 8,
      srNo: "12345",
      companyName: "SunnySkywalker",
      companyContact: "Alice Johnson",
      companyEmail: "alex@gmail.com",
      phoneNumber: "313582342",
      fax: "313362009",
    },
    {
      id: 9,
      srNo: "12345",
      companyName: "SunnySkywalker",
      companyContact: "Alice Johnson",
      companyEmail: "alex@gmail.com",
      phoneNumber: "313582342",
      fax: "313362009",
    },
    {
      id: 10,
      srNo: "12345",
      companyName: "SunnySkywalker",
      companyContact: "Alice Johnson",
      companyEmail: "alex@gmail.com",
      phoneNumber: "313582342",
      fax: "313362009",
    },
    {
      id: 11,
      srNo: "12345",
      companyName: "SunnySkywalker",
      companyContact: "Alice Johnson",
      companyEmail: "alex@gmail.com",
      phoneNumber: "313582342",
      fax: "313362009",
    },
  ];

  return (
    <>
      <div className=" w-full bg-medium-blue h-full p-5 rounded-[10px] flex flex-col gap-4">
        <div className="flex w-full justify-between">
          <span className={TAB_HEADER}>List of Companies</span>
          <div className="flex gap-4 max-w-sm">
            <AddButton
              text="Add New Company"
              icon
              className="flex-1"
              onClick={() => router.push("/admin/companies/add-new-company")}
            />

            <SearchInput
              placeholder="Search company"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="flex-1"
            />
          </div>
        </div>
        <div>
          <CompanyTable
            data={companyData}
            onView={(row:any) =>router.push(`/admin/companies/${row.id}`)}
          />
        </div>
      </div>
    </>
  );
};

export default Companies;
