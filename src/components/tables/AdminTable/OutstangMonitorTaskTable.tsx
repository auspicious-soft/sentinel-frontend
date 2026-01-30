import { BaseTable } from "../BaseTable";

export const OutstandingMonitorTaskTable = <T extends Record<string, any>>({
  data,
  selectedRows,
  onRowSelect,

}: {
  data: T[];
  selectedRows?: (string | number)[];
  onRowSelect?: (ids: (string | number)[]) => void;
  onView?: (row: T) => void;
  onApprove?: (row: T) => void;
  onSendToFinalReview?: (row: T) => void;
  onSendToQA?: (row: T) => void;
  onFieldRepClick?: (row: T) => void; 
}) => {
  const columns = [
    {
      key: "name",
      header: "Name",
      width: "flex-1",
      sortable: true,
    },
    {
      key: "inspectionType",
      header: "Inspection Type",
  width: "flex-1",
        sortable: true,
      render: (_: any, row: T) => (
        <span className="text-sm font-normal underline text-Paragraph">
          {row.inspectionType}
        </span>
      ),
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
      key: "requestDate",
      header: "RequestDate",
      width: "flex-1",
      sortable: true,
    },
    {
      key: "coId",
      header: "Co Id",
       width: "flex-1",
      sortable: true,
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
      key: "country",
      header: "Country",
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
      key: "repId",
      header: "Rep Id",
      width: "56px",
      sortable: true,
    },
    {
      key: "repName",
      header: "Rep Name",
      width: "136px",
      sortable: true,
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