/* import style from "./List.module.css"; */
import { useState } from "react";
import { useSelector } from "react-redux";
import { selectVit } from "../../../redux/task2/selector";

const List = ({}) => {
  const listVits = useSelector(selectVit);
  console.log(listVits);
  return <div>List</div>;
};

export default List;
