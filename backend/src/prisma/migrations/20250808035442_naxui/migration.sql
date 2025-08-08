-- CreateTable
CREATE TABLE "DislikedPost" (
    "username" TEXT NOT NULL,
    "postId" INTEGER NOT NULL,

    PRIMARY KEY ("username", "postId"),
    CONSTRAINT "DislikedPost_username_fkey" FOREIGN KEY ("username") REFERENCES "User" ("username") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "DislikedPost_postId_fkey" FOREIGN KEY ("postId") REFERENCES "Post" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
