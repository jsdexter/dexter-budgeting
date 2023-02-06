import { Outlet } from "@remix-run/react";
import Footer from "~/components/Footer";
import Header from "~/components/Header";
import AddTransactionContainer from "../../components/AddTransactionContainer"

function AddTransaction() {

  return (
    <div>
      <Header />
      {/* <Transactions transactions={loaderData} /> */}
      {/* <Outlet />  */}
      <AddTransactionContainer /> 
      <Footer /> 
    </div>
  );
}

export default AddTransaction;