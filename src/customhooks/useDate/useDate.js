import { useState } from "react";

const useDate = () => {
  const [reqDate, setReqDate] = useState({});
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const day = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const setDate = (newDate, checking) => {
    if (checking !== null) {
      setReqDate({
        day: day[newDate.getDay() + 1],
        date: newDate.getDate() + 1,
        month: months[newDate.getMonth()],
      });
    } else {
      setReqDate({
        day: day[newDate.getDay()],
        date: newDate.getDate(),
        month: months[newDate.getMonth()],
      });
    }
  };

  return [reqDate, setDate];
};

export default useDate;
