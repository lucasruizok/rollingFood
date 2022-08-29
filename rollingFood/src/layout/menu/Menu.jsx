import React, { useContext } from 'react'
import './menu.css'
import { Card } from '../../components/card/card'; 
import { DataContext } from '../../context/DataContext';

export const Menu = () => {
  const {pizzas} = useContext(DataContext)

  return (
    <div className='container'>
      <h2 className='text-center mt-2'>Nuestras Pizzas</h2>
      <div>
        {pizzas.map((item) => (
          <Card item={item}/>
        ))}
    </div>
    </div>
  )
}
