import React from "react";

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
                {/* Convert image to svg */}
                {/* <img
                  src="https://web.archive.org/web/20071110203541im_/http://images.bluekaffee.com/sys/down.gif"
                  alt="down arrow"
                  id="down-arrow"
                /> */}
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
