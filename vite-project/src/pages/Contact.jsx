import React from "react";

const Contact = () => {
  return (
    <div className="d-flex flex-wrap justify-content-center">
      <div
        className="p-4 m-4 bg-secondary bg-gradient border border-primary-subtle rounded-3"
        style={{ width: "23rem" }}
      >
        <div className="mb-3 ms-auto">
          <label
            htmlFor="nameInput1"
            className="form-label d-flex justify-start"
          >
            Name
          </label>
          <input
            type="text"
            className="form-control border-success"
            id="nameInput1"
            placeholder="your name"
          />
        </div>
        <div className="mb-3">
          <label
            htmlFor="exampleFormControlInput1"
            className="form-label d-flex justify-start"
          >
            Email address
          </label>
          <input
            type="email"
            className="form-control border-success"
            id="exampleFormControlInput1"
            placeholder="name@example.com"
          />
        </div>
        <div className="mb-3">
          <label
            htmlFor="exampleFormControlTextarea1"
            className="form-label d-flex justify-start"
          >
            Message
          </label>
          <textarea
            className="form-control border-success"
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>
        </div>
        <button type="button" className="btn btn-primary">
          Send
        </button>
      </div>
    </div>
  );
};

export default Contact;
