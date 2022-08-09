import React, { useState } from "react";
import Item from "antd/lib/list/Item";
import { Cart } from "../menu/cart";
import "../menu/cart.css"

export const Pedidos = () => {
  const [cart, setCart] = useState([]);

  const handleChange = (item, d) => {
    const ind = cart.indexOf(item);
    const arr = cart;
    arr[ind].amount += d;

    if (arr[ind].amount === 0) arr[ind].amount = 1;
    setCart([...arr]);
  };

  return (
    <div>
      <h1>PEDIDOS</h1>
      <Cart cart={cart} setCart={setCart} handleChange={handleChange} />
    </div>
  );
};
