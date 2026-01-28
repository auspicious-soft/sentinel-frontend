// components/tables/AssignQATable.tsx
"use client";

import React from "react";
import { TableWrapper } from "./TableWrapper";
import { TABLE_VALUES } from "@/styles/assets";
import { DropdownCell, DualActionTextCell, EditDeleteCell } from "./cells";
import { StaticImageData } from "next/image";


interface AssignQARow {
  id: string | number;
  fieldRep: string;
  inspectionType: string;
  address: string;
  city: string;
  county: string;
  state: string;
  zip: string;
  requestDate: string;
  qaPerson: string;
  images?: (string | StaticImageData)[];
  isRush?: boolean;
  isDuplicate?: boolean;
}

interface AssignQATableProps {
  data: AssignQARow[];
  selectedRows?: (string | number)[];
  onRowSelect?: (ids: (string | number)[]) => void;
  onAssignQAClick?: (row: AssignQARow, qaPerson: string) => void;
  onApproveClick?: (row: AssignQARow) => void;
  onSendToQAClick?: (row: AssignQARow) => void;
  qaOptions: { label: string; value: string }[];
  thumbnailMode?: boolean;
}

export const AssignQATable: React.FC<AssignQATableProps> = ({
  data,
  selectedRows,
  onRowSelect,
  onAssignQAClick,
  onApproveClick,
  onSendToQAClick,
  qaOptions,
  thumbnailMode = false,
}) => {
  const [qaSelections, setQaSelections] = React.useState<Record<string, string>>({});

  const handleQASelection = (rowId: string | number, value: string) => {
    setQaSelections(prev => ({ ...prev, [String(rowId)]: value }));
    onAssignQAClick?.(data.find(r => r.id === rowId)!, value);
  };

  const columns = [
    {
      key: "fieldRep",
      header: "Field Rep",
      width: "160px",
      sortable: true,
      render: (_: any, row: AssignQARow) => (
       <DualActionTextCell 
       primaryText={row.fieldRep} 
       secondaryText="Return To Field Rep" 
       primaryTextColor=""
       secondaryTextColor={"text-[#9D2137]"}
       secondayUnderline={true}
       />
       
      ),
    },
    {
      key: "inspectionType",
      header: "Insp. Type",
      width: "40px",
      sortable: true,
      render: (_: any, row: AssignQARow) => (
        <span className=" underline text-Paragraph">
          {row.inspectionType}
        </span>
      ),
    },
    {
      key: "address",
      header: "Address",
      width: "268px",
      sortable:true,
    },
    {
      key: "city",
      header: "City",
      width: "100px",
      sortable: true,
    },
    {
      key: "county",
      header: "County",
      width: "100px",
      sortable: true,
    },
    {
      key: "state",
      header: "State",
      width: "100px",
      sortable: true,
    },
    {
      key: "zip",
      header: "Zip",
      width: "100px",
      sortable: true,
    },
    {
      key: "requestDate",
      header: "Request Date",
      width: "164px",
      sortable: true,
    },
    {
      key: "qaPerson",
      header: "Select QA",
      width: "160px",
      render: (_: any, row: AssignQARow) => (
        <DropdownCell
          value={qaSelections[String(row.id)] || ""}
          options={qaOptions}
          onChange={(value) => handleQASelection(row.id, value)}
          placeholder="Select"
        />
      ),
    },
    {
      key: "actions",
      header: "Action",
      width: "56px",
      render: (_: any, row: AssignQARow) => (
        <EditDeleteCell
          onEditClick={() => onApproveClick?.(row)}
          onDeleteClick={() => onSendToQAClick?.(row)}
        />
      ),
    },
  ];

  const getRowBgColor = (row: AssignQARow, rowIndex: number) => {
    if (row.isRush) {
      return "#EFDBDF"; 
    }
    if (rowIndex % 2 === 0) {
      return "#F8FBFF"; 
    }
    return "#FFFFFF"; 
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