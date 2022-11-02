import { configureStore } from "@reduxjs/toolkit";
import { exportSlice } from "./reducer";

export const store = configureStore({
  reducer: {
    expense: exportSlice
  }
})