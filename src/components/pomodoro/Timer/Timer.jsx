import styled from 'styled-components';
import CircularProgress from './CircularProgress/CircularProgress';

const Timer = () => {
  return (
    <TimerContainer>
        <CircularProgress/>
    </TimerContainer>
  )
}

export default Timer;

const TimerContainer = styled.div`
    width: 35rem;
    height: 35rem;
    background-color: #BEE9E8;
    border: 2px solid black;
    border-radius: 50%;
    margin: 1rem auto;
    box-shadow: 10px 4px 2px 5px #0784F7;
    display: grid;
    place-items: center;

  @media screen and (max-width: 1023px) and (min-width: 768px){
    width: 25rem;
    height: 25rem;
  }

  @media screen and (max-width: 767px){
    margin-top: 3rem;
    width: 15rem;
    height: 15rem;
  }
`;