import { json } from "@remix-run/node";
import { Form, Link, useLoaderData } from "@remix-run/react";
import { requireUserId } from "~/session.server";
import { ensureEntriesForMonth, getEntriesForMonth, markPaid, markUnpaid } from "~/models/billEntry.server";
import Layout from "~/components/Layout";
import { formatCurrency, getMonthName } from "~/utils";

export async function loader({ request }) {
  const userId = await requireUserId(request);
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth();

  await ensureEntriesForMonth(userId, year, month);
  const entries = await getEntriesForMonth(userId, year, month);

  const totalDue = entries.reduce((sum, e) => sum + e.amountDue, 0);
  const totalPaid = entries
    .filter((e) => e.isPaid)
    .reduce((sum, e) => sum + (e.paidAmount ?? e.amountDue), 0);

  return json({
    entries,
    stats: { totalDue, totalPaid, remaining: totalDue - totalPaid },
    month: getMonthName(month),
    year,
  });
}

export async function action({ request }) {
  const formData = await request.formData();
  const intent = formData.get("intent");
  const entryId = formData.get("entryId");

  if (intent === "markPaid") await markPaid(entryId);
  else if (intent === "markUnpaid") await markUnpaid(entryId);

  return json({ ok: true });
}

export default function Dashboard() {
  const { entries, stats, month, year } = useLoaderData();

  return (
    <Layout>
      <div className="p-8">
        <div className="mb-8">
          <h2 className="text-2xl font-bold">{month} {year}</h2>
          <p className="text-gray-500 mt-1 text-sm">Monthly bill tracker</p>
        </div>

        <div className="grid grid-cols-3 gap-4 mb-8">
          <StatCard label="Total Due" value={formatCurrency(stats.totalDue)} color="text-white" />
          <StatCard label="Paid" value={formatCurrency(stats.totalPaid)} color="text-green-400" />
          <StatCard label="Remaining" value={formatCurrency(stats.remaining)} color="text-amber-400" />
        </div>

        {entries.length === 0 ? (
          <div className="text-center py-24">
            <p className="text-4xl mb-4">💸</p>
            <p className="text-gray-400 mb-3">No bills for this month</p>
            <Link to="/bills/new" className="text-indigo-400 hover:text-indigo-300 text-sm">
              Add your first bill →
            </Link>
          </div>
        ) : (
          <div className="bg-gray-900 rounded-xl border border-gray-800 overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-800 text-left">
                  <th className="px-6 py-3 text-xs text-gray-500 uppercase tracking-wider">Bill</th>
                  <th className="px-6 py-3 text-xs text-gray-500 uppercase tracking-wider">Category</th>
                  <th className="px-6 py-3 text-xs text-gray-500 uppercase tracking-wider">Due</th>
                  <th className="px-6 py-3 text-xs text-gray-500 uppercase tracking-wider">Amount</th>
                  <th className="px-6 py-3 text-xs text-gray-500 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-3"></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-800">
                {entries.map((entry) => (
                  <EntryRow key={entry.id} entry={entry} />
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </Layout>
  );
}

function StatCard({ label, value, color }) {
  return (
    <div className="bg-gray-900 rounded-xl p-5 border border-gray-800">
      <p className="text-xs text-gray-500 uppercase tracking-wider mb-2">{label}</p>
      <p className={`text-2xl font-bold ${color}`}>{value}</p>
    </div>
  );
}

function EntryRow({ entry }) {
  const dueDate = new Date(entry.dueDate).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
  });

  return (
    <tr className="hover:bg-gray-800/40 transition">
      <td className="px-6 py-4 font-medium">{entry.bill.name}</td>
      <td className="px-6 py-4">
        {entry.bill.category ? (
          <span
            className="px-2 py-0.5 rounded-full text-xs font-medium"
            style={{
              backgroundColor: entry.bill.category.color + "22",
              color: entry.bill.category.color,
            }}
          >
            {entry.bill.category.name}
          </span>
        ) : (
          <span className="text-gray-700 text-xs">—</span>
        )}
      </td>
      <td className="px-6 py-4 text-gray-400 text-sm">{dueDate}</td>
      <td className="px-6 py-4 font-medium">{formatCurrency(entry.amountDue)}</td>
      <td className="px-6 py-4">
        <span
          className={`px-2 py-0.5 rounded-full text-xs font-medium ${
            entry.isPaid
              ? "bg-green-900/40 text-green-400"
              : "bg-red-900/40 text-red-400"
          }`}
        >
          {entry.isPaid ? "Paid" : "Unpaid"}
        </span>
      </td>
      <td className="px-6 py-4">
        <Form method="post">
          <input type="hidden" name="entryId" value={entry.id} />
          <input type="hidden" name="intent" value={entry.isPaid ? "markUnpaid" : "markPaid"} />
          <button
            type="submit"
            className={`text-xs px-3 py-1 rounded-lg border transition ${
              entry.isPaid
                ? "border-gray-700 text-gray-400 hover:border-red-700 hover:text-red-400"
                : "border-gray-700 text-gray-400 hover:border-green-700 hover:text-green-400"
            }`}
          >
            {entry.isPaid ? "Mark Unpaid" : "Mark Paid"}
          </button>
        </Form>
      </td>
    </tr>
  );
}
