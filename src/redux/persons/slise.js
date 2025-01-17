import { createSlice } from "@reduxjs/toolkit";

const personSlice = createSlice({
  name: "personSlice",
  initialState: {
    list: [
      {
        name: "",
        email: "",
      },
    ],
    count: 0,
  },
  reducers: {
    addPerson: (state, { payload }) => {
      state.list.push(payload);
    },
    deletePerson: (state, { payload }) => {
      state.list = state.list.filter();
    },
  },
});

export default personSlice.reducer;
export const { addPerson, deletePerson } = personSlice.actions;
