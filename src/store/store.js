import { configureStore } from "@reduxjs/toolkit";
import apiSlice from "./apiSlice";
import expenseReducer from "./reducer";

export const store = configureStore({
  reducer: {
    expense: expenseReducer,
    [apiSlice.reducerPath]: apiSlice.reducerPath,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(apiSlice.middleware)
});
