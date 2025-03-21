import { useState } from "react";
import Navbar from "./components/AdminNavbar";
import Sidebar from "./components/Sidebar";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import AddProduct from "./pages/AddProduct";

function App() {
  return (
    <div className="">
      <Sidebar />
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/addproduct" element={<AddProduct />} />
      </Routes>
    </div>
  );
}

export default App;
