import React, { useState } from "react";
import styled from "styled-components";

import {
  Amount,
  CardHeader,
  Date,
  Name,
  DetailsAccount,
  AccountName,
  InfoDiv,
  DetailsName,
  DetailsNumber,
  DetailsDate,
  ButtonDiv,
  Button
} from "./Transaction.elements";
import { ModalEditBill } from "./EditTransaction/ModalEditBill";

function BillCard() {
  const [color, setColor] = useState("#FFE3E3");
  const [details, setDetails] = useState(false);
  const [showEditBill, setShowEditBill] = useState(false);

  const handleButtonClick = (e) => {
    e.stopPropagation();
  }

  const closeModalBill = (e) => {
    handleButtonClick(e);
    setShowEditBill(false)
  };

  const openModalBill = (e) => {
    handleButtonClick(e);
    setShowEditBill(true)
  };

  const onClick = () => {
    setDetails(!details);
  };

  const toggleColor = () => {
    if (color === "#FFE3E3") {
      setColor("rgba(0, 0, 0, 0.3)");
    } else {
      setColor("#FFE3E3");
    }
  };

  if (details) {
    return (
      <>
        <ModalEditBill
          showModal={showEditBill}
          setShowModal={closeModalBill}>
        </ModalEditBill>
        {
          <DetailsBillDiv color={color} onClick={onClick}>
            <DetailsAccount>
              <AccountName>City of Naperville Utilities</AccountName>
              <DetailsAddress>123 Main St.</DetailsAddress>
              <DetailsAddress>Naperville, IL. 60540</DetailsAddress>
            </DetailsAccount>
            <InfoDiv>
              <td>Account #</td>
              <DetailsNumber>1283921327</DetailsNumber>
            </InfoDiv>
            <InfoDiv>
              <td>Amount:</td>
              <DetailsNumber>$148</DetailsNumber>
            </InfoDiv>
            <InfoDiv>
              <DetailsName>Due Date:</DetailsName>
              <DetailsDate>Monthly on the 15th</DetailsDate>
            </InfoDiv>
            <ButtonDiv>
              <Button onClick={toggleColor}>Paid</Button>
              <Button onClick={openModalBill}>Edit</Button>
            </ButtonDiv>
          </DetailsBillDiv>
        }
      </>
    )
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

const DetailsBillDiv = styled.table`
margin-top: 10px;
height: 250px;
box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.15);
border-radius: 2px;
width: 100%;
background: ${({ color }) => color};
`;

const DetailsAddress = styled.thead`
font: 700 20px/24px normal Roboto;
margin-top: 10px;
`;

export default BillCard;