import React from "react"; 

export const Card = ({ item, handleClick }) => {
  const { title, desc, price, image, id } = item;
  return (
    <div className="col">
      <div className="card">
        <img src={image} className="card-img-top img-card-menu" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <div className="card-text">
          <p >Precio - ${price}</p>
          <p >{desc}</p>
            </div>
          <button className="btn btn-rolling" onClick={() => handleClick(item)}>Añadir a mi carrito</button>
        </div>
      </div>
    </div>
  );
};


