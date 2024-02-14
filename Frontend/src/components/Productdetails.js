import React from 'react'
import { useParams, useLocation, Link } from 'react-router-dom'
import MyNavbar from './navbar';
import Footer from './footer';

export default function Productdetails(props) {
    const {id} = useParams();
    const location = useLocation();
    const { productdetails }= location.state;

  return (
    <div>
        {/* <h1>Product Details for ID: {id}</h1> */}
        <MyNavbar/>
        <nav className="p-2 ps-lg-5 pe-lg-5">
        <Link to="/" className="text-decoration-none text-dark">
          <i className="bi bi-house-fill"></i>
        </Link>
        &nbsp; / Women / {productdetails.category} / {productdetails.name}
      </nav>
        <div className='p-2 d-md-flex'>
            <div>
                <img src={productdetails.image} alt='product'></img>
            </div>
            <div className='ps-md-3'>
                <h2>{productdetails.name}</h2> 
                <p>{productdetails.description}</p> 
                <p>Location : {productdetails.location}</p>
                <p>Color : {productdetails.color}</p>
                <p>Can it be altered : {productdetails.alteration}</p>
                <p>Size : {productdetails.size}</p>
                <p>Size (Measurements) : {productdetails.measurements}</p>
                <p>Times Worn : {productdetails.worn}</p>
                <p>Product ID : {id}</p>
                <p>&#8377;{productdetails.price}.00</p>
                <div>
                    QTY : &nbsp;
                    <select>
                        <option value={1}>1</option>
                    </select>
                    <button type="submit" className="btn btn-primary mx-2">ADD TO CART</button>
                </div>
                <button type='button' className='btn'>ADD TO WISHLIST</button>
            </div>      
        </div>
        <Footer/>
    </div>
  )
}
