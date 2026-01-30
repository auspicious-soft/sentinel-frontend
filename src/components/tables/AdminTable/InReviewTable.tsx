"use client";

import React from "react";
import { StaticImageData } from "next/image";
import { DualActionTextCell, TextWithLinkCell } from "../cells";
import { TableWrapper } from "../TableWrapper";

interface InReviewRow {
  id: string | number;
  name: string;
  ensuredAddress: string;
  inspectionType: string;
  requestDate: string;
  coId: number;
  repDetails?: string;
  city: string;
  state: string;
  images?: (string | StaticImageData)[];
  isRush?: boolean;
  qa?: string;
}

interface InReviewTableProps {
  data: InReviewRow[];
  selectedRows?: (string | number)[];
  onRowSelect?: (ids: (string | number)[]) => void;
  onViewClick?: (row: InReviewRow) => void;
  thumbnailMode?: boolean;
}

export const InReviewTable: React.FC<InReviewTableProps> = ({
  data,
  selectedRows,
  onRowSelect,
  onViewClick,
  thumbnailMode = false,
}) => {
  const columns = [
    {
      key: "name",
      header: "Name",
      width: "164px",
      sortable: true,
      render: (_: any, row: InReviewRow) => (
        <DualActionTextCell
          primaryText={row.name}
          secondaryText="Return To Field Rep"
          primaryTextColor=""
          secondaryTextColor={"text-[#9D2137]"}
          secondayUnderline={true}
        />
      ),
    },
    {
      key: "ensuredAddress",
      header: "Insured Address",
      width: "240px",
      sortable: true,
    },
    {
      key: "inspectionType",
      header: "Insp. Type",
      width: "40px",
      sortable: true,
      render: (_: any, row: InReviewRow) => (
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
      key: "qa",
      header: "Name of QA",
      width: "150px",
      sortable: true,
      render: (_: any, row: InReviewRow) => (
        <TextWithLinkCell text={row.qa || ""} linkColor="#464646" underline={true} />
      ),
    },
  ];

  const getRowBgColor = (row: InReviewRow, rowIndex: number) => {
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
