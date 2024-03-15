import React from 'react';
import { useCart } from './CartContext';
import { Link } from 'react-router-dom';

const Product = (props) => {
  const  { addToCart, addToWishlist,cartItems } = useCart();
  const isInCart = cartItems.some(item => item.id === props.product.id);
  const buttonText = isInCart ? "Added to Cart" : "Add to Cart"; 

  return (
      <div className="d-flex justify-content-center">
        <div className="card productcard">
        <Link to={"/product/"+props.product.id} state={{productdetails : props.product, type:props.type}}><img src={props.product.image} className="card-img-top" alt="product"/></Link>
            <div className="card-body">
                <h5 className="card-text">{props.product.name}</h5>
                <p className="card-text text-success"><b>&#8377; {props.product.price}.00</b></p>
               
            </div>
            <div className='card-footer d-flex flex-wrap justify-content-center'>
            <button className="btn btn-secondary ms-1 me-1" onClick={() => addToCart(props.product)}>
            {buttonText}
         </button>
            <button className="btn btn-secondary ms-1 me-1" onClick={() => addToWishlist(props.product)}><i className="bi bi-heart-fill"/></button>
            </div>
        </div>
      </div>
  );
}
export default Product;


// import React from 'react';
// import { useCart } from './CartContext';
// import { Link } from 'react-router-dom';
// // import women11 from '../images/women1.1.jpg'

// const Product = ({ product,productImg }) => {
//   const { addToCart, addToWishlist, cartItems } = useCart();
//   const isInCart = cartItems.some(item => item.id === product.id);
//   const buttonText = isInCart ? "Added to Cart" : "Add to Cart";
//   // const imagePath = require(`../images/${product.image}`).default;

//   return (
//     <div className="card productcard">
//      <Link to={"/product/" + product.id} state={{ productdetails: product }}>
//         <img src={productImg} className="card-img-top" alt="product" />
//       </Link>
//       <div className="card-body">
//         <h5 className="card-text">{product.name}</h5>
//         <p className="card-text text-success"><b>&#8377; {product.price}.00</b></p>
//       </div>
//       <div className='card-footer d-flex flex-wrap justify-content-center'>
//         <button className="btn btn-secondary ms-1 me-1" onClick={() => addToCart(product)}>
//           {buttonText}
//         </button>
//         <button className="btn btn-secondary ms-1 me-1" onClick={() => addToWishlist(product)}><i className="bi bi-heart-fill" /></button>
//       </div>
//       {/* Display subimages
//       <div className="subimages-container">
//         {product.subimages.map((subimage, index) => (
//           <img key={index} src={require(`../images/${subimage}`).default} alt={`Subimage ${index}`} className="subimage" />
//         ))}
//       </div> */}
//     </div>
//   );
// }

// export default Product;
