import React, { useContext } from 'react'
import './menu.css'
import { Card } from '../../components/card/card';
import { DataContext} from '../../context/DataContext';
import { useEffect } from 'react';

export const Menu = () => {
  const { pizzas, getPizzas } = useContext(DataContext);

  useEffect(()=>{
    getPizzas();
  },[])
  
  return (
    <div className='container'>
      <h2 className='text-center mt-2'>Nuestras Pizzas</h2>
        <div className="row">
          {pizzas.map((item) => (
            <div className="col-lg-6">
              <Card item={item}/>
            </div>
          ))}
        </div>
    </div>
  )
}
