// components/tables/FinalReviewTable.tsx
"use client";

import React, { useState } from "react";
import { TableWrapper } from "./TableWrapper";
import { TABLE_VALUES } from "@/styles/assets";
import { DropdownCell, InspectionCostCell, TripleTextCell } from "./cells";

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
  editCost?: boolean;
  editCommission?: boolean;
  images?: string[];
  isRush?: boolean;
  isDuplicate?: boolean;
}

interface FinalReviewTableProps {
  data: FinalReviewRow[];
  selectedRows?: (string | number)[];
  onRowSelect?: (ids: (string | number)[]) => void;
  onCostChange?: (rowId: string | number, newCost: number) => void;
  onEditToggle?: (
    rowId: string | number,
    field: "cost" | "commission",
    checked: boolean,
  ) => void;
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

  const handleEditToggle = (
    rowId: string | number,
    field: "cost" | "commission",
    checked: boolean,
  ) => {
    onEditToggle?.(rowId, field, checked);
  };

  const columns = [
    {
      key: "coId",
      header: "Co Id",
      width: "54px",
      sortable: true,
    },
      {
      key: "address",
      header: "Name/Address",
      width: "288px",
      render: (_: any, row: FinalReviewRow) => (
        <div className="flex flex-col">
          <span className={`${TABLE_VALUES}`}>{row.name}</span>
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
      width: "40px",
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
          onCostChange={(newCost) => handleCostChange(row.id, newCost)}
          onEditToggle={(field, checked) =>
            handleEditToggle(row.id, field, checked)
          }
          editCost={row.editCost || false}
          editCommission={row.editCommission || false}
        />
      ),
    },
    {
      key: "repDetails",
      header: "Rep Details",
      width: "200px",
      render: (_: any, row: FinalReviewRow) => (
        <TripleTextCell
          texts={[row.repName, `ID: ${row.repId}`, row.zip]}
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
