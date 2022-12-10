import React, { useEffect, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./habits-tracker.css";
import Progress from "../progress/progress";
import Todo from "../Todo/todo";
import Player from "../music-player/App";
export const ThemeContext = React.createContext();
function App() {
  const [value, setValue] = useState(new Date());
  const [dayClicked, setDayClicked] = useState(new Date());
  const [selectedDates, setSelectedDates] = useState([]);
  const [habitsData, setHabitsData] = useState({});
  const [forceRender, setForceRender] = useState(false);
  const [habitToAdd, setHabitToAdd] = useState("");

  async function fetchData() {
    if (localStorage.getItem("token") !== null) {
      const data = await fetch(`https://project-consistency.onrender.com/api/userdetails`, {
        method: "GET",
        headers: {
          token: localStorage.getItem("token"),
        },
      })
        .then((res) => res.json())
        .then((result) => result.habits);
      setHabitsData(data);
    }
  }

  async function updateHabitDB(habitDB) {
    await fetch(`https://project-consistency.onrender.com/api/updateDetails`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        token: localStorage.getItem("token"),
      },
      body: JSON.stringify({
        habits: habitDB,
      }),
    })
      .then((res) => res.json())
      .then((result) => result);
  }

  useEffect(() => {
    getDatesInRange(new Date());
    selectWeek(new Date());
    fetchData();
  }, []);

  function selectWeek(dateClicked) {
    let firstDayOfWeek = new Date(
      dateClicked.setDate(dateClicked.getDate() - dateClicked.getDay())
    );
    let lastDayOfWeek = new Date(
      dateClicked.setDate(dateClicked.getDate() - dateClicked.getDay() + 6)
    );
    setValue([firstDayOfWeek, lastDayOfWeek]);
  }

  function getDatesInRange(dateClicked) {
    let day = new Date(
      dateClicked.setDate(dateClicked.getDate() - dateClicked.getDay())
    );
    let lastDay = new Date(
      dateClicked.setDate(dateClicked.getDate() - dateClicked.getDay() + 6)
    );
    let datesInRange = [];
    while (day <= lastDay) {
      let dateToAdd = day.toString().split(" ").splice(0, 4).join(" ");
      datesInRange.push(dateToAdd);
      day.setDate(day.getDate() + 1);
    }
    setSelectedDates(datesInRange);
  }

  function updateHabitsData(event, habit, date) {
    let habitArray = habitsData[habit];
    if (event.target.checked === false) {
      habitArray = habitArray.filter((ele) => {
        return ele !== date;
      });
      habitsData[habit] = habitArray;
      setHabitsData(habitsData);
      if (localStorage.getItem("token") !== null) {
        updateHabitDB(habitsData);
      }
      setForceRender(!forceRender);
    } else if (event.target.checked === true) {
      habitArray.push(date);
      habitsData[habit] = habitArray;
      setHabitsData(habitsData);
      if (localStorage.getItem("token") !== null) {
        updateHabitDB(habitsData);
      }
      setForceRender(!forceRender);
    }
  }

  function addHabit() {
    if (habitToAdd.length !== 0 && habitToAdd.trim().length !== 0) {
      habitsData[habitToAdd.toLowerCase()] = [];
      setHabitsData(habitsData);
      updateHabitDB(habitsData);
      setHabitToAdd("");
    }
  }

  function deleteHabit(habit) {
    delete habitsData[habit];
    updateHabitDB(habitsData);
    setHabitsData(habitsData);
    setForceRender(!forceRender);
  }

  return (
    <div className="habits-tracker-container">
      <div className="todo-container-in-tracker" id="todo-container-in-tracker">
        <ThemeContext.Provider
          value={{ selectedDates, habitsData, dayClicked }}
        >
          <Todo />
        </ThemeContext.Provider>
        <Player />
      </div>
      <div className="mainpage-page3" id="habit-tracker-direct">
        <div className="mainpage-page3-headings">
          <h1 className="habit-tracker-txt">
            Habit Tracker
          </h1>
        </div>
        <div className="progress-calender-container">
          <div className="progress-container-mainpage">
            <h1>Your Performance</h1>
            <ThemeContext.Provider
              value={{ selectedDates, habitsData, dayClicked }}
            >
              <Progress />
            </ThemeContext.Provider>
          </div>
          <div className="calender-container">
            <Calendar
              onChange={(dateClicked) => {
                setSelectedDates([]);
                setValue(dateClicked);
                selectWeek(dateClicked);
                getDatesInRange(dateClicked);
              }}
              onClickDay={(day) => {
                setDayClicked(day);
              }}
              value={value}
              calendarType="US"
            />
          </div>
        </div>
        <div className="habits-tracker">
          {Object.keys(habitsData).length === 0 ? (
            <table>
              <tbody>
                <tr>
                  <td className="habitInput">
                    <input
                      type="text"
                      placeholder="Add habit"
                      onChange={(event) => setHabitToAdd(event.target.value)}
                      value={habitToAdd}
                    ></input>
                    <i
                      className="fa fa-plus"
                      aria-hidden="true"
                      onClick={addHabit}
                    ></i>
                  </td>
                </tr>
              </tbody>
            </table>
          ) : (
            <table>
              <tbody>
                <tr>
                  <th>Habits</th>
                  {selectedDates.map((ele, index) => (
                    <th id="days" key={index}>
                      {ele.charAt(0)}
                    </th>
                  ))}
                </tr>
                {Object.keys(habitsData).map((habit) => {
                  return (
                    <tr key={habit}>
                      <td key={habit}>
                        <div id="habit">
                          <p>
                            {habit.charAt(0).toUpperCase() + habit.slice(1)}
                          </p>
                          <i
                            className="fa-regular fa-trash-can"
                            aria-hidden="true"
                            onClick={() => deleteHabit(habit)}
                          ></i>
                        </div>
                      </td>
                      {selectedDates.map((date) => (
                        <td id="checkbox" key={date}>
                          <input
                            type="checkbox"
                            checked={
                              habitsData[habit].includes(date) ? true : false
                            }
                            onChange={(event) => {
                              updateHabitsData(event, habit, date);
                            }}
                          ></input>
                        </td>
                      ))}
                    </tr>
                  );
                })}
                <tr>
                  <td className="habitInput">
                    <input
                      type="text"
                      placeholder="Add another habit"
                      onChange={(event) => setHabitToAdd(event.target.value)}
                      value={habitToAdd}
                    ></input>
                    <i
                      className="fa fa-plus"
                      aria-hidden="true"
                      onClick={addHabit}
                    ></i>
                  </td>
                </tr>
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
