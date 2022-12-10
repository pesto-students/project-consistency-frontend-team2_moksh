import React, { useContext } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import {FaWindowClose} from 'react-icons/fa';
import {Formik, Form, Field} from "formik";
import { StateContext } from '../StateProvider';

const ModalContainer = ({isOpen, onClose}) => {

    const {workTime,
        setWorkTime,
        shortBreakTime,
        setShortBreakTime,
        longBreakTime,
        setLongBreakTime
    } = useContext(StateContext);


  return (
    <Container>
        <ModalContent 
            initial={{y:"-100vh", scale: 0}} 
            animate={{y:0, scale: 1}}
            exit={{y: "-100vh", scale: 0}}
            >
            <ModalHeader>
                <ModalTitle>Change the timers</ModalTitle>
                <ModalCloseButton onClick={onClose}>
                    <FaWindowClose fontSize="3rem"/>
                </ModalCloseButton>
            </ModalHeader>
            <ModalBody>
                <Formik
                  initialValues={{work: workTime / 60, short: shortBreakTime / 60, long: longBreakTime / 60}} 
                  onSubmit={(values) => {
                    setWorkTime(values.work * 60);
                    setShortBreakTime(values.short * 60);
                    setLongBreakTime(values.long * 60);
                    onClose();
                  }}
                >
                    <Form>
                        <InputWrapper>
                            <FormControl>
                                <label htmlFor="work">Work</label>
                                <Field name="work" min="20" max="60"/>
                            </FormControl>

                            <FormControl>
                                <label htmlFor="short">Short Break</label>
                                <Field name="short" min="1" max="10"/>
                            </FormControl>

                            <FormControl>
                                <label htmlFor="long">Long Break</label>
                                <Field name="long" min="20" max="30"/>
                            </FormControl>
                        </InputWrapper>
                        <ButtonWrapper>
                            <ApplyButton type="submit">Apply</ApplyButton>
                        </ButtonWrapper>   
                    </Form>
                </Formik>
            </ModalBody>
        </ModalContent>
    </Container>
  )
}

export default ModalContainer;

const ButtonWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    padding: 2rem;
`;

const ApplyButton = styled.button`
    all: unset;
    padding: 1rem 4rem;
    font-size: 2rem;
    background-color: #1B4965;
    color: white;
    border: 2px solid black;
    border-radius: 1rem;
    box-shadow: 10px 4px 2px #0784F6;
    &:hover {
        cursor: pointer;
    }

    @media (max-width: 1023px) {
        padding: 15px;
        box-shadow: 5px 2px 1px #0784F6;
        font-size: 1rem;
    }
`;

const InputWrapper = styled.div`
    padding: 1rem;
    display: flex;
    gap: 2rem;

    @media screen and (max-width: 1023px) {
        flex-direction: column;
        gap: 2px;
    }
`;
const FormControl = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 0.7rem;
    label {
        font-size: 2rem;
    }
    input {
        width: 100%;
        font-size: 2rem;
        padding: 1rem;
        border-radius: 1rem;
        border: 2px solid black;
        background-color: #5FA8D3;
    }

    @media (max-width: 1023px) {
        label {
            font-size: 20px;
        }
        gap: 1px;
    }
`;


const Container = styled.div`
    position: absolute;
    height: 100vh;
    width: 100vw;
    display: grid;
    place-items: center;
    z-index: 150;

    @media screen and (max-height: 1023px){
        height: 120vh;
    }
    
`;
const ModalContent = styled(motion.div)`
    width: 60rem;
    height: 40rem;
    background-color: white;
    border: 2px solid black;
    border-radius: 1rem;

    @media (max-width: 1023px) {
        width: 70%;
        height: 70%;
        margin: 1rem;
    }
`;
const ModalHeader = styled.div`
    color: black;
    padding: 2rem;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid black;
`;
const ModalTitle = styled.h3`
    font-size: 5rem;
    font-weight: 500;

    @media (max-width: 1023px) {
        font-size: 1.5rem;
    }
`;
const ModalCloseButton = styled.button`
    all: unset;
`;
const ModalBody = styled.div``;

