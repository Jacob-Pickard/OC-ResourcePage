import React from 'react';

export default function Filter({ categories, selectedCategory, onSelectCategory }) {
  return (
    <div className="filters-container">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onSelectCategory(category)}
          className={`${
            selectedCategory === category
              ? 'bg-primary-color text-secondary-color'
              : 'bg-primary-color text-secondary-color'
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
