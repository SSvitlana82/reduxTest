import { createSlice } from "@reduxjs/toolkit";
import { fetchUsers } from "./operation";
const initialState = { list: [] };

export const sliceUsers = createSlice({
  name: "sliseUser",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.fulfilled, (state, { payload }) => {
      state.list = payload;
    });
  },
});

export default sliceUsers.reducer;
