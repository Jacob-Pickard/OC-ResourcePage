import React, { useState, useEffect } from 'react';
import { resources } from './data/resources';
import ResourceList from './components/ResourceList';
import Filter from './components/Filter';
import './app.css'; // Import Tailwind styles

export default function App() {
  const [favorites, setFavorites] = useState(() => JSON.parse(localStorage.getItem('favorites')) || []);
  const [selectedCategory, setSelectedCategory] = useState('All');

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  const categories = [
    'All',
    ...(favorites.length > 0 ? ['Favorites'] : []),
    ...new Set(resources.map((r) => r.category)),
  ];

  const filteredResources =
    selectedCategory === 'All'
      ? resources
      : selectedCategory === 'Favorites'
      ? resources.filter((r) => favorites.includes(r.id))
      : resources.filter((r) => r.category === selectedCategory);

  const handleFavorite = (resource) => {
    setFavorites((prevFavorites) =>
      prevFavorites.includes(resource.id)
        ? prevFavorites.filter((id) => id !== resource.id)
        : [...prevFavorites, resource.id]
    );
  };

  const prioritizedResources = [
    ...resources.filter((r) => favorites.includes(r.id)),
    ...resources.filter((r) => !favorites.includes(r.id)),
  ];

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
      <ResourceList
        resources={selectedCategory === 'All' ? prioritizedResources : filteredResources}
        onFavorite={handleFavorite}
        favorites={favorites}
      />
    </div>
  );
}
