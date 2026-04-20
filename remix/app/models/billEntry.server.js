import { prisma } from "~/db.server";

export function getEntriesForMonth(userId, year, month) {
  const start = new Date(year, month, 1);
  const end = new Date(year, month + 1, 0, 23, 59, 59);
  return prisma.billEntry.findMany({
    where: {
      bill: { userId },
      dueDate: { gte: start, lte: end },
    },
    include: { bill: { include: { category: true } } },
    orderBy: { dueDate: "asc" },
  });
}

export function markPaid(id, paidAmount) {
  return prisma.billEntry.update({
    where: { id },
    data: { isPaid: true, paidDate: new Date(), paidAmount: paidAmount ?? null },
  });
}

export function markUnpaid(id) {
  return prisma.billEntry.update({
    where: { id },
    data: { isPaid: false, paidDate: null, paidAmount: null },
  });
}

export async function ensureEntriesForMonth(userId, year, month) {
  const bills = await prisma.bill.findMany({ where: { userId, isActive: true } });
  const start = new Date(year, month, 1);
  const end = new Date(year, month + 1, 0, 23, 59, 59);

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
    }
  }
}
