/*
  Warnings:

  - The primary key for the `LikedPost` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `userId` on the `LikedPost` table. All the data in the column will be lost.
  - Added the required column `username` to the `LikedPost` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_LikedPost" (
    "username" TEXT NOT NULL,
    "postId" INTEGER NOT NULL,

    PRIMARY KEY ("username", "postId"),
    CONSTRAINT "LikedPost_username_fkey" FOREIGN KEY ("username") REFERENCES "User" ("username") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "LikedPost_postId_fkey" FOREIGN KEY ("postId") REFERENCES "Post" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_LikedPost" ("postId") SELECT "postId" FROM "LikedPost";
DROP TABLE "LikedPost";
ALTER TABLE "new_LikedPost" RENAME TO "LikedPost";
CREATE UNIQUE INDEX "LikedPost_username_key" ON "LikedPost"("username");
CREATE UNIQUE INDEX "LikedPost_postId_key" ON "LikedPost"("postId");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
