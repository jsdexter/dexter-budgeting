import React, { useState } from "react";
import { addBill } from "../../store/reducers/billSlice";
import { useSelector, useDispatch } from "react-redux";
import {
  Title,
  Heading,
  Form,
  Button,
  Input,
  SelectOption,
} from "./Footer.elements";
import { useForm } from "react-hook-form";

const FormBill = () => {
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => dispatch(addBill(data));

  // const [values, setValues] = useState({
  //   dueDate: '', payTo: '', address: '', account: '', amount: '', recurring: ''
  // });

  // const set = name => {
  //   return ({ target: { value } }) => {
  //     setValues(oldValues => ({ ...oldValues, [name]: value }));
  //   }
  // };

  // const onSubmit = async (e) => {
  //   e.preventDefault();
  //   setValues({
  //     dueDate: '', payTo: '', address: '', account: '', amount: '', recurring: ''
  //   });
  // }

  return (
    <Form
      onSubmit={handleSubmit(onSubmit)}>
      <Title>Add Bill</Title>
      <Heading>
        <label>Due Date:</label>
      </Heading>
      <Input {...register("dueDate")} />
      <Heading>
        <label>Pay To:</label>
      </Heading>
      <Input {...register("payTo")} />
      <Heading>
        <label>Payee Address:</label>
      </Heading>
      <Input {...register("address")} />
      <Heading>
        <label>Payee City/State/Zip:</label>
      </Heading>
      <Input {...register("cityStateZip")} />
      <Heading>
        <label>Account #:</label>
      </Heading>
      <Input {...register("account")} />
      <Heading>
        <label>Amount:</label>
      </Heading>
      <Input {...register("amount")} />
      <Heading>
        <label>Recurring:</label>
      </Heading>
      <SelectOption {...register("frequency")}>
        <option value="Monthly">Monthly</option>
        <option value="BiMonthly">BiMonthly</option>
        <option value="Weekly">Weekly</option>
      </SelectOption>
      <Button type="submit">Save</Button>
    </Form>
  );
}

export default FormBill;
