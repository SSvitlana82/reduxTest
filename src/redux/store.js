import { configureStore } from "@reduxjs/toolkit";
import reduserPerson from "./persons/slise";

export const stor = configureStore({
  reducer: {
    person: reduserPerson,
  },
});
