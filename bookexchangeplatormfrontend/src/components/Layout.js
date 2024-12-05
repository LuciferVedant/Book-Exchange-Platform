// src/components/Layout.js
import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar"; // Import Navbar

const Layout = () => {
  return (
    <>
      <Navbar /> {/* Navbar will always be present */}
      <main className="container mt-4">
        <Outlet /> {/* This will render the child components of the route */}
      </main>
    </>
  );
};

export default Layout;
