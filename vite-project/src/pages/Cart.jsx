import React, { useEffect, useState } from "react";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";

const Cart = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(savedCart);
  }, []);

  const removeProduct = (id) => {
    const updatedCart = cart.filter((product) => product.id !== parseInt(id));
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const increment = (id) => {
    setCart((prevCart) => {
      const updatedCart = prevCart.map((item) =>
        item.id === parseInt(id)
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      return updatedCart;
    });
  };

  const decrement = (id) => {
    setCart((prevCart) => {
      const updatedCart = prevCart.map((item) =>
        item.id === parseInt(id)
          ? { ...item, quantity: item.quantity - 1 }
          : item
      );
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      return updatedCart;
    });
  };

  const getCartAmount = () => {
    let totalAmount = 0;
    cart.forEach((item) => {
      totalAmount += item.price * item.quantity;
    });
    return totalAmount;
  };

  return (
    <div className="container text-center">
      <h2 className="text-start">YOUR SHOPPING</h2>
      <div className="row">
        <div className="col-sm-8">
          {cart.map((item) => (
            <div className="d-flex align-items-center justify-content-center" key={item.id}>
              <div className="col-sm-2">
                <img className="p-2" src={item.image} style={{ width: "100px" }} alt="" />
              </div>
              <div className="col-sm-3">
                <p className="" style={{ color: "green" }}>
                  {item.name}
                </p>
              </div>
              <div className="col-sm-2">
                <span className="border border-dark rounded-5 d-block mx-4 py-3">
                  {item.size} <br />
                </span>
              </div>
              <div className="col-sm-1">
                <button onClick={() => removeProduct(item.id)}>
                  <img
                    className="m-1"
                    src={assets.bin}
                    alt=""
                    style={{ width: "20px" }}
                  />
                </button>
              </div>
              <div className="col-sm-3 d-flex justify-content-center align-items-center gap-2" style={{ height: "30px" }}>
                <button className="bg-success rounded" onClick={() => decrement(item.id)} style={{ width: "28px", height: "35px" }}>
                  <p className="">-</p>
                </button>
                <p className="items-center pt-3">{item.quantity}</p>
                <button className="bg-success rounded" onClick={() => increment(item.id)} style={{ width: "28px", height: "35px" }}>
                  <p className="">+</p>
                </button>
              </div>
              <div className="col-sm-1">₹{item.price * item.quantity} </div>
            </div>
          ))}
        </div>
        <div className="col-sm-4 text-start shadow-lg p-3 mb-5 bg-body-tertiary rounded">
          <ol className="list-group my-2 ">
            <li className="d-flex justify-content-between align-items-start my-3">
              <div className="ms-2 me-auto">
                <div className="fw-bold">Subtotal</div>
              </div>
              <span>₹{getCartAmount()}</span>
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
              <span>₹2</span>
            </li>
            <li className="d-flex justify-content-between align-items-start my-2">
              <div className="ms-2 me-auto">
                <div className="fw-bold">Coupon/Discount</div>
                <p style={{ color: "green" }}>Enter a coupon code</p>
              </div>
            </li>
            <li className="d-flex justify-content-between align-items-start mb-3 bg-secondary-subtle rounded py-2 px-1">
              <div className="ms-2 me-auto">
                <div className="fw-bold">Total</div>
                incl. VAT
              </div>
              <span>₹{getCartAmount() + 10}</span> {/* Adding shipping fees */}
            </li>
            <Link to="/order" className="btn btn-warning">
              Go to Checkout
            </Link>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Cart;
