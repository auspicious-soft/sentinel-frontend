"use client";
import { AddButton } from "@/components/Buttons/AddButton";
import { SearchInput } from "@/components/Buttons/InputSearch";
import { NonBgButton } from "@/components/Buttons/NonBgButton";
import { TAB_HEADER } from "@/styles/assets";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import deleteIcon from "../../../../public/icons/redDelete.svg";
import { FieldRepTable } from "@/components/tables/FieldRepTable";

const FieldReps = () => {
  const router = useRouter();
  const [search, setSearch] = useState("");
  const [selectedIds, setSelectedIds] = useState<(string | number)[]>([]);

  const fieldRepData = [
    {
      id: 1,
      repId: "12345",
      lastName: "SunnySkywalker",
      firstName: "Alice Johnson",
      email: "alex@gmail.com",
      phoneNumber: "313582342",
      city: "Mohali",
      state: "Chd",
    },
    {
      id: 2,
      repId: "12345",
      lastName: "SunnySkywalker",
      firstName: "Alice Johnson",
      email: "alex@gmail.com",
      phoneNumber: "313582342",
      city: "Mohali",
      state: "Chd",
    },
    {
      id: 3,
      repId: "12345",
      lastName: "SunnySkywalker",
      firstName: "Alice Johnson",
      email: "alex@gmail.com",
      phoneNumber: "313582342",
      city: "Mohali",
      state: "Chd",
    },
    {
      id: 4,
      repId: "12345",
      lastName: "SunnySkywalker",
      firstName: "Alice Johnson",
      email: "alex@gmail.com",
      phoneNumber: "313582342",
      city: "Mohali",
      state: "Chd",
    },
    {
      id: 5,
      repId: "12345",
      lastName: "SunnySkywalker",
      firstName: "Alice Johnson",
      email: "alex@gmail.com",
      phoneNumber: "313582342",
      city: "Mohali",
      state: "Chd",
    },
    {
      id: 6,
      repId: "12345",
      lastName: "SunnySkywalker",
      firstName: "Alice Johnson",
      email: "alex@gmail.com",
      phoneNumber: "313582342",
      city: "Mohali",
      state: "Chd",
    },
    {
      id: 7,
      repId: "12345",
      lastName: "SunnySkywalker",
      firstName: "Alice Johnson",
      email: "alex@gmail.com",
      phoneNumber: "313582342",
      city: "Mohali",
      state: "Chd",
    },
    {
      id: 8,
      repId: "12345",
      lastName: "SunnySkywalker",
      firstName: "Alice Johnson",
      email: "alex@gmail.com",
      phoneNumber: "313582342",
      city: "Mohali",
      state: "Chd",
    },
    {
      id: 9,
      repId: "12345",
      lastName: "SunnySkywalker",
      firstName: "Alice Johnson",
      email: "alex@gmail.com",
      phoneNumber: "313582342",
      city: "Mohali",
      state: "Chd",
    },
    {
      id: 10,
      repId: "12345",
      lastName: "SunnySkywalker",
      firstName: "Alice Johnson",
      email: "alex@gmail.com",
      phoneNumber: "313582342",
      city: "Mohali",
      state: "Chd",
    },
    {
      id: 11,
      repId: "12345",
      lastName: "SunnySkywalker",
      firstName: "Alice Johnson",
      email: "alex@gmail.com",
      phoneNumber: "313582342",
      city: "Mohali",
      state: "Chd",
    },
  ];

  const handleSelectionChange = (ids: (string | number)[]) => {
    setSelectedIds(ids);
    console.log("Selected IDs:", ids);
  };

  const handleViewRep = (rep: any) => {
    console.log("Viewing rep:", rep);
    // Add your view logic here
  };

  return (
    <>
      <div className=" w-full bg-medium-blue h-full p-5 rounded-[10px] flex flex-col gap-4">
        <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
          <span className={TAB_HEADER}>List of Field Reps</span>
          <div className="flex flex-wrap gap-3 w-full xl:max-w-2xl">
            <SearchInput
              placeholder="Search company"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full sm:flex-1"
            />

            <AddButton
              text="Add New Field Rep"
              icon
              className="w-full sm:flex-1"
              onClick={() => router.push("/admin/field-reps/add-new-field-rep")}
            />

            <NonBgButton
              text="Download Details"
              borderColor="border-primary-red"
              textColor="text-primary-red"
              icon={true}
              className="w-full sm:flex-1"
              bgColor="bg-none"
            />
            <button className="border border-primary-red w-full sm:w-12 h-12 rounded-lg flex items-center justify-center cursor-pointer shrink-0">
              <Image
                src={deleteIcon}
                alt="Del"
                className="object-fit sm:w-6 w-6"
                priority
                quality={100}
              />
            </button>
          </div>
        </div>
        <div>
          <FieldRepTable
            data={fieldRepData}
            selectedRows={selectedIds}
            onRowSelect={handleSelectionChange}
            onView={(row:any) =>router.push(`/admin/field-reps/${row.id}`)}

          />
        </div>
      </div>
    </>
  );
};

export default FieldReps;
