// 2. Create a slice or features which includes the reducer and actions

import { createSlice } from "@reduxjs/toolkit";
export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      if (state.value <= 0) {
        state.value = 0;
      } else {
        state.value -= 1;
      }
    },
    incrementbyAmount: (state, action) => {
      state.value += action.payload; // action.payload is the value passed when dispatching the action
    },
    decrementbyAmount: (state) => {
      if (state.value <= 0 || state.value < 10) {
        state.value = 0;
      } else {
        state.value -= 10;
      }
    },
  },
});
export const themeSlice = createSlice({
  name: "theme",
  initialState: {
    theme: "light",
  },
  reducers: {
    themeToggle: (state) => {
      state.theme = state.theme === "light" ? "black" : "light";
    },
  },
});

export const { increment, decrement, incrementbyAmount, decrementbyAmount } =
  counterSlice.actions;
export const { themeToggle } = themeSlice.actions;
export default counterSlice.reducer;
export const themeReducer = themeSlice.reducer;
