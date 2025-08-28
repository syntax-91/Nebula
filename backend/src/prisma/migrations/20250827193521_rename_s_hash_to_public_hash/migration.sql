/*
  Warnings:

  - You are about to drop the column `sHash` on the `User` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "displayName" TEXT,
    "username" TEXT NOT NULL,
    "bio" TEXT,
    "password" TEXT NOT NULL,
    "publicHash" TEXT NOT NULL DEFAULT '',
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "ava" TEXT NOT NULL
);
INSERT INTO "new_User" ("ava", "bio", "createdAt", "displayName", "id", "password", "username") SELECT "ava", "bio", "createdAt", "displayName", "id", "password", "username" FROM "User";
DROP TABLE "User";
ALTER TABLE "new_User" RENAME TO "User";
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
