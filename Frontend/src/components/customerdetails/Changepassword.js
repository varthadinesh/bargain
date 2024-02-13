import React from 'react'
import MyNavbar from '../navbar'
import Customermenu from './Customermenu'

export default function Changepassword() {
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
              <div className="m-3">
                <label htmlFor="oldpassword" className="col-3">
                  Old Password
                </label>
                <input
                  type="password"
                  name="oldpassword"
                  id="oldpassword"
                  placeholder="Old Password"
                  className="w-50 col-9 rounded border p-1"
                />
              </div>
              <div className="m-3">
                <label htmlFor="newpassword" className="col-3">
                  New Password
                </label>
                <input
                  type="password"
                  name="newpassword"
                  id="newpassword"
                  placeholder="New Password"
                  className="w-50 col-9 rounded border p-1"
                />
              </div>
              <div className="m-3">
                <label htmlFor="confirmpassword" className="col-3">
                  Confirm Password
                </label>
                <input
                  type="password"
                  name="confirmpassword"
                  id="confirmpassword"
                  placeholder="Confirm Password"
                  className="w-50 col-9 rounded border p-1"
                  required
                />
              </div>
            </div>
            <button type='button' className='btn btn-primary'>Change Password</button>
          </form>
        </div>
      </div>
    </div>
  )
}
