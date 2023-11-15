import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const toastError = (text) => {
  toast.error(text, {
    position: 'top-right',
    autoClose: 7000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'light',
  });
};

export const instance = axios.create({
  baseURL: 'https://powerpulse-t5-backend.onrender.com/api/',
});

export const token = {
  set: (token) => {
    instance.defaults.headers['Authorization'] = `Bearer ${token}`;
  },
  clear: () => {
    instance.defaults.headers['Authorization'] = '';
  },
};

export const getUserProfile = createAsyncThunk(
  'profile/getUserProfile',
  async (_, thunkApi) => {
    try {
      const { data } = await instance.get('profiles');
      return data;
    } catch (error) {
      toastError(
        `Oops! Something was wrong.... ${error.message}. ${error.response.data}`,
      );
      return thunkApi.rejectWithValue(error.message);
    }
  },
);

export const updateUserProfile = createAsyncThunk(
  'profile/updateUserProfile',
  async (newData, thunkApi) => {
    try {
      console.log('newData 2', newData);
      const { data } = await instance.put('profiles', newData);
      return data;
    } catch (error) {
      toastError(`Oops! Something was wrong.... ${error.message}`);
      return thunkApi.rejectWithValue(error.message);
    }
  },
);
