import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchTransactions,
  getTransactionsStatus,
} from "../../../store/reducers/transactionSlice";
import TransactionCard from "./TransactionCard";
import { ModalTransaction } from "../../TransactionActions/ModalTransaction";
import { Button } from "./Transaction.elements";
import { Spinner } from "./Transaction.elements";
import { isPending } from "@reduxjs/toolkit";

export const Transactions = () => {
  const transactions = useSelector((state) => state.transactions.transactions);
  const dispatch = useDispatch();
  const [showModalTransaction, setShowModalTransaction] = useState(false);

  const openModalTransaction = () => {
    setShowModalTransaction((prev) => !prev);
  };

  useEffect(() => {
    dispatch(fetchTransactions());
  }, []);

  // do we want to load transactions every time someone hits this page? cache?

  if (transactions.length === 0) {
    return (
      <TransactionDiv>
        <TransactionList>
          <Button onClick={openModalTransaction}>Add Item</Button>
          <ModalTransaction
            showModal={showModalTransaction}
            setShowModal={setShowModalTransaction}
          ></ModalTransaction>
        </TransactionList>
      </TransactionDiv>
    );
  } else if (getTransactionsStatus === isPending) {
    return <Spinner></Spinner>;
  } else if (fetchTransactions.fulfilled) {
    return (
      // <Spinner></Spinner>
      <TransactionDiv>
        <TransactionList>
          {transactions.map((transaction, id) => {
            return <TransactionCard transaction={transaction} key={id} />;
          })}
        </TransactionList>
      </TransactionDiv>
    );
  }
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
