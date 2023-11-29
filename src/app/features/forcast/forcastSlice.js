import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  loading: false,
  forcast: {},
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
  },
});

export const { fetchSuccess, reset, fetchStart } = forcastSlice.actions;
export default forcastSlice.reducer;
