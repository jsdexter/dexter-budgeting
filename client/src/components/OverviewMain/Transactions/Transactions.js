import React from "react";
import styled from "styled-components";

import TransactionHeader from "./TransactionHeader";
import IncomeCard from "./IncomeCard";
import BillCard from "./BillCard";

const Transactions = () => {

  return (
    <TransactionDiv>
      <TransactionHeader></TransactionHeader>
      <TransactionList>
        <IncomeCard></IncomeCard>
        <BillCard></BillCard>
        <IncomeCard></IncomeCard>
        <BillCard></BillCard>
        <BillCard></BillCard>
        <IncomeCard></IncomeCard>
        <BillCard></BillCard>
      </TransactionList>
    </TransactionDiv>
  );
};

const TransactionDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 55px;
`;

const TransactionList = styled.div`
  width: 95%;
`;

export default Transactions;
