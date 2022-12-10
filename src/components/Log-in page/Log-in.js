import { useState } from "react";
import "./Log-in.css";
import { ReactComponent as ProjectLogo } from "./PCLogo.svg";
import { ReactComponent as BottomOvalShape } from "./Vector 12.svg";
import { useNavigate } from "react-router-dom";


function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  async function handleLogIn(event) {
    event.preventDefault();
    await fetch("https://project-consistency.onrender.com/api/login", {
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
        result.error ? alert(result.error) : navigate("/mainpage");
        localStorage.setItem("token", result.accessToken);
        return result;
      })
      .catch((error) => console.log("error", error));
    setEmail("");
    setPassword("");
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
            type="email"
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
          <i className="fa-solid fa-right-to-bracket"></i>
          <button
            id="button"
            onClick={(event) => {
              handleLogIn(event);
            }}
          >
            Log in
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

export default Login;
