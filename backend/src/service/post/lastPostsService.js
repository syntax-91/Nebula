import { db } from "../db.js";

export async function lastPostsService() {
  try {
    const res = await db.post.findMany({
      take: 20, // лимит
      orderBy: {
        createdAt: "desc", // desc - самые новые вервыми
      },
      select: {
        id: true,
        likedBy: true,
        text: true,
        ownerUsername: true,
        createdAt: true,
        owner: true,

        _count: {
          select: {
            likedBy: true,
            dislikedBy: true,
          },
        },
      },
    });

    return res;
  } catch (err) {
    console.log("ERROR - lastPostsService >> ", err);
  }
}
