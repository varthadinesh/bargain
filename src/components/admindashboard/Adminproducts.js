import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Adminnavbar from "./Adminnavbar";
import Adminmenu from "./Adminmenu";
import Adminfooter from "./Adminfooter";
import Adminpagination from "./Adminpagination";
import { useCart } from "../CartContext";

export default function Adminproducts() {
  // eslint-disable-next-line no-unused-vars
  const [products, setProducts] = useState([]);
  const [pageSize, setPageSize] = useState(6);
  const [currentPage, setCurrentPage] = useState(1);
  // eslint-disable-next-line no-unused-vars
  const [filteredProducts, setFilteredProducts] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [viewRowIndex, setViewRowIndex] = useState(null);

  const {values}=useCart();
  console.log(values)
  // eslint-disable-next-line no-unused-vars
  const [data,setData]=useState([values]);
  // console.log(data)

  useEffect(() => {
    setCurrentPage(1);
    setViewRowIndex(null);
  }, [pageSize]);

  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  // eslint-disable-next-line no-unused-vars
  const tableData = filteredProducts.slice(startIndex, endIndex);
  return (
    <div className="fullscreen">
      <Adminnavbar/>
      <div className="d-md-flex">
        <div className="col-md-2 selleraccordion">
          <Adminmenu/>
        </div>
        <div className="col-md-10 ">
          <div className="fullscreen2">
            <main>
              <div className="border m-3 rounded">
                <div className="table-responsive p-3">
                  <table
                    id="dynamic-table"
                    className="table table-striped table-bordered table-hover dataTable no-footer"
                    role="grid"
                    aria-describedby="dynamic-table_info"
                  >
                    <thead className="">
                      <tr role="row">
                        <th>
                          Product Id
                        </th>
                        <th
                          className="sorting p-3"
                          tabIndex="0"
                          aria-controls="dynamic-table"
                          rowSpan="1"
                          colSpan="1"
                          aria-label="ID: activate to sort column ascending"
                        >
                          Location
                        </th>
                        <th
                          className="sorting p-3"
                          tabIndex="0"
                          aria-controls="dynamic-table"
                          rowSpan="1"
                          colSpan="1"
                          aria-label="Name: activate to sort column ascending"
                        >
                          Picture
                        </th>
                        <th
                          className="sorting p-3"
                          tabIndex="0"
                          aria-controls="dynamic-table"
                          rowSpan="1"
                          colSpan="1"
                          aria-label="Address:activate to sort column ascending"
                        >
                          Product Name
                        </th>
                        <th
                          className="hidden-480 sorting p-3"
                          tabIndex="0"
                          aria-controls="dynamic-table"
                          rowSpan="1"
                          colSpan="1"
                          aria-label="City: activate to sort column ascending"
                        >
                          Price
                        </th>
                        <th
                          className="hidden-480 sorting p-3"
                          tabIndex="0"
                          aria-controls="dynamic-table"
                          rowSpan="1"
                          colSpan="1"
                          aria-label="Timings: activate to sort column ascending"
                        >
                          Color
                        </th>
                        <th
                          className="hidden-480 sorting p-3"
                          rowSpan="1"
                          colSpan="1"
                          aria-label="Status"
                        >
                          Measurements
                        </th>
                        <th
                          className="hidden-480 sorting p-3"
                          rowSpan="1"
                          colSpan="1"
                          aria-label="Status"
                        >
                          Size
                        </th>
                        <th
                          className="hidden-480 sorting p-3"
                          rowSpan="1"
                          colSpan="1"
                          aria-label="Status"
                        >
                          Worn
                        </th>
                        <th
                          className="hidden-480 sorting p-3"
                          rowSpan="1"
                          colSpan="1"
                          aria-label="Status"
                        >
                          Alteration
                        </th>
                        <th
                          className="hidden-480 sorting p-3"
                          rowSpan="1"
                          colSpan="1"
                          aria-label="Status"
                        >
                          Product Description
                        </th>
                        <th>

                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {data.map((item,index)=>(
                        <tr key={index}>
                          <td>{index+1}</td>
                          <td>{item.location}</td>
                          <td> <Link to="/adminproductdetails"><img src={item.productimageurl} alt="product"  width="150" height="150"/></Link></td>
                          <td>{item.productname}</td>
                          <td>{item.price}</td>
                          <td>{item.color}</td>
                          <td>{item.measurements}</td>
                          <td>{item.size}</td>
                          <td>{item.worn}</td>
                          <td>{item.alteration}</td>
                          <td>{item.productdescription}</td>
                                                    <td>
                            <Link to="/adminproductdetails">
                            <button
                              className="btn btn-secondary m-1"
                            >
                              View
                            </button>
                            </Link>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <Adminpagination
                  stateData={products}
                  pageSize={pageSize}
                  setPageSize={setPageSize}
                  setViewRowIndex={setViewRowIndex}
                  currentPage={currentPage}
                  setCurrentPage={setCurrentPage}
                />
              </div>
            </main>
            <Adminfooter/>
          </div>
        </div>
      </div>
     
    </div>
  );
  
}