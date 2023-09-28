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

  const updateUser  = async(req, res) => {
    console.log("---- updateUser function ---- ");
    let newAvatarURL;

    const {_id, currentAvatarURL, name: currentUserName} = req.user;              // забираємо id поточного юзера
    const {name = currentUserName} = req.body;                                    // забираємо нове ім'я поточного юзера з http-запиту
  
    if (req.file) { 
      newAvatarURL = req.file.path;  
    }
    else { 
      console.log("req.file = ", req.file);
      newAvatarURL = currentAvatarURL; 
    }
    const usr = await User.findByIdAndUpdate(_id, {name, avatarURL: newAvatarURL}, {new: true}); // оновлюємо поле avatarURL для поточного юзера
    res.json({name: usr.name, avatarURL: usr.avatarURL });
  }

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
