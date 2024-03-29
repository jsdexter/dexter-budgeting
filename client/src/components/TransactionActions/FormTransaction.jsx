import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTransaction } from "../../store/reducers/transactionSlice";
import styled from "styled-components";
import { Button } from "../../styles";
import { useForm } from "react-hook-form";
// import { SERVER_ADDRESS } from "../../constants";

const FormTransaction = ({ onSubmit: closeModal, transaction = {} }) => {
  const dispatch = useDispatch();
  const [error, setError] = useState();
  const { register, handleSubmit } = useForm();

  const newTransaction = (item) => {
    item.isPaid = 0;

    dispatch(addTransaction(item));
    closeModal();
  };

  return (
    <div>
      {error && <div>{error}</div>}
      <Form onSubmit={handleSubmit(newTransaction)}>
        {/* <Form onSubmit={handleSubmit(finishSubmit)}> */}
        <Title>Transaction</Title>
        <Heading>
          <label>Due Date:</label>
        </Heading>
        <Input
          defaultValue={transaction.dueDate}
          name="dueDate"
          {...register("dueDate")}
        ></Input>
        <Heading>
          <label>Pay To:</label>
        </Heading>
        <Input defaultValue={transaction.name} {...register("name")} />
        <Heading>
          <label>Payee Address:</label>
        </Heading>
        <Input defaultValue={transaction.address} {...register("address")} />
        <Heading>
          <label>City:</label>
        </Heading>
        <Input defaultValue={transaction.city} {...register("city")} />
        <Heading>
          <label>State:</label>
        </Heading>
        <Input defaultValue={transaction.state} {...register("state")} />
        <Heading>
          <label>Zip:</label>
        </Heading>
        <Input defaultValue={transaction.zip} {...register("zip")} />
        <Heading>
          <label>Account #:</label>
        </Heading>
        <Input
          defaultValue={transaction.accountNumber}
          {...register("accountNumber")}
        />
        <Heading>
          <label>Amount:</label>
        </Heading>
        <Input
          defaultValue={transaction.amountDue}
          {...register("amountDue")}
        />
        <Heading>
          <label>Recurring:</label>
        </Heading>
        <SelectOption defaultValue={transaction.month} {...register("month")}>
          <option value="Monthly">Monthly</option>
          <option value="BiMonthly">BiMonthly</option>
          <option value="Weekly">Weekly</option>
        </SelectOption>
        <Heading>
          <label>Type:</label>
        </Heading>
        <SelectOption defaultValue={transaction.type} {...register("type")}>
          <option value="Bill">Bill</option>
          <option value="Income">Income</option>
        </SelectOption>
        <Button type="submit">Save</Button>
      </Form>
    </div>
  );
};

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
`;

const Heading = styled.h4`
  display: flex;
  align-self: flex-start;
`;

const Title = styled.h1``;

const Input = styled.input`
  width: 80vw;
`;

const SelectOption = styled.select`
  width: 80vw;
`;

export default FormTransaction;
