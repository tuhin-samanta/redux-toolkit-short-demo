import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",

  initialState: {
    current: 2,
    history: [],
  },

  reducers: {
    doIncrement(state, action) {
      state.current += action.payload ? Number(action.payload) : 1;
    },

    doDecrement(state, action) {
      state.current += action.payload ? Number(action.payload) : 1;
    },
  },
});

export const { doIncrement, doDecrement } = counterSlice.actions;
export default counterSlice.reducer;
