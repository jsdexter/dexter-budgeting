import React from "react";
import ReactDOM from "react-dom";
import {
  ModalBackground,
  ModalWrapper,
  CloseModalButton,
  ModalContent,
} from "./ModalEdit.elements";
import FormTransaction from "../../../Footer/FormTransaction";

export const ModalEditBill = ({ showModal, setShowModal }) => {
  return ReactDOM.createPortal(
    <div>
      {showModal ? (
        <ModalBackground>
          <ModalWrapper showModal={showModal}>
            <CloseModalButton
              aria-label="close modal"
              onClick={setShowModal}
            >
              X
            </CloseModalButton>
            <ModalContent>
              <FormTransaction>Testing</FormTransaction>
            </ModalContent>
          </ModalWrapper>
        </ModalBackground>
      ) : null}
    </div>,
    document.getElementById("portal")
  );
};