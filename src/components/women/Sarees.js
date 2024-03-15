import React, { useEffect, useState } from "react";
import MyNavbar from "../navbar";
import Menu from "../menu";
import { Link } from "react-router-dom";
import Filter from "./filter";
import Filterdisplaynav from "../filterdisplaynav";
import Product from "../Product";
import Pagination from "../pagination";
import Footer from "../footer";
import productList from "../Products.json";

const Sarees = () => {
  const [products, setProducts] = useState([]);
  const [pageSize, setPageSize] = useState(6);
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredProducts, setFilteredProducts] = useState([]);

  // eslint-disable-next-line no-unused-vars
  const [viewRowIndex, setViewRowIndex] = useState(null);
  useEffect(() => {
    const filteredProducts = productList.filter(
      (item) => item.category === "sarees"
    );
    setProducts(filteredProducts);
    setFilteredProducts(filteredProducts);
  }, []);
  useEffect(() => {
    setCurrentPage(1);
    setViewRowIndex(null);
  }, [pageSize]);

  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const tableData = filteredProducts.slice(startIndex, endIndex);

  const handleFilter = (filteredProducts) => {
    setFilteredProducts(filteredProducts);
  };

  return (
    <div className="fullscreen">
      <MyNavbar />
      <main>
      <nav className="p-2 ps-lg-5 pe-lg-5">
        <Link to="/" className="text-decoration-none text-dark">
          <i className="bi bi-house-fill"></i>
        </Link>
        &nbsp; /{" "}
        <Link to="/women" className="text-decoration-none text-dark">
          Women
        </Link>{" "}
        /&nbsp; Sarees
      </nav>
      <div className="d-lg-flex justify-content-around p-2 ps-lg-5 pe-lg-5">
        <div className="col-lg-2 col-xs-12 col-md-12">
          <Menu />
        </div>

        <div className="col-xs-12 col-md-12 col-lg-10 ps-lg-3">
          <Filterdisplaynav pageSize={pageSize} setPageSize={setPageSize} />

          <Filter products={products} onFilter={handleFilter} />
          <div className="d-flex flex-wrap justify-content-around gap-3">
            {tableData.length > 0 ? (
              tableData.map((product, index) => (
                <Product product={product} key={index} type="women" />
              ))
            ) : (
              <h4>No products to display</h4>
            )}
          </div>
          <Pagination
            stateData={filteredProducts}
            pageSize={pageSize}
            setViewRowIndex={setViewRowIndex}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </div>
      </div>
      </main>
      <Footer />
    </div>
  );
};

export default Sarees;
