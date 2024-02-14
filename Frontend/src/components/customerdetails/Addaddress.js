import React from "react";
import MyNavbar from "../navbar";
import Customermenu from "./Customermenu";

export default function Addaddress() {
  return (
    <div>
      <MyNavbar />
      <div className="d-lg-flex justify-content-around p-2 ps-lg-5 pe-lg-5">
        <div className="col-lg-3 col-xs-12 col-md-12">
          <Customermenu />
        </div>

        <div className="col-xs-12 col-md-12 col-lg-9 p-4">
          <form>
            <div>
              <label htmlFor="firstname">First Name </label>
              <input
                type="text"
                name="firstname"
                id="firstname"
                placeholder="First Name"
                required
              />
            </div>
            <div>
              <label htmlFor="lastname">Last Name</label>
              <input
                type="text"
                name="lastname"
                id="lastname"
                placeholder="Last Name"
                required
              />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="example@gmail.com"
                required
              />
            </div>
            <div>
              <label htmlFor="country">Country</label>
              <select id="country" name="country">
                <option value="select">Select Country</option>
                <option value="india">INDIA</option>
              </select>
            </div>
            <div>
              <label htmlFor="state">State</label>
              <select id="state" name="state">
                <option value="">Select State</option>
              </select>
            </div>
            <div>
              <label htmlFor="city">City</label>
              <input
                type="text"
                name="city"
                id="city"
                placeholder="City"
                required
              />
            </div>
            <div>
              <label htmlFor="address1">Address 1</label>
              <input
                type="text"
                name="address1"
                id="address1"
                placeholder="House/Flat no"
                required
              />
            </div>
            <div>
              <label htmlFor="address2">Address 2</label>
              <input
                type="text"
                name="address2"
                id="address2"
                placeholder="Street, Landmark etc."
              />
            </div>
            <div>
              <label htmlFor="pincode">Pin Code</label>
              <input
                type="number"
                minLength={6}
                maxLength={6}
                name="pincode"
                id="pincode"
                placeholder="123456"
                required
              />
            </div>
            <div>
              <label htmlFor="phone">Phone Number</label>
              <input
                type="tel"
                pattern="[0-9]{10}"
                title="Enter phone number in format: xxxxxxxxxx"
                name="phone"
                id="phone"
                placeholder="mobile number"
                required
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
