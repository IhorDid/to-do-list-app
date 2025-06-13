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

export const addTask = createAsyncThunk(
  'task/addTask',
  async (text, thunkAPI) => {
    try {
      const response = await axios.post('/task', { text });
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  },
);

export const deleteTask = createAsyncThunk(
  'tasks/deleteTask',
  async (taskId, thunkAPI) => {
    try {
      const response = await axios.delete(`/task/${taskId}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  },
);

export const updateTask = createAsyncThunk(
  'tasks/updateTask',
  async ({ id, newData }, thunkAPI) => {
    try {
      const response = await axios.put(`/task/${id}`, newData);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  },
);
