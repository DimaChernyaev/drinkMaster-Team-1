import { createSlice } from '@reduxjs/toolkit';
import { fetchDrinks, deleteDrinks } from './drinksOperations';

const drinksSlice = createSlice({
  name: 'drinks',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: (builder) =>
    builder
      .addCase(fetchDrinks.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchDrinks.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(fetchDrinks.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      .addCase(deleteDrinks.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteDrinks.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = state.items.filter(
          (drink) => drink.id !== action.payload.id,
        );
      })
      .addCase(deleteDrinks.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      }),
});

export const drinksReducer = drinksSlice.reducer;
