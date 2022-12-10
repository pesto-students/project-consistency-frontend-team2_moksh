import styled from "styled-components";
import { useContext, useEffect } from "react";
import Clock from "./Clock/Clock";
import { StateContext } from "../../StateProvider";
import useSound from 'use-sound';
import DADAA from '../../Sounds/DADAA.mp3';




const CircularProgress = () => {
  const { progress, setProgress, time, initTime } = useContext(StateContext);

  const [play] = useSound(
    DADAA,
    { volume: 0.25 }
  );

  let newTime = time;

  if(newTime === 0) {
    play();
    play();
    play();
    newTime = initTime;
  }

  useEffect(() => {
    setProgress(time / (initTime / 100));
  }, [setProgress, time, initTime, progress]);

  return ( 
    <>
    <OuterCircle progress={progress}>
      <InnerCircle>
        <Clock />
      </InnerCircle>
    </OuterCircle>
    </>
  );
};



export default CircularProgress;


const OuterCircle = styled.div`
  width: 26.7rem;
  height: 26.7rem;
  background-color: #0784f7;
  /* border: 2px solid black; */
  border-radius: 50%;
  display: grid;
  place-items: center;
  background: conic-gradient(
    #0784f7 ${({ progress }) => progress}%,
    transparent ${({ progress }) => progress}%
  );

  @media screen and (max-width: 767px){
    width: 10rem;
    height: 10rem;
  }

  @media screen and (max-width: 1023px) and (min-width: 768px) {
    width: 19rem;
    height: 19rem;
  }
`;

const InnerCircle = styled.div`
  width: 25rem;
  height: 25rem;
  background-color: #bee9e8;
  /* border: 2px solid black; */
  border-radius: 50%;
  display: grid;
  place-items: center;

  @media screen and (max-width: 767px){
    width: 9rem;
    height: 9rem;
  }

  @media screen and (max-width: 1023px) and (min-width: 768px) {
    width: 17rem;
    height: 17rem;
  }
`;
