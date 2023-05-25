import { configureStore } from "@reduxjs/toolkit";
import hadithSlice from "./hadith/hadith-slice";

const hadithStore = configureStore({
  reducer: { hadith: hadithSlice.reducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }),
});

export default hadithStore;
