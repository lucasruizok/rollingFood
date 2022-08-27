import React from "react";
import "./card.css";
import "../../index.css";
import 'animate.css';

export const Card = ({ item, handleClick }) => {
  const { title, desc, price, image, id } = item;
  return (
    <div className="card shadow p-3 mb-4 bg-body rounded">
      <div className="row g-0 mt-1">
        <div className="col-4 d-flex justify-content-center">
          <img src={image} className="img-fluid rounded-start img-card" />
        </div>
        <div className="col-8">
          <div className="card-body-rolling">
            <div className="content">
              <h5 className="mt-2 title">{title}</h5>
            </div>
            <div className="content">
              <p className="price">${price}</p>
              <p className="description">{desc}</p>
            </div>
            <div className="content mb-1">
              <button className="btn btn-rolling" onClick={() => handleClick(item)}>Añadir a mi carrito</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
