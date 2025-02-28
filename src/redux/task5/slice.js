import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  shopsList: [],
};

export const sliceShop = createSlice({
  name: "shop",
  initialState,
  reducers: {
    addShop(state, { payload }) {
      state.shopsList.push(payload);
    },
    deleteShop(state, { payload }) {
      state.shopsList = state.shopsList.filter((shop) => {
        return shop.name !== payload;
      });
    },
  },
});

export const { addShop, deleteShop } = sliceShop.actions;
export default sliceShop.reducer;
