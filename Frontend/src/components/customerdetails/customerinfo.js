import React from "react";
import Customermenu from "./Customermenu";
import MyNavbar from "../navbar";
import Footer from "../footer";
import Customerbanner from "./Customerbanner";
// import axios from 'axios'
import { useLocation } from "react-router-dom";

export default function Customerinfo() {
  const location = useLocation();
  const data = location.state
  console.log(data);

  return (
    <div>
      <MyNavbar />
      <Customerbanner />
      <div className="d-lg-flex justify-content-around p-2 ps-lg-5 pe-lg-5">
        <div className="col-lg-3 col-xs-12 col-md-12 p-lg-4 p-2">
          <Customermenu />
        </div>

        <div className="col-xs-12 col-md-12 col-lg-9 p-lg-4 p-2">
          <form>
            <span>
              <b>YOUR PERSONAL DETAILS</b>
            </span>
            <hr />
            <div>
              <div className="d-md-flex col-md-8 col-xs-12 mt-3 mb-3">
                <label htmlFor="firstname" className="col-md-4 col-xs-12">
                  <b>First Name</b>
                </label>
                <div className="d-flex col-md-8">
                  <input
                    type="text"
                    name="firstname"
                    id="firstname"
                    placeholder="First Name"
                    className="form-control"
                  />
                  &nbsp;<span className="text-danger fs-4">*</span>
                </div>
              </div>
              <div className="d-md-flex col-md-8 col-xs-12 mt-3 mb-3">
                <label htmlFor="lastname" className="col-md-4 col-xs-12">
                  <b>Last Name</b>
                </label>
                <div className="d-flex col-md-8">
                  <input
                    type="text"
                    name="lastname"
                    id="lastname"
                    placeholder="Last Name"
                    className="form-control"
                  />
                  &nbsp;<span className="text-danger fs-4">*</span>
                </div>
              </div>
              <div className="d-md-flex col-md-8 col-xs-12 mt-3 mb-3">
                <label htmlFor="email" className="col-md-4 col-xs-12">
                  <b> Email</b>
                </label>
                <div className="d-flex col-md-8">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email"
                    className="form-control"
                    required
                  />
                  &nbsp;<span className="text-danger fs-4">*</span>
                </div>
              </div>
            </div>
            <br />
            <span>
              <b>YOUR CONTACT INFORMATION</b>
            </span>
            <hr />
            <div className="d-md-flex col-md-8 col-xs-12 mt-3 mb-3">
              <label htmlFor="phone" className="col-md-4 col-xs-12">
                <b>Phone</b>
              </label>
              <div className="d-flex col-md-8">
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  placeholder="Mobile Number"
                  className="form-control "
                  required
                />
                &nbsp;<span className="text-danger fs-4">*</span>
              </div>
            </div>
            <div className="mt-4 mb-5">
              <button className="btn btn-success ps-4 pe-4">Save</button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}
