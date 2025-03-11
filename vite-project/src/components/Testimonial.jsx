import React from "react";
import { assets } from "../assets/assets";

const Testimonial = () => {
  return (
    <>
      <h2>Customer</h2>
      <br />
      <h1>TESTIMONIALS</h1>
      <div className="  d-flex gap-3 p-3">
        <div
          className="shadow p-3 mb-5 rounded "
          style={{
            width: "350px",
            height: "400px",
            backgroundColor: "#bed8b2",
          }}
        >
          <h5 className="text-center">Customer</h5>

          <div className="d-flex justify-content-center">
            <img
              src={assets.cloth3}
              alt=""
              className="rounded-circle shadow"
              style={{
                width: "120px",
                height: "120px",
                objectFit: "cover",
                border: "5px solid #38502b",
              }}
            />
          </div>

          <div
            className="p-2 text-center"
            style={{
              backgroundColor: "#38502b",
              borderRadius: "10px",
              marginTop: "-60px",
            }}
          >
            <p className="pt-2" style={{ color: "white" }}>
              <br />
              <br />
              <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
              fuga consectetur facere dolor nobis perferendis atque suscipit
              molestiae praesentium, culpa cum numquam ab asperiores odio at
              eaque adipisci cumque! Impedit?
            </p>
          </div>
        </div>

        <div
          className="shadow p-3 mb-5 rounded "
          style={{
            width: "350px",
            height: "400px",
            backgroundColor: "#bed8b2",
          }}
        >
          <h5 className="text-center">Customer</h5>

          <div className="d-flex justify-content-center">
            <img
              src={assets.cloth2}
              alt=""
              className="rounded-circle shadow"
              style={{
                width: "120px",
                height: "120px",
                objectFit: "cover",
                border: "5px solid #38502b",
              }}
            />
          </div>

          <div
            className="p-2 text-center"
            style={{
              backgroundColor: "#38502b",
              borderRadius: "10px",
              marginTop: "-60px", // Adjust the gap between image and box
            }}
          >
            <p className="pt-2" style={{ color: "white" }}>
              <br />
              <br />
              <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
              fuga consectetur facere dolor nobis perferendis atque suscipit
              molestiae praesentium, culpa cum numquam ab asperiores odio at
              eaque adipisci cumque! Impedit?
            </p>
          </div>
        </div>
        <div
          className="shadow p-3 mb-5 rounded "
          style={{
            width: "350px",
            height: "400px",
            backgroundColor: "#bed8b2",
          }}
        >
          <h5 className="text-center">Customer</h5>

          <div className="d-flex justify-content-center">
            <img
              src={assets.cloth}
              alt=""
              className="rounded-circle shadow"
              style={{
                width: "120px",
                height: "120px",
                objectFit: "cover",
                border: "5px solid #38502b",
              }}
            />
          </div>

          <div
            className="p-2 text-center"
            style={{
              backgroundColor: "#38502b",
              borderRadius: "10px",
              marginTop: "-60px",
            }}
          >
            <p className="pt-2" style={{ color: "white" }}>
              <br />
              <br />
              <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
              fuga consectetur facere dolor nobis perferendis atque suscipit
              molestiae praesentium, culpa cum numquam ab asperiores odio at
              eaque adipisci cumque! Impedit?
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
