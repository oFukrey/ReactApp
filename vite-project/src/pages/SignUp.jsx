import React from "react";
import { assets } from "../assets/assets";

const SignUp = () => {
  return (
    <div className="container d-flex justify-content-center align-items-center">
      {/* <div className="row shadow-lg rounded-4 overflow-hidden"> */}
      <div className="col-md-6 p-4">
        <form className="d-flex flex-column gap-4">
          <h2 className="text-start fw-bold">Sign Up</h2>
          <div className="text-start">
            <label className="form-label fw-semibold" htmlFor="">
              Name
            </label>
            <input
              className="form-control"
              type="email"
              placeholder="Enter your name"
            />
          </div>
          <div className="text-start">
            <label className="form-label fw-semibold" htmlFor="">
              Email
            </label>
            <input
              className="form-control"
              type="email"
              placeholder="Enter your email"
            />
          </div>
          <div className="text-start">
            <label className="form-label fw-semibold" htmlFor="">
              Password
            </label>
            <input
              className="form-control"
              type="password"
              placeholder="password"
            />
          </div>
          <div className="d-flex align-items-center gap-2">
            <input
              type="checkbox"
              className="form-check-input"
              id="rememberMe"
            />
            <label className="form-check-label" htmlFor="rememberMe">
              I agree to the{" "}
              <span className="text-primary">Terms & Conditions</span>
            </label>
          </div>

          <button className="btn btn-primary w-100">Sign up</button>

          <p className="text-center">
            Already have an account?{" "}
            <a href="login" className="text-decoration-none">
              Log in
            </a>
          </p>
        </form>
      </div>
      <div className="col-md-6 d-none d-md-block">
        <img
          src={assets.login}
          style={{ height: "600px", overflow: "visible" }}
          className="img-fluid w-100 object-fit-cover"
        />
      </div>
      {/* </div> */}
    </div>
  );
};

export default SignUp;
