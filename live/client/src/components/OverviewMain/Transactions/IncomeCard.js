import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import axios from "axios";
import { deleteTransaction } from "../../../store/reducers/transactionSlice";

import {
  Amount,
  Date,
  Name,
  CardHeader,
  DetailsAccount,
  AccountName,
  InfoDiv,
  DetailsName,
  DetailsNumber,
  DetailsDate,
  Button,
  ButtonDiv
} from "./Transaction.elements";
import { ModalTransaction } from "../../Footer/ModalTransaction";

function IncomeCard(props) {
  const { transaction } = props;
  const [isPaid, setIsPaid] = useState(true);
  const [details, setDetails] = useState(false);
  const [showModalTransaction, setShowModalTransaction] = useState(false);
  const dispatch = useDispatch();
  const locale = "en-US"

  const removeTransaction = async () => {
    await axios.delete(`http://localhost:3070/api/transactions/${transaction.id}`)
      .catch((err) => {
        console.log("Error: ", err)
      });
    dispatch(deleteTransaction(transaction));
  };

  const handleButtonClick = (e) => {
    e.stopPropagation();
  }

  const closeModalTransaction = () => {
    setShowModalTransaction(false);
  };

  const openModalTransaction = (e) => {
    handleButtonClick(e);
    setShowModalTransaction(true);
  };

  const onClick = () => {
    setDetails(!details);
  };

  const toggleColor = () => {
    setIsPaid(!isPaid);
  };

  const currency = new Intl.NumberFormat(locale, { style: 'currency', currency: 'USD' }).format(transaction.amountDue);

  return (
    <div>
      <ModalTransaction
        showModal={showModalTransaction}
        setShowModal={closeModalTransaction}
        transaction={transaction}
      >
      </ModalTransaction>
      {
        details &&
        <DetailsIncomeDiv isPaid={isPaid} onClick={onClick}>
          <DetailsAccount>
            <tr>
              <AccountName>{transaction.name}</AccountName>
            </tr>
          </DetailsAccount>
          <InfoDiv>
            <tr>
              <td>Amount:</td>
            </tr>
            <tr>
              <DetailsNumber>{currency}</DetailsNumber>
            </tr>
          </InfoDiv>
          <InfoDiv>
            <tr>
              <DetailsName>Pay Date:</DetailsName>
            </tr>
            <tr>
              <DetailsDate>{transaction.dueDate}</DetailsDate>
            </tr>
          </InfoDiv>
          <ButtonDiv>
            <tr>
              <Button onClick={toggleColor}>Paid</Button>
            </tr>
            <tr>
              <Button onClick={openModalTransaction}>Edit</Button>
            </tr>
            <tr>
              <Button onClick={removeTransaction}>Delete</Button>
            </tr>
          </ButtonDiv>
        </DetailsIncomeDiv>
      }
      {
        !details &&
        <IncomeDiv isPaid={isPaid} onClick={onClick}>
          <CardHeader>
            <Amount>{currency}</Amount>
            <Date>{transaction.dueDate}</Date>
          </CardHeader>
          <Name>{transaction.name}</Name>
        </IncomeDiv>
      }
    </div>
  )
}

const DetailsIncomeDiv = styled.table`
  margin-top: 10px;
  height: 170px;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.15);
  border-radius: 2px;
  background: #F0FFF0;
  width: 100%;
  /* background: ${({ color }) => color}; */
  background: ${({ isPaid }) => isPaid ? "#F0FFF0" : "rgba(0, 0, 0, 0.3)"};
`;

const IncomeDiv = styled.div`
  margin-top: 10px;
  height: 80px;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.15);
  border-radius: 2px;
  /* background: ${({ color }) => color}; */
  background: ${({ isPaid }) => isPaid ? "#F0FFF0" : "rgba(0, 0, 0, 0.3)"};
`;

export default IncomeCard;