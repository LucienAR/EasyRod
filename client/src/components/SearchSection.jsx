import React from 'react';

const SearchSection = () => {
  return (
    <div className="bg-yellow-400 py-6 px-4 flex flex-col md:flex-row justify-center items-center gap-4">
      <select className="w-64 p-3 rounded-md">
        <option>Select Brand</option>
      </select>
      <select className="w-64 p-3 rounded-md">
        <option>Select Model</option>
      </select>
      <select className="w-64 p-3 rounded-md">
        <option>Select Year</option>
      </select>
      <button className="bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800">
        🔍 Search
      </button>
    </div>
  );
};

export default SearchSection;
