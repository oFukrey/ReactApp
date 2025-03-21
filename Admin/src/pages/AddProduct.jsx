import React, { useEffect, useState } from "react";
import { assets, imageData } from "../assets/assets";

const AddProduct = () => {
  const [product, setProduct] = useState({
    name: "",
    description: "",
    category: "",
    subcategory: "",
    quantity: "",
  });

  const handleSubmit = () => {
    localStorage.setItem("product", JSON.stringify(product));
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProduct({
      ...product,
      [name]: value,
    });
  };

  useEffect(() => {
    const product = localStorage.getItem("product");
    console.log(product);
  });
  return (
    <div
      className="d-flex flex-wrap justify-content-center my-3"
      style={{ marginLeft: "230px" }}
    >
      <form onSubmit={handleSubmit}>
        <div
          className="col-md-3 d-flex"
          style={{ width: "60px", height: "auto" }}
        >
          <img
            src={assets.cloth}
            className="img-fluid rounded"
            style={{ objectFit: "fill" }}
            alt="..."
          />
        </div>
        <br />
        <div className="">
          <input
            type="text"
            placeholder="name"
            onChange={handleInputChange}
            name="name"
            value={product.name}
          />
          <br />
          <br />
          <input
            type="text"
            placeholder="description"
            onChange={handleInputChange}
            name="description"
            value={product.description}
          />
          <br />
          <br />
          <input
            type="text"
            placeholder="category"
            onChange={handleInputChange}
            name="category"
            value={product.category}
          />
          <br />
          <br />
          <input
            type="text"
            placeholder="sub-category"
            onChange={handleInputChange}
            name="subcategory"
            value={product.subcategory}
          />
          <br />
          <br />
          <input
            type="text"
            placeholder="quantity"
            onChange={handleInputChange}
            name="quantity"
            value={product.quantity}
          />
        </div>
        <br />
        <div className="d-flex gap-2">
          <button className="bg-primary rounded h-25">M</button>
          <button className="bg-primary rounded h-25">L</button>
        </div>
        <br />
        <button type="submit" className="bg-success my-2">
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
