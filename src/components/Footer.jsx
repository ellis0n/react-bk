import React from "react";

const Footer = () => {
  const footerLinks = [
    { name: "help", link: "/help" },
    { name: "rules", link: "/rules" },
    { name: "contact", link: "/contact" },
    { name: "parents", link: "/parents" },
    { name: "privacy", link: "/privacy" },
    { name: "report abuse", link: "/report-abuse" },
  ];
  return (
    <div>
      <div>
        Blue Kaffee is a not for profit organization located in Newfoundland,
        Canada
      </div>
      {footerLinks.map((link, index) => {
        return (
          <div key={index}>
            <a href={link.link}>{link.name}</a>
            {index < footerLinks.length - 1 && <span>|</span>}
          </div>
        );
      })}
    </div>
  );
};

export default Footer;
