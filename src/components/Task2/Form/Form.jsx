import { useState } from "react";
import { useDispatch } from "react-redux";
import { addVit } from "../../../redux/task2/slice";
import { reactHooksModuleName } from "@reduxjs/toolkit/query/react";

const Form = ({}) => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState(0);
  const handleClick = () => {
    const form = {
      name,
      price,
      description,
      amount,
      id: Date.now(),
    };
    dispatch(addVit(form));
    setName("");
    setPrice(0);
    setDescription("");
    setAmount(0);
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
        value={description}
        onChange={(event) => {
          setDescription(event.target.value);
        }}
      />
      <input
        type="number"
        value={amount}
        onChange={(event) => {
          setAmount(event.target.value);
        }}
      />
      <button onClick={handleClick}>click me</button>
    </div>
  );
};

export default Form;
