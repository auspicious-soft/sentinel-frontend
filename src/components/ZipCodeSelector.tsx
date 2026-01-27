"use client";

import React, { useState } from "react";
import { ChevronRight, X } from "lucide-react";

export interface ZipCode {
  id: number;
  code: string;
  city: string;
}

interface ZipCodeManagerProps {
  availableZips?: ZipCode[];
  selectedZips?: ZipCode[];
  onSelectionChange?: (selectedZips: ZipCode[]) => void;
  title?: string;
  maxHeight?: string;
  className?: string;
}

export const ZipCodeManager: React.FC<ZipCodeManagerProps> = ({
  availableZips: initialAvailableZips = [],
  selectedZips: initialSelectedZips = [],
  onSelectionChange,
  title = "Select ZipCodes",
  maxHeight = "160px",
  className = "",
}) => {
  const [availableZips, setAvailableZips] =
    useState<ZipCode[]>(initialAvailableZips);
  const [selectedZips, setSelectedZips] =
    useState<ZipCode[]>(initialSelectedZips);
  const [selectedAvailableIds, setSelectedAvailableIds] = useState<number[]>(
    [],
  );
  const [selectedAssignedIds, setSelectedAssignedIds] = useState<number[]>([]);

  const updateSelections = (
    newAvailable: ZipCode[],
    newSelected: ZipCode[],
  ) => {
    setAvailableZips(newAvailable);
    setSelectedZips(newSelected);
    onSelectionChange?.(newSelected);
  };

  const toggleAvailableSelection = (id: number) => {
    setSelectedAvailableIds((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id],
    );
  };

  const toggleAssignedSelection = (id: number) => {
    setSelectedAssignedIds((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id],
    );
  };

  const moveAllToSelected = () => {
    const newSelected = [...selectedZips, ...availableZips];
    const newAvailable: ZipCode[] = [];
    updateSelections(newAvailable, newSelected);
    setSelectedAvailableIds([]);
  };

  const moveSelectedToAssigned = () => {
    const itemsToMove = availableZips.filter((zip) =>
      selectedAvailableIds.includes(zip.id),
    );
    const newSelected = [...selectedZips, ...itemsToMove];
    const newAvailable = availableZips.filter(
      (zip) => !selectedAvailableIds.includes(zip.id),
    );
    updateSelections(newAvailable, newSelected);
    setSelectedAvailableIds([]);
  };

  const moveSelectedToAvailable = () => {
    const itemsToMove = selectedZips.filter((zip) =>
      selectedAssignedIds.includes(zip.id),
    );
    const newAvailable = [...availableZips, ...itemsToMove];
    const newSelected = selectedZips.filter(
      (zip) => !selectedAssignedIds.includes(zip.id),
    );
    updateSelections(newAvailable, newSelected);
    setSelectedAssignedIds([]);
  };

  const moveAllToAvailable = () => {
    const newAvailable = [...availableZips, ...selectedZips];
    const newSelected: ZipCode[] = [];
    updateSelections(newAvailable, newSelected);
    setSelectedAssignedIds([]);
  };

  const removeFromSelected = (id: number) => {
    const itemToMove = selectedZips.find((zip) => zip.id === id);
    if (itemToMove) {
      const newAvailable = [...availableZips, itemToMove];
      const newSelected = selectedZips.filter((zip) => zip.id !== id);
      updateSelections(newAvailable, newSelected);
    }
  };

  return (
    <div className={`w-full flex flex-col gap-2 ${className}`}>
      <div className="flex justify-between items-center">
        <h3 className="self-stretch justify-center text-Paragraph text-sm font-normal font-['Plus_Jakarta_Sans']">{title}</h3>
      </div>

      <div className="flex flex-col sm:flex-row items-stretch gap-4">

<div className="w-full sm:flex-1">
          <div
            className="px-3.5 py-2.5 bg-white rounded-[10px]  overflow-y-auto scrollbar-hide w-full "
            style={{ maxHeight, minHeight: maxHeight }}
          >
            <div className="flex flex-col gap-2.5">
              {availableZips.length === 0 ? (
                <div className="text-center text-gray-400 py-8">
                  No zipcodes available
                </div>
              ) : (
                availableZips.map((zip) => (
                  <div
                    key={zip.id}
                    onClick={() => toggleAvailableSelection(zip.id)}
                    className={`px-3 py-1.5 rounded cursor-pointer transition-all ${
                      selectedAvailableIds.includes(zip.id)
                        ? "bg-primary-blue text-white"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    <div className="text-xs font-normal flex justify-between items-center">
                      <span>{zip.code}</span>
                      <span>{zip.city}</span>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>

        <div className="flex flex-row sm:flex-col gap-4 sm:gap-10 justify-center">
          <div className="flex flex-col gap-1.5">
            <button
              type="button"
              onClick={moveAllToSelected}
              disabled={availableZips.length === 0}
              className="px-1.5 py-1 bg-white rounded-lg hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed transition-all flex items-center justify-center"
              title="Move all to selected"
            >
              <div className="flex">
                <ChevronRight className="w-4 h-4" />
                <ChevronRight className="w-4 h-4" />
                <ChevronRight className="w-4 h-4" />
              </div>
            </button>

            <button
              type="button"
              onClick={moveSelectedToAssigned}
              disabled={selectedAvailableIds.length === 0}
              className="px-1.5 py-1 bg-white rounded-lg  hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed transition-all flex items-center justify-center"
              title="Move selected to assigned"
            >
              <ChevronRight className="w-4 h-4" />
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          <div className="flex flex-col gap-1.5">
            <button
              type="button"
              onClick={moveSelectedToAvailable}
              disabled={selectedAssignedIds.length === 0}
              className="px-1.5 py-1 bg-white rounded-lg  hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed transition-all rotate-180 flex items-center justify-center"
              title="Move selected to available"
            >
              <ChevronRight className="w-4 h-4" />
              <ChevronRight className="w-4 h-4" />
            </button>

            <button
              type="button"
              onClick={moveAllToAvailable}
              disabled={selectedZips.length === 0}
              className="px-1.5 py-1 bg-white rounded-lg  hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed transition-all rotate-180 flex items-center justify-center"
              title="Move all to available"
            >
              <div className="flex">
                <ChevronRight className="w-4 h-4" />
                <ChevronRight className="w-4 h-4" />
                <ChevronRight className="w-4 h-4" />
              </div>
            </button>
          </div>
        </div>

<div className="w-full sm:flex-1">
          <div
            className="px-3.5 py-2.5 bg-white rounded-[10px] border border-gray-200 overflow-y-auto scrollbar-hide"
            style={{ maxHeight, minHeight: maxHeight }}
          >
            <div className="flex flex-col gap-2.5">
              {selectedZips.length === 0 ? (
                <div className="text-center text-Paragraph py-8">
                  No zipcodes selected
                </div>
              ) : (
                selectedZips.map((zip) => (
                  <div
                    key={zip.id}
                    onClick={() => toggleAssignedSelection(zip.id)}
                    className={`px-3 py-1.5 rounded cursor-pointer transition-all flex items-center justify-between gap-2 ${
                      selectedAssignedIds.includes(zip.id)
                        ? "bg-primary-blue text-white"
                        : "bg-primary-red text-white hover:bg-primary-red"
                    }`}
                  >
                    <div className="text-xs font-normal flex-1 flex justify-between">
                      <span>{zip.code}</span>
                      <span>{zip.city}</span>
                    </div>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        removeFromSelected(zip.id);
                      }}
                      className="w-5 h-5 flex items-center justify-center hover:bg-white/20 rounded transition-all"
                      title="Remove"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
