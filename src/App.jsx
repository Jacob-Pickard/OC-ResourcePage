import React, { useState, useEffect } from 'react';
import { resources as staticResources } from './data/resources';
import ResourceList from './components/ResourceList';
import Filter from './components/Filter';
import '../styles/app.css'; // Corrected path

// Utility function to format date and time
function formatDateTime(datetime) {
  if (!datetime) return '';
  const date = new Date(datetime);
  const options = { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric', hour: '2-digit', minute: '2-digit' };
  return date.toLocaleDateString(undefined, options);
}

export default function App() {
  const [favorites, setFavorites] = useState(() => JSON.parse(localStorage.getItem('favorites')) || []);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [scrapedEvents, setScrapedEvents] = useState([]);
  const [resources, setResources] = useState(staticResources);

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  useEffect(() => {
    async function fetchEvents() {
      try {
        const response = await fetch('http://3.85.63.104:80/api/events'); //place current server IP here as it unfortunately changes
        const data = await response.json();
        const formattedEvents = data.map((event, index) => ({
          id: staticResources.length + index + 1, // Ensure unique IDs
          category: 'Campus Events', // Assign a category
          name: event.title,
          description: `${event.description || ''} ${formatDateTime(event.date) || ''} ${event.location || ''}`.trim(),
          link: event.link,
        }));
        setScrapedEvents(formattedEvents);
        setResources([...staticResources, ...formattedEvents]); // Merge static and scraped resources
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    }
    fetchEvents();
  }, []);

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
      <header className="flex items-center justify-center mb-4 relative">
        <a
          href="https://www.olympic.edu"
          target="_blank"
          rel="noopener noreferrer"
          className="absolute left-0"
        >
          <img src="/OC-ResourcePage/logo.svg" alt="Olympic College Logo" className="h-16" />
        </a>
        <h1 className="text-2xl font-bold text-primary-color">Olympic College Resource Hub</h1>
      </header>
      <div className="flex-grow">
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
      <footer className="bg-primary-color text-secondary-color text-center py-4 mt-4">
        © {new Date().getFullYear()} Olympic College. All rights reserved. Designed by Jacob Pickard.
      </footer>
    </div>
  );
}
