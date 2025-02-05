import { configureStore } from "@reduxjs/toolkit";
import reduserPerson from "./persons/slise";
import reduserUsers from "./users/slice";
import reduserGift from "./task1/slice";
import reduserVit from "./task2/slice";
export const stor = configureStore({
  reducer: {
    person: reduserPerson,
    users: reduserUsers,
    gift: reduserGift,
    vit: reduserVit,
  },
});
