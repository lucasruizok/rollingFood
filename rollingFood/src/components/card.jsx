import React from "react";


import "./card.css";

function Card({ imageSource, title, desc, price }) {

  return (
    
    <div className="card text-center bg-dark">
      <div className="overflow">
        <img src={imageSource} alt="" className="card-img-top" />
      </div>
      <div className="card-body">
        <h4 className="card-title">{title}</h4>
        <h5 className="price">${price}</h5>
        <p className="card-text
        ext-secondary">
          {desc}
        </p>
        <button className="btn">Agregar al pedido</button>
      </div>
    </div>
  );
}


export default Card;