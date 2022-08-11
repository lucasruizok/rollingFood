import React from "react"; 
import "./card.css";

export const Card = ({ item, handleClick }) => {
  const { title, desc, price, image } = item;
  return (
    <div className="col">
      <div className="card">
        <div className="overflow">
          <img src={image} className=" card-img-top img-card-menu" alt="..." />
        </div>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <div className="card-text">
            <p>${price}</p>
            <p>{desc}</p>
          </div>
          <button className="btn btn-rolling" onClick={() => handleClick(item)}>
            Añadir al carrito
          </button>
        </div>
      </div>
    </div>
  );
};


