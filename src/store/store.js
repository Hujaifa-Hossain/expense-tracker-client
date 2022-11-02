import { configureStore } from "@reduxjs/toolkit";
import expenseReducer from "./reducer";

export const store = configureStore({
  reducer: {
    expense: expenseReducer
  }
})