import React from 'react';
import { Search, Filter } from 'lucide-react';

interface SearchBarProps {
  onSearch: (query: string) => void;
  onFilter: () => void;
}

export function SearchBar({ onSearch, onFilter }: SearchBarProps) {
  return (
    <div className="flex gap-4 w-full max-w-4xl">
      <div className="relative flex-1">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
        <input
          type="text"
          placeholder="Search documentation resources..."
          className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
          onChange={(e) => onSearch(e.target.value)}
        />
      </div>
      <button
        onClick={onFilter}
        className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg flex items-center gap-2 text-gray-700"
      >
        <Filter size={20} />
        Filters
      </button>
    </div>
  );
}