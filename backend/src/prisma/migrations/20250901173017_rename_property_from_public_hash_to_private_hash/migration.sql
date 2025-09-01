/*
  Warnings:

  - You are about to drop the column `type` on the `Post` table. All the data in the column will be lost.
  - You are about to drop the column `publicHash` on the `User` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Post" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "ownerUsername" TEXT,
    "text" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "Post_ownerUsername_fkey" FOREIGN KEY ("ownerUsername") REFERENCES "User" ("username") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Post" ("createdAt", "id", "ownerUsername", "text") SELECT "createdAt", "id", "ownerUsername", "text" FROM "Post";
DROP TABLE "Post";
ALTER TABLE "new_Post" RENAME TO "Post";
CREATE TABLE "new_User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "displayName" TEXT,
    "username" TEXT NOT NULL,
    "bio" TEXT,
    "password" TEXT NOT NULL,
    "privateHash" TEXT NOT NULL DEFAULT '',
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "ava" TEXT NOT NULL
);
INSERT INTO "new_User" ("ava", "bio", "createdAt", "displayName", "id", "password", "username") SELECT "ava", "bio", "createdAt", "displayName", "id", "password", "username" FROM "User";
DROP TABLE "User";
ALTER TABLE "new_User" RENAME TO "User";
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
