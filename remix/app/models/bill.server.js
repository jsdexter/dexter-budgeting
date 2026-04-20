import { prisma } from "~/db.server";

export function getBills(userId) {
  return prisma.bill.findMany({
    where: { userId, isActive: true },
    include: { category: true },
    orderBy: { dueDay: "asc" },
  });
}

export function getBillById(id, userId) {
  return prisma.bill.findFirst({
    where: { id, userId },
    include: {
      category: true,
      entries: { orderBy: { dueDate: "desc" }, take: 6 },
    },
  });
}

export function createBill(userId, data) {
  return prisma.bill.create({ data: { ...data, userId } });
}

export function updateBill(id, userId, data) {
  return prisma.bill.update({ where: { id }, data });
}

export function deactivateBill(id, userId) {
  return prisma.bill.update({ where: { id }, data: { isActive: false } });
}
