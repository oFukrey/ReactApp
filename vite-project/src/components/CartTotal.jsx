import React from "react";
import { Link } from "react-router-dom";

const CartTotal = () => {
  return (
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
      <Link to="/order" className="btn btn-warning">
        Go to Checkout
      </Link>
    </ol>
  );
};

export default CartTotal;
