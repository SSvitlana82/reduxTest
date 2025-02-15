import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  listMusike: [],
  photo: "https://static.ukrinform.com/photos/2021_11/1636180787-4326.jpeg",
  title: "My musike",
};

export const sliceSpotify = createSlice({
  name: "Spotify",
  initialState,
  reducers: {
    addMusike(state, { payload }) {
      state.listMusike.push(payload);
    },
    deleteMusike(state, action) {},
    reducer3(state, action) {},
    customReducer: {
      reducer(state, action) {},
      prepare(userData) {},
    },
  },
});

export const { addMusike } = sliceSpotify.actions;
export default sliceSpotify.reducer;
