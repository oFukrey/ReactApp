import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../Context/ShopContext";

const Order = () => {
  const [cart, setCart] = useState([]);
  const [amount, setAmount] = useState(0);
  const [contactInfo, setContactInfo] = useState(null);
  const [status, setstatus] = useState({ status: "" });

  const {} = useContext(ShopContext);

  useEffect(() => {
    const saveInfo = JSON.parse(localStorage.getItem("contactInfo"));
    const orderStatus = JSON.parse(localStorage.getItem("status"));

    if (saveInfo) {
      setContactInfo(saveInfo);
    } else {
      console.log("No item found");
    }

    if (orderStatus) {
      setstatus(orderStatus);
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
    <div className="container py-5">
      <div className="row " style={{ overflow: "hidden" }}>
        <div className="col-md-6 p-4 bg-light shadow-sm rounded text-start gap-3">
          <div className="contact">
            <h3 className="my-2">Order</h3>
            {status ? (
              <p>Order Status:{status.status}</p>
            ) : (
              <p>Status Pending</p>
            )}
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
                <div className="fw-bold">SUB TOTAL</div>
              </div>
              <h5 className="card-text display-7">₹{amount}</h5>
            </li>
            <hr className="my-3 border-top opacity-100" />
            <li className=" d-flex justify-content-between align-items-start">
              <div className="ms-2 me-auto">
                <div className="fw-bold">SHIPPING</div>
              </div>
              <span className="H6">ENTER SHIPPING ADDRESS</span>
            </li>
            <hr className="my-3 border-top opacity-100" />
            <li className="d-flex justify-content-between align-items-start">
              <div className="ms-2 me-auto">
                <div className="fw-bold">TOTAL</div>
              </div>
              <h5 className="card-text display-7">₹760</h5>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Order;
