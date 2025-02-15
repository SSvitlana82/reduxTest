// import style from "./Form.module.css";

import { useState } from "react";
import { useDispatch } from "react-redux";
import { addMusike } from "../../../redux/task3/slice";

const Form = ({}) => {
  const dispatch = useDispatch();
  const [nameMusike, setNameMusike] = useState("");

  const handleClick = () => {
    dispatch(addMusike(nameMusike));
    setNameMusike("");
  };
  return (
    <div>
      <input
        type="text"
        value={nameMusike}
        onChange={(event) => {
          setNameMusike(event.target.value);
        }}
      />
      <button onClick={handleClick}>click me</button>
    </div>
  );
};

export default Form;
