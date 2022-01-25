import React, { useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { loadTransactions } from '../../../store/reducers/transactionSlice';

import TransactionHeader from "./TransactionHeader";
import IncomeCard from "./IncomeCard";
import BillCard from "./BillCard";
import { SERVER_ADDRESS } from "../../../../../../client/src/constants";

const getTransactionMonth = () => {
  // const date = new Date();
  // const newDate = new Date();
  // const nextMonth = newDate.setMonth(newDate.getMonth() + 1, 1);
  // const dt = new Date(nextMonth);
  // const monthYear = { month: "long", year: "numeric" };
  // const thisMonth = new Intl.DateTimeFormat("en-US", monthYear).format(date);
  // console.log(thisMonth);
  // console.log(dt);
};

const Transactions = () => {
  const data = useSelector((state) => state.transaction.transaction);
  const dispatch = useDispatch();

  const fetchTransactions = async () => {
    const response = await axios.get(`${SERVER_ADDRESS}/api/transactions`)
      .catch((err) => {
        console.log("Error: ", err)
      });
    dispatch(loadTransactions(response.data));
    // getTransactionMonth();
    // console.log("Response Data: " + response.data[0].dueDate);
    // debugger;
  };

  useEffect(() => {
    fetchTransactions();
  }, []);

  if (data.length === 0) {
    return (
      <div>Loading</div>
    );
  }

  return (
    <TransactionDiv >
      <TransactionHeader></TransactionHeader>
      <TransactionList>
        {data.map((transaction, id) => {
          if (transaction.type === 'bill') {
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
