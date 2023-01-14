import React from "react";
import Header from "./Header";
import Navbar from "./Navbar";
import LoginBar from "./LoginBar";
import Body from "./Body";
import Footer from "./Footer";

const Wrapper = () => {
  return (
    <>
      <div className="main-wrapper">
        <Header />
        <Navbar />
        <LoginBar />
        <Body />
      </div>
      <Footer />
    </>
  );
};

export default Wrapper;
