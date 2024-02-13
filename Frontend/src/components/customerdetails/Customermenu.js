import React from "react";
import { Link } from "react-router-dom";

export default function Customermenu() {
  return (
    <div className="border">
      <div className="bg-secondary text-white text-center p-2 fs-4">
        <b>My Account</b>
      </div>
      <div className="">
        <ul className="list-group">
            <Link to='/customerinfo' className="text-decoration-none">
          <li className="list-group-item">
            <i className="bi bi-caret-right-square-fill"></i> Customer Info
          </li>
          </Link>
          <Link to='/addresses'  className="text-decoration-none">
          <li className="list-group-item">
            <i className="bi bi-caret-right-square-fill"></i> Addresses
          </li>
          </Link>
          <Link to='/orders' className="text-decoration-none" >
          <li className="list-group-item">
            <i className="bi bi-caret-right-square-fill"></i> Orders
          </li>
          </Link>
          <Link to='/downloadableproducts' className="text-decoration-none" >
          <li className="list-group-item">
            <i className="bi bi-caret-right-square-fill"></i> Downloadable
            Products
          </li>
          </Link>
          <Link to='/changepassword' className="text-decoration-none" >
          <li className="list-group-item">
            <i className="bi bi-caret-right-square-fill"></i> Change Password
          </li>
          </Link>
        </ul>
      </div>
    </div>
  );
}
