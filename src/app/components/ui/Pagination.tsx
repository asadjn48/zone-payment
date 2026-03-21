import React from 'react';

interface PaginationProps {
  totalItems: number;
  itemsDisplayed?: number;
}

export const Pagination = ({ totalItems, itemsDisplayed = 10 }: PaginationProps) => {
  const minDisplayed = totalItems > 0 ? 1 : 0;
  const maxDisplayed = Math.min(itemsDisplayed, totalItems);

  return (
    <div className="p-6 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-500 bg-white">
      <div>
        Showing {minDisplayed} to {maxDisplayed} of {totalItems} entries
      </div>
      <div className="flex items-center gap-1">
        <button 
          className="px-3 py-1.5 border border-border rounded hover:bg-gray-50 transition text-gray-400 font-medium disabled:opacity-50"
          disabled={totalItems === 0}
        >
          Previous
        </button>
        <button className="px-3 py-1.5 rounded bg-primary text-white font-medium">
          1
        </button>
        <button 
          className="px-3 py-1.5 border border-border rounded hover:bg-gray-50 transition text-gray-600 font-medium disabled:opacity-50"
          disabled={totalItems <= itemsDisplayed}
        >
          Next
        </button>
      </div>
    </div>
  );
};