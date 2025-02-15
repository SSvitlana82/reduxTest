import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  listVit: [],
};

export const sliceTask2 = createSlice({
  name: "task2",
  initialState,
  reducers: {
    addVit(state, { payload }) {
      state.listVit.push(payload);
    },
    deleteVit(state, { payload }) {
      state.listVit = state.listVit.filter((vit) => {
        return vit.id !== payload;
      });
    },
    updateVit(state, { payload }) {
      const vit = state.listVit.findIndex((item) => {
        return item.id === payload.id;
      });
      const oldObject = state.listVit[vit];
      const newObject = { ...oldObject, ...payload };
      state.listVit[vit] = newObject;
    },
  },
});

export const { addVit, deleteVit, updateVit } = sliceTask2.actions;
export default sliceTask2.reducer;
