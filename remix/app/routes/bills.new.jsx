import { json, redirect } from "@remix-run/node";
import { Form, Link, useActionData, useLoaderData } from "@remix-run/react";
import { requireUserId } from "~/session.server";
import { createBill } from "~/models/bill.server";
import { getCategories } from "~/models/category.server";
import Layout from "~/components/Layout";

export async function loader({ request }) {
  const userId = await requireUserId(request);
  return json({ categories: await getCategories(userId) });
}

export async function action({ request }) {
  const userId = await requireUserId(request);
  const formData = await request.formData();

  const name = formData.get("name");
  const amount = parseFloat(formData.get("amount"));
  const dueDay = parseInt(formData.get("dueDay"), 10);
  const categoryId = formData.get("categoryId") || null;
  const accountNumber = formData.get("accountNumber") || null;
  const website = formData.get("website") || null;
  const notes = formData.get("notes") || null;

  const errors = {};
  if (!name) errors.name = "Name is required";
  if (isNaN(amount) || amount <= 0) errors.amount = "Enter a valid amount";
  if (isNaN(dueDay) || dueDay < 1 || dueDay > 31) errors.dueDay = "Enter a day between 1 and 31";

  if (Object.keys(errors).length > 0) return json({ errors }, { status: 400 });

  await createBill(userId, { name, amount, dueDay, categoryId, accountNumber, website, notes });
  return redirect("/bills");
}

export default function NewBill() {
  const { categories } = useLoaderData();
  const actionData = useActionData();

  return (
    <Layout>
      <div className="p-8 max-w-lg">
        <Link to="/bills" className="text-gray-500 hover:text-gray-300 text-sm">← Back to Bills</Link>
        <h2 className="text-2xl font-bold mt-4 mb-8">Add New Bill</h2>

        <Form method="post" className="space-y-5">
          <Field label="Bill Name" error={actionData?.errors?.name}>
            <input name="name" type="text" placeholder="e.g. Electric Bill" autoFocus className={input} />
          </Field>

          <div className="grid grid-cols-2 gap-4">
            <Field label="Amount ($)" error={actionData?.errors?.amount}>
              <input name="amount" type="number" step="0.01" min="0" placeholder="0.00" className={input} />
            </Field>
            <Field label="Due Day of Month" error={actionData?.errors?.dueDay}>
              <input name="dueDay" type="number" min="1" max="31" placeholder="1–31" className={input} />
            </Field>
          </div>

          <Field label="Category">
            <select name="categoryId" className={input}>
              <option value="">No category</option>
              {categories.map((c) => (
                <option key={c.id} value={c.id}>{c.name}</option>
              ))}
            </select>
          </Field>

          <Field label="Account Number (optional)">
            <input name="accountNumber" type="text" placeholder="Account or policy number" className={input} />
          </Field>

          <Field label="Website (optional)">
            <input name="website" type="url" placeholder="https://..." className={input} />
          </Field>

          <Field label="Notes (optional)">
            <textarea name="notes" rows={3} placeholder="Any notes..." className={input} />
          </Field>

          <div className="flex gap-3 pt-2">
            <button type="submit" className="bg-indigo-600 hover:bg-indigo-500 text-white px-6 py-2 rounded-lg font-medium transition">
              Add Bill
            </button>
            <Link to="/bills" className="px-6 py-2 rounded-lg text-gray-400 hover:text-white transition">
              Cancel
            </Link>
          </div>
        </Form>
      </div>
    </Layout>
  );
}

const input = "w-full bg-gray-900 border border-gray-700 rounded-lg px-3 py-2 text-white placeholder-gray-600 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500";

function Field({ label, error, children }) {
  return (
    <div>
      <label className="block text-sm text-gray-400 mb-1.5">{label}</label>
      {children}
      {error && <p className="mt-1 text-xs text-red-400">{error}</p>}
    </div>
  );
}
