import { createSlice } from '@reduxjs/toolkit';
import * as auth from './authOperations';
import * as reducer from './authFunction';
import * as user from './user/userOperations';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: { name: '', email: '', avatarURL: '', id: '' },
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
      .addCase(auth.signin.pending, (state) => {
        state.error = null;
      })
      .addCase(auth.signin.fulfilled, reducer.signinFulfilled)
      .addCase(auth.signin.rejected, (state, action) => {
        state.error = action.payload;
      })
      .addCase(auth.signout.pending, (state) => {
        state.error = null;
      })
      .addCase(auth.signout.fulfilled, reducer.signoutFulfilled)
      .addCase(auth.signout.rejected, (state, action) => {
        state.error = action.payload;
      })
      .addCase(auth.refresh.pending, (state) => {
        state.isRefreshing = true;
        state.error = null;
      })
      .addCase(auth.refresh.fulfilled, reducer.refreshFulfilled)
      .addCase(auth.refresh.rejected, (state, action) => {
        state.error = action.payload;
        state.isRefreshing = false;
      })
      .addCase(user.updateUser.pending, (state) => {
        state.error = null;
      })
      .addCase(user.updateUser.fulfilled, (state, action) => {
        state.error = null;
        state.user = {
          email: state.user.email,
          id: state.user.id,
          name: action.payload.name,
          avatarURL: action.payload.avatarUrl,
        };
      })
      .addCase(user.updateUser.rejected, (state, action) => {
        state.error = action.payload;
      });
  },
});

export const authReducer = authSlice.reducer;
