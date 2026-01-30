"use client";

import React, { useState } from "react";
import { TABLE_VALUES } from "@/styles/assets";
import { StaticImageData } from "next/image";
import { DropdownCell, DualActionTextCell, InspectionCostCell, TripleTextCell } from "../cells";
import { TableWrapper } from "../TableWrapper";

type EditMode = "cost" | "commission" | null;

interface FinalReviewRow {
  id: string | number;
  name: string;
  inspectionType: string;
  address: string;
  city: string;
  county: string;
  state: string;
  zip: string;
  requestDate: string;
  status: string;
  coId: string;
  repId: string;
  repName: string;
  inspectionCost: number;
  images?: (string | StaticImageData)[];
  isRush?: boolean;
  isDuplicate?: boolean;
 editMode?: EditMode;
  qa?:string;
}

interface FinalReviewTableProps {
  data: FinalReviewRow[];
  selectedRows?: (string | number)[];
  onRowSelect?: (ids: (string | number)[]) => void;
  onCostChange?: (rowId: string | number, newCost: number) => void;
 onEditToggle?: (rowId: string | number, mode: EditMode) => void;
  statusOptions: { label: string; value: string }[];
  onStatusChange?: (rowId: string | number, status: string) => void;
  thumbnailMode?: boolean;
}

export const FinalReviewTable: React.FC<FinalReviewTableProps> = ({
  data,
  selectedRows,
  onRowSelect,
  onCostChange,
  onEditToggle,
  statusOptions,
  onStatusChange,
  thumbnailMode = false,
}) => {
  const [statusSelections, setStatusSelections] = useState<
    Record<string, string>
  >({});

  const handleStatusChange = (rowId: string | number, value: string) => {
    setStatusSelections((prev) => ({ ...prev, [String(rowId)]: value }));
    onStatusChange?.(rowId, value);
  };

  const handleCostChange = (rowId: string | number, newCost: number) => {
    onCostChange?.(rowId, newCost);
  };

 

const handleEditModeChange = (
  rowId: string | number,
  mode: EditMode
) => {
  onEditToggle?.(rowId, mode);
};

  const columns = [
    {
      key: "coId",
      header: "Co Id",
      width: "94px",
      sortable: true,
    },
    {
      key: "address",
      header: "Name/Address",
      width: "230px",
      render: (_: any, row: FinalReviewRow) => (
        <div className="flex flex-col ">
          <span className={`${TABLE_VALUES}`}>{`${row.name }`}</span>
          <span className={`${TABLE_VALUES}`}>{row.address}</span>
        </div>
      ),
    },
    {
      key: "city",
      header: "City",
      width: "100px",
      sortable: true,
    },
    {
      key: "inspectionType",
      header: "Insp. Type",
      width: "130px",
      sortable: true,
      render: (_: any, row: FinalReviewRow) => (
        <span className=" underline text-Paragraph">{row.inspectionType}</span>
      ),
    },
    {
      key: "stack",
      header: "Stack",
      width: "50px",
      render: (_: any, row: FinalReviewRow) => (
        <DropdownCell
          value={statusSelections[String(row.id)] || row.status}
          options={statusOptions}
          onChange={(value) => handleStatusChange(row.id, value)}
          placeholder="Select"
        />
      ),
    },

    {
      key: "inspectionCost",
      header: "Inspection Cost",
      width: "300px",
      render: (_: any, row: FinalReviewRow) => (
        <InspectionCostCell
          currentCost={row.inspectionCost}
          editMode={row.editMode ?? null}
           onModeChange={(mode) => handleEditModeChange(row.id, mode)}
  onCostChange={(newCost) => handleCostChange(row.id, newCost)}
        />
      ),
    },
     {
          key: "qa",
          header: "Quality Rep",
          width: "164px",
          sortable: true,
          render: (_: any, row: FinalReviewRow) => (
            <DualActionTextCell
              primaryText={row.qa || ""}
              secondaryText="Return To QA"
              primaryTextColor={"text-[#464646]"}
              secondaryTextColor={"text-[#9D2137]"}
              secondayUnderline={true}
            />
          ),
        },
         {
              key: "repName",
              header: "Field Rep",
              width: "164px",
              sortable: true,
              render: (_: any, row: FinalReviewRow) => (
                <DualActionTextCell
                  primaryText={row.repName}
                  secondaryText="Return To Field Rep"
                  primaryTextColor={"text-[#464646]"}
                  secondaryTextColor={"text-[#9D2137]"}
                  secondayUnderline={true}
                />
              ),
            },
            
    {
      key: "repDetails",
      header: "Change Insp Request",
      width: "200px",
      render: (_: any, row: FinalReviewRow) => (
        <TripleTextCell
          texts={["Edit Forms", "View Uploads", "Change Inspection Request"]}
          underlineAll={true}
          linkColor="#9D2137"
        />
      ),
    },
  ];

  const getRowBgColor = (row: FinalReviewRow, rowIndex: number) => {
    if (row.isRush) {
      return "#EFDBDF"; // Rush inspection color
    }
    if (row.isDuplicate) {
      return "#FFF5E6"; // Duplicate color
    }
    if (rowIndex % 2 === 0) {
      return "#F8FBFF"; // Light blue background
    }
    return "#FFFFFF"; // White background
  };

  return (
    <TableWrapper
      columns={columns}
      data={data}
      selectedRows={selectedRows}
      onRowSelect={onRowSelect}
      showCheckboxes={true}
      headerBgColor="#004990"
      getRowBgColor={getRowBgColor}
      thumbnailMode={thumbnailMode}
      imageKey="images"
    />
  );
};
