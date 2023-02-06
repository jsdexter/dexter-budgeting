import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import Header from "~/components/Header";
import { EditTransactionContainer } from "~/components/EditTransactionContainer";
const transactions = require("../../transactions.json");

export async function loader({params}) {

  return json(transactions[params.id]);
} 

function EditTransaction() {
  const loaderData = useLoaderData();
  console.log(loaderData);

  return (
    <div className="mt-24">
      <Header />
      {/* <Transactions transactions={loaderData} /> */}
      {/* <Outlet />  */}
      <EditTransactionContainer transaction={loaderData} /> 
    </div>
  );
}

export default EditTransaction;
