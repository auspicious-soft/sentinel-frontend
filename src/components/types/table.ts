// types/table.ts
export type TableColumn<T> = {
  key: string;
  header: string | React.ReactNode;
  width?: string | number;
  align?: 'left' | 'center' | 'right';
  sortable?: boolean;
  render?: (value: any, row: T, rowIndex: number) => React.ReactNode;
  cellClassName?: string;
  headerClassName?: string;
};

export type TableRowProps = {
  isSelected?: boolean;
  isClickable?: boolean;
  bgColor?: string;
  className?: string;
  onClick?: () => void;
};

export type TableProps<T> = {
  columns: TableColumn<T>[];
  data: T[];
  selectedRows?: (string | number)[];
  onRowSelect?: (rowIds: (string | number)[]) => void;
  rowKey?: keyof T | ((row: T) => string | number);
  showCheckboxes?: boolean;
  showHeader?: boolean;
  headerBgColor?: string;
  headerTextColor?: string;
  stripedRows?: boolean;
  rowHeight?: string;
  maxHeight?: string;
  className?: string;
  onRowClick?: (row: T, index: number) => void;
  renderExpandedRow?: (row: T, index: number) => React.ReactNode;
  expandedRowIds?: (string | number)[];
    getRowBgColor?: (row: T, rowIndex: number) => string | undefined;
  defaultRowBgColor?: string;
  stripedRowBgColor?: string;
  stripedAlternateBgColor?: string;
};

export type CellType = 
  | 'text'
  | 'checkbox'
  | 'dropdown'
  | 'button'
  | 'icon'
  | 'link'
  | 'status-badge'
  | 'custom';