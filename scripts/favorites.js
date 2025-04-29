// Utility to manage favorites in localStorage
const FAVORITES_KEY = 'userFavorites';

export function getFavorites() {
    const favorites = localStorage.getItem(FAVORITES_KEY);
    return favorites ? JSON.parse(favorites) : [];
}

export function addFavorite(resourceId) {
    const favorites = getFavorites();
    if (!favorites.includes(resourceId)) {
        favorites.push(resourceId);
        localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
    }
}

export function removeFavorite(resourceId) {
    const favorites = getFavorites();
    const updatedFavorites = favorites.filter(id => id !== resourceId);
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(updatedFavorites));
}

export function isFavorite(resourceId) {
    return getFavorites().includes(resourceId);
}
