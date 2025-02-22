import { useState } from "react";
import { useDispatch } from "react-redux";
import { addBook } from "../../../redux/task4/slice";

const Book = ({}) => {
  const dispatch = useDispatch();
  const [nameBook, setNameBook] = useState("");
  const [aftor, setAftor] = useState("");
  const [ganre, setGanre] = useState("");

  const handleClick = () => {
    dispatch(addBook({ name: nameBook, aftor, ganre }));
    setNameBook("");
    setAftor("");
    setGanre("");
  };

  return (
    <div>
      <input
        type="text"
        value={nameBook}
        onChange={(event) => {
          setNameBook(event.target.value);
        }}
        placeholder="name"
      />
      <input
        type="text"
        value={aftor}
        onChange={(event) => {
          setAftor(event.target.value);
        }}
        placeholder="aftor"
      />
      <input
        type="text"
        value={ganre}
        onChange={(event) => {
          setGanre(event.target.value);
        }}
        placeholder="ganre"
      />
      <button onClick={handleClick}>addBook</button>
      Book
    </div>
  );
};

export default Book;
