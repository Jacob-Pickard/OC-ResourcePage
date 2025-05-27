import React from 'react';

export default function ResourceList({ resources, onFavorite, favorites }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {resources.map((resource) => (
        <div
          key={resource.id}
          className={`resource-card flex flex-col ${
            favorites.includes(resource.id) ? 'favorited' : ''
          }`}
        >
          <div className="flex-grow">
            <h3>{resource.name}</h3>
            <p>{resource.description}</p>
          </div>
          <div className="actions flex gap-2 mt-auto">
            <button
              onClick={() => onFavorite(resource)}
              className={`favorite-button rounded-full ${
                favorites.includes(resource.id) ? 'bg-secondary-color text-primary-color' : 'hover:bg-accent-color'
              }`}
            >
              {favorites.includes(resource.id) ? 'Unfavorite ★' : 'Favorite ☆'}
            </button>
            <a
              href={resource.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary-color text-secondary-color hover:bg-accent-color rounded-full"
            >
              Access Resource ↗
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}
