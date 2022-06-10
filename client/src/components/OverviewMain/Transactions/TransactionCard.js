import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { changeTransaction } from "../../../store/reducers/transactionSlice";
import axios from "axios";
import { deleteTransaction } from "../../../store/reducers/transactionSlice";
import { SERVER_ADDRESS } from "../../../constants";
import { currency, itemDueDate } from "../../../services";
import { useForm } from "react-hook-form";
import { Button, Input } from "../../Footer/Footer.elements";

import {
    Amount,
    CardHeader,
    Date as DateView,
    Name,
    DetailsAccount,
    AccountName,
    InfoDiv,
    DetailsName,
    DetailsNumber,
    DetailsDate,
    ButtonDiv,
    // Button 
} from "./Transaction.elements";
// import { ModalTransaction } from "../../Footer/ModalTransaction";

function TransactionCard(props, id) {
    const { transaction } = props;
    const { register, handleSubmit } = useForm();
    const [isPaid, setIsPaid] = useState(true);
    const [details, setDetails] = useState(false);
    const [error, setError] = useState();
    // const [showModalTransaction, setShowModalTransaction] = useState(false);

    const dispatch = useDispatch();

    const finishSubmit = (data) => {
        updateTransaction(data);
    };

    const handleButtonClick = (e) => {
        e.stopPropagation();
    };

    const updateTransaction = async (item) => {
        console.log("This is the transaction.type: " + item.name);
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
            // closeModal();
        } catch (err) {
            setError("Something broke");
        }
    };

    // const closeModalTransaction = (e) => {
    //     setShowModalTransaction(false);
    // };

    // const openModalTransaction = (e) => {
    //     handleButtonClick(e);
    //     setShowModalTransaction(true);
    //     // changeTransaction();
    // };

    const onClickPaid = () => {
        setDetails(true);
    };

    const removeTransaction = async () => {
        await axios.delete(`${SERVER_ADDRESS}/api/transactions/${transaction.id}`)
            .catch((err) => {
                console.log("Error: ", err)
            });
        dispatch(deleteTransaction(transaction));
    };

    const toggleColor = () => {
        setIsPaid(!isPaid);
    };

    // const toggleType = () => {
    //     setIsType(!isType);
    // };

    if (details) {
        return (
            <div>
                {/* <ModalTransaction
                    showModal={showModalTransaction}
                    setShowModal={closeModalTransaction}
                    transaction={transaction}
                >
                </ModalTransaction> */}
                {
                    <DetailsBillDiv isPaid={isPaid} onClick={onClickPaid}>
                        <DetailsAccount>
                            <div>
                                {/* <AccountName>{transaction.name}</AccountName> */}
                                <CardInput defaultValue={transaction.name} {...register("name")} />
                            </div>
                            <div>
                                {/* <CardInput>{transaction.address}</CardInput> */}
                                <CardInput defaultValue={transaction.address} {...register("address")} />
                            </div>
                            <TransactionCity>
                                {/* <DetailsAddress>{transaction.city} {transaction.state} {transaction.zip}</DetailsAddress> */}
                                <CityStateZip defaultValue={transaction.city} {...register("city")} />
                                <CityStateZip defaultValue={transaction.state} {...register("state")} />
                                <CityStateZip defaultValue={transaction.zip} {...register("zip")} />
                            </TransactionCity>
                        </DetailsAccount>
                        <InfoDiv>
                            <div>
                                <div>Account #</div>
                            </div>
                            <div>
                                {/* <DetailsNumber>{transaction.accountNumber}</DetailsNumber> */}
                                <CardInput defaultValue={transaction.accountNumber} {...register("accountNumber")} />
                            </div>
                        </InfoDiv>
                        <InfoDiv>
                            <div>
                                <div>Amount:</div>
                            </div>
                            <div>
                                {/* <DetailsNumber>{currency(transaction.amountDue)}</DetailsNumber> */}
                                <CardInput defaultValue={transaction.amountDue} {...register("amountDue")} />
                            </div>
                        </InfoDiv>
                        <InfoDiv>
                            <div>
                                <DetailsName>Due Date:</DetailsName>
                            </div>
                            <div>
                                {/* <DetailsDate>{itemDueDate(transaction.dueDate)}</DetailsDate> */}
                                <CardInput defaultValue={itemDueDate(transaction.dueDate)} {...register("dueDate")} />
                            </div>
                        </InfoDiv>
                        <ButtonDiv>
                            <div>
                                <Button onClick={toggleColor}>Paid</Button>
                            </div>
                            <div>
                                {/* <Button type="submit">Save</Button> */}
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
        <BillDiv isPaid={isPaid} onClick={onClickPaid}>
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
  background: ${({ isPaid }) => isPaid ? "#FFE3E3" : "rgba(0, 0, 0, 0.3)"};
`;

const DetailsBillDiv = styled.div`
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

const CardInput = styled.input`
font: 700 20px/24px normal Roboto;
text-align: center;
border: none;
background: #FFE3E3;
`

const CityStateZip = styled.input`
font: 700 20px/24px normal Roboto;
text-align: center;
border: none;
background: #FFE3E3;
width: 10%;
`

const TransactionCity = styled.div`
    text-align: center;
`

export default TransactionCard;