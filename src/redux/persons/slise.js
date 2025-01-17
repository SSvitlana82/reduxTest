import { createSlice } from "@reduxjs/toolkit";

const personSlice = createSlice({
  name: "personSlice",
  initialState: {
    list: [
      {
        name: "Vasya",
        email: "SSS@gmail.com",
      },
      {
        name: "Valya",
        email: "fff@gmail.com",
      },
      {
        name: "Vitya",
        email: "vitya@gmail.com",
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
