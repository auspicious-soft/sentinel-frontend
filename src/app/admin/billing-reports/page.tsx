"use client";
import { SearchInput } from "@/components/Buttons/InputSearch";
import { TAB_HEADER } from "@/styles/assets";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { TextWithLinkCell } from "@/components/tables/cells";
import { BaseTable } from "@/components/tables/BaseTable";

const BillingReports = () => {
  const router = useRouter();
  const [search, setSearch] = useState("");
  const [activeTab, setActiveTab] = useState<
    "client" | "field-rep" | "quality-rep"
  >("client");
  const [qualityRepData, setQualityRepData] = useState({
    name: "",
    email: "",
    phone: "",
    sendInvite: false,
  });
  let tabKey = "";
  let tabHeader = "";
  if (activeTab === "client") {
    tabKey = "companyName";
    tabHeader = "Company Name";
  } else if (activeTab === "field-rep") {
    tabKey = "fieldRepName";
    tabHeader = "Field Rep Name";
  } else if (activeTab === "quality-rep") {
    tabKey = "qualityRepname";
    tabHeader = "Quality Rep Name";
  } else {
    tabKey = "";
  }

  const columns = [
    {
      key: "srNo",
      header: "Sr Number",
      width: "flex-1",
    },
    {
      key: tabKey,
      header: tabHeader,
      width: "flex-1",
    },
     {
      key: "lastBillingDate",
      header: "Last Billing Date",
      width: "flex-1",
    },
    {
      key: "viewInvoice",
      header: "View Invoice",
      width: "flex-1",
      render: (_: any, row: any) => (
          <button
        onClick={()=>console.log("view")}
        className={`text-sm font-medium text-primary-red underline`}
      >
        View Previous Invoice
      </button>
      ),
    },
     {
      key: "generateInvoice",
      header: "Generate Invoice",
      width: "flex-1",
      render: (_: any, row: any) => (
        <div className="flex justify-start items-center gap-4">
      <button
        onClick={()=>console.log("View")}
        className={`text-sm font-medium text-primary-red underline`}
      >
        View
      </button>
      <button
        onClick={()=>console.log("Generate")}
        className={`text-sm font-medium text-primary-red underline`}
      >
        Generate
       
      </button>
    </div>
      ),
    },
  ];

  const clientBillingData = [
    {
      id: 1,
      srNo: "1",
      companyName: "AAA Comp",
      lastBillingDate: "10/10/2023",
    },
    {
      id: 2,
      srNo: "2",
      companyName: "AAA Comp",
      lastBillingDate: "10/10/2023",
    },
    {
      id: 3,
      srNo: "3",
      companyName: "AAA Comp",
      lastBillingDate: "10/10/2023",
    },
    {
      id: 4,
      srNo: "4",
      companyName: "AAA Comp",
      lastBillingDate: "10/10/2023",
    },
    {
      id: 5,
      srNo: "5",
      companyName: "AAA Comp",
      lastBillingDate: "10/10/2023",
    },
    {
      id: 6,
      srNo: "6",
      companyName: "AAA Comp",
      lastBillingDate: "10/10/2023",
    },
    {
      id: 7,
      srNo: "7",
      companyName: "AAA Comp",
      lastBillingDate: "10/10/2023",
    },
    {
      id: 8,
      srNo: "8",
      companyName: "AAA Comp",
      lastBillingDate: "10/10/2023",
    },
    {
      id: 9,
      srNo: "9",
      companyName: "AAA Comp",
      lastBillingDate: "10/10/2023",
    },
    {
      id: 10,
      srNo: "10",
      companyName: "AAA Comp",
      lastBillingDate: "10/10/2023",
    },
    {
      id: 11,
      srNo: "11",
      companyName: "AAA Comp",
      lastBillingDate: "10/10/2023",
    },
  ];

  const fieldRepCom = [
    {
      id: 1,
      srNo: "1",
      fieldRepName: "Ankit",
      lastBillingDate: "10/10/2023",
    },
    {
      id: 2,
      srNo: "2",
      fieldRepName: "Ankit",
      lastBillingDate: "10/10/2023",
    },
    {
      id: 3,
      srNo: "3",
      fieldRepName: "Ankit",
      lastBillingDate: "10/10/2023",
    },
    {
      id: 4,
      srNo: "4",
      fieldRepName: "Ankit",
      lastBillingDate: "10/10/2023",
    },
    {
      id: 5,
      srNo: "5",
      fieldRepName: "Ankit",
      lastBillingDate: "10/10/2023",
    },
    {
      id: 6,
      srNo: "6",
      fieldRepName: "Ankit",
      lastBillingDate: "10/10/2023",
    },
    {
      id: 7,
      srNo: "7",
      fieldRepName: "Ankit",
      lastBillingDate: "10/10/2023",
    },
    {
      id: 8,
      srNo: "8",
      fieldRepName: "Ankit",
      lastBillingDate: "10/10/2023",
    },
    {
      id: 9,
      srNo: "9",
      fieldRepName: "Ankit",
      lastBillingDate: "10/10/2023",
    },
    {
      id: 10,
      srNo: "10",
      fieldRepName: "Ankit",
      lastBillingDate: "10/10/2023",
    },
    {
      id: 11,
      srNo: "11",
      fieldRepName: "Ankit",
      lastBillingDate: "10/10/2023",
    },
  ];
  const qualityRepCom = [
    {
      id: 1,
      srNo: "1",
      qualityRepname: "Prikshit",
      lastBillingDate: "10/10/2023",
    },
    {
      id: 2,
      srNo: "2",
      qualityRepname: "Prikshit",
      lastBillingDate: "10/10/2023",
    },
    {
      id: 3,
      srNo: "3",
      qualityRepname: "Prikshit",
      lastBillingDate: "10/10/2023",
    },
    {
      id: 4,
      srNo: "4",
      qualityRepname: "Prikshit",
      lastBillingDate: "10/10/2023",
    },
    {
      id: 5,
      srNo: "5",
      qualityRepname: "Prikshit",
      lastBillingDate: "10/10/2023",
    },
    {
      id: 6,
      srNo: "6",
      qualityRepname: "Prikshit",
      lastBillingDate: "10/10/2023",
    },
    {
      id: 7,
      srNo: "7",
      qualityRepname: "Prikshit",
      lastBillingDate: "10/10/2023",
    },
    {
      id: 8,
      srNo: "8",
      qualityRepname: "Prikshit",
      lastBillingDate: "10/10/2023",
    },
    {
      id: 9,
      srNo: "9",
      qualityRepname: "Prikshit",
      lastBillingDate: "10/10/2023",
    },
    {
      id: 10,
      srNo: "10",
      qualityRepname: "Prikshit",
      lastBillingDate: "10/10/2023",
    },
    {
      id: 11,
      srNo: "11",
      qualityRepname: "Prikshit",
      lastBillingDate: "10/10/2023",
    },
  ];



  const renderTable = () =>{
    switch(activeTab){
        case "client":
        return(
            <BaseTable
            columns={columns}
            data={clientBillingData}
            />
        );
        case "field-rep":
            return(
            <BaseTable
            columns={columns}
            data={fieldRepCom}
            />
        );
         case "quality-rep":
            return(
            <BaseTable
            columns={columns}
            data={qualityRepCom}
            />
        );
    }
  }
  return (
    <>
      <div className=" w-full bg-medium-blue h-full p-5 rounded-[10px] flex flex-col gap-4">
        <div className="flex flex-col gap-4 xl:flex-col xl:items-start xl:justify-between">
          <span className={TAB_HEADER}>List of Quality Reps</span>
          <div className="self-stretch flex flex-col lg:flex-row lg:justify-between lg:items-center gap-4">
            {/* Tabs Section */}
            <div className="p-0.5 rounded-lg flex justify-center items-center w-fit">
              <button
                onClick={() => setActiveTab("client")}
                className={`px-4 py-3 rounded-lg flex justify-center items-center gap-2.5 transition-colors cursor-pointer ${
                  activeTab === "client" ? "" : ""
                }`}
              >
                <div
                  className={`justify-start text-sm font-medium font-['Plus_Jakarta_Sans'] ${
                    activeTab === "client"
                      ? "text-primary-red underline"
                      : "text-zinc-700"
                  }`}
                >
                  Client Billing
                </div>
              </button>
              <button
                onClick={() => setActiveTab("field-rep")}
                className={`px-4 py-3 rounded-2xl flex justify-center items-center gap-2.5 transition-colors cursor-pointer ${
                  activeTab === "field-rep" ? "" : ""
                }`}
              >
                <div
                  className={`justify-start text-sm font-medium font-['Plus_Jakarta_Sans'] ${
                    activeTab === "field-rep"
                      ? "text-primary-red underline"
                      : "text-zinc-700"
                  }`}
                >
                  Field Rep Commission
                </div>
              </button>
              <button
                onClick={() => setActiveTab("quality-rep")}
                className={`px-4 py-3 rounded-lg flex justify-center items-center gap-2.5 transition-colors cursor-pointer ${
                  activeTab === "quality-rep" ? "" : ""
                }`}
              >
                <div
                  className={`justify-start text-sm font-medium font-['Plus_Jakarta_Sans'] ${
                    activeTab === "quality-rep"
                      ? "text-primary-red underline"
                      : "text-zinc-700"
                  }`}
                >
                  Quality Rep Commision
                </div>
              </button>
            </div>
            {/* Buttons Section */}
            <div className="flex flex-col sm:flex-row justify-start items-center gap-2.5 w-full lg:w-auto">
              <SearchInput
                placeholder="Search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full sm:flex-1 lg:w-auto"
              />
            </div>
          </div>
        </div>
        <div>
         {renderTable()}
        </div>
      </div>
   
    </>
  );
};

export default BillingReports;
