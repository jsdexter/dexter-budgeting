import { prisma } from "~/db.server";

export function getCategories(userId) {
  return prisma.category.findMany({
    where: { userId },
    orderBy: { name: "asc" },
  });
}

export function createCategory(userId, name, color) {
  return prisma.category.create({ data: { userId, name, color } });
}

export function deleteCategory(id) {
  return prisma.category.delete({ where: { id } });
}
