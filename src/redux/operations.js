import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://668960900ea28ca88b87ccf5.mockapi.io';

export const fetchTasks = createAsyncThunk(
  'task/fetch',
  async (_, thunkAPI) => {
    try {
      const res = await axios.get('/task');
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(e.message);
    }
  },
);
