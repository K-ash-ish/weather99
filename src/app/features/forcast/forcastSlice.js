import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  loading: false,
  forcast: {},
  pastForcast: {},
};
export const forcastSlice = createSlice({
  name: "forcast",
  initialState,
  reducers: {
    fetchStart: (state) => {
      state.loading = true;
    },
    fetchSuccess: (state, action) => {
      state.loading = false;
      state.forcast = action.payload;
    },
    reset: (state, action) => {
      state.forcast = initialState;
      state.loading = false;
    },
    pastForcast: (state, action) => {
      state.loading = false;
      state.pastForcast = action.payload;
    },
  },
});

export const { fetchSuccess, reset, fetchStart, pastForcast } =
  forcastSlice.actions;
export default forcastSlice.reducer;
