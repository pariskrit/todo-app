import React from "react";
import Sidebar from "./SideBar/SideBar";
import "./sidebars.css";
import TodayIcon from "@material-ui/icons/Today";
import DateRangeIcon from "@material-ui/icons/DateRange";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

function Sidebars() {
  return (
    <div className="sidebars">
      <Sidebar title="Today" Icon={TodayIcon} to="/today/12" />
      <Sidebar title="Tomorrow" Icon={DateRangeIcon} to="/tomorrow/21" />
      <Sidebar
        title="LogOut"
        Icon={AccountCircleIcon}
        to="/"
        activeOnlyWhenExact={true}
      />
    </div>
  );
}

export default Sidebars;
