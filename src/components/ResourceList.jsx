import React from 'react';

export default function ResourceList({ resources, onFavorite }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {resources.map((resource) => (
        <div key={resource.id} className="p-4 bg-secondary-color rounded shadow border border-primary-color">
          <h3 className="text-lg font-bold text-primary-color">{resource.name}</h3>
          <p>{resource.description}</p>
          <div className="mt-2 flex gap-2">
            <button
              onClick={() => onFavorite(resource)}
              className="px-4 py-2 bg-primary-color text-secondary-color rounded hover:bg-accent-color"
            >
              Favorite
            </button>
            <a
              href={resource.link}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-secondary-color text-primary-color border border-primary-color rounded hover:bg-accent-color"
            >
              Access Resource
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}
