import React from 'react';
import ReactDOM from 'react-dom';
import {ModalBackground, ModalWrapper, CloseModalButton, ModalContent} from './Footer.elements';
import FormBill from './FormBill';

export const ModalBill = ({ showModal, setShowModal }) => {
    return ReactDOM.createPortal (
        <>
            {showModal ? (
            <ModalBackground>
                <ModalWrapper showModal={showModal}>
                <CloseModalButton aria-label='Close modal' onClick={() => 
                        setShowModal(prev => !prev)}>X</CloseModalButton>
                    <ModalContent>
                        <FormBill></FormBill>
                    </ModalContent>
                </ModalWrapper>
            </ModalBackground>
            ): null}
        </>,
        document.getElementById('portal')
    )
};
