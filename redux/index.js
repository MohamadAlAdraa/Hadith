import { configureStore } from "@reduxjs/toolkit";
import hadithSlice from "./hadith/hadith-slice";
import themeSlice from "./theme/theme-slice";

const hadithStore = configureStore({
  reducer: { hadith: hadithSlice.reducer, theme: themeSlice.reducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }),
});

export default hadithStore;
