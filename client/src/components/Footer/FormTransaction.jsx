import React, { useState, useEffect } from "react";
import { useDispatch  } from "react-redux";
import { addTransaction, changeTransaction } from "../../store/reducers/transactionSlice";
import {
  Title,
  Heading,
  Form,
  Button,
  Input,
  SelectOption,
} from "./Footer.elements";
import { useForm } from "react-hook-form";
import { SERVER_ADDRESS } from "../../constants";

const FormTransaction = ({ onSubmit: closeModal, transaction = {} }) => {
  const dispatch = useDispatch();
  const [error, setError] = useState();
  const { register, handleSubmit } = useForm();

  const finishSubmit = (data) => {
    if (transaction.id) {
      updateTransaction(data);
    } else {
      newTransaction(data);
    }
  };

  const newTransaction = async (item) => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(item)
    };

    try {
      setError(); // reset error
      const response = await fetch([`${SERVER_ADDRESS}/api/transactions`], requestOptions);
      if (response.status === 422) {
        throw new Error();
      }

      await response.json();
      dispatch(addTransaction(item));
      closeModal();
    } catch (err) {
      setError("Something broke");
    }
  }

  const updateTransaction = async (item) => {
    const requestOptions = {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(item)
    };

    try {
      setError(); // reset error
      const response = await fetch([`${SERVER_ADDRESS}/api/transactions/${transaction.id}`], requestOptions);
      if (response.status === 422) {
        throw new Error();
      }

      await response.json();
      dispatch(changeTransaction({ ...item, id: transaction.id }));
      closeModal();
      // debugger;
    } catch (err) {
      setError("Something broke");
    }
  }

  return (
    <div>
      { error && <div>{error}</div> }
      <Form onSubmit={handleSubmit(finishSubmit)}>
        <Title>Transaction</Title>
        <Heading>
          <label>Due Date:</label>
        </Heading>
        <Input defaultValue={transaction.dueDate} name="dueDate" {...register("dueDate")}></Input>
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
        <Input defaultValue={transaction.accountNumber} {...register("accountNumber")} />
        <Heading>
          <label>Amount:</label>
        </Heading>
        <Input defaultValue={transaction.amountDue} {...register("amountDue")} />
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
          <option value="bill">Bill</option>
          <option value="income">Income</option>
        </SelectOption>
        <Button type="submit">Save</Button>
      </Form>
    </div>
  );
}

export default FormTransaction;
