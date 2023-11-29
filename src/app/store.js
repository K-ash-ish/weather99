import { configureStore } from "@reduxjs/toolkit";
import forcastReducer from "./features/forcast/forcastSlice";
export const store = configureStore({
  reducer: {
    forcast: forcastReducer,
  },
});
