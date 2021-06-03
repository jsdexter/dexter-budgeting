import React, { useState } from "react";
import styled from "styled-components";

import { ModalBill } from "./ModalBill";
import { ModalIncome } from "./ModalIncome";

function Footer() {
  const [showModalBill, setShowModalBill] = useState(false);
  const [showModalIncome, setShowModalIncome] = useState(false);

  const openModalBill = () => {
    setShowModalBill((prev) => !prev);
  };

  const openModalIncome = () => {
    setShowModalIncome((prev) => !prev);
  };

  return (
    <FooterDiv>
      <ButtonContainer>
        <FooterButton onClick={openModalBill}>Add Bill</FooterButton>
        <ModalBill
          showModal={showModalBill}
          setShowModal={setShowModalBill}
        ></ModalBill>
        <FooterButton onClick={openModalIncome}>Add Income</FooterButton>
        <ModalIncome
          showModal={showModalIncome}
          setShowModal={setShowModalIncome}
        ></ModalIncome>
      </ButtonContainer>
    </FooterDiv>
  );
}

const FooterDiv = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: #617e12;
  height: 50px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;

const FooterButton = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
  width: 30%;
  height: 30px;
  background: #3f51b5;
  font: 700 16px/16px Roboto;
  letter-spacing: 0.75px;
  text-transform: uppercase;
  color: #ffffff;
  text-decoration: none;
`;

export default Footer;
