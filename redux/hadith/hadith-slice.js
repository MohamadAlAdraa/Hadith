import { createSlice, createAsyncThunk, isRejected } from "@reduxjs/toolkit";
import axios from "../../utils/http";
import { APIS } from "../../utils/CONSTS";

export const SearchHadith_API = createAsyncThunk(
  "SearchHadith_API",
  async (userInput) => {
    const { data } = await axios.get(APIS.baseURL + APIS.searchAPI + userInput);
    return data;
  }
);

const initialState = {
  data: null,
  metadata: null,
  loading: false,
  error: false,
};

const hadithSlice = createSlice({
  name: "hadithSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(SearchHadith_API.fulfilled, (state, { payload }) => {
        state.data = payload.data;
        state.metadata = payload.metadata;
        state.loading = false;
      })
      .addCase(SearchHadith_API.pending, (state) => {
        state.loading = true;
      })
      .addMatcher(isRejected, (state) => {
        state.error = true;
      });
  },
});

export const hadithActions = hadithSlice.actions;

export default hadithSlice;
