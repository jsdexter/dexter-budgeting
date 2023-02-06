import { redirect } from "@remix-run/server-runtime";
import { useState } from "react";
import { json } from "@remix-run/node";
import { Link, useLoaderData, useNavigate } from "@remix-run/react";
import { useEffect } from "react";

// export async function loader() {
//   const transactions = await getTransactions() 
//     return json({ transactions });
// }

export const TransactionContainer = ({transactions}) => {
  
  const handleClick = (id) => {
    console.log(`Transaction ID: ${id}`)
  }
  
  return transactions.map((transaction) => {
    return (
      <Link to={`/transactions/${transaction.id}`}
       key={transaction.id}
       className="flex flex-col max-w-screen-2xl mx-2 py-3 px-6 bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <div className="flex flex-row justify-between">
          <div className="flex flex-col">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {transaction.name}
              
            </h5>
          </div>
          <div className="flex flex-col">
            <h5 className="mb-2 text-right tracking-tight text-gray-900 dark:text-white">
              Amount: ${transaction.amountDue}
            </h5>
            <h5 className="mb-2 text-right tracking-tight text-gray-900 dark:text-white">
              Due Date: {transaction.dueDate}
            </h5>
          </div>
        </div>
      </Link>
    )
  });
}
