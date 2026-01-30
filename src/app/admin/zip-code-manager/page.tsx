"use client";

import { GlobalButton } from "@/components/Buttons/GlobalButton";
import { SearchInput } from "@/components/Buttons/InputSearch";
import { BaseTable } from "@/components/tables/BaseTable";
import { ActionEyeCell } from "@/components/tables/cells";
import { TAB_HEADER, TABLE_VALUES } from "@/styles/assets";
import { useRouter } from "next/navigation";
import { useState } from "react";

const ZipCodeManager = () => {
  const router = useRouter();
  const [search, setSearch] = useState("");
  const columns = [
    {
      key: "zones",
      header: "Zones",
      width: "flex-1",
    },
    {
      key: "totalZipCode",
      header: "Number Of Zip Codes",
      width: "flex-1",
    },
    {
      key: "action",
      header: "Action",
      width: "56px",
      render: (_: any, row: any) => (
        <ActionEyeCell onClick={() => router.push(`/admin/zip-code-manager/${row.id}`)} />
      ),
    },
  ];

  const companyData = [
    {
      id: 1,
      zones: "Zone Name",
      totalZipCode: "90",
    },
    {
      id: 2,
      zones: "Zone Name",
      totalZipCode: "90",
    },
    {
      id: 3,
      zones: "Zone Name",
      totalZipCode: "90",
    },
    {
      id: 4,
      zones: "Zone Name",
      totalZipCode: "90",
    },
    {
      id: 5,
      zones: "Zone Name",
      totalZipCode: "90",
    },
    {
      id: 6,
      zones: "Zone Name",
      totalZipCode: "90",
    },
    {
      id: 7,
      zones: "Zone Name",
      totalZipCode: "90",
    },
    {
      id: 8,
      zones: "Zone Name",
      totalZipCode: "90",
    },
    {
      id: 9,
      zones: "Zone Name",
      totalZipCode: "90",
    },
    {
      id: 10,
      zones: "Zone Name",
      totalZipCode: "90",
    },
    {
      id: 11,
      zones: "Zone Name",
      totalZipCode: "90",
    },
  ];

  return (
    <>
      <div className="flex gap-4 mt-2 w-full flex-col sm:flex-row justify-between">
        <span className={TAB_HEADER}>Zip Code Management</span>
        <div>
        <GlobalButton
          text="Add New Zone"
          className="flex-1 "
          onClick={() => router.push("/admin/zip-code-manager/add-new-zone")}
        />
        </div>
      </div>

      <div className="w-full bg-medium-blue h-full p-5 rounded-[10px] flex flex-col gap-4">
        <div className="flex w-full justify-between items-start sm:items-center flex-col sm:flex-row gap-4 lg:gap-0">
               <span className={TABLE_VALUES}>Zone Management</span>
               <div className="sm:w-55 w-full">
          <SearchInput
            placeholder="Search company"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-1"
          />
          </div>
        </div>
        <div>
          <BaseTable columns={columns} data={companyData} />
        </div>
      </div>
    </>
  );
};

export default ZipCodeManager;
