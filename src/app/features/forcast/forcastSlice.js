import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  loading: false,
  forcast: {},
  pastForcast: {},
  resetAll: false,
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
      state.resetAll = !state.resetAll;
      state.forcast = initialState.forcast;
      state.pastForcast = initialState.pastForcast;
      state.loading = false;
    },
    pastForcast: (state, action) => {
      state.loading = false;
      state.pastForcast = action.payload;
    },
    resetPastForcast: (state, action) => {
      state.pastForcast = {};
    },
  },
});

export const {
  fetchSuccess,
  reset,
  fetchStart,
  pastForcast,
  resetPastForcast,
} = forcastSlice.actions;
export default forcastSlice.reducer;
