import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import MyNavbar from "./navbar";
// import Footer from "./footer";
import { useCart } from "../CartContext";
import Adminnavbar from "./Adminnavbar";
import Adminfooter from "./Adminfooter";

export default function Adminproductdetails() {
  const { values, setAdminaccepted } = useCart();
  console.log(values);
  //eslint-disable-next-line no-unused-vars
  const [data, setData] = useState([values]);
  return (
    <div className="fullscreen">
      <Adminnavbar />
      {/* <nav className="p-2 ps-lg-5 pe-lg-5">
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
      </nav> */}

      <main>
        {data.map((item, index) => (
          <div className="p-2 ps-lg-5 pe-lg-5 d-lg-flex">
            <div className="p-2 ps-lg-4 pe-lg-4 d-flex flex-column justify-content-center align-items-center col-lg-5 col-xs-12 col-md-12">
              <img
                // ref={productDetailsImgRef}
                src={item.productimageurl}
                alt="product"
                className="productdetailsimg"
              ></img>
            </div>
            <div className="ps-md-3 p-2">
              <h2 className="text-secondary">{item.productname}</h2>
              <p>{item.productdescription}</p>
              <br />
              <div className="d-flex col-md-9">
                <p className=" col-md-4 col-lg-5">
                  <b>Location</b>
                </p>
                <p className=" col-md-8 col-lg-10">: {item.location}</p>
              </div>
              <div className="d-flex col-md-9">
                <p className=" col-md-4 col-lg-5">
                  <b>Color</b>
                </p>
                <p className=" col-md-8 col-lg-10">: {item.color}</p>
              </div>
              <div className="d-flex col-md-9">
                <p className=" col-md-4 col-lg-5">
                  <b>Can it be altered</b>
                </p>
                <p className=" col-md-8 col-lg-10">: {item.alteration}</p>
              </div>
              <div className="d-flex col-md-9">
                <p className=" col-md-4 col-lg-5">
                  <b>Size</b>
                </p>
                <p className=" col-md-8 col-lg-10">: {item.size}</p>
              </div>
              <div className="d-flex col-md-9">
                <p className=" col-md-4 col-lg-5">
                  <b>Size (Measurements)</b>
                </p>
                <p className=" col-md-8 col-lg-10">: {item.measurements}</p>
              </div>
              <div className="d-flex col-md-9">
                <p className=" col-md-4 col-lg-5">
                  <b>Times Worn</b>
                </p>
                <p className=" col-md-8  col-lg-10">: {item.worn}</p>
              </div>
              <div className="d-flex col-md-9">
                <p className=" col-md-4 col-lg-5">
                  <b>Product ID</b>
                </p>
                <p className=" col-md-8 col-lg-10">: {item.index + 1}</p>
              </div>

              <p className="text-success fs-4">
                <b>&#8377;{item.price}.00</b>
              </p>
              <div className="d-flex">
                <b> QTY </b>: &nbsp;
                <select className="form-select" style={{ width: "60px" }}>
                  <option value={1}>1</option>
                </select>
                {/* <button
              type="submit"
              className="btn btn-secondary ms-3"
              onClick={() => addToCart(productdetails)}
            >
              {buttonText}
            </button> */}
              </div>
              <button
                type="button"
                className="btn  btn-outline-success mt-3 mb-3"
                onClick={() => {
                  setAdminaccepted(true);
                  alert("Product added to the store successfully");
                }}
              >
                <i className="bi bi-bookmark-plus-fill"></i> ADD TO PRODUCT LIST
              </button>
              <button
                className="btn btn-outline-danger m-1"
                onClick={() => {
                  setAdminaccepted(false);
                  alert("Product has been rejected");
                }}
              >
                Reject
              </button>
            </div>
          </div>
        ))}
      </main>
      <Adminfooter />
    </div>
  );
}
