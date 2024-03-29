import { redirect } from "@remix-run/node";
import { Outlet, useActionData } from "@remix-run/react";
import Footer from "~/components/Footer";
import Header from "~/components/Header";
import AddTransactionContainer from "../../components/AddTransactionContainer"
import { prisma } from "~/db.server";

export const action = async ({request}) => {
  const formData = await request.formData();

  const name = formData.get("name");
  const accountNumber = formData.get("accountNumber");
  const address = formData.get("address");
  const city = formData.get("city");
  const state = formData.get("state");
  const zip = formData.get("zip");
  const amountDue = parseFloat(formData.get("amountDue"));
  const dueDate = new Date(formData.get("dueDate"));
  const type = formData.get("type");
  const frequency = formData.get("frequency".toLowerCase());

  const billFields = { name, accountNumber, address, city, state, zip, amountDue, dueDate, type, frequency, };

  const newRecurring = await prisma.recurring.create({
    data: billFields,
  });

  const recurringId = newRecurring.id;

  const recurringFields = { name, accountNumber, address, city, state, zip, amountDue, dueDate, type, frequency, recurringId};

  await prisma.transaction.create({
    data: recurringFields,
  });

  return redirect(`/transactions`);
}

function AddTransaction() {
  const newTransaction = useActionData();

  return (
    <div>
      <Header />
      {/* <Transactions transactions={loaderData} /> */}
      {/* <Outlet />  */}
      <AddTransactionContainer newTransaction={newTransaction} /> 
      <Footer /> 
    </div>
  );
}

export default AddTransaction;