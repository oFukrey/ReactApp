import React, { useContext, useEffect } from "react";
import { assets } from "../assets/assets";
import { imageData } from "../assets/assets";
import { ShopContext } from "../Context/ShopContext";

const Collection = () => {
  const { navigate } = useContext(ShopContext);

  const handleClick = (id) => {
    navigate(`/product/${id}`);
    console.log(id);
  };

  return (
    <div className="d-flex flex-wrap justify-content-center my-3">
      {imageData.map((image) => (
        <div
          onClick={() => handleClick(image.id)}
          key={image.id}
          className="card p-3 m-2 shadow-sm"
          style={{ width: "13rem" }}
        >
          <img
            src={image.image}
            alt=""
            className="img-fluid w-100"
            style={{ height: "300px", objectFit: "fill" }}
          />
          <div className="card-body">
            <p className="card-text prata-regular">{image.description}</p>
            <div className="d-flex justify-content-between align-items-center ">
              <p className="price-regular me-auto pt-3">₹{image.price}</p>
              <img
                className="pb-1"
                src={assets.add_to_favorites}
                width="23"
                alt=""
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Collection;
