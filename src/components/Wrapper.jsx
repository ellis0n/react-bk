import React from "react";
import Header from "./Header";
import Navbar from "./Navbar";
import LoginBar from "./LoginBar";
import Body from "./Body";

const Wrapper = () => {
  return (
    <div className="main-wrapper">
      <Header />
      <Navbar />
      <LoginBar />
      <Body />
    </div>
  );
};

export default Wrapper;
