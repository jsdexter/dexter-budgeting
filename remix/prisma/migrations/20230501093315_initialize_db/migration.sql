/*
  Warnings:

  - You are about to drop the column `accountNumber` on the `Recurring` table. All the data in the column will be lost.
  - You are about to drop the column `address` on the `Recurring` table. All the data in the column will be lost.
  - You are about to drop the column `amountDue` on the `Recurring` table. All the data in the column will be lost.
  - You are about to drop the column `city` on the `Recurring` table. All the data in the column will be lost.
  - You are about to drop the column `isPaid` on the `Recurring` table. All the data in the column will be lost.
  - You are about to drop the column `state` on the `Recurring` table. All the data in the column will be lost.
  - You are about to drop the column `type` on the `Recurring` table. All the data in the column will be lost.
  - You are about to drop the column `zip` on the `Recurring` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Recurring" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "dueDate" DATETIME NOT NULL,
    "frequency" TEXT NOT NULL,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_Recurring" ("dueDate", "frequency", "id", "name", "updatedAt") SELECT "dueDate", "frequency", "id", "name", "updatedAt" FROM "Recurring";
DROP TABLE "Recurring";
ALTER TABLE "new_Recurring" RENAME TO "Recurring";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
