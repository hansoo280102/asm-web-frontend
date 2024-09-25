import React from "react";

export default function ({ search, handleSearchChange, handleSearch }) {
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };
  return (
    <div className="w-full flex">
      <input
        type="text"
        value={search}
        onChange={handleSearchChange}
        onKeyPress={handleKeyPress}
        placeholder="Enter key word to search..."
        className="py-2 px-4 mr-5 w-full bg-[#f7f8f9] focus:outline-none focus:border"
      />
      <button className="bg-[#1e73be] px-4 py-2 text-white">Search</button>
    </div>
  );
}
