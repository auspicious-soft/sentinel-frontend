// components/tables/CompletedTable.tsx
"use client";

import React from "react";
import { TableWrapper } from "./TableWrapper";
import { TABLE_VALUES } from "@/styles/assets";
import { InspectionCostCell, InvoiceActionCell } from "./cells";


interface CompletedRow {
  id: string | number;
  name: string;
  inspectionType: string;
  address: string;
  city: string;
  county: string;
  state: string;
  zip: string;
  requestDate: string;
  completionDate: string;
  status: string;
  inspectionCost: number;
  editCost?: boolean;
  editCommission?: boolean;
  images?: string[];
  invoiceGenerated: boolean;
  isRush?: boolean;
  isDuplicate?: boolean;
}

interface CompletedTableProps {
  data: CompletedRow[];
  selectedRows?: (string | number)[];
  onRowSelect?: (ids: (string | number)[]) => void;
  onCostChange?: (rowId: string | number, newCost: number) => void;
  onEditToggle?: (
    rowId: string | number,
    field: "cost" | "commission",
    checked: boolean
  ) => void;
  onViewInvoice?: (row: CompletedRow) => void;
  onGenerateInvoice?: (row: CompletedRow) => void;
  thumbnailMode?: boolean;
}

export const CompletedTable: React.FC<CompletedTableProps> = ({
  data,
  selectedRows,
  onRowSelect,
  onCostChange,
  onEditToggle,
  onViewInvoice,
  onGenerateInvoice,
  thumbnailMode = false,
}) => {
  const handleCostChange = (rowId: string | number, newCost: number) => {
    onCostChange?.(rowId, newCost);
  };

  const handleEditToggle = (
    rowId: string | number,
    field: "cost" | "commission",
    checked: boolean
  ) => {
    onEditToggle?.(rowId, field, checked);
  };

  const columns = [
    {
      key: "name",
      header: "Name",
      width: "176px",
      sortable: true,
      render: (_: any, row: CompletedRow) => (
        <div className="flex flex-col">
          <span className={`${TABLE_VALUES}`}>{row.name}</span>
          <button className="text-sm font-normal underline leading-8 text-blue-600 hover:text-blue-800">
            View Report
          </button>
        </div>
      ),
    },
    {
      key: "inspectionType",
      header: "Inspection Type",
      width: "144px",
      sortable: true,
      render: (_: any, row: CompletedRow) => (
        <span className="text-sm font-normal underline text-Paragraph cursor-pointer hover:text-rose-700">
          {row.inspectionType}
        </span>
      ),
    },
    {
      key: "address",
      header: "Address",
      width: "288px",
      render: (_: any, row: CompletedRow) => (
        <span className={`${TABLE_VALUES}`}>{row.address}</span>
      ),
    },
    {
      key: "city",
      header: "City",
      width: "flex-1",
      sortable: true,
      render: (_: any, row: CompletedRow) => (
        <span className={`${TABLE_VALUES}`}>{row.city}</span>
      ),
    },
    {
      key: "county",
      header: "County",
      width: "flex-1",
      sortable: true,
      render: (_: any, row: CompletedRow) => (
        <span className={`${TABLE_VALUES}`}>{row.county}</span>
      ),
    },
    {
      key: "state",
      header: "State",
      width: "flex-1",
      sortable: true,
      render: (_: any, row: CompletedRow) => (
        <span className={`${TABLE_VALUES}`}>{row.state}</span>
      ),
    },
    {
      key: "zip",
      header: "Zip",
      width: "flex-1",
      sortable: true,
      render: (_: any, row: CompletedRow) => (
        <span className={`${TABLE_VALUES}`}>{row.zip}</span>
      ),
    },
    {
      key: "requestDate",
      header: "Request Date",
      width: "144px",
      sortable: true,
      render: (_: any, row: CompletedRow) => (
        <span className={`${TABLE_VALUES}`}>{row.requestDate}</span>
      ),
    },
    {
      key: "completionDate",
      header: "Completion Date",
      width: "144px",
      sortable: true,
      render: (_: any, row: CompletedRow) => (
        <span className={`${TABLE_VALUES}`}>{row.completionDate}</span>
      ),
    },
    {
      key: "status",
      header: "Status",
      width: "144px",
      render: (_: any, row: CompletedRow) => (
        <div
          className={`px-1.5 py-0.5 rounded text-xs font-normal capitalize leading-5 ${
            row.status === "Accepted"
              ? "bg-green-500 text-white"
              : row.status === "Completed"
              ? "bg-blue-500 text-white"
              : "bg-gray-500 text-white"
          }`}
        >
          {row.status}
        </div>
      ),
    },
    {
      key: "inspectionCost",
      header: "Inspection Cost",
      width: "300px",
      render: (_: any, row: CompletedRow) => (
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
      key: "invoice",
      header: "Invoice",
      width: "160px",
      render: (_: any, row: CompletedRow) => (
        <InvoiceActionCell
          onView={() => onViewInvoice?.(row)}
          onGenerate={() => onGenerateInvoice?.(row)}
        />
      ),
    },
  ];

  const getRowBgColor = (row: CompletedRow, rowIndex: number) => {
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