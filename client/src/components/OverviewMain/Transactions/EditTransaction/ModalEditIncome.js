import React from "react";
import ReactDOM from "react-dom";
import {
    ModalBackground,
    ModalWrapper,
    CloseModalButton,
    ModalContent,
} from "./ModalEdit.elements";
import FormEditIncome from "./FormEditIncome";

export const ModalEditIncome = ({ showModal, setShowModal }) => {
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
                            <FormEditIncome></FormEditIncome>
                        </ModalContent>
                    </ModalWrapper>
                </ModalBackground>
            ) : null}
        </>,
        document.getElementById("portal")
    );
};