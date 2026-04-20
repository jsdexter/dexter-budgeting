const { PrismaClient } = require("@prisma/client");
const bcrypt = require("bcryptjs");

const db = new PrismaClient();

async function seed() {
  const email = "demo@example.com";
  const passwordHash = await bcrypt.hash("password123", 10);

  const user = await db.user.upsert({
    where: { email },
    update: {},
    create: { email, passwordHash },
  });

  const [utilities, subscriptions, insurance] = await Promise.all([
    db.category.create({ data: { userId: user.id, name: "Utilities", color: "#3b82f6" } }),
    db.category.create({ data: { userId: user.id, name: "Subscriptions", color: "#8b5cf6" } }),
    db.category.create({ data: { userId: user.id, name: "Insurance", color: "#10b981" } }),
  ]);

  const bills = [
    { name: "Electric Bill", amount: 120, dueDay: 15, categoryId: utilities.id, accountNumber: "ELE-001" },
    { name: "Internet", amount: 80, dueDay: 5, categoryId: utilities.id, accountNumber: "INT-002" },
    { name: "Netflix", amount: 15.99, dueDay: 12, categoryId: subscriptions.id },
    { name: "Spotify", amount: 9.99, dueDay: 20, categoryId: subscriptions.id },
    { name: "Car Insurance", amount: 145, dueDay: 1, categoryId: insurance.id, accountNumber: "INS-2024" },
  ];

  const now = new Date();
  for (const billData of bills) {
    const bill = await db.bill.create({ data: { ...billData, userId: user.id } });
    await db.billEntry.create({
      data: {
        billId: bill.id,
        dueDate: new Date(now.getFullYear(), now.getMonth(), bill.dueDay),
        amountDue: bill.amount,
      },
    });
  }

  console.log("Seed complete.");
  console.log("Login: demo@example.com / password123");
}

seed().catch(console.error).finally(() => db.$disconnect());
