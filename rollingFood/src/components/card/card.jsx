import React from "react";
import "./card.css";
import "../../index.css";
import 'animate.css';
import { useContext } from "react";
import { DataContext } from "../../context/DataContext";
import { ButtonCard } from "../buttons/ButtonCard";

export const Card = ({item}) => {
  const { title, desc, price, image, id} = item;
  const {addCart} = useContext(DataContext);
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
            <ButtonCard addCart={addCart} id={id}/>
          </div>
        </div>
      </div>
    </div>
  );
}
