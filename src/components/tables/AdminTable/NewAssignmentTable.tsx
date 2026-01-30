import React from "react";
import { ActionTextCell } from "../cells";
import { BaseTable } from "../BaseTable";


export const NewAssignmentTable = <T extends Record<string, any>>({
  data,
  selectedRows,
  onRowSelect,
  onView,
  onApprove,
  onSendToFinalReview,
  onSendToQA,
  onFieldRepClick, // New prop for field rep click
}: {
  data: T[];
  selectedRows?: (string | number)[];
  onRowSelect?: (ids: (string | number)[]) => void;
  onView?: (row: T) => void;
  onApprove?: (row: T) => void;
  onSendToFinalReview?: (row: T) => void;
  onSendToQA?: (row: T) => void;
  onFieldRepClick?: (row: T) => void; // Function to open modal
}) => {
  const columns = [
    {
      key: "fieldRep",
      header: "Field Rep",
      width: "150px",
      sortable: true,
      render: (_: any, row: T) => (
        <button
          onClick={() => {
            console.log("Field rep cell clicked:", row.fieldRep);
            onFieldRepClick?.(row); // ✅ This calls the handler
          }}
          className={`text-sm font-normal underline  cursor-pointer ${row.isAssigned ? "text-Paragraph" : "text-primary-red hover:text-shadow-primary-red"}`}
        >
          {row.fieldRep}
        </button>
      ),
    },
    {
      key: "isRejected",
      header: "Is Rejected",
      width: "56px",
      sortable: true,
      render: (_: any, row: T) => (
        <span className="text-sm font-normal text-Paragraph">
          {row.isRejected ? "Yes" : "No"}
        </span>
      ),
    },
    {
      key: "inspectionType",
      header: "Inspection Type",
      width: "56px",
      sortable: true,
    },
    {
      key: "address",
      header: "Address",
      width: "220px",
    },
    {
      key: "city",
      header: "City",
      width: "56px",
      sortable: true,
    },
    {
      key: "county",
      header: "County",
      width: "56px",
      sortable: true,
    },
    {
      key: "state",
      header: "State",
      width: "56px",
      sortable: true,
    },
    {
      key: "zip",
      header: "Zip",
      width: "56px",
      sortable: true,
    },
    {
      key: "requestDate",
      header: "Request Date",
      width: "56px",
      sortable: true,
    },
    {
      key: "finalReview",
      header: "Final Review",
      width: "150px",
      render: (_: any, row: T) => (
        <ActionTextCell 
          text="Send To Final Review" 
          underline={true} 
          onClick={() => onSendToFinalReview?.(row)}
        />
      ),
    },
    {
      key: "action",
      header: "Action",
      width: "56px",
      render: (_: any, row: T) => (
        <div className="flex gap-4 px-3 py-1.75 border border-primary-red rounded-4xl bg-White">
          <button
            onClick={() => onApprove?.(row)}
            className="text-xs font-medium text-primary-red underline"
          >
            Approve
          </button>
         
        </div>
      ),
    },
  ];

  // Function to determine row background color
  const getRowBgColor = (row: T, rowIndex: number) => {
    // Red background for duplicated rows
    if (row.isDuplicated) {
      return "#EFDBDF"; // Your color-Rush (#EFDBDF)
    }
    
    // Striped pattern for non-duplicated rows
    if (rowIndex % 2 === 0) {
      return "#F8FBFF"; // Light blue
    }
    return "#FFFFFF"; // White
  };

  return (
    <BaseTable
      columns={columns}
      data={data}
      selectedRows={selectedRows}
      onRowSelect={onRowSelect}
      showCheckboxes={true}
      headerBgColor="#004990"
      getRowBgColor={getRowBgColor}
    />
  );
};