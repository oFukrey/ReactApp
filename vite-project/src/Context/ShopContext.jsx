import React, { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const [theme, setTheme] = useState("light");
  const [count, setCount] = useState(0);
  const [cart, setCart] = useState([]);
  const shippingFee = 10;

  const navigate = useNavigate();

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const values = {
    toggleTheme,
    theme,
    increment,
    decrement,
    count,
    navigate,
    shippingFee,
    // getCartAmount,
    // sendTotalAmount,
  };

  return (
    <ShopContext.Provider value={values}>{props.children}</ShopContext.Provider>
  );
};

export default ShopContextProvider;
