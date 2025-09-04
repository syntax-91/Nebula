import { db } from "../db.js";

export async function addPostService(data) {
  try {
    console.log("addPostService data >> ", data);

    const res = await db.post.create({
      data: {
        ownerUsername: data.ownerUsername,
        text: data.text,
      },
    });

    console.log("res result >> ", res);

    if (res == null) {
      return {
        success: true,
        msg: " недобавлено",
      };
    }

    return {
      success: true,
      msg: "добавлено",
      postId: res.id,
    };
  } catch (err) {
    console.log("ERROR - addPostService, err > ", err);
  }
}
