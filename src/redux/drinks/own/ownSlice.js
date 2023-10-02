import { createSlice } from '@reduxjs/toolkit';
import { fetchOwn, addOwn, deleteOwn } from './ownOperations';

const ownSlice = createSlice({
  name: 'own',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: (builder) =>
    builder
      .addCase(fetchOwn.pending, (state) => {
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

      .addCase(addOwn.pending, (state) => {
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
      .addCase(deleteOwn.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteOwn.fulfilled, (state, action) => {
        console.log(action);
        state.isLoading = false;
        state.error = false;
        const indexDelete = state.items.findIndex(
          (drink) => drink._id === action.payload._id,
        );
        state.items.splice(indexDelete, 1);
      })
      .addCase(deleteOwn.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      }),
});

export const ownReducer = ownSlice.reducer;
