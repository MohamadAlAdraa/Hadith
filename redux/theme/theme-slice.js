import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  morning: true,
};

const themeSlice = createSlice({
  name: "themeSlice",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.morning = !state.morning;
    },
  },
});

export const themeActions = themeSlice.actions;

export default themeSlice;
