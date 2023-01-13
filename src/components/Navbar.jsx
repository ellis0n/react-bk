import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
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
    <div className="wrapper">
      <ul className="ul-nav">
        {navLinks.map((link, index) => {
          return (
            <div className="navLink-wrapper">
              <li key={index} id="navLink">
                <FontAwesomeIcon
                  icon={faCaretDown}
                  color="#86aeff"
                  style={{ padding: "0px 6 px" }}
                />
                <a id="navBar-text" href={link.link}>
                  {link.name}
                </a>
              </li>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default Navbar;
