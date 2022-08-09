import React, { Fragment } from 'react'
import Cards from '../../components/cards'
import './menu.css'


export const Menu = () => {
  return (
    <Fragment>
    <div className='menu'>
      <h1>Nuestras Pizzas</h1>
      <Cards />
    </div>
    </Fragment>
  )
}
