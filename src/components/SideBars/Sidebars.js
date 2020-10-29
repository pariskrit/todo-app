import React from "react";
import Sidebar from "./SideBar/SideBar";
import "./sidebars.css";
import TodayIcon from "@material-ui/icons/Today";
import DateRangeIcon from "@material-ui/icons/DateRange";

function Sidebars() {
  return (
    <div className="sidebars">
      <Sidebar title="Today" Icon={TodayIcon} path="/today" selected />
      <Sidebar title="Tomorrow" Icon={DateRangeIcon} path="/tomorrow" />
    </div>
  );
}

export default Sidebars;
