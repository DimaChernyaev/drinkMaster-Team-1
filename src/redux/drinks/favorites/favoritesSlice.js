import { createSlice } from '@reduxjs/toolkit';
import {
  fetchFavorites,
  addFavorite,
  deleteFavorite,
} from './favoritesOperations';

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: {
    items: [],
    currentPage: 1,
    perPage: 2,
    isLoading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchFavorites.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchFavorites.fulfilled, (state, action) => {
        // console.log(action);
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
        // state.currentPage = action.payload.currentPage;
        // state.perPage = action.payload.perPage;
      })
      .addCase(fetchFavorites.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      .addCase(addFavorite.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addFavorite.fulfilled, (state, action) => {
        // console.log(action);
        state.isLoading = false;
        state.error = null;
        state.items.push(action.payload);
      })
      .addCase(addFavorite.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(deleteFavorite.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteFavorite.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const indexDelete = state.items.findIndex(
          (drink) => drink._id === action.payload._id,
        );
        state.items.splice(indexDelete, 1);
      })
      .addCase(deleteFavorite.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const favoritesReducer = favoritesSlice.reducer;
