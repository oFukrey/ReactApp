import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { assets } from "../assets/assets";

const Product = () => {
  return (
    <Container className="g-2 ">
      <Row>
        <Col xs sm="1">
          <img
            className="img-fluid   shadow-lg rounded d-flex justify-content-start my-3"
            style={{ width: "60px", objectFit: "fill" }}
            src={assets.cloth}
            alt=""
          />
          <img
            className="img-fluid   shadow-lg rounded d-flex justify-content-start my-3"
            style={{ width: "60px" }}
            src={assets.cloth}
            alt=""
          />
          <img
            className="img-fluid   shadow-lg rounded d-flex justify-content-start my-3"
            style={{ width: "60px" }}
            src={assets.cloth}
            alt=""
          />
          <img
            className="img-fluid   shadow-lg rounded d-flex justify-content-start my-3"
            style={{ width: "60px" }}
            src={assets.cloth}
            alt=""
          />
        </Col>
        <Col>
          <img
            className="img-fluid d-flex justify-content-center m-3"
            style={{ width: "370px" }}
            src={assets.cloth}
            alt=""
          />
        </Col>
        <Col className="my-3 d-flex flex-column gap-2">
          <div className="card d-flex text-start shadow-sm p-3 ">
            <h5 className="card-title">
              fanzoo MEN T SHIRT ROUND NECK PACK OF 1
            </h5>
            <p className="card-text fs-2">₹157</p>
            <p>Free Delivery</p>
          </div>
          <div className="card d-flex text-start shadow-sm p-3 ">
            <h6 className="card-title px-2 pb-2">Select Size</h6>
            <div className="d-flex flex flex-wrap gap-3 items-center mx-3">
              <span className="border border-dark rounded-pill p-2 text-center">
                S <br />
                ₹157
              </span>
              <span className="border border-dark rounded-pill p-2  text-center">
                M <br />
                ₹175
              </span>
              <span className="border border-dark rounded-pill p-2 text-center">
                L <br />
                ₹178
              </span>
              <span className="border border-dark rounded-pill p-2 text-center">
                XL <br />
                ₹178
              </span>
              <span className="border border-dark rounded-pill p-2 text-center">
                XXL <br />
                ₹178
              </span>
            </div>
          </div>
          <div className="card d-flex text-start shadow-sm p-3 ">
            <div className="card-header">Product Details</div>
            <br />
            <p className="blockquote-footer">
              Name : fanzoo MEN T SHIRT ROUND NECK PACK OF 1 <br />
              Fabric : Polyester Sleeve Length : Short Sleeves <br /> Pattern :
              Solid <br /> Net Quantity (N) : 1 <br />
              Sizes : S (Chest Size : 36 in, Length Size: 27 in) <br /> M (Chest
              Size : 38 in, Length Size: 28 in) <br />L (Chest Size : 40 in,
              Length Size: 29 in) <br /> XL (Chest Size : 11 in, Length Size: 30
              in) <br />
              XXL (Chest Size : 44 in, Length Size: 31 in) <br /> <br />
              Country of Origin : India <br /> More Information
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Product;
