/* import style from './List.module.css'; */
import { useState } from "react";
import { useSelector } from "react-redux";
import { selectGift } from "../../../redux/task1/selector";

const List = ({}) => {
  const listGifts = useSelector(selectGift);
  console.log(listGifts);
  return <div>list</div>;
};

export default List;
