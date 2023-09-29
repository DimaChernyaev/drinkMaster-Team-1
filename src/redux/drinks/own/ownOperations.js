import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchOwn = createAsyncThunk(
  'own/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/drinks/own');
      // const response = await axios.get('/drinks/favorite');
      // При успішному запиті повертаємо проміс із даними
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  },
);

export const addOwn = createAsyncThunk(
  'own/addOwn',
  async (dataUser, thunkAPI) => {
    try {
      const response = await axios.post('/drinks/own/add', dataUser);
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  },
);

export const deleteOwn = createAsyncThunk(
  'own/deleteOwn',
  async (drinkId, thunkAPI) => {
    try {
      const response = await axios.delete(`/drinks/own/remove/${drinkId}`);
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  },
);
