import { useEffect, useState } from "react";
import Anketa from "./components/Anketa/Anketa";
import ListPerson from "./components/ListPerson/ListPerson";
import { useDispatch } from "react-redux";
import { fetchUsers } from "./redux/users/operation";
import Task1 from "./components/Task1/Task1";
import Task2 from "./components/Task2/Task2";
import Task3 from "./components/Task3/Task3";

const App = ({}) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUsers());
  }, []);
  return (
    <div>
      {/* <Anketa />
      <ListPerson /> */}
      {/* <Task1 /> */}
      {/* <Task2 /> */}
      <Task3 />
    </div>
  );
};

export default App;
