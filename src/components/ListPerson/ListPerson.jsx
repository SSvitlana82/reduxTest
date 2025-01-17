import { useSelector } from "react-redux";
import style from "./ListPerson.module.css";
import { useState } from "react";
import { selectUsers } from "../../redux/persons/selector";

const ListPerson = ({}) => {
  const list = useSelector(selectUsers);
  console.log(list);
  return <div>ListPerson</div>;
};

export default ListPerson;
