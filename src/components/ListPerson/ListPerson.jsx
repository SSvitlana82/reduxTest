import { useSelector } from "react-redux";
import style from "./ListPerson.module.css";
import { useState } from "react";
import { selectUsers } from "../../redux/users/selector";

const ListPerson = ({}) => {
  const list = useSelector(selectUsers);
  console.log(list);
  return (
    <ul>
      {list.map((item, index) => {
        return (
          <li key={index}>
            <input readOnly value={item.name} />
            <input readOnly value={item.email} />
          </li>
        );
      })}
    </ul>
  );
};

export default ListPerson;
