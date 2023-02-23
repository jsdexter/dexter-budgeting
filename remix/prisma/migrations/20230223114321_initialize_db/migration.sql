/*
  Warnings:

  - Added the required column `deletedAt` to the `Transaction` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Transaction" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "dueDate" DATETIME NOT NULL,
    "address" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "zip" TEXT NOT NULL,
    "accountNumber" TEXT NOT NULL,
    "amountDue" REAL NOT NULL,
    "frequency" TEXT NOT NULL DEFAULT 'monthly',
    "type" TEXT NOT NULL,
    "isPaid" BOOLEAN NOT NULL DEFAULT false,
    "deletedAt" DATETIME NOT NULL,
    "isDeleted" BOOLEAN NOT NULL DEFAULT false
);
INSERT INTO "new_Transaction" ("accountNumber", "address", "amountDue", "city", "dueDate", "frequency", "id", "isPaid", "name", "state", "type", "zip") SELECT "accountNumber", "address", "amountDue", "city", "dueDate", "frequency", "id", "isPaid", "name", "state", "type", "zip" FROM "Transaction";
DROP TABLE "Transaction";
ALTER TABLE "new_Transaction" RENAME TO "Transaction";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
