"use client";

import { GlobalButton } from "@/components/Buttons/GlobalButton";
import { DropdownField } from "@/components/Fields/DropdownField";
import { OutstandingMonitorTaskTable } from "@/components/tables/OutstangMonitorTaskTable";
import { ReAssignTable } from "@/components/tables/ReassignTable";
import { DIV_HEAD, TAB_HEADER } from "@/styles/assets";
import { useState } from "react";

const ReAssignInspections = () => {
  const [activeTab, setActiveTab] = useState<"fieldRep" | "qualityRep">("fieldRep");
  const [currentRep, setCurrentRep] = useState("");
  const [newRep, setNewRep] = useState("");
  const [selectedIds, setSelectedIds] = useState<(string | number)[]>([]);

  const fieldRepOptions = [
    { value: "rep1", label: "Philip Laycock" },
    { value: "rep2", label: "Jane Smith" },
    { value: "rep3", label: "Mike Johnson" },
  ];

  const qualityRepOptions = [
    { value: "qa1", label: "Alice Brown" },
    { value: "qa2", label: "Bob Wilson" },
    { value: "qa3", label: "Carol Davis" },
  ];

  const outStandingTasks = [
    {
      id: 1,
      name: "Jessica Thomas",
      inspectionType: "10",
      status: "Accepted",
      requestDate: "1/1/2024",
      coId: "90217",
      address: "205 E 9th Street pella, IA 0219",
      city: "Greenwood",
      country: "Greenwood",
      state: "Florida",
      repId: "90217",
      repName: "Ricardo Diaz",
      isRushInspection: false,
    },
    {
      id: 2,
      name: "Randy Quaid",
      inspectionType: "06",
      status: "Accepted",
      requestDate: "4/8/2024",
      coId: "90218",
      address: "205 E 9th Street pella, IA 0219",
      city: "Springfield",
      country: "Springfield",
      state: "Virginia",
      repId: "90218",
      repName: "Laura Garcia",
      isRushInspection: true,
    },
    {
      id: 3,
      name: "Maria Smith",
      inspectionType: "10",
      status: "Accepted",
      requestDate: "11/2/2023",
      coId: "90219",
      address: "205 E 9th Street pella, IA 0219",
      city: "Riverdale",
      country: "Riverdale",
      state: "Pennsylvania",
      repId: "90219",
      repName: "Ricardo Diaz",
      isRushInspection: false,
    },
    {
      id: 4,
      name: "Ricardo Diaz",
      inspectionType: "10",
      status: "Accepted",
      requestDate: "2/20/2024",
      coId: "90220",
      address: "205 E 9th Street pella, IA 0219",
      city: "Lakeside",
      country: "Lakeside",
      state: "Washington",
      repId: "90220",
      repName: "Ricardo Diaz",
      isRushInspection: false,
    },
    {
      id: 5,
      name: "Jenny Hess",
      inspectionType: "10",
      status: "Not-Accepted",
      requestDate: "9/16/2023",
      coId: "90221",
      address: "205 E 9th Street pella, IA 0219",
      city: "Mapleton",
      country: "Mapleton",
      state: "Arizona",
      repId: "90221",
      repName: "Laura Garcia",
      isRushInspection: true,
    },
    {
      id: 6,
      name: "Boby Axel",
      inspectionType: "10",
      status: "Accepted",
      requestDate: "3/1/2024",
      coId: "90222",
      address: "205 E 9th Street pella, IA 0219",
      city: "Hillcrest",
      country: "Hillcrest",
      state: "Texas",
      repId: "90222",
      repName: "Sarah Taylor",
      isRushInspection: true,
    },
    {
      id: 7,
      name: "Sarah Taylor",
      inspectionType: "10",
      status: "Accepted",
      requestDate: "12/12/2023",
      coId: "90223",
      address: "205 E 9th Street pella, IA 0219",
      city: "Sunnyvale",
      country: "Sunnyvale",
      state: "California",
      repId: "90223",
      repName: "Sarah Taylor",
      isRushInspection: true,
    },
  ];

  const handleSelectionChange = (ids: (string | number)[]) => {
    setSelectedIds(ids);
    console.log("Selected IDs:", ids);
  };

  const handleReassignAll = () => {
    console.log("Reassigning all selected inspections");
    console.log("From:", currentRep);
    console.log("To:", newRep);
    console.log("Selected IDs:", selectedIds);
  };

  const handleReassignSelected = () => {
    console.log("Reassigning selected inspections");
    console.log("From:", currentRep);
    console.log("To:", newRep);
    console.log("Selected IDs:", selectedIds);
  };

  return (
    <div className="w-full bg-medium-blue h-full p-5 rounded-[10px] flex flex-col gap-6">
     
      <span className={TAB_HEADER}>Re-Assign Inspections</span>

    
      <div className="self-stretch flex flex-col justify-start items-start gap-10">
        <div className="self-stretch flex flex-col justify-start items-start gap-5">
          <div className="self-stretch flex flex-col justify-start items-start gap-1.5">
            <div className={DIV_HEAD}>
              {activeTab === "fieldRep" ? "Choose Field Rep to re-assign to:" : "Choose Quality Rep to re-assign to:"}
            </div>
            <div className="self-stretch p-4 rounded-2xl border border-white flex flex-col justify-start items-start gap-5">
              <div className="self-stretch inline-flex justify-start items-start gap-5">
                <DropdownField
                  label={activeTab === "fieldRep" ? "Field Rep" : "Quality Rep"}
                  placeholder="Philip Laycock"
                  name="currentRep"
                  value={currentRep}
                  onChange={(e) => setCurrentRep(e.target.value)}
                  options={activeTab === "fieldRep" ? fieldRepOptions : qualityRepOptions}
                  required
                  className="flex-1"
                  disabled={true}
                />
              </div>
              <div className="self-stretch inline-flex justify-start items-start gap-5">
                <DropdownField
                  label={`Choose ${activeTab === "fieldRep" ? "Field Rep" : "Quality Rep"} to re-assign to:`}
                  placeholder="Select"
                  name="newRep"
                  value={newRep}
                  onChange={(e) => setNewRep(e.target.value)}
                  options={activeTab === "fieldRep" ? fieldRepOptions : qualityRepOptions}
                  required
                  className="flex-1"
                />
              </div>
            </div>
          </div>
        </div>

        <GlobalButton
          text="Re-assign All"
          bgColor="bg-sky-800"
          onClick={handleReassignAll}
          className="self-stretch"
        />
      </div>

      {/* Table Section */}
      <div className="self-stretch flex flex-col gap-5">
        <div className="self-stretch flex sm:flex-row flex-col justify-between w-full">
          <div className={`${DIV_HEAD} flex-1`}>Choose Inspections to re-assign</div>
          <div>
          <GlobalButton
            text="Re-Assign Selected"
            bgColor="bg-rose-800"
            onClick={handleReassignSelected}
            disabled={selectedIds.length === 0}
            className="px-4 py-3 flex-1"
          />
          </div>
        </div>

        <ReAssignTable
          data={outStandingTasks}
          selectedRows={selectedIds}
          onRowSelect={handleSelectionChange}
        />
      </div>
    </div>
  );
};

export default ReAssignInspections;