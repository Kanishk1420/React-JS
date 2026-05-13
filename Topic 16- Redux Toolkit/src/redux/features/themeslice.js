import { createSlice } from "@reduxjs/toolkit";
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
export const { themeToggle } = themeSlice.actions;
export default themeSlice.reducer;