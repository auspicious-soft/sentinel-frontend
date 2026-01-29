import React from "react";
import { BaseTable } from "./BaseTable";
import { ActionEyeCell, IconActionsCell, StatusBadgeCell } from "./cells";

export const SearchInspectionTable = <T extends Record<string, any>>({
  data,
  onView,
  onEdit,
  onDelete,
}: {
  data: T[];
  onView?: (row: T) => void;
  onEdit?: (row: T) => void;
  onDelete?: (row: T) => void;
}) => {
  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "assigned":
        return { variant: "success" as const, color: "#CDBF28" }; // Yellow/assigned-FR
      case "in progress":
        return { variant: "warning" as const, color: "#CCA567" }; // Brown/in-qa
      case "completed":
        return { variant: "success" as const, color: "#49BF5F" }; // Green
      case "pending":
        return { variant: "info" as const, color: "#4268A2" }; // Blue/in-final-review
      case "qa review":
        return { variant: "info" as const, color: "#CCA567" }; // Brown/in-qa
      case "cancelled":
      case "rejected":
        return { variant: "error" as const, color: "#FF6262" }; // Red/not-assigned
      case "on hold":
        return {
          variant: "custom" as const,
          bgColor: "#E5E7EB",
          textColor: "#000000",
        }; // Gray
      default:
        return {
          variant: "custom" as const,
          bgColor: "#F3F4F6",
          textColor: "#000000",
        };
    }
  };

  const columns = [
    {
      key: "name",
      header: "Name",
      width: "120px",
    },
       {
      key: "policy",
      header: "Policy #",
      width: "150px",
    },
  {
      key: "dateRequested",
      header: "Date Requested",
      width: "160px",
    },
        {
      key: "inspectionType",
      header: "Inspection Type",
      width: "60px",
       render: (_: any, row: any) => (
        <span className=" underline text-Paragraph">{row.inspectionType}</span>
      ),
    },
    {
      key: "address",
      header: "Address",
      width: "250px",
    },

    {
      key: "city",
      header: "City",
      width: "120px",
    },
    {
      key: "state",
      header: "State",
      width: "120px",
    },
    {
      key: "zip",
      header: "Zip",
      width: "120px",
    },
    {
      key: "clientCost",
      header: "Client Cost",
      width: "140px",
    },
    {
      key: "fieldRepComm",
      header: "Field Rep Com.",
      width: "140px",
    },
    {
      key: "status",
      header: "Status",
      width: "120px",
      render: (value: string) => {
        const statusConfig = getStatusColor(value);
        return (
          <StatusBadgeCell
            status={value}
            variant={statusConfig.variant}
            bgColor={statusConfig.bgColor}
            textColor={statusConfig.textColor}
          />
        );
      },
    },
   
   {
      key: "actionsText",
      header: "Actions",
      width: "150px",
      render: (_: any, row: any) => (
        <div className="flex flex-col gap-1">
          <button className="text-sm text-primary-red underline text-center">
            View Details
          </button>
          <button className="text-sm text-primary-red underline text-center">
            Edit Inspection
          </button>
        </div>
      ),
    },
   
    {
      key: "action",
      header: "View / Delete",
      width: "200px",
      align: "center" as const,
      render: (_: any, row: any) => (
        <IconActionsCell
          onView={() => onView?.(row)}
          onEdit={() => onEdit?.(row)}
          onDelete={() => onDelete?.(row)}
        />
      ),
    },
  ];
  return (
    <BaseTable
      columns={columns}
      data={data}
      headerBgColor="#004990"
      stripedRows={true}
    />
  );
};
