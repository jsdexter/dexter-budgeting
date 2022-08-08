import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { changeTransaction } from "../../../store/reducers/transactionSlice";
import axios from "axios";
import { deleteTransaction } from "../../../store/reducers/transactionSlice";
import { SERVER_ADDRESS } from "../../../constants";
import { currency, itemDueDate } from "../../../services";
import { useForm } from "react-hook-form";

import {
    Amount,
    CardHeader,
    Date as DateView,
    Name,
    DetailsAccount,
    InfoDiv,
    DetailsName,
    ButtonDiv,
} from "./Transaction.elements";

function TransactionCard(props, id) {
    const { transaction } = props;
    const { register, handleSubmit } = useForm();
    const [isPaid, setIsPaid] = useState(!!transaction.isPaid);
    const [details, setDetails] = useState(false);
    const [error, setError] = useState();

    const dispatch = useDispatch();

    const finishSubmit = (data) => {
        console.log("Here is my data: " + JSON.stringify(data));
        let type = transaction.type;
        let paid = transaction.isPaid
        let updatedTransaction = { ...data, isPaid: paid, type: type }
        updateTransaction(updatedTransaction);
        onClick();
    };

    const onClick = () => {
        setDetails(!details);
    };

    const updateTransaction = async (item) => {
        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(item)
        }
        try {
            setError(); // reset error
            const response = await fetch([`${SERVER_ADDRESS}/api/transactions/${transaction.id}`], requestOptions);
            if (response.status === 422) {
                throw new Error();
            }

            await response.json();
            dispatch(changeTransaction({ ...item, id: transaction.id }));
        } catch (err) {
            setError("Something broke");
        }
    };

    const onClickPaid = async () => {
        let type = transaction.type;
        let paid = (transaction.isPaid == 0) ? 1 : 0;
        let paidTransaction = { ...transaction, isPaid: paid, type: type }
        //Fix this below
        dispatch(...transaction, paidTransaction);

        setIsPaid(!isPaid);
        setDetails(!details);

        updateTransaction(paidTransaction);
    };

    const removeTransaction = async () => {
        await axios.delete(`${SERVER_ADDRESS}/api/transactions/${transaction.id}`)
            .catch((err) => {
                console.log("Error: ", err)
            });
        dispatch(deleteTransaction(transaction));
    };

    if (details) {
        return (
            <div>
                {
                    <DetailsBillDiv isPaid={isPaid} >
                        <DetailsAccount>
                            <div>
                                <CardInput isPaid={isPaid} defaultValue={transaction.name} {...register("name")} />
                            </div>
                            <div>
                                <CardInput isPaid={isPaid} defaultValue={transaction.address} {...register("address")} />
                            </div>
                            <TransactionCity isPaid={isPaid}>
                                <CityStateZip isPaid={isPaid} defaultValue={transaction.city} {...register("city")} />
                                <CityStateZip isPaid={isPaid} defaultValue={transaction.state} {...register("state")} />
                                <CityStateZip isPaid={isPaid} defaultValue={transaction.zip} {...register("zip")} />
                            </TransactionCity>
                        </DetailsAccount>
                        <InfoDiv>
                            <div>
                                <div>Account #</div>
                            </div>
                            <div>
                                <CardInput isPaid={isPaid} defaultValue={transaction.accountNumber} {...register("accountNumber")} />
                            </div>
                        </InfoDiv>
                        <InfoDiv>
                            <div>
                                <div>Amount:</div>
                            </div>
                            <div>
                                <CardInput isPaid={isPaid} defaultValue={transaction.amountDue} {...register("amountDue")} />
                            </div>
                        </InfoDiv>
                        <InfoDiv>
                            <div>
                                <DetailsName>Due Date:</DetailsName>
                            </div>
                            <div>
                                <CardInput isPaid={isPaid} defaultValue={itemDueDate(transaction.dueDate)} {...register("dueDate")} />
                            </div>
                        </InfoDiv>
                        <ButtonDiv>
                            <div>
                                <Button onClick={onClickPaid} >Paid</Button>
                            </div>
                            <div>
                                <Button onClick={handleSubmit(finishSubmit)}>Save</Button>
                            </div>
                            <div>
                                <Button onClick={removeTransaction}>Delete</Button>
                            </div>
                        </ButtonDiv>
                    </DetailsBillDiv>
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
  background: ${({ isPaid }) => isPaid ? "rgba(0, 0, 0, 0.3)" : "#FFE3E3"};
`;

const DetailsBillDiv = styled.div`
margin-top: 10px;
height: 250px;
box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.15);
border-radius: 2px;
width: 100%;
background: ${({ isPaid }) => isPaid ? "rgba(0, 0, 0, 0.3)" : "#FFE3E3"};
`;

const CardInput = styled.input`
font: 700 20px/24px normal Roboto;
text-align: center;
border: none;
background: ${({ isPaid }) => isPaid ? "rgba(0, 0, 0, .001)" : "#FFE3E3"};
`

const CityStateZip = styled.input`
font: 700 20px/24px normal Roboto;
text-align: center;
border: none;
background: #FFE3E3;
width: 15%;
background: ${({ isPaid }) => isPaid ? "rgba(0, 0, 0, .001)" : "#FFE3E3"};
`

const TransactionCity = styled.div`
    text-align: center;
`

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
`

export default TransactionCard;