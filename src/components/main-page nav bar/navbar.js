import React from 'react';
import "../landing page/landing-page.css";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  async function Logout() {
    // event.preventDefault() 
     await fetch("https://project-consistency.onrender.com/api/logout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    })
    localStorage.clear();
    navigate("/");
  }

  return (
    <>
     <div className="header">
        {/* <p className="txt-one">Project Consistency</p> */}
        <img src= {require('./images/PCLogo.png')} alt='logo' style={{width: "70px", height: "70px"}}/>
        <ul className="nav-btns">
            <a
              href="#pomodoro-direct"
              style={{ textDecoration: "none", color: "black" }}
            >  
          <li className="nav-btn" onClick={(event) => event.target.className}>
              Pomodoro
          </li>
          </a>
          <li className="nav-btn">
            <a
              href="#todo-container-in-tracker"
              style={{ textDecoration: "none", color: "black" }}
            >
              To do
            </a>
          </li>
          <li className="nav-btn">
            <a
              href="#habit-tracker-direct"
              style={{ textDecoration: "none", color: "black" }}
            >
              Habit tracker
            </a>
          </li>
          {/* <li className="nav-btn">
            <a
              href="#sec-four"
              style={{ textDecoration: "none", color: "black" }}
            >
              Contact Us
            </a>
          </li> */}
        </ul>
        <ul className="login-signup">
          <li className="login-btn" onClick={Logout}>
            Log out
          </li>
        </ul>
      </div>
    </>
  )
}



export default Navbar;
