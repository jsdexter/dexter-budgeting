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
  const frequency = formData.get("frequency".toLowerCase());

  const transaction = await prisma.transaction.findUnique({
    where: { transactionId: params.id}
  });

  const recurringId = transaction.recurringId;

  const billFields = { name, accountNumber, address, city, state, zip, amountDue, dueDate, type, frequency, recurringId, };
  const recurringFields = { name, dueDate, frequency, }

  if(!transaction) throw new Error("Transaction not found");

  if (intent === "delete") {
    await prisma.transaction.update({ 
      where: { 
        transactionId: params.id,
      },
      data: {
        isDeleted: true,
        recurringId: null,
      },
    });
    await prisma.recurring.delete({
      where: {
        id: recurringId
      }
    });
    return redirect("/transactions");
  }

  if (intent === "update") {
    await prisma.transaction.update({ 
      data: billFields, 
      where: { 
        transactionId: params.id,
       } })
    await prisma.recurring.update({
      data: recurringFields,
      where: {
        id: recurringId
      }
    })
    return redirect("/transactions");
  }

  if (intent === "paid") {
    const isPaid = transaction.isPaid;
    
    await prisma.transaction.update({ 
      where: { 
        transactionId: params.id,
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

// export async function loader({ params }) {
//   const transaction = await prisma.recurring.findUnique({
//     where: { id: params.id}
//   });

export async function loader({ params }) {
  const transaction = await prisma.transaction.findUnique({
    where: { transactionId: params.id},
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