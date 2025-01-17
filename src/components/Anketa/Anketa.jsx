import { use } from "react";
import style from "./Anketa.module.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addPerson } from "../../redux/persons/slise";

const Anketa = ({}) => {
  const dispatch = useDispatch();
  const [text, setText] = useState("");
  const [email, setEmail] = useState("");

  const handleOnclick = () => {
    const dane = {
      name: text,
      email: email,
    };
    dispatch(addPerson(dane));
    setText("");
    setEmail("");
  };
  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(event) => {
          setText(event.target.value);
        }}
      />
      <input
        type="email"
        value={email}
        onChange={(event) => {
          setEmail(event.target.value);
        }}
      />
      <button onClick={handleOnclick}>add</button>
    </div>
  );
};

export default Anketa;
