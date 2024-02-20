import React from "react";
import MyNavbar from "./navbar";
import Footer from "./footer";
import Curosel from "./curosal";
import CarouselComponent from "./carouselcomponent";
import Carousel from "react-elastic-carousel";
import productList from './Products.json';
import Product from "./Product";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 1 },
  { width: 768, itemsToShow: 2 },
  { width: 992, itemsToShow: 3 },
  { width: 1200, itemsToShow: 3 },
];

const Home = () => {
  return (
    <>
      <MyNavbar />
      <CarouselComponent />

      <h2 className="text-center p-2">Product Categories</h2>
      <Curosel />
      <h2 className="text-center p-2">Featured Products</h2>
      <div className=" mt-4">
        <Carousel breakPoints={breakPoints}>
        {productList.map((product, index) => (
          <div className="">
              <Product product={product}  key={index}/>
            </div>
            ))}
        </Carousel>
      </div>
      <Footer />
    </>
  );
};

export default Home;
