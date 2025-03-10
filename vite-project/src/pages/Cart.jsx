import React, { useState } from "react";
import { assets } from "../assets/assets";

const Cart = () => {
  const [count, setCount] = useState(1);
  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };
  return (
    <div className="container text-center">
      <h2 className="text-start">YOUR SHOPPING</h2>
      <div className="row">
        <div className="col-sm-8">
          <div className=" d-flex align-items-center justify-content-center">
            <div className="col-sm-2">
              <img
                className="p-2"
                src={assets.tshirt}
                style={{ width: "120px" }}
                alt=""
              />
            </div>
            <div className="col-sm-3">
              <p className="" style={{ color: "green" }}>
                Tracksuit
              </p>
            </div>
            <div className="col-sm-2">
              <span className="border border-dark rounded-5 d-block mx-4 py-3">
                S <br />
              </span>
            </div>
            <div className="col-sm-1">
              <img
                className="m-1"
                src={assets.bin}
                alt=""
                style={{ width: "20px" }}
              />
            </div>
            <div
              className="col-sm-3 d-flex justify-content-center align-items-center gap-2"
              style={{ height: "30px" }}
            >
              <button
                className="bg-success rounded"
                onClick={() => decrement()}
                style={{ width: "28px", height: "35px" }}
              >
                <p className="">-</p>
              </button>
              <p className="items-center pt-3">{count}</p>
              <button
                className="bg-success rounded"
                onClick={() => increment()}
                style={{ width: "28px", height: "35px" }}
              >
                <p className="">+</p>
              </button>
            </div>
            <div className="col-sm-1">₹290</div>
          </div>
          <div className=" d-flex align-items-center justify-content-center">
            <div className="col-sm-2">
              <img
                className="p-2"
                src={assets.tshirt}
                style={{ width: "120px" }}
                alt=""
              />
            </div>
            <div className="col-sm-3">
              <p className="" style={{ color: "green" }}>
                Tracksuit
              </p>
            </div>
            <div className="col-sm-2">
              <span className="border border-dark rounded-5 d-block mx-4 py-3">
                S <br />
              </span>
            </div>
            <div className="col-sm-1">
              <img
                className="m-1"
                src={assets.bin}
                alt=""
                style={{ width: "20px" }}
              />
            </div>
            <div
              className="col-sm-3 d-flex justify-content-center align-items-center gap-2"
              style={{ height: "30px" }}
            >
              <button
                className="bg-success rounded"
                onClick={() => decrement()}
                style={{ width: "28px", height: "35px" }}
              >
                <p className="">-</p>
              </button>
              <p className="items-center pt-3">{count}</p>
              <button
                className="bg-success rounded"
                onClick={() => increment()}
                style={{ width: "28px", height: "35px" }}
              >
                <p className="">+</p>
              </button>
            </div>
            <div className="col-sm-1">₹290</div>
          </div>
        </div>
        <div className="col-sm-4 text-start shadow-lg p-3 mb-5 bg-body-tertiary rounded">
          <ol className="list-group my-2 ">
            <li className="d-flex justify-content-between align-items-start my-3">
              <div className="ms-2 me-auto">
                <div className="fw-bold">Subtotal</div>
              </div>
              <span className="">₹14</span>
            </li>
            <li className="d-flex justify-content-between align-items-start mt-3">
              <div className="ms-2 me-auto">
                <div className="fw-bold">Shipping Fees</div>
                <div className="d-flex">
                  <p>Delivery to&nbsp; </p>
                  <p className="" style={{ color: "green" }}>
                    Great Britain
                  </p>
                </div>
              </div>
              <span className="">₹2</span>
            </li>
            <li className="d-flex justify-content-between align-items-start my-2">
              <div className="ms-2 me-auto">
                <div className="fw-bold">Coupon/Discount</div>
                <p className="" style={{ color: "green" }}>
                  Enter a coupon code
                </p>
              </div>
            </li>
            <li className="d-flex justify-content-between align-items-start mb-3 bg-secondary-subtle rounded py-2 px-1">
              <div className="ms-2 me-auto">
                <div className="fw-bold">Total</div>
                incl. VAT
              </div>
              <span className="">₹19</span>
            </li>
            <button className="w-full btn btn-warning mt-2">
              Proceed to checkout
            </button>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Cart;
