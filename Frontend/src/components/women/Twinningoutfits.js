import React, { useEffect, useState } from "react";
import MyNavbar from "../navbar";
import Menu from "../menu";
import { Link } from "react-router-dom";
import Filter from "./filter";
import Filterdisplaynav from "../filterdisplaynav";
import axios from "axios";
import Product from "../Product";
import Pagination from "../pagination";
import Footer from "../footer";

const Twinningoutfits = () => {
    const  [products, setProducts] = useState([]);
    const [pageSize, setPageSize] = useState(3);
    const [currentPage, setCurrentPage] = useState(1);
    // eslint-disable-next-line no-unused-vars
    const [viewRowIndex, setViewRowIndex] = useState(null);
    useEffect(() => {
      axios
        .get("http://localhost:8080/women")
        .then((res) => {
          if(res.data !== "Fail" && res.data !== "Error"){
            const filteredProducts = res.data.filter((item)=>item.category === "twinning-outfits")
            setProducts(filteredProducts);
          }
        })
        .catch((err) => console.log(err));
    },[]);
    useEffect(() => {
      setCurrentPage(1);
      setViewRowIndex(null);
    }, [pageSize]);
  
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const tableData = products.slice(startIndex, endIndex);
  return (
    <>
      <MyNavbar />
      <nav className="p-2 ps-lg-5 pe-lg-5">
        <Link to="/" className="text-decoration-none text-dark">
          <i className="bi bi-house-fill"></i>
        </Link>
        &nbsp; / Women /&nbsp; Twinning Outfits
      </nav>
      <div className="d-lg-flex justify-content-around p-2 ps-lg-5 pe-lg-5">
        <div className="col-lg-2 col-xs-12 col-md-12">
          <Menu />
        </div>

        <div className="col-xs-12 col-md-12 col-lg-10 ps-lg-3">
        <Filterdisplaynav pageSize={pageSize} setPageSize={setPageSize} />

          <Filter />
          <div className="d-flex flex-wrap justify-content-around gap-3">
            {tableData.map((product,index) => (
              <Product product={product} key={index} />
            ))}
          </div>
        <Pagination
            stateData={products}
            pageSize={pageSize}
            setViewRowIndex={setViewRowIndex}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </div>

      </div>
      <Footer/>
    </>
  );
};

export default Twinningoutfits;
