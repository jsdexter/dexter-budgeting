import React, { useState } from "react";
import billSlice, { addBill } from "../../store/reducers/billSlice";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import {
  Title,
  Heading,
  Form,
  Button,
  Input,
  SelectOption,
} from "./Footer.elements";
import { useForm } from "react-hook-form";

const FormTransaction = ({ data, onSubmit, e }) => {
  const [error, setError] = useState();
  const { register, handleSubmit } = useForm();

  const finishSubmit = (data) => {
    
    if (data.id) {
      // update
    } else {
      sendTransaction(data);
    }

     // modal close
  };

  const sendTransaction = async (item) => {

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(item)
    };

    try {
      setError(); // reset error
      const response = await fetch(['http://localhost:3070/api/transactions'], requestOptions);
      if (response.status === 422) {
        throw new Error();
      }

      await response.json();
      onSubmit();
    } catch (err) {
      setError("Something broke");

      // if (err.response === 422 && err.response.body.errors) {
      //   setError(err.response.body.error);
      // }
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
        <Input name="dueDate" {...register("dueDate")} />
        <Heading>
          <label>Pay To:</label>
        </Heading>
        <Input {...register("name")} />
        <Heading>
          <label>Payee Address:</label>
        </Heading>
        <Input {...register("address")} />
        <Heading>
          <label>City:</label>
        </Heading>
        <Input {...register("city")} />
        <Heading>
          <label>State:</label>
        </Heading>
        <Input {...register("state")} />
        <Heading>
          <label>Zip:</label>
        </Heading>
        <Input {...register("zip")} />
        <Heading>
          <label>Account #:</label>
        </Heading>
        <Input {...register("accountNumber")} />
        <Heading>
          <label>Amount:</label>
        </Heading>
        <Input {...register("amountDue")} />
        <Heading>
          <label>Recurring:</label>
        </Heading>
        <SelectOption {...register("month")}>
          <option value="Monthly">Monthly</option>
          <option value="BiMonthly">BiMonthly</option>
          <option value="Weekly">Weekly</option>
        </SelectOption>
        <Heading>
          <label>Type:</label>
        </Heading>
        <SelectOption {...register("type")}>
          <option value="bill">Bill</option>
          <option value="income">Income</option>
        </SelectOption>
        <Button type="submit">Save</Button>
      </Form>
    </div>
  );
}

export default FormTransaction;
