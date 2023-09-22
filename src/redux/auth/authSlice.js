import { createSlice } from '@reduxjs/toolkit';
import * as auth from './authOperations';
import * as reducer from './authFunction';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: { name: '', email: '', avatarURL: '' },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(auth.signup.pending, (state) => {
        state.error = null;
      })
      .addCase(auth.signup.fulfilled, reducer.signupFulfilled)
      .addCase(auth.signup.rejected, (state, action) => {
        state.error = action.payload;
      })
      .addCase(auth.sigin.pending, (state) => {
        state.error = null;
      })
      .addCase(auth.sigin.fulfilled, reducer.signupFulfilled)
      .addCase(auth.sigin.rejected, (state, action) => {
        state.error = action.payload;
      })
      .addCase(auth.signout.pending, (state) => {
        state.error = null;
      })
      .addCase(auth.signout.fulfilled, reducer.sugnoutFulfilled)
      .addCase(auth.signout.rejected, (state, action) => {
        state.error = action.payload;
      });
  },
});

export const authReducer = authSlice.reducer;
