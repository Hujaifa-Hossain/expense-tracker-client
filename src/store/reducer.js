import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categories: [],
  transaction: []
};

export const exportSlice = createSlice({
  name: "expense",
  initialState,
  reducers: {
    getTransaction: (state) => {
      // get code
    },
  },
});

export const { getTransaction } = exportSlice.actions;
export default exportSlice.reducer;
