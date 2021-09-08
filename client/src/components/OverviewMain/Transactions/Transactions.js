import React from "react";
import styled from "styled-components";
import { useSelector } from 'react-redux';
import useSWR from 'swr';

import TransactionHeader from "./TransactionHeader";
import IncomeCard from "./IncomeCard";
import BillCard from "./BillCard";

const Transactions = () => {
  // const billState = useSelector((state) => state.bill.bill);
  const fetcher = async (...args) => {
    const res = await fetch(...args);
    const data = await res.json();

    return data.map((item) => {
      return {
        id: item.id,
        payTo: item.name,
        payFrom: item.name,
        address: item.address,
        cityStateZip: `${item.city} ${item.state} ${item.zip}`,
        amount: item.amountDue,
        dueDate: item.dueDate,
        account: item.accountNumber,
        frequency: item.month,
      };
    });
  };

  const { data, error } = useSWR('http://localhost:3070/api/transactions', fetcher);

  if (error) {
    console.log(error)
  } else {
    console.log(data)
  }

  if (!data) {
    return (
      <div>Loading</div>
    );
  }

  return (
    <TransactionDiv >
      <TransactionHeader></TransactionHeader>
      <TransactionList>
        {/* Figure out how to call the cards */}
        {/* <IncomeCard></IncomeCard> */}
        {data.map((transaction, id) => {
          console.log(transaction.amount)
          if (transaction.amount < 0) {
            return <BillCard transaction={transaction} key={id} />
          } else {
            return <IncomeCard transaction={transaction} key={id} />
          }
        })}
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
