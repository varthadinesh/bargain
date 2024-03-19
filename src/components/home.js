import React from "react";
import MyNavbar from "./navbar";
import Footer from "./footer";
import Curosel from "./curosal";
import CarouselComponent from "./carouselcomponent";
import productList from './Products.json';
import Product from "./Product";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 1600, min: 1201 },
    items: 4
  },
  desktop: {
    breakpoint: { max: 1200, min: 992 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 991, min: 768 },
    items: 3
  },
  mobile: {
    breakpoint: { max: 767, min: 0 },
    items: 1
  }
};

const Home = () => {
  return (
    <div className="fullscreen">
      <MyNavbar />
      <main>
      <CarouselComponent />

      <h4 className="p-2">Product Categories</h4>
      <Curosel />
      <h4 className=" p-2">Featured Products</h4>
      <div className="mt-4">
      
        <Carousel 
        responsive={responsive}
        >
        {productList.map((product, index) => (
          <div className="m-3" key={index}>
              <Product product={product} />
            </div>
            ))}
           
        </Carousel>;
      </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
