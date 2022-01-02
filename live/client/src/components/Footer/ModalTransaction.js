import React from "react";
import ReactDOM from "react-dom";
import {
  ModalBackground,
  ModalWrapper,
  CloseModalButton,
  ModalContent,
} from "./Footer.elements";
import FormTransaction from "./FormTransaction";

export const ModalTransaction = ({ showModal, setShowModal, transaction }) => {
  return ReactDOM.createPortal(
    <div>
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
              <FormTransaction
                onSubmit={() => setShowModal(false)}
                transaction={transaction}
              />
            </ModalContent>
          </ModalWrapper>
        </ModalBackground>
      ) : null}
    </div>,
    document.getElementById("portal")
  );
};
