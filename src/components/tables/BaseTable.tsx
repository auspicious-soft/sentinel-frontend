// components/tables/BaseTable.tsx
"use client";

import React, { useState } from "react";
import { TableProps } from "../types/table";
import { TABLE_HEADER, TABLE_VALUES } from "@/styles/assets";
import { ChevronsUpDown } from "lucide-react";
import { CustomCheckbox } from "../Fields/CustomCheckbox";

export function BaseTable<T extends Record<string, any>>({
  columns,
  data,
  selectedRows = [],
  onRowSelect,
  rowKey = "id",
  showCheckboxes = false,
  showHeader = true,
  headerBgColor = "#004990", // sky-800
  headerTextColor = "#FFFFFF",
  stripedRows = false,
  rowHeight = "48px",
  maxHeight,
  className = "",
  onRowClick,
  renderExpandedRow,
  expandedRowIds = [],
  // New props for row colors
  getRowBgColor,
  defaultRowBgColor = "#F8FBFF", // Light blue background
  stripedRowBgColor = "#F8FBFF", // Same as default for consistency
  stripedAlternateBgColor = "#FFFFFF", // White for alternating
}: TableProps<T>) {
  const [internalSelected, setInternalSelected] =
    useState<(string | number)[]>(selectedRows);

  const handleSelectAll = (checked: boolean) => {
    const allIds = data.map((row) =>
      typeof rowKey === "function" ? rowKey(row) : row[rowKey],
    );
    const newSelected = checked ? allIds : [];
    setInternalSelected(newSelected);
    onRowSelect?.(newSelected);
  };

  const handleSelectRow = (rowId: string | number, checked: boolean) => {
    const newSelected = checked
      ? [...internalSelected, rowId]
      : internalSelected.filter((id) => id !== rowId);
    setInternalSelected(newSelected);
    onRowSelect?.(newSelected);
  };

  const isRowSelected = (row: T) => {
    const rowId = typeof rowKey === "function" ? rowKey(row) : row[rowKey];
    return internalSelected.includes(rowId);
  };

  const isAllSelected =
    data.length > 0 && internalSelected.length === data.length;

  const getRowBackgroundColor = (row: T, rowIndex: number) => {
    if (getRowBgColor) {
      const customColor = getRowBgColor(row, rowIndex);
      if (customColor) return customColor;
    }
    
    if (stripedRows) {
      return rowIndex % 2 === 0 ? stripedRowBgColor : stripedAlternateBgColor;
    }
    
    return defaultRowBgColor;
  };

  return (
    <div className={`w-full rounded-[10px] overflow-hidden ${className}`}>
      <div
        className="overflow-x-auto"
        style={maxHeight ? { maxHeight, overflowY: "auto" } : {}}
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
                  <th className="px-2 py-3 w-20">
                    <div className="flex items-center justify-start gap-1.5">
                      <CustomCheckbox
                        checked={isAllSelected}
                        onChange={handleSelectAll}
                        variant="header"
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
                    <div
                      className={`flex items-center gap-2 ${column.headerClassName}`}
                    >
                      <span
                        className={`text-sm font-medium ${TABLE_HEADER}`}
                        style={{ color: headerTextColor }}
                      >
                        {column.header}
                      </span>

                      {/* Optional sort indicator */}
                      {column.sortable && (
                        <span className="w-4 h-4 opacity-50 text-white">
                          <ChevronsUpDown className="w-4 h-4 " />
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
              const rowId =
                typeof rowKey === "function" ? rowKey(row) : row[rowKey];
              const isSelected = isRowSelected(row);
              const isExpanded = expandedRowIds.includes(rowId);
              const rowBgColor = getRowBackgroundColor(row, rowIndex);

              return (
                <React.Fragment key={rowId}>
                  <tr
                    onClick={() => onRowClick?.(row, rowIndex)}
                    className={` hover:bg-gray-50 ${
                      onRowClick ? "cursor-pointer" : ""
                    }`}
                    style={{
                      backgroundColor: rowBgColor,
                      height: rowHeight,
                    }}
                  >
                    {showCheckboxes && (
                      <td className="px-3">
                        <div className="flex items-center justify-start">
                          <CustomCheckbox
                            checked={isSelected}
                            onChange={(checked) =>
                              handleSelectRow(rowId, checked)
                            }
                            variant="row"
                          />
                        </div>
                      </td>
                    )}

                    {columns.map((column, colIndex) => {
                      const cellValue = row[column.key];

                      return (
                        <td
                          key={`${rowId}-${column.key}`}
                          className={`px-4 ${column.cellClassName || ""}`}
                          style={{
                            textAlign: column.align,
                          }}
                        >
                          {column.render ? (
                            column.render(cellValue, row, rowIndex)
                          ) : (
                            <div className={`${TABLE_VALUES}`}>{cellValue}</div>
                          )}
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