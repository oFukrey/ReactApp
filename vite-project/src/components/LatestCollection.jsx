import React from "react";
import { assets, imageData } from "../assets/assets";
import { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";

const LatestCollection = () => {
  const { navigate } = useContext(ShopContext);
  const latestCollection = imageData.filter((item) => item.isValid);

  const handleClick = (id) => {
    navigate(`/product/${id}`);
    console.log(id);
  };

  return (
    <>
      <h2 className="pt-2">Latest Collection</h2>
      <div className="d-flex flex-wrap justify-content-center">
        {latestCollection.map((image) => (
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
              <p className="card-text prata-regular">{image.name}</p>
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
    </>
  );
};

export default LatestCollection;
