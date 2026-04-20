import { json, redirect } from "@remix-run/node";
import { Form, Link, useLoaderData } from "@remix-run/react";
import { requireUserId } from "~/session.server";
import { getBillById, updateBill, deactivateBill } from "~/models/bill.server";
import { getCategories } from "~/models/category.server";
import Layout from "~/components/Layout";
import { formatCurrency } from "~/utils";

export async function loader({ request, params }) {
  const userId = await requireUserId(request);
  const [bill, categories] = await Promise.all([
    getBillById(params.id, userId),
    getCategories(userId),
  ]);
  if (!bill) throw new Response("Not Found", { status: 404 });
  return json({ bill, categories });
}

export async function action({ request, params }) {
  const userId = await requireUserId(request);
  const formData = await request.formData();
  const intent = formData.get("intent");

  if (intent === "delete") {
    await deactivateBill(params.id, userId);
    return redirect("/bills");
  }

  const name = formData.get("name");
  const amount = parseFloat(formData.get("amount"));
  const dueDay = parseInt(formData.get("dueDay"), 10);
  const categoryId = formData.get("categoryId") || null;
  const accountNumber = formData.get("accountNumber") || null;
  const website = formData.get("website") || null;
  const notes = formData.get("notes") || null;

  await updateBill(params.id, userId, { name, amount, dueDay, categoryId, accountNumber, website, notes });
  return redirect("/bills");
}

export default function EditBill() {
  const { bill, categories } = useLoaderData();

  return (
    <Layout>
      <div className="p-8 max-w-lg">
        <Link to="/bills" className="text-gray-500 hover:text-gray-300 text-sm">← Back to Bills</Link>
        <h2 className="text-2xl font-bold mt-4 mb-8">Edit Bill</h2>

        <Form method="post" className="space-y-5">
          <Field label="Bill Name">
            <input name="name" type="text" defaultValue={bill.name} className={input} />
          </Field>

          <div className="grid grid-cols-2 gap-4">
            <Field label="Amount ($)">
              <input name="amount" type="number" step="0.01" defaultValue={bill.amount} className={input} />
            </Field>
            <Field label="Due Day of Month">
              <input name="dueDay" type="number" min="1" max="31" defaultValue={bill.dueDay} className={input} />
            </Field>
          </div>

          <Field label="Category">
            <select name="categoryId" defaultValue={bill.categoryId ?? ""} className={input}>
              <option value="">No category</option>
              {categories.map((c) => (
                <option key={c.id} value={c.id}>{c.name}</option>
              ))}
            </select>
          </Field>

          <Field label="Account Number">
            <input name="accountNumber" type="text" defaultValue={bill.accountNumber ?? ""} className={input} />
          </Field>

          <Field label="Website">
            <input name="website" type="url" defaultValue={bill.website ?? ""} className={input} />
          </Field>

          <Field label="Notes">
            <textarea name="notes" rows={3} defaultValue={bill.notes ?? ""} className={input} />
          </Field>

          <div className="flex items-center justify-between pt-2">
            <div className="flex gap-3">
              <button type="submit" name="intent" value="update" className="bg-indigo-600 hover:bg-indigo-500 text-white px-6 py-2 rounded-lg font-medium transition">
                Save Changes
              </button>
              <Link to="/bills" className="px-6 py-2 rounded-lg text-gray-400 hover:text-white transition">
                Cancel
              </Link>
            </div>
            <button
              type="submit"
              name="intent"
              value="delete"
              onClick={(e) => { if (!confirm("Delete this bill?")) e.preventDefault(); }}
              className="text-red-500 hover:text-red-400 text-sm transition"
            >
              Delete
            </button>
          </div>
        </Form>

        {bill.entries?.length > 0 && (
          <div className="mt-10 border-t border-gray-800 pt-8">
            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">Recent History</h3>
            <div className="space-y-2">
              {bill.entries.map((entry) => (
                <div key={entry.id} className="flex justify-between text-sm bg-gray-900 rounded-lg px-4 py-3 border border-gray-800">
                  <span className="text-gray-400">
                    {new Date(entry.dueDate).toLocaleDateString("en-US", { month: "long", year: "numeric" })}
                  </span>
                  <span className="font-medium">{formatCurrency(entry.amountDue)}</span>
                  <span className={entry.isPaid ? "text-green-400" : "text-red-400"}>
                    {entry.isPaid ? "Paid" : "Unpaid"}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
}

const input = "w-full bg-gray-900 border border-gray-700 rounded-lg px-3 py-2 text-white placeholder-gray-600 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500";

function Field({ label, children }) {
  return (
    <div>
      <label className="block text-sm text-gray-400 mb-1.5">{label}</label>
      {children}
    </div>
  );
}
