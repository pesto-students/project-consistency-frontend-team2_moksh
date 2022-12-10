import styled from "styled-components";
import Tags from "./Tags/Tags";
import Timer from "./Timer/Timer";
import Modal from "./Modal/Modal";
import { useState } from "react";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const onClose = () => {
    setIsOpen(false);
  };

  const onOpen = () => {
    setIsOpen(true);
  };

  return (
    <>
      <BackDiv id="pomodoro-direct">
        <Modal isOpen={isOpen} onClose={onClose} />
        <Title>Ready, Get set, Go</Title>
        <Tags />
        <Focus>Focus Sessions</Focus>
        <Timer />
        <CustomizeTimer onClick={onOpen}>Custom Timer</CustomizeTimer>
      </BackDiv>
    </>
  );
}

export default App;

const BackDiv = styled.div`
  margin: 0;
  padding: 2px;
  background-color: #cae9ff;
  /* height: 100vh; */
`;

const Title = styled.h1`
  font-size: 4rem;
  font-weight: 500;
  padding: 1rem 0;
  text-align: center;

  @media screen and (max-width: 1023px) and (min-width: 768px){
    font-size: 2rem;
  }

  @media screen and (max-width: 767px){
    font-size: 2rem;
  }
`;

const Focus = styled.h2`
  font-size: 3rem;
  font-weight: 500;
  padding: 1rem 0;
  text-align: center;

  @media screen and (max-width: 1023px) and (min-width: 768px){
    font-size: 2rem;
  }

  @media screen and (max-width: 767px){
    font-size: 2rem;

  }
`;

const CustomizeTimer = styled.button`
  background-color: #1b4965;
  color: white;
  padding: 12px 20px;
  border: 2px solid black;
  border-radius: 1rem;
  box-shadow: 10px 4px 2px #0784f6;
  /* display: flex;
  justify-content: center; */
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  display: block;
  font-size: 2rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
  &:hover {
    cursor: pointer;
  }

  @media screen and (max-width: 767px){
    font-size: 1rem;
    padding: 10px;
    margin-top: 4rem;
  }
`;


