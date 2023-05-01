const { PrismaClient } = require("@prisma/client");
const db = new PrismaClient();

async function seed() {
  // Create a recurring transaction
  const recurring = await db.recurring.create({
    data: {
      name: "Monthly Bills",
      dueDate: new Date("2023-04-01"),
      frequency: "Monthly",
      updatedAt: new Date(),
    },
  });

  // Create transactions linked to the recurring transaction
  await Promise.all(
    getTransactions().map((transaction) => {
      return db.transaction.create({
        data: {
          ...transaction,
          recurringId: recurring.id,
        },
      });
    })
  );
}

seed();

function getTransactions() {
  return [
    {
      name: "First Bill",
      address: "123 Main St.",
      city: "Santa Monica",
      state: "CA",
      zip: "58745",
      accountNumber: "1321654546",
      amountDue: 123.56,
      frequency: "monthly",
      type: "Bill",
      isPaid: false,
      isDeleted: false,
      dueDate: new Date("2023-04-01"),
    },
    {
      name: "Second Bill",
      address: "123 Main St.",
      city: "Santa Clara",
      state: "CA",
      zip: "58745",
      accountNumber: "1321654546",
      amountDue: 123.56,
      frequency: "monthly",
      type: "Bill",
      isPaid: false,
      isDeleted: false,
      dueDate: new Date("2023-04-02"),
    },
    {
      name: "Third Bill",
      address: "123 Main St.",
      city: "Santa Clara",
      state: "CA",
      zip: "58745",
      accountNumber: "1321654546",
      amountDue: 123.56,
      frequency: "monthly",
      type: "Bill",
      isPaid: false,
      isDeleted: false,
      dueDate: new Date("2023-04-03"),
    },
  ];
}


// id              String    @id @default(uuid())
//   name            String    
//   dueDate         DateTime
//   address         String
//   city            String
//   state           String
//   zip             Int
//   accountNumber   String
//   amountDue       Int
//   month           String
//   type            String
//   isPaid          Boolean @default(false)