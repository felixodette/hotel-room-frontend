import { createSlice, createAsycThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import BASE_URL from '../api';

const initalState = {
  loading: false,
  myReservation: '',
  error: '',
};

export const delres = createAsyncThunk('reservation/delres', (myreservation) => axios
  .delete(
    `${BASE_URL}api/v1/reservations/del_reservation`,
    {
      headers: {
        Authorization: `${localStorage.getItem('token')}`,
      },
      data: myreservation,
    },
  )
  .then((response) => response.data));

const myreservationSlice = createSlice({
  name: 'userDelRes',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(delres.fulfilled, (state, action) => {
      state.loading = true;
      state.myreservation = {};
      state.error = '';
    });
    builder.addCase(delres.fulfilled, (state, action) => {
      state.loading = false;
      state.myreservation = action.payload;
      state.error = '';
    });
    builder.addCase(delres.rejected, (state, action) => {
      state.loading = false;
      state.myreservation = {};
      state.error = action.error.message;
    });
  },
});

export default myreservationSlice.reducer;
