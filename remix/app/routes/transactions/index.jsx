import Footer from "~/components/Footer";
import { TransactionContainer } from "~/components/TransactionContainer";
import { useLoaderData, Outlet, LiveReload } from "@remix-run/react";
import Header from "~/components/Header";
import { prisma } from "~/db.server";

export async function loader() {
  const transaction = {
    transactions: await prisma.transaction.findMany({
      where: { isDeleted: false }
    })
  };

  // const recurring = {
  //   recurring: await prisma.recurring.findMany({
  //     where: {  }
  //   })
  // }

  // return {transaction, recurring};
  return transaction;
};

function Transactions() {
  const { transactions } = useLoaderData();
  console.log("All my transactions + recurring: " + JSON.stringify(transactions));

  return (
    <div>
      <Header />
      <TransactionContainer shouldLinkToTransaction={true} transactions={transactions} />
      <Outlet />
      <LiveReload /> 
      <Footer />
    </div>
  );
}

export default Transactions;