import { createSlice } from '@reduxjs/toolkit';
import {
  fetchFavorites,
  addFavorite,
  deleteFavorite,
} from './drinksOperations';

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: (builder) =>
    builder
      .addCase(fetchFavorites.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(fetchFavorites.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(fetchFavorites.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      .addCase(addFavorite.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(addFavorite.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items.push(action.payload);
      })
      .addCase(addFavorite.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(deleteFavorite.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(deleteFavorite.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = state.items.filter(
          (drink) => drink.id !== action.payload.id,
        );
      })
      .addCase(deleteFavorite.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      }),
});

export const favoritesReducer = favoritesSlice.reducer;
