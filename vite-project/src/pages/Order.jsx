import React, { useEffect, useState } from "react";
import { assets } from "../assets/assets";

const Order = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const saveCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(saveCart);
    console.log(saveCart);
  }, []);

  return (
    <div className="container py-5">
      <div className="row " style={{ overflow: "hidden" }}>
        <div className="col-md-6 p-4 bg-light shadow-sm rounded text-start gap-3">
          <div className="contact">
            <h3 className="my-2">CONTACT</h3>
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="name@example.com"
              />
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckChecked"
              />
              <label className="form-check-label " htmlFor="flexCheckChecked">
                Remember me
              </label>
            </div>
          </div>
          <hr className="my-3 border-top opacity-100" />

          <div className="delivery">
            {/* Contact + Delivery Address */}
            <h3>DELIVERY ADDRESS</h3>
            <form className="row g-3 needs-validation overflow-auto" noValidate>
              <div className="col-md-4">
                <label htmlFor="validationCustom01" className="form-label">
                  First name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="validationCustom01"
                  defaultValue="Mark"
                  required
                />
                <div className="valid-feedback">Looks good!</div>
              </div>
              <div className="col-md-4">
                <label htmlFor="validationCustom02" className="form-label">
                  Last name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="validationCustom02"
                  defaultValue="Otto"
                  required
                />
                <div className="valid-feedback">Looks good!</div>
              </div>

              <div className="col-md-6">
                <label htmlFor="validationCustom03" className="form-label">
                  City
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="validationCustom03"
                  required
                />
                <div className="invalid-feedback">
                  Please provide a valid city.
                </div>
              </div>
              <div className="col-md-3">
                <label htmlFor="validationCustom04" className="form-label">
                  State
                </label>
                <select
                  className="form-select"
                  id="validationCustom04"
                  defaultValue="o"
                  required
                >
                  <option disabled value="o1">
                    Choose...
                  </option>
                  <option value="o">...</option>
                </select>
                <div className="invalid-feedback">
                  Please select a valid state.
                </div>
              </div>
              <div className="col-md-3">
                <label htmlFor="validationCustom05" className="form-label">
                  Zip
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="validationCustom05"
                  required
                />
                <div className="invalid-feedback">
                  Please provide a valid zip.
                </div>
              </div>
              <div className="col-12">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    defaultValue=""
                    id="invalidCheck"
                    required
                  />
                  <label className="form-check-label" htmlFor="invalidCheck">
                    Agree to terms and conditions
                  </label>
                  <div className="invalid-feedback">
                    You must agree before submitting.
                  </div>
                </div>
              </div>
              <div className="col-12">
                <button className="btn btn-primary" type="submit">
                  Submit form
                </button>
              </div>
            </form>
          </div>
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
              <h5 className="card-text display-7">₹720</h5>
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
