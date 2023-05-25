import { createSlice, createAsyncThunk, isRejected } from "@reduxjs/toolkit";
import axios from "../../utils/http";

export const CheckHadith_API = createAsyncThunk(
  "CheckHadith_API",
  async (userInput) => {
    const { data } = await axios.get("/v1/api/hadith/search", {
      value: userInput,
    });
    return data;
  }
);

const initialState = {
  data: null,
  loading: false,
  error: false,
};

const hadithSlice = createSlice({
  name: "hadithSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(CheckHadith_API.fulfilled, (state, { payload }) => {
        state.data = payload.data;
        state.loading = false;
      })
      .addCase(CheckHadith_API.pending, (state) => {
        state.loading = true;
      })
      .addMatcher(isRejected, (state) => {
        state.error = true;
      });
  },
});

export const hadithActions = hadithSlice.actions;

export default hadithSlice;
