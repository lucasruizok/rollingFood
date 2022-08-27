import React, { Fragment, useState } from 'react'
import './menu.css'
import { Card } from '../../components/card/card';
import image1 from '../../assets/crudo y rucula.png';

export const Menu = () => {
  const [cart, setCart] = useState([]);
  const [item, setItem] = useState([]);
  const cards = [
    {
      id: 1,
      title: "Anchoas",
      image: image1,
      price: 1200,
      desc: "Muzzarella, salsa de tomate, ají molido, aceitunas  y anchoas.",
    },
    {
      id: 2,
      title: "Brocoli y Rucula",
      image: image1,
      price: 1300,
      desc: "Muzzarella, salsa de tomate, morrón, brócoli y aceitunas.",
    },
    {
      id: 3,
      title: "Crudo y Rucula",
      image: image1,
      price: 1500,
      desc: "Muzzarella, salsa de tomate, rúcula, parmesano, jamón crudo y aceitunas.",
    },
    {
      id: 4,
      title: "Tres quesos",
      image: image1,
      price: 1400,
      desc: "Muzzarella, provolone, roquefort y salsa de tomate.",
    },
    {
      id: 5,
      title: "Fugazzeta",
      image: image1,
      price: 1050,
      desc: "Muzzarella, aceite de oliva, aceitunas negras y cebolla.",
    },
    {
      id: 6,
      title: "Muzzarella",
      image: image1,
      price: 1000,
      desc: "Muzarrella, salsa de tomate, orégano y aceitunas.",
    },
    {
      id: 7,
      title: "Napolitana",
      image: image1,
      price: 1150,
      desc: "Muzzarella, salsa de tomate, salsa de ajo y perejil, rodajas de tomate, provolone y orégano.",
    },
    {
      id: 8,
      title: "Panceta",
      image: image1,
      price: 1600,
      desc: "Muzzarella, salsa de tomate, orégano, aceitunas verdes, aceitunas negras y panceta."
  
    },
    {
      id: 9,
      title: "Pepperoni",
      image: image1,
      price: 1350,
      desc: "Muzarrella, salsa de tomate, salsa de pepperoni casera, longaniza, orégano y aceitunas.",
    },
    {
      id: 10,
      title: "Verduras",
      image: image1,
      price: 1250,
      desc: "Muzarrella, salsa de tomate, aceitunas verdes, morrón, cebolla morada y huevo.",
    },
    {
      id: 11,
      title: "Pollo y Champignones",
      image: image1,
      price: 1300,
      desc: "Muzzarella,salsa de tomate, champignones, aceitunas negras y pollo.",
    },
    {
      id: 12,
      title: "Palmitos",
      image: image1,
      price: 1350,
      desc: "Muzzarella, salsa de tomate, jamón cocido natural, huevo rallado, palmitos y salsa golf.",
    },
    {
      id: 13,
      title: "Jamon y Morron",
      image: image1,
      price: 1300,
      desc: "Muzarrella, salsa de tomate, orégano, aceitunas, jamón cocido natural",
  
    },
    {
      id: 14,
      title: "Jamon y Huevo",
      image: image1,
      price: 1250,
      desc: "Muzzarella, salsa de tomate, orégano, huevo escalfado y Jamón cocido.",
    },
    {
      id: 15,
      title: "Carne mechada",
      image: image1,
      price: 1700,
      desc: "Muzzarella, salsa de tomate, huevo y carne de ternera mechada.",
    },
  ];
  const handleClick = (item) => {
    setItem(item);
    console.log(item)
    if (cart.indexOf(item) !== -1) return;
    setCart([...cart, item]);
    console.log(cart);  
  };

  return (
    <div className='container'>
      <h2 className='text-center mt-2'>Menu</h2>
      <div>
        {cards.map((item) => (
          <Card key={item.id} item={item} handleClick={handleClick} />
        ))}
    </div>
    </div>
  )
}
