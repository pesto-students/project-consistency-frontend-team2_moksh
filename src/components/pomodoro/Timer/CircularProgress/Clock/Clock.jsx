import React, { useEffect } from "react";
import styled from "styled-components";
import { useContext } from "react";
import { StateContext } from "../../../StateProvider";

const Clock = () => {
  const { time, setTime, isActive, setIsActive, initTime } =
    useContext(StateContext);

  useEffect(() => {
    if (isActive && time > 0) {
      const interval = setInterval(() => {
        setTime((time) => time - 1);
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [time, isActive, initTime, setTime]);

  const toggleClock = () => {
    setIsActive(!isActive);
  };

  const resetTime = () => {
    setTime(initTime);
    setIsActive(false);
  };

  const getTime = (time) => {
    const min = Math.floor(time / 60);
    const sec = time % 60;
    return `${min < 10 ? "0" + min : min}:${sec < 10 ? "0" + sec : sec}`;
  };

  return (
    <ClockContainer>
      <TimerText>{getTime(time)}</TimerText>
      <StartPauseButton onClick={toggleClock}>
        {isActive ? "Pause" : "Start"}
      </StartPauseButton>
      {time === 0 && <ResetButton onClick={resetTime}>RESET</ResetButton>}
    </ClockContainer>
  );
};

export default Clock;

const ClockContainer = styled.div`
  display: grid;
  place-items: center;
`;
const TimerText = styled.h3`
  font-size: 5rem;
  font-weight: 500;

  @media screen and (max-width: 767px){
    font-size: 1.5rem;
  }
`;

const StartPauseButton = styled.button`
  all: unset;
  text-align: center;
  &:hover {
    cursor: pointer;
  }
  font-size: 3rem;
  text-transform: uppercase;
  letter-spacing: 0.3rem;
  border: 2px solid white;
  border-radius: 2rem;
  background-color: #1b4965;
  color: white;
  padding: 10px 35px;
  margin-top: 10px;
  box-shadow: 10px 4px 2px #0784f6;

  @media screen and (max-width: 767px){
    font-size: 10px;
    border: 1px solid white;
    border-radius: 6px;
    padding: 5px;
    box-shadow: 4px 1px 1px #0784f6;
  }

  @media screen and (max-width: 1023px) and (min-width: 768px){
    font-size: 20px;
    border: 2px solid white;
    border-radius: 8px;
    padding: 7px;
    box-shadow: 4px 1px 1px #0784f6;
  }
`;

const ResetButton = styled.button`
  all: unset;
  text-align: center;
  &:hover {
    cursor: pointer;
  }
  font-size: 3rem;
  text-transform: uppercase;
  letter-spacing: 0.3rem;
  border: 2px solid white;
  border-radius: 2rem;
  background-color: #1b4965;
  color: red;
  padding: 10px 35px;
  margin-top: 10px;
  box-shadow: 10px 4px 2px #0784f6;

  @media screen and (max-width: 767px){
    font-size: 10px;
    border: 1px solid white;
    border-radius: 6px;
    padding: 5px;
    box-shadow: 4px 1px 1px #0784f6;
  }

  @media screen and (max-width: 1023px) and (min-width: 768px){
    font-size: 20px;
    border: 2px solid white;
    border-radius: 8px;
    padding: 7px;
    box-shadow: 4px 1px 1px #0784f6;
  }
`;
