import React from "react";
import "./sidebar.css";
import { Link } from "react-router-dom";

function SideBar({ title, selected, changeSelect, Icon, path }) {
  return (
    <Link
      className={selected ? "sidebar selected" : "sidebar"}
      onClick={changeSelect}
      to={path}
    >
      <Icon />
      <p>{title}</p>
    </Link>
  );
}

export default SideBar;
