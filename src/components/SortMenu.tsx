import React from 'react';
import { ChevronDown } from 'lucide-react';

type SortOption = 'Latest' | 'Price: Low to High' | 'Price: High to Low';

interface SortMenuProps {
  sortBy: SortOption;
  onSort: (option: SortOption) => void;
}

export function SortMenu({ sortBy, onSort }: SortMenuProps) {
  const [isOpen, setIsOpen] = React.useState(false);

  const options: SortOption[] = [
    'Latest',
    'Price: Low to High',
    'Price: High to Low'
  ];

  return (
    <div className="relative">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg shadow-sm hover:shadow-md transition-all text-sm"
      >
        Sort by {sortBy}
        <ChevronDown className="w-4 h-4" />
      </button>

      {isOpen && (
        <>
          <div 
            className="fixed inset-0 z-10"
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-1 z-20">
            {options.map((option) => (
              <button
                key={option}
                onClick={() => {
                  onSort(option);
                  setIsOpen(false);
                }}
                className={`w-full text-left px-4 py-2 text-sm ${
                  sortBy === option 
                    ? 'bg-gray-100 text-gray-900'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                {option}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}