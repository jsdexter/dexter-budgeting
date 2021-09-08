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

const FormBill = ({ data, onSubmit, e }) => {
  // const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();

  const finishSubmit = (data) => {
    if (data.id) {
      // update
    } else {
      console.log("Here is the data");
      console.log(data);
      sendTransaction(data);
    }
    onSubmit();
  };

  const sendTransaction = async (item) => {
    // debugger;
    // const singleTransaction = {
    //   type: item.type,
    //   id: item.id,
    //   payTo: item.name,
    //   payFrom: item.name,
    //   address: item.address,
    //   cityStateZip: `${item.city} ${item.state} ${item.zip}`,

    //   amountDue: item.amount,
    //   dueDate: item.dueDate,
    //   account: item.accountNumber,
    //   frequency: item.month,
    // };

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(item)
    };
    const response = await fetch(['http://localhost:3070/api/transactions'], requestOptions);
    const jsonData = await response.json();
    console.log(jsonData);
  }

  // const sendTransaction = (item) => {
  //   fetch('http://localhost:3070/api/transactions', {
  //     mode: 'no-cors',
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     // body: JSON.stringify({ item }),
  //     data

  //   })
  //     .then((res) => res.json())
  //     // .then((result) => setSubmitForm(result.submitForm))
  //     .catch((err) => console.log('error'))
  // }

  return (
    <Form onSubmit={handleSubmit(finishSubmit)}>
      <Title>Transaction</Title>
      {/* <input type="hidden" name="type" value="bill" {...register("type")} /> */}
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
  );
}

export default FormBill;
