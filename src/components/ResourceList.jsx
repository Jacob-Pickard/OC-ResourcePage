import React from 'react';

export default function ResourceList({ resources, onFavorite, favorites, onBackToAll }) {
  if (!resources.length) {
    return (
      <div className="w-full flex flex-col items-center justify-center py-12">
        <p className="text-lg text-gray-600 mb-4">No resources found in this category.</p>
        {onBackToAll && (
          <button
            className="bg-primary-color text-secondary-color px-4 py-2 rounded hover:bg-accent-color"
            onClick={onBackToAll}
          >
            Back to All Resources
          </button>
        )}
      </div>
    );
  }

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
