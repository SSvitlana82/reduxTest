/* import style from "./BookList.module.css"; */
import { useState } from "react";
import { selectBook } from "../../../redux/task4/selector";
import { useDispatch, useSelector } from "react-redux";
import { deleteBook } from "../../../redux/task4/slice";

const BookList = ({}) => {
  const dispatch = useDispatch();
  const books = useSelector(selectBook);
  console.log(books);
  const handleClick = (nameBook) => {
    dispatch(deleteBook(nameBook));
  };
  return (
    <div>
      <ul>
        {books.map((book) => {
          return (
            <li key={book.name}>
              <p>{book.name}</p>
              <p>{book.aftor}</p>
              <p>{book.ganre}</p>
              <button
                onClick={() => {
                  handleClick(book.name);
                }}
              >
                delet
              </button>
            </li>
          );
        })}
      </ul>
      ;
    </div>
  );
};

export default BookList;
