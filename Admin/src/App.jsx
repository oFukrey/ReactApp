import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Navbar from "./components/AdminNavbar";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="">
      <Sidebar />
      <Navbar />
    </div>
  );
}

export default App;
