import { useEffect, useState } from "react";
import Anketa from "./components/Anketa/Anketa";
import ListPerson from "./components/ListPerson/ListPerson";
import { useDispatch } from "react-redux";
import { fetchUsers } from "./redux/users/operation";

const App = ({}) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUsers());
  }, []);
  return (
    <div>
      <Anketa />
      <ListPerson />
    </div>
  );
};

export default App;
