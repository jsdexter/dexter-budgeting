import { Link } from "@remix-run/react";
import { monthlyCron } from "cron/node";
import {format} from "date-fns"

export const TransactionContainer = ({transactions, shouldLinkToTransaction}) => {
  const itemDueDate = (transactionDate) => format(new Date(transactionDate), 'yyyy-MM-dd');
  const transactionColor = {
    "bill": "flex flex-col max-w-screen-2xl mx-2 py-3 px-6 bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700",
    "income": "flex flex-col max-w-screen-2xl mx-2 py-3 px-6 bg-white border border-cyan-200 rounded-lg shadow-md hover:bg-cyan-100 dark:bg-cyan-900 dark:border-cyan-700 dark:hover:bg-cyan-700",
    "isPaid": "flex flex-col max-w-screen-2xl mx-2 py-3 px-6 bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 dark:bg-slate-400 dark:border-slate-400 dark:hover:bg-gray-700",
  }

  // monthlyCron.start()

  const transactionBackground = (transaction) => {
    if (transaction.isPaid === true) {
      return transactionColor.isPaid
    } else if (transaction.type === "Bill") {
      return transactionColor.bill
    }
    return transactionColor.income;
  }
  
  const handleClick = (id) => {
    // console.log(`Transaction ID: ${transactionId}`)
  }
  
  return transactions.map((transaction) => {
    const typeOfRoute = shouldLinkToTransaction ? "transactions" : "transactions/settings";
    
    return (
      <Link to={`/${typeOfRoute}/${transaction.id}`}
       key={transaction.id}
       className={transactionBackground(transaction)}>
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
              Due Date: {itemDueDate(transaction.dueDate)}
            </h5>
          </div>
        </div>
      </Link>
    )
  });
}
