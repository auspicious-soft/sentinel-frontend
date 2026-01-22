import React from 'react';
import { BaseTable } from './BaseTable';
import { ActionEyeCell } from './cells';

export const CompanyTable = <T extends Record<string, any>>({
  data,
  onView,
}: {
  data: T[];
  onView?: (row: T) => void;
}) => {
  const columns = [
    {
      key: 'srNo',
      header: 'Sr No.',
      width: '80px',
    },
    {
      key: 'companyName',
      header: 'Company Name',
      width: '176px',
    },
    {
      key: 'companyContact',
      header: 'Company Contact',
      width: 'flex-1',
    },
    {
      key: 'companyEmail',
      header: 'Company Email',
      width: '224px',
    },
    {
      key: 'phoneNumber',
      header: 'Phone Number',
      width: 'flex-1',
    },
    {
      key: 'fax',
      header: 'Fax',
      width: 'flex-1',
    },
    {
      key: 'action',
      header: 'Action',
      width: '56px',
      render: (row: any) => <ActionEyeCell onClick={() => onView?.(row)} />,
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