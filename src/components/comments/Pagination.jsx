import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Pagination = ({ 
  currentPage, 
  totalPages, 
  pageSize, 
  totalItems, 
  onPageChange, 
  onPageSizeChange 
}) => {
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = Math.min(startIndex + pageSize, totalItems);

  if (totalPages <= 1) return null;

  return (
    <div className="px-4 py-3 bg-white border-t border-gray-200">
      <div className="flex items-center justify-between">
        <div className="text-sm text-gray-600">
          {startIndex + 1} to {endIndex} of {totalItems} items
        </div>
        
        <div className="flex items-center space-x-4">
          <select
            value={pageSize}
            onChange={(e) => onPageSizeChange(Number(e.target.value))}
            className="text-sm border border-gray-300 rounded px-2 py-1 focus:ring-1 focus:ring-gray-400 focus:border-gray-400 outline-none"
          >
            <option value={10}>10</option>
            <option value={50}>50</option>
            <option value={100}>100</option>
          </select>
          
          <div className="flex items-center space-x-1">
            <button
              onClick={() => onPageChange(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
              className="p-1 rounded border border-gray-300 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            
            <span className="text-sm text-gray-600 px-2">
              {currentPage}
            </span>
            
            <button
              onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
              disabled={currentPage === totalPages}
              className="p-1 rounded border border-gray-300 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
            
            <span className="text-sm text-gray-600 ml-2">
              / Page
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pagination;