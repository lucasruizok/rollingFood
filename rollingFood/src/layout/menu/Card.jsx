import React from "react"; 

export const Card = ({ item, handleClick }) => {
  const { title, desc, price, image, id } = item;
  return (
    <div className="col">
      <div className="card">
        <img src={image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">{id}</p>
          <p className="card-text">{title}</p>
          <p className="card-text">{desc}</p>
          <p className="card-text">Price - {price}</p>
          <button onClick={() => handleClick(item)}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};


