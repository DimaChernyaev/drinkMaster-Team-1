import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchFavorites = createAsyncThunk(
  'favorites/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/drinks/favorite');
      // const response = await axios.get('/drinks/popular');
      // При успішному запиті повертаємо проміс із даними
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  },
);

export const addFavorite = createAsyncThunk(
  'favorites/addFavorite',
  async (drinkId, thunkAPI) => {
    try {
      const response = await axios.post(`/drinks/favorite/add/${drinkId}`);
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  },
);

export const deleteFavorite = createAsyncThunk(
  'favorites/deleteFavorite',
  async (drinkId, thunkAPI) => {
    try {
      const response = await axios.delete(`/drinks/favorite/remove/${drinkId}`);
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  },
);
