import Footer from "~/components/Footer";
import { TransactionContainer } from "~/components/TransactionContainer";
import { useLoaderData, Outlet, LiveReload } from "@remix-run/react";
import Header from "~/components/Header";
import { prisma } from "~/db.server";

export async function loader(params) {
  const transaction = {
    transactions: await prisma.recurring.findMany({
      where: { id: params.id }
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

function Settings() {
  const { transactions } = useLoaderData();

  return (
    <div>
      <Header />
      <TransactionContainer shouldLinkToTransaction={false} transactions={transactions} />
      <Outlet />
      <LiveReload /> 
      <Footer />
    </div>
  );
}

export default Settings;