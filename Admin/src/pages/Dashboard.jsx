import React from "react";
import { assets } from "../assets/assets";

const Dashboard = () => {
  return (
    <div
      className="container-fluid"
      style={{ marginLeft: "210px", overflow: "hidden", objectFit: "cover" }}
    >
      <div className="row">
        <div className="col-12 col-xl-12">
          <div className="row">
            <div
              className="col-lg-3 col-md-6"
              style={{ width: "200px", marginLeft: "5px" }}
            >
              <div className="card rounded-5 shadow p-3 mb-5 bg-body-tertiary rounded">
                <div className="card-body d-flex flex-column gap-4 p-2 ">
                  <div className="d-flex flex-row gap-2 float-left ">
                    <img
                      className="rounded-circle bg-secondary-subtle"
                      src={assets.customer}
                      alt=""
                      style={{
                        width: "35px",
                        objectFit: "contain",
                      }}
                    />
                    <div className="d-flex flex-column  text-end" style={{}}>
                      <h6 className="fst-normal text-secondary">Customers</h6>
                      <h5 className="card-text">698k</h5>
                    </div>
                  </div>
                  <div className="d-flex flex-row justify-content-center gap-1">
                    <h5 className="fs-6 text-success">25%Up</h5>
                    <p className="text-secondary">Last Month</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6" style={{ width: "200px" }}>
              <div className="card rounded-5 shadow p-3 mb-5 bg-body-tertiary rounded">
                <div className="card-body d-flex flex-column gap-4 p-2 ">
                  <div className="d-flex flex-row gap-2 float-left ">
                    <img
                      className="rounded-circle bg-secondary-subtle"
                      src={assets.order}
                      alt=""
                      style={{
                        width: "35px",
                        objectFit: "contain",
                      }}
                    />
                    <div
                      className="d-flex flex-column  text-end"
                      style={{ paddingLeft: "15px" }}
                    >
                      <h6 className="fst-normal text-secondary">Order</h6>
                      <h5 className="card-text">10.63k</h5>
                    </div>
                  </div>
                  <div className="d-flex flex-row justify-content-center gap-1">
                    <h5 className="fs-6 text-danger">.5%Down</h5>
                    <p className="text-secondary">Last Month</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6" style={{ width: "200px" }}>
              <div className="card rounded-5 shadow p-3 mb-5 bg-body-tertiary rounded">
                <div className="card-body d-flex flex-column gap-4 p-2 ">
                  <div className="d-flex flex-row gap-2 float-left ">
                    <img
                      className="rounded-circle bg-secondary-subtle"
                      src={assets.revenue}
                      alt=""
                      style={{
                        width: "35px",
                        objectFit: "contain",
                      }}
                    />
                    <div className="d-flex flex-column  text-end" style={{}}>
                      <h6 className="fst-normal text-secondary">Revenue</h6>
                      <h5 className="card-text">₹85420</h5>
                    </div>
                  </div>
                  <div className="d-flex flex-row justify-content-center gap-1">
                    <h5 className="fs-6 text-danger">2.1%Down</h5>
                    <p className="text-secondary">Last Month</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6" style={{ width: "200px" }}>
              <div className="card rounded-5 shadow p-3 mb-5 bg-body-tertiary rounded">
                <div className="card-body d-flex flex-column gap-4 p-2 ">
                  <div className="d-flex flex-row gap-2 float-left ">
                    <img
                      className="rounded-circle bg-secondary-subtle"
                      src={assets.expenses}
                      alt=""
                      style={{
                        width: "35px",
                        objectFit: "contain",
                      }}
                    />
                    <div className="d-flex flex-column  text-end" style={{}}>
                      <h6 className="fst-normal text-secondary">Expenses</h6>
                      <h5 className="card-text">₹56874</h5>
                    </div>
                  </div>
                  <div className="d-flex flex-row justify-content-center gap-1">
                    <h5 className="fs-6 text-success">9%Up</h5>
                    <p className="text-secondary">Last Month</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
