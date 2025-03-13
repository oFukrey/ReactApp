import React, { useState } from "react";

const ShopContext = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return <div>ShopContext</div>;
};

export default ShopContext;
