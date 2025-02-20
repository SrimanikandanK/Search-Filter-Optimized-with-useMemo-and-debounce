import React, { useState, useMemo } from "react";
import { useDebounce } from "./useDebounce";

const SearchList = () => {
  // State for the search query
  const [searchTerm, setSearchTerm] = useState("");

  // Use the custom debounce hook to delay the search term update
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  // List of items to display
  const items = ["Apple", "Banana", "Orange", "Mango", "Grape", "Strawberry"];

  // Use useMemo to optimize filtering so it only recalculates when debouncedSearchTerm changes
  const filteredItems = useMemo(() => {
    return items.filter((item) =>
      item.toLowerCase().includes(debouncedSearchTerm.toLowerCase())
    );
  }, [debouncedSearchTerm, items]);

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h2>Search Filter with Debounce</h2>
      <input
        type="text"
        placeholder="Search items..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ width: "100%", padding: "10px", marginBottom: "20px" }}
      />
      <ul>
        {filteredItems.length > 0 ? (
          filteredItems.map((item, index) => <li key={index}>{item}</li>)
        ) : (
          <li>No items found.</li>
        )}
      </ul>
    </div>
  );
};

export default SearchList;
