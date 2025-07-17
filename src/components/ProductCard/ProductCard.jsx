import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className="col-md-4">
      <div className="card mb-4">
        <img src={product.image} alt={product.name} className="card-img-top" />
        <div className="card-body">
          <h5 className="card-title">{product.name}</h5>
          <p className="card-text">{product.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
