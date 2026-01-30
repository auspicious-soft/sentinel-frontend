import React from "react";
import { BaseTable } from "../BaseTable";
import { ActionEyeCell } from "../cells";

export const CompanyTable = <T extends Record<string, any>>({
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
      width: "100px",
      sortable: true,
    },
    {
      key: "companyName",
      header: "Company Name",
      width: "176px",
      sortable: true,
    },
    {
      key: "companyContact",
      header: "Company Contact",
      width: "flex-1",
      sortable: true,
    },
    {
      key: "companyEmail",
      header: "Company Email",
      width: "224px",
      sortable: true,
    },
    {
      key: "phoneNumber",
      header: "Phone Number",
      width: "flex-1",
      sortable: true,
    },
    {
      key: "fax",
      header: "Fax",
      width: "flex-1",
      sortable: true,
    },
    {
      key: "action",
      header: "Action",
      width: "56px",
     render: (_: any, row: T) => ( // ← Make sure row is passed here
        <ActionEyeCell onClick={() => onView?.(row)} />
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
