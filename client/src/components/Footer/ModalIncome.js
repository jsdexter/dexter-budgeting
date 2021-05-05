import React from 'react';
import ReactDOM from 'react-dom';
import {ModalBackground, ModalWrapper, CloseModalButton, ModalContent} from './Footer.elements';
import FormIncome from './FormIncome';

export const ModalIncome = ({ showModal, setShowModal }) => {
    return ReactDOM.createPortal (
        <>
            {showModal ? (
            <ModalBackground>
                <ModalWrapper showModal={showModal}>
                <CloseModalButton aria-label='Close modal' onClick={() => 
                        setShowModal(prev => !prev)}>X</CloseModalButton>
                    <ModalContent>
                        <FormIncome></FormIncome>
                    </ModalContent>
                </ModalWrapper>
            </ModalBackground>
            ): null}
        </>,
        document.getElementById('portal')
    )
};
