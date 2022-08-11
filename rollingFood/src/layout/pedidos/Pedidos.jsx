import React, { Fragment, useState } from "react";
import { Cart } from "../menu/cart";
import "../menu/cart.css"

export const Pedidos = () => {
  const [cart, setCart] = useState([]);

  const handleClick = (item) => {
    if (cart.indexOf(item) !== -1) return;
    setCart([...cart, item]);
  };

  const handleChange = (item, d) => {
    const ind = cart.indexOf(item);
    const arr = cart;
    arr[ind].amount += d;

    if (arr[ind].amount === 0) arr[ind].amount = 1;
    setCart([...arr]);
  };

  return (
    <Fragment>
      <h1>PEDIDOS</h1>
      <Cart cart={cart} setCart={setCart} handleChange={handleChange} />
    </Fragment>
  );
};
