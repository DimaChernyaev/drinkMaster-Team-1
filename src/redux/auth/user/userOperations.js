import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getUser = createAsyncThunk('auth/getUser', async (_, thunkAPI) => {
  try {
    const { data } = await axios.get(`/users/current`);
    return data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
});

export const updateUser = createAsyncThunk(
  'auth/updateUser',
  async (newUser, thunkAPI) => {
    console.log(newUser);
    try {
      const { data } = await axios.patch(`/users/update`, newUser, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log(data);
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  },
);

export const subscribeUser = createAsyncThunk(
  'auth/subscribeUser',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.post('/users/subscribe', credentials);
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  },
);
