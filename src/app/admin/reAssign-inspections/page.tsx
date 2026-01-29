"use client";

import { GlobalButton } from "@/components/Buttons/GlobalButton";
import { DropdownField } from "@/components/Fields/DropdownField";
import { DIV_HEAD, TAB_HEADER } from "@/styles/assets";
import { useRouter } from "next/navigation";
import { useState } from "react";

const ReAssignInspections = () => {
  const [activeTab, setActiveTab] = useState<"fieldRep" | "qualityRep">("fieldRep");
  const [selectedRep, setSelectedRep] = useState("");
    const router = useRouter()
  const fieldRepOptions = [
    { value: "rep1", label: "John Doe" },
    { value: "rep2", label: "Jane Smith" },
    { value: "rep3", label: "Mike Johnson" },
  ];

  const qualityRepOptions = [
    { value: "qa1", label: "Alice Brown" },
    { value: "qa2", label: "Bob Wilson" },
    { value: "qa3", label: "Carol Davis" },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(`${activeTab === "fieldRep" ? "Field Rep" : "Quality Rep"} selected:`, selectedRep);
    router.push(`/admin/reAssign-inspections/reassign-${activeTab}`)
  };

  return (
    <div className="w-full bg-medium-blue h-full p-5 rounded-[10px] flex flex-col gap-5">
      <span className={TAB_HEADER}>Re-Assign Inspections</span>

      {/* Toggle Tabs */}
      <div className="self-stretch inline-flex justify-start items-center gap-5">
        <div className="flex justify-start items-center">
          <div className="p-0.5  rounded-2xl -outline-offset-1 outline-zinc-200 flex justify-center items-center">
            <button
              onClick={() => {
                setActiveTab("fieldRep");
                setSelectedRep("");
              }}
              className={`px-4 py-3 rounded-lg flex justify-center items-center gap-2.5 transition-colors cursor-pointer ${
                activeTab === "fieldRep" ? "bg-Rush" : ""
              }`}
            >
              <div
                className={`justify-start text-sm font-medium font-['Plus_Jakarta_Sans'] ${
                  activeTab === "fieldRep"
                    ? "text-rose-800 underline"
                    : "text-zinc-700"
                }`}
              >
                Re-Assign Field Rep
              </div>
            </button>
            <button
              onClick={() => {
                setActiveTab("qualityRep");
                setSelectedRep("");
              }}
              className={`px-4 py-3 rounded-lg flex justify-center items-center gap-2.5 transition-colors cursor-pointer ${
                activeTab === "qualityRep" ? "bg-Rush" : ""
              }`}
            >
              <div
                className={`justify-start text-sm font-medium font-['Plus_Jakarta_Sans'] ${
                  activeTab === "qualityRep"
                    ? "text-rose-800 underline"
                    : "text-zinc-700"
                }`}
              >
                Re-Assign Quality Rep
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Form Section */}
      <form onSubmit={handleSubmit} className="self-stretch flex flex-col justify-start items-start gap-10">
        <div className="self-stretch flex flex-col justify-start items-start gap-5">
          <div className="self-stretch flex flex-col justify-start items-start gap-1.5">
            <div className={DIV_HEAD}>
              {activeTab === "fieldRep" ? "Select Field Rep" : "Select Quality Rep"}
            </div>
            <div className="self-stretch p-4 rounded-2xl border border-white flex flex-col justify-start items-start gap-5">
              <div className="self-stretch inline-flex justify-start items-start gap-5">
                <div className="flex-1 flex justify-start items-start gap-5">
                  <DropdownField
                    label={activeTab === "fieldRep" ? "Field Rep" : "Quality Rep"}
                    placeholder="Select"
                    name="rep"
                    value={selectedRep}
                    onChange={(e) => setSelectedRep(e.target.value)}
                    options={activeTab === "fieldRep" ? fieldRepOptions : qualityRepOptions}
                    required
                    className="flex-1"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <GlobalButton
          type="submit"
          text="Go"
          bgColor="bg-sky-800"
          className="self-stretch"
        />
      </form>
    </div>
  );
};

export default ReAssignInspections;