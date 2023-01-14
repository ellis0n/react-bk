import React from "react";
import bkbottom from "../images/bkbottom.gif";
import bktop from "../images/bktop.gif";

const Header = () => {
  const online = [
    { name: "32 Users Online", link: "/online" },
    { name: "0 Moderators Online", link: "/moderators" },
    { name: "52 Birthdays", link: "/birthdays" },
  ];

  return (
    <div className="header-wrapper">
      <div className="header-top">
        <img
          className="bk-logo"
          src={bktop}
          alt="bk cup - logo"
          width="379"
          height="64"
          border="0"
        />
        <div className="online-display">
          <ul id="container">
            {online.map((link, index) => {
              return (
                <li key={index} id="online">
                  <a href={link.link}>{link.name}</a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="header-bottom">
        <img
          className="bk-logo"
          src={bkbottom}
          alt="bk cup - bottom"
          width="87"
          height="44"
        />
      </div>
    </div>
  );
};

export default Header;
