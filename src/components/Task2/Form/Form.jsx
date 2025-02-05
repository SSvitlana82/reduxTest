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
          setName(event.target);
        }}
      />
    </div>
  );
};

export default Form;
