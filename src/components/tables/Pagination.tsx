// components/tables/Pagination.tsx
export const TablePagination: React.FC<{
  currentPage: number;
  totalPages: number;
  totalItems: number;
  itemsPerPage: number;
  onPageChange: (page: number) => void;
  onItemsPerPageChange?: (items: number) => void;
  showingText?: string;
}> = ({
  currentPage,
  totalPages,
  totalItems,
  itemsPerPage,
  onPageChange,
  onItemsPerPageChange,
  showingText = 'Showing {from} to {to} of {total} results',
}) => {
  const from = (currentPage - 1) * itemsPerPage + 1;
  const to = Math.min(currentPage * itemsPerPage, totalItems);
  
  const displayedText = showingText
    .replace('{from}', from.toString())
    .replace('{to}', to.toString())
    .replace('{total}', totalItems.toString());

  const renderPageNumbers = () => {
    const pages = [];
    const maxVisible = 5;
    
    if (totalPages <= maxVisible) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      pages.push(1);
      
      if (currentPage > 3) pages.push('...');
      
      const start = Math.max(2, currentPage - 1);
      const end = Math.min(totalPages - 1, currentPage + 1);
      
      for (let i = start; i <= end; i++) {
        pages.push(i);
      }
      
      if (currentPage < totalPages - 2) pages.push('...');
      pages.push(totalPages);
    }
    
    return pages;
  };

  return (
    <div className="flex justify-between items-center pt-5">
      {/* Left side - Results per page */}
      <div className="flex items-center gap-2">
        <span className="text-xs text-Paragraph">Result per page</span>
        <select
          value={itemsPerPage}
          onChange={(e) => onItemsPerPageChange?.(Number(e.target.value))}
          className="px-3 py-2 bg-white rounded  -outline-offset-1 outline-gray-200"
        >
          {[10, 25, 50, 100].map((num) => (
            <option key={num} value={num}>
              {num}
            </option>
          ))}
        </select>
      </div>

      {/* Right side - Pagination */}
      <div className="flex items-center gap-1.5">
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-2.5 py-1.5 bg-white rounded-lg  -outline-offset-1 outline-gray-200 flex items-center gap-1.5 disabled:opacity-50"
        >
          <span className="text-xs">Back</span>
        </button>

        {renderPageNumbers().map((page, index) => (
          page === '...' ? (
            <div key={`ellipsis-${index}`} className="w-8 px-2.5 py-1.5">
              ...
            </div>
          ) : (
            <button
              key={page}
              onClick={() => onPageChange(page as number)}
              className={`w-8 px-2.5 py-1.5 rounded-lg ${
                currentPage === page
                  ? 'bg-rose-800 text-white'
                  : 'bg-white  -outline-offset-1 outline-gray-200'
              }`}
            >
              <span className="text-xs">{page}</span>
            </button>
          )
        ))}

        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-2.5 py-1.5 bg-white rounded-lg -outline-offset-1 outline-gray-200 flex items-center gap-1.5 disabled:opacity-50"
        >
          <span className="text-xs">Next</span>
        </button>
      </div>
    </div>
  );
};