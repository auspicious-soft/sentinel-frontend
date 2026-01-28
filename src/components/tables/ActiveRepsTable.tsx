import React from "react";
import { BaseTable } from "./BaseTable";
import { DeleteEyeCell } from "./cells";

export const ActiveRepsTable = <T extends Record<string, any>>({
  data,
  onView,
}: {
  data: T[];
  onView?: (row: T) => void;
}) => {
  const columns = [
    {
      key: "name",
      header: "Name",
      width: "flex-1",
      sortable: true,
    },
    {
      key: "email",
      header: "Email Address",
      width: "flex-1",
      sortable: true,
    },
    {
      key: "phoneNumber",
      header: "Phone Number",
      width: "flex-1",
      sortable: true,
    },
    {
      key: "queueCount",
      header: "Queue Count",
      width: "flex-1",
      sortable: true,
    },
    {
      key: "finalReview",
      header: "Final Review ?",
      width: "flex-1",
      sortable: true,
    },
    {
      key: "action",
      header: "Action",
      width: "56px",
     render: (_: any, row: T) => (
        <DeleteEyeCell onClick={() => onView?.(row)} />
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
