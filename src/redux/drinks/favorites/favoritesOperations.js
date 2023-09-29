import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchFavorites = createAsyncThunk(
  'favorites/fetchAll',
  async (page, thunkAPI) => {
    try {
      // const response = await axios.get('/drinks/popular');
      const response = await axios.get(
        '/drinks/favorite',
        // { params: {
        //   page: 1,
        //   per_page: 4,},
        //  }
      );

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
