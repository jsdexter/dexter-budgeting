import nodeCron from "node-cron";
import { prisma } from "~/db.server";

export function startCron() {
  nodeCron.schedule("0 0 * * *", async () => {
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth();
    const start = new Date(year, month, 1);
    const end = new Date(year, month + 1, 0, 23, 59, 59);

    const users = await prisma.user.findMany({ select: { id: true } });

    for (const user of users) {
      const bills = await prisma.bill.findMany({ where: { userId: user.id, isActive: true } });
      for (const bill of bills) {
        const existing = await prisma.billEntry.findFirst({
          where: { billId: bill.id, dueDate: { gte: start, lte: end } },
        });
        if (!existing) {
          await prisma.billEntry.create({
            data: {
              billId: bill.id,
              dueDate: new Date(year, month, bill.dueDay),
              amountDue: bill.amount,
            },
          });
          console.log(`[cron] Created entry: ${bill.name} (${month + 1}/${year})`);
        }
      }
    }
  });

  console.log("[cron] Daily midnight job scheduled");
}
