import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../utils/http";
import { APIS } from "../../utils/CONSTS";

export const SearchHadith_API = createAsyncThunk(
  "hadith-slice/SearchHadith_API",
  async (userInput, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(
        APIS.baseURL + APIS.searchAPI + userInput
      );
      console.log("done");
      return data;
    } catch (error) {
      if (error.isAxiosError && !error.response) {
        return rejectWithValue({ status: "no_internet" });
      } else {
        return rejectWithValue(error);
      }
    }
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
      .addMatcher(
        (action) => action.type === `${SearchHadith_API.rejected}`,
        (state, { payload }) => {
          console.log(payload);
          state.error = true;
          state.loading = false;
        }
      );
  },
});

export const hadithActions = hadithSlice.actions;

export default hadithSlice;
