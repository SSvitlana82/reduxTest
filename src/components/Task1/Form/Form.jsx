/* import style from './Form.module.css'; */
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addGift } from "../../../redux/task1/slice";

const Form = ({}) => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [link, setLink] = useState("");
  const handleClick = () => {
    const form = {
      name: name,
      price: price,
      link: link,
    };
    dispatch(addGift(form));
    setName("");
    setPrice("");
    setLink("");
  };

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(event) => {
          setName(event.target.value);
        }}
      />
      <input
        type="number"
        value={price}
        onChange={(event) => {
          setPrice(event.target.value);
        }}
      />
      <input
        type="text"
        value={link}
        onChange={(event) => {
          setLink(event.target.value);
        }}
      />
      <button onClick={handleClick}>click me</button>
    </div>
  );
};

export default Form;
