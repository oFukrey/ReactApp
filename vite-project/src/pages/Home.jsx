import React from "react";
import LatestCollection from "../components/LatestCollection";
import Carousel from "../components/Carousel";
import Testimonial from "../components/Testimonial";

const Home = () => {
  return (
    <div>
      <Carousel />
      <LatestCollection />
      <Testimonial />
    </div>
  );
};

export default Home;
