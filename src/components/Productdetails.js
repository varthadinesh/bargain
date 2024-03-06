import React, { useRef } from "react";
import { useParams, useLocation, Link } from "react-router-dom";
import MyNavbar from "./navbar";
import Footer from "./footer";
import { useCart } from "./CartContext";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 1600, min: 1201 },
    items: 3,
  },
  desktop: {
    breakpoint: { max: 1200, min: 992 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 991, min: 768 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 767, min: 0 },
    items: 2,
  },
};

export default function Productdetails(props) {
  const { id } = useParams();
  const location = useLocation();
  const { productdetails } = location.state;
  const { type } = location.state;
  // console.log(type)
  const { addToCart, addToWishlist, cartItems } = useCart();
  const isInCart = cartItems.some((item) => item.id === productdetails.id);
  const buttonText = isInCart ? "Added to Cart" : "Add to Cart";

  // useRef to hold the reference to the productdetailsimg
  const productDetailsImgRef = useRef();
  // useRef to hold the reference to the active subimage
  const activeSubimageRef = useRef();

  // Function to update the productdetailsimg and set the active subimage
  const updateProductDetailsImg = (newSrc, index) => {
    productDetailsImgRef.current.src = newSrc;

    // Remove border from the previous active subimage
    if (activeSubimageRef.current) {
      activeSubimageRef.current.style.border = "none";
    }

    // Set border to the new active subimage
    const newActiveSubimage = document.getElementById(`subimage-${index}`);
    if (newActiveSubimage) {
      newActiveSubimage.style.border = "2px solid green";
      newActiveSubimage.style.padding = "3px";
      activeSubimageRef.current = newActiveSubimage;
    }
  };

  return (
    <div>
      {/* <h1>Product Details for ID: {id}</h1> */}
      <MyNavbar />
      <nav className="p-2 ps-lg-5 pe-lg-5">
        <Link to="/" className="text-decoration-none text-dark">
          <i className="bi bi-house-fill"></i>
        </Link>
        &nbsp; /{" "}
        <Link to={"/" + type} className="text-decoration-none text-dark">
          {type}
        </Link>
        /{" "}
        <Link
          to={"/" + productdetails.category}
          className="text-decoration-none text-dark"
        >
          {productdetails.category}
        </Link>{" "}
        / {productdetails.name}
      </nav>
      <div className="p-2 ps-lg-5 pe-lg-5 d-lg-flex">
        <div className="p-2 ps-lg-4 pe-lg-4 d-flex flex-column justify-content-center align-items-center col-lg-5 col-xs-12 col-md-12">
          <img
            ref={productDetailsImgRef}
            src={productdetails.image}
            alt="product"
            className="productdetailsimg"
          ></img>

          <Carousel responsive={responsive} className="w-75 mt-2 p-2">
            {productdetails.subimages.map((product, index) => (
              <div
                className="card m-3"
                key={index}
                id={`subimage-${index}`}
                onClick={() => updateProductDetailsImg(product, index)}
              >
                <img
                  src={product}
                  alt="images"
                  height="110"
                  width="100%"
                  style={{ cursor: "pointer" }}
                />
              </div>
            ))}
          </Carousel>
        </div>
        <div className="ps-md-3 p-2">
          <h2 className="text-secondary">{productdetails.name}</h2>
          <p>{productdetails.description}</p>
          <br />
          <div className="d-flex col-md-9">
            <p className=" col-md-4 col-lg-5">
              <b>Location</b>
            </p>
            <p className=" col-md-8 col-lg-10">: {productdetails.location}</p>
          </div>
          <div className="d-flex col-md-9">
            <p className=" col-md-4 col-lg-5">
              <b>Color</b>
            </p>
            <p className=" col-md-8 col-lg-10">: {productdetails.color}</p>
          </div>
          <div className="d-flex col-md-9">
            <p className=" col-md-4 col-lg-5">
              <b>Can it be altered</b>
            </p>
            <p className=" col-md-8 col-lg-10">: {productdetails.alteration}</p>
          </div>
          <div className="d-flex col-md-9">
            <p className=" col-md-4 col-lg-5">
              <b>Size</b>
            </p>
            <p className=" col-md-8 col-lg-10">: {productdetails.size}</p>
          </div>
          <div className="d-flex col-md-9">
            <p className=" col-md-4 col-lg-5">
              <b>Size (Measurements)</b>
            </p>
            <p className=" col-md-8 col-lg-10">
              : {productdetails.measurements}
            </p>
          </div>
          <div className="d-flex col-md-9">
            <p className=" col-md-4 col-lg-5">
              <b>Times Worn</b>
            </p>
            <p className=" col-md-8  col-lg-10">: {productdetails.worn}</p>
          </div>
          <div className="d-flex col-md-9">
            <p className=" col-md-4 col-lg-5">
              <b>Product ID</b>
            </p>
            <p className=" col-md-8 col-lg-10">: {id}</p>
          </div>

          <p className="text-success fs-4">
            <b>&#8377;{productdetails.price}.00</b>
          </p>
          <div className="d-flex">
            <b> QTY </b>: &nbsp;
            <select className="form-select" style={{ width: "60px" }}>
              <option value={1}>1</option>
            </select>
            <button
              type="submit"
              className="btn btn-secondary ms-3"
              onClick={() => addToCart(productdetails)}
            >
              {buttonText}
            </button>
          </div>
          <button
            type="button"
            className="btn  btn-outline-secondary mt-3 mb-3"
            onClick={() => addToWishlist(productdetails)}
          >
            <i className="bi bi-heart-fill" /> ADD TO WISHLIST
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}
