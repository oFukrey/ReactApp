import React from "react";
import { assets } from "../assets/assets";

const Login = () => {
  return (
    <div className="container d-flex justify-content-center align-items-center">
      {/* <div className="row shadow-lg rounded-4 overflow-hidden"> */}
      <div className="col-md-6 p-4">
        <form className="d-flex flex-column gap-4">
          <h2 className="text-start fw-bold">Login</h2>
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
              placeholder="Enter your password"
            />
          </div>
          <div className="d-flex justify-content-between">
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="rememberMe"
              />
              <label className="form-check-label" htmlFor="rememberMe">
                Remember me
              </label>
            </div>
            <a href="#" className="text-decoration-none">
              Forgot password?
            </a>
          </div>

          <button className="btn btn-primary w-100">Login</button>

          <p className="text-center">
            Don't have an account?{" "}
            <a href="/signup" className="text-decoration-none">
              Sign up
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

export default Login;
