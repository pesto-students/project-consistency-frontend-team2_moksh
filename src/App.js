import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Log-in page/Log-in";
import Tracker from "./components/habits-tracker/habits-tracker";
import LandingPage from "./components/landing page/landing-page";
import Signup from "./components/Signup page/signup";
import Pomodoro from "./components/pomodoro/pomodoro";
import StateProvider from "./components/pomodoro/StateProvider";
import Navbar from "./components/main-page nav bar/navbar";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />}></Route>
          <Route
            path="/mainpage"
            element={
              <>
                <Navbar/>
                <StateProvider>
                  <Pomodoro />
                </StateProvider>
                <Tracker />
              </>
            }
          ></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
