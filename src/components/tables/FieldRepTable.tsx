import React from 'react';
import { BaseTable } from './BaseTable';
import { ActionEyeCell } from './cells';

export const FieldRepTable = <T extends Record<string, any>>({
  data,
  selectedRows,
  onRowSelect,
  onView,
}: {
  data: T[];
  selectedRows?: (string | number)[];
  onRowSelect?: (ids: (string | number)[]) => void;
  onView?: (row: T) => void;
}) => {
  const columns = [
    {
      key: 'repId',
      header: 'Rep ID',
      width: '96px',
    },
    {
      key: 'lastName',
      header: 'Last Name',
      width: 'flex-1',
    },
    {
      key: 'firstName',
      header: 'First Name',
      width: 'flex-1',
    },
    {
      key: 'city',
      header: 'City',
      width: 'flex-1',
    },
    {
      key: 'email',
      header: 'Email',
      width: 'flex-1',
    },
    {
      key: 'state',
      header: 'State',
      width: 'flex-1',
    },
    {
      key: 'phone',
      header: 'Phone',
      width: 'flex-1',
    },
    {
      key: 'action',
      header: 'Action',
      width: '56px',
      render: (_: any, row: T) => <ActionEyeCell onClick={() => onView?.(row)} />,
    },
  ];

  return (
   <BaseTable
      columns={columns}
      data={data}
      selectedRows={selectedRows}
      onRowSelect={onRowSelect}
      showCheckboxes={true}
      headerBgColor="#004990"
      stripedRows={true}
    />
  );
};