import { configureStore } from "@reduxjs/toolkit";
import reduserPerson from "./persons/slise";
import reduserUsers from "./users/slice";
import reduserGift from "./task1/slice";
import reduserVit from "./task2/slice";
import reduserMusike from "./task3/slice";
import reduserBooks from "./task4/slice";
import reduserShops from "./task5/slice";

export const stor = configureStore({
  reducer: {
    person: reduserPerson,
    users: reduserUsers,
    gift: reduserGift,
    vit: reduserVit,
    musike: reduserMusike,
    bookList: reduserBooks,
    shopList: reduserShops,
  },
});
