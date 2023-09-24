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
      setAuthHeader(data.token);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const signin = createAsyncThunk(
  'auth/signin',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.post('/auth/signin', credentials);
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

export const refresh = createAsyncThunk('auth/refres', async (_, thunkAPI) => {
  const state = thunkAPI.getState();
  const persistedToken = state.auth.token;

  if (persistedToken === null) {
    return thunkAPI.rejectWithValue('Unable to fetch user');
  }

  try {
    setAuthHeader(persistedToken);
    const { data } = await axios.get('/users/current');
    return data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
});
