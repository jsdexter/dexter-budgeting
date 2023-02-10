-- CreateTable
CREATE TABLE "Transaction" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "dueDate" DATETIME NOT NULL,
    "address" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "zip" TEXT NOT NULL,
    "accountNumber" TEXT NOT NULL,
    "amountDue" REAL NOT NULL,
    "month" TEXT NOT NULL DEFAULT 'monthly',
    "type" TEXT NOT NULL,
    "isPaid" BOOLEAN NOT NULL DEFAULT false
);
