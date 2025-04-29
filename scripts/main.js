import { getFavorites, addFavorite, removeFavorite, isFavorite } from './favorites.js';

function toggleFavorite(resourceId, buttonElement) {
    if (isFavorite(resourceId)) {
        removeFavorite(resourceId);
        buttonElement.classList.remove('favorited');
    } else {
        addFavorite(resourceId);
        buttonElement.classList.add('favorited');
    }
    updateFavoritesCategory();
}

function updateFavoritesCategory() {
    const favorites = getFavorites();
    const favoritesCategory = document.querySelector('#favorites-category');
    if (favorites.length > 0) {
        if (!favoritesCategory) {
            const category = document.createElement('div');
            category.id = 'favorites-category';
            category.innerHTML = `<h2>Favorites</h2><div id="favorites-list"></div>`;
            document.body.prepend(category);
        }
        const favoritesList = document.querySelector('#favorites-list');
        favoritesList.innerHTML = ''; // Clear existing list
        favorites.forEach(resourceId => {
            const resourceElement = document.querySelector(`[data-id="${resourceId}"]`);
            if (resourceElement) {
                favoritesList.appendChild(resourceElement.cloneNode(true));
            }
        });
    } else if (favoritesCategory) {
        favoritesCategory.remove();
    }
}

// Highlight favorite resources and add toggle buttons
document.querySelectorAll('.resource').forEach(resource => {
    const resourceId = resource.dataset.id;
    const favoriteButton = resource.querySelector('.favorite-button');
    if (isFavorite(resourceId)) {
        favoriteButton.classList.add('favorited');
    }
    favoriteButton.addEventListener('click', () => toggleFavorite(resourceId, favoriteButton));
});

// Ensure favorites are prioritized on other pages
updateFavoritesCategory();