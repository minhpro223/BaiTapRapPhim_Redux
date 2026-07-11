import { configureStore } from "@reduxjs/toolkit";
import { bookingReducer } from "./bookingReducer";

export const store = configureStore({
  reducer: {
    bookingReducer,
  },
});