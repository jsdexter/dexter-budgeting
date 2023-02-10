import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import Header from "~/components/Header";
import { EditTransactionContainer } from "~/components/EditTransactionContainer";
import { prisma } from "~/db.server";

export async function loader({params}) {
  const transaction = await prisma.transaction.findUnique({
    where: { id: params.id}
  });

  if(!transaction) throw new Error("Transaction not found")

  const data = {transaction};
  return data
} 

function EditTransaction() {
  const {transaction} = useLoaderData();

  return (
    <div className="mt-24">
      <Header />
      {/* <Transactions transactions={loaderData} /> */}
      {/* <Outlet />  */}
      <EditTransactionContainer transaction={transaction} /> 
    </div>
  );
}

export default EditTransaction;
