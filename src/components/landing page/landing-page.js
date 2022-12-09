import React from "react";
import { useNavigate } from "react-router-dom";
import "./landing-page.css";

function App() {
  const navigate = useNavigate();
  function Login() {
    navigate("/login");
  }

  function GuestLogin() {
    localStorage.clear();
    navigate("/mainpage");
  }

  function Signup() {
    navigate("/signup");
  }
  return (
    <>
      <div className="header">
        {/* <p className="txt-one">Project Consistency</p> */}
        <img src= {require('./images/PCLogo.png')} alt='logo' style={{width: "70px", height: "70px"}}/>
        <ul className="nav-btns">
            <a
              href="#sec-one"
              style={{ textDecoration: "none", color: "black" }}
            >
          <li className="nav-btn" onClick={(event) => event.target.className}>
              Home
          </li>
          </a>
          <a
              href="#sec-two"
              style={{ textDecoration: "none", color: "black" }}
            >
          <li className="nav-btn">
              About Us
          </li>
          </a>
          <a
              href="#sec-three"
              style={{ textDecoration: "none", color: "black" }}
            >
          <li className="nav-btn">
              Features
          </li>
          </a>
          <a
              href="#sec-four"
              style={{ textDecoration: "none", color: "black" }}
            >
          <li className="nav-btn"> 
              Contact Us
          </li>
          </a>
        </ul>
        <ul className="login-signup">
          <li className="login-btn" onClick={Login}>
            Log in
          </li>
          <li className="login-btn" onClick={Signup}>
            Sign up
          </li>
          <li className="login-btn" onClick={GuestLogin}>
            Guest Login
          </li>
        </ul>
      </div>
      <div className="sections">
        <section className="sec-one" id="sec-one">
          <div className="nav-bar">
            <img
              src={require("./images/PCLogo.png")}
              alt=""
              className="logo-one"
            />
            <div>
              <img
                src={require("./images/Vector 2.png")}
                alt=""
                className="big-vec"
              />
              <p className="txt-two">
                Project <br />
                Consistency
              </p>
              <p className="txt-three">Get things done</p>
            </div>
            <div>
              <img
                src={require("./images/Vector 1.png")}
                alt="" 
                className="sec-one-vec-with-images"
              />
              <img
                src={require("./images/calender logo.png")}
                alt=""
                className="calender-logo"
              />
              <img
                src={require("./images/character.png")}
                alt=""
                className="character-logo"
              />
              <img
                src={require("./images/barchart.png")}
                alt=""
                className="barchart-logo"
              />
            </div>
          </div>
        </section>

        <section className="sec-two" id="sec-two">
          <div className="vec-with-txt">
            <img
              src={require("./images/Vector 4.png")}
              alt=""
              className="sec-two-vec-one"
            />
            <p className="sec-two-txt-one">About Us</p>
          </div>
          <img
            src={require("./images/Vector 7.png")}
            alt=""
            className="sec-two-vec-two"
          />
          <p className="sec-two-txt-two one">
            With the boom in social media use and fast-paced lifestyle, an
            individual's attention span has declined.
          </p>
          <p className="sec-two-txt-two two">
            This reduced attention span is impacting one's ability to work for a
            longer time with focus.
          </p>
          <p className="sec-two-txt-two three">
            We have built this app to help you achieve your goals using proven
            scientific methods.
          </p>
          <p className="sec-two-txt-two four">
            Project consistency is productivity app that will help you track
            your time and habits and give feedback of performance improvement.
          </p>
          <img
            src={require("./images/Vector 6.png")}
            alt=""
            className="sec-two-vec-three"
          />
          <img
            src={require("./images/secTwoLogo.png")}
            alt=""
            className="sec-two-logo"
          />
        </section>

        <section className="sec-three" id="sec-three">
          <img
            src={require("./images/box logo.png")}
            alt=""
            className="box-logo"
          />
          <div className="vec-with-txt">
            <img
              src={require("./images/Vector 4.png")}
              alt=""
              className="sec-three-vec-one"
            />
            <p className="sec-three-txt-one">Features</p>
          </div>

          <div className="sec-three-grp-one">
            <img
              src={require("./images/Sec three Vector 2.png")}
              alt=""
              className="sec-three-vec-two"
            />
            <p className="sec-three-txt-two">Take control of your time</p>
          </div>

          <div className="sec-three-grp-two">
            <img
            src={require("./images/Sec three Vector 3.png")} alt=""
            className="sec-three-vec-three"
          />
            <p className="sec-three-txt-three">Track your habits</p>
          </div>

          <div className="sec-three-grp-three">
            <img
            src={require("./images/Sec three Vector 4.png")} alt=""
            className="sec-three-vec-four"
          />
            <p className="sec-three-txt-four">Get Reminders</p>
          </div>

          <div className="sec-three-grp-four">
            <img
            src={require("./images/Sec three Vector 5.png")} alt=""
            className="sec-three-vec-five"
          />
            <p className="sec-three-txt-five">Avoid and manage distraction</p>
          </div>
        </section>

        <section className="sec-four" id="sec-four">
          <div className="vec-with-txt">
            <img
              src={require("./images/Vector 4.png")}
              alt=""
              className="sec-four-vec-one"
            />
            <p className="sec-four-txt-one">Contact Us</p>
          </div>

          <img
            src={require("./images/sec four vector two.png")}
            alt=""
            className="sec-four-vec-two"
          />
          {/* <div className="container">
            <form>
              <div className="container-one">
                <img
                  src={require("./images/user logo.png")}
                  alt=""
                  className="user-logo"
                />
                <input type="text" placeholder="Name" className="input" />
              </div>
              <div className="container-two">
                <img
                  src={require("./images/email.png")}
                  alt=""
                  className="email-logo"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="input"
                  required
                />
              </div>
              <div className="conatiner-three">
                <img
                  src={require("./images/message logo.png")}
                  alt=""
                  className="message-logo"
                />
                <input type="text" placeholder="Message" className="text-box" />
              </div>
              <button className="send-btn">Send</button>
            </form>
          </div> */}

          <img
            src={require("./images/sec four vector three.png")}
            alt=""
            className="sec-four-vec-three"
          />
          <img
            src={require("./images/list logo.png")}
            alt=""
            className="list-logo"
          />
          <img
            src={require("./images/PCLogo.png")}
            alt=""
            className="sec-four-logo"
          />

          <div className="contact-details">
            <p className="contact-details-txt">Socials:</p>
            <div className="contact-logos">
              <img
                src={require("./images/twitter.png")}
                alt=""
                className="twitter-logo"
              />
              <p className="contact-details-txt">Twitter: projectconsist1</p>
            </div>
            <div className="contact-logos">
              <img
                src={require("./images/email.png")}
                alt=""
                className="sec-four-email-logo"
              />
              <p className="contact-details-txt">
                Mail: projectconsistencyx@gmail.com
              </p>
            </div>

            <div className="contact-logos">
              <img
                src={require("./images/phone.png")}
                alt=""
                className="phone-logo"
              />
              <p className="contact-details-txt">Phone:</p>
            </div>

            <p className="contact-details-txt">+918320075064 / +919284037462</p>
            <img
              src={require("./images/qrcode.png")}
              alt=""
              className="qrcode"
            />
          </div>

          {/* <hr className="hr" /> */}

          <div className="footer">
            <p className="footer-txt">
              Copywrite{" "}
              <img
                src={require("./images/copyright-symbol.png")}
                alt=""
                className="copywrite-logo"
              />{" "}
              2022 projectConsistency. All Rights Reserved
            </p>
          </div>
        </section>
      </div>
    </>
  );
}

export default App;
