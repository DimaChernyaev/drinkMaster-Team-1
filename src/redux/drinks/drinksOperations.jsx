import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://drink-master-server.onrender.com';

export const fetchDrinks = createAsyncThunk(
  'drinks/fetchFavorites',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/favorites');
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  },
);

export const deleteDrinks = createAsyncThunk(
  'drinks/deleteDrinks',
  async (drinkId, thunkAPI) => {
    try {
      const response = await axios.delete(`/drinks/${drinkId}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  },
);
