import { createSlice } from '@reduxjs/toolkit';
import * as own from './ownOperations';

const ownSlice = createSlice({
  name: 'own',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: (builder) =>
    builder
      .addCase(own.allOwn.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(own.allOwn.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(own.allOwn.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      .addCase(own.addOwn.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(own.addOwn.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items.push(action.payload);
      })
      .addCase(own.addOwn.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(own.deleteOwn.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(own.deleteOwn.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = false;
        const indexDelete = state.items.findIndex(
          (own) => own === action.payload.id,
        );
        state.items.splice(indexDelete, 1);
      })
      .addCase(own.deleteOwn.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      }),
});

export const ownReducer = ownSlice.reducer;
