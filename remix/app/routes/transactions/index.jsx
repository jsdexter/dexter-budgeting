import Footer from "~/components/Footer";
import { TransactionContainer } from "~/components/TransactionContainer";
import { useLoaderData, Outlet, LiveReload } from "@remix-run/react";
import Header from "~/components/Header";
import { prisma } from "~/db.server";

export async function loader() {
  const recurring = {
    transactions: await prisma.transaction.findMany({})
  };

  return recurring;
};

function Transactions() {
  const { transactions } = useLoaderData();

  return (
    <div>
      <Header />
      <TransactionContainer transactions={transactions} />
      <Outlet />
      <LiveReload /> 
      <Footer />
    </div>
  );
}

export default Transactions;