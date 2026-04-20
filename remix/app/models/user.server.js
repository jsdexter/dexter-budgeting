import bcrypt from "bcryptjs";
import { prisma } from "~/db.server";

export function getUserById(id) {
  return prisma.user.findUnique({ where: { id } });
}

export function getUserByEmail(email) {
  return prisma.user.findUnique({ where: { email } });
}

export async function createUser(email, password) {
  const passwordHash = await bcrypt.hash(password, 10);
  return prisma.user.create({ data: { email, passwordHash } });
}

export async function verifyLogin(email, password) {
  const user = await getUserByEmail(email);
  if (!user) return null;
  const valid = await bcrypt.compare(password, user.passwordHash);
  return valid ? user : null;
}

export function deleteUser(id) {
  return prisma.user.delete({ where: { id } });
}
