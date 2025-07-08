import React from 'react';
import { ChevronDown } from 'lucide-react';

const SortButton = ({ field, children, sortField, sortDirection, onSort }) => {
  const getSortIcon = () => {
    if (sortField !== field) {
      return <ChevronDown className="w-3 h-3 text-gray-400 ml-1" />;
    }
    
    return (
      <ChevronDown 
        className={`w-3 h-3 ml-1 sort-indicator ${
          sortDirection === 'asc' ? 'sort-asc text-gray-600' : 
          sortDirection === 'desc' ? 'sort-desc text-gray-600' : 
          'text-gray-400'
        }`}
      />
    );
  };

  return (
    <button
      onClick={() => onSort(field)}
      className="flex items-center text-left text-sm font-medium text-gray-600 hover:text-gray-800 transition-colors"
    >
      <span>Sort {children}</span>
      {getSortIcon()}
    </button>
  );
};

export default SortButton;