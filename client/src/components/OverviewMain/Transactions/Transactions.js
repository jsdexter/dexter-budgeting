import React, { useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { loadTransactions } from '../../../store/reducers/transactionSlice';

import TransactionCard from "./TransactionCard";
import { SERVER_ADDRESS } from "../../../constants";

const Transactions = () => {
  const data = useSelector((state) => state.transaction.transaction);
  const dispatch = useDispatch();

  const fetchTransactions = async () => {
    const response = await axios.get(`${SERVER_ADDRESS}/api/transactions`)
      .catch((err) => {
        console.log("Error: ", err)
      });
    dispatch(loadTransactions(response.data));
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
      <TransactionList>
        {data.map((transaction, id) => {
          return <TransactionCard transaction={transaction} key={id} />
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
`;

const TransactionList = styled.div`
  width: 95%;
`;

export default Transactions;
