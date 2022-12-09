import React, { useEffect, useState, useContext, useCallback } from "react";
import Modal from "react-modal";
import "./todo.css";
import { ThemeContext } from "../habits-tracker/habits-tracker";
Modal.setAppElement("#root");
function App() {
  const { dayClicked } = useContext(ThemeContext);
  const [todos, setTodos] = useState({});
  let [tasksInDay, setTasksInDay] = useState([]);
  const [taskToAdd, setTaskToAdd] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalPlaceholder, setModalPlaceholder] = useState("");
  const [editText, setEditText] = useState("");
  const [editIndex, setEditIndex] = useState("");
  const day = dayClicked.toString().split(" ").splice(1, 3).join(" ");

  const fetchData = useCallback(
    async function () {
      if (localStorage.getItem("token") !== null) {
        const data = await fetch(`https://project-consistency.onrender.com/api/userdetails`, {
          method: "GET",
          headers: {
            token: localStorage.getItem("token"),
          },
        })
          .then((res) => res.json())
          .then((result) => result.todos);
        setTodos(data);
        setTasksInDay(data[day] !== undefined ? data[day] : []);
      }
    },
    [day]
  );

  async function updateTodoDB(todoDB) {
    if (localStorage.getItem("token") !== null) {
      await fetch(`https://project-consistency.onrender.com/api/updateDetails`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          token: localStorage.getItem("token"),
        },
        body: JSON.stringify({
          todos: todoDB,
        }),
      }).then((result) => console.log(result));
    }
  }

  useEffect(() => {
    fetchData();
    if (localStorage.getItem("token") === null) {
      setTasksInDay([]);
    }
  }, [dayClicked, fetchData]);

  function addTodo() {
    if (taskToAdd.length !== 0 && taskToAdd.trim().length !== 0) {
      todos[day] = [...tasksInDay, { [taskToAdd.toLowerCase()]: false }];
      setTasksInDay(todos[day]);
      updateTodoDB(todos);
      setTaskToAdd("");
    }
  }

  function deleteTask(task) {
    const updatedTaskArray = tasksInDay.filter(
      (ele) => Object.keys(ele)[0] !== Object.keys(task)[0]
    );
    setTasksInDay(updatedTaskArray);
    todos[day] = updatedTaskArray;
    updateTodoDB(todos);
  }

  function markComplete(task) {
    const updatedTaskArray = tasksInDay.map((todoObj) => {
      if (todoObj === task) {
        todoObj[Object.keys(task)[0]] = !todoObj[Object.keys(task)[0]];
      }
      return todoObj;
    });
    setTasksInDay(updatedTaskArray);
    todos[day] = updatedTaskArray;
    updateTodoDB(todos);
  }

  function editTask() {
    tasksInDay[editIndex] = { [modalPlaceholder]: Object.values(editText)[0] };
    todos[day] = tasksInDay;
    updateTodoDB(todos);
    setIsModalOpen(false);
  }
  return (
    <div className="todo-main">
      <div className="stats">
        <p className="stats-tasks">Tasks: </p>
        <p className="stats-total"> Total tasks on {day.slice(0, -5)}</p>
        <p className="stats-number">{todos[day] ? todos[day].length : 0}</p>
      </div>
      <div className="wrapper">
        <div className="todo-container">
          {Object.keys(todos).length !== 0 &&
            todos[day] !== undefined &&
            todos[day].map((ele, index) => {
              return (
                <div id="box" key={index}>
                  <span
                    id="round"
                    style={
                      Object.values(ele)[0]
                        ? { backgroundColor: "#5fa8d3" }
                        : { backgroundColor: "transparent" }
                    }
                    onClick={() => {
                      markComplete(ele);
                    }}
                  ></span>
                  <div id="task-descr">
                    <p
                      id="txt-inside-box"
                      style={
                        Object.values(ele)[0]
                          ? { textDecoration: "line-through" }
                          : { textDecoration: "none" }
                      }
                    >
                      {Object.keys(ele)[0].charAt(0).toUpperCase() +
                        Object.keys(ele)[0].slice(1)}
                    </p>
                    <i
                      className="fa-solid fa-pen"
                      onClick={() => {
                        setIsModalOpen(true);
                        setModalPlaceholder(Object.keys(ele)[0]);
                        setEditText(ele);
                        setEditIndex(index);
                      }}
                    ></i>
                    <i
                      className="fa-regular fa-trash-can"
                      aria-hidden="true"
                      onClick={() => deleteTask(ele)}
                    ></i>
                  </div>
                </div>
              );
            })}

          <div className="taskInput">
            <input
              type="text"
              placeholder="Add Task"
              onChange={(event) => {
                setTaskToAdd(event.target.value);
              }}
              value={taskToAdd}
            ></input>
            <i className="fa fa-plus" onClick={addTodo}></i>
          </div>
        </div>
      </div>
      <div className="modal">
        <Modal
          isOpen={isModalOpen}
          onRequestClose={() => setIsModalOpen(false)}
        >
          <h1>Edit Task</h1>
          <input
            type="text"
            placeholder="Edit Habit"
            value={modalPlaceholder}
            onChange={(event) => {
              setModalPlaceholder(event.target.value);
            }}
          ></input>
          <button className="save-edited-text" onClick={editTask}>
            Save
          </button>
        </Modal>
      </div>
    </div>
  );
}

export default App;
