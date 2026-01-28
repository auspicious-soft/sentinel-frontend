// components/tables/TableWrapper.tsx
"use client";

import React, { useState, useEffect } from "react";
import { BaseTable } from "./BaseTable";
import { ThumbnailImageGallery } from "./thumbnail/ThumbnailImageGallery";

interface TableWrapperProps<T> {
  columns: any[];
  data: T[];
  selectedRows?: (string | number)[];
  onRowSelect?: (ids: (string | number)[]) => void;
  showCheckboxes?: boolean;
  headerBgColor?: string;
  getRowBgColor?: (row: T, rowIndex: number) => string;
  thumbnailMode?: boolean;
  imageKey?: keyof T; // Key to access images array in row
  onRowClick?: (row: T, rowIndex: number) => void;
  className?: string;
}

export function TableWrapper<T extends Record<string, any>>({
  columns,
  data,
  selectedRows,
  onRowSelect,
  showCheckboxes = false,
  headerBgColor = "#004990",
  getRowBgColor,
  thumbnailMode = false,
  imageKey = "images",
  onRowClick,
  className = "",
}: TableWrapperProps<T>) {
  const [expandedRowIds, setExpandedRowIds] = useState<(string | number)[]>([]);
  const [internalThumbnailMode, setInternalThumbnailMode] = useState(thumbnailMode);

  // Update expanded rows when thumbnail mode changes
  useEffect(() => {
    if (internalThumbnailMode) {
      // Expand all rows that have images
      const rowsWithImages = data
        .filter(row => row[imageKey]?.length > 0)
        .map(row => row.id);
      setExpandedRowIds(rowsWithImages);
    } else {
      // Collapse all rows
      setExpandedRowIds([]);
    }
  }, [internalThumbnailMode, data, imageKey]);

  // Update when prop changes
  useEffect(() => {
    setInternalThumbnailMode(thumbnailMode);
  }, [thumbnailMode]);

  const toggleRowExpand = (rowId: string | number) => {
    setExpandedRowIds(prev =>
      prev.includes(rowId)
        ? prev.filter(id => id !== rowId)
        : [...prev, rowId]
    );
  };

  const handleRowClick = (row: T, rowIndex: number) => {
    // Toggle expand/collapse on row click
    toggleRowExpand(row.id);
    onRowClick?.(row, rowIndex);
  };

  const renderExpandedRow = (row: T) => {
    const images = row[imageKey];
    if (!images || images.length === 0) return null;

    return (
      <ThumbnailImageGallery 
        images={images} 
        thumbnailMode={internalThumbnailMode}
      />
    );
  };

  return (
    <BaseTable
      columns={columns}
      data={data}
      selectedRows={selectedRows}
      onRowSelect={onRowSelect}
      showCheckboxes={showCheckboxes}
      headerBgColor={headerBgColor}
      getRowBgColor={getRowBgColor}
      onRowClick={handleRowClick}
      renderExpandedRow={renderExpandedRow}
      expandedRowIds={expandedRowIds}
      className={className}
    />
  );
}