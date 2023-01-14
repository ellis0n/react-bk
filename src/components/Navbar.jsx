import React, { useState } from "react";
import DropdownMenu from "./DropdownMenu";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  const [showDropdown, setShowDropdown] = useState(null);

  const handleHover = (link) => {
    setShowDropdown(link.link);
  };

  const handleMouseLeave = () => {
    setShowDropdown(null);
  };

  const navLinks = [
    {
      name: "Calendar",
      link: "/calendar",
      links: {
        Calendar: "/calendar",
        "Control Panel": "/controlpanel",
        "Edit my Notepad": "/editnotepad",
        "Check my Bookmarks": "/bookmarks",
        "Change my BK Options": "/bkoptions",
        "Change my Profile": "/profile",
        "Change my Password": "/changepassword",
        "Change my Username": "/changeusername",
        'Switch to "Away Mode"': "/awaymode",
        "Site Statistics": "/sitestats",
      },
    },
    {
      name: "Kaffeines",
      link: "/kaffeines",
      links: {
        Newest: "/members",
        "Users Online": "/usersonline",
        "Friends Online": "/friendsonline",
        Moderators: "/moderators",
        "User Search": "/usersearch",
      },
    },
    {
      name: "Help!",
      link: "/help",
      links: {},
    },
    {
      name: "Messages",
      link: "/messages",
      links: {
        Inbox: "/inbox",
        Outbox: "/outbox",
        "Recycle Bin": "/recyclebin",
        Compose: "/compose",
        "Message Archive": "/messagearchive",
      },
    },
    {
      name: "Journals",
      link: "/journals",
      links: {
        "Latest Journals": "/latestjournals",
        "Friends Journals": "/friendsjournals",
        "Your Journals": "/yourjournals",
        "Random Journal": "/randomjournal",
        "Submit Journal": "/submitjournal",
        "Your Stats": "/yourstats",
      },
    },
    {
      name: "Writings",
      link: "/writings",
      links: {
        "Latest Writings": "/latestwritings",
        "Friends Writings": "/friendswritings",
        "Your Writings": "/yourwritings",
        "Random Writing": "/randomwriting",
        "Submit Writing": "/submitwriting",
      },
    },
    {
      name: "Galleries",
      link: "/galleries",
      links: {
        "Latest Galleries": "/latestgalleries",
        "Friends Galleries": "/friendsgalleries",
        "Your Galleries": "/yourgalleries",
        "Random Gallery": "/randomgallery",
        "Random Image": "/randomimage",
        "Create Gallery": "/creategallery",
      },
    },
    {
      name: "Forums",
      link: "/forums",
      links: {
        "Forums Index": "/forumsindex",
        "Your Topics": "/yourtopics",
        "Your Posts": "/yourposts",
        "Your Stats": "/yourstats",
      },
    },
  ];
  console.log(showDropdown);

  return (
    <div className="navbar-wrapper">
      {navLinks.map((link, index) => {
        return (
          <div
            className="navLink"
            onMouseEnter={() => handleHover(link)}
            onMouseLeave={handleMouseLeave}
            key={index}
          >
            <a href={link.link}>{link.name}</a>
            {showDropdown === link.link && (
              <DropdownMenu options={link.links} />
            )}
          </div>
        );
      })}
    </div>
  );
}

export default Navbar;
