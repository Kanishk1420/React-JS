import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counterslice.js";
export const store = configureStore({
  reducer: {
    // 1. Create a reducer
    counter: counterReducer,
  },
});
