import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://drink-master-server.onrender.com/drinks';

export const fetchFavorites = createAsyncThunk(
  'favorites/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/drinks/favorite');
      console.log('При успішному ', response.data);
      // При успішному запиті повертаємо проміс із даними
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  },
);

export const addFavorite = createAsyncThunk(
  'favorites/addFavorite',
  async (dataUser, thunkAPI) => {
    try {
      const response = await axios.post('/drinks/favorite/add', dataUser);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  },
);

export const deleteFavorite = createAsyncThunk(
  'favorites/deleteFavorite',
  async (drinkId, thunkAPI) => {
    try {
      const response = await axios.delete(`/drinks/favorite/remove/${drinkId}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  },
);
