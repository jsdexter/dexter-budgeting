const {PrismaClient} = require('@prisma/client');
const db = new PrismaClient();

async function seed() {
  await Promise.all(
    getTransactions().map(transaction => {
      return db.transaction.create({ data: transaction })
    })
  )
}

seed();

function getTransactions() {
  return [
    {
      "name": "First Bill",
      "address": "123 Main St.",
      "city": "Santa Monica",
      "state": "CA",
      "zip": "58745",
      "accountNumber": "1321654546",
      "amountDue": 123.56,
      "frequency": "monthly",
      "type": "Bill",
      "isPaid": false,
    },    
    {
      "name": "Second Bill",
      "address": "123 Main St.",
      "city": "Santa Clara",
      "state": "CA",
      "zip": "58745",
      "accountNumber": "1321654546",
      "amountDue": 123.56,
      "frequency": "monthly",
      "type": "Bill",
      "isPaid": false,
    },
    {
      "name": "Third Bill",
      "address": "123 Main St.",
      "city": "Santa Clara",
      "state": "CA",
      "zip": "58745",
      "accountNumber": "1321654546",
      "amountDue": 123.56,
      "frequency": "monthly",
      "type": "Bill",
      "isPaid": false,
    },
  ]
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