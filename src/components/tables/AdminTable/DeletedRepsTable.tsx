import React from "react";
import { ActionTextCell } from "../cells";
import { BaseTable } from "../BaseTable";


export const DeletedRepsTable = <T extends Record<string, any>>({
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
      key: "action",
      header: "Action",
      width: "56px",
     render: (_: any, row: T) => (
        <ActionTextCell 
    text="Restore"
        onClick={() => onView?.(row)} 
        underline={true}
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
