import { configureStore } from "@reduxjs/toolkit";
import reduserPerson from "./persons/slise";
import reduserUsers from "./users/slice";

export const stor = configureStore({
  reducer: {
    person: reduserPerson,
    users: reduserUsers,
  },
});
