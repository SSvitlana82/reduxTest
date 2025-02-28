import { useState } from "react";
import { useDispatch } from "react-redux";
import { addShop } from "../../../redux/task5/slice";

const Form = ({}) => {
  const dispatch = useDispatch();
  const [nameShop, setNameShop] = useState("");
  const [adress, setAdress] = useState("");
  const [phone, setPhone] = useState("");
  const handleClik = () => {
    dispatch(
      addShop({
        name: nameShop,
        adress,
        phone,
      })
    );
    setNameShop("");
    setAdress("");
    setPhone("");
  };

  return (
    <div>
      <input
        value={nameShop}
        onChange={(e) => {
          setNameShop(e.target.value);
        }}
        type="text"
      />
      <input
        value={adress}
        onChange={(e) => {
          setAdress(e.target.value);
        }}
        type="text"
      />
      <input
        value={phone}
        onChange={(e) => {
          setPhone(e.target.value);
        }}
        type="text"
      />
      <button onClick={handleClik}>clik Me</button>
    </div>
  );
};

export default Form;
