import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  books: [],
};

export const sliceBook = createSlice({
  name: "book",

  initialState,
  reducers: {
    addBook(state, { payload }) {
      state.books.push(payload);
    },
    deleteBook(state, { payload }) {
      state.books = state.books.filter((book) => {
        return book.name !== payload;
      });
    },
  },
});

export const { addBook, deleteBook } = sliceBook.actions;
export default sliceBook.reducer;
