import React, { useState } from "react";
import DropdownMenu from "./DropdownMenu";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  const [showDropdown, setShowDropdown] = useState(false);

  const handleHover = () => {
    setShowDropdown(true);
  };

  const handleMouseLeave = () => {
    setShowDropdown(false);
  };

  const navLinks = [
    { name: "Calendar", link: "/calendar" },
    { name: "Kaffeines", link: "/kaffeines" },
    { name: "Help!", link: "/help" },
    { name: "Journals", link: "/journals" },
    { name: "Writings", link: "/writings" },
    { name: "Galleries", link: "/galleries" },
    { name: "Forums", link: "/forums" },
  ];

  return (
    <div className="navbar-wrapper">
      {navLinks.map((link, index) => {
        return (
          <>
            <div
              className="navLink"
              onMouseEnter={handleHover}
              onMouseLeave={handleMouseLeave}
            >
              {/* <FontAwesomeIcon
                  icon={faCaretDown}
                  color="#86aeff"
                  style={{ padding: "0px 6px" }}
                /> */}

              <a key={index} href={link.link}>
                {link.name}
              </a>
            </div>
            {/* {showDropdown && <DropdownMenu option={link.link} />} */}
          </>
        );
      })}
    </div>
  );
}

export default Navbar;
