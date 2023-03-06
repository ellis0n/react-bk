import React from "react";
import Registration from "./Registration";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const Body = () => {
  return (
    <div>
      {/* <Registration /> */}
      {/* <Calendar /> */}
      <div style={{ textAlign: "left", paddingBottom: "273px" }}>
        <p style={{ paddingLeft: "2px" }}>You have successfully logged out.</p>
      </div>
    </div>
  );
};

export default Body;
