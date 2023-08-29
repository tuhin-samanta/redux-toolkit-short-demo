import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./slices/counter.slice";

const logger = (store) => (next) => (action) => {
  console.log(">>From logger", { action, store });
  next(action);
};

const store = configureStore({
  reducer: {
    counter: counterSlice,
  },
  middleware: [logger],
});

export default store;
