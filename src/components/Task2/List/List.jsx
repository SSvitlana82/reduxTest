/* import style from "./List.module.css"; */
import { useState } from "react";
import { useSelector } from "react-redux";
import { selectVit } from "../../../redux/task2/selector";
import VitElement from "../../VitElement/VitElement";

const List = ({}) => {
  const listVits = useSelector(selectVit);
  console.log(listVits);
  return (
    <div>
      <ul>
        {listVits.map((vit) => {
          return (
            <li key={vit.id}>
              <VitElement data={vit} />
            </li>
          );
        })}
      </ul>
      ;
    </div>
  );
};

export default List;
