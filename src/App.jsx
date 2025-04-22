import React, { useState } from 'react';
import { resources } from './data/resources';
import ResourceList from './components/ResourceList';
import Filter from './components/Filter';
import './app.css'; // Import Tailwind styles

export default function App() {
  const [favorites, setFavorites] = useState(() => JSON.parse(localStorage.getItem('favorites')) || []);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', ...new Set(resources.map((r) => r.category))];

  const filteredResources =
    selectedCategory === 'All'
      ? resources
      : resources.filter((r) => r.category === selectedCategory);

  const handleFavorite = (resource) => {
    const updatedFavorites = [...favorites, resource];
    setFavorites(updatedFavorites);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  };

  return (
    <div className="p-4 min-h-screen bg-secondary-color text-text-color">
      <header className="flex justify-center items-center mb-4">
        <h1 className="text-2xl font-bold text-primary-color">Olympic College Resource Hub</h1>
      </header>
      <div className="flex justify-center mb-4">
        <Filter
          categories={categories}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />
      </div>
      <ResourceList resources={filteredResources} onFavorite={handleFavorite} />
    </div>
  );
}
