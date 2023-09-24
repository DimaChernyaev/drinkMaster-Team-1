export const selectFavorites = (state) => state.favorites.items;

export const selectOwn = (state) => state.own.items;

export const selectFilter = (state) => state.filter;

export const selectIsLoading = (state) => state.drinks.isLoading;

export const selectError = (state) => state.drinks.error;
