import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
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

const ModalBackground = styled.div`
  width: 100%;
  height: 100%;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.8);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalWrapper = styled.div`
  width: 90%;
  height: 680px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #ffffff;
  color: #000000;
  display: grid;
  grid-template-columns: 1fr 1fr;
  z-index: 10;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
`;

const CloseModalButton = styled.div`
  cursor: pointer;
  display: flex;
  align-self: flex-end;
  justify-content: flex-end;
  flex-direction: column;
  margin-right: 10px;
  width: 22px;
  padding: 0;
  z-index: 10;
`;

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 1.8;
  color: #141414;
`;
