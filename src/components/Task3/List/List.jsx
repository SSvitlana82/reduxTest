// import style from './List.module.css';
import { useState } from "react";
import {
  selectFoto,
  selectMusike,
  selectTitle,
} from "../../../redux/task3/selector";
import { useSelector } from "react-redux";

const List = ({}) => {
  const foto = useSelector(selectFoto);
  const title = useSelector(selectTitle);
  const listMusike = useSelector(selectMusike);
  return (
    <div>
      <img src={foto} />
      <p>{title}</p>
      <ul>
        {listMusike.map((item) => {
          return <li key={item}>{item}</li>;
        })}
      </ul>
      ;
    </div>
  );
};

export default List;
