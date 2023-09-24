import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: '',
  avatarURL: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      return {
        ...state,
        ...action.payload,
      };
    },
    // resetUser: () => {
    //   return initialState;
    // },
  },
});

export const { setUser } = userSlice.actions;
export const userReducer = userSlice.reducer;
