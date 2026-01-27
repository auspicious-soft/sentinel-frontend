import React from "react";
import { BaseTable } from "./BaseTable";

export const CompanyUsers = <T extends Record<string, any>>({
  data,
  onView,
}: {
  data: T[];
  onView?: (row: T) => void;
}) => {
  const columns = [
    {
      key: "srNo",
      header: "Sr No.",
      width: "150px",
      sortable: true,
    },
    {
      key: "lastName",
      header: "Last Name",
      width: "240px",
    },
    {
      key: "firstName",
      header: "First Name",
      width: "224px",
    },
    {
      key: "email",
      header: "Email",
      width: "224px",
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
