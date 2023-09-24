import { createSlice } from '@reduxjs/toolkit';
import { fetchOwn, addOwn, deleteOwn } from './drinksOperations';

const ownSlice = createSlice({
  name: 'own',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: (builder) =>
    builder
      .addCase(fetchOwn.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(fetchOwn.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(fetchOwn.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      .addCase(addOwn.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(addOwn.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items.push(action.payload);
      })
      .addCase(addOwn.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(deleteOwn.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(deleteOwn.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = state.items.filter(
          (drink) => drink.id !== action.payload.id,
        );
      })
      .addCase(deleteOwn.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      }),
});

export const ownReducer = ownSlice.reducer;
