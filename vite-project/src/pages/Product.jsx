import React, { useContext, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { assets, imageData } from "../assets/assets";
import { ShopContext } from "../Context/ShopContext";
import { useParams } from "react-router-dom";

const Product = () => {
  const { increment, decrement, navigate, addToCart } = useContext(ShopContext);
  const [size, setSize] = useState();
  const { id } = useParams();
  const product = imageData.find((product) => product.id === parseInt(id));

  if (!product) {
    return <p>product not found</p>;
  }

  const handleSize = (size) => {
    console.log(size + " is clicked");
  };

  const handleAddToCart = (product) => {
    console.log("Aif");
    if (!size) {
      return <p>please select the size</p>;
    } else {
      addToCart(product, size, quantity);
      console.log("else");
    }
    increment();
  };

  return (
    <div className="g-2 container-fluid">
      <Row>
        <Col
          sm="2"
          key={product.id}
          className="d-flex flex-row flex-md-column align-items-center gap-2"
        >
          <img
            className="img-fluid   shadow-lg rounded my-3"
            style={{ width: "60px", height: "80px", objectFit: "fill" }}
            src={product.image}
            alt=""
          />
          <img
            className="img-fluid   shadow-lg rounded my-3"
            style={{ width: "60px", height: "80px", objectFit: "fill" }}
            src={product.image}
            alt=""
          />
          <img
            className="img-fluid   shadow-lg rounded my-3"
            style={{ width: "60px", height: "80px", objectFit: "fill" }}
            src={product.image}
            alt=""
          />
          <img
            className="img-fluid   shadow-lg rounded my-3"
            style={{ width: "60px", height: "80px", objectFit: "fill" }}
            src={product.image}
            alt=""
          />
        </Col>
        <Col sm="5" className="d-flex justify-contemt-center  my-3 mx-auto">
          <div key={product.id}>
            <img
              className="img-fluid rounded shadow-lg"
              style={{ maxWidth: "100%", height: "auto" }}
              src={product.image}
              alt=""
            />

            <div className=" d-flex gap-3 flex-wrap my-2">
              <button
                onClick={() => handleAddToCart(product)}
                className="btn btn-primary px-4 py-2 fw-bold w-100 w-md-auto"
              >
                Add to Cart
              </button>
              <button className="btn btn-outline-dark px-4 py-2 fw-bold w-100 w-md-auto">
                Add to Wishlist
              </button>
            </div>
          </div>
        </Col>
        <Col className="my-3 d-flex flex-column gap-2">
          <div className="card d-flex text-start shadow-sm p-3 ">
            <h5 className="card-title">{product.description}</h5>
            <p className="card-text fs-2">{product.price}</p>
            <p>Free Delivery</p>
          </div>
          <div className="card d-flex text-start shadow-sm p-3 ">
            <h6 className="card-title px-2 pb-2">Select Size</h6>
            <div
              className="d-flex flex flex-wrap gap-2 justify-content-center mx-3"
              // onChange={(e) => handleSize(e.target.value)}
            >
              {product.sizes.map((size) => (
                <button
                  key={size}
                  value={size}
                  onClick={(e) => handleSize(e.target.value)}
                  className="border border-dark rounded-pill p-2 text-center"
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
          <div className="card d-flex text-start shadow-sm p-3 ">
            <div className="card-header">Product Details</div>
            <br />
            <p className="blockquote-footer">{product.name}</p>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Product;
