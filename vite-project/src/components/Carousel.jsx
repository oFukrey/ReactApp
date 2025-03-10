import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { carouselData } from "../assets/assets";

const MyCarousel = () => {
  const carouselCollection = carouselData.filter((item) => item.isValid);

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1000 },
      items: 3,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1000, min: 464 },
      items: 2,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  return (
    <Carousel
      responsive={responsive}
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={2000}
      removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
      showDots={true}
    >
      {carouselCollection.map((image) => (
        <div key={image.id} className="text-center m-2 -z-10">
          <img
            src={image.image}
            alt=""
            className="img-fluid mx-auto d-block shadow-lg rounded"
            style={{ width: "300px", height: "500px", objectFit: "fill" }}
          />
          <h5 className="mt-3">{image.description}</h5>
          <p>₹{image.price}</p>
        </div>
      ))}
    </Carousel>
  );
};

export default MyCarousel;
