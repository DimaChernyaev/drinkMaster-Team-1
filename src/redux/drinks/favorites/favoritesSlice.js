import { createSlice } from '@reduxjs/toolkit';
import * as favorite from './favoritesOperations';

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(favorite.allFavorites.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(favorite.allFavorites.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(favorite.allFavorites.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      .addCase(favorite.addFavorites.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(favorite.addFavorites.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items.push(action.payload);
      })
      .addCase(favorite.addFavorites.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(favorite.deleteFavorites.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(favorite.deleteFavorites.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = false;
        const indexDelete = state.items.findIndex(
          (favorite) => favorite === action.payload.id,
        );
        state.items.splice(indexDelete, 1);
      })
      .addCase(favorite.deleteFavorites.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const favoritesReducer = favoritesSlice.reducer;
