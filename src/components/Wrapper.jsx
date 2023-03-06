import React from "react";
import Header from "./Header";
import Navbar from "./Navbar";
import LoginBar from "./LoginBar";
import Body from "./Body";
import Footer from "./Footer";

const Wrapper = () => {
  return (
    <div className="App">
      <div className="main-wrapper">
        <Header />
        <Navbar />
        <LoginBar />
        <Body />
      </div>
      <Footer />
    </div>
  );
};

export default Wrapper;
