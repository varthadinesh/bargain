import React from "react";
import MyNavbar from "./navbar";
import Footer from "./footer";
import Curosel from "./curosal";
import CarouselComponent from "./carouselcomponent";
// import Carousel from "react-elastic-carousel";
import productList from './Products.json';
import Product from "./Product";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

// const breakPoints = [
//   { width: 1, itemsToShow: 1 },
//   { width: 550, itemsToShow: 2 },
//   { width: 768, itemsToShow: 3 },
//   { width: 992, itemsToShow: 3 },
//   { width: 1200, itemsToShow: 3 }
// ];

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

      <h2 className="text-center p-2">Product Categories</h2>
      <Curosel />
      <h2 className="text-center p-2">Featured Products</h2>
      <div className="mt-4">
        {/* <Carousel breakPoints={breakPoints}>
        {productList.map((product, index) => (
          <div className="">
              <Product product={product}  key={index}/>
            </div>
            ))}
        </Carousel> */}
        <Carousel 
        responsive={responsive}
        // showDots={true}
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
