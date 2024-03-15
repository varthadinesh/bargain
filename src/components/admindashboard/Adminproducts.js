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
              {/* <div className="d-flex justify-content-between m-2">
                <h4>Products</h4>
                <Link to="/addnewproduct">
                  <button className="btn btn-primary">
                    <i className="bi bi-plus-square-fill"></i> Add new product
                  </button>
                </Link>
              </div> */}

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
                          {/* <td><img src={item.productimageurl} alt="product image" width="150" height="150"/></td> */}
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
                      {/* <tr role="row" className="">
                        <td>No data available</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                      </tr> */}
                      {/* <tr>
                        <td> row 2</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                      </tr> */}
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


// {
//   "id": 1,
//   "name": "Wedding Reception Gown",
//   "description":"The Wedding reception gown is from theeva.in customised reddish maroon colour, which gives grand look and heavy ,it is also comfortable for small and lite medium sized people . The actual price when we purchase is 105000 in January 2023. Bust 32-34 waist 28-32 length 128 cm and alternation scope-No",
//   "location":"India",
//   "color":"Reddish Maroon",
//   "alteration":"No",
//   "size":"XS",
//   "measurements":"32-34",
//   "worn":"1",
//   "price": 19800,
//   "category":"highendcouture",
//   "producttype":"women",
//   "image": "../images/women1.png",
//   "subimages":[
//     "../images/women1.png",
//     "../images/women2.png",
//     "../images/women3.png",
//     "../images/women4.png",
   
//   ]
  
// },