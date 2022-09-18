// im not sure if you are running the linter on these, I am seeing quote inconsistency

import React, { Children, useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { changeTransaction } from "../../../store/reducers/transactionSlice";
import axios from "axios";
import { deleteTransaction } from "../../../store/reducers/transactionSlice";
import { SERVER_ADDRESS } from "../../../constants";
import TransactionInformation from "./TransactionInformation";
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
    const [error, setError] = useState();

    const dispatch = useDispatch();

    const finishSubmit = (data) => {
        let paid = transaction.isPaid
        let updatedTransaction = { ...transaction, isPaid: paid }
        console.log("Here is the transaction: " + JSON.stringify(transaction))
        console.log("Here is the data: " + JSON.stringify(data));
        //Need to figure out what "data" is. 

        updateTransaction(updatedTransaction);
        onClick();
    };

    const onClick = () => {
        setDetails(!details);
    };

    const updateTransaction = async (item) => { // same comment about abstracting the data logic
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
        let paid = (transaction.isPaid === 0) ? 1 : 0;
        let paidTransaction = { ...transaction, isPaid: paid }

        setIsPaid(!isPaid);
        setDetails(!details);

        updateTransaction(paidTransaction);
        // general thought question - what if the server is down?
    };

    const removeTransaction = async () => {
        // wrap in a try/catch instead of .catch for await, abstract data logic
        await axios.delete(`${SERVER_ADDRESS}/api/transactions/${transaction.id}`)
            .catch((err) => {
                console.log("Error: ", err)
            });
        setDetails(!details);
        dispatch(deleteTransaction(transaction));
    };

    if (details) {
        return (
            // indentation, linter should fix this
            <div>
                {
                    <FormProvider {...methods}>
                        <DetailsBillDiv isPaid={isPaid}>
                            <TransactionInformation
                                transaction={transaction}
                                isPaid={isPaid}
                            />
                            <TransactionAccountContainer
                                transaction={transaction}
                                isPaid={isPaid}
                                defaultValue={transaction.accountNumber}
                                title="Account #"
                                register={register("accountNumber")}
                            />
                            <TransactionAccountContainer
                                transaction={transaction}
                                isPaid={isPaid}
                                defaultValue={transaction.amountDue}
                                title="Amount"
                                register={register("amountDue")}
                            />
                            <TransactionAccountContainer
                                transaction={transaction}
                                isPaid={isPaid}
                                accountInfo={transaction.dueDate}
                                title="Due Date:"
                                register={register("dueDate")}
                            />
                            {/* <InfoDiv>
                            <div>
                                <div>Account #</div>
                            </div>
                            <div>
                            // { onClick: value1, onSubmit: value2 }
                            // <cardinput .... onClick={value1} onSubmit={value2} />
                                <CardInput isPaid={isPaid} defaultValue={transaction.accountNumber} {...register("accountNumber")} />
                            </div>
                        </InfoDiv> */}
                            {/* <InfoDiv>
                            <div>
                                <div>Amount:</div>
                            </div>
                            <div>
                                <CardInput isPaid={isPaid} defaultValue={transaction.amountDue} {...register("amountDue")} />
                            </div>
                        </InfoDiv> */}
                            {/* <InfoDiv>
                            <div>
                                <DetailsName>Due Date:</DetailsName>
                            </div>
                            <div>
                                <CardInput isPaid={isPaid} defaultValue={itemDueDate(transaction.dueDate)} {...register("dueDate")} />
                            </div>
                        </InfoDiv> */}
                            <ButtonDiv>
                                <div>
                                    <Button onClick={onClickPaid}>Paid</Button>
                                </div>
                                <div>
                                    <Button onClick={methods.handleSubmit(finishSubmit)}>
                                        Save
                                    </Button>
                                </div>
                                <div>
                                    <Button onClick={removeTransaction}>Delete</Button>
                                </div>
                            </ButtonDiv>
                        </DetailsBillDiv>
                    </FormProvider>
                }
            </div>
            // </FormProvider>
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
};

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

//need to figure out what to do with all the inputs. Maybe put them in a higher section of the code
const CardInput = styled.input`
font: 700 20px/24px normal Roboto;
text-align: center;
border: none;
background: ${({ isPaid }) => isPaid ? "rgba(0, 0, 0, .001)" : "#FFE3E3"};
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
