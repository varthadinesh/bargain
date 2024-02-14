import React from 'react'
import MyNavbar from '../navbar'
import Customermenu from './Customermenu'

export default function Orders() {
  return (
    <div>
            <MyNavbar />
      <div className="d-lg-flex justify-content-around p-2 ps-lg-5 pe-lg-5">
        <div className="col-lg-3 col-xs-12 col-md-12">
          <Customermenu />
        </div>

        <div className="col-xs-12 col-md-12 col-lg-9 p-4">
          No orders
        </div>
      </div>
    </div>
  )
}
