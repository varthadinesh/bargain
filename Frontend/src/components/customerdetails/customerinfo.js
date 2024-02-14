import React from "react";
import Customermenu from "./Customermenu";
import MyNavbar from "../navbar";

export default function Customerinfo() {
  return (
    <div>
      <MyNavbar />
      <div className="d-lg-flex justify-content-around p-2 ps-lg-5 pe-lg-5">
        <div className="col-lg-3 col-xs-12 col-md-12">
          <Customermenu />
        </div>

        <div className="col-xs-12 col-md-12 col-lg-9 p-4">
          <form>
            <span>
              <b>YOUR PERSONAL DETAILS</b>
            </span>
            <hr />
            <div>
              <div className="m-3">
                <label htmlFor="firstname" className="col-3">
                  First Name
                </label>
                <input
                  type="text"
                  name="firstname"
                  id="firstname"
                  placeholder="First Name"
                  className="w-50 col-9 rounded border p-1"
                />
              </div>
              <div className="m-3">
                <label htmlFor="lastname" className="col-3">
                  Last Name
                </label>
                <input
                  type="text"
                  name="lastname"
                  id="lastname"
                  placeholder="Last Name"
                  className="w-50 col-9 rounded border p-1"
                />
              </div>
              <div className="m-3">
                <label htmlFor="email" className="col-3">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  className="w-50 col-9 rounded border p-1"
                  required
                />
              </div>
            </div>
            <br/>
            <span>
              <b>YOUR CONTACT INFORMATION</b>
            </span>
            <hr/>
            <div>
              <div className="m-3">
                <label htmlFor="phone" className="col-3">
                  Phone
                </label>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  placeholder="Mobile Number"
                  className="w-50 col-9 rounded border p-1"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
