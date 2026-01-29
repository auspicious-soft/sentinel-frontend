import { BaseTable } from "./BaseTable";
import { ReAssignEye } from "./cells";

export const ReAssignTable = <T extends Record<string, any>>({
  data,
  selectedRows,
  onRowSelect,
onView
}: {
  data: T[];
  selectedRows?: (string | number)[];
  onRowSelect?: (ids: (string | number)[]) => void;
  onView?: (row: T) => void;
}) => {
  const columns = [
    {
      key: "name",
      header: "Name",
      width: "150px",
      sortable: true,
    },
    {
      key: "status",
      header: "Status",
  width: "146px",
        sortable: true,
      render: (_: any, row: T) => (
        <div className={`flex gap-4 px-3 py-1.75 justify-center rounded-md ${row.status === "Accepted" ? "bg-primary-green" : "bg-red" }`}>
          <button
            className="text-xs font-medium  text-White"
          >
            {row.status}
          </button>
         
        </div>
      ),
    },
     {
      key: "address",
      header: "Address",
      width: "240px",
    },
    {
      key: "city",
      header: "City",
      width: "56px",
      sortable: true,
    },
    {
      key: "state",
      header: "State",
      width: "56px",
      sortable: true,
    },
      {
      key: "requestDate",
      header: "Request Date",
      width: "150px",
      sortable: true,
    },
     {
      key: "inspectionType",
      header: "Inspection Type",
  width: "50px",
        sortable: true,
      render: (_: any, row: T) => (
        <span className="text-sm font-normal underline text-Paragraph">
          {row.inspectionType}
        </span>
      ),
    },
    {
         key: "action",
         header: "Action",
         width: "56px",
        render: (_: any, row: T) => ( // ← Make sure row is passed here
           <ReAssignEye onClick={() => onView?.(row)} />
         ),
       },
   
  ];

  const getRowBgColor = (row: T, rowIndex: number) => {
    if (row.isRushInspection) {
      return "#EFDBDF"; 
    }
    if (rowIndex % 2 === 0) {
      return "#F8FBFF"; 
    }
    return "#FFFFFF"; 
  };

  return (
    <BaseTable
      columns={columns}
      data={data}
      selectedRows={selectedRows}
      onRowSelect={onRowSelect}
      showCheckboxes={true}
      headerBgColor="#004990"
      getRowBgColor={getRowBgColor}
    />
  );
};