/* import style from "./VitElement.module.css"; */
import { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteVit, updateVit } from "../../redux/task2/slice";

const VitElement = ({ data }) => {
  const dispatch = useDispatch();
  const [amount, setAmount] = useState(data.amount);
  const handleClick = () => {
    dispatch(deleteVit(data.id));
  };
  const handleClickUpdate = () => {
    dispatch(updateVit({ id: data.id, amount: amount }));
  };
  return (
    <div>
      <h3>{data.name}</h3>
      <p>{data.price}</p>
      <p>{data.description}</p>

      <input
        type="number"
        value={amount}
        onChange={(event) => {
          setAmount(event.target.value);
        }}
      />

      <button onClick={handleClick}>dellet</button>
      <button onClick={handleClickUpdate}>update</button>
    </div>
  );
};

export default VitElement;
