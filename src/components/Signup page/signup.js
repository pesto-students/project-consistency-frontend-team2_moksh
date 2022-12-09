import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Log-in page/Log-in.css";
import { ReactComponent as ProjectLogo } from "./PCLogo.svg";
import { ReactComponent as BottomOvalShape } from "./Vector 12.svg";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  async function handleSignUp(event) {
    event.preventDefault();
    if (email === "" || email.trim().length === 0)
      return alert("Invalid Email");
    if (password.length < 8) return alert("Minimum characters should be 8");

    if (password === confirmPassword && password.length >= 8) {
      await fetch("https://project-consistency.onrender.com/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      })
        .then((response) => response.json())
        .then((result) => {
          if (result.Error) {
            alert(result.Error);
          } else {
            navigate("/");
          }
          return result;
        })
        .catch((error) => console.log("error", error));
    } else {
      alert("Incorrect Password");
    }
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  }

  return (
    <div className="main">
      <div className="Logo">
        <ProjectLogo />
      </div>
      <div className="TopOvalShape">
        <BottomOvalShape />
      </div>
      <div className="BottomOvalShape">
        <BottomOvalShape />
      </div>
      <form className="Non-google-login">
        <div>
          <i className="fa-solid fa-envelope"></i>
          <input
            id="input-email"
            type="e-mail"
            placeholder="Email"
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
            }}
            required
          ></input>
        </div>
        <div>
          <i className="fa-solid fa-lock"></i>
          <input
            id="input"
            placeholder="Password"
            type="password"
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
            required
          ></input>
        </div>
        <div>
          <i className="fa-solid fa-lock"></i>
          <input
            id="input"
            placeholder="Confirm Password"
            type="password"
            value={confirmPassword}
            onChange={(event) => {
              setConfirmPassword(event.target.value);
            }}
            required
          ></input>
        </div>
        <div>
          <i className="fa-solid fa-right-to-bracket"></i>
          <button
            id="button"
            onClick={(event) => {
              handleSignUp(event);
            }}
          >
            Sign Up
          </button>
        </div>
      </form>
      <div className="LogInfooter">
        {/* <hr></hr> */}
        <p>Copywrite 2022 ProjectConsistency. All Rights Reserved.</p>
      </div>
    </div>
  );
}

export default Signup;
