import { Prisma } from "../../generated/prisma/index.js";
import { db } from "../db.js";

export async function likeService(data) {
  try {
    console.log("likeService - data >> ", data);

    if (data.type == "liked") {
      const res = await db.likedPost.create({
        data: {
          username: data.username,
          postId: data.postId,
        },
      });

      return {
        success: res ? true : false,
        msg: res ? "норм" : "что-то пошло не так",
      };
    }

    if (data.type == "unlike") {
      const res = await db.likedPost.delete({
        where: {
          username_postId: {
            username: data.username,
            postId: data.postId,
          },
        },
      });

      return {
        success: res ? true : false,
        msg: res ? "норм" : "что-то пошло не так",
      };
    }
  } catch (err) {
    if (
      err instanceof Prisma.PrismaClientKnownRequestError &&
      err.code === "P2002"
    ) {
      return {
        success: false,
        msg: "вы уже поставили лайк!",
      };
    }

    console.log("ERROR - func likeService >> ", err);
  }
}

export async function likedPostsService(username) {
  try {
    const res = await db.likedPost.findMany({
      where: { username: username },
    });

    return {
      success: res ? true : false,
      msg: res ? "норм" : "что-то пошло не так",
      res: res,
    };
  } catch (err) {
    console.log("ERROR - func likedService >> ", err);
  }
}
