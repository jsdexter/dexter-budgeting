import { json, redirect } from "@remix-run/node";
import { useLoaderData, useActionData } from "@remix-run/react";
import Header from "~/components/Header";
import { EditTransactionContainer } from "~/components/EditTransactionContainer";
import { prisma } from "~/db.server";

export async function action({ request, params }) {
  const formData = await request.formData();
  const intent = formData.get("intent");

  if (intent === "delete") {
    await prisma.transaction.delete({ where: { id: params.id } })
    return redirect("/transactions");
  }

    const transaction = await prisma.transaction.findUnique({
    where: { id: params.id}
  });

  console.log("Here's my transaction: " + transaction)

  if(!transaction) throw new Error("Transaction not found")

  const data = {transaction};
  return data
} 

export async function loader({ request, params }) {
  // const formData = await request.formData();
  // const intent = formData.get("intent");

  // if (intent === "delete") {
  //   await prisma.transaction.delete({ where: { id: params.id } })
  //   return redirect("/transactions");
  // }

    const transaction = await prisma.transaction.findUnique({
    where: { id: params.id}
  });

  if(!transaction) throw new Error("Transaction not found")

  const data = {transaction};
  return data
} 


function EditTransaction() {
  const {transaction} = useLoaderData();
  const action = useActionData();

  return (
    <div className="mt-24">
      <Header />
      {/* <Transactions transactions={loaderData} /> */}
      {/* <Outlet />  */}
      <EditTransactionContainer transaction={transaction} data={action}/> 
    </div>
  );
}

export default EditTransaction;

// export async function loader({ request, params }) {
//   const formData = await request.formData();
//   const intent = formData.get("intent");

//   if (intent === "delete") {
//     await prisma.transaction.delete({ where: { id: params.id } })
//     return redirect("/transactions");
//   }

//   const name = formData.get("name");
//   console.log("Name: " + name)
//   const accountNumber = formData.get("accountNumber");
//   console.log("accountNumber: " + accountNumber)
//   const address = formData.get("address");
//   const city = formData.get("city");
//   const state = formData.get("state");
//   const zip = formData.get("zip");
//   const amountDue = parseFloat(formData.get("amountDue"));
//   const dueDate = new Date(formData.get("dueDate"));
//   const type = formData.get("type");

  // const updatedBillFields = { name, accountNumber, address, city, state, zip, amountDue, dueDate, type };
  // if (intent === "update") {
    
  //   await prisma.transaction.update({ params: updatedBillFields, where: { id: params.id }})
  // }

//   const transaction = await prisma.transaction.findUnique({
//     where: { id: params.id}
//   });

//   if(!transaction) throw new Error("Transaction not found")

//   const data = {transaction};
//   return data
// } 


// export async function deletePost(slug: string) {
//   return prisma.post.delete({ where: { slug } });
// }

// export async function updatePost(
//   post: Pick<Post, "slug" | "title" | "markdown">,
// ) {
//   return prisma.post.update({ data: post, where: { slug: post.slug } });
// }

// export async function action({ request, params }) {
//   const formData = await request.formData();
//   const intent = formData.get("intent");

//   if (intent === "delete") {
//     await prisma.transaction.delete({ where: { id: params.id } })
//     return redirect("/transactions");
//   }

  // const name = formData.get("name");
  // const accountNumber = formData.get("accountNumber");
  // const address = formData.get("address");
  // const city = formData.get("city");
  // const state = formData.get("state");
  // const zip = formData.get("zip");
  // const amountDue = parseFloat(formData.get("amountDue"));
  // const dueDate = new Date(formData.get("dueDate"));
  // const type = formData.get("type");

  // const updatedBillFields = { name, accountNumber, address, city, state, zip, amountDue, dueDate, type };
  // if (intent === "update") {
    
  //   await prisma.transaction.update({ transaction: updatedBillFields, where: { id: params.id }})
  // }
// }

// export async function action({ request, params }) {
  //   const formData = await request.formData();
  //   const intent = formData.get("intent");
  
  //   // if (intent === "delete") {
  //   //   await prisma.transaction.delete({ where: { id: params.id } })
  //   //   return redirect("/transactions");
  //   // }
  // }