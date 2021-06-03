import React, { useState } from "react";

import styled from "styled-components";
import { Amount, Date, Name, CardHeader } from "./Transaction.elements";

function IncomeCard() {
  const [color, setColor] = useState("#F0FFF0");
  const toggleButton = () => {
    if (color === "#F0FFF0") {
      setColor("rgba(0, 0, 0, 0.3)");
    } else {
      setColor("#F0FFF0");
    }
  };

  return (
    <IncomeDiv color={color} onClick={toggleButton}>
      <CardHeader>
        <Amount>+ $1,110</Amount>
        <Date>January 21, 2921</Date>
      </CardHeader>
      <Name>Jason Pay</Name>
    </IncomeDiv>
  );
}

const IncomeDiv = styled.div`
  margin-top: 10px;
  height: 80px;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.15);
  border-radius: 2px;
  background: ${({ color }) => color};
`;

export default IncomeCard;
