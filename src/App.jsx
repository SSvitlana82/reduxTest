import { useEffect, useState } from "react";
import Anketa from "./components/Anketa/Anketa";
import ListPerson from "./components/ListPerson/ListPerson";
import { useDispatch } from "react-redux";
import { fetchUsers } from "./redux/users/operation";
import Task1 from "./components/Task1/Task1";

const App = ({}) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUsers());
  }, []);
  return (
    <div>
      {/* <Anketa />
      <ListPerson /> */}
      <Task1 />
    </div>
  );
};

export default App;
