import React from "react";

import styled from "styled-components";

function TransactionHeader() {
  return (
    <TransactionTop>
      <IncomeHeader>Income: $1045.18</IncomeHeader>
      <BillsHeader>Bills: $1045.18</BillsHeader>
    </TransactionTop>
  );
}

const TransactionTop = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

const IncomeHeader = styled.div`
  margin: 30px;
  font-style: normal;
  font-weight: 600;
  font-size: 22px;
  line-height: 26px;
`;

const BillsHeader = styled.div`
  margin: 30px;
  font-style: normal;
  font-weight: 600;
  font-size: 22px;
  line-height: 26px;
`;

export default TransactionHeader;
