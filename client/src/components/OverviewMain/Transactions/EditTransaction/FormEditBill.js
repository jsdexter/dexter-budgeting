import React from "react";
import {
    Title,
    Heading,
    Form,
    Button,
    Input,
    SelectOption,
} from "./ModalEdit.elements";

function FormEditBill() {
    return (
        <Form>
            <Title>Edit Bill</Title>
            <Heading>
                <label>Due Date:</label>
            </Heading>
            <Input type="date" name="dueDate" required></Input>
            <Heading>
                <label>Pay To:</label>
            </Heading>
            <Input type="text" name="payTo" value="City of Naperville Utilities" required />
            <Heading>
                <label>Payee Address:</label>
            </Heading>
            <Input type="text" name="address" required value="123 Main Naperville, IL. 60540" />
            <Heading>
                <label>Account #:</label>
            </Heading>
            <Input type="text" name="account" value="1283921327" />
            <Heading>
                <label>Amount:</label>
            </Heading>
            <Input type="number" name="amount" value="148.00" />
            <Heading>
                <label>Recurring:</label>
            </Heading>
            <SelectOption value="Monthly">
                <option value="Monthly">Monthly</option>
                <option value="BiMonthly">BiMonthly</option>
                <option value="Weekly">Weekly</option>
            </SelectOption>
            <Button type="submit">Save</Button>
        </Form>
    );
}

// export default FormEditBill;