import React from 'react'
import { Card } from './Card';
import "./menu.css";

import image1 from '../../assets/anchoas.png';
import image2 from '../../assets/brocoli y morron.png';
import image3 from '../../assets/crudo y rucula.png';
import image4 from '../../assets/cuatro quesos.png';
import image5 from '../../assets/fugazzeta.png';
import image6 from '../../assets/muzzarella.png';
import image7 from '../../assets/napolitana.png';
import image8 from '../../assets/panceta.png';
import image9 from '../../assets/Pepperoni.png';
import image10 from '../../assets/pizzaverdura.png';
import image11 from '../../assets/pollo y champiñones.png';
import image12 from '../../assets/palmitos.png';
import image13 from '../../assets/jamon y morron.png';
import image14 from '../../assets/panceta y huevo.png';
import image15 from '../../assets/carne mechada.png';



const cards = [
    {
      id: 1,
      title: "Anchoas",
      image: image1,
      price: 1200,
      desc: "Muzzarella, salsa de tomate, ají molido, aceitunas y anchoas.",
    },
    {
      id: 2,
      title: "Brocoli y Morrón",
      image: image2,
      price: 1300,
      desc: "Muzzarella, salsa de tomate, morrón, brócoli, hongos y aceitunas.",
    },
    {
      id: 3,
      title: "Crudo y Rucula",
      image: image3,
      price: 1500,
      desc: "Parmesano, salsa de tomate, rúcula, jamón crudo y aceitunas.",
    },
    {
      id: 4,
      title: "Tres quesos",
      image: image4,
      price: 1400,
      desc: "Muzzarella, salsa de tomate, parmesano y roquefort.",
    },
    {
      id: 5,
      title: "Fugazzeta",
      image: image5,
      price: 1050,
      desc: "Muzzarella, aceite de oliva, aceitunas negras y cebolla.",
    },
    {
      id: 6,
      title: "Muzzarella",
      image: image6,
      price: 1000,
      desc: "Muzarrella, salsa de tomate, orégano y aceitunas.",
    },
    {
      id: 7,
      title: "Napolitana",
      image: image7,
      price: 1150,
      desc: "Muzzarella, salsa de tomate, ajo picado, perejil, rodajas de tomate, provolone y orégano.",
    },
    {
      id: 8,
      title: "Panceta",
      image: image8,
      price: 1600,
      desc: "Muzzarella, salsa de tomate, orégano, aceitunas verdes, aceitunas verdes, negras y panceta."
  
    },
    {
      id: 9,
      title: "Pepperoni",
      image: image9,
      price: 1350,
      desc: "Muzarrella, salsa de tomate, rodajas de pepperoni, ají molido, orégano y aceitunas.",
    },
    {
      id: 10,
      title: "Verduras",
      image: image10,
      price: 1250,
      desc: "Muzarrella, salsa de tomate, aceitunas verdes, morrón, cebolla blanca, cebolla morada y huevo.",
    },
    {
      id: 11,
      title: "Pollo y Champignones",
      image: image11,
      price: 1300,
      desc: "Muzzarella, salsa de tomate, pollo salteado, champignones y aceitunas negras.",
    },
    {
      id: 12,
      title: "Palmitos",
      image: image12,
      price: 1350,
      desc: "Muzzarella, salsa de tomate, jamón cocido natural, huevo rallado, palmitos y salsa golf.",
    },
    {
      id: 13,
      title: "Jamon y Morron",
      image: image13,
      price: 1300,
      desc: "Muzarrella, salsa de tomate, orégano, aceitunas, jamón cocido natural",
  
    },
    {
      id: 14,
      title: "Jamon y Huevo",
      image: image14,
      price: 1250,
      desc: "Muzzarella, salsa de tomate, orégano, huevo escalfado y Jamón cocido.",
    },
    {
      id: 15,
      title: "Carne mechada",
      image: image15,
      price: 1700,
      desc: "Muzzarella, salsa de tomate, huevo escalfado y carne mechada.",
    },
  ];  

export const Amazon = ({ handleClick }) => {
  return (
    <div className="row row-cols-1 row-cols-md-3 g-4">
      {cards.map((item) => (
        <Card key={item.id} item={item} handleClick={handleClick} />
      ))}
    </div>
  );
};