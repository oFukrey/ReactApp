import React from "react";

const Contact = () => {
  return (
    <div className="p-4 m-4" style={{ width: "30rem" }}>
      <div class="mb-3">
        <label for="nameInput1" class="form-label">
          Name
        </label>
        <input
          type="text"
          class="form-control"
          id="nameInput1"
          placeholder="your name"
        />
      </div>
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">
          Email address
        </label>
        <input
          type="email"
          class="form-control"
          id="exampleFormControlInput1"
          placeholder="name@example.com"
        />
      </div>
      <div class="mb-3">
        <label for="exampleFormControlTextarea1" class="form-label">
          Example textarea
        </label>
        <textarea
          class="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
        ></textarea>
      </div>
    </div>
  );
};

export default Contact;
