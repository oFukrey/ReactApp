import React, { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const [theme, setTheme] = useState("light");
  const [count, setCount] = useState(0);
  const [cart, setCart] = useState([]);

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

  // const addToCart = (product, size, quantity) => {
  //   setCart((prevCart) => [...prevCart, { ...product, size, quantity }]);
  //   console.log(size);
  // };
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
  };

  return (
    <ShopContext.Provider value={values}>{props.children}</ShopContext.Provider>
  );
};

export default ShopContextProvider;
