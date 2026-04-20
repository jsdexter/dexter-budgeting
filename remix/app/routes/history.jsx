import { json } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import { requireUserId } from "~/session.server";
import { getEntriesForMonth } from "~/models/billEntry.server";
import Layout from "~/components/Layout";
import { formatCurrency, getMonthName } from "~/utils";

export async function loader({ request }) {
  const userId = await requireUserId(request);
  const url = new URL(request.url);
  const now = new Date();
  const year = parseInt(url.searchParams.get("year") ?? now.getFullYear(), 10);
  const month = parseInt(url.searchParams.get("month") ?? now.getMonth(), 10);

  const entries = await getEntriesForMonth(userId, year, month);
  const totalDue = entries.reduce((sum, e) => sum + e.amountDue, 0);
  const totalPaid = entries.filter((e) => e.isPaid).reduce((sum, e) => sum + (e.paidAmount ?? e.amountDue), 0);

  return json({ entries, totalDue, totalPaid, month, year });
}

export default function History() {
  const { entries, totalDue, totalPaid, month, year } = useLoaderData();

  const months = [];
  const now = new Date();
  for (let i = 0; i < 12; i++) {
    const d = new Date(now.getFullYear(), now.getMonth() - i, 1);
    months.push({ year: d.getFullYear(), month: d.getMonth() });
  }

  return (
    <Layout>
      <div className="p-8">
        <h2 className="text-2xl font-bold mb-8">History</h2>

        <div className="flex gap-6">
          <div className="w-44 flex-shrink-0">
            <div className="bg-gray-900 rounded-xl border border-gray-800 overflow-hidden">
              {months.map((m) => (
                <Link
                  key={`${m.year}-${m.month}`}
                  to={`/history?year=${m.year}&month=${m.month}`}
                  className={`block px-4 py-2.5 text-sm border-b border-gray-800 last:border-0 transition ${
                    m.year === year && m.month === month
                      ? "bg-indigo-600 text-white"
                      : "text-gray-400 hover:text-white hover:bg-gray-800"
                  }`}
                >
                  {getMonthName(m.month).slice(0, 3)} {m.year}
                </Link>
              ))}
            </div>
          </div>

          <div className="flex-1">
            <div className="flex items-center justify-between mb-5">
              <h3 className="font-semibold text-lg">{getMonthName(month)} {year}</h3>
              <div className="flex gap-5 text-sm text-gray-400">
                <span>Due: <span className="text-white font-medium">{formatCurrency(totalDue)}</span></span>
                <span>Paid: <span className="text-green-400 font-medium">{formatCurrency(totalPaid)}</span></span>
                <span>Left: <span className="text-amber-400 font-medium">{formatCurrency(totalDue - totalPaid)}</span></span>
              </div>
            </div>

            {entries.length === 0 ? (
              <p className="text-gray-500 text-center py-16">No bills recorded for this month.</p>
            ) : (
              <div className="space-y-2">
                {entries.map((entry) => (
                  <div key={entry.id} className="bg-gray-900 rounded-xl border border-gray-800 px-5 py-4 flex items-center justify-between">
                    <div>
                      <p className="font-medium">{entry.bill.name}</p>
                      {entry.bill.category && (
                        <span className="text-xs" style={{ color: entry.bill.category.color }}>
                          {entry.bill.category.name}
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-6 text-sm">
                      <span className="text-gray-400">
                        Due {new Date(entry.dueDate).toLocaleDateString("en-US", { month: "short", day: "numeric" })}
                      </span>
                      <span className="font-medium">{formatCurrency(entry.amountDue)}</span>
                      <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${entry.isPaid ? "bg-green-900/40 text-green-400" : "bg-red-900/40 text-red-400"}`}>
                        {entry.isPaid ? "Paid" : "Unpaid"}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
}
