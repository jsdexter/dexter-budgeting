import React from "react";
import {
  Title,
  Heading,
  Form,
  Button,
  Input,
  SelectOption,
} from "./Footer.elements";

function FormIncome() {
  return (
    <Form>
      <Title>Add Income</Title>
      <Heading>
        <label>Pay Date:</label>
      </Heading>
      <Input type="date" name="dueDate" required />
      <Heading>
        <label>Amount:</label>
      </Heading>
      <Input type="number" name="amount" />
      <Heading>
        <label>Recurring:</label>
      </Heading>
      {/* <SelectOption value="Monthly" options={options} onChange={(values) => this.setValues(values)}> */}
      <SelectOption value="Monthly">
        <option value="Monthly">Monthly</option>
        <option value="BiMonthly">BiMonthly</option>
        <option value="Radish">Weekly</option>
      </SelectOption>
      <Button type="submit">Save</Button>
    </Form>
  );
}

// const Form = styled.form`
//     display: flex;
//     flex-direction: column;
//     justify-content: center;
//     align-items: center;
//     align-content: center;

// `;

// const Heading = styled.h4`
//     display: flex;
//     align-self: flex-start;
// `;

// const Title = styled.h1``;

// const Button = styled.button`
//     margin-top: 30px;
// `;

// const Input = styled.input`
//     width: 80vw;
// `;

// const SelectOption = styled.select`
//     width: 80vw;
// `;

export default FormIncome;
