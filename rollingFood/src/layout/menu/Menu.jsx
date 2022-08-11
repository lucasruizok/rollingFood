import React, { Fragment, useState } from 'react'
import './menu.css'
import { Amazon } from './amazon'

export const Menu = () => {
  const [cart, setCart] = useState([]);

  const handleClick = (item) => {
    if (cart.indexOf(item) !== -1) return;
    setCart([...cart, item]);
  };

  return (
    <Fragment>
    <div className='container'>
      <h1 className='title'>Nuestras Pizzas</h1>
      <Amazon handleClick={handleClick} />
    </div>
    </Fragment>
  )
}
