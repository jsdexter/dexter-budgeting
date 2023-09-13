// import prisma from "@prisma/client";
import { prisma } from '~/db.server';
const nodeCron = require("node-cron");
const { v4: uuid } = require('uuidv4');

//If all transactions need to be deleted: 
// await prisma.transaction.deleteMany({})
//   try {
//     const getMonthly = await prisma.transaction.findMany({
//       where: {frequency: "monthly", isDeleted: false}
//     })

export const monthlyCron = nodeCron.schedule("* * * * * *", async () => {
  try {
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth();
    const currentYear = currentDate.getFullYear();

    const recurringTransactions = await prisma.recurring.findMany({
      include: {
        transactions: true,
      },
    });

    

    recurringTransactions.forEach(async (recurring) => {
      const lastMonthlyTransaction = recurring.transactions
        .filter((transaction) => transaction.frequency === "monthly")
        .sort((a, b) => new Date(b.dueDate) - new Date(a.dueDate))[0];

      if (lastMonthlyTransaction) {
        const lastMonthlyDate = new Date(lastMonthlyTransaction.dueDate);
        const lastMonthlyMonth = lastMonthlyDate.getMonth();
        const lastMonthlyYear = lastMonthlyDate.getFullYear();

        // If the last monthly transaction was in a previous month, create a new one for next month
        if (lastMonthlyMonth !== currentMonth || lastMonthlyYear !== currentYear) {
          const newTransaction = await prisma.transaction.create({
            data: {
              name: recurring.name,
              dueDate: new Date(currentYear, currentMonth + 1, recurring.dueDate.getDate()),
              address: lastMonthlyTransaction.address,
              city: lastMonthlyTransaction.city,
              state: lastMonthlyTransaction.state,
              zip: lastMonthlyTransaction.zip,
              accountNumber: lastMonthlyTransaction.accountNumber,
              amountDue: lastMonthlyTransaction.amountDue,
              frequency: "monthly",
              type: "Bill",
              recurringId: recurring.id,
            },
          });

          console.log(`Created new transaction ${newTransaction.id} for ${recurring.name} for next month.`);
        }

        console.log("Something")
      }
    });
  } catch (error) {
    console.error(error);
  }
});


// export const monthlyCron = nodeCron.schedule('* * * * *', async () => {
//   console.log('Running the cron job...');

//   const recurring = {
//     recurringTransactions: await prisma.recurring.findMany({
//       where: {
//         frequency: "Monthly",
//       }
//     }) 
//   };

//   for (const transaction of recurring) {
//     const today = new Date(); 
//     const nextMonth = new Date(today.getFullYear(), today.getMonth() + 1, 1)
//     const alreadyCreated = await prisma.transaction.findLast({
//       where: {
//         frequency: "monthly",
//       }
//     })
//     if (alreadyCreated) {
//       console.log("This has already been created: " + transaction.dueDate)
//     }
  
//     if (!alreadyCreated) {
//       console.log("This has not been created: " + transaction.dueDate)
//     }
//   }


// })



//create a new table - reoccurringTransactions
// name
// frequency
// updatedAt
// dueDate
// id 

// First look into the new reoccurring table. Initially it will be empty. 
//


// export const monthlyCron = nodeCron.schedule('* * * * *', async () => {
//   const recurring = {
//     transactions: await prisma.recurring.findMany({
//       where: {
//         frequency: "monthly",
//       }
//     })
//   };

//   for (const transaction of recurring) {
//     const today = new Date();
//     const nextMonth = new Date(today.getFullYear(), today.getMonth() + 1, 1);
//     const alreadyCreated = await prisma.transaction.findLast({
//       where: {
//         updatedAt: 
//         dueDate: nextMonth.toISOString(),
//         frequency: 'monthly',
//         isPaid: false,
//       }
//     });

//     if (!alreadyCreated) {
//       console.log("Here is my next Month: " + transactions)
//       await prisma.transaction.create({
//         data: {
//           name: transaction.name,
//           dueDate: nextMonth.toISOString(),
//           address: transaction.address,
//           city: transaction.city,
//           state: transaction.state,
//           zip: transaction.zip,
//           accountNumber: transaction.accountNumber,
//           amountDue: transaction.amountDue,
//           frequency: transaction.frequency,
//           type: transaction.type
//         },
//       });
//     }
//   }


  // console.log("Here is my next Month: " + transactions)
    // console.log("Here is my already created: " + alreadyCreated)
    
// });


// nodeCron.schedule("* * * * *", async () => {
//   await addSecondMonthly();
// })

// export const addSecondMonthly = async () => {
//   const lastMonthlyItem = await prisma.transaction.findLast();

//   if (!lastMonthlyItem) {
//     await prisma.transaction.create({
//       data: {
//         id: uuid,
//         name: transaction.name,
//         // dueDate: new Date(transaction.dueDate.setMonth(transaction.dueDate.getMonth() + 1)),
//         dueDate: new Date(),
//         address: transaction.address,
//         city: transaction.city,
//         state: transaction.state,
//         zip: transaction.zip,
//         accountNumber: transaction.accountNumber,
//         amountDue: transaction.amountDue,
//         frequency: transaction.frequency,
//         type: transaction.type,
//         isPaid: false,
//       }
//     });
//   } else {
//     const lastMonth = lastMonthlyItem.dueDate.getMonth();
//     const currentMonth = new Date().getMonth();

//     if (lastMonth !== currentMonth) {
//       await prisma.transaction.create({
//         data: {
//           id: uuid,
//           name: transaction.name,
//           // dueDate: new Date(transaction.dueDate.setMonth(transaction.dueDate.getMonth() + 1)),
//           dueDate: new Date(),
//           address: transaction.address,
//           city: transaction.city,
//           state: transaction.state,
//           zip: transaction.zip,
//           accountNumber: transaction.accountNumber,
//           amountDue: transaction.amountDue,
//           frequency: transaction.frequency,
//           type: transaction.type,
//           isPaid: false,
//         }
//       })
//     }
//   }
// } 

//Runs at midnight on the first day of the month
// export const monthlyCron = nodeCron.schedule("0 0 1 * *", async () => {
// export const monthlyCron = nodeCron.schedule("* * * * *", async () => {
//   try {
//     const getMonthly = await prisma.transaction.findMany({
//       where: {frequency: "monthly", isDeleted: false}
//     })

//     for (const transaction of getMonthly) {
//       for (let i = 0; 1 < 3; i++) {
//         await prisma.transaction.create({
//           data: {
//             id: uuid,
//             name: transaction.name,
//             dueDate: new Date(transaction.dueDate.setMonth(transaction.dueDate.getMonth() + 1)),
//             address: transaction.address,
//             city: transaction.city,
//             state: transaction.state,
//             zip: transaction.zip,
//             accountNumber: transaction.accountNumber,
//             amountDue: transaction.amountDue,
//             frequency: transaction.frequency,
//             type: transaction.type,
//             isPaid: false,
//           }
//         })
//       }
//     }
//     console.log("Updated the row", getMonthly);
//   } catch (err) {
//     console.error(err);
//     monthlyCron.stop();
//   };

//   console.log('done')
//   monthlyCron.stop();

// });

// export const recurringTransactions = nodeCron.schedule("* * * * *", async () => {
//   const currentDate = new Date();
//     // Your display logic here...

//   const monthlyItems = await prisma.transaction.findMany({
//     where: {
//       frequency: "monthly", 
//       isDeleted: false,
//       // dueDate: 
//     }
//   })

//   //display monthly transactions
//   for (let item of monthlyItems) {
//     // console.log("All the monthly items: " + item.name)
//     const monthlyDisplay = new Date(currentDate.getFullYear(), currentDate.getMonth(), item.dueDate.getDate());
//     if (monthlyDisplay.getMonth() === currentDate.getMonth()) {
//       console.log(`Displaying monthly item "${item.name}" on ${monthlyDisplay.getMonth() + 1}/${monthlyDisplay.getDate()}/${monthlyDisplay.getFullYear()}`);
//   } else {
//     const nextMonth = new Date(currentDate.getFullYear, currentDate.getMonth() + 1);
//     const newDueDate = new Date(nextMonth.getFullYear(), nextMonth.getMonth(), item.dueDate.getDate());

//     console.log("Here is my new Due Date: " + newDueDate);
//     await prisma.transaction.update({ 
//       where: { id: item.id },
//       data: { dueDate: newDueDate },
//      })
//   }
// }

//   const weeklyItems = await prisma.transaction.findMany({
//     where: {
//       frequency: "weekly", 
//       isDeleted: false,
//       // dueDate: 
//     }
//   })

  //display weekly transactions
  // for (const item of weeklyItems) {
  //   const dueDate = new Date(item.dueDate);
  //   const daysUntilDue = (7 + (dueDate.getDay() - currentDate.getDay())) % 7;
  //   const displayDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() + daysUntilDue)

  //   console.log("Due Date: " + dueDate);
  //   console.log("DueDate.getday: " + dueDate.getDay());
  //   console.log("Days until due: " + daysUntilDue);
  //   console.log("Display Date: " + displayDate);
  //   console.log(`Displaying weekly item "${item.name} on ${displayDate.getMonth() + 1}/${displayDate.getDate()}/${displayDate.getFullYear()}`)
  // }
// })