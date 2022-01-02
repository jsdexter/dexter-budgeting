import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import axios from "axios";
import { deleteTransaction } from "../../../store/reducers/transactionSlice";

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
import { ModalTransaction } from "../../Footer/ModalTransaction";

function BillCard(props, id) {
  const { transaction } = props;

  const [isPaid, setIsPaid] = useState(true);
  const [details, setDetails] = useState(false);
  const [showModalTransaction, setShowModalTransaction] = useState(false);

  const dispatch = useDispatch();
  const locale = "en-US"

  const handleButtonClick = (e) => {
    e.stopPropagation();
  }

  const closeModalTransaction = (e) => {
    setShowModalTransaction(false);
  };

  const openModalTransaction = (e) => {
    handleButtonClick(e);
    setShowModalTransaction(true);
    // changeTransaction();
  };

  const onClick = () => {
    setDetails(!details);
  };

  // const changeTransaction = async () => {
  //   await axios.put(`http://localhost:3070/api/transactions/${transaction.id}`)
  //     .catch((err) => {
  //       console.log("Error: ", err)
  //     });
  //   dispatch(updateTransaction(transaction));
  // };

  const removeTransaction = async () => {
    await axios.delete(`http://localhost:3070/api/transactions/${transaction.id}`)
      .catch((err) => {
        console.log("Error: ", err)
      });
    dispatch(deleteTransaction(transaction));
  };

  const toggleColor = () => {
    setIsPaid(!isPaid);
  };

  const currency = new Intl.NumberFormat(locale, { style: 'currency', currency: 'USD' }).format(transaction.amountDue);

  if (details) {
    return (
      <div>
        <ModalTransaction
          showModal={showModalTransaction}
          setShowModal={closeModalTransaction}
          transaction={transaction}
        >
        </ModalTransaction>
        {
          <DetailsBillDiv isPaid={isPaid} onClick={onClick}>
            <DetailsAccount>
              <tr>
                <AccountName>{transaction.name}</AccountName>
              </tr>
              <tr>
                <DetailsAddress>{transaction.address}</DetailsAddress>
              </tr>
              <tr>
                <DetailsAddress>{transaction.city} {transaction.state} {transaction.zip}</DetailsAddress>
              </tr>
            </DetailsAccount>
            <InfoDiv>
              <tr>
                <td>Account #</td>
              </tr>
              <tr>
                <DetailsNumber>{transaction.accountNumber}</DetailsNumber>
              </tr>
            </InfoDiv>
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
                <DetailsName>Due Date:</DetailsName>
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
          </DetailsBillDiv>
        }
      </div>
    );
  }

  return (
    <BillDiv isPaid={isPaid} onClick={onClick}>
      <CardHeader>
        <Amount>{new Intl.NumberFormat(locale, { style: 'currency', currency: 'USD' }).format(transaction.amountDue)}</Amount>
        <Date>{transaction.dueDate}</Date>
      </CardHeader>
      <Name>{transaction.name}</Name>
    </BillDiv>
  );
}

const BillDiv = styled.div`
  margin-top: 10px;
  height: 80px;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.15);
  border-radius: 2px;
  background: ${({ isPaid }) => isPaid ? "#FFE3E3" : "rgba(0, 0, 0, 0.3)"};
`;

const DetailsBillDiv = styled.table`
margin-top: 10px;
height: 250px;
box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.15);
border-radius: 2px;
width: 100%;
background: ${({ isPaid }) => isPaid ? "#FFE3E3" : "rgba(0, 0, 0, 0.3)"};
`;

const DetailsAddress = styled.th`
font: 700 20px/24px normal Roboto;
margin-top: 10px;
`;

export default BillCard;