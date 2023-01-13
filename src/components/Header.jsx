import React from "react";

const Header = () => {
  return (
    <div className="wrapper">
      <div className="header-wrapper">
        <img
          className="bk-logo"
          src="https://web.archive.org/web/20080722102546im_/http://64.92.165.46/interface/newbluekaffee/bk_topleft1.gif"
          alt="bk cup"
          width="379"
          height="64"
          border="0"
        />
        <div className="online-display">
          <ul id="container">
            <li>32 Users Online</li>
            <li>0 Moderators Online</li>
            <li>52 Birthdays</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
