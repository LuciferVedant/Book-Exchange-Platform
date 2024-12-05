import React from "react";
import { useState, useEffect } from "react";
import BookList from "./BookList.js";
const Home = () => {
  return (
    <div className="HomeContainer">
      <h1 className="text-center">Book Exchange Platform</h1>
      <BookList />
    </div>
  );
};

export default Home;
