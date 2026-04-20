import { json } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import { requireUserId } from "~/session.server";
import { getBills } from "~/models/bill.server";
import Layout from "~/components/Layout";
import { formatCurrency, getDaySuffix } from "~/utils";

export async function loader({ request }) {
  const userId = await requireUserId(request);
  const bills = await getBills(userId);
  return json({ bills });
}

export default function BillsIndex() {
  const { bills } = useLoaderData();

  return (
    <Layout>
      <div className="p-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl font-bold">Bills</h2>
            <p className="text-gray-500 text-sm mt-1">Your recurring monthly bills</p>
          </div>
          <Link
            to="/bills/new"
            className="bg-indigo-600 hover:bg-indigo-500 text-white px-4 py-2 rounded-lg text-sm font-medium transition"
          >
            + Add Bill
          </Link>
        </div>

        {bills.length === 0 ? (
          <div className="text-center py-24">
            <p className="text-4xl mb-4">📋</p>
            <p className="text-gray-400 mb-3">No bills yet</p>
            <Link to="/bills/new" className="text-indigo-400 hover:text-indigo-300 text-sm">
              Add your first recurring bill →
            </Link>
          </div>
        ) : (
          <div className="space-y-3">
            {bills.map((bill) => (
              <BillRow key={bill.id} bill={bill} />
            ))}
          </div>
        )}
      </div>
    </Layout>
  );
}

function BillRow({ bill }) {
  return (
    <div className="bg-gray-900 border border-gray-800 rounded-xl p-5 flex items-center justify-between hover:border-gray-700 transition">
      <div className="flex items-center gap-4">
        <div>
          <p className="font-medium">{bill.name}</p>
          <p className="text-sm text-gray-500 mt-0.5">
            Due {bill.dueDay}{getDaySuffix(bill.dueDay)} of each month
            {bill.accountNumber && ` · #${bill.accountNumber}`}
          </p>
        </div>
        {bill.category && (
          <span
            className="px-2 py-0.5 rounded-full text-xs font-medium"
            style={{
              backgroundColor: bill.category.color + "22",
              color: bill.category.color,
            }}
          >
            {bill.category.name}
          </span>
        )}
      </div>
      <div className="flex items-center gap-6">
        <p className="text-lg font-semibold">{formatCurrency(bill.amount)}</p>
        <Link to={`/bills/${bill.id}`} className="text-gray-500 hover:text-white text-sm transition">
          Edit →
        </Link>
      </div>
    </div>
  );
}
