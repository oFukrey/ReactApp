import React from "react";
import { assets } from "../assets/assets";

const About = () => {
  return (
    <div
      className="container d-flex align-items-center justify-content-center bg-black"
      style={{ width: "100%", height: "30rem" }}
    >
      <div className=" text-light d-flex  align-items-center justify-content-center">
        <div className="col-6">
          <p className="fs-1">
            Changing the world through personalized digital experiences.
          </p>
          Adobe empowers everyone, everywhere to imagine, create, and bring any
          digital experience to life. From creators and students to small
          businesses, global enterprises, and nonprofit organizations —
          customers choose Adobe products to ideate, collaborate, be more
          productive, drive business growth, and build remarkable experiences.
        </div>
        <img
          src={assets.about}
          className="img-fluid overflow-auto col-6"
          alt=""
        />
      </div>
    </div>
  );
};

export default About;
