import { ChevronLeft, ChevronRight } from "lucide-react";
import React from "react";

export default function Pagination({ currentPage, totalPages, onPageChange }) {
  const getPaginationRange = () => {
    const range = [];
    const siblingCount = 1; // how many pages to show on each side of current
    const totalNumbers = siblingCount * 2 + 5; // first, last, current + siblings + 2 dots

    if (totalPages <= totalNumbers) {
      // Less than total numbers to show, so show all
      for (let i = 1; i <= totalPages; i++) range.push(i);
    } else {
      const leftSibling = Math.max(currentPage - siblingCount, 2);
      const rightSibling = Math.min(currentPage + siblingCount, totalPages - 1);

      range.push(1); // First page

      if (leftSibling > 2) range.push("...");

      for (let i = leftSibling; i <= rightSibling; i++) {
        range.push(i);
      }

      if (rightSibling < totalPages - 1) range.push("...");

      range.push(totalPages); // Last page
    }

    return range;
  };

  const paginationRange = getPaginationRange();

  return (
    <div className="py-10 text-center">
      <ul className="flex items-center justify-center gap-2">
        {/* Previous */}
        <li>
          <button
            onClick={() => onPageChange(currentPage - 1)}
            className="flex h-10 min-w-10 items-center justify-center rounded-lg border border-stroke bg-white px-2 text-base font-medium text-dark hover:bg-gray-100 disabled:opacity-50 cursor-pointer"
            disabled={currentPage === 1}
          >
            <ChevronLeft className="w-4" />
          </button>
        </li>

        {/* Page Numbers */}
        {paginationRange.map((num, idx) => (
          <li key={idx}>
            {num === "..." ? (
              <span className="px-3 text-gray-400">...</span>
            ) : (
              <button
                onClick={() => onPageChange(num)}
                className={`flex h-10 min-w-10 items-center justify-center rounded-lg px-3 text-base font-medium cursor-pointer ${
                  currentPage === num
                    ? "bg-blue text-white"
                    : "bg-zinc-200 text-dark hover:bg-gray-100"
                }`}
              >
                {num}
              </button>
            )}
          </li>
        ))}

        {/* Next */}
        <li>
          <button
            disabled={currentPage === totalPages}
            onClick={() => onPageChange(currentPage + 1)}
            className="flex h-10 min-w-10 items-center justify-center rounded-lg border border-stroke bg-white px-2 text-base font-medium text-dark hover:bg-gray-100 disabled:opacity-50 cursor-pointer"
          >
            <ChevronRight className="w-4" />
          </button>
        </li>
      </ul>
    </div>
  );
}
