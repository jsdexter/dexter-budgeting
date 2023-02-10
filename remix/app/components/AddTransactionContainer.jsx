import { Form } from "@remix-run/react";

function AddTransactionContainer() {

    return (
      <div>
        <Form method="post">
          <div className="mb-6 mx-2 mt-10">
            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-900">Name</label>
            <input type="name" id="name" name="name"  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
          </div>
          <div className="mb-6 mx-2">
              <label htmlFor="accountNumber" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-900">Account Number</label>
              <input type="accountNumber" id="accountNumber" name="accountNumber"  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
          </div>
          <div className="mb-6 mx-2">
            <label htmlFor="address" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-900">Address</label>
            <input type="address" id="address" name="address" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
          </div>
          <div className="flex flex-row mb-6 justify-center mx-2">
            <div className="flex flex-col w-1/3 mx-2">
              <label htmlFor="city" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-900">City</label>
              <input type="city" id="city" name="city" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
            </div>
            <div className="flex flex-col w-1/3 mx-2">
              <label htmlFor="state" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-900">State</label>
              <input type="state" id="state" name="state" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
            </div>
            <div className="flex flex-col w-1/3 mx-2">
              <label htmlFor="zip" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-900">Zip Code</label>
              <input type="zip" id="zip" name="zip" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
            </div>
          </div>
          <div className="flex flex-row mb-6 justify-center mx-2">
            <div className="flex flex-col w-1/3 mx-2">
              <label htmlFor="amountDue" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-900">Amount</label>
              <input type="amountDue" id="amountDue" name="amountDue" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
            </div>
            <div className="flex flex-col w-1/3 mx-2">
              <label htmlFor="dueDate" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-900">Due Date</label>
              <input type="date" id="date" name="dueDate" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
            </div>
            <div className="flex flex-col w-1/3 mx-2">
              <label htmlFor="type" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-900">Transaction Type</label>
              <select id="type" name="type" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option>Bill</option>
                <option>Income</option>
              </select>
            </div>
          </div>
          <div className="flex flex-row justify-center">
            <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Save</button>
          </div>
        </Form>
      </div>
    )
};

export default AddTransactionContainer;