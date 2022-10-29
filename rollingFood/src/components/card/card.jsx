import React from "react";
import "./card.css";
import "../../index.css";
import 'animate.css';
import { useContext } from "react";
import { DataContext } from "../../context/DataContext";
import { ButtonCard } from "../buttons/ButtonCard";

export const Card = ({ item }) => {
  const { discount, detail, productName, price, _id, imgUrl } = item;
  const { addCart } = useContext(DataContext);
  return (
    <div className="card shadow p-3 mb-4 bg-body rounded">
      <div className="row g-0 mt-1">
        <div className="col-sm-5 img-container">
          <img src={imgUrl} className="img-card" />
        </div>
        <div className="col-sm-7">
          <div className="card-body-rolling">
            <div className="content">
              <h5 className="mt-2 title">{productName}</h5>
            </div>
            <div className="content">
              <p className="price">Precio ${price - discount}</p>
              <p className="description">Ingredientes: {detail}</p>
            </div>
            <ButtonCard addCart={addCart} _id={_id} />
          </div>
        </div>
      </div>
    </div>
  );
}
