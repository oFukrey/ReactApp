import React from "react";
import { assets } from "../assets/assets";

const About = () => {
  return (
    <div className="bg-black" style={{ width: "100%", height: "30rem" }}>
      <div className="text-light d-flex items-center justify-between">
        <div>
          <p className="fs-1">
            Changing the world through personalized digital experiences.
          </p>
          Adobe empowers everyone, everywhere to imagine, create, and bring any
          digital experience to life. From creators and students to small
          businesses, global enterprises, and nonprofit organizations —
          customers choose Adobe products to ideate, collaborate, be more
          productive, drive business growth, and build remarkable experiences.
        </div>
        <img src={assets.about} className="img-fluid overflow-auto" alt="" />
      </div>
    </div>
  );
};

export default About;
