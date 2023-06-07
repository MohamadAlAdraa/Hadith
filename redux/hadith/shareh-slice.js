import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../utils/http";
import { APIS } from "../../utils/CONSTS";
import { removeTextBeforeBlankLines } from "../../utils/CONSTS";

export const SharehHadith_API = createAsyncThunk(
  "shareh-slice/SharehHadith_API",
  async (sharehURL, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(APIS.baseURL + sharehURL);
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
  data: [],
  loading: false,
  error: false,
};

const sharehSlice = createSlice({
  name: "sharehSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(SharehHadith_API.fulfilled, (state, { payload }) => {
        const justifiedShareh = removeTextBeforeBlankLines(
          payload.data.sharhMetadata.sharh
        );
        state.data.push({
          sharehId: payload.data.sharhMetadata.id,
          shareh: justifiedShareh,
        });
        state.loading = false;
      })
      .addCase(SharehHadith_API.pending, (state) => {
        state.loading = true;
      })
      .addMatcher(
        (action) => action.type === `${SharehHadith_API.rejected}`,
        (state, { payload }) => {
          state.error = true;
          state.loading = false;
        }
      );
  },
});

export const hadithActions = sharehSlice.actions;

export default sharehSlice;
