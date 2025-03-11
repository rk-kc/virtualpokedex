// import React from 'react';
import { Search } from 'lucide-react';

const Collection = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">My Collection</h1>
        <div className="relative">
          <input
            type="text"
            placeholder="Search cards..."
            className="pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <p className="text-gray-600 text-center">No cards in your collection yet. Start adding some!</p>
      </div>
    </div>
  );
};

export default Collection;