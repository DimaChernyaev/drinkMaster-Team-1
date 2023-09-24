import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchFavorites = createAsyncThunk(
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

export const addFavorite = createAsyncThunk(
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

export const deleteFavorite = createAsyncThunk(
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

export const fetchOwn = createAsyncThunk(
  'own/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/own');
      // При успішному запиті повертаємо проміс із даними
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  },
);

export const addOwn = createAsyncThunk(
  'own/addOwn',
  async (dataUser, thunkAPI) => {
    try {
      const response = await axios.post('/own/add', dataUser);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  },
);

export const deleteOwn = createAsyncThunk(
  'own/deleteOwn',
  async (drinkId, thunkAPI) => {
    try {
      const response = await axios.delete(`/own/remove/${drinkId}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  },
);
