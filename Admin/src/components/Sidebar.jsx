import React from "react";
import { assets } from "../assets/assets";

const Sidebar = () => {
  return (
    <div
      className="text-white vh-100 position-fixed top-0 start-0"
      style={{ width: "250px", zIndex: 1050, backgroundColor: "#181e28" }}
    >
      <div
        className="p-3"
        style={{ backgroundColor: "rgba(24, 30, 40, 0.7)", height: "90px" }}
      >
        <img
          className=""
          style={{ width: "200px", height: "60px" }}
          src={assets.logo}
          alt=""
        />
      </div>
      <div className="mt-3 mx-3 p-3">
        <ul
          className="d-flex flex-column gap-1 p-2 m-2"
          style={{ listStyle: "none" }}
        >
          <li className="">
            <a style={{ color: "inherit", textDecoration: "none" }} href="#">
              {" "}
              <span>Home</span>
            </a>
          </li>

          <hr
            style={{
              backgroundColor: "gray",
              height: "1px",
              border: "none",
            }}
          />

          <li>
            <a style={{ color: "inherit", textDecoration: "none" }} href="#">
              <span>Dashboard</span>
            </a>
          </li>
          <hr
            style={{
              backgroundColor: "gray",
              height: "1px",
              border: "none",
            }}
          />
          <li>
            <a style={{ color: "inherit", textDecoration: "none" }} href="#">
              <span>Add Products</span>
            </a>
          </li>
          <hr
            style={{
              backgroundColor: "gray",
              height: "1px",
              width: "100%",
              border: "none",
            }}
          />
          <li>
            <a style={{ color: "inherit", textDecoration: "none" }} href="#">
              <span>List</span>
            </a>
          </li>
          <hr
            style={{
              backgroundColor: "gray",
              height: "1px",
              border: "none",
            }}
          />
          <li>
            <a style={{ color: "inherit", textDecoration: "none" }} href="#">
              <span>Order</span>
            </a>
          </li>
          <hr
            style={{
              backgroundColor: "gray",
              height: "1px",
              border: "none",
            }}
          />
          <li>
            <a style={{ color: "inherit", textDecoration: "none" }} href="#">
              <span>Customers</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
