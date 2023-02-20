import { redirect } from "@remix-run/node";
import { useLoaderData, useActionData } from "@remix-run/react";
import Header from "~/components/Header";
import { EditTransactionContainer } from "~/components/EditTransactionContainer";
import { prisma } from "~/db.server";

export async function action({ request, params }) {
  const formData = await request.formData();
  const intent = formData.get("intent");

  const name = formData.get("name");
  const accountNumber = formData.get("accountNumber");
  const address = formData.get("address");
  const city = formData.get("city");
  const state = formData.get("state");
  const zip = formData.get("zip");
  const amountDue = parseFloat(formData.get("amountDue"));
  const dueDate = new Date(formData.get("dueDate"));
  const type = formData.get("type");

  const billFields = { name, accountNumber, address, city, state, zip, amountDue, dueDate, type };

  const transaction = await prisma.transaction.findUnique({
    where: { id: params.id}
  });

  if (intent === "delete") {
    await prisma.transaction.delete({ where: { id: params.id } })
    return redirect("/transactions");
  }

  if (intent === "update") {
    await prisma.transaction.update({ data: billFields, where: { id: params.id } })
    return redirect("/transactions");
  }

  if (intent === "paid") {
    const isPaid = transaction.isPaid;
    
    await prisma.transaction.update({ 
      where: { 
        id: params.id,
      },
      data: {
        isPaid: !isPaid,
      },
     })
     return redirect("/transactions");
  }

  if(!transaction) throw new Error("Transaction not found")

  const data = {transaction};
  return data
} 

export async function loader({ params }) {
    const transaction = await prisma.transaction.findUnique({
    where: { id: params.id}
  });

  if(!transaction) throw new Error("Transaction not found")

  const data = {transaction};
  return data;
} 


function EditTransaction() {
  const {transaction} = useLoaderData();
  const action = useActionData();

  return (
    <div className="mt-24">
      <Header />
      <EditTransactionContainer transaction={transaction} data={action} /> 
    </div>
  );
}

export default EditTransaction;