import Footer from "~/components/Footer";
import { TransactionContainer } from "~/components/TransactionContainer";
import { useLoaderData, Outlet } from "@remix-run/react";
import Header from "~/components/Header";
import { prisma } from "~/db.server";

export async function loader() {
  const transactions = {
    transactions: await prisma.transaction.findMany({})
  };

  return transactions;
};

function Transactions() {
  const { transactions } = useLoaderData();

  return (
    <div>
      <Header />
      <TransactionContainer transactions={transactions} />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Transactions;