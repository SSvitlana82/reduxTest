/* import style from './Task1.module.css'; */
import { useState } from "react";
import Form from "./Form/Form";
import List from "./List/List";
import { selectGift } from "../../redux/task1/selector";
import { useSelector } from "react-redux";

const Task1 = ({}) => {
  return (
    <div>
      <Form />
      <List />
    </div>
  );
};

export default Task1;
