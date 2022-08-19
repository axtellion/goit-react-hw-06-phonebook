import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'myFilter',
  initialState: '',
  reducers: {
    add(state, action) {
      return (state = action.payload);
    },
    cliner(state) {
      return (state = '');
    },
  },
});

export const { add, cliner } = filterSlice.actions;
