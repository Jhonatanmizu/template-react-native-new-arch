import {createSlice} from '@reduxjs/toolkit';

const COUNTER_SLICE_NAME = 'COUNTER';

export interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 0,
};

export const counterSlice = createSlice({
  name: COUNTER_SLICE_NAME,
  initialState: initialState,
  reducers: {
    increment: state => {
      state.value += 1;
    },
    decrement: state => {
      state.value -= 1;
    },
  },
});

export const {increment, decrement} = counterSlice.actions;

export default counterSlice.reducer;
