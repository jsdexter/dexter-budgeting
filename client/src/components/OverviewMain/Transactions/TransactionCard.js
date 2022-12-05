import React, { Children, useState, useEffect } from "react";
import styled from "styled-components";
import { CardInput } from "../../../styles";
import { useDispatch } from "react-redux";
import {
  removeTransaction,
  updateTransaction,
} from "../../../store/reducers/transactionSlice";
import TransactionAccountContainer from "./TransactionAccountContainer";
import { currency, itemDueDate } from "../../../services";
import { FormProvider, useForm } from "react-hook-form";

import {
  Amount,
  CardHeader,
  Date as DateView,
  Name,
  ButtonDiv,
} from "./Transaction.elements";

function TransactionCard(props) {
  const { transaction } = props;
  const methods = useForm();
  const { register, handleSubmit } = methods;
  const [isPaid, setIsPaid] = useState(!!transaction.isPaid);
  const [details, setDetails] = useState(false);

  const dispatch = useDispatch();

  const finishSubmit = (item) => {
    let paid = transaction.isPaid;
    let tDueDate = transaction.dueDate;
    let tMonth = transaction.month;
    let tType = transaction.type;
    let updatedTransaction = {
      ...item,
      isPaid: paid,
      dueDate: tDueDate,
      month: tMonth,
      type: tType,
      id: transaction.id,
    };

    dispatch(updateTransaction({ ...updatedTransaction, id: transaction.id }));
    setDetails(!details);
  };

  const onClick = () => {
    setDetails(!details);
  };

  const onClickPaid = () => {
    let paid = transaction.isPaid === 0 ? 1 : 0;
    let paidTransaction = { ...transaction, isPaid: paid };

    setIsPaid(!isPaid);
    setDetails(!details);

    dispatch(updateTransaction(paidTransaction));
  };

  const deleteTransaction = () => {
    setDetails(!details);
    dispatch(removeTransaction(transaction));
  };

  if (details) {
    return (
      <div>
        {
          <FormProvider {...methods}>
            <DetailsBillDiv isPaid={isPaid}>
              <DetailsAccount isPaid={isPaid}>
                <div>
                  <CardInput
                    isPaid={isPaid}
                    defaultValue={transaction.name}
                    {...register("name")}
                  />
                </div>
                <div>
                  <CardInput
                    isPaid={isPaid}
                    defaultValue={transaction.address}
                    {...register("address")}
                  />
                </div>
                <TransactionCity isPaid={isPaid}>
                  <CityStateZip
                    isPaid={isPaid}
                    defaultValue={transaction.city}
                    {...register("city")}
                  />
                  <CityStateZip
                    isPaid={isPaid}
                    defaultValue={transaction.state}
                    {...register("state")}
                  />
                  <CityStateZip
                    isPaid={isPaid}
                    defaultValue={transaction.zip}
                    {...register("zip")}
                  />
                </TransactionCity>
              </DetailsAccount>
              <TransactionAccountContainer
                transaction={transaction}
                defaultValue={transaction.accountNumber}
                title="Account #"
                register={register("accountNumber")}
              />
              <TransactionAccountContainer
                transaction={transaction}
                defaultValue={transaction.amountDue}
                title="Amount"
                register={register("amountDue")}
              />
              <TransactionAccountContainer
                transaction={transaction}
                defaultValue={transaction.dueDate}
                title="Due Date:"
                register={register("dueDate")}
              />
              <ButtonDiv>
                <div>
                  <Button onClick={onClickPaid}>Paid</Button>
                </div>
                <div>
                  <Button onClick={handleSubmit(finishSubmit)}>Save</Button>
                </div>
                <div>
                  <Button onClick={deleteTransaction}>Delete</Button>
                  {/* <Button>Delete</Button> */}
                </div>
              </ButtonDiv>
            </DetailsBillDiv>
          </FormProvider>
        }
      </div>
    );
  }
  return (
    <BillDiv isPaid={isPaid} onClick={onClick}>
      <CardHeader>
        <Amount>{currency(transaction.amountDue)}</Amount>
        <DateView>{itemDueDate(transaction.dueDate)}</DateView>
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
  background: ${({ isPaid }) => (isPaid ? "rgba(0, 0, 0, 0.3)" : "#FFE3E3")};
`;

const DetailsBillDiv = styled.div`
  margin-top: 10px;
  height: 250px;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.15);
  border-radius: 2px;
  width: 100%;
  background: ${({ isPaid }) => (isPaid ? "rgba(0, 0, 0, 0.3)" : "#FFE3E3")};
`;

const TransactionCity = styled.div`
  text-align: center;
`;

const CityStateZip = styled.input`
  font: 700 20px/24px normal Roboto;
  text-align: center;
  border: none;
  background: #ffe3e3;
  width: 15%;
  background: ${({ isPaid }) => (isPaid ? "rgba(0, 0, 0, .001)" : "#FFE3E3")};
`;

const DetailsAccount = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const Button = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
  height: 30px;
  background: #3f51b5;
  font: 700 16px/16px Roboto;
  letter-spacing: 0.75px;
  text-transform: uppercase;
  color: #ffffff;
  text-decoration: none;
  padding: 2px 30px 2px 30px;
`;

export default TransactionCard;
