import React from "react";
import LatestCollection from "../components/LatestCollection";
import Carousel from "../components/Carousel";

const Home = () => {
  return (
    <div>
      <Carousel />
      <LatestCollection />
    </div>
  );
};

export default Home;
