import {format} from "date-fns"
import { Form, useTransition } from '@remix-run/react';


export const EditTransactionContainer = (transaction) => {

  return (
    <div key={transaction.id}>
    <div>
      <Form method="post">
      {/* <form> */}
        <div className="mb-6 mx-2">
          <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-900">Name</label>
          <input type="name" name="name" id="name" defaultValue={transaction.transaction.name} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
        </div>
        <div className="mb-6 mx-2">
            <label htmlFor="accountNumber" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-900">Account Number</label>
            <input type="accountNumber" id="accountNumber" name="accountNumber" defaultValue={transaction.transaction.accountNumber} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
        </div>
        <div className="mb-6 mx-2">
          <label htmlFor="address" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-900">Address</label>
          <input type="address" id="address" defaultValue={transaction.transaction.address} name="address" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
        </div>
        <div className="flex flex-row mb-6 justify-center mx-2">
          <div className="flex flex-col w-1/3 mx-2">
            <label htmlFor="city" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-900">City</label>
            <input type="city" id="city" defaultValue={transaction.transaction.city} name="city" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
          </div>
          <div className="flex flex-col w-1/3 mx-2">
            <label htmlFor="state" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-900">State</label>
            <input type="state" id="state" defaultValue={transaction.transaction.state} name="state" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
          </div>
          <div className="flex flex-col w-1/3 mx-2">
            <label htmlFor="zip" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-900">Zip Code</label>
            <input type="zip" id="zip" defaultValue={transaction.transaction.zip} name="zip" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
          </div>
        </div>
        <div className="flex flex-row mb-6 justify-center mx-2">
          <div className="flex flex-col w-1/3 mx-2">
            <label htmlFor="amountDue" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-900">Amount</label>
            <input type="amountDue" id="amountDue" defaultValue={transaction.transaction.amountDue} name="amountDue" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
          </div>
          <div className="flex flex-col w-1/3 mx-2">
            <label htmlFor="dueDate" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-900">Due Date</label>
            <input type="dueDate" id="dueDate" name="dueDate" defaultValue={format(new Date(transaction.transaction.dueDate), 'yyyy-MM-dd')} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
          </div>
          <div className="flex flex-col w-1/3 mx-2">
            <label htmlFor="type" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-900">Type</label>
            <select type="type" id="type" name="type" defaultValue={transaction.transaction.type} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              <option>Bill</option>
              <option>Income</option>
            </select>
          </div>
        </div>
        <div className="flex flex-row justify-center">
          <button type="submit" name="intent" value="update" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 mx-5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Save</button>
          <button type="submit" name="intent" value="paid" className="self-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 mx-5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Paid</button>
          <button type="submit" name="intent" value="delete" className="self-center text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 mx-5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">Delete</button>
        </div>
      </Form>
      {/* </form> */}
    </div>
    </div>
  )
};
