"use client";
import { AddButton } from "@/components/Buttons/AddButton";
import { SearchInput } from "@/components/Buttons/InputSearch";
import { FieldModal } from "@/components/Modals/ModalWithFields";
import { TAB_HEADER } from "@/styles/assets";
import { useRouter } from "next/navigation";
import { useState } from "react";
import assigning from "../../../../public/icons/assigning.png";
import { NewAssignmentTable } from "@/components/tables/AdminTable/NewAssignmentTable";
const NewAssignments = () => {
  const router = useRouter();
  const [search, setSearch] = useState("");
  const [selectedRows, setSelectedRows] = useState<(string | number)[]>([]);
  const [showAssignModal, setShowAssignModal] = useState(false);
  const [selectedRow, setSelectedRow] = useState<any>(null);

  const [fieldRepData, setFieldRepData] = useState({
    state: "",
    fieldRep: "",
  });

  const assignmentData = [
    {
      id: 1,
      fieldRep: "Assign",
      isAssigned: false,
      isRejected: false,
      isDuplicated: false,
      inspectionType: "06",
      address: "205 E 9th Street pella, IA 0219",
      city: "Springfield",
      county: "Cedarwood",
      state: "Virginia",
      zip: "90210",
      requestDate: "10/05/2023",
    },
    {
      id: 2,
      fieldRep: "Maria Smith",
      isRejected: true,
      isAssigned: true,

      isDuplicated: true, // This row will have red background
      inspectionType: "10",
      address: "205 E 9th Street pella, IA 0219",
      city: "Riverdale",
      county: "Pleasantville",
      state: "Pennsylvania",
      zip: "90211",
      requestDate: "10/05/2023",
    },
    {
      id: 3,
      fieldRep: "Assign",
      isRejected: false,
      isAssigned: false,

      isDuplicated: false,
      inspectionType: "10",
      address: "205 E 9th Street pella, IA 0219",
      city: "Lakeside",
      county: "Westfield",
      state: "Washington",
      zip: "90212",
      requestDate: "10/05/2023",
    },
    {
      id: 4,
      fieldRep: "Assign",
      isRejected: false,
      isAssigned: false,

      isDuplicated: false,
      inspectionType: "10",
      address: "205 E 9th Street pella, IA 0219",
      city: "Mapleton",
      county: "Fairview",
      state: "Arizona",
      zip: "90213",
      requestDate: "10/05/2023",
    },
    {
      id: 5,
      fieldRep: "Sarah Taylor",
      isRejected: true,
      isAssigned: true,

      isDuplicated: true, // This row will have red background
      inspectionType: "10",
      address: "205 E 9th Street pella, IA 0219",
      city: "Sunnyvale",
      county: "Springfield",
      state: "California",
      zip: "90215",
      requestDate: "10/05/2023",
    },
    {
      id: 6,
      fieldRep: "Assign",
      isRejected: false,
      isAssigned: false,

      isDuplicated: false,
      inspectionType: "10",
      address: "205 E 9th Street pella, IA 0219",
      city: "Brookfield",
      county: "Hometown",
      state: "New York",
      zip: "90216",
      requestDate: "10/05/2023",
    },
    {
      id: 7,
      fieldRep: "Jessica Thomas",
      isRejected: true,
      isAssigned: true,

      isDuplicated: true, // This row will have red background
      inspectionType: "10",
      address: "205 E 9th Street pella, IA 0219",
      city: "Greenwood",
      county: "Sunnyvale",
      state: "Florida",
      zip: "90217",
      requestDate: "10/05/2023",
    },
    {
      id: 8,
      fieldRep: "Assign",
      isRejected: false,
      isAssigned: false,

      isDuplicated: false,
      inspectionType: "10",
      address: "205 E 9th Street pella, IA 0219",
      city: "Fairview",
      county: "Lakeside",
      state: "Ohio",
      zip: "90218",
      requestDate: "10/05/2023",
    },
    {
      id: 9,
      fieldRep: "Laura Garcia",
      isRejected: true,
      isAssigned: true,

      isDuplicated: true, // This row will have red background
      inspectionType: "10",
      address: "205 E 9th Street pella, IA 0219",
      city: "Cedarwood",
      county: "Mapleton",
      state: "Illinois",
      zip: "90219",
      requestDate: "10/05/2023",
    },
    {
      id: 10,
      fieldRep: "Assign",
      isRejected: false,
      isAssigned: false,
      isDuplicated: false,
      inspectionType: "10",
      address: "205 E 9th Street pella, IA 0219",
      city: "Oakridge",
      county: "Greenfield",
      state: "North Carolina",
      zip: "90220",
      requestDate: "10/05/2023",
    },
    {
      id: 11,
      fieldRep: "Sophia Lee",
      isRejected: true,
      isAssigned: true,
      isDuplicated: true, 
      inspectionType: "10",
      address: "205 E 9th Street pella, IA 0219",
      city: "Westfield",
      county: "Hillcrest",
      state: "Georgia",
      zip: "90221",
      requestDate: "10/05/2023",
    },
  ];

  const handleFieldRepChange = (field: string) => (e: any) => {
    setFieldRepData({ ...fieldRepData, [field]: e.target.value });
  };

  const handleApprove = (row: any) => {
    console.log("Approving row:", row);
    // Add your approve logic here
    // Example: API call to approve the assignment
    // approveAssignment(row.id);
  };

  const handleSendToFinalReview = (row: any) => {
    console.log("Sending to final review:", row);
    // Add your send to final review logic here
  };

  const handleSendToQA = (row: any) => {
    console.log("Sending to QA:", row);
    // Add your send to QA logic here
  };

  const handleApproveSelected = () => {
    console.log("Approving selected rows:", selectedRows);
    // Add logic to approve all selected rows
    // Example: selectedRows.forEach(id => approveAssignment(id));
  };

 const handleFieldRepClick = (row: any) => {
    setSelectedRow(row);
    // Set initial data for modal
    setFieldRepData({
      state: row.state || "",
      fieldRep: row.fieldRep === "Assign" ? "" : row.fieldRep,
    });
    setShowAssignModal(true);
    console.log("Opening modal for row:", row);
  };

  // Handle modal close
  const handleCloseModal = () => {
    setShowAssignModal(false);
    setSelectedRow(null);
    // Reset form data
    setFieldRepData({
      state: "",
      fieldRep: "",
    });
  };

  const handleAssignFieldRep = () => {
    console.log("Assigning field rep data:", fieldRepData);
    console.log("For assignment ID:", selectedRow?.id);
    
    // Here you would make API call to update the field rep
    // Example: updateFieldRep(selectedRow.id, fieldRepData);
    
    // Close modal after successful assignment
    handleCloseModal();
    
    // Optionally show success message or refresh data
  };


  const stateOptions = [
    { value: "ca", label: "California" },
    { value: "tx", label: "Texas" },
    { value: "ny", label: "New York" },
    { value: "fl", label: "Florida" },
    { value: "il", label: "Illinois" },
  ];

  return (
    <>
      <div className="w-full bg-medium-blue h-full p-5 rounded-[10px] flex flex-col gap-4">
        <div className="flex w-full justify-between">
          <span className={TAB_HEADER}>List of New Assignments</span>
          <div className="flex gap-4 max-w-sm">
            <SearchInput
              placeholder="Search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="flex-1"
            />

            <AddButton
              text="Approve Selected"
              icon={false}
              className="flex-1"
              onClick={handleApproveSelected}
            />
          </div>
        </div>
        <div>
          <NewAssignmentTable
            data={assignmentData}
            selectedRows={selectedRows}
            onRowSelect={setSelectedRows}
            onView={(row: any) => router.push(`/admin/assignments/${row.id}`)}
            onApprove={handleApprove}
            onSendToFinalReview={handleSendToFinalReview}
            onSendToQA={handleSendToQA}
               onFieldRepClick={handleFieldRepClick}
          />
        </div>
      </div>

     {showAssignModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <FieldModal
            icon={assigning}
            headingText={
              selectedRow?.fieldRep === "Assign" 
                ? "Assign Field Rep" 
                : "Change Field Rep"
            }
            fields={[
              {
                type: "dropdown",
                name: "state",
                placeholder: "Select State",
                value: fieldRepData.state,
                onChange: handleFieldRepChange("state"),
                options: stateOptions,
                required: true,
              },
              {
                type: "search",
                name: "fieldRep",
                placeholder: "Select Field Rep",
                value: fieldRepData.fieldRep,
                onChange: handleFieldRepChange("fieldRep"),
                showIcon: true,
              },
            ]}
            confirmButtonText={
              selectedRow?.fieldRep === "Assign" ? "Assign" : "Update"
            }
            cancelButtonText="Cancel"
            onConfirm={handleAssignFieldRep}
            onCancel={handleCloseModal}
          />
        </div>
      )}
    </>
  );
};

export default NewAssignments;
