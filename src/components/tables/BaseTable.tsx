// components/tables/BaseTable.tsx
'use client';

import React, { useState } from 'react';
import { TableProps } from '../types/table';
import { TABLE_HEADER, TABLE_VALUES } from '@/styles/assets';


export function BaseTable<T extends Record<string, any>>({
  columns,
  data,
  selectedRows = [],
  onRowSelect,
  rowKey = 'id',
  showCheckboxes = false,
  showHeader = true,
  headerBgColor = '#004990', // sky-800
  headerTextColor = '#FFFFFF',
  stripedRows = false,
  rowHeight = '48px',
  maxHeight,
  className = '',
  onRowClick,
  renderExpandedRow,
  expandedRowIds = [],
}: TableProps<T>) {
  
  const [internalSelected, setInternalSelected] = useState<(string | number)[]>(selectedRows);

  const handleSelectAll = (checked: boolean) => {
    const allIds = data.map(row => 
      typeof rowKey === 'function' ? rowKey(row) : row[rowKey]
    );
    const newSelected = checked ? allIds : [];
    setInternalSelected(newSelected);
    onRowSelect?.(newSelected);
  };

  const handleSelectRow = (rowId: string | number, checked: boolean) => {
    const newSelected = checked 
      ? [...internalSelected, rowId]
      : internalSelected.filter(id => id !== rowId);
    setInternalSelected(newSelected);
    onRowSelect?.(newSelected);
  };

  const isRowSelected = (row: T) => {
    const rowId = typeof rowKey === 'function' ? rowKey(row) : row[rowKey];
    return internalSelected.includes(rowId);
  };

  const isAllSelected = data.length > 0 && internalSelected.length === data.length;

  return (
    <div className={`w-full rounded-[10px] overflow-hidden ${className}`}>
      <div 
        className="overflow-x-auto"
        style={maxHeight ? { maxHeight, overflowY: 'auto' } : {}}
      >
        <table className="w-full border-collapse">
          {/* Table Header */}
          {showHeader && (
            <thead>
              <tr 
                className="border-b border-white/10"
                style={{ backgroundColor: headerBgColor }}
              >
                {showCheckboxes && (
                  <th className="px-4 py-3 w-20">
                    <div className="flex items-center justify-start gap-2.5">
                      <input
                        type="checkbox"
                        checked={isAllSelected}
                        onChange={(e) => handleSelectAll(e.target.checked)}
                        className="w-5 h-5 rounded-[5px] outline-[0.77px] outline-stone-300 backdrop-blur-[1.56px]"
                      />
                      <span 
                        className={`text-sm font-medium leading-8 ${TABLE_HEADER}`}
                        style={{ color: headerTextColor }}
                      >
                        All
                      </span>
                    </div>
                  </th>
                )}
                
                {columns.map((column, index) => (
                  <th
                    key={column.key || index}
                    className="px-4 py-3"
                    style={{
                      width: column.width,
                      textAlign: column.align,
                      minWidth: column.width,
                    }}
                  >
                    <div className={`flex items-center gap-1 ${column.headerClassName}`}>
                      <span 
                        className={`text-sm font-medium leading-8 ${TABLE_HEADER}`}
                        style={{ color: headerTextColor }}
                      >
                        {column.header}
                      </span>
                      {/* Optional sort indicator */}
                      {column.sortable && (
                        <span className="w-4 h-4 opacity-50">
                          {/* Sort icon would go here */}
                        </span>
                      )}
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
          )}

          {/* Table Body */}
          <tbody>
            {data.map((row, rowIndex) => {
              const rowId = typeof rowKey === 'function' ? rowKey(row) : row[rowKey];
              const isSelected = isRowSelected(row);
              const isExpanded = expandedRowIds.includes(rowId);
              const rowBgColor = stripedRows && rowIndex % 2 === 0 ? '#F3F4F6' : '#FFFFFF';

              return (
                <React.Fragment key={rowId}>
                  <tr
                    onClick={() => onRowClick?.(row, rowIndex)}
                    className={`border-b border-gray-200 hover:bg-gray-50 ${
                      onRowClick ? 'cursor-pointer' : ''
                    }`}
                    style={{
                      backgroundColor: rowBgColor,
                      height: rowHeight,
                    }}
                  >
                    {showCheckboxes && (
                      <td className="px-4">
                        <div className="flex items-center justify-start">
                          <input
                            type="checkbox"
                            checked={isSelected}
                            onChange={(e) => handleSelectRow(rowId, e.target.checked)}
                            className="w-5 h-5 rounded-[5px] outline-[0.77px] outline-stone-300 backdrop-blur-[1.56px]"
                          />
                        </div>
                      </td>
                    )}

                    {columns.map((column, colIndex) => {
                      const cellValue = row[column.key];
                      
                      return (
                        <td
                          key={`${rowId}-${column.key}`}
                          className={`px-4 ${column.cellClassName || ''}`}
                          style={{
                            textAlign: column.align,
                          }}
                        >
                          {column.render 
                            ? column.render(cellValue, row, rowIndex)
                            : (
                              <div className={`${TABLE_VALUES}`}>
                                {cellValue}
                              </div>
                            )
                          }
                        </td>
                      );
                    })}
                  </tr>

                  {/* Expanded Row Content */}
                  {isExpanded && renderExpandedRow && (
                    <tr>
                      <td 
                        colSpan={columns.length + (showCheckboxes ? 1 : 0)}
                        className="p-0 "
                      >
                        {renderExpandedRow(row, rowIndex)}
                      </td>
                    </tr>
                  )}
                </React.Fragment>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}