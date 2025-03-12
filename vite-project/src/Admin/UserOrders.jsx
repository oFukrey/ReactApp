import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../Context/ShopContext";

const UserOrders = () => {
  const [contactInfo, setContactInfo] = useState(null);
  const [cart, setCart] = useState([]);
  const [amount, setAmount] = useState(0);
  const [status, setstatus] = useState({ status: "" });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setstatus((prev) => ({
      ...prev,
      [name]: value,
    }));
    localStorage.setItem("status", JSON.stringify(status));
    console.log(status);
  };

  useEffect(() => {
    const saveInfo = JSON.parse(localStorage.getItem("contactInfo"));
    if (saveInfo) {
      setContactInfo(saveInfo);
    } else {
      console.log("No item found");
    }
  }, []);

  useEffect(() => {
    const saveCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(saveCart);
  }, []);

  useEffect(() => {
    const amount = localStorage.getItem("totalAmount");
    if (amount) {
      setAmount(amount);
    }
  });

  return (
    <div className="container d-flex">
      <div className="col-md-6 p-4 bg-light shadow-sm rounded text-start gap-3">
        <div className="contact">
          <h3 className="my-2">Order</h3>
        </div>
        <hr className="my-3 border-top opacity-100" />
        {contactInfo ? (
          <div>
            <p>Email:{contactInfo.email}</p>
            <p>First Name:{contactInfo.firstName}</p>
            <p>Last Name:{contactInfo.lastName}</p>
            <p>Address:{contactInfo.address}</p>
            <p>Zip:{contactInfo.zip}</p>
          </div>
        ) : (
          <p>NO order found</p>
        )}

        <select
          onChange={handleInputChange}
          className="form-select"
          name="status"
          value={status.status}
          id=""
        >
          <option value="">Open this select menu</option>
          <option value="coming">Coming</option>
          <option value="delivered">Delivered</option>
        </select>
      </div>
      <div className="col-md-6 p-4 bg-white shadow-sm rounded">
        {/* Order Details + Payment */}

        <h3 className="text-start">DETAIL PRODUCT</h3>
        {cart.map((item) => (
          <div
            className="card mb-2 p-2"
            style={{ maxWidth: "540px", maxHeight: "180px" }}
            key={item.id}
          >
            <div className="row g-0">
              <div
                className="col-md-3 d-flex align-items-center"
                style={{ width: "60px", height: "auto" }}
              >
                <img
                  src={item.image}
                  className="img-fluid rounded-start"
                  style={{ objectFit: "fill" }}
                  alt="..."
                />
              </div>
              <div className="col-md-9">
                <div className="card-body d-flex justify-content-between align-items-center">
                  <div>
                    <h5 className="card-title">OFukre</h5>
                    <p className="card-text">{item.name}</p>
                  </div>
                  <h5 className="card-text display-7">
                    ₹{item.price * item.quantity}
                  </h5>
                </div>
              </div>
            </div>
          </div>
        ))}

        <ol className="list-group list-group-numbered">
          <li className=" d-flex justify-content-between align-items-start">
            <div className="ms-2 me-auto">
              <div className="fw-bold">TOTAL</div>
            </div>
            <h5 className="card-text display-7">₹{amount}</h5>
          </li>
          <hr className="my-3 border-top opacity-100" />
          <li className=" d-flex justify-content-between align-items-start">
            <div className="ms-2 me-auto">
              <div className="fw-bold">SHIPPING</div>
            </div>
            <span className="H6">
              {contactInfo ? (
                <div>
                  <p>{contactInfo.address}</p>
                </div>
              ) : (
                <p>Enter shipping Address</p>
              )}
            </span>
          </li>
          <hr className="my-3 border-top opacity-100" />
        </ol>
      </div>
    </div>
  );
};

export default UserOrders;
