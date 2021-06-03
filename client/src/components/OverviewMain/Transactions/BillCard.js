import React, { useState } from "react";
import styled from "styled-components";

import { Amount, CardHeader, Date, Name } from "./Transaction.elements";
import { ModalEditBill } from "./EditTransaction/ModalEditBill";

function BillCard() {
  const [color, setColor] = useState("#FFE3E3");
  const [details, setDetails] = useState(false);
  // const [showModalBill, setShowModalBill] = useState(false);
  const [showEditBill, setShowEditBill] = useState(false);


  // const showDetails = () => {
  //   setDetails(true);
  // };

  // const hideDetails = () => {
  //   setDetails(false);
  // };

  const handleButtonClick = (e) => {
    e.stopPropagation();
  }

  const closeModalBill = (e) => {
    handleButtonClick(e);
    setShowEditBill(() => false);
  };

  const openModalBill = (e) => {
    handleButtonClick(e);
    setShowEditBill(() => true);
  };

  const onClick = () => {
    setDetails(!details);
  };

  const toggleColor = (e) => {
    // handleButtonClick(e);
    if (color === "#FFE3E3") {
      setColor("rgba(0, 0, 0, 0.3)");
    } else {
      setColor("#FFE3E3");
    }
  };

  if (details) {
    return (
      <div>
        <DetailsContainer color={color} onClick={onClick}>
          <DetailsAccount>
            <AccountName>City of Naperville Utilities</AccountName>
            <DetailsAddress>123 Main St.</DetailsAddress>
            <DetailsAddress>Naperville, IL. 60540</DetailsAddress>
          </DetailsAccount>
          <DetailsDiv>
            <DetailsName>Account #</DetailsName>
            <DetailsNumber>1283921327</DetailsNumber>
          </DetailsDiv>
          <DetailsDiv>
            <DetailsName>Amount:</DetailsName>
            <DetailsNumber>$148</DetailsNumber>
          </DetailsDiv>
          <DetailsDiv>
            <DetailsName>Due Date:</DetailsName>
            <DetailsDate>Monthly on the 15th</DetailsDate>
          </DetailsDiv>
          <ButtonDiv>
            <Button onClick={toggleColor}>Paid</Button>
            <Button onClick={openModalBill}>Edit</Button>
            <ModalEditBill
              showModal={showEditBill}
              setShowModal={closeModalBill}>
            </ModalEditBill>
          </ButtonDiv>
        </DetailsContainer>
      </div>
    );
  }

  return (
    <BillDiv color={color} onClick={onClick}>
      <CardHeader>
        <Amount>- $40</Amount>
        <Date>January 13, 2021</Date>
      </CardHeader>
      <Name>City of Naperville Utilities</Name>
    </BillDiv>
  );
}

const BillDiv = styled.div`
  margin-top: 10px;
  height: 80px;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.15);
  border-radius: 2px;
  background: ${({ color }) => color};
`;

const DetailsContainer = styled.table`
margin-top: 10px;
height: 250px;
box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.15);
border-radius: 2px;
width: 100%;
background: ${({ color }) => color};
`;

const DetailsAccount = styled.tr`
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
`;

const AccountName = styled.thead`
margin-top: 20px;
font: 700 25px/28px normal Roboto;
`;

const DetailsAddress = styled.thead`
font: 700 20px/24px normal Roboto;
margin-top: 10px;
`;

const DetailsDiv = styled.tr`
display: flex;
flex-direction: row;
justify-content: space-between;
margin: 10px 20px 0px 20px;
font: 700 20px/24px normal Roboto;
`;

const DetailsName = styled.td``;

const DetailsNumber = styled.td``;

const DetailsDate = styled.td``;

const ButtonDiv = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  padding: 15px 0 15px 0;
`;

const Button = styled.div`
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

export default BillCard;