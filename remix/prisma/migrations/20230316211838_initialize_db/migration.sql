/*
  Warnings:

  - Added the required column `frequency` to the `Recurring` table without a default value. This is not possible if the table is not empty.

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
INSERT INTO "new_Recurring" ("dueDate", "id", "name", "updatedAt") SELECT "dueDate", "id", "name", "updatedAt" FROM "Recurring";
DROP TABLE "Recurring";
ALTER TABLE "new_Recurring" RENAME TO "Recurring";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
