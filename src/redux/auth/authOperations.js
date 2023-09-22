import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://drink-master-server.onrender.com';

const setAuthHeader = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const signup = createAsyncThunk(
  'auth/signup',
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/auth/signup', credentials);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const sigin = createAsyncThunk(
  'auth/sigin',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.post('/auth/sigin', credentials);
      setAuthHeader(data.token);
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  },
);

export const signout = createAsyncThunk('auth/signout', async (_, thunkAPI) => {
  try {
    const { data } = await axios.post('/auth/signout');
    clearAuthHeader();
    return data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
});
