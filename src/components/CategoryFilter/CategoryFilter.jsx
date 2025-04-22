// src/components/CategoryFilter.js
import React from 'react';
import './CategoryFilter.css';

function CategoryFilter({ onSelectCategory }) {
  return (
    <div className="category-filter">
      <button onClick={() => onSelectCategory('All')}>All</button>
      <button onClick={() => onSelectCategory('Coconut')}>Coconut</button>
      <button onClick={() => onSelectCategory('Groundnut')}>Groundnut</button>
      <button onClick={() => onSelectCategory('Sesame')}>Sesame</button>
    </div>
  );
}

export default CategoryFilter;
