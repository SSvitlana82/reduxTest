import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: [
    /* {
        name: "",
        price: 0,
        link: "",

  } */
  ],
};

export const sliceTask1 = createSlice({
  name: "task1",
  initialState,
  reducers: {
    addGift(state, { payload }) {
      state.list.push(payload);
    },
    deleteGift(state, { payload }) {
      state.list.filter();
    },
  },
});

export const { addGift, deleteGift } = sliceTask1.actions;
export default sliceTask1.reducer;
