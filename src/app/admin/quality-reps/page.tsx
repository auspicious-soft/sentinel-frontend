"use client";
import { AddButton } from "@/components/Buttons/AddButton";
import { SearchInput } from "@/components/Buttons/InputSearch";
import { NonBgButton } from "@/components/Buttons/NonBgButton";
import { TAB_HEADER } from "@/styles/assets";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FieldModal } from "@/components/Modals/ModalWithFields";
import assignImg from "../../../../public/icons/user.png";
import tickImg from "../../../../public/icons/tick.png";
import { NonFieldModal } from "@/components/Modals/NonFieldModal";
import { ActiveRepsTable } from "@/components/tables/AdminTable/ActiveRepsTable";
import { DeletedRepsTable } from "@/components/tables/AdminTable/DeletedRepsTable";

const QualityReps = () => {
  const router = useRouter();
  const [search, setSearch] = useState("");
  const [selectedIds, setSelectedIds] = useState<(string | number)[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [showRestoreModal, setShowRestoreModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [activeTab, setActiveTab] = useState<"active" | "deleted">("active");
  const [qualityRepData, setQualityRepData] = useState({
    name: "",
    email: "",
    phone: "",
    sendInvite: false,
  });

  const activeQualityReps = [
    {
      id: 1,
      name: "Ankit",
      email: "ankit@gmail.com",
      phoneNumber: "313582342",
      queueCount: "12345",
      finalReview: "Yes",
    },
    {
      id: 2,
      name: "Ankit",
      email: "ankit@gmail.com",
      phoneNumber: "313582342",
      queueCount: "12345",
      finalReview: "Yes",
    },
    {
      id: 3,
      name: "Ankit",
      email: "ankit@gmail.com",
      phoneNumber: "313582342",
      queueCount: "12345",
      finalReview: "No",
    },
    {
      id: 4,
      name: "Ankit",
      email: "ankit@gmail.com",
      phoneNumber: "313582342",
      queueCount: "12345",
      finalReview: "Yes",
    },
    {
      id: 5,
      name: "Ankit",
      email: "ankit@gmail.com",
      phoneNumber: "313582342",
      queueCount: "12345",
      finalReview: "Yes",
    },
    {
      id: 6,
      name: "Ankit",
      email: "ankit@gmail.com",
      phoneNumber: "313582342",
      queueCount: "12345",
      finalReview: "No",
    },
    {
      id: 7,
      name: "Ankit",
      email: "ankit@gmail.com",
      phoneNumber: "313582342",
      queueCount: "12345",
      finalReview: "Yes",
    },
    {
      id: 8,
      name: "Ankit",
      email: "ankit@gmail.com",
      phoneNumber: "313582342",
      queueCount: "12345",
      finalReview: "No",
    },
    {
      id: 9,
      name: "Ankit",
      email: "ankit@gmail.com",
      phoneNumber: "313582342",
      queueCount: "12345",
      finalReview: "Yes",
    },
    {
      id: 10,
      name: "Ankit",
      email: "ankit@gmail.com",
      phoneNumber: "313582342",
      queueCount: "12345",
      finalReview: "No",
    },
    {
      id: 11,
      name: "Ankit",
      email: "ankit@gmail.com",
      phoneNumber: "313582342",
      queueCount: "12345",
      finalReview: "Yes",
    },
  ];

  const deletedQualityReps = [
    {
      id: 1,
      name: "Prikshit",
      email: "prikshit@gmail.com",
      phoneNumber: "313582342",
      queueCount: "12345",
    },
    {
      id: 2,
      name: "Prikshit",
      email: "prikshit@gmail.com",
      phoneNumber: "313582342",
      queueCount: "12345",
    },
    {
      id: 3,
      name: "Prikshit",
      email: "prikshit@gmail.com",
      phoneNumber: "313582342",
      queueCount: "12345",
    },
    {
      id: 4,
      name: "Prikshit",
      email: "prikshit@gmail.com",
      phoneNumber: "313582342",
      queueCount: "12345",
    },
    {
      id: 5,
      name: "Prikshit",
      email: "prikshit@gmail.com",
      phoneNumber: "313582342",
      queueCount: "12345",
    },
    {
      id: 6,
      name: "Prikshit",
      email: "prikshit@gmail.com",
      phoneNumber: "313582342",
      queueCount: "12345",
    },
    {
      id: 7,
      name: "Prikshit",
      email: "prikshit@gmail.com",
      phoneNumber: "313582342",
      queueCount: "12345",
    },
    {
      id: 8,
      name: "Prikshit",
      email: "prikshit@gmail.com",
      phoneNumber: "313582342",
      queueCount: "12345",
    },
    {
      id: 9,
      name: "Prikshit",
      email: "prikshit@gmail.com",
      phoneNumber: "313582342",
      queueCount: "12345",
    },
    {
      id: 10,
      name: "Prikshit",
      email: "prikshit@gmail.com",
      phoneNumber: "313582342",
      queueCount: "12345",
    },
    {
      id: 11,
      name: "Prikshit",
      email: "prikshit@gmail.com",
      phoneNumber: "313582342",
      queueCount: "12345",
    },
  ];

  const handleQualityRepChange = (field: string) => (e: any) => {
    const value =
      e.target?.type === "checkbox" ? e.target.checked : e.target.value;
    setQualityRepData({ ...qualityRepData, [field]: value });
  };
  return (
    <>
      <div className=" w-full bg-medium-blue h-full p-5 rounded-[10px] flex flex-col gap-4">
        <div className="flex flex-col gap-4 xl:flex-col xl:items-start xl:justify-between">
          <span className={TAB_HEADER}>List of Quality Reps</span>
          <div className="self-stretch flex flex-col lg:flex-row lg:justify-between lg:items-center gap-4">
            {/* Tabs Section */}
            <div className="p-0.5 rounded-lg flex justify-center items-center w-fit">
              <button
                onClick={() => setActiveTab("active")}
                className={`px-4 py-3 rounded-lg flex justify-center items-center gap-2.5 transition-colors cursor-pointer ${
                  activeTab === "active" ? "bg-Rush" : ""
                }`}
              >
                <div
                  className={`justify-start text-sm font-medium font-['Plus_Jakarta_Sans'] ${
                    activeTab === "active"
                      ? "text-primary-red underline"
                      : "text-zinc-700"
                  }`}
                >
                  Active Reps
                </div>
              </button>
              <button
                onClick={() => setActiveTab("deleted")}
                className={`px-4 py-3 rounded-2xl flex justify-center items-center gap-2.5 transition-colors cursor-pointer ${
                  activeTab === "deleted" ? "bg-Rush" : ""
                }`}
              >
                <div
                  className={`justify-start text-sm font-medium font-['Plus_Jakarta_Sans'] ${
                    activeTab === "deleted"
                      ? "text-primary-red underline"
                      : "text-zinc-700"
                  }`}
                >
                  Deleted Reps
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

              <AddButton
                text="Add New Quality Rep"
                icon
                className="w-full sm:flex-1 lg:w-auto"
                onClick={() => setShowModal(true)}
              />

              <NonBgButton
                text="Download Details"
                borderColor="border-primary-red"
                textColor="text-primary-red"
                icon={true}
                className="w-full sm:flex-1"
                bgColor="bg-none"
              />
            </div>
          </div>
        </div>
        <div>
          {activeTab === "active" ? (
            <ActiveRepsTable
              data={activeQualityReps}
              onView={(row: any) => console.log(`${row.id}`)}
            />
          ) : (
            <DeletedRepsTable
              data={deletedQualityReps}
              onView={(row: any) => {
                console.log(`${row.id}`);
                setShowRestoreModal(true);
              }}
            />
          )}
        </div>
      </div>
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
          <FieldModal
            icon={assignImg}
            headingText="Add Quality Rep"
            fields={[
              {
                type: "input",
                name: "name",
                placeholder: "Full Name",
                value: qualityRepData.name,
                onChange: handleQualityRepChange("name"),
                required: true,
              },
              {
                type: "input",
                name: "email",
                placeholder: "Email Address",
                value: qualityRepData.email,
                onChange: handleQualityRepChange("email"),
                required: true,
              },
              {
                type: "input",
                name: "phone",
                placeholder: "Phone Number",
                value: qualityRepData.phone,
                onChange: handleQualityRepChange("phone"),
                required: true,
              },
              {
                type: "checkbox",
                name: "sendInvite",
                label: "Send email invitation",
                value: qualityRepData.sendInvite,
                onChange: (e: any) => {
                  console.log("Checkbox clicked:", e.target.checked); // Add this to debug
                  setQualityRepData({
                    ...qualityRepData,
                    sendInvite: e.target.checked,
                  });
                },
              },
            ]}
            confirmButtonText="Add"
            onConfirm={() => {
              console.log("Add Quality Rep:", qualityRepData);
              setShowSuccessModal(true)
              setShowModal(false);
            }}
            onCancel={() => setShowModal(false)}
          />
        </div>
      )}
      {showRestoreModal && (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
        <NonFieldModal
          icon={tickImg}
          headingText="Quality rep Restored"
          paragraphText="Are you sure you want to delete? You won’t be able to undo this action."
          confirmButtonText="Okay"
          showCancelButton={false}
          onConfirm={() => {
            console.log("ReStored");
            setShowRestoreModal(false);
          }}
          onCancel={() => setShowRestoreModal(false)}
        />
      </div>
      )}
       {showSuccessModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
        <NonFieldModal
          icon={tickImg}
          headingText="Quality rep Added"
          paragraphText="Quality rep has been added successfully."
          confirmButtonText="Okay"
          showCancelButton={false}
          onConfirm={() => {
            console.log("Added");
            setShowSuccessModal(false);
          }}
          onCancel={() => setShowSuccessModal(false)}
        />
      </div>
      )}
    </>
  );
};

export default QualityReps;
