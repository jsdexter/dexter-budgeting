
import { Link } from '@remix-run/react';
import AddTransaction from '../routes/transactions/addTransaction';

export default function Footer() {
  return (
    <footer className="flex justify-center fixed bottom-0 left-0 z-20 w-full p-4 bg-white border-t border-gray-200 shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800 dark:border-gray-600">
        <Link to="AddTransaction">
            <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 
              focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg 
              text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 
              dark:focus:ring-blue-800">
              Add Transaction
            </button>
          </Link>
    </footer>
  )
}