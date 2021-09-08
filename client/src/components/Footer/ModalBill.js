import React from "react";
import ReactDOM from "react-dom";
import {
  ModalBackground,
  ModalWrapper,
  CloseModalButton,
  ModalContent,
} from "./Footer.elements";
import FormBill from "./FormBill";

export const ModalBill = ({ showModal, setShowModal }) => {
  return ReactDOM.createPortal(
    <>
      {showModal ? (
        <ModalBackground>
          <ModalWrapper showModal={showModal}>
            <CloseModalButton
              aria-label="close modal"
              onClick={() => setShowModal((prev) => !prev)}
            >
              X
            </CloseModalButton>
            <ModalContent>
              <FormBill onSubmit={() => setShowModal(false)} />
            </ModalContent>
          </ModalWrapper>
        </ModalBackground>
      ) : null}
    </>,
    document.getElementById("portal")
  );
};
