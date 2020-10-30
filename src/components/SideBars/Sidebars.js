import React from "react";
import Sidebar from "./SideBar/SideBar";
import "./sidebars.css";
import TodayIcon from "@material-ui/icons/Today";
import DateRangeIcon from "@material-ui/icons/DateRange";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

function Sidebars() {
  return (
    <div className="sidebars">
      <Sidebar title="Today" Icon={TodayIcon} path="/today" selected />
      <Sidebar title="Tomorrow" Icon={DateRangeIcon} path="/tomorrow" />
      <Sidebar title="LogOut" Icon={AccountCircleIcon} path="/" />
    </div>
  );
}

export default Sidebars;
