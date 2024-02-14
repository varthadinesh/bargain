import React from 'react';
const Product = (props) => {
  return (
      <div className="shadow rounded">
        <div className="card productcard">
            <img src={props.product.image} className="card-img-top" alt="product"/>
            <div className="card-body">
                <h5 className="card-text">{props.product.name}</h5>
                <p className="card-text">&#8377; {props.product.price}.00</p>
            </div>
        </div>
      </div>
  );
}
export default Product;