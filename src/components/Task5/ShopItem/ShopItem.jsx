import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectShops } from "../../../redux/task5/selector";
import { deleteShop } from "../../../redux/task5/slice";

const ShopItem = ({}) => {
  const dispatch = useDispatch(deleteShop);
  const shops = useSelector(selectShops);
  console.log(shops);
  return (
    <ul>
      {shops.map((shop) => {
        const handleClikDelete = () => {
          dispatch(deleteShop(shop.name));
        };
        return (
          <li key={shop.name}>
            <p>{shop.name}</p>
            <p>{shop.adress}</p>
            <p>{shop.phone}</p>
            <button onClick={handleClikDelete}>dellete</button>
          </li>
        );
      })}
    </ul>
  );
};

export default ShopItem;
