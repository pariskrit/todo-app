import React from "react";
import "./sidebar.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import * as actionCreators from "../../../store/actions";

function SideBar({ title, selected, changeSelect, Icon, path, ...rest }) {
  return (
    <Link
      className={selected ? "sidebar selected" : "sidebar"}
      onClick={title === "LogOut" ? rest.logout : null}
      to={path}
    >
      <Icon />
      <p>{title}</p>
    </Link>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(actionCreators.logoutAsync()),
  };
};

export default connect(null, mapDispatchToProps)(SideBar);
