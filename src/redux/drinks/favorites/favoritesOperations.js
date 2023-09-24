import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const allFavorites = createAsyncThunk(
  'favorites/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/favorite');
      // При успішному запиті повертаємо проміс із даними
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  },
);

export const addFavorites = createAsyncThunk(
  'favorites/addFavorite',
  async (dataUser, thunkAPI) => {
    try {
      const response = await axios.post('/favorite/add', dataUser);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  },
);

export const deleteFavorites = createAsyncThunk(
  'favorites/deleteFavorite',
  async (drinkId, thunkAPI) => {
    try {
      const response = await axios.delete(`/favorite/remove/${drinkId}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  },
);