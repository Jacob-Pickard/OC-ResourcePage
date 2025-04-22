import React from 'react';

export default function Filter({ categories, selectedCategory, onSelectCategory }) {
  return (
    <div className="flex gap-2 mb-4">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onSelectCategory(category)}
          className={`px-4 py-2 rounded ${
            selectedCategory === category
              ? 'bg-primary-color text-secondary-color'
              : 'bg-secondary-color text-primary-color border border-primary-color'
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
