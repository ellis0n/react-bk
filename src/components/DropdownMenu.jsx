import React from "react";

const DropdownMenu = (props) => {
  const { options } = props;
  console.log(options);
  return (
    <div className="dropdown-menu">
      {Object.entries(options).map(([key, value]) => (
        <div className="dropdown-item" key={key}>
          <a href={value}>{key}</a>
        </div>
      ))}
    </div>
  );
};

export default DropdownMenu;
