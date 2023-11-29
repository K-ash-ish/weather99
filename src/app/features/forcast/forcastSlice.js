import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  forcast: {},
};
export const forcastSlice = createSlice({
  name: "forcast",
  initialState,
  reducers: {
    fetchSuccess: (state, action) => {
      state.forcast = action.payload;
    },
    reset: (state, action) => {
      state.forcast = initialState;
    },
  },
});

export const { fetchSuccess, reset } = forcastSlice.actions;
export default forcastSlice.reducer;
