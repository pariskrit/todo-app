import React from "react";
import "./sidebar.css";
import { Link, useRouteMatch } from "react-router-dom";
import { connect } from "react-redux";
import * as actionCreators from "../../../store/actions";

function SideBar({ title, selected, Icon, to, activeOnlyWhenExact, ...rest }) {
  let match = useRouteMatch({ path: to, exact: activeOnlyWhenExact });
  return (
    <Link
      className={match ? "sidebar selected" : "sidebar"}
      onClick={title === "LogOut" ? rest.logout : null}
      to={to}
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
