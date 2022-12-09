import { AnimatePresence } from "framer-motion";
import React from "react";
import BackDrop from "./BackDrop";
import ModalContainer from "./ModalContainer";

const Modal = ({ isOpen, onClose }) => {
  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <>
            <BackDrop />
            <ModalContainer isOpen={isOpen} onClose={onClose} />
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Modal;
