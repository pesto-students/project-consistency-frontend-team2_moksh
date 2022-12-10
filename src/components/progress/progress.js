import React, { useEffect, useState } from "react";
import "./progress.css";
import { useContext } from "react";
import { ThemeContext } from "../habits-tracker/habits-tracker";

export default function App() {
  const { habitsData, selectedDates, dayClicked } = useContext(ThemeContext);
  const [totalCheckedDaysInWeek, setTotalCheckedDaysInWeek] = useState(0);
  const [totalCheckedDaysInMonth, setTotalCheckedDaysInMonth] = useState(0);
  const [totalCheckedDaysInYear, setTotalCheckedDaysInYear] = useState(0);

  function daysInYear(year) {
    return (year % 4 === 0 && year % 100 > 0) || year % 400 === 0 ? 366 : 365;
  }

  useEffect(() => {
    function countCheckedDaysInWeek() {
      const allDatesInDb = Object.values(habitsData);
      let weekCounter = 0;
      allDatesInDb.map((ele) => {
        ele.map((date) =>
          Date.parse(date) >= Date.parse(selectedDates[0]) &&
          Date.parse(date) <=
            Date.parse(selectedDates[selectedDates.length - 1])
            ? (weekCounter += 1)
            : ""
        );
        return setTotalCheckedDaysInWeek(weekCounter);
      });
    }

    function countCheckedDaysInMonth() {
      const firstDayOfMonth = new Date(
        dayClicked.getFullYear(),
        dayClicked.getMonth(),
        1
      );
      const lastDayOfMonth = new Date(
        dayClicked.getFullYear(),
        dayClicked.getMonth() + 1,
        0
      );
      const allDatesInDb = Object.values(habitsData);
      let monthCounter = 0;
      allDatesInDb.map((ele) => {
        ele.map((date) =>
          Date.parse(date) >= Date.parse(firstDayOfMonth) &&
          Date.parse(date) <= Date.parse(lastDayOfMonth)
            ? (monthCounter += 1)
            : ""
        );
        return setTotalCheckedDaysInMonth(monthCounter);
      });
    }

    function countCheckedDaysInYear() {
      const firstDayOfYear = new Date(dayClicked.getFullYear(), 0, 1);
      const lastDayOfYear = new Date(dayClicked.getFullYear(), 11, 31);
      const allDatesInDb = Object.values(habitsData);
      let yearCounter = 0;
      allDatesInDb.map((ele) => {
        ele.map((date) =>
          Date.parse(date) >= Date.parse(firstDayOfYear) &&
          Date.parse(date) <= Date.parse(lastDayOfYear)
            ? (yearCounter += 1)
            : ""
        );
        return setTotalCheckedDaysInYear(yearCounter);
      });
    }
    setTotalCheckedDaysInWeek(0);
    setTotalCheckedDaysInMonth(0);
    countCheckedDaysInWeek();
    countCheckedDaysInMonth();
    countCheckedDaysInYear();
  }, [{ ...habitsData }, selectedDates, dayClicked]);

  return (
    <div className="progress-container">
      <div id="progress-layout">
        <p id="progress-circle">
          {Object.keys(habitsData).length !== 0
            ? (
                (totalCheckedDaysInWeek /
                  (Object.keys(habitsData).length * 7)) *
                100
              ).toFixed(0)
            : 0}
          %
        </p>
        <h1>Weekly</h1>
      </div>
      <div id="progress-layout">
        <p id="progress-circle">
          {Object.keys(habitsData).length !== 0
            ? (
                (totalCheckedDaysInMonth /
                  (Object.keys(habitsData).length *
                    new Date(
                      dayClicked.getFullYear(),
                      dayClicked.getMonth() + 1,
                      0
                    ).getDate())) *
                100
              ).toFixed(0)
            : 0}
          %
        </p>
        <h1>Monthly</h1>
      </div>
      <div id="progress-layout">
        <p id="progress-circle">
          {Object.keys(habitsData).length !== 0
            ? (
                (totalCheckedDaysInYear /
                  (Object.keys(habitsData).length *
                    daysInYear(dayClicked.toString().split(" ")[3]))) *
                100
              ).toFixed(0)
            : 0}
          %
        </p>
        <h1>Yearly</h1>
      </div>
    </div>
  );
}
