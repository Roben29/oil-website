import React from 'react';
import './SortOptions.css';

function SortOptions({ onSortChange }) {
  return (
    <div className="sort-options">
      <label htmlFor="sort">Sort by: </label>
      <select id="sort" onChange={(e) => onSortChange(e.target.value)}>
        <option value="price-asc">Price: Low to High</option>
        <option value="price-desc">Price: High to Low</option>
        <option value="popularity">Popularity</option>
        <option value="newest">Newest</option>
      </select>
    </div>
  );
}

export default SortOptions;