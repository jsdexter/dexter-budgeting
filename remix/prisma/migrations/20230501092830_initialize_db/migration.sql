/*
  Warnings:

  - Added the required column `accountNumber` to the `Recurring` table without a default value. This is not possible if the table is not empty.
  - Added the required column `address` to the `Recurring` table without a default value. This is not possible if the table is not empty.
  - Added the required column `amountDue` to the `Recurring` table without a default value. This is not possible if the table is not empty.
  - Added the required column `city` to the `Recurring` table without a default value. This is not possible if the table is not empty.
  - Added the required column `state` to the `Recurring` table without a default value. This is not possible if the table is not empty.
  - Added the required column `type` to the `Recurring` table without a default value. This is not possible if the table is not empty.
  - Added the required column `zip` to the `Recurring` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Recurring" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "dueDate" DATETIME NOT NULL,
    "address" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "zip" TEXT NOT NULL,
    "accountNumber" TEXT NOT NULL,
    "amountDue" REAL NOT NULL,
    "frequency" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "isPaid" BOOLEAN NOT NULL DEFAULT false,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_Recurring" ("dueDate", "frequency", "id", "name", "updatedAt") SELECT "dueDate", "frequency", "id", "name", "updatedAt" FROM "Recurring";
DROP TABLE "Recurring";
ALTER TABLE "new_Recurring" RENAME TO "Recurring";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
