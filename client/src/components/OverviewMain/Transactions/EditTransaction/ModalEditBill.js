import React from "react";
import ReactDOM from "react-dom";
import {
  ModalBackground,
  ModalWrapper,
  CloseModalButton,
  ModalContent,
} from "./ModalEdit.elements";
import FormEditBill from "./FormEditBill";

export const ModalEditBill = ({ showModal, setShowModal }) => {
  return ReactDOM.createPortal(
    <>
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
              <FormEditBill>Testing</FormEditBill>
            </ModalContent>
          </ModalWrapper>
        </ModalBackground>
      ) : null}
    </>,
    document.getElementById("portal")
  );
};