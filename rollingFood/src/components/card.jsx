import React from "react";
// import PropTypes from "prop-types";


import "./card.css";

function Card({ imageSource, title, desc, price }) {
  return (
    
    <div className="card text-center bg-dark animate__animated animate__fadeInUp">
      <div className="overflow">
        <img src={imageSource} alt="a wallpaper" className="card-img-top" />
      </div>
      <div className="card-body text-light">
        <h4 className="card-title">{title}</h4>
        <h5 className="price">${price}</h5>
        <p className="card-text
        ext-secondary">
          {desc}
        </p>
        <button className="btn" >Agregar al pedido</button>
      </div>
    </div>
  );
}

// Card.propTypes = {
//   title: PropTypes.string.isRequired,
//   text: PropTypes.string,
//   url: PropTypes.string,
//   imageSource: PropTypes.string
// };

export default Card;