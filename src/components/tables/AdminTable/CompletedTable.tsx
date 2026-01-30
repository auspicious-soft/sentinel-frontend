"use client";

import React from "react";
import { StaticImageData } from "next/image";
import { DualActionTextCell, InspectionCostCell } from "../cells";
import { TableWrapper } from "../TableWrapper";

type EditMode = "cost" | "commission" | null;

interface CompletedRow {
  id: string | number;
  name: string;
  insuredAddress: string;
  city: string;
  state: string;
  inspectionType: string;
  requestDate: string;
  coId: number;
  repDetails?: string;
  clientBilled?: string;
  fieldRepBilled?: string;
  isRush?: boolean;
  isDuplicate?: boolean;
  editMode?: EditMode;
  inspectionCost: number;
  images?: (string | StaticImageData)[];
  qa?:string
}

interface InReviewTableProps {
  data: CompletedRow[];
  selectedRows?: (string | number)[];
  onRowSelect?: (ids: (string | number)[]) => void;
  onViewClick?: (row: CompletedRow) => void;
  thumbnailMode?: boolean;
  onCostChange?: (rowId: string | number, newCost: number) => void;
 onEditToggle?: (rowId: string | number, mode: EditMode) => void;
}

export const CompletedTable: React.FC<InReviewTableProps> = ({
  data,
  selectedRows,
  onRowSelect,
   onCostChange,
  onEditToggle,
  onViewClick,
  thumbnailMode = false,
}) => {


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
      key: "name",
      header: "Name",
      width: "164px",
      sortable: true,
    },
    {
      key: "insuredAddress",
      header: "Insured Address",
      width: "240px",
      sortable: true,
    },
     {
      key: "city",
      header: "City",
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
      key: "inspectionType",
      header: "Insp. Type",
      width: "40px",
      sortable: true,
      render: (_: any, row: CompletedRow) => (
        <span className=" underline text-Paragraph">{row.inspectionType}</span>
      ),
    },
    {
      key: "requestDate",
      header: "Request Date",
      width: "164px",
      sortable: true,
    },
    {
      key: "coId",
      header: "Co Id",
      width: "54px",
      sortable: true,
    },
    {
      key: "repDetails",
      header: "Rep Details",
      width: "100px",
      sortable: true,
    },
     {
      key: "clientBilled",
      header: "Client Billed",
      width: "100px",
      sortable: true,
    },
     {
      key: "fieldRepBilled",
      header: "Field Rep Billed",
      width: "100px",
      sortable: true,
    },

      {
          key: "inspectionCost",
          header: "Change Cost and Comission",
          width: "300px",
          render: (_: any, row: CompletedRow) => (
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
      header: "Name of QA",
      width: "180px",
      sortable: true,
      render: (_: any, row: CompletedRow) => (
             <DualActionTextCell
               primaryText={"Approve"}
               secondaryText="Return To Field Rep"
               primaryUnderline={true}
               primaryTextColor="text-[#9D2137]"
               secondaryTextColor={"text-[#9D2137]"}
               secondayUnderline={true}
             />
           ),
    },
  ];

  const getRowBgColor = (row: CompletedRow, rowIndex: number) => {
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
