import React from 'react';
import { useCart } from './CartContext';
import { Link } from 'react-router-dom';

const Product = (props) => {
  const  { addToCart, addToWishlist } = useCart();

  return (
      <div className="shadow rounded">
        <div className="card productcard">
        <Link to={"/product/"+props.product.id} state={{productdetails : props.product}}><img src={props.product.image} className="card-img-top" alt="product"/></Link>
            <div className="card-body">
                <h5 className="card-text">{props.product.name}</h5>
                <p className="card-text">&#8377; {props.product.price}.00</p>
                <button className="btn btn-primary" onClick={() => addToCart(props.product)}>Add to Cart</button>
                <button className="btn btn-primary" onClick={() => addToWishlist(props.product)}>Wish to Cart</button>
            </div>
        </div>
      </div>
  );
}
export default Product;